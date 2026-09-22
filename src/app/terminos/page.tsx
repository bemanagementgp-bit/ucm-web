import type { Metadata } from "next";
import { Hero } from "@/components/ui/Hero";

export const metadata: Metadata = {
  title: "Términos y condiciones",
  description: "Términos y condiciones de uso de UCM – Unidad de Cuidado Mamario.",
};

export default function TerminosPage() {
  return (
    <>
      <Hero
        tag="Legal"
        title="Términos y condiciones"
      />
      <section className="py-16 md:py-20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-primary-lightest/50 rounded-3xl border border-primary-light/30 p-8 text-center">
            <p className="text-text-secondary">
              Estamos preparando el texto definitivo de nuestros términos y
              condiciones de uso del sitio. Ante cualquier consulta,
              contactanos por WhatsApp o mediante el formulario de contacto.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
