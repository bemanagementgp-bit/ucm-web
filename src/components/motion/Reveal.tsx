"use client";

import { motion, type HTMLMotionProps } from "framer-motion";
import { type ReactNode } from "react";
import { EASE, VIEWPORT, staggerContainer } from "@/lib/motion";

type BaseProps = Omit<
  HTMLMotionProps<"div">,
  "children" | "variants" | "initial" | "whileInView"
>;

type RevealProps = {
  children: ReactNode;
  /** Retraso extra antes de arrancar, en segundos. */
  delay?: number;
  /** Distancia del desplazamiento inicial, en píxeles. */
  y?: number;
  duration?: number;
  className?: string;
} & BaseProps;

/**
 * Entrada al hacer scroll: aparece y sube. Se dispara una sola vez.
 * `MotionConfig reducedMotion="user"` (ver `MotionProvider`) desactiva el
 * desplazamiento y deja sólo el fundido para quien pidió reducir el movimiento.
 */
export function Reveal({
  children,
  delay = 0,
  y = 24,
  duration = 0.6,
  className = "",
  ...rest
}: RevealProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={VIEWPORT}
      transition={{ duration, delay, ease: EASE.expo }}
      className={className}
      {...rest}
    >
      {children}
    </motion.div>
  );
}

/**
 * Envoltorio que escalona la entrada de sus hijos.
 * Cada hijo que deba animarse tiene que ser un `RevealItem`.
 */
export function RevealGroup({
  children,
  stagger = 0.08,
  delay = 0,
  className = "",
  ...rest
}: {
  children: ReactNode;
  stagger?: number;
  delay?: number;
  className?: string;
} & BaseProps) {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={VIEWPORT}
      variants={staggerContainer(stagger, delay)}
      className={className}
      {...rest}
    >
      {children}
    </motion.div>
  );
}

/** Hijo de `RevealGroup`: hereda el escalonado del contenedor. */
export function RevealItem({
  children,
  y = 24,
  className = "",
  ...rest
}: {
  children: ReactNode;
  y?: number;
  className?: string;
} & Omit<HTMLMotionProps<"div">, "children" | "variants">) {
  return (
    <motion.div
      variants={{
        hidden: { opacity: 0, y },
        visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: EASE.expo } },
      }}
      className={className}
      {...rest}
    >
      {children}
    </motion.div>
  );
}
