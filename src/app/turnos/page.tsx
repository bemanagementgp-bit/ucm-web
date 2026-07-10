import type { Metadata } from "next";
import { HiCalendarDays, HiChatBubbleLeftRight, HiUserGroup } from "react-icons/hi2";
import { Hero } from "@/components/ui/Hero";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { AppointmentSelector } from "@/components/AppointmentSelector";

export const metadata: Metadata = {
  title: "Solicitar turno",
  description:
    "Solicitá tu turno en UCM. Elegí el tipo de atención y la sede donde querés atenderte, en La Plata o City Bell.",
};

export default function TurnosPage() {
  return (
    <>
      <Hero
        tag="Turnos"
        title="Solicitá tu turno"
        description="Te ayudamos a encontrar el canal correcto para solicitar tu turno. Elegí el tipo de atención que necesitás y la sede donde preferís atenderte."
      />

      <section className="py-12 md:py-16">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <AppointmentSelector />
        </div>
      </section>

      <section className="py-16 md:py-20 bg-primary-lightest/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            tag="¿Cómo funciona?"
            title="Un proceso simple, en tres pasos"
            description="Cada institución administra sus propios turnos, por eso te acompañamos hasta el canal correcto según tu necesidad."
          />

          <div className="mt-12 grid grid-cols-1 sm:grid-cols-3 gap-6">
            <div className="bg-white rounded-2xl border border-primary-light/30 p-6 text-center">
              <div className="w-12 h-12 bg-primary-lightest rounded-xl flex items-center justify-center mx-auto mb-4">
                <HiCalendarDays className="w-6 h-6 text-primary" />
              </div>
              <h3 className="font-semibold text-text-primary">
                1. Elegí el motivo
              </h3>
              <p className="text-sm text-text-secondary mt-2 leading-relaxed">
                Estudio por imágenes, consulta médica, procedimiento
                intervencionista u otra consulta.
              </p>
            </div>
            <div className="bg-white rounded-2xl border border-primary-light/30 p-6 text-center">
              <div className="w-12 h-12 bg-violet/10 rounded-xl flex items-center justify-center mx-auto mb-4">
                <HiUserGroup className="w-6 h-6 text-violet" />
              </div>
              <h3 className="font-semibold text-text-primary">
                2. Elegí la sede
              </h3>
              <p className="text-sm text-text-secondary mt-2 leading-relaxed">
                La Plata (Instituto Médico Platense) o City Bell (Centro
                Médico de Diagnóstico City Bell).
              </p>
            </div>
            <div className="bg-white rounded-2xl border border-primary-light/30 p-6 text-center">
              <div className="w-12 h-12 bg-[#25D366]/10 rounded-xl flex items-center justify-center mx-auto mb-4">
                <HiChatBubbleLeftRight className="w-6 h-6 text-[#25D366]" />
              </div>
              <h3 className="font-semibold text-text-primary">
                3. Confirmá el turno
              </h3>
              <p className="text-sm text-text-secondary mt-2 leading-relaxed">
                Te derivamos al canal correspondiente: WhatsApp, portal de
                turnos o contacto telefónico según la institución.
              </p>
            </div>
          </div>

          <p className="text-sm text-text-secondary text-center mt-10 max-w-2xl mx-auto">
            Los turnos médicos son administrados por cada institución según la
            sede elegida. Ante cualquier duda sobre tu turno, comunicate
            directamente con la sede correspondiente.
          </p>
        </div>
      </section>
    </>
  );
}
