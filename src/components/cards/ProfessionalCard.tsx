import Link from "next/link";
import { HiArrowRight, HiMapPin } from "react-icons/hi2";
import type { Professional } from "@/data/professionals";
import { getLocationName } from "@/data/locations";

interface ProfessionalCardProps {
  professional: Professional;
  className?: string;
}

export function ProfessionalCard({ professional, className = "" }: ProfessionalCardProps) {
  return (
    <Link
      href={`/profesionales/${professional.slug}`}
      className={`group block bg-white rounded-2xl border border-primary-light/30 overflow-hidden hover:shadow-lg hover:shadow-primary/5 hover:border-primary/30 transition-all duration-300 ${className}`}
    >
      {/* Placeholder foto */}
      <div className="aspect-[4/5] bg-gradient-to-br from-primary-lightest to-lavender/30 relative overflow-hidden">
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-20 h-20 rounded-full bg-white/60 flex items-center justify-center">
            <svg className="w-10 h-10 text-primary/40" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" />
            </svg>
          </div>
        </div>
      </div>
      <div className="p-5">
        <h3 className="font-semibold text-text-primary group-hover:text-primary transition-colors">
          {professional.name}
        </h3>
        <p className="text-sm text-violet font-medium mt-1">
          {professional.specialty}
        </p>
        <p className="text-sm text-text-secondary mt-1">{professional.area}</p>
        <div className="flex items-center gap-1 mt-3 text-xs text-text-secondary">
          <HiMapPin className="w-3.5 h-3.5" />
          <span>
            {professional.locations.map((l) => getLocationName(l)).join(" · ")}
          </span>
        </div>
        <span className="inline-flex items-center gap-1 text-sm font-medium text-violet group-hover:text-primary transition-colors mt-3">
          Ver perfil
          <HiArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
        </span>
      </div>
    </Link>
  );
}
