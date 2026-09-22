"use client";

import { useCallback, useEffect, useRef, useState, type ReactNode } from "react";
import { HiArrowLeft, HiArrowRight } from "react-icons/hi2";

interface CarouselProps {
  children: ReactNode;
  /** Texto para lectores de pantalla que describe qué contiene la pista. */
  label: string;
  /** Contenido alineado a la derecha de los controles (p. ej. un "Ver todos"). */
  action?: ReactNode;
  className?: string;
}

/**
 * Pista horizontal con desplazamiento por tarjetas.
 *
 * Usa el scroll nativo con puntos de anclaje, así que funciona con el dedo, la
 * rueda y el teclado aunque los botones no lleguen a montarse; los botones sólo
 * agregan comodidad y se desactivan al llegar a cada extremo.
 */
export function Carousel({ children, label, action, className = "" }: CarouselProps) {
  const trackRef = useRef<HTMLDivElement>(null);
  const [atStart, setAtStart] = useState(true);
  const [atEnd, setAtEnd] = useState(false);

  const sync = useCallback(() => {
    const track = trackRef.current;
    if (!track) return;
    const max = track.scrollWidth - track.clientWidth;
    setAtStart(track.scrollLeft <= 2);
    setAtEnd(track.scrollLeft >= max - 2);
  }, []);

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;
    sync();
    track.addEventListener("scroll", sync, { passive: true });
    window.addEventListener("resize", sync);
    return () => {
      track.removeEventListener("scroll", sync);
      window.removeEventListener("resize", sync);
    };
  }, [sync]);

  const scrollByCard = (direction: 1 | -1) => {
    const track = trackRef.current;
    if (!track) return;
    // Se desplaza el ancho de una tarjeta, tomándolo del primer hijo.
    const card = track.firstElementChild as HTMLElement | null;
    const step = card ? card.offsetWidth + 24 : track.clientWidth * 0.8;
    track.scrollBy({ left: step * direction, behavior: "smooth" });
  };

  return (
    <div className={className}>
      <div
        ref={trackRef}
        role="region"
        aria-label={label}
        tabIndex={0}
        className="flex gap-6 overflow-x-auto snap-x snap-mandatory pb-2 -mx-4 px-4 sm:-mx-6 sm:px-6 lg:mx-0 lg:px-0 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
      >
        {children}
      </div>

      {/* En pantallas angostas el enlace se apila arriba para no apretar los controles. */}
      <div className="mt-8 flex flex-col-reverse sm:flex-row sm:items-center sm:justify-between gap-4">
        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={() => scrollByCard(-1)}
            disabled={atStart}
            aria-label="Ver anteriores"
            className="w-11 h-11 rounded-full border border-violet-deep/20 bg-white/70 text-violet-deep flex items-center justify-center transition-all duration-300 hover:bg-white hover:border-violet-deep/40 disabled:opacity-35 disabled:cursor-not-allowed cursor-pointer"
          >
            <HiArrowLeft className="w-4 h-4" />
          </button>
          <button
            type="button"
            onClick={() => scrollByCard(1)}
            disabled={atEnd}
            aria-label="Ver siguientes"
            className="w-11 h-11 rounded-full border border-violet-deep/20 bg-white/70 text-violet-deep flex items-center justify-center transition-all duration-300 hover:bg-white hover:border-violet-deep/40 disabled:opacity-35 disabled:cursor-not-allowed cursor-pointer"
          >
            <HiArrowRight className="w-4 h-4" />
          </button>
        </div>
        {action}
      </div>
    </div>
  );
}
