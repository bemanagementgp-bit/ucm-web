import type { Metadata } from "next";
import {
  HiCalendarDays,
  HiMagnifyingGlassCircle,
  HiChatBubbleLeftRight,
  HiClipboardDocumentCheck,
  HiBeaker,
} from "react-icons/hi2";
import { Hero } from "@/components/ui/Hero";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { FAQAccordion } from "@/components/ui/FAQAccordion";
import { MedicalDisclaimer } from "@/components/ui/MedicalDisclaimer";
import { PrimaryButton, Button } from "@/components/ui/Buttons";
import { ArticleCard } from "@/components/cards/ArticleCard";
import { articles } from "@/data/articles";

export const metadata: Metadata = {
  title: "Novedades y prevención",
  description:
    "Novedades, información institucional y contenido educativo sobre prevención y cuidado de la salud mamaria de UCM – Unidad de Cuidado Mamario.",
};

const pilares = [
  {
    icon: HiCalendarDays,
    title: "Controles periódicos",
    description:
      "Los controles regulares con tu médico son la base de la prevención en salud mamaria. La frecuencia y el tipo de estudio se definen de forma individual, según tu edad, tus antecedentes y la evaluación profesional.",
  },
  {
    icon: HiMagnifyingGlassCircle,
    title: "Autoobservación mamaria",
    description:
      "Conocer el aspecto y la sensibilidad habituales de tus mamas te ayuda a notar cambios con el tiempo. La autoobservación es un hábito de cuidado general y no reemplaza los estudios ni el examen médico.",
  },
  {
    icon: HiChatBubbleLeftRight,
    title: "Cuándo consultar",
    description:
      "Ante cualquier cambio que te genere dudas —un bulto nuevo, cambios en la piel, secreción o dolor persistente— lo recomendable es consultar con un profesional para una evaluación adecuada.",
  },
  {
    icon: HiClipboardDocumentCheck,
    title: "Factores a evaluar",
    description:
      "Algunos antecedentes personales o familiares pueden requerir un seguimiento más cercano. Es tu médico quien debe valorar estos factores y definir el esquema de control más adecuado para vos. [pendiente de validación]",
  },
  {
    icon: HiBeaker,
    title: "Estudios habituales",
    description:
      "Entre los estudios más utilizados para el control de la salud mamaria se encuentran la mamografía y la ecografía mamaria. Otros estudios pueden indicarse según cada situación particular. [pendiente de validación]",
  },
];

const faqs = [
  {
    question: "¿El dolor en las mamas siempre es preocupante?",
    answer:
      "No necesariamente. El dolor mamario es un síntoma frecuente y muchas veces está relacionado con cambios hormonales normales. De todas formas, si el dolor es persistente, localizado o te genera preocupación, es recomendable consultar con un profesional para que lo evalúe. [pendiente de validación]",
  },
  {
    question: "¿Desde qué edad se recomienda el primer control?",
    answer:
      "La edad de inicio de los controles y los estudios de rutina varía según las guías médicas y los antecedentes de cada persona. Tu médico es quien debe indicarte el momento y el esquema más adecuado para tu caso. [pendiente de validación]",
  },
  {
    question: "¿Todo bulto en la mama es cáncer?",
    answer:
      "No. La mayoría de los bultos o nódulos mamarios corresponden a formaciones benignas, como quistes o fibroadenomas. Aun así, cualquier hallazgo nuevo debe ser evaluado por un profesional para descartar otras causas. [pendiente de validación]",
  },
  {
    question: "¿La autoobservación reemplaza a la mamografía?",
    answer:
      "No. La autoobservación es un hábito complementario que ayuda a conocer tu cuerpo, pero no reemplaza a los estudios por imágenes ni al control médico periódico, que son las herramientas indicadas para la detección temprana.",
  },
  {
    question: "¿Tener antecedentes familiares significa que voy a desarrollar la enfermedad?",
    answer:
      "No. Tener antecedentes familiares es un factor que tu médico va a tener en cuenta al definir tu esquema de controles, pero no implica que la enfermedad vaya a desarrollarse. Cada situación debe evaluarse de forma individual. [pendiente de validación]",
  },
  {
    question: "¿Usar corpiño con aro puede causar cáncer de mama?",
    answer:
      "No existe evidencia científica que respalde esta idea, que es uno de los mitos más difundidos sobre la salud mamaria. Ante cualquier duda sobre factores de riesgo, lo mejor es consultar con un profesional de la salud.",
  },
];

export default function NovedadesPage() {
  return (
    <>
      <Hero
        tag="Novedades y prevención"
        title="Novedades e información de UCM"
        description="Noticias institucionales, avances en tecnología y contenido educativo sobre prevención y cuidado de la salud mamaria."
      />

      {/* ===== NOVEDADES ===== */}
      <section className="py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            tag="Todas las novedades"
            title="Últimas publicaciones"
            centered={false}
            className="mb-12"
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {articles.map((article) => (
              <ArticleCard key={article.slug} article={article} />
            ))}
          </div>
        </div>
      </section>

      {/* ===== PREVENCIÓN ===== */}
      <section id="prevencion" className="py-16 md:py-20 scroll-mt-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            tag="Prevención"
            title="Información sobre prevención y cuidado mamario"
            description="Reunimos información general y educativa para acompañarte en el cuidado de tu salud mamaria. Este contenido no reemplaza una consulta médica ni constituye un diagnóstico."
          />

          <MedicalDisclaimer
            className="mt-8"
            text="La información de esta sección tiene fines educativos y de concientización. No constituye un diagnóstico ni una indicación médica personalizada. Ante cualquier duda, consultá con un profesional de UCM."
          />

          <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {pilares.map((pilar) => {
              const Icon = pilar.icon;
              return (
                <div
                  key={pilar.title}
                  className="glass-card rounded-2xl p-6"
                >
                  <div className="w-12 h-12 bg-primary-lightest rounded-xl flex items-center justify-center mb-4">
                    <Icon className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="font-semibold text-text-primary">{pilar.title}</h3>
                  <p className="text-sm text-text-secondary mt-2 leading-relaxed">
                    {pilar.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ===== CUÁNDO CONSULTAR ===== */}
      <section className="py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="md:grid md:grid-cols-2 md:gap-12 items-center">
            <div>
              <SectionHeading
                tag="Señales de atención"
                title="¿Cuándo es recomendable consultar?"
                centered={false}
              />
              <p className="text-text-secondary leading-relaxed mt-4">
                Si bien la mayoría de los cambios mamarios no están relacionados
                con patologías graves, hay situaciones frente a las cuales se
                recomienda pedir una consulta con un profesional:
              </p>
              <ul className="mt-4 space-y-2 text-text-secondary">
                <li>• Aparición de un bulto o nódulo nuevo.</li>
                <li>• Cambios en la piel, el pezón o la forma de la mama.</li>
                <li>• Secreción espontánea por el pezón.</li>
                <li>• Dolor persistente o localizado que no cede.</li>
                <li>• Antecedentes familiares que generan dudas.</li>
              </ul>
              <p className="text-text-secondary leading-relaxed mt-4 text-sm">
                Esta información es orientativa y de carácter general. Solo un
                profesional puede evaluar tu situación particular. [pendiente
                de validación]
              </p>
            </div>
            <div className="mt-8 md:mt-0">
              <div className="aspect-[4/3] bg-gradient-to-br from-primary-lightest to-lavender/20 rounded-2xl flex items-center justify-center">
                <span className="text-primary/30 text-sm">
                  [Imagen ilustrativa de prevención]
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== MITOS Y PREGUNTAS FRECUENTES ===== */}
      <section className="py-16 md:py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            tag="Mitos y preguntas frecuentes"
            title="Despejamos algunas dudas comunes"
            description="Información general para acompañarte. Ante cualquier duda puntual sobre tu salud, consultá siempre con un profesional."
          />
          <FAQAccordion faqs={faqs} className="mt-10" />
          <MedicalDisclaimer className="mt-10" />
        </div>
      </section>

      {/* ===== CTA FINAL ===== */}
      <section className="py-20 md:py-28">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-text-primary leading-tight">
            ¿Tenés dudas sobre tu salud mamaria?
          </h2>
          <p className="text-lg text-text-secondary mt-4 leading-relaxed">
            Ante cualquier duda o cambio que te preocupe, lo mejor es
            consultar con nuestro equipo de profesionales.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <PrimaryButton href="/turnos" size="lg">
              Solicitar un turno
            </PrimaryButton>
            <Button href="/profesionales" variant="outline" size="lg">
              Conocer al equipo
            </Button>
          </div>
          <MedicalDisclaimer className="mt-10 text-left" />
        </div>
      </section>
    </>
  );
}
