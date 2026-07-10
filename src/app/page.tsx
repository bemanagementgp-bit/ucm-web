import { HiCalendarDays, HiUserCircle, HiMapPin, HiUserGroup, HiArrowRight, HiCheckCircle } from "react-icons/hi2";
import { FaWhatsapp } from "react-icons/fa";
import { Hero } from "@/components/ui/Hero";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button, PrimaryButton } from "@/components/ui/Buttons";
import { QuickAccessCard } from "@/components/cards/QuickAccessCard";
import { ServiceCard } from "@/components/cards/ServiceCard";
import { ProfessionalCard } from "@/components/cards/ProfessionalCard";
import { LocationCard } from "@/components/cards/LocationCard";
import { ArticleCard } from "@/components/cards/ArticleCard";
import { MedicalDisclaimer } from "@/components/ui/MedicalDisclaimer";
import { getFeaturedServices } from "@/data/services";
import { getFeaturedProfessionals } from "@/data/professionals";
import { locations } from "@/data/locations";
import { getRecentArticles } from "@/data/articles";
import { equipment } from "@/data/equipment";

export default function HomePage() {
  const featuredServices = getFeaturedServices();
  const featuredProfessionals = getFeaturedProfessionals();
  const recentArticles = getRecentArticles(3);
  const featuredEquipment = equipment[0];

  return (
    <>
      {/* ===== HERO ===== */}
      <Hero
        variant="home"
        tag="Unidad de Cuidado Mamario"
        title="Cuidado integral para cada etapa de tu salud mamaria"
        description="Prevención, diagnóstico, tratamiento y seguimiento con tecnología especializada y un equipo multidisciplinario que te acompaña en todo el proceso."
        image="/images/hero-home.jpg"
        imageAlt="Profesional médica acompañando a una paciente durante una consulta"
      >
        <PrimaryButton href="/turnos" size="lg">
          Solicitar un turno
        </PrimaryButton>
        <Button href="/unidad" variant="outline" size="lg">
          Conocer la unidad
        </Button>
      </Hero>

      {/* Institutional backing */}
      <div className="bg-primary-lightest/50 border-y border-primary-light/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 text-center text-sm text-text-secondary">
          Una unidad del{" "}
          <a
            href="https://www.institutomedicoplatense.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="font-medium text-violet-deep hover:text-primary transition-colors"
          >
            Instituto Médico Platense
          </a>{" "}
          y el{" "}
          <a
            href="https://www.cmdcitybell.com.ar/"
            target="_blank"
            rel="noopener noreferrer"
            className="font-medium text-violet-deep hover:text-primary transition-colors"
          >
            Centro Médico de Diagnóstico City Bell
          </a>
          .
        </div>
      </div>

      {/* ===== ACCESOS RÁPIDOS ===== */}
      <section className="py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <QuickAccessCard
              icon={<HiCalendarDays className="w-6 h-6" />}
              title="Solicitar turno"
              description="Elegí el tipo de atención y la sede donde querés atenderte."
              href="/turnos"
            />
            <QuickAccessCard
              icon={<HiUserCircle className="w-6 h-6" />}
              title="Portal del paciente"
              description="Accedé a tus estudios y resultados desde el portal de tu sede."
              href="/portal-del-paciente"
            />
            <QuickAccessCard
              icon={<HiMapPin className="w-6 h-6" />}
              title="Conocer las sedes"
              description="Encontrá la sede más cercana con los servicios que necesitás."
              href="/sedes"
            />
            <QuickAccessCard
              icon={<HiUserGroup className="w-6 h-6" />}
              title="Ver profesionales"
              description="Conocé al equipo especializado que te va a acompañar."
              href="/profesionales"
            />
          </div>
        </div>
      </section>

      {/* ===== PRESENTACIÓN UCM ===== */}
      <section className="py-16 md:py-20 bg-primary-lightest/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            tag="Nuestra unidad"
            title="Un enfoque integral, en un mismo equipo"
            description="UCM reúne profesionales y recursos especializados para abordar la salud mamaria desde distintas disciplinas, acompañando a cada paciente en todo el proceso."
          />

          <div className="mt-12 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4">
            {[
              { step: "01", label: "Prevención", desc: "Controles periódicos y educación." },
              { step: "02", label: "Diagnóstico", desc: "Estudios por imágenes y evaluación." },
              { step: "03", label: "Evaluación médica", desc: "Consulta multidisciplinaria." },
              { step: "04", label: "Tratamiento", desc: "Plan personalizado e integral." },
              { step: "05", label: "Seguimiento", desc: "Acompañamiento a largo plazo." },
            ].map((item) => (
              <div
                key={item.step}
                className="bg-white rounded-2xl p-5 text-center border border-primary-light/20 hover:shadow-md hover:shadow-primary/5 transition-all"
              >
                <span className="inline-block text-2xl font-bold text-primary/30 mb-2">
                  {item.step}
                </span>
                <h3 className="font-semibold text-text-primary text-sm">{item.label}</h3>
                <p className="text-xs text-text-secondary mt-1">{item.desc}</p>
              </div>
            ))}
          </div>

          <div className="text-center mt-10">
            <Button href="/unidad" variant="outline">
              Conocer nuestro enfoque
              <HiArrowRight className="w-4 h-4" />
            </Button>
          </div>
        </div>
      </section>

      {/* ===== SERVICIOS DESTACADOS ===== */}
      <section className="py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            tag="Servicios"
            title="Atención especializada en salud mamaria"
            description="Contamos con un equipo y recursos dedicados a cada etapa del cuidado mamario."
          />

          <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {featuredServices.map((service) => (
              <ServiceCard key={service.slug} service={service} />
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

      {/* ===== TECNOLOGÍA Y EQUIPAMIENTO ===== */}
      <section className="py-16 md:py-20 bg-gradient-to-br from-violet-deep/[0.03] to-lavender/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            tag="Equipamiento"
            title="Tecnología que acompaña un diagnóstico preciso"
            description="Contamos con equipamiento especializado de última generación para ofrecer estudios de la más alta calidad."
          />

          {featuredEquipment && (
            <div className="mt-12 bg-white rounded-2xl border border-primary-light/30 overflow-hidden md:grid md:grid-cols-2">
              <div className="aspect-video md:aspect-auto bg-gradient-to-br from-violet-deep/5 to-lavender/20 flex items-center justify-center min-h-[300px]">
                <svg className="w-24 h-24 text-violet/15" fill="none" stroke="currentColor" strokeWidth={0.8} viewBox="0 0 24 24">
                  <rect x="2" y="3" width="20" height="14" rx="2" />
                  <path d="M8 21h8M12 17v4" />
                </svg>
              </div>
              <div className="p-8">
                <h3 className="text-2xl font-bold text-text-primary">
                  {featuredEquipment.name}
                </h3>
                <p className="text-violet font-medium mt-1">
                  {featuredEquipment.brand} – {featuredEquipment.model}
                </p>
                <p className="text-text-secondary leading-relaxed mt-4">
                  {featuredEquipment.description}
                </p>
                <ul className="mt-4 space-y-2">
                  {featuredEquipment.benefits.map((b, i) => (
                    <li key={i} className="flex items-start gap-2 text-sm text-text-secondary">
                      <HiCheckCircle className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                      {b}
                    </li>
                  ))}
                </ul>
                <p className="text-xs text-text-secondary mt-4">
                  Sede: {locations.find((l) => l.id === featuredEquipment.location)?.institutionName}
                </p>
              </div>
            </div>
          )}

          <div className="text-center mt-10">
            <Button href="/equipamiento" variant="outline">
              Conocer nuestro equipamiento
              <HiArrowRight className="w-4 h-4" />
            </Button>
          </div>
        </div>
      </section>

      {/* ===== PROFESIONALES ===== */}
      <section className="py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            tag="Equipo"
            title="Un equipo especializado, trabajando de manera integral"
            description="Profesionales de distintas disciplinas que trabajan en conjunto para acompañarte en cada etapa."
          />

          <div className="mt-12 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6">
            {featuredProfessionals.map((p) => (
              <ProfessionalCard key={p.slug} professional={p} />
            ))}
          </div>

          <div className="text-center mt-10">
            <Button href="/profesionales" variant="outline">
              Conocer todo el equipo
              <HiArrowRight className="w-4 h-4" />
            </Button>
          </div>
        </div>
      </section>

      {/* ===== CÓMO SOLICITAR UN TURNO ===== */}
      <section className="py-16 md:py-20 bg-primary-lightest/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            tag="Turnos"
            title="Elegí qué tipo de atención necesitás"
            description="Según el motivo de tu consulta y la sede donde prefieras atenderte, te indicamos el canal correspondiente."
          />

          <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white rounded-2xl border border-primary-light/30 p-8">
              <div className="w-12 h-12 bg-[#25D366]/10 rounded-xl flex items-center justify-center mb-5">
                <FaWhatsapp className="w-6 h-6 text-[#25D366]" />
              </div>
              <h3 className="text-xl font-bold text-text-primary">
                Estudios por imágenes
              </h3>
              <p className="text-text-secondary mt-2">
                Mamografía, ecografía mamaria y otros estudios de diagnóstico por imágenes.
              </p>
              <div className="mt-6 space-y-3">
                {locations.map((loc) => (
                  <a
                    key={loc.id}
                    href="#"
                    className="flex items-center justify-between px-4 py-3 rounded-xl border border-primary-light/30 hover:border-primary/40 hover:bg-primary-lightest/50 transition-all group"
                  >
                    <div>
                      <span className="block font-medium text-sm text-text-primary">
                        {loc.institutionName}
                      </span>
                      <span className="block text-xs text-text-secondary">{loc.address}</span>
                    </div>
                    <HiArrowRight className="w-4 h-4 text-primary/40 group-hover:text-primary group-hover:translate-x-1 transition-all" />
                  </a>
                ))}
              </div>
            </div>

            <div className="bg-white rounded-2xl border border-primary-light/30 p-8">
              <div className="w-12 h-12 bg-primary-lightest rounded-xl flex items-center justify-center mb-5">
                <HiCalendarDays className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-xl font-bold text-text-primary">
                Consulta médica por una patología
              </h3>
              <p className="text-text-secondary mt-2">
                Consultas con mastólogos, oncólogos y otros especialistas de la unidad.
              </p>
              <div className="mt-6 space-y-3">
                <Button href="/turnos" variant="outline" className="w-full justify-between">
                  Solicitar consulta en La Plata
                  <HiArrowRight className="w-4 h-4" />
                </Button>
                <Button href="/turnos" variant="outline" className="w-full justify-between">
                  Solicitar consulta en City Bell
                  <HiArrowRight className="w-4 h-4" />
                </Button>
              </div>
            </div>
          </div>

          <p className="text-sm text-text-secondary text-center mt-6">
            Los turnos médicos son administrados por cada institución según la sede elegida.
          </p>
        </div>
      </section>

      {/* ===== SEDES ===== */}
      <section className="py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            tag="Sedes"
            title="Encontranos en La Plata y City Bell"
            description="UCM funciona dentro de dos instituciones médicas de referencia en la región."
          />

          <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-8">
            {locations.map((loc) => (
              <LocationCard key={loc.id} location={loc} />
            ))}
          </div>
        </div>
      </section>

      {/* ===== PREVENCIÓN ===== */}
      <section className="py-16 md:py-20 bg-primary-lightest/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="md:grid md:grid-cols-2 md:gap-12 items-center">
            <div>
              <SectionHeading
                tag="Prevención"
                title="La prevención también es parte del cuidado"
                centered={false}
              />
              <p className="text-text-secondary leading-relaxed mt-4">
                Los controles periódicos, la consulta médica oportuna y la
                información confiable son herramientas fundamentales para el
                cuidado de la salud mamaria. Un diagnóstico temprano puede hacer
                una diferencia significativa.
              </p>

              <div className="bg-white rounded-xl p-6 border border-primary-light/30 mt-6">
                <p className="text-lg font-semibold text-violet-deep">
                  [Dato preventivo validado por el equipo médico]
                </p>
                <p className="text-sm text-text-secondary mt-2">
                  Fuente: [Fuente del dato – pendiente de validación]
                </p>
              </div>

              <div className="mt-6">
                <Button href="/prevencion">
                  Ver información preventiva
                  <HiArrowRight className="w-4 h-4" />
                </Button>
              </div>
            </div>
            <div className="mt-8 md:mt-0">
              <div className="aspect-[4/3] bg-gradient-to-br from-primary-lightest to-lavender/20 rounded-2xl flex items-center justify-center">
                <span className="text-primary/20 text-sm">[Imagen de prevención]</span>
              </div>
            </div>
          </div>

          <MedicalDisclaimer className="mt-10" />
        </div>
      </section>

      {/* ===== NOVEDADES ===== */}
      <section className="py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            tag="Novedades"
            title="Información y novedades de UCM"
          />

          <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {recentArticles.map((article) => (
              <ArticleCard key={article.slug} article={article} />
            ))}
          </div>

          <div className="text-center mt-10">
            <Button href="/novedades" variant="outline">
              Ver todas las novedades
              <HiArrowRight className="w-4 h-4" />
            </Button>
          </div>
        </div>
      </section>

      {/* ===== CTA FINAL ===== */}
      <section className="py-20 md:py-28 bg-gradient-to-br from-primary-lightest via-lavender/10 to-primary-lightest">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-text-primary leading-tight">
            Tu salud mamaria merece un cuidado especializado
          </h2>
          <p className="text-lg text-text-secondary mt-4 leading-relaxed">
            Encontrá atención, tecnología y acompañamiento profesional en
            nuestras sedes de La Plata y City Bell.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <PrimaryButton href="/turnos" size="lg">
              Solicitar un turno
            </PrimaryButton>
            <Button href="/sedes" variant="outline" size="lg">
              Conocer las sedes
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
