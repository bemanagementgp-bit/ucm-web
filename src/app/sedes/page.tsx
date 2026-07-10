import type { Metadata } from "next";
import {
  HiArrowTopRightOnSquare,
  HiCalendarDays,
  HiClock,
  HiMapPin,
  HiPhone,
  HiUserGroup,
} from "react-icons/hi2";
import { FaWhatsapp } from "react-icons/fa";
import { Hero } from "@/components/ui/Hero";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button, PrimaryButton } from "@/components/ui/Buttons";
import { MedicalDisclaimer } from "@/components/ui/MedicalDisclaimer";
import { locations } from "@/data/locations";
import { getServiceBySlug } from "@/data/services";
import { getProfessionalBySlug } from "@/data/professionals";

export const metadata: Metadata = {
  title: "Sedes",
  description:
    "Conocé las sedes de UCM en La Plata y City Bell: dirección, horarios, servicios disponibles y cómo llegar.",
};

export default function SedesPage() {
  return (
    <>
      <Hero
        tag="Sedes"
        title="Nuestras sedes en La Plata y City Bell"
        description="UCM funciona dentro de instituciones médicas de referencia en cada ciudad. Encontrá la dirección, los servicios disponibles y el equipo profesional de cada sede."
      />

      <section className="py-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-text-secondary leading-relaxed max-w-3xl">
            UCM no cuenta con sedes propias: opera dentro de instituciones
            médicas aliadas, aprovechando su infraestructura y trayectoria
            para brindar una atención integral en salud mamaria. Cada sede
            cuenta con equipamiento y profesionales propios de UCM.
          </p>
        </div>
      </section>

      {locations.map((location, index) => {
        const services = location.servicesAvailable
          .map((slug) => getServiceBySlug(slug))
          .filter((s): s is NonNullable<typeof s> => Boolean(s));
        const teamMembers = location.professionals
          .map((slug) => getProfessionalBySlug(slug))
          .filter((p): p is NonNullable<typeof p> => Boolean(p));

        return (
          <section
            key={location.id}
            className={`py-16 md:py-20 ${
              index % 2 === 1 ? "bg-primary-lightest/30" : ""
            }`}
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
                  <div className="bg-white rounded-2xl border border-primary-light/30 p-6 space-y-4">
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
                      <p className="text-sm text-text-secondary">
                        {location.hours}
                      </p>
                    </div>
                    <div className="flex items-start gap-3">
                      <HiPhone className="w-5 h-5 text-violet shrink-0 mt-0.5" />
                      <p className="text-sm text-text-secondary">
                        {location.phone}
                      </p>
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
          </section>
        );
      })}

      <section className="pb-16 md:pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <MedicalDisclaimer />
        </div>
      </section>
    </>
  );
}
