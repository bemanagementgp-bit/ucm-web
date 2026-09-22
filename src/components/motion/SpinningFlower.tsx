"use client";

import Image from "next/image";
import { useGsapEffect } from "@/lib/gsap";

interface SpinningFlowerProps {
  className?: string;
  /** Segundos por vuelta completa. */
  duration?: number;
  /** Cuánto se desplaza con el scroll, en píxeles. */
  drift?: number;
}

/**
 * La rosa decorativa del hero: gira de forma continua y, además, acompaña el
 * scroll con un leve desplazamiento y un giro extra (parallax).
 *
 * El giro base también está definido en CSS (`animate-spin-slow`), de modo que
 * la rosa sigue girando aunque GSAP no llegue a inicializarse.
 */
export function SpinningFlower({
  className = "",
  duration = 40,
  drift = 80,
}: SpinningFlowerProps) {
  const scope = useGsapEffect<HTMLDivElement>(({ scope, gsap }) => {
    const img = scope.querySelector<HTMLElement>("[data-flower]");
    if (!img) return;

    // GSAP toma el control del giro: se desactiva la animación CSS de respaldo.
    img.style.animation = "none";

    gsap.to(img, {
      rotation: 360,
      duration,
      ease: "none",
      repeat: -1,
      transformOrigin: "50% 50%",
    });

    gsap.to(scope, {
      y: drift,
      rotation: 24,
      ease: "none",
      scrollTrigger: {
        trigger: scope.parentElement ?? scope,
        start: "top top",
        end: "bottom top",
        scrub: 1,
      },
    });
  }, [duration, drift]);

  return (
    <div ref={scope} className={`pointer-events-none select-none ${className}`} aria-hidden="true">
      <Image
        data-flower
        src="/elemento-flor.svg"
        alt=""
        aria-hidden="true"
        width={800}
        height={800}
        priority
        className="w-full h-auto animate-spin-slow will-change-transform"
      />
    </div>
  );
}
