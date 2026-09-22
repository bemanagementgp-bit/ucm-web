import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { CtaPanel } from "@/components/ui/CtaPanel";
import { Reveal } from "@/components/motion/Reveal";
import { SplitReveal } from "@/components/motion/SplitReveal";
import { Button, PrimaryButton } from "@/components/ui/Buttons";
import { MedicalDisclaimer } from "@/components/ui/MedicalDisclaimer";
import { articles, articleCategories, getArticleBySlug } from "@/data/articles";

interface ArticlePageProps {
  params: Promise<{ slug: string }>;
}

export function generateStaticParams() {
  return articles.map((article) => ({ slug: article.slug }));
}

export async function generateMetadata({
  params,
}: ArticlePageProps): Promise<Metadata> {
  const { slug } = await params;
  const article = getArticleBySlug(slug);

  if (!article) {
    return { title: "Novedad no encontrada" };
  }

  return {
    title: article.title,
    description: article.excerpt,
  };
}

function ArticleContent({ content }: { content: string }) {
  const blocks = content
    .trim()
    .split(/\n\s*\n/)
    .map((block) => block.trim())
    .filter(Boolean);

  return (
    <div className="space-y-5">
      {blocks.map((block, index) => {
        if (block.startsWith("## ")) {
          return (
            <h2
              key={index}
              className="text-xl md:text-2xl font-bold text-text-primary pt-4"
            >
              {block.replace(/^##\s*/, "")}
            </h2>
          );
        }

        if (block.startsWith("[") && block.endsWith("]")) {
          return (
            <p key={index} className="text-sm text-text-secondary/70 italic">
              {block}
            </p>
          );
        }

        return (
          <p key={index} className="text-text-secondary leading-relaxed">
            {block}
          </p>
        );
      })}
    </div>
  );
}

export default async function ArticlePage({ params }: ArticlePageProps) {
  const { slug } = await params;
  const article = getArticleBySlug(slug);

  if (!article) {
    notFound();
  }

  const categoryLabel =
    articleCategories.find((c) => c.value === article.category)?.label ??
    article.category;

  const formattedDate = new Date(article.date).toLocaleDateString("es-AR", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  return (
    <>
      <section className="">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumbs
            items={[
              { label: "Novedades", href: "/novedades" },
              { label: article.title },
            ]}
          />

          <div className="pb-12 md:pb-16">
            <Reveal y={14} duration={0.5}>
              <span className="eyebrow text-xs font-semibold text-violet tracking-[0.12em] uppercase">
                {categoryLabel}
              </span>
            </Reveal>
            <SplitReveal
              as="h1"
              text={article.title}
              immediate
              delay={0.1}
              className="mt-5 text-3xl sm:text-4xl lg:text-[3rem] font-bold text-text-primary leading-[1.08] tracking-[-0.02em] text-balance"
            />
            <Reveal y={14} delay={0.28}>
              <time className="block mt-5 text-sm text-text-secondary">
                {formattedDate}
              </time>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="py-12 md:py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Reveal y={28}>
            <div className="aspect-video bg-gradient-to-br from-primary-lightest to-lavender/20 rounded-[1.75rem] md:rounded-[2.5rem] ring-1 ring-white/50 shadow-xl shadow-primary/5 mb-10" />
          </Reveal>

          <ArticleContent content={article.content} />

          <Reveal y={16}>
            <MedicalDisclaimer className="mt-12" />
          </Reveal>
        </div>
      </section>

      <CtaPanel
        title="¿Querés saber más o consultar con nuestro equipo?"
        description="Estamos para acompañarte en el cuidado de tu salud mamaria."
      >
        <PrimaryButton href="/turnos" size="lg">
          Solicitar un turno
        </PrimaryButton>
        <Button href="/novedades" variant="outline" size="lg">
          Ver más novedades
        </Button>
      </CtaPanel>
    </>
  );
}
