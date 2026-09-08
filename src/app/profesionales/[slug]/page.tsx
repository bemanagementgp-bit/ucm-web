import type { Metadata } from "next";
import { notFound } from "next/navigation";
import {
  HiAcademicCap,
  HiArrowRight,
  HiBriefcase,
  HiCheckCircle,
  HiInformationCircle,
  HiMapPin,
} from "react-icons/hi2";
import { FaWhatsapp } from "react-icons/fa";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { PrimaryButton, Button, WhatsAppButton } from "@/components/ui/Buttons";
import { MedicalDisclaimer } from "@/components/ui/MedicalDisclaimer";
import { professionals, getProfessionalBySlug } from "@/data/professionals";
import { getLocationName, getLocationById } from "@/data/locations";
import { getServiceBySlug } from "@/data/services";

interface ProfessionalPageProps {
  params: Promise<{ slug: string }>;
}

export function generateStaticParams() {
  return professionals
    .filter((p) => !p.noDetailPage)
    .map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: ProfessionalPageProps): Promise<Metadata> {
  const { slug } = await params;
  const professional = getProfessionalBySlug(slug);

  if (!professional) {
    return { title: "Profesional no encontrado" };
  }

  return {
    title: professional.name,
    description: `${professional.name} – ${professional.specialty} en UCM, Unidad de Cuidado Mamario.`,
  };
}

export default async function ProfessionalPage({
  params,
}: ProfessionalPageProps) {
  const { slug } = await params;
  const professional = getProfessionalBySlug(slug);

  if (!professional || professional.noDetailPage) {
    notFound();
  }

  const relatedServices = professional.relatedServices
    .map((s) => getServiceBySlug(s))
    .filter((s): s is NonNullable<typeof s> => Boolean(s));

  return (
    <>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-28 md:pt-32">
        <Breadcrumbs
          items={[
            { label: "Profesionales", href: "/profesionales" },
            { label: professional.name },
          ]}
        />
      </div>

      <section className="pb-16 md:pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {/* Foto y datos principales */}
            <div>
              <div className="aspect-square bg-gradient-to-br from-primary-lightest to-lavender/30 rounded-2xl relative overflow-hidden">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-24 h-24 rounded-full bg-white/60 flex items-center justify-center">
                    <svg
                      className="w-12 h-12 text-primary/40"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" />
                    </svg>
                  </div>
                </div>
              </div>

              <div className="mt-6">
                {professional.consultationWhatsapp ? (
                  <WhatsAppButton
                    href={`https://wa.me/${professional.consultationWhatsapp}?text=${encodeURIComponent(
                      `Hola, la contacto desde la web de UCM. Quisiera solicitar un turno de consulta con ${professional.name}.`
                    )}`}
                    external
                    className="w-full"
                  >
                    <FaWhatsapp className="w-5 h-5" />
                    Consultar por WhatsApp
                  </WhatsAppButton>
                ) : (
                  <PrimaryButton href="/turnos" className="w-full">
                    Solicitar turno
                    <HiArrowRight className="w-4 h-4" />
                  </PrimaryButton>
                )}
              </div>
            </div>

            {/* Información */}
            <div className="md:col-span-2">
              <span className="inline-block text-sm font-medium text-violet tracking-wide uppercase mb-2">
                {professional.specialty}
              </span>
              <h1 className="text-3xl sm:text-4xl font-bold text-text-primary leading-tight">
                {professional.name}
              </h1>

              {professional.license && (
                <p className="text-sm text-text-secondary mt-2">
                  Matrícula: {professional.license}
                </p>
              )}

              <div className="mt-6 flex flex-wrap gap-2">
                {professional.locations.map((locId) => (
                  <span
                    key={locId}
                    className="inline-flex items-center gap-1.5 text-sm bg-primary-lightest text-violet-deep px-3 py-1.5 rounded-full"
                  >
                    <HiMapPin className="w-4 h-4" />
                    {getLocationName(locId)}
                  </span>
                ))}
              </div>

              {/* Formación */}
              <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="glass-card rounded-2xl p-6">
                  <div className="w-10 h-10 bg-violet/10 rounded-xl flex items-center justify-center mb-4">
                    <HiAcademicCap className="w-5 h-5 text-violet" />
                  </div>
                  <h2 className="font-semibold text-text-primary mb-2">
                    Formación académica
                  </h2>
                  <p className="text-sm text-text-secondary leading-relaxed">
                    {professional.education}
                  </p>
                </div>
                <div className="glass-card rounded-2xl p-6">
                  <div className="w-10 h-10 bg-primary-lightest rounded-xl flex items-center justify-center mb-4">
                    <HiBriefcase className="w-5 h-5 text-primary" />
                  </div>
                  <h2 className="font-semibold text-text-primary mb-2">
                    Experiencia profesional
                  </h2>
                  <p className="text-sm text-text-secondary leading-relaxed">
                    {professional.experience}
                  </p>
                </div>
              </div>

              {/* Áreas de cuidado */}
              {professional.areasOfCare.length > 0 && (
                <div className="mt-10">
                  <h2 className="font-semibold text-text-primary mb-4">
                    Áreas de atención
                  </h2>
                  <ul className="space-y-2">
                    {professional.areasOfCare.map((area) => (
                      <li
                        key={area}
                        className="flex items-start gap-2 text-sm text-text-secondary"
                      >
                        <HiCheckCircle className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                        {area}
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Sedes de atención */}
              {professional.locations.length > 0 && (
                <div className="mt-10">
                  <h2 className="font-semibold text-text-primary mb-4">
                    Sedes de atención
                  </h2>
                  {professional.practiceNote && (
                    <div className="flex items-start gap-3 p-4 mb-4 rounded-xl bg-primary-lightest/60 border border-primary-light/40">
                      <HiInformationCircle className="w-5 h-5 text-violet shrink-0 mt-0.5" />
                      <p className="text-sm text-text-secondary leading-relaxed">
                        {professional.practiceNote}
                      </p>
                    </div>
                  )}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {professional.locations.map((locId) => {
                      const loc = getLocationById(locId);
                      if (!loc) return null;
                      return (
                        <div
                          key={locId}
                          className="border border-primary-light/30 rounded-xl p-4"
                        >
                          <p className="font-medium text-text-primary text-sm">
                            {loc.name}
                          </p>
                          <p className="text-xs text-text-secondary mt-1">
                            {loc.institutionName}
                          </p>
                          <p className="text-xs text-text-secondary">
                            {loc.address}
                          </p>
                        </div>
                      );
                    })}
                  </div>
                </div>
              )}

              {/* Servicios relacionados */}
              {relatedServices.length > 0 && (
                <div className="mt-10">
                  <h2 className="font-semibold text-text-primary mb-4">
                    Servicios relacionados
                  </h2>
                  <div className="flex flex-wrap gap-3">
                    {relatedServices.map((service) => (
                      <Button
                        key={service.slug}
                        href={`/servicios/${service.slug}`}
                        variant="outline"
                        size="sm"
                      >
                        {service.name}
                      </Button>
                    ))}
                  </div>
                </div>
              )}

              <MedicalDisclaimer className="mt-10" />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
