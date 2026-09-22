import Link from "next/link";
import { HiMapPin } from "react-icons/hi2";
import type { Professional } from "@/data/professionals";
import { getLocationName } from "@/data/locations";
import { ArrowCircle } from "@/components/ui/ArrowCircle";

interface ProfessionalCardProps {
  professional: Professional;
  className?: string;
}

export function ProfessionalCard({ professional, className = "" }: ProfessionalCardProps) {
  const Wrapper: React.ElementType = professional.noDetailPage ? "div" : Link;
  const wrapperProps = professional.noDetailPage
    ? {}
    : { href: `/profesionales/${professional.slug}` };

  return (
    <Wrapper
      {...wrapperProps}
      className={`group flex flex-col h-full glass-card rounded-3xl p-2.5 ${className}`}
    >
      {/* Placeholder foto */}
      <div className="card-media relative aspect-square rounded-[1.15rem] overflow-hidden">
        <div
          data-media
          className="absolute inset-0 bg-gradient-to-br from-primary-lightest to-lavender/30"
        />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-20 h-20 rounded-full bg-white/60 flex items-center justify-center transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-110">
            <svg className="w-10 h-10 text-primary/40" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" />
            </svg>
          </div>
        </div>
      </div>

      <div className="flex flex-col flex-1 p-4 pt-5">
        <h3 className="font-semibold text-text-primary leading-snug group-hover:text-primary transition-colors text-balance">
          {professional.name}
        </h3>
        <p className="text-sm text-violet font-medium mt-1">
          {professional.specialty}
        </p>
        <div className="flex items-start gap-1.5 mt-3 text-xs text-text-secondary">
          <HiMapPin className="w-3.5 h-3.5 shrink-0 mt-0.5" />
          <span>
            {professional.locations.map((l) => getLocationName(l)).join(" · ")}
          </span>
        </div>
        {!professional.noDetailPage && (
          <div className="mt-auto pt-5 flex items-center justify-between gap-3">
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
