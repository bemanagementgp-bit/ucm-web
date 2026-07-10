import Link from "next/link";
import Image from "next/image";
import { HiArrowTopRightOnSquare } from "react-icons/hi2";
import { siteConfig } from "@/data/site";
import { locations } from "@/data/locations";

export function Footer() {
  return (
    <footer className="bg-violet-deep text-white/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8">
          {/* Col 1 – Brand */}
          <div className="sm:col-span-2 lg:col-span-1">
            <Link href="/" aria-label="UCM – Inicio">
              <Image
                src="/ucm-logo-blanco.png"
                alt="UCM – Unidad de Cuidado Mamario"
                width={140}
                height={42}
                className="h-10 w-auto"
              />
            </Link>
            <p className="text-sm mt-3 leading-relaxed max-w-xs">
              Unidad de Cuidado Mamario. Prevención, diagnóstico, tratamiento y
              seguimiento especializado de la salud mamaria.
            </p>
            <a
              href={siteConfig.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm text-white/70 hover:text-white mt-4 transition-colors"
              aria-label="Instagram de UCM"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
              </svg>
              @ucmunidad
            </a>
          </div>

          {/* Col 2 – Nav */}
          <div>
            <h4 className="text-sm font-semibold text-white uppercase tracking-wider mb-4">
              Navegación
            </h4>
            <ul className="space-y-2">
              {siteConfig.navigation.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-sm hover:text-white transition-colors"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3 – Services */}
          <div>
            <h4 className="text-sm font-semibold text-white uppercase tracking-wider mb-4">
              Servicios
            </h4>
            <ul className="space-y-2">
              {siteConfig.footerServices.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-sm hover:text-white transition-colors"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 4 – Sedes & portales */}
          <div>
            <h4 className="text-sm font-semibold text-white uppercase tracking-wider mb-4">
              Sedes
            </h4>
            <ul className="space-y-3">
              {locations.map((loc) => (
                <li key={loc.id}>
                  <span className="text-sm font-medium text-white block">
                    {loc.institutionName}
                  </span>
                  <span className="text-xs text-white/60">{loc.address}</span>
                </li>
              ))}
            </ul>
            <h4 className="text-sm font-semibold text-white uppercase tracking-wider mt-6 mb-3">
              Portales
            </h4>
            <ul className="space-y-2">
              {locations.map((loc) => (
                <li key={loc.id}>
                  <a
                    href={loc.patientPortalUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-sm hover:text-white transition-colors"
                  >
                    Portal {loc.city}
                    <HiArrowTopRightOnSquare className="w-3 h-3" />
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-12 pt-8 border-t border-white/10">
          <p className="text-xs text-white/50 leading-relaxed mb-4">
            {siteConfig.medicalDisclaimer}
          </p>
          <div className="flex flex-wrap items-center gap-4 text-xs text-white/40">
            <span>© {new Date().getFullYear()} UCM – Unidad de Cuidado Mamario</span>
            <Link href="/privacidad" className="hover:text-white/70 transition-colors">
              Política de privacidad
            </Link>
            <Link href="/terminos" className="hover:text-white/70 transition-colors">
              Términos
            </Link>
            <Link href="/aviso-legal" className="hover:text-white/70 transition-colors">
              Aviso legal
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
