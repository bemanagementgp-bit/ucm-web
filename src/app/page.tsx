import Image from "next/image";
import { HiCalendarDays, HiUserCircle, HiMapPin, HiUserGroup, HiArrowRight, HiCheckCircle } from "react-icons/hi2";
import { FaWhatsapp } from "react-icons/fa";
import { Hero } from "@/components/ui/Hero";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button, PrimaryButton } from "@/components/ui/Buttons";
import { ProcessSteps } from "@/components/ui/ProcessSteps";
import { Marquee } from "@/components/ui/Marquee";
import { Carousel } from "@/components/ui/Carousel";
import { CtaPanel } from "@/components/ui/CtaPanel";
import { QuickAccessCard } from "@/components/cards/QuickAccessCard";
import { ServiceMediaCard } from "@/components/cards/ServiceMediaCard";
import { ProfessionalCard } from "@/components/cards/ProfessionalCard";
import { LocationCard } from "@/components/cards/LocationCard";
import { ArticleCard } from "@/components/cards/ArticleCard";
import { MedicalDisclaimer } from "@/components/ui/MedicalDisclaimer";
import { Reveal, RevealGroup, RevealItem } from "@/components/motion/Reveal";
import { ArrowCircle } from "@/components/ui/ArrowCircle";
import { getFeaturedServices } from "@/data/services";
import { getFeaturedProfessionals } from "@/data/professionals";
import { locations } from "@/data/locations";
import { getRecentArticles } from "@/data/articles";
import { equipment } from "@/data/equipment";
import { siteConfig } from "@/data/site";

const journeySteps = [
  { step: "01", label: "Prevención", desc: "Controles periódicos y educación." },
  { step: "02", label: "Diagnóstico", desc: "Estudios por imágenes y evaluación." },
  { step: "03", label: "Evaluación médica", desc: "Consulta multidisciplinaria." },
  { step: "04", label: "Tratamiento", desc: "Plan personalizado e integral." },
  { step: "05", label: "Seguimiento", desc: "Acompañamiento a largo plazo." },
];

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
        image="/images/hero-home.png"
        imageAlt="Profesional médica acompañando a una paciente durante una consulta"
      >
        <PrimaryButton href="/turnos" size="lg">
          Solicitar un turno
        </PrimaryButton>
        <Button href="/unidad" variant="outlineLight" size="lg">
          Conocer la unidad
        </Button>
      </Hero>

      {/*
        ===== RESPIRO =====
        Sección secundaria entre el hero y la primera sección de contenido:
        fondo blanco, mucho aire y nada que compita con la foto de arriba.
      */}
      <section className="bg-white py-14 md:py-20 overflow-hidden">
        <Reveal y={12}>
          <p className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-sm text-text-secondary">
            Una unidad del{" "}
            <a
              href="https://www.institutomedicoplatense.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="font-medium text-violet-deep hover:text-primary transition-colors underline decoration-primary/30 underline-offset-4 decoration-1 hover:decoration-primary"
            >
              Instituto Médico Platense
            </a>{" "}
            y el{" "}
            <a
              href="https://www.cmdcitybell.com.ar/"
              target="_blank"
              rel="noopener noreferrer"
              className="font-medium text-violet-deep hover:text-primary transition-colors underline decoration-primary/30 underline-offset-4 decoration-1 hover:decoration-primary"
            >
              Centro Médico de Diagnóstico City Bell
            </a>
            .
          </p>
        </Reveal>

        <Marquee
          items={featuredServices.map((service) => service.name)}
          className="mt-12 md:mt-16"
        />
      </section>

      {/*
        ===== SERVICIOS =====
        Primera sección de contenido: tarjetas altas con la imagen a sangre,
        en una pista horizontal.
      */}
      <section className="relative py-20 md:py-28 bg-gradient-brand-soft noise-overlay overflow-hidden">
        <div className="relative z-[2] max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            tag="Servicios"
            title="Atención especializada en salud mamaria"
            description="Contamos con un equipo y recursos dedicados a cada etapa del cuidado mamario."
            centered={false}
          />

          <Reveal y={32} delay={0.12} className="mt-12">
            <Carousel
              label="Servicios destacados"
              action={
                <Button href="/servicios" variant="outline">
                  Ver todos los servicios
                  <HiArrowRight className="w-4 h-4" />
                </Button>
              }
            >
              {featuredServices.map((service) => (
                <ServiceMediaCard key={service.slug} service={service} />
              ))}
            </Carousel>
          </Reveal>
        </div>
      </section>

      {/* ===== ACCESOS RÁPIDOS ===== */}
      <section className="py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <RevealGroup stagger={0.07} className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <RevealItem>
              <QuickAccessCard
                icon={<HiCalendarDays className="w-6 h-6" />}
                title="Solicitar turno"
                description="Elegí el tipo de atención y la sede donde querés atenderte."
                href="/turnos"
              />
            </RevealItem>
            <RevealItem>
              <QuickAccessCard
                icon={<HiUserCircle className="w-6 h-6" />}
                title="Portal del paciente"
                description="Accedé a tus estudios y resultados desde el portal de tu sede."
                href={siteConfig.patientPortalUrl}
                external
              />
            </RevealItem>
            <RevealItem>
              <QuickAccessCard
                icon={<HiMapPin className="w-6 h-6" />}
                title="Conocer las sedes"
                description="Encontrá la sede más cercana con los servicios que necesitás."
                href="/unidad#sedes"
              />
            </RevealItem>
            <RevealItem>
              <QuickAccessCard
                icon={<HiUserGroup className="w-6 h-6" />}
                title="Ver profesionales"
                description="Conocé al equipo especializado que te va a acompañar."
                href="/profesionales"
              />
            </RevealItem>
          </RevealGroup>
        </div>
      </section>

      {/* ===== NOVEDADES ===== */}
      <section className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            tag="Novedades"
            title="Información y novedades de UCM"
            action={
              <Button href="/novedades" variant="outline">
                Ver todas las novedades
                <HiArrowRight className="w-4 h-4" />
              </Button>
            }
          />

          <RevealGroup
            stagger={0.1}
            className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {recentArticles.map((article) => (
              <RevealItem key={article.slug} className="h-full">
                <ArticleCard article={article} />
              </RevealItem>
            ))}
          </RevealGroup>
        </div>
      </section>

      {/* ===== PRESENTACIÓN UCM ===== */}
      <section className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            tag="Nuestra unidad"
            title="Un enfoque integral, en un mismo equipo"
            description="UCM reúne profesionales y recursos especializados para abordar la salud mamaria desde distintas disciplinas, acompañando a cada paciente en todo el proceso."
            highlightDescription
          />

          <ProcessSteps steps={journeySteps} className="mt-14" />

          <Reveal y={16} className="text-center mt-12">
            <Button href="/unidad" variant="outline">
              Conocer nuestro enfoque
              <HiArrowRight className="w-4 h-4" />
            </Button>
          </Reveal>
        </div>
      </section>

      {/* ===== TECNOLOGÍA Y EQUIPAMIENTO ===== */}
      <section className="py-10 md:py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="panel noise-overlay relative overflow-hidden bg-gradient-to-br from-violet-deep/[0.04] to-lavender/15 px-6 py-12 md:px-12 md:py-16">
            <SectionHeading
              tag="Equipamiento"
              title="Tecnología que acompaña un diagnóstico preciso"
            />

            {featuredEquipment && (
              <Reveal y={28} delay={0.12}>
                <div className="group mt-10 glass-card rounded-3xl overflow-hidden md:grid md:grid-cols-[300px_1fr]">
                  <div className="card-media relative aspect-square bg-gradient-to-br from-violet-deep/5 to-lavender/20">
                    {featuredEquipment.images[0] ? (
                      <Image
                        src={featuredEquipment.images[0]}
                        alt={`${featuredEquipment.brand} ${featuredEquipment.model}`}
                        fill
                        className="object-cover"
                        sizes="(max-width: 768px) 100vw, 300px"
                      />
                    ) : (
                      <div className="absolute inset-0 flex items-center justify-center">
                        <svg className="w-16 h-16 text-violet/15" fill="none" stroke="currentColor" strokeWidth={0.8} viewBox="0 0 24 24">
                          <rect x="2" y="3" width="20" height="14" rx="2" />
                          <path d="M8 21h8M12 17v4" />
                        </svg>
                      </div>
                    )}
                  </div>
                  <div className="p-6 md:p-8 flex flex-col justify-center">
                    <h3 className="text-xl md:text-2xl font-bold text-text-primary leading-tight text-balance">
                      {featuredEquipment.name}
                    </h3>
                    <p className="text-sm text-violet font-medium mt-1">
                      {featuredEquipment.brand} – {featuredEquipment.model}
                    </p>
                    <ul className="mt-5 flex flex-wrap gap-x-5 gap-y-2">
                      {featuredEquipment.benefits.map((b, i) => (
                        <li key={i} className="flex items-center gap-1.5 text-sm text-text-secondary">
                          <HiCheckCircle className="w-4 h-4 text-primary shrink-0" />
                          {b}
                        </li>
                      ))}
                    </ul>
                    <p className="text-xs text-text-secondary mt-4">
                      Sede: {featuredEquipment.locations.map((locId) => locations.find((l) => l.id === locId)?.institutionName).filter(Boolean).join(" · ")}
                    </p>
                    <div className="mt-6">
                      <Button href="/unidad#equipamiento" variant="outline" size="sm">
                        Conocer todo el equipamiento
                        <HiArrowRight className="w-4 h-4" />
                      </Button>
                    </div>
                  </div>
                </div>
              </Reveal>
            )}
          </div>
        </div>
      </section>

      {/* ===== PROFESIONALES ===== */}
      <section className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            tag="Equipo"
            title="Un equipo especializado, trabajando de manera integral"
            description="Profesionales de distintas disciplinas que trabajan en conjunto para acompañarte en cada etapa."
            action={
              <Button href="/profesionales" variant="outline">
                Conocer todo el equipo
                <HiArrowRight className="w-4 h-4" />
              </Button>
            }
          />

          <RevealGroup
            stagger={0.08}
            className="mt-12 grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6"
          >
            {featuredProfessionals.slice(0, 4).map((p) => (
              <RevealItem key={p.slug} className="h-full">
                <ProfessionalCard professional={p} />
              </RevealItem>
            ))}
          </RevealGroup>
        </div>
      </section>

      {/* ===== CÓMO SOLICITAR UN TURNO ===== */}
      <section className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            tag="Turnos"
            title="Elegí qué tipo de atención necesitás"
            description="Según el motivo de tu consulta y la sede donde prefieras atenderte, te indicamos el canal correspondiente."
          />

          <RevealGroup
            stagger={0.12}
            className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8"
          >
            <RevealItem className="h-full">
              <div className="glass-card rounded-3xl p-8 h-full">
                <div className="w-12 h-12 bg-[#25D366]/10 rounded-2xl flex items-center justify-center mb-5">
                  <FaWhatsapp className="w-6 h-6 text-[#25D366]" />
                </div>
                <h3 className="text-xl font-bold text-text-primary text-balance">
                  Estudios por imágenes
                </h3>
                <p className="text-text-secondary mt-2 text-pretty">
                  Mamografía, ecografía mamaria y otros estudios de diagnóstico por imágenes.
                </p>
                <div className="mt-6 space-y-3">
                  {locations.map((loc) => (
                    <a
                      key={loc.id}
                      href="#"
                      className="group flex items-center justify-between gap-3 px-4 py-3.5 rounded-2xl border border-primary-light/40 hover:border-primary/40 hover:bg-primary-lightest/60 transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)]"
                    >
                      <div>
                        <span className="block font-medium text-sm text-text-primary">
                          {loc.institutionName}
                        </span>
                        <span className="block text-xs text-text-secondary">{loc.address}</span>
                      </div>
                      <ArrowCircle size="sm" />
                    </a>
                  ))}
                </div>
              </div>
            </RevealItem>

            <RevealItem className="h-full">
              <div className="glass-card rounded-3xl p-8 h-full">
                <div className="w-12 h-12 bg-primary-lightest rounded-2xl flex items-center justify-center mb-5">
                  <HiCalendarDays className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold text-text-primary text-balance">
                  Consulta por una patología
                </h3>
                <p className="text-text-secondary mt-2 text-pretty">
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
            </RevealItem>
          </RevealGroup>

          <Reveal y={12} delay={0.1}>
            <p className="text-sm text-text-secondary text-center mt-8">
              Los turnos médicos son administrados por cada institución según la sede elegida.
            </p>
          </Reveal>
        </div>
      </section>

      {/* ===== SEDES ===== */}
      <section className="py-10 md:py-16">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            tag="Sedes"
            title="Encontranos en La Plata y City Bell"
          />

          <RevealGroup
            stagger={0.1}
            className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-5"
          >
            {locations.map((loc) => (
              <RevealItem key={loc.id} className="h-full">
                <LocationCard location={loc} className="h-full" />
              </RevealItem>
            ))}
          </RevealGroup>
        </div>
      </section>

      {/* ===== PREVENCIÓN ===== */}
      <section className="py-10 md:py-16">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <Reveal y={24}>
            <div className="glass-card rounded-3xl p-6 md:p-8 flex flex-col md:flex-row md:items-center gap-5 md:gap-8">
              <div className="flex-1">
                <span className="eyebrow text-xs font-semibold text-primary uppercase tracking-[0.12em]">
                  Prevención
                </span>
                <h2 className="text-lg md:text-xl font-bold text-text-primary mt-3 leading-snug text-balance">
                  El control periódico es la principal herramienta de detección temprana.
                </h2>
                <p className="text-sm text-text-secondary mt-2 text-pretty">
                  Consultá con tu médico para definir el esquema adecuado según tu
                  edad y antecedentes.
                </p>
              </div>
              <Button href="/novedades#prevencion" className="shrink-0">
                Ver información preventiva
                <HiArrowRight className="w-4 h-4" />
              </Button>
            </div>
          </Reveal>

          <Reveal y={16} delay={0.08}>
            <MedicalDisclaimer className="mt-6" />
          </Reveal>
        </div>
      </section>

      {/* ===== CTA FINAL ===== */}
      <CtaPanel
        title="Tu salud mamaria merece un cuidado especializado"
        description="Encontrá atención, tecnología y acompañamiento profesional en nuestras sedes de La Plata y City Bell."
      >
        <PrimaryButton href="/turnos" size="lg">
          Solicitar un turno
        </PrimaryButton>
        <Button href="/unidad#sedes" variant="outline" size="lg">
          Conocer las sedes
        </Button>
      </CtaPanel>
    </>
  );
}
