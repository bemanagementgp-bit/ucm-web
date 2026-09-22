import type { Transition, Variants } from "framer-motion";

/**
 * Curvas y tiempos compartidos por toda la capa de animación.
 * `expo` es la curva base del sitio: arranque rápido, frenada larga y suave.
 */
export const EASE = {
  expo: [0.16, 1, 0.3, 1],
  soft: [0.25, 0.46, 0.45, 0.94],
  inOut: [0.65, 0, 0.35, 1],
} as const;

/** Equivalentes en string para GSAP (mismas curvas que arriba). */
export const GSAP_EASE = {
  expo: "expo.out",
  soft: "power2.out",
  inOut: "power3.inOut",
} as const;

export const DURATION = {
  fast: 0.35,
  base: 0.6,
  slow: 0.9,
} as const;

export const transition: Transition = {
  duration: DURATION.base,
  ease: EASE.expo,
};

/** Contenedor que escalona la entrada de sus hijos. */
export const staggerContainer = (stagger = 0.08, delayChildren = 0): Variants => ({
  hidden: {},
  visible: {
    transition: { staggerChildren: stagger, delayChildren },
  },
});

/** Entrada estándar: sube y aparece. */
export const fadeUp = (distance = 24): Variants => ({
  hidden: { opacity: 0, y: distance },
  visible: { opacity: 1, y: 0, transition },
});

export const fadeIn: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition },
};

export const scaleIn: Variants = {
  hidden: { opacity: 0, scale: 0.96 },
  visible: { opacity: 1, scale: 1, transition },
};

/**
 * Disparo de los `whileInView`.
 *
 * `amount: "some"` y no una proporción: pedir que se vea un porcentaje del
 * elemento es imposible de cumplir cuando el bloque es mucho más alto que la
 * pantalla. Con una grilla de una sola columna en móviles, un grupo de
 * ~3900px sobre una pantalla de 844px sólo puede llegar a mostrar el 19% de
 * sí mismo, por debajo del 20% que se pedía antes: la animación no se
 * disparaba nunca y el contenido quedaba invisible.
 *
 * El margen inferior negativo conserva la idea original: la entrada arranca
 * cuando el elemento ya está francamente dentro de la pantalla, no apenas
 * asoma por el borde.
 */
export const VIEWPORT = { once: true, amount: "some", margin: "0px 0px -12% 0px" } as const;
