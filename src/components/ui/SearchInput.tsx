"use client";

import { HiMagnifyingGlass } from "react-icons/hi2";

interface SearchInputProps {
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
  className?: string;
}

export function SearchInput({
  value,
  onChange,
  placeholder = "Buscar...",
  className = "",
}: SearchInputProps) {
  return (
    <div className={`relative ${className}`}>
      <HiMagnifyingGlass className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-text-secondary" />
      <input
        type="search"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        className="w-full pl-12 pr-4 py-3 rounded-xl border border-primary-light/50 bg-white text-text-primary placeholder:text-text-secondary/60 focus:outline-none focus:ring-2 focus:ring-violet/30 focus:border-violet transition-all"
        aria-label={placeholder}
      />
    </div>
  );
}
