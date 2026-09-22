"use client";

import { useState } from "react";
import { HiArrowRight, HiArrowTopRightOnSquare } from "react-icons/hi2";
import { FaWhatsapp } from "react-icons/fa";
import { appointmentTypes, appointmentLinks, type AppointmentType } from "@/data/appointments";
import { locations } from "@/data/locations";
import { MedicalDisclaimer } from "@/components/ui/MedicalDisclaimer";

interface AppointmentSelectorProps {
  className?: string;
}

export function AppointmentSelector({ className = "" }: AppointmentSelectorProps) {
  const [selectedType, setSelectedType] = useState<AppointmentType | null>(null);
  const [selectedLocation, setSelectedLocation] = useState<string | null>(null);

  const handleReset = () => {
    setSelectedType(null);
    setSelectedLocation(null);
  };

  const channel =
    selectedType && selectedLocation
      ? appointmentLinks[selectedType][selectedLocation === "imp" ? "imp" : "cityBell"]
      : null;

  return (
    <div className={className}>
      {/* Step 1 */}
      <div className="mb-8">
        <h3 className="text-lg font-semibold text-text-primary mb-4">
          1. ¿Qué tipo de turno necesitás?
        </h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          {appointmentTypes.map((t) => (
            <button
              key={t.value}
              type="button"
              onClick={() => {
                setSelectedType(t.value);
                setSelectedLocation(null);
              }}
              className={`text-left px-5 py-4 rounded-xl border-2 transition-all cursor-pointer ${
                selectedType === t.value
                  ? "border-primary bg-primary-lightest"
                  : "border-primary-light/30 hover:border-primary/40 bg-white"
              }`}
            >
              <span className="block font-medium text-text-primary">
                {t.label}
              </span>
              <span className="block text-sm text-text-secondary mt-1">
                {t.description}
              </span>
            </button>
          ))}
        </div>
      </div>

      {/* Step 2 */}
      {selectedType && (
        <div className="mb-8">
          <h3 className="text-lg font-semibold text-text-primary mb-4">
            2. ¿En qué sede querés atenderte?
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {locations.map((loc) => (
              <button
                key={loc.id}
                type="button"
                onClick={() => setSelectedLocation(loc.id)}
                className={`text-left px-5 py-4 rounded-xl border-2 transition-all cursor-pointer ${
                  selectedLocation === loc.id
                    ? "border-primary bg-primary-lightest"
                    : "border-primary-light/30 hover:border-primary/40 bg-white"
                }`}
              >
                <span className="block font-medium text-text-primary">
                  {loc.institutionName}
                </span>
                <span className="block text-sm text-text-secondary mt-1">
                  {loc.address}
                </span>
              </button>
            ))}
          </div>
        </div>
      )}

      {/* Result */}
      {channel && (
        <div className="bg-white rounded-3xl border-2 border-primary/30 p-6">
          <p className="text-sm text-text-secondary mb-4">
            {channel.type === "whatsapp"
              ? "Vas a ser redirigido a WhatsApp para solicitar tu turno."
              : channel.type === "portal"
                ? "Vas a ser redirigido al portal de turnos de la institución."
                : "Contactate con la sede seleccionada."}
          </p>

          <a
            href={channel.url.startsWith("http") ? channel.url : "#"}
            target="_blank"
            rel="noopener noreferrer"
            className={`inline-flex items-center gap-2 px-6 py-3 rounded-xl font-medium transition-all text-white ${
              channel.type === "whatsapp"
                ? "bg-[#25D366] hover:bg-[#20BD5A]"
                : "bg-primary hover:bg-primary/90"
            }`}
          >
            {channel.type === "whatsapp" ? (
              <FaWhatsapp className="w-5 h-5" />
            ) : (
              <HiArrowTopRightOnSquare className="w-5 h-5" />
            )}
            {channel.label}
          </a>

          <p className="text-xs text-text-secondary mt-3">
            Los turnos médicos son administrados por cada institución según la sede elegida.
          </p>

          <button
            type="button"
            onClick={handleReset}
            className="text-sm text-violet hover:text-primary font-medium mt-4 transition-colors cursor-pointer"
          >
            ← Elegir otra opción
          </button>
        </div>
      )}

      <MedicalDisclaimer
        text="Las indicaciones pueden variar según cada paciente. Consultá siempre con el equipo médico."
        className="mt-6"
      />
    </div>
  );
}
