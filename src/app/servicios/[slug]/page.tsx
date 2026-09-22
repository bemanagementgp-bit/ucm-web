import type { Metadata } from "next";
import { notFound } from "next/navigation";
import {
  HiArrowRight,
  HiClock,
  HiMapPin,
} from "react-icons/hi2";
import { FaWhatsapp } from "react-icons/fa";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { CtaPanel } from "@/components/ui/CtaPanel";
import { Reveal } from "@/components/motion/Reveal";
import { SplitReveal } from "@/components/motion/SplitReveal";
import { FAQAccordion } from "@/components/ui/FAQAccordion";
import { MedicalDisclaimer } from "@/components/ui/MedicalDisclaimer";
import { PrimaryButton, WhatsAppButton } from "@/components/ui/Buttons";
import { ProfessionalCard } from "@/components/cards/ProfessionalCard";
import { EquipmentCard } from "@/components/cards/EquipmentCard";
import { getServiceBySlug, services } from "@/data/services";
import { getProfessionalBySlug } from "@/data/professionals";
import { getLocationName } from "@/data/locations";
import { getEquipmentBySlug } from "@/data/equipment";
import { appointmentLinks } from "@/data/appointments";

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
          <Reveal y={14} duration={0.5}>
            <span className="eyebrow text-xs font-semibold text-violet tracking-[0.12em] uppercase">
              {serviceCategoryLabel(service.category)}
            </span>
          </Reveal>
          <SplitReveal
            as="h1"
            text={service.name}
            immediate
            delay={0.1}
            className="mt-5 text-3xl sm:text-4xl lg:text-[3.25rem] font-bold text-text-primary leading-[1.08] tracking-[-0.02em] max-w-4xl text-balance"
          />
          <Reveal y={18} delay={0.28}>
            <p className="mt-5 text-lg text-text-secondary leading-relaxed max-w-2xl text-pretty">
              {service.description}
            </p>
          </Reveal>
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
              <div className="glass-card rounded-3xl p-6">
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
            <div className="mt-10 grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6">
              {relatedProfessionals.map((professional, index) => (
                <Reveal
                  key={professional.slug}
                  y={22}
                  delay={Math.min(index, 8) * 0.06}
                  className="h-full"
                >
                  <ProfessionalCard professional={professional} />
                </Reveal>
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
              {relatedEquipment.map((item, index) => (
                <Reveal key={item.slug} y={22} delay={index * 0.1} className="h-full">
                  <EquipmentCard equipment={item} className="h-full" />
                </Reveal>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ===== CTA FINAL ===== */}
      <CtaPanel
        title="¿Querés realizarte este estudio o consulta?"
        description="Contactanos y te ayudamos a coordinar tu turno en la sede que elijas."
        footer={<MedicalDisclaimer className="mt-10 text-left" />}
      >
        <ServiceCTA service={service} size="lg" />
      </CtaPanel>
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
  // Si el servicio define un WhatsApp propio, tiene prioridad sobre el genérico por tipo.
  if (service.appointmentWhatsapp) {
    const msg = encodeURIComponent(
      `Hola, quiero solicitar un turno de ${service.name} en UCM.`,
    );
    return (
      <WhatsAppButton
        href={`https://wa.me/${service.appointmentWhatsapp}?text=${msg}`}
        external
        size={size}
        className="w-full"
      >
        <FaWhatsapp className="w-5 h-5" />
        Solicitar turno por WhatsApp
      </WhatsAppButton>
    );
  }

  if (service.appointmentType === "images") {
    return (
      <WhatsAppButton
        href={appointmentLinks.images.imp.url}
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
      <WhatsAppButton
        href={appointmentLinks.pathology.imp.url}
        external
        size={size}
        className="w-full"
      >
        <FaWhatsapp className="w-5 h-5" />
        Solicitar turno por WhatsApp
      </WhatsAppButton>
    );
  }

  if (service.appointmentType === "interventionism") {
    return (
      <WhatsAppButton
        href={appointmentLinks.interventionism.imp.url}
        external
        size={size}
        className="w-full"
      >
        <FaWhatsapp className="w-5 h-5" />
        Consultar por WhatsApp
      </WhatsAppButton>
    );
  }

  return (
    <PrimaryButton href="/turnos" size={size} className="w-full">
      Solicitar un turno
      <HiArrowRight className="w-4 h-4" />
    </PrimaryButton>
  );
}
