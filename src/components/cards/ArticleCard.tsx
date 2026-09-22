import Link from "next/link";
import type { Article } from "@/data/articles";
import { articleCategories } from "@/data/articles";
import { ArrowCircle } from "@/components/ui/ArrowCircle";

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
      className={`group flex flex-col h-full glass-card rounded-3xl p-2.5 ${className}`}
    >
      {/* Placeholder imagen */}
      <div className="card-media relative aspect-[16/10] rounded-[1.15rem] overflow-hidden">
        <div
          data-media
          className="absolute inset-0 bg-gradient-to-br from-primary-lightest to-lavender/20"
        />
        <div className="absolute top-3 left-3 z-10">
          <span className="inline-block text-[0.7rem] font-semibold text-violet bg-white/90 backdrop-blur px-3 py-1 rounded-full tracking-wide">
            {categoryLabel}
          </span>
        </div>
      </div>

      <div className="flex flex-col flex-1 p-4 pt-5">
        <time className="text-xs text-text-secondary tracking-wide">{formattedDate}</time>
        <h3 className="text-lg font-semibold text-text-primary mt-2 group-hover:text-primary transition-colors leading-snug text-balance">
          {article.title}
        </h3>
        <p className="text-sm text-text-secondary leading-relaxed mt-2 line-clamp-2">
          {article.excerpt}
        </p>
        <div className="mt-auto pt-5 flex items-center justify-between gap-3">
          <span className="text-sm font-medium text-violet group-hover:text-primary transition-colors">
            Leer más
          </span>
          <ArrowCircle size="sm" />
        </div>
      </div>
    </Link>
  );
}
