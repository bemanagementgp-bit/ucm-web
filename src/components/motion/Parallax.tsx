"use client";

import { type ReactNode } from "react";
import { useGsapEffect } from "@/lib/gsap";

interface ParallaxProps {
  children: ReactNode;
  /** Desplazamiento total a lo largo del recorrido, en píxeles. Negativo = sube. */
  amount?: number;
  /** Escala inicial; vuelve a 1 al llegar al centro del viewport. */
  zoom?: number;
  className?: string;
}

/** Desplaza su contenido a distinta velocidad que el scroll. */
export function Parallax({ children, amount = -60, zoom, className = "" }: ParallaxProps) {
  const scope = useGsapEffect<HTMLDivElement>(({ scope, gsap }) => {
    const target = scope.firstElementChild ?? scope;

    gsap.fromTo(
      target,
      { y: -amount / 2, ...(zoom ? { scale: zoom } : {}) },
      {
        y: amount / 2,
        ...(zoom ? { scale: 1 } : {}),
        ease: "none",
        scrollTrigger: {
          trigger: scope,
          start: "top bottom",
          end: "bottom top",
          scrub: 1,
        },
      }
    );
  }, [amount, zoom]);

  return (
    <div ref={scope} className={className}>
      {children}
    </div>
  );
}
