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
    "bg-primary/90 text-white hover:bg-primary backdrop-blur-sm shadow-[0_0_0_1px_rgba(255,255,255,0.2)_inset,0_2px_8px_rgba(217,143,168,0.3)] hover:shadow-[0_0_0_1px_rgba(255,255,255,0.3)_inset,0_4px_16px_rgba(217,143,168,0.4)] focus-visible:ring-primary",
  secondary:
    "bg-violet/90 text-white hover:bg-violet backdrop-blur-sm shadow-[0_0_0_1px_rgba(255,255,255,0.2)_inset,0_2px_8px_rgba(146,120,181,0.3)] hover:shadow-[0_0_0_1px_rgba(255,255,255,0.3)_inset,0_4px_16px_rgba(146,120,181,0.4)] focus-visible:ring-violet",
  outline:
    "border border-white/50 text-primary bg-white/40 backdrop-blur-sm hover:bg-white/60 shadow-[0_0_0_1px_rgba(255,255,255,0.15)_inset] hover:shadow-[0_0_0_1px_rgba(255,255,255,0.3)_inset,0_4px_12px_rgba(79,61,101,0.08)] focus-visible:ring-primary",
  ghost:
    "text-violet-deep hover:bg-white/40 hover:backdrop-blur-sm focus-visible:ring-violet",
  whatsapp:
    "bg-[#25D366]/90 text-white hover:bg-[#25D366] backdrop-blur-sm shadow-[0_0_0_1px_rgba(255,255,255,0.2)_inset,0_2px_8px_rgba(37,211,102,0.3)] focus-visible:ring-[#25D366]",
};

const sizes = {
  sm: "px-4 py-2 text-sm",
  md: "px-6 py-3 text-base",
  lg: "px-8 py-4 text-base sm:text-lg",
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
  // `rounded-full` + `btn-arrow`: forma de píldora y flecha que acompaña el hover.
  const baseClasses = `btn-arrow group/btn inline-flex items-center justify-center gap-2 font-medium rounded-full transition-[background-color,box-shadow,color,transform,border-color] duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] hover:-translate-y-0.5 active:translate-y-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:translate-y-0 cursor-pointer ${variants[variant]} ${sizes[size]} ${className}`;

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
