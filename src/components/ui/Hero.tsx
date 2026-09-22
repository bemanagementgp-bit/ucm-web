import Image from "next/image";
import { type ReactNode } from "react";
import { Reveal } from "@/components/motion/Reveal";
import { SplitReveal } from "@/components/motion/SplitReveal";
import { SpinningFlower } from "@/components/motion/SpinningFlower";
import { Parallax } from "@/components/motion/Parallax";

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

/** Halos de color difuminados que dan profundidad al fondo. */
function Glows({ variant }: { variant: "home" | "page" }) {
  return (
    <>
      <div
        className="absolute -top-24 right-0 w-[36rem] h-[36rem] bg-primary-light/25 rounded-full blur-[120px] pointer-events-none"
        aria-hidden="true"
      />
      {variant === "home" && (
        <div
          className="absolute top-1/3 -left-24 w-96 h-96 bg-lavender/20 rounded-full blur-[110px] pointer-events-none"
          aria-hidden="true"
        />
      )}
    </>
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
      <section className={`relative overflow-hidden ${className}`}>
        <Glows variant="home" />

        {/* Flor decorativa: giro continuo + leve deriva con el scroll. */}
        <SpinningFlower className="absolute -bottom-40 -right-40 w-[36rem] lg:w-[44rem] opacity-60" />

        <div className="hairline absolute inset-x-0 bottom-0" aria-hidden="true" />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-36 pb-20 md:pt-44 md:pb-28">
          <div
            className={
              image ? "md:grid md:grid-cols-[1.05fr_1fr] md:gap-14 md:items-center" : ""
            }
          >
            <div className={image ? "" : "max-w-3xl"}>
              {tag && (
                <Reveal y={16} duration={0.5}>
                  <span className="eyebrow text-xs font-semibold text-violet tracking-[0.12em] uppercase">
                    {tag}
                  </span>
                </Reveal>
              )}
              <SplitReveal
                as="h1"
                text={title}
                immediate
                delay={0.12}
                className="mt-6 text-[2.6rem] sm:text-5xl lg:text-[4rem] font-bold text-text-primary leading-[1.04] tracking-[-0.02em] text-balance"
              />
              {description && (
                <Reveal y={20} delay={0.34}>
                  <p className="mt-6 text-lg sm:text-xl text-text-secondary leading-relaxed max-w-2xl text-pretty">
                    {description}
                  </p>
                </Reveal>
              )}
              {children && (
                <Reveal y={20} delay={0.46}>
                  <div className="mt-9 flex flex-wrap items-center gap-4">{children}</div>
                </Reveal>
              )}
            </div>

            {image && (
              <Reveal y={40} delay={0.2} duration={0.9} className="mt-12 md:mt-0">
                <div className="relative">
                  <Parallax amount={-40} zoom={1.08} className="relative">
                    <div className="card-media relative aspect-[4/3] rounded-[1.75rem] md:rounded-[2.5rem] overflow-hidden shadow-2xl shadow-primary/10 ring-1 ring-white/50">
                      <Image
                        src={image}
                        alt={imageAlt}
                        fill
                        className="object-cover"
                        priority
                        sizes="(max-width: 768px) 100vw, 50vw"
                      />
                    </div>
                  </Parallax>
                  <div
                    className="absolute -bottom-6 -left-6 w-28 h-28 bg-primary-light/40 rounded-full blur-2xl pointer-events-none"
                    aria-hidden="true"
                  />
                  <div
                    className="absolute -top-6 -right-6 w-36 h-36 bg-lavender/30 rounded-full blur-2xl pointer-events-none"
                    aria-hidden="true"
                  />
                </div>
              </Reveal>
            )}
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className={`relative overflow-hidden ${className}`}>
      <Glows variant="page" />
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
