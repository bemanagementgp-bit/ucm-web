"use client";

import { useState, type FormEvent } from "react";
import {
  HiMapPin,
  HiPhone,
  HiEnvelope,
  HiClock,
  HiCheckCircle,
} from "react-icons/hi2";
import { FaInstagram, FaWhatsapp } from "react-icons/fa6";
import { Hero } from "@/components/ui/Hero";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { MedicalDisclaimer } from "@/components/ui/MedicalDisclaimer";
import { Button, PrimaryButton } from "@/components/ui/Buttons";
import { locations } from "@/data/locations";
import { siteConfig } from "@/data/site";
import { appointmentTypes } from "@/data/appointments";

interface FormState {
  nombre: string;
  apellido: string;
  email: string;
  telefono: string;
  motivo: string;
  sede: string;
  mensaje: string;
  privacidad: boolean;
}

const initialState: FormState = {
  nombre: "",
  apellido: "",
  email: "",
  telefono: "",
  motivo: "",
  sede: "",
  mensaje: "",
  privacidad: false,
};

const inputClasses =
  "w-full rounded-xl glass-input px-4 py-2.5 text-sm text-text-primary placeholder:text-text-secondary/60 focus:outline-none transition-colors";

const labelClasses = "block text-sm font-medium text-text-primary mb-1.5";

export default function ContactoPage() {
  const [form, setForm] = useState<FormState>(initialState);
  const [errors, setErrors] = useState<Partial<Record<keyof FormState, string>>>({});
  const [submitted, setSubmitted] = useState(false);

  function validate(values: FormState) {
    const newErrors: Partial<Record<keyof FormState, string>> = {};

    if (!values.nombre.trim()) newErrors.nombre = "Ingresá tu nombre.";
    if (!values.apellido.trim()) newErrors.apellido = "Ingresá tu apellido.";
    if (!values.email.trim()) {
      newErrors.email = "Ingresá tu email.";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email)) {
      newErrors.email = "Ingresá un email válido.";
    }
    if (!values.telefono.trim()) newErrors.telefono = "Ingresá tu teléfono.";
    if (!values.motivo) newErrors.motivo = "Seleccioná un motivo de consulta.";
    if (!values.sede) newErrors.sede = "Seleccioná una sede.";
    if (!values.mensaje.trim()) newErrors.mensaje = "Contanos brevemente tu consulta.";
    if (!values.privacidad)
      newErrors.privacidad = "Debés aceptar la política de privacidad.";

    return newErrors;
  }

  function handleChange(
    field: keyof FormState,
    value: string | boolean
  ) {
    setForm((prev) => ({ ...prev, [field]: value }));
  }

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const newErrors = validate(form);
    setErrors(newErrors);

    if (Object.keys(newErrors).length === 0) {
      // Envío pendiente de integración con backend / servicio de email
      setSubmitted(true);
      setForm(initialState);
    }
  }

  return (
    <>
      <Hero
        tag="Contacto"
        title="Contactanos"
        description="Escribinos ante cualquier consulta general. Para solicitar un turno, te recomendamos usar los canales específicos de cada sede."
      >
        <PrimaryButton href="/turnos" size="lg">
          Solicitar un turno
        </PrimaryButton>
      </Hero>

      {/* ===== INFO + FORMULARIO ===== */}
      <section className="py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
            {/* Columna info */}
            <div className="lg:col-span-2 space-y-8">
              <SectionHeading
                tag="Nuestras sedes"
                title="Dónde encontrarnos"
                centered={false}
              />

              {locations.map((location) => (
                <div
                  key={location.id}
                  className="glass-card rounded-2xl p-6"
                >
                  <h3 className="font-semibold text-text-primary">
                    {location.name}
                  </h3>
                  <p className="text-sm text-text-secondary mt-1">
                    {location.institutionName}
                  </p>

                  <div className="mt-4 space-y-2.5 text-sm text-text-secondary">
                    <div className="flex items-start gap-2">
                      <HiMapPin className="w-4 h-4 text-violet shrink-0 mt-0.5" />
                      <span>{location.address}</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <HiPhone className="w-4 h-4 text-violet shrink-0 mt-0.5" />
                      <span>{location.phone}</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <FaWhatsapp className="w-4 h-4 text-violet shrink-0 mt-0.5" />
                      <span>{location.whatsapp}</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <HiEnvelope className="w-4 h-4 text-violet shrink-0 mt-0.5" />
                      <span>{location.email}</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <HiClock className="w-4 h-4 text-violet shrink-0 mt-0.5" />
                      <span>{location.hours}</span>
                    </div>
                  </div>
                </div>
              ))}

              <a
                href={siteConfig.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sm font-medium text-violet hover:text-primary transition-colors"
              >
                <FaInstagram className="w-5 h-5" />
                Seguinos en Instagram
              </a>

              <MedicalDisclaimer />
            </div>

            {/* Columna formulario */}
            <div className="lg:col-span-3">
              <div className="glass-card rounded-2xl p-6 sm:p-8">
                <SectionHeading
                  tag="Formulario"
                  title="Envianos tu consulta"
                  centered={false}
                />

                <p className="mt-4 text-sm text-violet-deep bg-primary-lightest border border-primary-light/40 rounded-xl px-4 py-3">
                  No envíes estudios, diagnósticos ni información médica
                  sensible mediante este formulario.
                </p>

                {submitted && (
                  <div className="mt-6 flex items-start gap-3 p-4 bg-primary-lightest rounded-xl border border-primary-light/40">
                    <HiCheckCircle className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                    <p className="text-sm text-text-secondary">
                      ¡Gracias por escribirnos! Recibimos tu mensaje y nos
                      vamos a contactar a la brevedad.
                    </p>
                  </div>
                )}

                <form onSubmit={handleSubmit} noValidate className="mt-6 space-y-5">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label htmlFor="nombre" className={labelClasses}>
                        Nombre
                      </label>
                      <input
                        id="nombre"
                        type="text"
                        value={form.nombre}
                        onChange={(e) => handleChange("nombre", e.target.value)}
                        className={inputClasses}
                      />
                      {errors.nombre && (
                        <p className="mt-1 text-xs text-primary">{errors.nombre}</p>
                      )}
                    </div>
                    <div>
                      <label htmlFor="apellido" className={labelClasses}>
                        Apellido
                      </label>
                      <input
                        id="apellido"
                        type="text"
                        value={form.apellido}
                        onChange={(e) => handleChange("apellido", e.target.value)}
                        className={inputClasses}
                      />
                      {errors.apellido && (
                        <p className="mt-1 text-xs text-primary">{errors.apellido}</p>
                      )}
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label htmlFor="email" className={labelClasses}>
                        Email
                      </label>
                      <input
                        id="email"
                        type="email"
                        value={form.email}
                        onChange={(e) => handleChange("email", e.target.value)}
                        className={inputClasses}
                      />
                      {errors.email && (
                        <p className="mt-1 text-xs text-primary">{errors.email}</p>
                      )}
                    </div>
                    <div>
                      <label htmlFor="telefono" className={labelClasses}>
                        Teléfono
                      </label>
                      <input
                        id="telefono"
                        type="tel"
                        value={form.telefono}
                        onChange={(e) => handleChange("telefono", e.target.value)}
                        className={inputClasses}
                      />
                      {errors.telefono && (
                        <p className="mt-1 text-xs text-primary">{errors.telefono}</p>
                      )}
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label htmlFor="motivo" className={labelClasses}>
                        Motivo de consulta
                      </label>
                      <select
                        id="motivo"
                        value={form.motivo}
                        onChange={(e) => handleChange("motivo", e.target.value)}
                        className={inputClasses}
                      >
                        <option value="">Seleccioná una opción</option>
                        {appointmentTypes.map((type) => (
                          <option key={type.value} value={type.value}>
                            {type.label}
                          </option>
                        ))}
                        <option value="institucional">Consulta institucional</option>
                      </select>
                      {errors.motivo && (
                        <p className="mt-1 text-xs text-primary">{errors.motivo}</p>
                      )}
                    </div>
                    <div>
                      <label htmlFor="sede" className={labelClasses}>
                        Sede
                      </label>
                      <select
                        id="sede"
                        value={form.sede}
                        onChange={(e) => handleChange("sede", e.target.value)}
                        className={inputClasses}
                      >
                        <option value="">Seleccioná una sede</option>
                        {locations.map((location) => (
                          <option key={location.id} value={location.id}>
                            {location.name}
                          </option>
                        ))}
                      </select>
                      {errors.sede && (
                        <p className="mt-1 text-xs text-primary">{errors.sede}</p>
                      )}
                    </div>
                  </div>

                  <div>
                    <label htmlFor="mensaje" className={labelClasses}>
                      Mensaje
                    </label>
                    <textarea
                      id="mensaje"
                      rows={5}
                      value={form.mensaje}
                      onChange={(e) => handleChange("mensaje", e.target.value)}
                      className={`${inputClasses} resize-none`}
                    />
                    {errors.mensaje && (
                      <p className="mt-1 text-xs text-primary">{errors.mensaje}</p>
                    )}
                  </div>

                  <div>
                    <label className="flex items-start gap-2.5 text-sm text-text-secondary">
                      <input
                        type="checkbox"
                        checked={form.privacidad}
                        onChange={(e) =>
                          handleChange("privacidad", e.target.checked)
                        }
                        className="mt-0.5 w-4 h-4 rounded border-primary-light/50 text-primary focus:ring-primary/40"
                      />
                      <span>
                        Acepto la política de privacidad y el tratamiento de
                        mis datos para ser contactado/a por UCM.
                      </span>
                    </label>
                    {errors.privacidad && (
                      <p className="mt-1 text-xs text-primary">{errors.privacidad}</p>
                    )}
                  </div>

                  <Button type="submit" size="lg" className="w-full sm:w-auto">
                    Enviar mensaje
                  </Button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== MAPAS ===== */}
      <section className="py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            tag="Cómo llegar"
            title="Ubicación de nuestras sedes"
          />

          <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-8">
            {locations.map((location) => (
              <div key={location.id}>
                <h3 className="font-semibold text-text-primary mb-3">
                  {location.name}
                </h3>
                <div className="aspect-video rounded-2xl overflow-hidden border border-primary-light/30 bg-white">
                  <iframe
                    src={location.mapsEmbed}
                    title={`Mapa de ${location.name}`}
                    className="w-full h-full border-0"
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
