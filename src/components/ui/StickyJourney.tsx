"use client";

import { useEffect, useRef, useState, type ReactNode } from "react";
import { motion } from "framer-motion";
import { EASE } from "@/lib/motion";

export interface JourneyStep {
  label: string;
  desc: string;
  icon: ReactNode;
}

interface StickyJourneyProps {
  steps: JourneyStep[];
  className?: string;
}

/**
 * Recorrido en etapas: a la izquierda queda fija la lista de pasos, que se va
 * marcando sola mientras a la derecha pasan las tarjetas.
 *
 * El paso activo se detecta con un IntersectionObserver (no con GSAP) a
 * propósito: así la lista sigue funcionando también con el movimiento reducido.
 */
export function StickyJourney({ steps, className = "" }: StickyJourneyProps) {
  const [active, setActive] = useState(0);
  const cardRefs = useRef<(HTMLLIElement | null)[]>([]);

  useEffect(() => {
    const nodes = () => cardRefs.current.filter(Boolean) as HTMLLIElement[];
    let frame = 0;

    /*
      El paso activo es el de la tarjeta cuyo centro queda más cerca de una
      línea de referencia, un poco por encima del medio de la pantalla.
      Medirlo así en cada cuadro mantiene la lista en sincronía con el scroll;
      con un IntersectionObserver el cambio llegaba tarde, porque sólo avisa al
      cruzar un umbral y no dice cuál de las tarjetas visibles manda.
    */
    const measure = () => {
      frame = 0;
      const cards = nodes();
      if (!cards.length) return;

      const line = window.innerHeight * 0.45;
      let best = 0;
      let bestDistance = Number.POSITIVE_INFINITY;

      cards.forEach((card, index) => {
        const rect = card.getBoundingClientRect();
        const distance = Math.abs(rect.top + rect.height / 2 - line);
        if (distance < bestDistance) {
          bestDistance = distance;
          best = index;
        }
      });

      setActive((current) => (current === best ? current : best));
    };

    const onScroll = () => {
      // Se mide una sola vez por cuadro, no en cada evento de scroll.
      if (!frame) frame = window.requestAnimationFrame(measure);
    };

    measure();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      if (frame) window.cancelAnimationFrame(frame);
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, [steps.length]);

  return (
    <div className={`lg:grid lg:grid-cols-[minmax(0,17rem)_1fr] lg:gap-12 ${className}`}>
      {/*
        Lista de pasos. Es un indicador visual de avance: repite las etiquetas
        de las tarjetas, así que se oculta a los lectores de pantalla para no
        leer dos veces la misma lista.
      */}
      <div className="lg:sticky lg:top-32 lg:self-start" aria-hidden="true">
        <ol className="flex lg:flex-col gap-2 overflow-x-auto lg:overflow-visible pb-2 lg:pb-0">
          {steps.map((step, i) => {
            const isActive = i === active;
            return (
              <li key={step.label} className="shrink-0">
                <div
                  className={`relative flex items-center gap-2.5 rounded-full px-4 py-2.5 text-sm font-medium transition-colors duration-500 ${
                    isActive
                      ? "text-white"
                      : "text-text-secondary bg-white/60 border border-primary-light/40"
                  }`}
                >
                  {isActive && (
                    <motion.span
                      layoutId="journey-active"
                      transition={{ duration: 0.45, ease: EASE.expo }}
                      className="absolute inset-0 rounded-full bg-violet-deep"
                      aria-hidden="true"
                    />
                  )}
                  <span
                    className={`relative w-1.5 h-1.5 rounded-full shrink-0 ${
                      isActive ? "bg-white" : "bg-primary"
                    }`}
                    aria-hidden="true"
                  />
                  <span className="relative whitespace-nowrap">{step.label}</span>
                </div>
              </li>
            );
          })}
        </ol>
      </div>

      {/* Tarjetas */}
      <ol className="mt-8 lg:mt-0 space-y-4">
        {steps.map((step, i) => (
          <motion.li
            key={step.label}
            ref={(node) => {
              cardRefs.current[i] = node;
            }}
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.35 }}
            transition={{ duration: 0.6, ease: EASE.expo }}
            className={`glass-card rounded-3xl p-6 md:p-8 transition-colors duration-500 ${
              i === active ? "bg-white/80 border-primary/25" : ""
            }`}
          >
            <div className="flex items-start gap-5">
              <span
                className="shrink-0 inline-flex items-center justify-center w-12 h-12 rounded-2xl bg-primary-lightest border border-primary-light/50"
                aria-hidden="true"
              >
                {step.icon}
              </span>
              <div>
                <span className="text-xs font-semibold text-violet tracking-[0.14em] uppercase">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h3 className="text-lg md:text-xl font-bold text-text-primary mt-1.5 leading-snug text-balance">
                  {step.label}
                </h3>
                <p className="text-sm md:text-base text-text-secondary mt-2 leading-relaxed text-pretty">
                  {step.desc}
                </p>
              </div>
            </div>
          </motion.li>
        ))}
      </ol>
    </div>
  );
}
