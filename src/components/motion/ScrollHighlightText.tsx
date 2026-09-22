"use client";

import { Fragment, type ElementType } from "react";
import { useGsapEffect } from "@/lib/gsap";

interface ScrollHighlightTextProps {
  text: string;
  as?: ElementType;
  className?: string;
}

/**
 * Párrafo que se "enciende" palabra por palabra a medida que la persona
 * recorre la sección: arranca en un gris tenue y va tomando el color de texto
 * de marca, atado al scroll.
 *
 * El texto se renderiza completo, así que sin JavaScript o con movimiento
 * reducido queda legible en el color final.
 */
export function ScrollHighlightText({
  text,
  as: Component = "p",
  className = "",
}: ScrollHighlightTextProps) {
  const scope = useGsapEffect<HTMLElement>(({ scope, gsap }) => {
    const words = scope.querySelectorAll<HTMLElement>("[data-word]");
    if (!words.length) return;

    gsap.fromTo(
      words,
      { opacity: 0.3 },
      {
        opacity: 1,
        ease: "none",
        stagger: 0.4,
        scrollTrigger: {
          trigger: scope,
          // Termina cuando el párrafo llega al centro de la pantalla: antes se
          // completaba tan tarde que las últimas palabras nunca se veían
          // encendidas mientras se lo estaba leyendo.
          start: "top 92%",
          end: "center 52%",
          scrub: 0.6,
        },
      }
    );
  }, [text]);

  const words = text.split(" ");

  return (
    <Component ref={scope} className={className}>
      {words.map((word, i) => (
        <Fragment key={`${word}-${i}`}>
          <span data-word className="inline-block">
            {word}
          </span>
          {i < words.length - 1 ? " " : ""}
        </Fragment>
      ))}
    </Component>
  );
}
