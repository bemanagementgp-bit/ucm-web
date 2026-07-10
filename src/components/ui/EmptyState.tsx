import { HiMagnifyingGlass } from "react-icons/hi2";

interface EmptyStateProps {
  title?: string;
  message?: string;
  className?: string;
}

export function EmptyState({
  title = "Sin resultados",
  message = "No se encontraron resultados para tu búsqueda. Intentá con otros términos.",
  className = "",
}: EmptyStateProps) {
  return (
    <div className={`text-center py-16 ${className}`}>
      <div className="w-16 h-16 bg-primary-lightest rounded-full flex items-center justify-center mx-auto mb-4">
        <HiMagnifyingGlass className="w-8 h-8 text-primary" />
      </div>
      <h3 className="text-lg font-semibold text-text-primary mb-2">{title}</h3>
      <p className="text-text-secondary">{message}</p>
    </div>
  );
}
