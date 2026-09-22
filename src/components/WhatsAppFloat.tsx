"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { HiXMark } from "react-icons/hi2";
import { FaWhatsapp } from "react-icons/fa";
import { EASE } from "@/lib/motion";
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
      <AnimatePresence>
        {step !== "closed" && (
          <motion.div
            initial={{ opacity: 0, y: 16, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 12, scale: 0.97 }}
            transition={{ duration: 0.4, ease: EASE.expo }}
            style={{ transformOrigin: "bottom right" }}
            className="fixed bottom-24 right-4 sm:right-6 z-50 w-[calc(100vw-2rem)] max-w-sm glass-strong rounded-3xl overflow-hidden"
            role="dialog"
            aria-label="Opciones de contacto por WhatsApp"
          >
            <div className="flex items-center justify-between p-4 bg-white/30 border-b border-white/30">
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
          </motion.div>
        )}
      </AnimatePresence>

      {/* FAB */}
      <motion.button
        type="button"
        onClick={() => setStep(step === "closed" ? "type" : "closed")}
        whileHover={{ scale: 1.06 }}
        whileTap={{ scale: 0.95 }}
        transition={{ duration: 0.3, ease: EASE.expo }}
        className="fixed bottom-6 right-4 sm:right-6 z-50 w-14 h-14 bg-[#25D366] hover:bg-[#20BD5A] text-white rounded-full shadow-lg shadow-[#25D366]/30 flex items-center justify-center cursor-pointer"
        aria-label={step === "closed" ? "Contactar por WhatsApp" : "Cerrar opciones de WhatsApp"}
      >
        <AnimatePresence mode="wait" initial={false}>
          <motion.span
            key={step === "closed" ? "open" : "close"}
            initial={{ opacity: 0, rotate: -90, scale: 0.6 }}
            animate={{ opacity: 1, rotate: 0, scale: 1 }}
            exit={{ opacity: 0, rotate: 90, scale: 0.6 }}
            transition={{ duration: 0.25, ease: EASE.expo }}
          >
            {step === "closed" ? (
              <FaWhatsapp className="w-7 h-7" />
            ) : (
              <HiXMark className="w-7 h-7" />
            )}
          </motion.span>
        </AnimatePresence>
      </motion.button>
    </>
  );
}
