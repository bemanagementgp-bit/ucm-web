"use client";

import { useState } from "react";
import { HiXMark } from "react-icons/hi2";
import { FaWhatsapp } from "react-icons/fa";
import { appointmentTypes, appointmentLinks, buildWhatsAppUrl } from "@/data/appointments";
import { locations } from "@/data/locations";

type Step = "closed" | "type" | "location";

export function WhatsAppFloat() {
  const [step, setStep] = useState<Step>("closed");
  const [selectedType, setSelectedType] = useState<string | null>(null);

  const handleTypeSelect = (type: string) => {
    setSelectedType(type);
    setStep("location");
  };

  const handleLocationSelect = (locId: string) => {
    if (!selectedType) return;
    const config = appointmentLinks[selectedType as keyof typeof appointmentLinks];
    const channel = locId === "imp" ? config.imp : config.cityBell;

    if (channel.type === "whatsapp" && channel.url.startsWith("https://wa.me/")) {
      window.open(channel.url, "_blank", "noopener,noreferrer");
    } else if (channel.type === "portal" && channel.url.startsWith("http")) {
      window.open(channel.url, "_blank", "noopener,noreferrer");
    } else {
      alert(`Canal: ${channel.label}\nContacto: ${channel.url}\n\n(Los datos de contacto definitivos serán configurados próximamente)`);
    }
    reset();
  };

  const reset = () => {
    setStep("closed");
    setSelectedType(null);
  };

  return (
    <>
      {/* Panel */}
      {step !== "closed" && (
        <div
          className="fixed bottom-24 right-4 sm:right-6 z-50 w-[calc(100vw-2rem)] max-w-sm bg-white rounded-2xl shadow-2xl shadow-black/10 border border-primary-light/30 overflow-hidden"
          role="dialog"
          aria-label="Opciones de contacto por WhatsApp"
        >
          <div className="flex items-center justify-between p-4 bg-primary-lightest border-b border-primary-light/30">
            <h3 className="font-semibold text-text-primary text-sm">
              {step === "type" ? "¿Qué tipo de turno necesitás?" : "¿En qué sede?"}
            </h3>
            <button
              type="button"
              onClick={reset}
              className="p-1 text-text-secondary hover:text-primary transition-colors cursor-pointer"
              aria-label="Cerrar"
            >
              <HiXMark className="w-5 h-5" />
            </button>
          </div>

          <div className="p-3">
            {step === "type" &&
              appointmentTypes.map((t) => (
                <button
                  key={t.value}
                  type="button"
                  onClick={() => handleTypeSelect(t.value)}
                  className="w-full text-left px-4 py-3 rounded-xl hover:bg-primary-lightest transition-colors cursor-pointer"
                >
                  <span className="block font-medium text-sm text-text-primary">
                    {t.label}
                  </span>
                  <span className="block text-xs text-text-secondary mt-0.5">
                    {t.description}
                  </span>
                </button>
              ))}

            {step === "location" &&
              locations.map((loc) => (
                <button
                  key={loc.id}
                  type="button"
                  onClick={() => handleLocationSelect(loc.id)}
                  className="w-full text-left px-4 py-3 rounded-xl hover:bg-primary-lightest transition-colors cursor-pointer"
                >
                  <span className="block font-medium text-sm text-text-primary">
                    {loc.institutionName}
                  </span>
                  <span className="block text-xs text-text-secondary mt-0.5">
                    {loc.address}
                  </span>
                </button>
              ))}
          </div>
        </div>
      )}

      {/* FAB */}
      <button
        type="button"
        onClick={() => setStep(step === "closed" ? "type" : "closed")}
        className="fixed bottom-6 right-4 sm:right-6 z-50 w-14 h-14 bg-[#25D366] hover:bg-[#20BD5A] text-white rounded-full shadow-lg shadow-[#25D366]/30 flex items-center justify-center transition-all hover:scale-105 cursor-pointer"
        aria-label={step === "closed" ? "Contactar por WhatsApp" : "Cerrar opciones de WhatsApp"}
      >
        {step === "closed" ? (
          <FaWhatsapp className="w-7 h-7" />
        ) : (
          <HiXMark className="w-7 h-7" />
        )}
      </button>
    </>
  );
}
