import Link from "next/link";
import Image from "next/image";
import { HiArrowTopRightOnSquare } from "react-icons/hi2";
import { siteConfig } from "@/data/site";
import { locations } from "@/data/locations";

export function Footer() {
  return (
    <footer className="bg-gradient-brand text-text-secondary">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8">
          {/* Col 1 – Brand */}
          <div className="sm:col-span-2 lg:col-span-1">
            <Link href="/" aria-label="UCM – Inicio">
              <span
                className="block h-10 w-[140px] bg-current text-text-secondary"
                style={{
                  maskImage: "url(/logo-ucm.svg)",
                  WebkitMaskImage: "url(/logo-ucm.svg)",
                  maskRepeat: "no-repeat",
                  WebkitMaskRepeat: "no-repeat",
                  maskPosition: "left center",
                  WebkitMaskPosition: "left center",
                  maskSize: "contain",
                  WebkitMaskSize: "contain",
                }}
                aria-hidden="true"
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
              className="group inline-flex items-center gap-2.5 mt-5 pl-2 pr-4 py-2 rounded-full bg-gradient-to-tr from-[#feda75] via-[#d62976] to-[#4f5bd5] text-white text-sm font-semibold shadow-md hover:shadow-lg hover:-translate-y-0.5 transition-all duration-300"
              aria-label="Instagram de UCM"
            >
              <span className="flex items-center justify-center w-7 h-7 rounded-full bg-white/20 group-hover:bg-white/30 transition-colors">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
                </svg>
              </span>
              @ucmunidad
            </a>
          </div>

          {/* Col 2 – Nav */}
          <div>
            <h4 className="text-sm font-semibold text-violet-deep uppercase tracking-wider mb-4">
              Navegación
            </h4>
            <ul className="space-y-2">
              {siteConfig.navigation.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-sm hover:text-violet-deep transition-colors"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3 – Services */}
          <div>
            <h4 className="text-sm font-semibold text-violet-deep uppercase tracking-wider mb-4">
              Servicios
            </h4>
            <ul className="space-y-2">
              {siteConfig.footerServices.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-sm hover:text-violet-deep transition-colors"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 4 – Sedes & portales */}
          <div>
            <h4 className="text-sm font-semibold text-violet-deep uppercase tracking-wider mb-4">
              Sedes
            </h4>
            <ul className="space-y-3">
              {locations.map((loc) => (
                <li key={loc.id}>
                  <span className="text-sm font-medium text-text-primary block">
                    {loc.institutionName}
                  </span>
                  <span className="text-xs text-text-secondary">{loc.address}</span>
                </li>
              ))}
            </ul>
            <h4 className="text-sm font-semibold text-violet-deep uppercase tracking-wider mt-6 mb-3">
              Portales
            </h4>
            <ul className="space-y-2">
              {locations.map((loc) => (
                <li key={loc.id}>
                  <a
                    href={loc.patientPortalUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-sm hover:text-violet-deep transition-colors"
                  >
                    Portal {loc.city}
                    <HiArrowTopRightOnSquare className="w-3 h-3" />
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Acreditaciones y respaldo */}
        <div className="mt-12 pt-8 border-t border-violet-deep/15">
          <div className="flex flex-col sm:flex-row sm:items-center gap-6 sm:gap-10">
            <span className="text-xs font-semibold text-violet-deep uppercase tracking-wider">
              Acreditación y respaldo
            </span>
            <div className="flex flex-wrap items-center gap-8">
              <a
                href="https://www.samas.org.ar/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Unidad de Mastología acreditada por la Sociedad Argentina de Mastología"
                title="Unidad de Mastología acreditada por la Sociedad Argentina de Mastología (abril 2026)"
                className="inline-flex items-center gap-3 opacity-80 hover:opacity-100 transition-opacity"
              >
                <Image
                  src="/logo_sam2.svg"
                  alt="SAM – Sociedad Argentina de Mastología"
                  width={158}
                  height={90}
                  className="h-12 w-auto"
                />
                <span className="text-xs text-text-secondary leading-tight max-w-[10rem]">
                  Acreditada como Unidad de Mastología por la SAM
                </span>
              </a>
              <a
                href="https://www.institutomedicoplatense.com/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Formamos parte del Instituto Médico Platense"
                title="Formamos parte del Instituto Médico Platense"
                className="inline-flex items-center gap-3 opacity-80 hover:opacity-100 transition-opacity"
              >
                <Image
                  src="/logo-imp.png"
                  alt="Instituto Médico Platense"
                  width={1080}
                  height={300}
                  className="h-8 w-auto"
                />
                <span className="text-xs text-text-secondary leading-tight max-w-[10rem]">
                  Formamos parte del Instituto Médico Platense
                </span>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-8 pt-8 border-t border-violet-deep/15">
          <p className="text-xs text-text-secondary leading-relaxed mb-4">
            {siteConfig.medicalDisclaimer}
          </p>
          <div className="flex flex-wrap items-center gap-4 text-xs text-text-secondary">
            <span>© {new Date().getFullYear()} UCM – Unidad de Cuidado Mamario</span>
            <Link href="/privacidad" className="hover:text-violet-deep transition-colors">
              Política de privacidad
            </Link>
            <Link href="/terminos" className="hover:text-violet-deep transition-colors">
              Términos
            </Link>
            <Link href="/aviso-legal" className="hover:text-violet-deep transition-colors">
              Aviso legal
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
