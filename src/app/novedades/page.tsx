import type { Metadata } from "next";
import { Hero } from "@/components/ui/Hero";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ArticleCard } from "@/components/cards/ArticleCard";
import { articles } from "@/data/articles";

export const metadata: Metadata = {
  title: "Novedades",
  description:
    "Novedades, información institucional y contenido de interés general sobre salud mamaria de UCM – Unidad de Cuidado Mamario.",
};

export default function NovedadesPage() {
  return (
    <>
      <Hero
        tag="Novedades"
        title="Novedades e información de UCM"
        description="Noticias institucionales, avances en tecnología y contenido educativo sobre salud mamaria."
      />

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
    </>
  );
}
