"use client";

import { useMemo, useState } from "react";
import { Hero } from "@/components/ui/Hero";
import { SearchInput } from "@/components/ui/SearchInput";
import { FilterSelect } from "@/components/ui/FilterSelect";
import { EmptyState } from "@/components/ui/EmptyState";
import { ProfessionalCard } from "@/components/cards/ProfessionalCard";
import { Reveal } from "@/components/motion/Reveal";
import { professionals, getUniqueSpecialties } from "@/data/professionals";
import { locations } from "@/data/locations";

export default function ProfesionalesPage() {
  const [query, setQuery] = useState("");
  const [specialty, setSpecialty] = useState("");
  const [location, setLocation] = useState("");

  const specialties = useMemo(() => getUniqueSpecialties(), []);

  const specialtyOptions = specialties.map((s) => ({ value: s, label: s }));
  const locationOptions = locations.map((l) => ({
    value: l.id,
    label: l.name,
  }));

  // Orden explícito de especialidades para el listado (más generales / más consultadas primero).
  const specialtyOrder = [
    "Mastología",
    "Diagnóstico por Imágenes Mamarias",
    "Cirugía Plástica y Reconstructiva",
    "Anatomía Patológica",
  ];

  const filteredProfessionals = useMemo(() => {
    const normalizedQuery = query.trim().toLowerCase();
    const rankOf = (s: string) => {
      const i = specialtyOrder.indexOf(s);
      return i === -1 ? specialtyOrder.length : i;
    };
    return professionals
      .filter((p) => {
        const matchesQuery =
          normalizedQuery === "" ||
          p.name.toLowerCase().includes(normalizedQuery) ||
          p.specialty.toLowerCase().includes(normalizedQuery) ||
          p.area.toLowerCase().includes(normalizedQuery);
        const matchesSpecialty = specialty === "" || p.specialty === specialty;
        const matchesLocation =
          location === "" || p.locations.includes(location);
        return matchesQuery && matchesSpecialty && matchesLocation;
      })
      .sort((a, b) => rankOf(a.specialty) - rankOf(b.specialty));
  }, [query, specialty, location]);

  return (
    <>
      <Hero
        tag="Equipo"
        title="Profesionales especializados en salud mamaria"
        description="Conocé al equipo multidisciplinario de UCM: mastología, cirugía, oncología, diagnóstico por imágenes y acompañamiento, trabajando de forma coordinada en cada sede."
      />

      <section className="py-12 md:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Buscador y filtros */}
          <Reveal y={18} className="flex flex-col sm:flex-row gap-3">
            <SearchInput
              value={query}
              onChange={setQuery}
              placeholder="Buscar por nombre o especialidad..."
              className="sm:flex-1"
            />
            <FilterSelect
              value={specialty}
              onChange={setSpecialty}
              options={specialtyOptions}
              allLabel="Todas las especialidades"
              ariaLabel="Filtrar por especialidad"
            />
            <FilterSelect
              value={location}
              onChange={setLocation}
              options={locationOptions}
              allLabel="Todas las sedes"
              ariaLabel="Filtrar por sede"
            />
          </Reveal>

          {/* Resultados */}
          {filteredProfessionals.length > 0 ? (
            <div className="mt-10 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6">
              {filteredProfessionals.map((professional, index) => (
                <Reveal
                  key={professional.slug}
                  y={22}
                  delay={Math.min(index, 8) * 0.05}
                  className="h-full"
                >
                  <ProfessionalCard professional={professional} />
                </Reveal>
              ))}
            </div>
          ) : (
            <EmptyState
              title="No encontramos profesionales"
              message="Probá con otros términos de búsqueda o quitá alguno de los filtros aplicados."
              className="mt-10"
            />
          )}
        </div>
      </section>
    </>
  );
}
