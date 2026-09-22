import Link from "next/link";
import { HiMapPin } from "react-icons/hi2";
import type { Professional } from "@/data/professionals";
import { getLocationName } from "@/data/locations";
import { ArrowCircle } from "@/components/ui/ArrowCircle";

interface ProfessionalCardProps {
  professional: Professional;
  className?: string;
}

/**
 * Ficha de profesional.
 *
 * En pantallas angostas se acuesta —foto al costado, texto al lado— porque en
 * dos columnas el nombre, la especialidad y las sedes quedaban apretados en
 * unos 170px y el texto se partía en muchísimas líneas. Desde `sm` vuelve al
 * formato vertical, con la foto arriba.
 */
export function ProfessionalCard({ professional, className = "" }: ProfessionalCardProps) {
  const Wrapper: React.ElementType = professional.noDetailPage ? "div" : Link;
  const wrapperProps = professional.noDetailPage
    ? {}
    : { href: `/profesionales/${professional.slug}` };

  return (
    <Wrapper
      {...wrapperProps}
      className={`group flex flex-row sm:flex-col h-full glass-card rounded-3xl p-2.5 gap-3 sm:gap-0 ${className}`}
    >
      {/* Placeholder foto */}
      <div className="card-media relative w-24 sm:w-auto shrink-0 aspect-square rounded-[1.15rem] overflow-hidden">
        <div
          data-media
          className="absolute inset-0 bg-gradient-to-br from-primary-lightest to-lavender/30"
        />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-1/2 aspect-square rounded-full bg-white/60 flex items-center justify-center transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-110">
            <svg className="w-2/3 h-2/3 text-primary/40" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" />
            </svg>
          </div>
        </div>
      </div>

      <div className="flex flex-col flex-1 min-w-0 justify-center sm:justify-start py-1 pr-1 sm:p-4 sm:pt-5">
        <h3 className="font-semibold text-text-primary leading-snug group-hover:text-primary transition-colors text-balance">
          {professional.name}
        </h3>
        <p className="text-sm text-violet font-medium mt-0.5 sm:mt-1">
          {professional.specialty}
        </p>
        <div className="flex items-start gap-1.5 mt-2 sm:mt-3 text-xs text-text-secondary">
          <HiMapPin className="w-3.5 h-3.5 shrink-0 mt-0.5" />
          <span>
            {professional.locations.map((l) => getLocationName(l)).join(" · ")}
          </span>
        </div>
        {!professional.noDetailPage && (
          <div className="mt-3 sm:mt-auto sm:pt-5 flex items-center justify-between gap-3">
            <span className="text-sm font-medium text-violet group-hover:text-primary transition-colors">
              Ver perfil
            </span>
            <ArrowCircle size="sm" />
          </div>
        )}
      </div>
    </Wrapper>
  );
}
