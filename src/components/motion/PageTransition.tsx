"use client";

import { useEffect, type ReactNode } from "react";
import { motion } from "framer-motion";
import { usePathname } from "next/navigation";
import { EASE } from "@/lib/motion";
import { ScrollTrigger, registerGsap } from "@/lib/gsap";

/**
 * Distingue la primera carga del documento —donde hay que respetar la posición
 * que restaura el navegador— de una navegación posterior.
 *
 * Vive fuera del componente a propósito: `template.tsx` se vuelve a montar en
 * cada navegación, así que un `useRef` se reiniciaría siempre.
 */
let isFirstLoad = true;

/**
 * Se levanta cuando la navegación viene de atrás/adelante del navegador. En ese
 * caso NO hay que subir al tope: la persona espera volver justo donde estaba
 * —por ejemplo, al punto del listado de profesionales desde donde entró a una
 * ficha— y no tener que bajar todo otra vez para abrir la siguiente.
 */
let isBackForward = false;
let historyTracked = false;

/** Cuánto tiempo se sostiene la página arriba tras navegar, en milisegundos. */
const PIN_TO_TOP_MS = 300;

/** Margen para bajar la bandera si el `popstate` no deriva en cambio de ruta. */
const BACK_FORWARD_GRACE_MS = 600;

/** Registra una sola vez el seguimiento de atrás/adelante. */
function trackHistoryNavigation() {
  if (historyTracked || typeof window === "undefined") return;
  historyTracked = true;
  window.addEventListener("popstate", () => {
    isBackForward = true;
    // Red de seguridad: un `popstate` que no cambia de ruta (por ejemplo, sólo
    // el ancla) no debe dejar la bandera levantada para la próxima navegación.
    window.setTimeout(() => {
      isBackForward = false;
    }, BACK_FORWARD_GRACE_MS);
  });
}

/**
 * Fundido de entrada en cada navegación, y vuelta al principio de la página.
 *
 * Lo del scroll necesita insistir, no basta con un `scrollTo` y listo: Next
 * reposiciona el scroll por su cuenta *después* de este efecto, y cuando decide
 * conservar la posición anterior, en una página más corta que la previa esa
 * posición se recorta contra el final y la persona aterriza en el pie. Por eso
 * se vuelve a fijar el tope durante unos cuadros, hasta que Next termina.
 *
 * Se corta apenas la persona toca el scroll, para no pelearle si quiso bajar
 * enseguida; y no se toca nada cuando el enlace trae ancla, que debe mandar.
 *
 * Se anima únicamente la opacidad: una transformación en este envoltorio
 * crearía un bloque contenedor y rompería los elementos `fixed` que viven
 * dentro de las páginas (por ejemplo, el modal de /unidad).
 */
export function PageTransition({ children }: { children: ReactNode }) {
  const pathname = usePathname();

  useEffect(() => {
    registerGsap();
    trackHistoryNavigation();

    const cleanups: (() => void)[] = [];
    const cameFromHistory = isBackForward;
    isBackForward = false;

    if (isFirstLoad) {
      isFirstLoad = false;
    } else if (cameFromHistory) {
      // Atrás/adelante: se deja que el navegador restaure la posición.
    } else if (!window.location.hash) {
      let frame = 0;
      let stopped = false;
      const deadline = performance.now() + PIN_TO_TOP_MS;

      const toTop = () => {
        if (window.scrollY !== 0) {
          // `instant` pisa el `scroll-behavior: smooth` del documento.
          window.scrollTo({ top: 0, left: 0, behavior: "instant" });
        }
      };

      const stop = () => {
        stopped = true;
      };
      // Un gesto de la persona manda: a partir de ahí se deja de insistir.
      const userEvents = ["wheel", "touchstart", "keydown"] as const;
      userEvents.forEach((type) => window.addEventListener(type, stop, { passive: true }));

      /*
        El evento de scroll llega antes del repintado, así que corregir acá
        evita que se llegue a ver el salto: si sólo se esperara al siguiente
        cuadro, quedaba una ventana de unos milisegundos en la que la página
        ya estaba abajo.
      */
      const onScroll = () => {
        if (!stopped) toTop();
      };
      window.addEventListener("scroll", onScroll);

      const pinToTop = () => {
        if (stopped) return;
        toTop();
        if (performance.now() < deadline) frame = window.requestAnimationFrame(pinToTop);
      };
      pinToTop();

      cleanups.push(() => {
        stopped = true;
        if (frame) window.cancelAnimationFrame(frame);
        window.removeEventListener("scroll", onScroll);
        userEvents.forEach((type) => window.removeEventListener(type, stop));
      });
    }

    // Tras cambiar de ruta, las medidas de los disparadores quedan obsoletas.
    const refreshFrame = window.requestAnimationFrame(() => ScrollTrigger.refresh());
    cleanups.push(() => window.cancelAnimationFrame(refreshFrame));

    return () => cleanups.forEach((fn) => fn());
  }, [pathname]);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.45, ease: EASE.expo }}
    >
      {children}
    </motion.div>
  );
}
