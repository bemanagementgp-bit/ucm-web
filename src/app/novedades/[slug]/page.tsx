import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
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
      <section className="bg-gradient-to-br from-primary-lightest via-white to-lavender/10">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumbs
            items={[
              { label: "Novedades", href: "/novedades" },
              { label: article.title },
            ]}
          />

          <div className="pb-12 md:pb-16">
            <span className="inline-block text-xs font-medium text-violet bg-white px-3 py-1 rounded-full">
              {categoryLabel}
            </span>
            <h1 className="mt-4 text-3xl sm:text-4xl font-bold text-text-primary leading-tight">
              {article.title}
            </h1>
            <time className="block mt-4 text-sm text-text-secondary">
              {formattedDate}
            </time>
          </div>
        </div>
      </section>

      <section className="py-12 md:py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="aspect-video bg-gradient-to-br from-primary-lightest to-lavender/20 rounded-2xl flex items-center justify-center mb-10">
            <span className="text-primary/30 text-sm">
              [Imagen del artículo]
            </span>
          </div>

          <ArticleContent content={article.content} />

          <MedicalDisclaimer className="mt-12" />
        </div>
      </section>

      <section className="py-16 md:py-20 bg-primary-lightest/30">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-text-primary leading-tight">
            ¿Querés saber más o consultar con nuestro equipo?
          </h2>
          <p className="text-text-secondary mt-4 leading-relaxed">
            Estamos para acompañarte en el cuidado de tu salud mamaria.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <PrimaryButton href="/turnos" size="lg">
              Solicitar un turno
            </PrimaryButton>
            <Button href="/novedades" variant="outline" size="lg">
              Ver más novedades
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
