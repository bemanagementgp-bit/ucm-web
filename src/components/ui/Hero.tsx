import Image from "next/image";
import { type ReactNode } from "react";
import { Reveal } from "@/components/motion/Reveal";
import { SplitReveal } from "@/components/motion/SplitReveal";
import { SpinningFlower } from "@/components/motion/SpinningFlower";
import { HeaderThemeSetter } from "@/components/layout/HeaderTheme";

interface HeroProps {
  tag?: string;
  title: string;
  description?: string;
  children?: ReactNode;
  variant?: "home" | "page";
  image?: string;
  imageAlt?: string;
  className?: string;
}

/** Halo difuminado que da profundidad al fondo de los heros claros. */
function Glow() {
  return (
    <div
      className="absolute -top-24 right-0 w-[36rem] h-[36rem] bg-primary-light/25 rounded-full blur-[120px] pointer-events-none"
      aria-hidden="true"
    />
  );
}

export function Hero({
  tag,
  title,
  description,
  children,
  variant = "page",
  image,
  imageAlt = "",
  className = "",
}: HeroProps) {
  if (variant === "home") {
    return (
      <section
        // `100svh`: en móviles descuenta la barra del navegador, así la foto
        // llega de verdad hasta abajo sin dejar un corte.
        className={`relative flex items-center overflow-hidden min-h-[100svh] ${className}`}
      >
        {/* Avisa a la barra de navegación que está apoyada sobre una foto. */}
        <HeaderThemeSetter theme="dark" />

        {/* Fotografía a sangre */}
        {image && (
          <Image
            src={image}
            alt={imageAlt}
            fill
            priority
            sizes="100vw"
            className="object-cover object-[38%_center] md:object-center"
          />
        )}

        {/*
          Velo de marca: el violeta profundo (#4F3D65) ya está en la paleta, así
          que oscurece la foto sin introducir un color nuevo. Es más intenso a la
          izquierda, que es donde se apoya el texto.
        */}
        <div
          className="absolute inset-0 bg-gradient-to-r from-violet-deep/92 via-violet-deep/60 to-violet-deep/15"
          aria-hidden="true"
        />
        <div
          className="absolute inset-0 bg-gradient-to-t from-violet-deep/55 via-transparent to-violet-deep/25"
          aria-hidden="true"
        />

        {/*
          La flor de marca, girando, como pieza de la composición: ocupa el
          costado derecho, se recorta contra el borde y queda por detrás del
          titular.
        */}
        <SpinningFlower
          className="absolute -bottom-40 -right-40 sm:-bottom-48 sm:-right-48 w-[36rem] sm:w-[44rem] lg:w-[52rem] opacity-[0.25] md:opacity-[0.35]"
          duration={55}
          drift={70}
        />

        <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-20 md:pt-40 md:pb-28">
          <div className="max-w-3xl">
            {tag && (
              <Reveal y={16} duration={0.5}>
                <span className="inline-flex items-center gap-2 rounded-full border border-white/25 bg-white/10 backdrop-blur-sm px-4 py-2 text-xs font-semibold text-white tracking-[0.12em] uppercase">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary" aria-hidden="true" />
                  {tag}
                </span>
              </Reveal>
            )}
            <SplitReveal
              as="h1"
              text={title}
              immediate
              delay={0.14}
              className="mt-7 text-[2.75rem] sm:text-6xl lg:text-[4.5rem] font-bold text-white leading-[1.02] tracking-[-0.025em] text-balance drop-shadow-[0_2px_24px_rgba(79,61,101,0.35)]"
            />
            {description && (
              <Reveal y={20} delay={0.36}>
                <p className="mt-7 text-lg sm:text-xl text-white/80 leading-relaxed max-w-xl text-pretty">
                  {description}
                </p>
              </Reveal>
            )}
            {children && (
              <Reveal y={20} delay={0.5}>
                <div className="mt-10 flex flex-wrap items-center gap-4">{children}</div>
              </Reveal>
            )}
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className={`relative overflow-hidden ${className}`}>
      <Glow />
      <div className="hairline absolute inset-x-0 bottom-0" aria-hidden="true" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-12 md:pt-40 md:pb-16">
        <div className="max-w-3xl">
          {tag && (
            <Reveal y={14} duration={0.5}>
              <span className="eyebrow text-xs font-semibold text-violet tracking-[0.12em] uppercase">
                {tag}
              </span>
            </Reveal>
          )}
          <SplitReveal
            as="h1"
            text={title}
            immediate
            delay={0.1}
            className="mt-5 text-4xl sm:text-5xl lg:text-[3.5rem] font-bold text-text-primary leading-[1.06] tracking-[-0.02em] text-balance"
          />
          {description && (
            <Reveal y={18} delay={0.3}>
              <p className="mt-5 text-lg text-text-secondary leading-relaxed text-pretty">
                {description}
              </p>
            </Reveal>
          )}
          {children && (
            <Reveal y={18} delay={0.42}>
              <div className="mt-8 flex flex-wrap items-center gap-4">{children}</div>
            </Reveal>
          )}
        </div>
      </div>
    </section>
  );
}
