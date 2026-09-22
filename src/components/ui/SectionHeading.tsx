import { type ReactNode } from "react";
import { Reveal } from "@/components/motion/Reveal";
import { SplitReveal } from "@/components/motion/SplitReveal";
import { ScrollHighlightText } from "@/components/motion/ScrollHighlightText";

interface SectionHeadingProps {
  tag?: string;
  title: string;
  description?: string;
  centered?: boolean;
  /** Contenido alineado al extremo opuesto del título (p. ej. un "Ver todos"). */
  action?: ReactNode;
  /** Muestra la bajada en grande, encendiéndose palabra por palabra al scrollear. */
  highlightDescription?: boolean;
  className?: string;
}

export function SectionHeading({
  tag,
  title,
  description,
  centered = true,
  action,
  highlightDescription = false,
  className = "",
}: SectionHeadingProps) {
  const heading = (
    <div className={`max-w-3xl ${centered && !action ? "mx-auto text-center" : ""}`}>
      {tag && (
        <Reveal y={14} duration={0.5}>
          <span className="eyebrow text-xs font-semibold text-violet tracking-[0.12em] uppercase">
            {tag}
          </span>
        </Reveal>
      )}
      <SplitReveal
        as="h2"
        text={title}
        delay={tag ? 0.08 : 0}
        className="mt-4 text-3xl md:text-4xl lg:text-[2.75rem] font-bold text-text-primary leading-[1.12] tracking-tight text-balance"
      />
      {description &&
        (highlightDescription ? (
          <ScrollHighlightText
            text={description}
            className="mt-6 text-xl md:text-2xl text-text-primary leading-[1.5] text-pretty"
          />
        ) : (
          <Reveal y={18} delay={0.16}>
            <p className="mt-4 text-lg text-text-secondary leading-relaxed text-pretty">
              {description}
            </p>
          </Reveal>
        ))}
    </div>
  );

  if (action) {
    return (
      <div
        className={`flex flex-col gap-6 md:flex-row md:items-end md:justify-between ${className}`}
      >
        {heading}
        <Reveal y={18} delay={0.2} className="shrink-0">
          {action}
        </Reveal>
      </div>
    );
  }

  return <div className={className}>{heading}</div>;
}
