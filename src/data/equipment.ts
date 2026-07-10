export interface Equipment {
  slug: string;
  name: string;
  brand: string;
  model: string;
  technology: string;
  description: string;
  benefits: string[];
  relatedStudies: string[];
  location: string;
  images: string[];
  videoUrl?: string;
}

/*
 * DATOS MOCK – No se han inventado marcas ni modelos.
 * Todos los campos técnicos son placeholders editables.
 */
export const equipment: Equipment[] = [
  {
    slug: "mamografo-principal",
    name: "[Nombre del mamógrafo]",
    brand: "[Marca]",
    model: "[Modelo]",
    technology: "[Tipo de tecnología – ej: tomosíntesis, mamografía digital]",
    description:
      "[Descripción técnica validada por el equipo médico – pendiente de carga]",
    benefits: [
      "Mayor precisión diagnóstica",
      "Menor dosis de radiación",
      "Imágenes de alta resolución",
      "[Beneficio adicional – pendiente de validación]",
    ],
    relatedStudies: ["mamografia", "intervencionismo-mamario", "biopsias", "marcaciones"],
    location: "imp",
    images: ["/images/placeholder-equipo-mamografo.jpg"],
  },
  {
    slug: "ecografo-principal",
    name: "[Nombre del ecógrafo]",
    brand: "[Marca]",
    model: "[Modelo]",
    technology: "[Tipo de tecnología – ej: ultrasonido de alta frecuencia]",
    description:
      "[Descripción técnica validada por el equipo médico – pendiente de carga]",
    benefits: [
      "Evaluación en tiempo real",
      "Sin radiación ionizante",
      "Alta resolución de tejidos blandos",
      "[Beneficio adicional – pendiente de validación]",
    ],
    relatedStudies: ["ecografia-mamaria", "biopsias"],
    location: "city-bell",
    images: ["/images/placeholder-equipo-ecografo.jpg"],
  },
];

export function getEquipmentBySlug(slug: string): Equipment | undefined {
  return equipment.find((e) => e.slug === slug);
}
