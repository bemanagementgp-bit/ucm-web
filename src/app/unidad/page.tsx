import type { Metadata } from "next";
import {
  HiArrowRight,
  HiArrowTopRightOnSquare,
  HiCalendarDays,
  HiClock,
  HiMapPin,
  HiPhone,
  HiHeart,
  HiShieldCheck,
  HiSparkles,
  HiCpuChip,
  HiUserGroup,
  HiHandRaised,
  HiCheckCircle,
  HiMagnifyingGlassCircle,
  HiClipboardDocumentCheck,
  HiArrowPath,
} from "react-icons/hi2";
import { FaWhatsapp } from "react-icons/fa";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button, PrimaryButton } from "@/components/ui/Buttons";
import { MedicalDisclaimer } from "@/components/ui/MedicalDisclaimer";
import { EquipmentCard } from "@/components/cards/EquipmentCard";
import { locations } from "@/data/locations";
import { getServiceBySlug } from "@/data/services";
import { getProfessionalBySlug } from "@/data/professionals";
import { equipment } from "@/data/equipment";
import { UnidadModeloModal } from "@/components/ui/UnidadModeloModal";

export const metadata: Metadata = {
  title: "La unidad",
  description:
    "Conocé la Unidad de Cuidado Mamario (UCM): un equipo multidisciplinario dedicado a la prevención, el diagnóstico, el tratamiento y el seguimiento integral de la salud mamaria en La Plata y City Bell. Conocé nuestras sedes y equipamiento.",
};

const values = [
  {
    icon: HiHeart,
    title: "Atención integral",
    description:
      "Abordamos la salud mamaria en todas sus dimensiones, desde la prevención hasta el acompañamiento posterior al tratamiento.",
  },
  {
    icon: HiShieldCheck,
    title: "Prevención",
    description:
      "Promovemos los controles periódicos y la información confiable como herramientas clave del cuidado.",
  },
  {
    icon: HiSparkles,
    title: "Calidad médica",
    description:
      "Trabajamos con criterios clínicos actualizados y un equipo de profesionales especializados en patología mamaria.",
  },
  {
    icon: HiCpuChip,
    title: "Tecnología",
    description:
      "Contamos con equipamiento especializado para acompañar diagnósticos precisos y procedimientos seguros.",
  },
  {
    icon: HiHandRaised,
    title: "Cercanía",
    description:
      "Ponemos a cada paciente en el centro, con una comunicación clara y un trato cálido en todo momento.",
  },
  {
    icon: HiUserGroup,
    title: "Trabajo interdisciplinario",
    description:
      "Mastología, diagnóstico por imágenes, oncología, cirugía y acompañamiento psicológico trabajan de forma coordinada.",
  },
  {
    icon: HiCheckCircle,
    title: "Acompañamiento",
    description:
      "Acompañamos a cada paciente y su familia durante todo el proceso, con información clara en cada etapa.",
  },
];

const journeySteps = [
  {
    icon: HiShieldCheck,
    label: "Prevención",
    desc: "Controles periódicos e información confiable para el cuidado a lo largo de la vida.",
  },
  {
    icon: HiMagnifyingGlassCircle,
    label: "Diagnóstico",
    desc: "Estudios por imágenes con equipamiento especializado y personal capacitado.",
  },
  {
    icon: HiClipboardDocumentCheck,
    label: "Evaluación médica",
    desc: "El equipo evalúa cada caso, interpreta estudios y define la conducta a seguir.",
  },
  {
    icon: HiHeart,
    label: "Tratamiento",
    desc: "Oncología, cirugía y cirugía plástica coordinadas según cada situación clínica.",
  },
  {
    icon: HiArrowPath,
    label: "Seguimiento",
    desc: "Acompañamos los controles posteriores y el sostén emocional a largo plazo.",
  },
];

export default function UnidadPage() {
  return (
    <>
      {/* ===== HERO + PRESENTACIÓN (fusionados) ===== */}
      <section className="relative overflow-hidden">
        <div className="absolute -top-24 right-0 w-[36rem] h-[36rem] bg-primary-light/25 rounded-full blur-[120px] pointer-events-none" />
        <div className="absolute top-1/3 -left-24 w-96 h-96 bg-lavender/20 rounded-full blur-[110px] pointer-events-none" />
        <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-primary-light/40 to-transparent" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-16 md:pt-40 md:pb-24">
          <div className="md:grid md:grid-cols-2 md:gap-12 md:items-center">
            <div>
              <span className="inline-block text-sm font-medium text-violet tracking-wide uppercase mb-4 bg-violet/10 px-4 py-1.5 rounded-full">
                Unidad de Mastología
              </span>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-text-primary leading-[1.1] tracking-tight">
                Somos una Unidad de Mastología
              </h1>
              <a
                href="#acreditacion-sam"
                className="inline-flex items-center gap-2 mt-4 pl-2 pr-4 py-1.5 rounded-full bg-primary-lightest border border-primary-light/40 text-xs font-semibold text-primary hover:bg-primary/10 transition-colors"
                aria-label="Ver acreditación SAM"
              >
                <span className="w-2 h-2 rounded-full bg-primary" aria-hidden="true" />
                Acreditada por la SAM
              </a>
              <p className="mt-6 text-lg text-text-secondary leading-relaxed">
                Una <strong>Unidad de Mastología</strong> es un equipo de
                profesionales de distintas especialidades que trabajan juntos y
                coordinados para cuidar la salud de tus mamas: acá no te vas a
                sentir rebotando de una consulta a otra, el equipo se organiza
                alrededor tuyo para que el camino sea claro, ordenado y
                acompañado.
              </p>
              <p className="mt-4 text-lg text-text-secondary leading-relaxed">
                La Unidad de Cuidado Mamario (<strong>UCM</strong>) es el
                nombre con el que se presenta nuestra Unidad de Mastología. La
                dirección está a cargo del{" "}
                <strong>Dr. Aldo Miguel Creton</strong>.
              </p>
              <div className="mt-8 flex flex-wrap gap-4">
                <PrimaryButton href="/turnos">
                  Solicitar un turno
                </PrimaryButton>
                <Button href="/profesionales" variant="outline">
                  Conocer al equipo
                </Button>
              </div>
            </div>
            <div className="mt-10 md:mt-0 relative">
              <div className="relative aspect-[4/3] rounded-2xl overflow-hidden bg-gradient-to-br from-primary-lightest to-lavender/30 shadow-2xl shadow-primary/10" />
              <div className="absolute -bottom-4 -left-4 w-24 h-24 bg-primary-light/40 rounded-full blur-2xl" />
              <div className="absolute -top-4 -right-4 w-32 h-32 bg-lavender/30 rounded-full blur-2xl" />
            </div>
          </div>
        </div>
      </section>

      {/* ===== SOBRE EL MODELO (MODAL) ===== */}
      <section className="py-8 md:py-10 bg-gradient-to-br from-primary-lightest/40 to-lavender/10">
        <UnidadModeloModal />
      </section>

      {/* ===== VALORES ===== */}
      <section className="py-12 md:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            tag="Nuestro compromiso"
            title="Los valores que guían nuestro trabajo"
          />

          <div className="mt-10 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-7 gap-3">
            {values.map((value) => {
              const Icon = value.icon;
              return (
                <div
                  key={value.title}
                  className="glass-card rounded-xl p-4 flex flex-col items-center text-center gap-2"
                >
                  <div className="w-10 h-10 bg-primary-lightest rounded-lg flex items-center justify-center">
                    <Icon className="w-5 h-5 text-primary" />
                  </div>
                  <h3 className="text-sm font-semibold text-text-primary leading-tight">
                    {value.title}
                  </h3>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ===== RECORRIDO DEL CUIDADO ===== */}
      <section className="py-12 md:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            tag="Cómo trabajamos"
            title="El recorrido del cuidado mamario"
            description="Estas son las cinco etapas del recorrido; dentro de cada una brindamos múltiples servicios —consultas, estudios, procedimientos, tratamientos y acompañamiento— coordinados por el mismo equipo."
          />

          <div className="mt-10 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-3">
            {journeySteps.map((item) => {
              const Icon = item.icon;
              return (
                <div
                  key={item.label}
                  className="glass-card rounded-xl p-4 flex flex-col items-center text-center gap-2"
                >
                  <div className="w-10 h-10 bg-primary-lightest rounded-lg flex items-center justify-center">
                    <Icon className="w-5 h-5 text-primary" />
                  </div>
                  <h3 className="text-sm font-semibold text-text-primary leading-tight">
                    {item.label}
                  </h3>
                  <p className="text-xs text-text-secondary leading-snug">
                    {item.desc}
                  </p>
                </div>
              );
            })}
          </div>

          <div className="text-center mt-8 space-y-3">
            <p className="text-sm text-text-secondary">
              Ofrecemos muchos más servicios además de estas etapas.
            </p>
            <PrimaryButton href="/servicios">
              Ver todos los servicios
              <HiArrowRight className="w-4 h-4" />
            </PrimaryButton>
          </div>
        </div>
      </section>

      {/* ===== ACREDITACIÓN SAM ===== */}
      <section id="acreditacion-sam" className="py-10 md:py-14 scroll-mt-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="glass-card rounded-2xl p-5 md:p-6 flex flex-col md:flex-row md:items-center gap-5">
            <img
              src="/logo_sam2.svg"
              alt="Logo Sociedad Argentina de Mastología"
              className="w-24 h-auto mx-auto md:mx-0 shrink-0"
            />
            <div className="text-center md:text-left">
              <p className="text-xs font-semibold text-primary uppercase tracking-wider">
                Acreditación · Abril 2026
              </p>
              <h2 className="text-lg md:text-xl font-bold text-text-primary mt-1 leading-snug">
                Unidad de Mastología acreditada por la Sociedad Argentina de
                Mastología (SAM)
              </h2>
            </div>
          </div>
        </div>
      </section>

      {/* ===== RESPALDO INSTITUCIONAL ===== */}
      <section className="py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            tag="Respaldo institucional"
            title="Una unidad que funciona dentro de instituciones de referencia"
            description="UCM desarrolla su actividad en el Instituto Médico Platense y en el Centro Médico de Diagnóstico City Bell, dos instituciones con trayectoria en la región."
          />

          <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="glass-card rounded-2xl p-8">
              <h3 className="text-xl font-bold text-text-primary">
                Instituto Médico Platense
              </h3>
              <p className="text-text-secondary leading-relaxed mt-3">
                Institución de referencia en la ciudad de La Plata, sede
                principal de UCM, donde se realizan estudios por imágenes,
                consultas médicas, procedimientos de intervencionismo y
                cirugías.
              </p>
              <a
                href="https://www.institutomedicoplatense.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 text-sm font-medium text-violet hover:text-primary transition-colors mt-4"
              >
                Conocer más
                <HiArrowRight className="w-4 h-4" />
              </a>
            </div>
            <div className="glass-card rounded-2xl p-8">
              <h3 className="text-xl font-bold text-text-primary">
                Centro Médico de Diagnóstico City Bell
              </h3>
              <p className="text-text-secondary leading-relaxed mt-3">
                Institución especializada en diagnóstico por imágenes en la
                zona norte de La Plata, donde UCM ofrece estudios y consultas
                médicas.
              </p>
              <a
                href="https://www.cmdcitybell.com.ar/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 text-sm font-medium text-violet hover:text-primary transition-colors mt-4"
              >
                Conocer más
                <HiArrowRight className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ===== SEDES ===== */}
      <section id="sedes" className="py-16 md:py-20 scroll-mt-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            tag="Sedes"
            title="Nuestras sedes en La Plata y City Bell"
            description="UCM funciona dentro de instituciones médicas de referencia en cada ciudad, con equipamiento y profesionales propios. Encontrá la dirección, los servicios disponibles y el equipo de cada sede."
          />
        </div>

        {locations.map((location, index) => {
          const services = location.servicesAvailable
            .map((slug) => getServiceBySlug(slug))
            .filter((s): s is NonNullable<typeof s> => Boolean(s));
          const teamMembers = location.professionals
            .map((slug) => getProfessionalBySlug(slug))
            .filter((p): p is NonNullable<typeof p> => Boolean(p));

          return (
            <div
              key={location.id}
              className={`py-12 ${""}`}
            >
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <SectionHeading
                  tag={location.city}
                  title={location.name}
                  description={location.description}
                  centered={false}
                />

                <div className="mt-10 grid grid-cols-1 lg:grid-cols-2 gap-10">
                  {/* Mapa */}
                  <div>
                    <div className="aspect-video rounded-2xl overflow-hidden border border-primary-light/30 bg-primary-lightest">
                      <iframe
                        src={location.mapsEmbed}
                        className="w-full h-full"
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                        title={`Mapa de ${location.name}`}
                      />
                    </div>
                    <p className="text-sm text-text-secondary leading-relaxed mt-4">
                      {location.directions}
                    </p>
                    <div className="mt-4">
                      <Button href={location.mapsUrl} variant="outline" external>
                        Cómo llegar
                        <HiArrowTopRightOnSquare className="w-4 h-4" />
                      </Button>
                    </div>
                  </div>

                  {/* Datos de contacto */}
                  <div>
                    <div className="glass-card rounded-2xl p-6 space-y-4">
                      <div className="flex items-start gap-3">
                        <HiMapPin className="w-5 h-5 text-violet shrink-0 mt-0.5" />
                        <div>
                          <p className="font-medium text-text-primary text-sm">
                            {location.institutionName}
                          </p>
                          <p className="text-sm text-text-secondary">
                            {location.address}
                          </p>
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <HiClock className="w-5 h-5 text-violet shrink-0 mt-0.5" />
                        <p className="text-sm text-text-secondary">{location.hours}</p>
                      </div>
                      <div className="flex items-start gap-3">
                        <HiPhone className="w-5 h-5 text-violet shrink-0 mt-0.5" />
                        <p className="text-sm text-text-secondary">{location.phone}</p>
                      </div>
                      <div className="flex items-start gap-3">
                        <HiUserGroup className="w-5 h-5 text-violet shrink-0 mt-0.5" />
                        <p className="text-sm text-text-secondary">
                          {location.accessibility}
                        </p>
                      </div>
                    </div>

                    <div className="mt-6 flex flex-wrap gap-3">
                      <PrimaryButton href="/turnos">
                        <HiCalendarDays className="w-4 h-4" />
                        Solicitar turno
                      </PrimaryButton>
                      <Button
                        href={`https://wa.me/${location.whatsapp.replace(/\D/g, "")}`}
                        variant="whatsapp"
                        external
                      >
                        <FaWhatsapp className="w-4 h-4" />
                        WhatsApp
                      </Button>
                      <Button href={location.patientPortalUrl} variant="outline" external>
                        Portal del paciente
                        <HiArrowTopRightOnSquare className="w-4 h-4" />
                      </Button>
                    </div>
                  </div>
                </div>

                {/* Servicios disponibles */}
                {services.length > 0 && (
                  <div className="mt-12">
                    <h3 className="font-semibold text-text-primary mb-4">
                      Servicios disponibles en esta sede
                    </h3>
                    <div className="flex flex-wrap gap-3">
                      {services.map((service) => (
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

                {/* Equipo en esta sede */}
                {teamMembers.length > 0 && (
                  <div className="mt-10">
                    <h3 className="font-semibold text-text-primary mb-4">
                      Profesionales en esta sede
                    </h3>
                    <div className="flex flex-wrap gap-3">
                      {teamMembers.map((professional) => (
                        <Button
                          key={professional.slug}
                          href={`/profesionales/${professional.slug}`}
                          variant="ghost"
                          size="sm"
                        >
                          {professional.name}
                        </Button>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </div>
          );
        })}
      </section>

      {/* ===== EQUIPAMIENTO ===== */}
      <section
        id="equipamiento"
        className="py-16 md:py-20 bg-gradient-to-br from-violet-deep/[0.03] to-lavender/10 scroll-mt-24"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            tag="Equipamiento"
            title="Tecnología al servicio del diagnóstico mamario"
            description="Contamos con equipamiento especializado en ambas sedes, operado por personal técnico capacitado, para acompañar diagnósticos precisos y procedimientos seguros."
          />

          <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-6">
            {equipment.map((item) => (
              <EquipmentCard key={item.slug} equipment={item} />
            ))}
          </div>
        </div>
      </section>


      {/* ===== CTA FINAL ===== */}
      <section className="py-20 md:py-28">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-text-primary leading-tight">
            Conocé a nuestro equipo y solicitá tu turno
          </h2>
          <p className="text-lg text-text-secondary mt-4 leading-relaxed">
            Estamos para acompañarte en cada etapa del cuidado de tu salud
            mamaria, en La Plata y en City Bell.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <PrimaryButton href="/turnos" size="lg">
              Solicitar un turno
            </PrimaryButton>
            <Button href="#sedes" variant="outline" size="lg">
              Conocer las sedes
            </Button>
          </div>
          <MedicalDisclaimer className="mt-10 text-left" />
        </div>
      </section>
    </>
  );
}
