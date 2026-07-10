import Link from "next/link";
import { HiArrowRight } from "react-icons/hi2";
import { type ReactNode } from "react";

interface QuickAccessCardProps {
  icon: ReactNode;
  title: string;
  description: string;
  href: string;
  className?: string;
}

export function QuickAccessCard({
  icon,
  title,
  description,
  href,
  className = "",
}: QuickAccessCardProps) {
  return (
    <Link
      href={href}
      className={`group flex items-start gap-4 bg-white rounded-2xl border border-primary-light/30 p-5 hover:shadow-lg hover:shadow-primary/5 hover:border-primary/30 transition-all duration-300 ${className}`}
    >
      <div className="w-12 h-12 bg-primary-lightest rounded-xl flex items-center justify-center shrink-0 group-hover:bg-primary-light transition-colors">
        <div className="w-6 h-6 text-primary">{icon}</div>
      </div>
      <div className="flex-1 min-w-0">
        <h3 className="font-semibold text-text-primary group-hover:text-primary transition-colors">
          {title}
        </h3>
        <p className="text-sm text-text-secondary mt-1">{description}</p>
      </div>
      <HiArrowRight className="w-5 h-5 text-primary/40 group-hover:text-primary group-hover:translate-x-1 transition-all shrink-0 mt-1" />
    </Link>
  );
}
