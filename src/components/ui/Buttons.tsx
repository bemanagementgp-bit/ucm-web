import Link from "next/link";
import { type ReactNode } from "react";

interface ButtonProps {
  children: ReactNode;
  href?: string;
  onClick?: () => void;
  variant?: "primary" | "secondary" | "outline" | "ghost" | "whatsapp";
  size?: "sm" | "md" | "lg";
  className?: string;
  external?: boolean;
  type?: "button" | "submit";
  disabled?: boolean;
  ariaLabel?: string;
}

const variants = {
  primary:
    "bg-primary text-white hover:bg-primary/90 focus-visible:ring-primary",
  secondary:
    "bg-violet text-white hover:bg-violet/90 focus-visible:ring-violet",
  outline:
    "border-2 border-primary text-primary hover:bg-primary/5 focus-visible:ring-primary",
  ghost:
    "text-violet-deep hover:bg-primary-lightest focus-visible:ring-violet",
  whatsapp:
    "bg-[#25D366] text-white hover:bg-[#20BD5A] focus-visible:ring-[#25D366]",
};

const sizes = {
  sm: "px-4 py-2 text-sm",
  md: "px-6 py-3 text-base",
  lg: "px-8 py-4 text-lg",
};

export function PrimaryButton(props: ButtonProps) {
  return <Button {...props} variant="primary" />;
}

export function SecondaryButton(props: ButtonProps) {
  return <Button {...props} variant="secondary" />;
}

export function WhatsAppButton(props: ButtonProps) {
  return <Button {...props} variant="whatsapp" />;
}

export function Button({
  children,
  href,
  onClick,
  variant = "primary",
  size = "md",
  className = "",
  external = false,
  type = "button",
  disabled = false,
  ariaLabel,
}: ButtonProps) {
  const baseClasses = `inline-flex items-center justify-center gap-2 font-medium rounded-xl transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer ${variants[variant]} ${sizes[size]} ${className}`;

  if (href) {
    if (external) {
      return (
        <a
          href={href}
          className={baseClasses}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={ariaLabel}
        >
          {children}
        </a>
      );
    }
    return (
      <Link href={href} className={baseClasses} aria-label={ariaLabel}>
        {children}
      </Link>
    );
  }

  return (
    <button
      type={type}
      onClick={onClick}
      className={baseClasses}
      disabled={disabled}
      aria-label={ariaLabel}
    >
      {children}
    </button>
  );
}
