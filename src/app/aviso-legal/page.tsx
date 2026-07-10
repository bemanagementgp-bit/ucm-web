import type { Metadata } from "next";
import { Hero } from "@/components/ui/Hero";

export const metadata: Metadata = {
  title: "Aviso legal",
  description: "Aviso legal de UCM – Unidad de Cuidado Mamario.",
};

export default function AvisoLegalPage() {
  return (
    <>
      <Hero
        tag="Legal"
        title="Aviso legal"
      />
      <section className="py-16 md:py-20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-primary-lightest/50 rounded-2xl border border-primary-light/30 p-8 text-center">
            <p className="text-text-secondary">
              [Texto del aviso legal – pendiente de redacción legal]
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
