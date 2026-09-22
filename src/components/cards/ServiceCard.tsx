import Link from "next/link";
import type { Service } from "@/data/services";
import { ArrowCircle } from "@/components/ui/ArrowCircle";

interface ServiceCardProps {
  service: Service;
  className?: string;
}

export function ServiceCard({ service, className = "" }: ServiceCardProps) {
  return (
    <Link
      href={`/servicios/${service.slug}`}
      className={`group flex flex-col h-full glass-card rounded-3xl p-6 ${className}`}
    >
      <div className="flex items-start justify-between gap-4">
        <div className="w-12 h-12 bg-primary-lightest rounded-2xl flex items-center justify-center transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:bg-primary-light group-hover:scale-105">
          <div className="w-6 h-6 text-primary">
            <ServiceIcon name={service.icon} />
          </div>
        </div>
        <ArrowCircle size="sm" />
      </div>

      <h3 className="text-lg font-semibold text-text-primary mt-5 mb-2 group-hover:text-primary transition-colors text-balance">
        {service.name}
      </h3>
      <p className="text-sm text-text-secondary leading-relaxed">
        {service.shortDescription}
      </p>
      <span className="mt-auto pt-5 text-sm font-medium text-violet group-hover:text-primary transition-colors">
        Ver servicio
      </span>
    </Link>
  );
}

function ServiceIcon({ name }: { name: string }) {
  /* Placeholder simple – en producción podría mapearse a íconos reales */
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="w-6 h-6">
      <circle cx="12" cy="12" r="10" />
      <path d="M12 8v8M8 12h8" />
    </svg>
  );
}
