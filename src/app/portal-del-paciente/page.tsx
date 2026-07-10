import type { Metadata } from "next";
import { HiLockClosed } from "react-icons/hi2";
import { Hero } from "@/components/ui/Hero";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { FAQAccordion } from "@/components/ui/FAQAccordion";
import { MedicalDisclaimer } from "@/components/ui/MedicalDisclaimer";
import { PatientPortalCard } from "@/components/cards/PatientPortalCard";
import { locations } from "@/data/locations";

export const metadata: Metadata = {
  title: "Portal del paciente",
  description:
    "Accedé al portal del paciente de tu institución para consultar tus estudios y resultados en UCM, La Plata y City Bell.",
};

const faqs = [
  {
    question: "¿Dónde veo mis estudios?",
    answer:
      "Tus estudios y resultados se encuentran disponibles en el portal del paciente de la institución donde te atendiste: Instituto Médico Platense o Centro Médico de Diagnóstico City Bell.",
  },
  {
    question: "¿Qué portal debo elegir?",
    answer:
      "Elegí el portal correspondiente a la sede donde te realizaste el estudio o la consulta. Si te atendiste en ambas sedes, es posible que debas ingresar a los dos portales.",
  },
  {
    question: "¿Cómo recupero mi acceso?",
    answer:
      "Cada portal cuenta con su propio sistema de recuperación de contraseña. Ingresá al portal correspondiente y seguí las instrucciones para restablecer tu acceso, o comunicate con la institución.",
  },
  {
    question: "¿Con quién me comunico si tengo problemas?",
    answer:
      "Ante cualquier inconveniente para acceder a tus resultados, comunicate directamente con la institución donde te atendiste, ya que ellas administran el portal y tus datos.",
  },
];

export default function PortalDelPacientePage() {
  return (
    <>
      <Hero
        tag="Portal"
        title="Portal del paciente"
        description="Cada institución en la que funciona UCM cuenta con su propio portal del paciente, donde podés acceder a tus estudios, resultados e historial clínico."
      />

      <section className="py-12 md:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-text-secondary leading-relaxed max-w-3xl">
            UCM no administra un portal propio: cada institución aliada
            gestiona su propio sistema de historia clínica y resultados.
            Seleccioná el portal correspondiente a la sede donde te
            atendiste para acceder a tu información.
          </p>

          <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 gap-6">
            {locations.map((location) => (
              <PatientPortalCard
                key={location.id}
                name={location.patientPortalName}
                description={`Accedé a tus estudios y resultados de ${location.institutionName}, sede ${location.city}.`}
                url={location.patientPortalUrl}
              />
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 md:py-20 bg-primary-lightest/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            tag="Preguntas frecuentes"
            title="Dudas sobre el portal del paciente"
          />

          <div className="mt-10 max-w-2xl mx-auto">
            <FAQAccordion faqs={faqs} />
          </div>
        </div>
      </section>

      <section className="py-16 md:py-20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
          <div className="flex items-start gap-3 p-5 bg-white rounded-2xl border border-primary-light/30">
            <HiLockClosed className="w-5 h-5 text-violet shrink-0 mt-0.5" />
            <p className="text-sm text-text-secondary leading-relaxed">
              El sitio web de UCM no almacena datos médicos ni resultados de
              estudios. Toda tu información clínica se encuentra resguardada
              en los sistemas propios de cada institución, bajo sus
              respectivas políticas de privacidad y seguridad.
            </p>
          </div>

          <MedicalDisclaimer />
        </div>
      </section>
    </>
  );
}
