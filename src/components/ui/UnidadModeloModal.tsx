"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { HiXMark, HiArrowRight } from "react-icons/hi2";
import { EASE } from "@/lib/motion";

export function UnidadModeloModal() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (!open) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = prev;
      window.removeEventListener("keydown", onKey);
    };
  }, [open]);

  return (
    <>
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="glass-card rounded-3xl p-6 md:p-8 flex flex-col md:flex-row md:items-center gap-5">
          <div className="flex-1">
            <p className="text-sm font-semibold text-primary uppercase tracking-wider">
              Sobre este modelo de atención
            </p>
            <h2 className="text-xl md:text-2xl font-bold text-text-primary mt-2 leading-snug">
              ¿Qué es una Unidad de Mastología?
            </h2>
            <p className="text-sm md:text-base text-text-secondary mt-2 leading-relaxed">
              Por qué existe este modelo, cómo trabaja el equipo y qué implica
              para vos como paciente.
            </p>
          </div>
          <button
            type="button"
            onClick={() => setOpen(true)}
            className="btn-arrow inline-flex items-center justify-center gap-2 px-5 py-3 rounded-full bg-primary/90 text-white text-sm font-semibold hover:bg-primary shadow-[0_2px_8px_rgba(217,143,168,0.3)] hover:shadow-[0_4px_16px_rgba(217,143,168,0.4)] hover:-translate-y-0.5 transition-all duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] shrink-0 cursor-pointer"
          >
            Leer más
            <HiArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3, ease: EASE.expo }}
            className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-violet-deep/50 backdrop-blur-sm"
            role="dialog"
            aria-modal="true"
            aria-labelledby="unidad-modelo-title"
            onClick={() => setOpen(false)}
          >
            <motion.div
              initial={{ opacity: 0, y: 32, scale: 0.97 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 20, scale: 0.98 }}
              transition={{ duration: 0.5, ease: EASE.expo }}
              className="relative bg-white rounded-3xl shadow-2xl max-w-3xl w-full max-h-[90vh] flex flex-col"
              onClick={(e) => e.stopPropagation()}
            >
            {/* Header sticky */}
            <div className="flex items-center justify-between gap-4 px-6 md:px-8 py-4 border-b border-primary-light/30 shrink-0">
              <h2
                id="unidad-modelo-title"
                className="text-lg md:text-xl font-bold text-text-primary"
              >
                ¿Qué es una Unidad de Mastología?
              </h2>
              <button
                type="button"
                onClick={() => setOpen(false)}
                className="p-2 rounded-full hover:bg-primary-lightest transition-colors cursor-pointer"
                aria-label="Cerrar"
              >
                <HiXMark className="w-6 h-6 text-text-primary" />
              </button>
            </div>

            {/* Contenido scrollable */}
            <div className="overflow-y-auto px-6 md:px-8 py-6 space-y-8">
              <div>
                <p className="text-xs font-semibold text-primary uppercase tracking-wider">
                  Por qué existe este modelo
                </p>
                <h3 className="text-xl md:text-2xl font-bold text-text-primary mt-1 leading-tight">
                  De la atención fragmentada al trabajo en equipo
                </h3>
                <p className="text-text-secondary leading-relaxed mt-3">
                  Durante mucho tiempo, el cuidado de las enfermedades de la
                  mama estuvo repartido entre profesionales que trabajaban por
                  separado. Con los años aparecieron muchas herramientas nuevas
                  —mamografía, cirugía conservadora, radioterapia, tratamientos
                  oncológicos, reconstrucción— y quedó claro que ninguna
                  especialidad, sola, podía cubrir todo. El problema era que,
                  muchas veces, ese trabajo estaba fragmentado: cada uno hacía
                  su parte sin hablar con el resto.
                </p>
                <p className="text-text-secondary leading-relaxed mt-3">
                  Las Unidades de Mastología nacieron justamente para resolver
                  eso: integrar a todos los especialistas en un mismo equipo.
                  Hoy son el estándar de atención recomendado por las
                  principales sociedades científicas del mundo.
                </p>
              </div>

              <div>
                <p className="text-xs font-semibold text-primary uppercase tracking-wider">
                  El corazón de la Unidad
                </p>
                <h3 className="text-xl md:text-2xl font-bold text-text-primary mt-1 leading-tight">
                  El trabajo en equipo, alrededor tuyo
                </h3>
                <p className="text-text-secondary leading-relaxed mt-3">
                  Lo que distingue a una Unidad no es un aparato ni un
                  consultorio: es la forma de trabajar. El punto de encuentro
                  es la <strong>reunión multidisciplinaria</strong> (o ateneo),
                  un espacio donde el equipo se junta de forma periódica para
                  revisar cada caso entre todos y acordar la mejor conducta
                  para cada persona.
                </p>
                <p className="text-text-secondary leading-relaxed mt-3">
                  En esa reunión, la mirada de quien hace las imágenes se
                  cruza con la del cirujano, la del patólogo, la del oncólogo
                  y la del resto del equipo. De esa conversación sale un plan
                  pensado a la medida de cada paciente, teniendo en cuenta las
                  características de su situación y también sus preferencias.
                  Las sociedades científicas consideran a esta reunión el
                  verdadero núcleo de una Unidad de Mastología, y recomiendan
                  que los casos se presenten allí antes de empezar cualquier
                  tratamiento. Así, las decisiones son consensuadas y basadas
                  en la mejor evidencia disponible.
                </p>
              </div>

              <div>
                <p className="text-xs font-semibold text-primary uppercase tracking-wider">
                  Quiénes forman parte
                </p>
                <h3 className="text-xl md:text-2xl font-bold text-text-primary mt-1 leading-tight">
                  Un equipo dedicado especialmente a la mama
                </h3>
                <p className="text-text-secondary leading-relaxed mt-3">
                  El equipo básico suele estar integrado por:
                </p>
                <ul className="list-disc list-inside text-text-secondary leading-relaxed mt-2 space-y-1 pl-2">
                  <li>Mastólogo/a (cirugía mamaria)</li>
                  <li>
                    Médico/a de diagnóstico por imágenes (mamografía,
                    ecografía, resonancia)
                  </li>
                  <li>
                    Patólogo/a, que estudia las biopsias y confirma los
                    diagnósticos
                  </li>
                  <li>Oncólogo/a clínico/a</li>
                  <li>Radioterapeuta</li>
                </ul>
                <p className="text-text-secondary leading-relaxed mt-3">
                  A medida que cada situación lo requiere, se suman otras
                  especialidades: asesoramiento genético, cirugía plástica y
                  reconstructiva, psicooncología, fertilidad, medicina
                  nuclear, cuidados paliativos, kinesiología, oncogeriatría y
                  más.
                </p>
                <p className="text-text-secondary leading-relaxed mt-3">
                  No todas las personas necesitan ver a todos estos
                  especialistas. La idea es justamente esa: que el equipo
                  completo esté disponible y coordinado, y que cada paciente
                  reciba lo que su situación requiere, ni más ni menos.
                </p>
              </div>

              <div>
                <p className="text-xs font-semibold text-primary uppercase tracking-wider">
                  Por qué elegir una Unidad de Mastología
                </p>
                <h3 className="text-xl md:text-2xl font-bold text-text-primary mt-1 leading-tight">
                  Un mismo equipo, del principio al final
                </h3>
                <p className="text-text-secondary leading-relaxed mt-3">
                  Que un mismo equipo especializado se ocupe de todo el proceso
                  no es solo más cómodo: se asocia a una mejor atención. La
                  evidencia científica muestra que las personas atendidas en
                  centros de mama multidisciplinarios tienden a recibir
                  tratamientos más adecuados y, en varios estudios de gran
                  tamaño, mejores resultados de salud en comparación con la
                  atención dispersa entre profesionales que no trabajan
                  coordinados.
                </p>
                <p className="text-text-secondary leading-relaxed mt-3">
                  En concreto, esto se traduce en cosas simples y valiosas:
                  menos vueltas y estudios repetidos, tiempos de diagnóstico
                  más cortos, decisiones tomadas en conjunto por especialistas
                  que se dedican específicamente a la mama, y un
                  acompañamiento humano en cada etapa. Un equipo pensado para
                  que no tengas que atar los cabos sola.
                </p>
              </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
