import Link from "next/link";
import { HiMapPin, HiPhone, HiClock, HiArrowTopRightOnSquare } from "react-icons/hi2";
import { Button } from "@/components/ui/Buttons";
import type { Location } from "@/data/locations";

interface LocationCardProps {
  location: Location;
  className?: string;
}

export function LocationCard({ location, className = "" }: LocationCardProps) {
  return (
    <div className={`glass-card rounded-2xl p-5 ${className}`}>
      <h3 className="text-base font-bold text-text-primary leading-tight">
        {location.institutionName}
      </h3>
      <p className="text-xs text-violet font-medium mt-0.5">{location.name}</p>

      <div className="space-y-1.5 mt-3">
        <div className="flex items-start gap-2 text-xs text-text-secondary">
          <HiMapPin className="w-3.5 h-3.5 shrink-0 mt-0.5 text-primary" />
          <span>{location.address}</span>
        </div>
        <div className="flex items-start gap-2 text-xs text-text-secondary">
          <HiPhone className="w-3.5 h-3.5 shrink-0 mt-0.5 text-primary" />
          <span>{location.phone}</span>
        </div>
        <div className="flex items-start gap-2 text-xs text-text-secondary">
          <HiClock className="w-3.5 h-3.5 shrink-0 mt-0.5 text-primary" />
          <span>{location.hours}</span>
        </div>
      </div>

      <div className="flex flex-wrap items-center gap-2 mt-4">
        <Button href="/turnos" size="sm">
          Solicitar turno
        </Button>
        <Button
          href={location.mapsUrl}
          variant="outline"
          size="sm"
          external
          ariaLabel={`Cómo llegar a ${location.institutionName}`}
        >
          <HiArrowTopRightOnSquare className="w-3.5 h-3.5" />
          Cómo llegar
        </Button>
        <Link
          href="/unidad#sedes"
          className="text-xs font-medium text-violet hover:text-primary transition-colors ml-auto"
        >
          Más info →
        </Link>
      </div>
    </div>
  );
}
