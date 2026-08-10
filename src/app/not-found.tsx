import type { Metadata } from "next";
import { HiOutlineFaceFrown } from "react-icons/hi2";
import { Button, PrimaryButton } from "@/components/ui/Buttons";

export const metadata: Metadata = {
  title: "Página no encontrada",
};

export default function NotFound() {
  return (
    <section className="relative overflow-hidden min-h-[70vh] flex items-center ">
      <div className="absolute top-10 right-0 w-72 h-72 bg-primary-light/20 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-72 h-72 bg-lavender/20 rounded-full blur-3xl" />

      <div className="relative max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 py-24 text-center">
        <div className="mx-auto w-16 h-16 glass rounded-2xl flex items-center justify-center">
          <HiOutlineFaceFrown className="w-8 h-8 text-primary" />
        </div>

        <span className="inline-block mt-8 text-sm font-medium text-violet tracking-wide uppercase">
          Error 404
        </span>
        <h1 className="mt-4 text-3xl sm:text-4xl font-bold text-text-primary leading-tight">
          No encontramos la página que estás buscando
        </h1>
        <p className="mt-4 text-lg text-text-secondary leading-relaxed">
          Puede que el enlace esté desactualizado o que la página se haya
          movido. Volvé al inicio o solicitá un turno con nuestro equipo.
        </p>

        <div className="mt-10 flex flex-wrap justify-center gap-4">
          <PrimaryButton href="/" size="lg">
            Volver al inicio
          </PrimaryButton>
          <Button href="/turnos" variant="outline" size="lg">
            Solicitar turno
          </Button>
        </div>
      </div>
    </section>
  );
}
