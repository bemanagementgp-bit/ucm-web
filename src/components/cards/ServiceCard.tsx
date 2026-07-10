import Link from "next/link";
import { HiArrowRight } from "react-icons/hi2";
import type { Service } from "@/data/services";

interface ServiceCardProps {
  service: Service;
  className?: string;
}

export function ServiceCard({ service, className = "" }: ServiceCardProps) {
  return (
    <Link
      href={`/servicios/${service.slug}`}
      className={`group block bg-white rounded-2xl border border-primary-light/30 p-6 hover:shadow-lg hover:shadow-primary/5 hover:border-primary/30 transition-all duration-300 ${className}`}
    >
      <div className="w-12 h-12 bg-primary-lightest rounded-xl flex items-center justify-center mb-4 group-hover:bg-primary-light transition-colors">
        <div className="w-6 h-6 text-primary">
          <ServiceIcon name={service.icon} />
        </div>
      </div>
      <h3 className="text-lg font-semibold text-text-primary mb-2 group-hover:text-primary transition-colors">
        {service.name}
      </h3>
      <p className="text-sm text-text-secondary leading-relaxed mb-4">
        {service.shortDescription}
      </p>
      <span className="inline-flex items-center gap-1 text-sm font-medium text-violet group-hover:text-primary transition-colors">
        Ver servicio
        <HiArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
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
