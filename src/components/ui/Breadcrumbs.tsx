import Link from "next/link";
import { HiChevronRight } from "react-icons/hi2";

interface BreadcrumbItem {
  label: string;
  href?: string;
}

interface BreadcrumbsProps {
  items: BreadcrumbItem[];
}

export function Breadcrumbs({ items }: BreadcrumbsProps) {
  return (
    <nav aria-label="Breadcrumb" className="pt-32 md:pt-36 pb-4">
      <ol className="flex flex-wrap items-center gap-1 text-sm text-text-secondary">
        <li>
          <Link href="/" className="hover:text-primary transition-colors">
            Inicio
          </Link>
        </li>
        {items.map((item, index) => (
          <li key={index} className="flex items-center gap-1">
            <HiChevronRight className="w-4 h-4 text-text-secondary/50" />
            {item.href ? (
              <Link
                href={item.href}
                className="hover:text-primary transition-colors"
              >
                {item.label}
              </Link>
            ) : (
              <span className="text-text-primary font-medium">
                {item.label}
              </span>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
}
