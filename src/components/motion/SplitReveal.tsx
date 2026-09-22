"use client";

import { Fragment, type ElementType } from "react";
import { useGsapEffect } from "@/lib/gsap";
import { GSAP_EASE } from "@/lib/motion";

interface SplitRevealProps {
  /** Texto a animar. Se divide por palabras, sin alterar el contenido. */
  text: string;
  as?: ElementType;
  className?: string;
  /** Retraso inicial, en segundos. */
  delay?: number;
  /** `true` para animar al montar (hero) en vez de al entrar en viewport. */
  immediate?: boolean;
}

/**
 * Titular que entra palabra por palabra, empujado desde abajo detrás de una
 * máscara. El texto se renderiza completo en el HTML, así que sigue siendo
 * legible sin JavaScript y para lectores de pantalla.
 */
export function SplitReveal({
  text,
  as: Component = "h2",
  className = "",
  delay = 0,
  immediate = false,
}: SplitRevealProps) {
  const scope = useGsapEffect<HTMLElement>(({ scope, gsap }) => {
    const words = scope.querySelectorAll<HTMLElement>("[data-word]");
    if (!words.length) return;

    // 135 y no 110: la máscara ahora es más alta que la línea (ver abajo), así
    // que la palabra tiene que arrancar más abajo para quedar realmente oculta.
    gsap.set(words, { yPercent: 135, opacity: 0 });
    gsap.to(words, {
      yPercent: 0,
      opacity: 1,
      duration: 0.9,
      delay,
      ease: GSAP_EASE.expo,
      stagger: 0.045,
      ...(immediate
        ? {}
        : {
            scrollTrigger: {
              trigger: scope,
              start: "top 85%",
              once: true,
            },
          }),
    });
  }, [text, delay, immediate]);

  const words = text.split(" ");

  return (
    <Component ref={scope} className={className}>
      {words.map((word, i) => (
        <Fragment key={`${word}-${i}`}>
          {/*
            El recorte se agranda hacia abajo con `pb`, y el `-mb` equivalente
            devuelve la altura original a la línea. Sin esto, los títulos con
            interlineado ajustado cortaban las colas de la g, la j y la y.
          */}
          <span className="inline-block overflow-hidden align-bottom pb-[0.24em] -mb-[0.24em]">
            <span data-word className="inline-block will-change-transform">
              {word}
            </span>
          </span>
          {/* Espacio real entre palabras: conserva el salto de línea natural y
              evita que el texto copiado arrastre espacios duros. */}
          {i < words.length - 1 ? " " : ""}
        </Fragment>
      ))}
    </Component>
  );
}
