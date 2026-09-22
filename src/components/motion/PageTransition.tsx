"use client";

import { useEffect, type ReactNode } from "react";
import { motion } from "framer-motion";
import { usePathname } from "next/navigation";
import { EASE } from "@/lib/motion";
import { ScrollTrigger, registerGsap } from "@/lib/gsap";

/**
 * Por defecto Next conserva la posición del scroll al navegar si el contenido
 * de la página nueva ya se ve en pantalla. Esta bandera, a nivel de módulo,
 * distingue la primera carga del documento (donde hay que respetar la posición
 * que restaura el navegador) de una navegación posterior.
 *
 * Vive fuera del componente a propósito: `template.tsx` se vuelve a montar en
 * cada navegación, así que un `useRef` se reiniciaría siempre.
 */
let isFirstLoad = true;

/**
 * Fundido de entrada en cada navegación, y vuelta al principio de la página.
 *
 * Se anima únicamente la opacidad: una transformación en este envoltorio
 * crearía un bloque contenedor y rompería los elementos `fixed` que viven
 * dentro de las páginas (por ejemplo, el modal de /unidad).
 */
export function PageTransition({ children }: { children: ReactNode }) {
  const pathname = usePathname();

  useEffect(() => {
    registerGsap();

    if (isFirstLoad) {
      isFirstLoad = false;
    } else if (!window.location.hash) {
      // Sin ancla, cada página arranca desde arriba. `instant` pisa el
      // `scroll-behavior: smooth` del documento, para que no se vea el viaje.
      window.scrollTo({ top: 0, left: 0, behavior: "instant" });
    }

    // Tras cambiar de ruta, las medidas de los disparadores quedan obsoletas.
    const id = window.requestAnimationFrame(() => ScrollTrigger.refresh());
    return () => window.cancelAnimationFrame(id);
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
