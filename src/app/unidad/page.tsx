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
        tag="Unidad de Mastología"
        title="Una Unidad de Mastología dedicada al cuidado integral de la salud mamaria"
        description="UCM es una Unidad de Mastología acreditada por la Sociedad Argentina de Mastología (SAM). Reunimos un equipo multidisciplinario y recursos especializados para acompañar a cada paciente en todas las etapas del cuidado mamario: prevención, diagnóstico, tratamiento y seguimiento."
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
                title="Somos una Unidad de Mastología"
                centered={false}
              />
              <p className="text-text-secondary leading-relaxed mt-4">
                Una <strong>Unidad de Mastología</strong> es un equipo de
                profesionales de distintas especialidades que trabajan juntos
                y coordinados para cuidar la salud de tus mamas, en un mismo
                lugar y siguiendo un mismo plan. En vez de que cada
                especialista mire una parte por separado, todos comparten la
                información y deciden en conjunto, con vos en el centro.
              </p>
              <p className="text-text-secondary leading-relaxed mt-4">
                Dicho de otra manera: acá no te vas a sentir rebotando de una
                consulta a otra buscando quién resuelve qué. El equipo se
                organiza alrededor tuyo para que el camino —desde una consulta
                preventiva o un control hasta un diagnóstico y, si hace falta,
                un tratamiento— sea claro, ordenado y acompañado.
              </p>
              <p className="text-text-secondary leading-relaxed mt-4">
                La Unidad de Cuidado Mamario (<strong>UCM</strong>) es el
                nombre con el que se presenta nuestra Unidad de Mastología. La
                dirección está a cargo del{" "}
                <strong>Dr. Aldo Miguel Creton</strong>, especialista en
                Cirugía General y Mastología.
              </p>
            </div>
            <div className="mt-8 md:mt-0">
              <div className="aspect-[4/3] bg-gradient-to-br from-primary-lightest to-lavender/20 rounded-2xl" />
            </div>
          </div>
        </div>
      </section>

      {/* ===== POR QUÉ EXISTE ESTE MODELO ===== */}
      <section className="py-16 md:py-20 bg-gradient-to-br from-primary-lightest/40 to-lavender/10">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
          <div>
            <SectionHeading
              tag="Por qué existe este modelo"
              title="De la atención fragmentada al trabajo en equipo"
              centered={false}
            />
            <p className="text-text-secondary leading-relaxed mt-4">
              Durante mucho tiempo, el cuidado de las enfermedades de la mama
              estuvo repartido entre profesionales que trabajaban por
              separado. Con los años aparecieron muchas herramientas nuevas
              —mamografía, cirugía conservadora, radioterapia, tratamientos
              oncológicos, reconstrucción— y quedó claro que ninguna
              especialidad, sola, podía cubrir todo. El problema era que,
              muchas veces, ese trabajo estaba fragmentado: cada uno hacía su
              parte sin hablar con el resto.
            </p>
            <p className="text-text-secondary leading-relaxed mt-4">
              Las Unidades de Mastología nacieron justamente para resolver
              eso: integrar a todos los especialistas en un mismo equipo. Hoy
              son el estándar de atención recomendado por las principales
              sociedades científicas del mundo.
            </p>
          </div>

          <div>
            <SectionHeading
              tag="El corazón de la Unidad"
              title="El trabajo en equipo, alrededor tuyo"
              centered={false}
            />
            <p className="text-text-secondary leading-relaxed mt-4">
              Lo que distingue a una Unidad no es un aparato ni un
              consultorio: es la forma de trabajar. El punto de encuentro es
              la <strong>reunión multidisciplinaria</strong> (o ateneo), un
              espacio donde el equipo se junta de forma periódica para revisar
              cada caso entre todos y acordar la mejor conducta para cada
              persona.
            </p>
            <p className="text-text-secondary leading-relaxed mt-4">
              En esa reunión, la mirada de quien hace las imágenes se cruza
              con la del cirujano, la del patólogo, la del oncólogo y la del
              resto del equipo. De esa conversación sale un plan pensado a la
              medida de cada paciente, teniendo en cuenta las características
              de su situación y también sus preferencias. Las sociedades
              científicas consideran a esta reunión el verdadero núcleo de una
              Unidad de Mastología, y recomiendan que los casos se presenten
              allí antes de empezar cualquier tratamiento. Así, las decisiones
              son consensuadas y basadas en la mejor evidencia disponible.
            </p>
          </div>

          <div>
            <SectionHeading
              tag="Quiénes forman parte"
              title="Un equipo dedicado especialmente a la mama"
              centered={false}
            />
            <p className="text-text-secondary leading-relaxed mt-4">
              El equipo básico suele estar integrado por:
            </p>
            <ul className="list-disc list-inside text-text-secondary leading-relaxed mt-2 space-y-1 pl-2">
              <li>Mastólogo/a (cirugía mamaria)</li>
              <li>Médico/a de diagnóstico por imágenes (mamografía, ecografía, resonancia)</li>
              <li>Patólogo/a, que estudia las biopsias y confirma los diagnósticos</li>
              <li>Oncólogo/a clínico/a</li>
              <li>Radioterapeuta</li>
            </ul>
            <p className="text-text-secondary leading-relaxed mt-4">
              A medida que cada situación lo requiere, se suman otras
              especialidades: asesoramiento genético, cirugía plástica y
              reconstructiva, psicooncología, fertilidad, medicina nuclear,
              cuidados paliativos, kinesiología, oncogeriatría y más.
            </p>
            <p className="text-text-secondary leading-relaxed mt-4">
              No todas las personas necesitan ver a todos estos especialistas.
              La idea es justamente esa: que el equipo completo esté
              disponible y coordinado, y que cada paciente reciba lo que su
              situación requiere, ni más ni menos.
            </p>
          </div>

          <div>
            <SectionHeading
              tag="Por qué elegir una Unidad de Mastología"
              title="Un mismo equipo, del principio al final"
              centered={false}
            />
            <p className="text-text-secondary leading-relaxed mt-4">
              Que un mismo equipo especializado se ocupe de todo el proceso no
              es solo más cómodo: se asocia a una mejor atención. La evidencia
              científica muestra que las personas atendidas en centros de mama
              multidisciplinarios tienden a recibir tratamientos más adecuados
              y, en varios estudios de gran tamaño, mejores resultados de
              salud en comparación con la atención dispersa entre
              profesionales que no trabajan coordinados.
            </p>
            <p className="text-text-secondary leading-relaxed mt-4">
              En concreto, esto se traduce en cosas simples y valiosas: menos
              vueltas y estudios repetidos, tiempos de diagnóstico más cortos,
              decisiones tomadas en conjunto por especialistas que se dedican
              específicamente a la mama, y un acompañamiento humano en cada
              etapa. Un equipo pensado para que no tengas que atar los cabos
              sola.
            </p>
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

      {/* ===== ACREDITACIÓN SAM ===== */}
      <section className="py-16 md:py-20">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="glass-card rounded-2xl p-8 md:p-10 grid grid-cols-1 md:grid-cols-[auto_1fr] gap-8 items-center">
            <img
              src="/logo_sam2.svg"
              alt="Logo Sociedad Argentina de Mastología"
              className="w-40 h-auto mx-auto md:mx-0"
            />
            <div>
              <p className="text-sm font-semibold text-primary uppercase tracking-wide">
                Acreditación
              </p>
              <h2 className="text-2xl md:text-3xl font-bold text-text-primary mt-2 leading-tight">
                Unidad de Mastología acreditada por la Sociedad Argentina de
                Mastología (SAM)
              </h2>
              <p className="text-text-secondary leading-relaxed mt-4">
                A partir de <strong>abril de 2026</strong>, la UCM obtuvo la
                acreditación como Unidad de Mastología por parte de la
                Sociedad Argentina de Mastología.
              </p>
              <p className="text-text-secondary leading-relaxed mt-4">
                En la Argentina, las Unidades de Mastología pueden acreditarse
                ante la SAM, que desde 2015 impulsa un programa para promover
                y certificar estos equipos en todo el país. La acreditación
                exige, entre otras cosas, que la reunión multidisciplinaria
                funcione de manera periódica y documentada, y que los
                profesionales estén debidamente formados. Es una forma de
                garantizar que detrás del nombre "Unidad" haya, de verdad, un
                equipo trabajando de manera coordinada y con estándares
                actualizados.
              </p>
              <p className="text-text-secondary leading-relaxed mt-4">
                Trabajamos con este modelo porque creemos que la mejor manera
                de cuidarte es hacerlo entre todos, con criterio actualizado y
                con vos como protagonista de cada decisión.
              </p>
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
