"use client";

import { type ReactNode } from "react";
import { useGsapEffect } from "@/lib/gsap";
import { GSAP_EASE } from "@/lib/motion";

export interface ProcessStep {
  step: string;
  label: string;
  desc: string;
  icon?: ReactNode;
}

interface ProcessStepsProps {
  steps: ProcessStep[];
  className?: string;
}

/**
 * Recorrido en pasos. Al entrar en pantalla, una línea se dibuja de izquierda
 * a derecha y las tarjetas aparecen encadenadas detrás de ella.
 */
export function ProcessSteps({ steps, className = "" }: ProcessStepsProps) {
  const scope = useGsapEffect<HTMLDivElement>(({ scope, gsap }) => {
    const line = scope.querySelector<HTMLElement>("[data-line]");
    const cards = scope.querySelectorAll<HTMLElement>("[data-step-card]");
    const numbers = scope.querySelectorAll<HTMLElement>("[data-step-number]");

    const tl = gsap.timeline({
      scrollTrigger: { trigger: scope, start: "top 80%", once: true },
    });

    if (line) {
      tl.fromTo(
        line,
        { scaleX: 0 },
        { scaleX: 1, duration: 1.1, ease: GSAP_EASE.inOut },
        0
      );
    }

    tl.fromTo(
      cards,
      { y: 34, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.75, ease: GSAP_EASE.expo, stagger: 0.1 },
      0.15
    );

    tl.fromTo(
      numbers,
      { opacity: 0, scale: 0.7 },
      { opacity: 1, scale: 1, duration: 0.5, ease: "back.out(2)", stagger: 0.1 },
      0.3
    );
  }, [steps.length]);

  return (
    <div ref={scope} className={`relative ${className}`}>
      {/* Línea conectora: sólo visible cuando los pasos van en una fila. */}
      <div
        className="hidden md:block absolute top-[2.65rem] left-[10%] right-[10%] h-px bg-primary/20 origin-left"
        data-line
        aria-hidden="true"
      />

      <ol className="relative grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4">
        {steps.map((item) => (
          <li key={item.step} data-step-card className="h-full">
            <div className="glass-card is-interactive rounded-3xl p-5 h-full text-center flex flex-col items-center">
              <span
                data-step-number
                className="inline-flex items-center justify-center w-11 h-11 rounded-full bg-white/70 border border-primary/15 text-sm font-bold text-primary mb-3 shadow-[0_2px_10px_rgba(217,143,168,0.18)]"
              >
                {item.icon ?? item.step}
              </span>
              <h3 className="font-semibold text-text-primary text-sm leading-snug">
                {item.label}
              </h3>
              <p className="text-xs text-text-secondary mt-1.5 leading-relaxed text-pretty">
                {item.desc}
              </p>
            </div>
          </li>
        ))}
      </ol>
    </div>
  );
}
