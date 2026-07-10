import type { Metadata } from "next";
import { HiArrowRight, HiCpuChip, HiShieldCheck, HiSparkles } from "react-icons/hi2";
import { Hero } from "@/components/ui/Hero";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button, PrimaryButton } from "@/components/ui/Buttons";
import { MedicalDisclaimer } from "@/components/ui/MedicalDisclaimer";
import { EquipmentCard } from "@/components/cards/EquipmentCard";
import { equipment } from "@/data/equipment";

export const metadata: Metadata = {
  title: "Equipamiento",
  description:
    "Conocé el equipamiento especializado de UCM para el diagnóstico y los procedimientos mamarios en nuestras sedes de La Plata y City Bell.",
};

const highlights = [
  {
    icon: HiCpuChip,
    title: "Tecnología especializada",
    description:
      "Contamos con equipos dedicados específicamente al estudio y diagnóstico de la salud mamaria.",
  },
  {
    icon: HiShieldCheck,
    title: "Procedimientos seguros",
    description:
      "El equipamiento es operado por personal técnico capacitado, siguiendo protocolos de seguridad.",
  },
  {
    icon: HiSparkles,
    title: "Imágenes de alta calidad",
    description:
      "Buscamos ofrecer estudios de la mayor precisión posible para acompañar un diagnóstico certero.",
  },
];

export default function EquipamientoPage() {
  return (
    <>
      <Hero
        tag="Equipamiento"
        title="Tecnología al servicio del diagnóstico mamario"
        description="Contamos con equipamiento especializado en nuestras sedes de La Plata y City Bell, orientado a ofrecer estudios de diagnóstico por imágenes precisos y procedimientos seguros."
      >
        <PrimaryButton href="/turnos" size="lg">
          Solicitar un turno
        </PrimaryButton>
      </Hero>

      {/* ===== INTRODUCCIÓN ===== */}
      <section className="py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            tag="Nuestro compromiso"
            title="Equipamiento pensado para tu diagnóstico"
            description="La calidad del equipamiento es un factor clave en la precisión del diagnóstico mamario. Por eso contamos con tecnología especializada, operada por profesionales capacitados en cada una de nuestras sedes."
          />

          <div className="mt-12 grid grid-cols-1 sm:grid-cols-3 gap-6">
            {highlights.map((item) => {
              const Icon = item.icon;
              return (
                <div
                  key={item.title}
                  className="bg-white rounded-2xl p-6 border border-violet-deep/10 hover:shadow-md hover:shadow-violet/5 transition-all"
                >
                  <div className="w-12 h-12 bg-violet-deep/5 rounded-xl flex items-center justify-center mb-4">
                    <Icon className="w-6 h-6 text-violet" />
                  </div>
                  <h3 className="font-semibold text-text-primary">{item.title}</h3>
                  <p className="text-sm text-text-secondary mt-2 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ===== LISTADO DE EQUIPAMIENTO ===== */}
      <section className="py-16 md:py-20 bg-gradient-to-br from-violet-deep/[0.03] to-lavender/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            tag="Nuestros equipos"
            title="Equipamiento disponible en nuestras sedes"
            description="Cada equipo está destinado a un tipo de estudio o procedimiento específico dentro del proceso de diagnóstico mamario."
          />

          <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-6">
            {equipment.map((item) => (
              <EquipmentCard key={item.slug} equipment={item} />
            ))}
          </div>
        </div>
      </section>

      {/* ===== CTA FINAL ===== */}
      <section className="py-20 md:py-28 bg-gradient-to-br from-primary-lightest via-lavender/10 to-primary-lightest">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-text-primary leading-tight">
            Realizá tu estudio con tecnología especializada
          </h2>
          <p className="text-lg text-text-secondary mt-4 leading-relaxed">
            Coordiná tu turno en la sede que prefieras y accedé a estudios de
            diagnóstico por imágenes con equipamiento especializado.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <PrimaryButton href="/turnos" size="lg">
              Solicitar un turno
              <HiArrowRight className="w-4 h-4" />
            </PrimaryButton>
            <Button href="/servicios" variant="outline" size="lg">
              Ver todos los servicios
            </Button>
          </div>
          <MedicalDisclaimer className="mt-10 text-left" />
        </div>
      </section>
    </>
  );
}
