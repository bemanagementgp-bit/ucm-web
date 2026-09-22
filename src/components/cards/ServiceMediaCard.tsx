import Image from "next/image";
import Link from "next/link";
import { HiArrowRight } from "react-icons/hi2";
import type { Service } from "@/data/services";
import { publicFileExists } from "@/lib/publicAssets";

interface ServiceMediaCardProps {
  service: Service;
  className?: string;
}

/**
 * Tarjeta alta con la imagen a sangre y el texto apoyado abajo.
 *
 * La foto de cada servicio ya está declarada en los datos, pero varias todavía
 * no se cargaron: mientras falten, la tarjeta muestra el degradado de marca.
 * El velo va siempre, así que el texto se lee igual en los dos casos y la
 * tarjeta no cambia de forma cuando llegue la fotografía definitiva.
 */
export function ServiceMediaCard({ service, className = "" }: ServiceMediaCardProps) {
  const hasPhoto = publicFileExists(service.image);

  return (
    <Link
      href={`/servicios/${service.slug}`}
      className={`group relative block shrink-0 snap-start w-[17rem] sm:w-[19rem] lg:w-[21rem] aspect-[3/4] rounded-[1.5rem] overflow-hidden ring-1 ring-white/40 shadow-xl shadow-violet-deep/10 transition-transform duration-[600ms] ease-[cubic-bezier(0.16,1,0.3,1)] hover:-translate-y-2 ${className}`}
    >
      <div className="card-media absolute inset-0">
        {hasPhoto ? (
          <Image
            src={service.image}
            alt=""
            fill
            className="object-cover"
            sizes="(max-width: 640px) 17rem, (max-width: 1024px) 19rem, 21rem"
          />
        ) : (
          <div
            data-media
            className="absolute inset-0 bg-gradient-to-br from-primary-light via-lavender/60 to-violet/40"
          />
        )}
      </div>

      {/* Velo de marca: mantiene legible el texto sobre foto o sobre degradado. */}
      <div
        className="absolute inset-0 bg-gradient-to-t from-violet-deep/92 via-violet-deep/45 to-violet-deep/10"
        aria-hidden="true"
      />

      <div className="absolute inset-x-0 bottom-0 p-6">
        <h3 className="text-xl font-bold text-white leading-snug text-balance">
          {service.name}
        </h3>
        <p className="mt-2 text-sm text-white/75 leading-relaxed line-clamp-3 text-pretty">
          {service.shortDescription}
        </p>
        <span className="mt-4 inline-flex items-center gap-2 text-sm font-medium text-white">
          Ver servicio
          <span
            className="w-7 h-7 rounded-full border border-white/40 bg-white/10 flex items-center justify-center transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:bg-white group-hover:text-violet-deep group-hover:rotate-[-45deg]"
            aria-hidden="true"
          >
            <HiArrowRight className="w-3.5 h-3.5" />
          </span>
        </span>
      </div>
    </Link>
  );
}
