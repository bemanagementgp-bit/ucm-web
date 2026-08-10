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
} from "react-icons/hi2";
import { FaWhatsapp } from "react-icons/fa";
import { Hero } from "@/components/ui/Hero";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button, PrimaryButton } from "@/components/ui/Buttons";
import { MedicalDisclaimer } from "@/components/ui/MedicalDisclaimer";
import { EquipmentCard } from "@/components/cards/EquipmentCard";
import { locations } from "@/data/locations";
import { getServiceBySlug } from "@/data/services";
import { getProfessionalBySlug } from "@/data/professionals";
import { equipment } from "@/data/equipment";

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
    step: "01",
    label: "Prevención",
    desc: "Promovemos los controles periódicos y brindamos información confiable para el cuidado de la salud mamaria a lo largo de la vida.",
  },
  {
    step: "02",
    label: "Diagnóstico",
    desc: "Realizamos estudios por imágenes (mamografía, ecografía y otros) con equipamiento especializado y personal técnico capacitado.",
  },
  {
    step: "03",
    label: "Evaluación médica",
    desc: "Un equipo de mastólogos y especialistas evalúa cada caso de forma integral, interpretando estudios y definiendo la conducta a seguir.",
  },
  {
    step: "04",
    label: "Tratamiento",
    desc: "Cuando es necesario, coordinamos el tratamiento junto con oncología, cirugía y cirugía plástica y reconstructiva, según cada situación clínica.",
  },
  {
    step: "05",
    label: "Seguimiento",
    desc: "Acompañamos a cada paciente en los controles posteriores y en las distintas etapas del proceso, incluyendo el sostén emocional.",
  },
];

export default function UnidadPage() {
  return (
    <>
      <Hero
        tag="Nuestra unidad"
        title="Una unidad especializada en el cuidado integral de la salud mamaria"
        description="UCM reúne a un equipo multidisciplinario y recursos especializados para acompañar a cada paciente en todas las etapas del cuidado mamario: prevención, diagnóstico, tratamiento y seguimiento."
      >
        <PrimaryButton href="/turnos">
          Solicitar un turno
        </PrimaryButton>
        <Button href="/profesionales" variant="outline">
          Conocer al equipo
        </Button>
      </Hero>

      {/* ===== PRESENTACIÓN INSTITUCIONAL ===== */}
      <section className="py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="md:grid md:grid-cols-2 md:gap-12 items-center">
            <div>
              <SectionHeading
                tag="Quiénes somos"
                title="Un mismo equipo, distintas disciplinas"
                centered={false}
              />
              <p className="text-text-secondary leading-relaxed mt-4">
                La Unidad de Cuidado Mamario (UCM) nació con el objetivo de
                ofrecer un abordaje integral de la salud mamaria, reuniendo en
                un mismo equipo a profesionales de mastología, diagnóstico por
                imágenes, oncología clínica, cirugía, cirugía plástica y
                reconstructiva, asesoramiento genético y psicooncología.
              </p>
              <p className="text-text-secondary leading-relaxed mt-4">
                Trabajamos de forma coordinada para que cada paciente
                encuentre, en un mismo lugar, el acompañamiento y los recursos
                necesarios en cada etapa: desde la prevención y los controles
                periódicos, hasta el diagnóstico, el tratamiento y el
                seguimiento a largo plazo.
              </p>
              <p className="text-text-secondary leading-relaxed mt-4">
                Nuestro enfoque pone a la persona en el centro, priorizando la
                comunicación clara, el respeto por los tiempos de cada
                paciente y una atención cálida y profesional.
              </p>
            </div>
            <div className="mt-8 md:mt-0">
              <div className="aspect-[4/3] bg-gradient-to-br from-primary-lightest to-lavender/20 rounded-2xl flex items-center justify-center">
                <span className="text-primary/30 text-sm">
                  [Fotografía institucional de la unidad]
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== MISIÓN / VISIÓN / VALORES ===== */}
      <section className="py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            tag="Nuestro compromiso"
            title="Los valores que guían nuestro trabajo"
            description="Estos principios orientan la forma en que acompañamos a cada paciente, en cada etapa del proceso."
          />

          <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {values.map((value) => {
              const Icon = value.icon;
              return (
                <div
                  key={value.title}
                  className="glass-card rounded-2xl p-6"
                >
                  <div className="w-12 h-12 bg-primary-lightest rounded-xl flex items-center justify-center mb-4">
                    <Icon className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="font-semibold text-text-primary">{value.title}</h3>
                  <p className="text-sm text-text-secondary mt-2 leading-relaxed">
                    {value.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ===== RECORRIDO DEL CUIDADO ===== */}
      <section className="py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            tag="Cómo trabajamos"
            title="El recorrido del cuidado mamario"
            description="Un proceso pensado para acompañarte de forma integral, con un equipo coordinado en cada etapa."
          />

          <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-6">
            {journeySteps.map((item) => (
              <div
                key={item.step}
                className="glass-card rounded-2xl p-6 flex gap-5"
              >
                <span className="shrink-0 text-3xl font-bold text-primary/30">
                  {item.step}
                </span>
                <div>
                  <h3 className="font-semibold text-text-primary">{item.label}</h3>
                  <p className="text-sm text-text-secondary mt-1 leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-10">
            <Button href="/servicios" variant="outline">
              Ver todos los servicios
              <HiArrowRight className="w-4 h-4" />
            </Button>
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
