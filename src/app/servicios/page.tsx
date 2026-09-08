"use client";

import { useMemo, useState } from "react";
import { HiArrowRight } from "react-icons/hi2";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { SearchInput } from "@/components/ui/SearchInput";
import { FilterSelect } from "@/components/ui/FilterSelect";
import { EmptyState } from "@/components/ui/EmptyState";
import { Button, PrimaryButton } from "@/components/ui/Buttons";
import { ServiceCard } from "@/components/cards/ServiceCard";
import { services, serviceCategories } from "@/data/services";

export default function ServiciosPage() {
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState("");

  const filteredServices = useMemo(() => {
    const normalizedQuery = query.trim().toLowerCase();

    return services.filter((service) => {
      const matchesQuery =
        !normalizedQuery ||
        service.name.toLowerCase().includes(normalizedQuery) ||
        service.shortDescription.toLowerCase().includes(normalizedQuery);

      const matchesCategory = !category || service.category === category;

      return matchesQuery && matchesCategory;
    });
  }, [query, category]);

  return (
    <>
      <section className="pt-28 md:pt-32 pb-12 md:pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            tag="Servicios"
            title="Encontrá el servicio que necesitás"
            description="Ofrecemos un abordaje integral: prevención, diagnóstico por imágenes, consultas médicas, intervencionismo, tratamientos y acompañamiento."
          />

          <div className="mt-10 flex flex-col sm:flex-row gap-4 max-w-2xl mx-auto">
            <SearchInput
              value={query}
              onChange={setQuery}
              placeholder="Buscar un servicio..."
              className="flex-1"
            />
            <FilterSelect
              value={category}
              onChange={setCategory}
              options={serviceCategories.map((c) => ({
                value: c.value,
                label: c.label,
              }))}
              allLabel="Todas las categorías"
              ariaLabel="Filtrar por categoría"
            />
          </div>

          {filteredServices.length > 0 ? (
            <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredServices.map((service) => (
                <ServiceCard key={service.slug} service={service} />
              ))}
            </div>
          ) : (
            <EmptyState
              title="No encontramos servicios"
              message="Probá con otra búsqueda o cambiá la categoría seleccionada."
              className="mt-8"
            />
          )}
        </div>
      </section>

      {/* ===== CTA FINAL ===== */}
      <section className="py-20 md:py-28">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-text-primary leading-tight">
            ¿No sabés qué servicio necesitás?
          </h2>
          <p className="text-lg text-text-secondary mt-4 leading-relaxed">
            Escribinos o consultá con nuestro equipo para orientarte sobre el
            estudio o la consulta más adecuada para vos.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <PrimaryButton href="/turnos" size="lg">
              Solicitar un turno
              <HiArrowRight className="w-4 h-4" />
            </PrimaryButton>
            <Button href="/contacto" variant="outline" size="lg">
              Contactar a UCM
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
