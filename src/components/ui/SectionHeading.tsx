interface SectionHeadingProps {
  tag?: string;
  title: string;
  description?: string;
  centered?: boolean;
  className?: string;
}

export function SectionHeading({
  tag,
  title,
  description,
  centered = true,
  className = "",
}: SectionHeadingProps) {
  return (
    <div className={`max-w-3xl ${centered ? "mx-auto text-center" : ""} ${className}`}>
      {tag && (
        <span className="inline-block text-sm font-medium text-violet tracking-wide uppercase mb-3">
          {tag}
        </span>
      )}
      <h2 className="text-3xl md:text-4xl font-bold text-text-primary leading-tight">
        {title}
      </h2>
      {description && (
        <p className="mt-4 text-lg text-text-secondary leading-relaxed">
          {description}
        </p>
      )}
    </div>
  );
}
