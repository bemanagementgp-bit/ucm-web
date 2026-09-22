import { type ReactNode } from "react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/motion/Reveal";

interface CtaPanelProps {
  title: string;
  description?: string;
  /** Botones de la llamada a la acción. */
  children: ReactNode;
  /** Contenido secundario debajo de los botones (p. ej. el aviso médico). */
  footer?: ReactNode;
  className?: string;
}

/**
 * Bloque de cierre de página: un panel amplio y muy redondeado sobre el
 * degradado de marca, con el titular animado y los botones escalonados.
 */
export function CtaPanel({
  title,
  description,
  children,
  footer,
  className = "",
}: CtaPanelProps) {
  return (
    <section className={`py-16 md:py-24 ${className}`}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="panel noise-overlay relative overflow-hidden bg-gradient-brand-soft px-6 py-16 md:px-12 md:py-20 text-center">
          <div
            className="absolute -top-20 -right-20 w-80 h-80 bg-white/30 rounded-full blur-[100px] pointer-events-none"
            aria-hidden="true"
          />
          <div className="relative z-10 max-w-3xl mx-auto">
            <SectionHeading title={title} description={description} />
            <Reveal y={20} delay={0.2}>
              <div className="mt-10 flex flex-wrap justify-center gap-4">{children}</div>
            </Reveal>
            {footer && (
              <Reveal y={16} delay={0.28}>
                {footer}
              </Reveal>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
