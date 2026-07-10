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
    <div
      className={`bg-white rounded-2xl border border-primary-light/30 overflow-hidden hover:shadow-lg hover:shadow-primary/5 transition-all duration-300 ${className}`}
    >
      {/* Placeholder imagen */}
      <div className="aspect-video bg-gradient-to-br from-primary-lightest to-lavender/30 relative">
        <div className="absolute inset-0 flex items-center justify-center">
          <HiMapPin className="w-12 h-12 text-primary/30" />
        </div>
      </div>
      <div className="p-6">
        <h3 className="text-xl font-bold text-text-primary">
          {location.institutionName}
        </h3>
        <p className="text-sm text-violet font-medium mt-1">{location.name}</p>

        <div className="space-y-2 mt-4">
          <div className="flex items-start gap-2 text-sm text-text-secondary">
            <HiMapPin className="w-4 h-4 shrink-0 mt-0.5 text-primary" />
            <span>{location.address}</span>
          </div>
          <div className="flex items-start gap-2 text-sm text-text-secondary">
            <HiPhone className="w-4 h-4 shrink-0 mt-0.5 text-primary" />
            <span>{location.phone}</span>
          </div>
          <div className="flex items-start gap-2 text-sm text-text-secondary">
            <HiClock className="w-4 h-4 shrink-0 mt-0.5 text-primary" />
            <span>{location.hours}</span>
          </div>
        </div>

        <div className="flex flex-wrap gap-3 mt-6">
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
            <HiArrowTopRightOnSquare className="w-4 h-4" />
            Cómo llegar
          </Button>
        </div>

        <div className="mt-4">
          <Link
            href="/sedes"
            className="text-sm font-medium text-violet hover:text-primary transition-colors"
          >
            Ver más información de esta sede →
          </Link>
        </div>
      </div>
    </div>
  );
}
