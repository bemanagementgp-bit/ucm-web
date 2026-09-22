"use client";

import { useEffect, useLayoutEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

let registered = false;

/** Registra los plugins una sola vez, del lado del cliente. */
export function registerGsap() {
  if (registered || typeof window === "undefined") return;
  gsap.registerPlugin(ScrollTrigger);
  registered = true;
}

/** `useLayoutEffect` que no rompe en el render del servidor. */
export const useIsomorphicLayoutEffect =
  typeof window !== "undefined" ? useLayoutEffect : useEffect;

/**
 * Corre una animación de GSAP dentro de un `context` acotado al nodo devuelto,
 * con limpieza automática. La animación se salta por completo si la persona
 * pidió reducir el movimiento (`prefers-reduced-motion`).
 */
export function useGsapEffect<T extends HTMLElement = HTMLDivElement>(
  setup: (ctx: { scope: T; gsap: typeof gsap; ScrollTrigger: typeof ScrollTrigger }) => void,
  deps: unknown[] = []
) {
  const scope = useRef<T>(null);

  useIsomorphicLayoutEffect(() => {
    const node = scope.current;
    if (!node) return;

    registerGsap();

    const mm = gsap.matchMedia();
    mm.add("(prefers-reduced-motion: no-preference)", () => {
      const ctx = gsap.context(() => setup({ scope: node, gsap, ScrollTrigger }), node);
      return () => ctx.revert();
    });

    return () => mm.revert();
  }, deps);

  return scope;
}

export { gsap, ScrollTrigger };
