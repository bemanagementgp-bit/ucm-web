"use client";

import { useEffect, type ReactNode } from "react";
import { motion } from "framer-motion";
import { usePathname } from "next/navigation";
import { EASE } from "@/lib/motion";
import { ScrollTrigger, registerGsap } from "@/lib/gsap";

/**
 * Fundido de entrada en cada navegación.
 *
 * Se anima únicamente la opacidad, a propósito: una transformación en este
 * envoltorio crearía un bloque contenedor y rompería los elementos `fixed`
 * que viven dentro de las páginas (por ejemplo, el modal de /unidad).
 */
export function PageTransition({ children }: { children: ReactNode }) {
  const pathname = usePathname();

  useEffect(() => {
    registerGsap();
    // Tras cambiar de ruta, las medidas de los disparadores quedan obsoletas.
    const id = window.requestAnimationFrame(() => ScrollTrigger.refresh());
    return () => window.cancelAnimationFrame(id);
  }, [pathname]);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.45, ease: EASE.expo }}
    >
      {children}
    </motion.div>
  );
}
