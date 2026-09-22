import type { Metadata } from "next";
import { HiOutlineFaceFrown } from "react-icons/hi2";
import { Button, PrimaryButton } from "@/components/ui/Buttons";
import { Reveal } from "@/components/motion/Reveal";
import { SplitReveal } from "@/components/motion/SplitReveal";

export const metadata: Metadata = {
  title: "Página no encontrada",
};

export default function NotFound() {
  return (
    <section className="relative overflow-hidden min-h-[70vh] flex items-center ">
      <div className="absolute top-10 right-0 w-72 h-72 bg-primary-light/20 rounded-full blur-3xl" aria-hidden="true" />
      <div className="absolute bottom-0 left-0 w-72 h-72 bg-lavender/20 rounded-full blur-3xl" aria-hidden="true" />

      {/* `pt-40`: deja espacio para la barra de navegación flotante. */}
      <div className="relative max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 pt-40 pb-24 text-center">
        <Reveal y={20}>
          <div className="mx-auto w-16 h-16 glass rounded-3xl flex items-center justify-center">
            <HiOutlineFaceFrown className="w-8 h-8 text-primary" />
          </div>
        </Reveal>

        <Reveal y={14} delay={0.08}>
          <span className="eyebrow mt-8 text-xs font-semibold text-violet tracking-[0.12em] uppercase">
            Error 404
          </span>
        </Reveal>
        <SplitReveal
          as="h1"
          text="No encontramos la página que estás buscando"
          immediate
          delay={0.18}
          className="mt-5 text-3xl sm:text-4xl lg:text-[3rem] font-bold text-text-primary leading-[1.08] tracking-[-0.02em] text-balance"
        />
        <Reveal y={16} delay={0.34}>
          <p className="mt-5 text-lg text-text-secondary leading-relaxed text-pretty">
            Puede que el enlace esté desactualizado o que la página se haya
            movido. Volvé al inicio o solicitá un turno con nuestro equipo.
          </p>
        </Reveal>

        <Reveal y={18} delay={0.44} className="mt-10 flex flex-wrap justify-center gap-4">
          <PrimaryButton href="/" size="lg">
            Volver al inicio
          </PrimaryButton>
          <Button href="/turnos" variant="outline" size="lg">
            Solicitar turno
          </Button>
        </Reveal>
      </div>
    </section>
  );
}
