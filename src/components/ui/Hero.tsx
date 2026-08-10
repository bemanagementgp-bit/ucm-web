import Image from "next/image";
import { type ReactNode } from "react";

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
        {/* Detalle de fondo: brillos sutiles en tonos de marca */}
        <div className="absolute -top-24 right-0 w-[36rem] h-[36rem] bg-primary-light/25 rounded-full blur-[120px] pointer-events-none" />
        <div className="absolute top-1/3 -left-24 w-96 h-96 bg-lavender/20 rounded-full blur-[110px] pointer-events-none" />
        {/* Flor decorativa giratoria */}
        <Image
          src="/elemento-flor.svg"
          alt=""
          aria-hidden="true"
          width={800}
          height={800}
          className="absolute -bottom-40 -right-40 w-[36rem] lg:w-[44rem] h-auto opacity-60 animate-spin-slow pointer-events-none select-none"
        />
        <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-primary-light/40 to-transparent" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-20 md:pt-40 md:pb-28">
          <div className={`${image ? "md:grid md:grid-cols-2 md:gap-12 md:items-center" : ""}`}>
            <div className={image ? "" : "max-w-3xl"}>
              {tag && (
                <span className="inline-block text-sm font-medium text-violet tracking-wide uppercase mb-4 bg-violet/10 px-4 py-1.5 rounded-full">
                  {tag}
                </span>
              )}
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-text-primary leading-[1.1] tracking-tight">
                {title}
              </h1>
              {description && (
                <p className="mt-6 text-lg sm:text-xl text-text-secondary leading-relaxed max-w-2xl">
                  {description}
                </p>
              )}
              {children && <div className="mt-8 flex flex-wrap gap-6">{children}</div>}
            </div>
            {image && (
              <div className="mt-10 md:mt-0 relative">
                <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl shadow-primary/10">
                  {/* Placeholder – reemplazar por fotografía real de UCM */}
                  <Image
                    src={image}
                    alt={imageAlt}
                    fill
                    className="object-cover"
                    priority
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                </div>
                <div className="absolute -bottom-4 -left-4 w-24 h-24 bg-primary-light/40 rounded-full blur-2xl" />
                <div className="absolute -top-4 -right-4 w-32 h-32 bg-lavender/30 rounded-full blur-2xl" />
              </div>
            )}
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className={`relative overflow-hidden ${className}`}>
      {/* Detalle de fondo: brillo sutil en tono de marca */}
      <div className="absolute -top-20 right-0 w-[32rem] h-[32rem] bg-primary-light/20 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-primary-light/40 to-transparent" />
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-28 pb-12 md:pt-32 md:pb-16">
        <div className="max-w-3xl">
          {tag && (
            <span className="inline-block text-sm font-medium text-violet tracking-wide uppercase mb-3">
              {tag}
            </span>
          )}
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-text-primary leading-tight">
            {title}
          </h1>
          {description && (
            <p className="mt-4 text-lg text-text-secondary leading-relaxed">
              {description}
            </p>
          )}
          {children && <div className="mt-8 flex flex-wrap gap-6">{children}</div>}
        </div>
      </div>
    </section>
  );
}
