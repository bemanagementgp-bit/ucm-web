"use client";

interface FilterOption {
  value: string;
  label: string;
}

interface FilterSelectProps {
  value: string;
  onChange: (value: string) => void;
  options: FilterOption[];
  allLabel?: string;
  className?: string;
  ariaLabel?: string;
}

export function FilterSelect({
  value,
  onChange,
  options,
  allLabel = "Todas",
  className = "",
  ariaLabel = "Filtrar",
}: FilterSelectProps) {
  return (
    <select
      value={value}
      onChange={(e) => onChange(e.target.value)}
      className={`px-4 py-3 rounded-xl border border-primary-light/50 bg-white text-text-primary focus:outline-none focus:ring-2 focus:ring-violet/30 focus:border-violet transition-all cursor-pointer ${className}`}
      aria-label={ariaLabel}
    >
      <option value="">{allLabel}</option>
      {options.map((opt) => (
        <option key={opt.value} value={opt.value}>
          {opt.label}
        </option>
      ))}
    </select>
  );
}
