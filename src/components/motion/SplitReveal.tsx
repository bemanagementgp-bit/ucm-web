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

    gsap.set(words, { yPercent: 110, opacity: 0 });
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
          <span className="inline-block overflow-hidden align-bottom">
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
