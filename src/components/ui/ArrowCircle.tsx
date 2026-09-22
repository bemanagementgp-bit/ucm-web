import { HiArrowRight } from "react-icons/hi2";

/**
 * Indicador circular de "ir a". Se invierte al pasar el puntero por la tarjeta
 * contenedora (que debe llevar la clase `group`).
 */
export function ArrowCircle({
  size = "md",
  className = "",
}: {
  size?: "sm" | "md";
  className?: string;
}) {
  const box = size === "sm" ? "w-8 h-8" : "w-10 h-10";
  const icon = size === "sm" ? "w-3.5 h-3.5" : "w-4 h-4";

  return (
    <span
      aria-hidden="true"
      className={`${box} shrink-0 rounded-full border border-primary/25 bg-white/50 text-primary flex items-center justify-center transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:bg-primary group-hover:border-primary group-hover:text-white group-hover:rotate-[-45deg] ${className}`}
    >
      <HiArrowRight className={icon} />
    </span>
  );
}
