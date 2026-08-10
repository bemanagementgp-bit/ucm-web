import Link from "next/link";
import { HiArrowRight } from "react-icons/hi2";
import type { Article } from "@/data/articles";
import { articleCategories } from "@/data/articles";

interface ArticleCardProps {
  article: Article;
  className?: string;
}

export function ArticleCard({ article, className = "" }: ArticleCardProps) {
  const categoryLabel =
    articleCategories.find((c) => c.value === article.category)?.label ??
    article.category;

  const formattedDate = new Date(article.date).toLocaleDateString("es-AR", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  return (
    <Link
      href={`/novedades/${article.slug}`}
      className={`group block glass-card rounded-2xl overflow-hidden ${className}`}
    >
      {/* Placeholder imagen */}
      <div className="aspect-video bg-gradient-to-br from-primary-lightest to-lavender/20 relative">
        <div className="absolute top-4 left-4">
          <span className="inline-block text-xs font-medium text-violet bg-white/90 px-3 py-1 rounded-full">
            {categoryLabel}
          </span>
        </div>
      </div>
      <div className="p-5">
        <time className="text-xs text-text-secondary">{formattedDate}</time>
        <h3 className="text-lg font-semibold text-text-primary mt-2 group-hover:text-primary transition-colors leading-snug">
          {article.title}
        </h3>
        <p className="text-sm text-text-secondary leading-relaxed mt-2 line-clamp-2">
          {article.excerpt}
        </p>
        <span className="inline-flex items-center gap-1 text-sm font-medium text-violet group-hover:text-primary transition-colors mt-4">
          Leer más
          <HiArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
        </span>
      </div>
    </Link>
  );
}
