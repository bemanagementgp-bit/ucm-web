import Image from "next/image";
import { HiMapPin } from "react-icons/hi2";
import type { Equipment } from "@/data/equipment";
import { getLocationName } from "@/data/locations";

interface EquipmentCardProps {
  equipment: Equipment;
  className?: string;
}

export function EquipmentCard({ equipment, className = "" }: EquipmentCardProps) {
  return (
    <div
      className={`group glass-card rounded-3xl overflow-hidden ${className}`}
    >
      <div className="card-media aspect-square bg-gradient-to-br from-violet-deep/5 to-lavender/20 relative">
        {equipment.images[0] ? (
          <Image
            src={equipment.images[0]}
            alt={`${equipment.brand} ${equipment.model}`}
            fill
            className="object-contain"
          />
        ) : (
          <div className="absolute inset-0 flex items-center justify-center">
            <svg className="w-16 h-16 text-violet/20" fill="none" stroke="currentColor" strokeWidth={1} viewBox="0 0 24 24">
              <rect x="2" y="3" width="20" height="14" rx="2" />
              <path d="M8 21h8M12 17v4" />
            </svg>
          </div>
        )}
      </div>
      <div className="p-6">
        <h3 className="text-xl font-bold text-text-primary">{equipment.name}</h3>
        <p className="text-sm text-violet font-medium mt-1">
          {equipment.brand} – {equipment.model}
        </p>
        <p className="text-sm text-text-secondary/80 mt-1 italic">
          {equipment.technology}
        </p>
        <p className="text-sm text-text-secondary leading-relaxed mt-3">
          {equipment.description}
        </p>

        <div className="mt-4">
          <h4 className="text-sm font-semibold text-text-primary mb-2">Beneficios</h4>
          <ul className="space-y-1">
            {equipment.benefits.map((benefit, i) => (
              <li key={i} className="flex items-start gap-2 text-sm text-text-secondary">
                <span className="w-1.5 h-1.5 bg-primary rounded-full mt-1.5 shrink-0" />
                {benefit}
              </li>
            ))}
          </ul>
        </div>

        <div className="flex items-center gap-1 mt-4 text-xs text-text-secondary">
          <HiMapPin className="w-3.5 h-3.5" />
          <span>{equipment.locations.map((l) => getLocationName(l)).join(" · ")}</span>
        </div>
      </div>
    </div>
  );
}
