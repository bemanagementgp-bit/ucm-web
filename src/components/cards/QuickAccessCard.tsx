import Link from "next/link";
import { type ReactNode } from "react";
import { ArrowCircle } from "@/components/ui/ArrowCircle";

interface QuickAccessCardProps {
  icon: ReactNode;
  title: string;
  description: string;
  href: string;
  external?: boolean;
  className?: string;
}

export function QuickAccessCard({
  icon,
  title,
  description,
  href,
  external = false,
  className = "",
}: QuickAccessCardProps) {
  return (
    <Link
      href={href}
      {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
      className={`group flex items-center gap-4 glass-card rounded-3xl p-5 sm:p-6 ${className}`}
    >
      <div className="w-12 h-12 bg-primary-lightest rounded-2xl flex items-center justify-center shrink-0 transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:bg-primary-light group-hover:scale-105">
        <div className="w-6 h-6 text-primary">{icon}</div>
      </div>
      <div className="flex-1 min-w-0">
        <h3 className="font-semibold text-text-primary group-hover:text-primary transition-colors">
          {title}
        </h3>
        <p className="text-sm text-text-secondary mt-1 text-pretty">{description}</p>
      </div>
      <ArrowCircle />
    </Link>
  );
}
