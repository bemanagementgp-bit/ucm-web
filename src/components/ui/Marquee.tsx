"use client";

import Image from "next/image";
import { useGsapEffect } from "@/lib/gsap";

interface MarqueeProps {
  /** Textos que se repiten en la cinta. */
  items: string[];
  /** Segundos que tarda la cinta en recorrer un ciclo completo. */
  duration?: number;
  className?: string;
}

/**
 * Cinta horizontal infinita con la flor de marca como separador.
 *
 * La lista se renderiza dos veces y se desplaza media pista: al completar el
 * ciclo, la segunda copia queda exactamente donde estaba la primera, así que
 * el salto es invisible. Sin JavaScript, la cinta simplemente queda quieta.
 */
export function Marquee({ items, duration = 38, className = "" }: MarqueeProps) {
  const scope = useGsapEffect<HTMLDivElement>(({ scope, gsap }) => {
    const track = scope.querySelector<HTMLElement>("[data-track]");
    if (!track) return;

    const tween = gsap.to(track, {
      xPercent: -50,
      duration,
      ease: "none",
      repeat: -1,
    });

    // Se frena al pasar el puntero para poder leerla.
    const slow = () => gsap.to(tween, { timeScale: 0.25, duration: 0.6 });
    const resume = () => gsap.to(tween, { timeScale: 1, duration: 0.6 });
    scope.addEventListener("pointerenter", slow);
    scope.addEventListener("pointerleave", resume);

    return () => {
      scope.removeEventListener("pointerenter", slow);
      scope.removeEventListener("pointerleave", resume);
    };
  }, [items.join("|"), duration]);

  // Dos copias seguidas: la animación recorre exactamente una de ellas.
  const loop = [...items, ...items];

  return (
    <div
      ref={scope}
      className={`relative overflow-hidden ${className}`}
      // Los extremos se desvanecen para que la cinta no "choque" con el borde.
      style={{
        maskImage:
          "linear-gradient(to right, transparent, black 12%, black 88%, transparent)",
        WebkitMaskImage:
          "linear-gradient(to right, transparent, black 12%, black 88%, transparent)",
      }}
      aria-hidden="true"
    >
      <div data-track className="flex w-max items-center will-change-transform">
        {loop.map((item, i) => (
          <div key={`${item}-${i}`} className="flex items-center shrink-0">
            {/*
              `leading-[1.3]` es necesario: las escalas grandes de Tailwind
              traen `line-height: 1`, y con el recorte de la cinta eso cortaba
              las colas de la g y la y.
            */}
            <span className="px-6 md:px-9 text-3xl md:text-5xl lg:text-[3.5rem] leading-[1.3] font-bold text-violet-deep/70 tracking-[-0.02em] whitespace-nowrap">
              {item}
            </span>
            <Image
              src="/elemento-flor.svg"
              alt=""
              width={40}
              height={40}
              className="w-7 h-7 md:w-9 md:h-9 shrink-0 opacity-50"
            />
          </div>
        ))}
      </div>
    </div>
  );
}
