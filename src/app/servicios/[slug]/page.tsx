import type { Metadata } from "next";
import { notFound } from "next/navigation";
import {
  HiArrowRight,
  HiCheckCircle,
  HiClock,
  HiMapPin,
} from "react-icons/hi2";
import { FaWhatsapp } from "react-icons/fa";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { FAQAccordion } from "@/components/ui/FAQAccordion";
import { MedicalDisclaimer } from "@/components/ui/MedicalDisclaimer";
import { Button, PrimaryButton, WhatsAppButton } from "@/components/ui/Buttons";
import { ProfessionalCard } from "@/components/cards/ProfessionalCard";
import { EquipmentCard } from "@/components/cards/EquipmentCard";
import { getServiceBySlug, services } from "@/data/services";
import { getProfessionalBySlug } from "@/data/professionals";
import { getLocationName } from "@/data/locations";
import { getEquipmentBySlug } from "@/data/equipment";
import { siteConfig } from "@/data/site";

interface ServicePageProps {
  params: Promise<{ slug: string }>;
}

export function generateStaticParams() {
  return services.map((service) => ({ slug: service.slug }));
}

export async function generateMetadata({
  params,
}: ServicePageProps): Promise<Metadata> {
  const { slug } = await params;
  const service = getServiceBySlug(slug);

  if (!service) {
    return { title: "Servicio no encontrado" };
  }

  return {
    title: service.name,
    description: service.shortDescription,
  };
}

export default async function ServicePage({ params }: ServicePageProps) {
  const { slug } = await params;
  const service = getServiceBySlug(slug);

  if (!service) {
    notFound();
  }

  const relatedProfessionals = service.relatedProfessionals
    .map((slug) => getProfessionalBySlug(slug))
    .filter((p): p is NonNullable<typeof p> => Boolean(p));

  const relatedEquipment = service.relatedEquipment
    .map((slug) => getEquipmentBySlug(slug))
    .filter((e): e is NonNullable<typeof e> => Boolean(e));

  return (
    <>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Breadcrumbs
          items={[
            { label: "Servicios", href: "/servicios" },
            { label: service.name },
          ]}
        />
      </div>

      {/* ===== ENCABEZADO ===== */}
      <section className="py-10 md:py-14">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <span className="inline-block text-sm font-medium text-violet tracking-wide uppercase mb-3">
            {serviceCategoryLabel(service.category)}
          </span>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-text-primary leading-tight max-w-3xl">
            {service.name}
          </h1>
          <p className="mt-4 text-lg text-text-secondary leading-relaxed max-w-2xl">
            {service.description}
          </p>
        </div>
      </section>

      {/* ===== DETALLE DEL SERVICIO ===== */}
      <section className="py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
            <div className="lg:col-span-2 space-y-10">
              <div>
                <h2 className="text-xl font-bold text-text-primary mb-3">
                  ¿Para qué sirve?
                </h2>
                <p className="text-text-secondary leading-relaxed">
                  {service.purpose}
                </p>
              </div>

              <div>
                <h2 className="text-xl font-bold text-text-primary mb-3">
                  ¿Cómo se realiza?
                </h2>
                <p className="text-text-secondary leading-relaxed">
                  {service.procedure}
                </p>
              </div>

              <div>
                <h2 className="text-xl font-bold text-text-primary mb-3">
                  Preparación
                </h2>
                <p className="text-text-secondary leading-relaxed">
                  {service.preparation}
                </p>
              </div>

              {service.faqs.length > 0 && (
                <div>
                  <h2 className="text-xl font-bold text-text-primary mb-4">
                    Preguntas frecuentes
                  </h2>
                  <FAQAccordion faqs={service.faqs} />
                </div>
              )}
            </div>

            {/* ===== SIDEBAR ===== */}
            <div className="space-y-6">
              <div className="glass-card rounded-2xl p-6">
                <div className="flex items-start gap-3">
                  <HiClock className="w-5 h-5 text-violet shrink-0 mt-0.5" />
                  <div>
                    <span className="block text-sm font-semibold text-text-primary">
                      Duración
                    </span>
                    <span className="block text-sm text-text-secondary mt-1">
                      {service.duration}
                    </span>
                  </div>
                </div>

                {service.locations.length > 0 && (
                  <div className="flex items-start gap-3 mt-5">
                    <HiMapPin className="w-5 h-5 text-violet shrink-0 mt-0.5" />
                    <div>
                      <span className="block text-sm font-semibold text-text-primary">
                        Sedes disponibles
                      </span>
                      <ul className="mt-1 space-y-1">
                        {service.locations.map((locationId) => (
                          <li
                            key={locationId}
                            className="text-sm text-text-secondary"
                          >
                            {getLocationName(locationId)}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                )}

                <div className="mt-6">
                  <ServiceCTA service={service} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== PROFESIONALES RELACIONADOS ===== */}
      {relatedProfessionals.length > 0 && (
        <section className="py-16 md:py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <SectionHeading
              tag="Equipo"
              title="Profesionales que brindan este servicio"
              centered={false}
            />
            <div className="mt-10 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6">
              {relatedProfessionals.map((professional) => (
                <ProfessionalCard
                  key={professional.slug}
                  professional={professional}
                />
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ===== EQUIPAMIENTO RELACIONADO ===== */}
      {relatedEquipment.length > 0 && (
        <section className="py-16 md:py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <SectionHeading
              tag="Equipamiento"
              title="Tecnología utilizada en este servicio"
              centered={false}
            />
            <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 gap-6">
              {relatedEquipment.map((item) => (
                <EquipmentCard key={item.slug} equipment={item} />
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ===== CTA FINAL ===== */}
      <section className="py-16 md:py-20">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-text-primary leading-tight">
            ¿Querés realizarte este estudio o consulta?
          </h2>
          <p className="text-text-secondary mt-3 leading-relaxed">
            Contactanos y te ayudamos a coordinar tu turno en la sede que
            elijas.
          </p>
          <div className="mt-6 flex flex-wrap justify-center gap-4">
            <ServiceCTA service={service} size="lg" />
          </div>
          <MedicalDisclaimer className="mt-10 text-left" />
        </div>
      </section>
    </>
  );
}

function serviceCategoryLabel(category: string): string {
  const labels: Record<string, string> = {
    "prevencion-diagnostico": "Prevención y diagnóstico",
    "consultas-medicas": "Consultas médicas",
    intervencionismo: "Intervencionismo",
    tratamientos: "Tratamientos",
    acompanamiento: "Acompañamiento",
  };
  return labels[category] ?? category;
}

function ServiceCTA({
  service,
  size = "md",
}: {
  service: NonNullable<ReturnType<typeof getServiceBySlug>>;
  size?: "sm" | "md" | "lg";
}) {
  if (service.appointmentType === "images") {
    return (
      <WhatsAppButton
        href={`https://wa.me/${siteConfig.whatsapp.replace(/\D/g, "")}`}
        external
        size={size}
        className="w-full"
      >
        <FaWhatsapp className="w-5 h-5" />
        Coordinar por WhatsApp
      </WhatsAppButton>
    );
  }

  if (service.appointmentType === "pathology") {
    return (
      <PrimaryButton
        href={siteConfig.patientPortalUrl}
        external
        size={size}
        className="w-full"
      >
        Ir al portal del paciente
        <HiArrowRight className="w-4 h-4" />
      </PrimaryButton>
    );
  }

  if (service.appointmentType === "interventionism") {
    return (
      <PrimaryButton href="/turnos" size={size} className="w-full">
        Consultar por este procedimiento
        <HiCheckCircle className="w-4 h-4" />
      </PrimaryButton>
    );
  }

  return (
    <PrimaryButton href="/turnos" size={size} className="w-full">
      Solicitar un turno
      <HiArrowRight className="w-4 h-4" />
    </PrimaryButton>
  );
}
