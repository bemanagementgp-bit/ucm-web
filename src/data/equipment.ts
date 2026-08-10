export interface Equipment {
  slug: string;
  name: string;
  brand: string;
  model: string;
  technology: string;
  description: string;
  benefits: string[];
  relatedStudies: string[];
  locations: string[];
  images: string[];
  videoUrl?: string;
}

export const equipment: Equipment[] = [
  {
    slug: "mamografo-fujifilm-amulet-innovality",
    name: "Mamógrafo digital con tomosíntesis",
    brand: "Fujifilm",
    model: "Amulet Innovality",
    technology: "Mamografía digital directa con tomosíntesis 3D",
    description:
      "Mamógrafo digital de última generación con capacidad de tomosíntesis (mamografía 3D). Permite obtener imágenes de alta resolución con menor dosis de radiación, mejorando la detección de lesiones en mamas densas.",
    benefits: [
      "Tomosíntesis 3D para mayor precisión diagnóstica",
      "Baja dosis de radiación",
      "Alta resolución en mamas densas",
      "Guía para procedimientos intervencionistas",
    ],
    relatedStudies: ["mamografia", "intervencionismo-mamario", "biopsias", "marcaciones"],
    locations: ["imp", "city-bell"],
    images: ["/imagenes equipos/Fujifilm – Amulet Innovality.png"],
  },
  {
    slug: "ecografo-edan-acclarix-lx85",
    name: "Ecógrafo de alta resolución",
    brand: "Edan",
    model: "Acclarix LX85",
    technology: "Ultrasonido de alta frecuencia con elastografía",
    description:
      "Ecógrafo de alta gama con transductores de alta frecuencia especialmente diseñados para la evaluación mamaria. Incluye elastografía para la caracterización de lesiones. La sede City Bell cuenta con dos unidades.",
    benefits: [
      "Alta resolución en tejidos blandos",
      "Elastografía para caracterización de lesiones",
      "Sin radiación ionizante",
      "Evaluación en tiempo real",
    ],
    relatedStudies: ["ecografia-mamaria", "biopsias"],
    locations: ["city-bell"],
    images: ["/imagenes equipos/Edan – Acclarix LX85.png"],
  },
  {
    slug: "ecografo-esaote-a70",
    name: "Ecógrafo de alta resolución",
    brand: "Esaote",
    model: "A70",
    technology: "Ultrasonido de alta frecuencia",
    description:
      "Ecógrafo de alta gama para evaluación mamaria. Ofrece imágenes de alta resolución para diagnóstico y guía de procedimientos.",
    benefits: [
      "Alta resolución en tejidos blandos",
      "Sin radiación ionizante",
      "Evaluación en tiempo real",
      "Guía para biopsias percutáneas",
    ],
    relatedStudies: ["ecografia-mamaria", "biopsias"],
    locations: ["imp"],
    images: ["/imagenes equipos/Esaote – A70.png"],
  },
  {
    slug: "ecografo-toshiba-xario-100",
    name: "Ecógrafo de alta resolución",
    brand: "Toshiba",
    model: "Xario 100",
    technology: "Ultrasonido de alta frecuencia",
    description:
      "Ecógrafo complementario que garantiza disponibilidad continua del servicio de ecografía mamaria.",
    benefits: [
      "Alta resolución en tejidos blandos",
      "Sin radiación ionizante",
      "Evaluación en tiempo real",
      "Guía para procedimientos intervencionistas",
    ],
    relatedStudies: ["ecografia-mamaria", "biopsias"],
    locations: ["imp"],
    images: ["/imagenes equipos/Toshiba – Xario 100.png"],
  },
  {
    slug: "densitometro-osteosys-primus",
    name: "Densitómetro óseo",
    brand: "Osteosys",
    model: "Primus",
    technology: "Absorciometría de rayos X de energía dual (DXA)",
    description:
      "Densitómetro óseo de última generación para la evaluación de densidad mineral ósea. Complementa el cuidado integral de las pacientes de la UCM.",
    benefits: [
      "Evaluación precisa de densidad ósea",
      "Baja dosis de radiación",
      "Estudio rápido y no invasivo",
      "Seguimiento de tratamientos que afectan la salud ósea",
    ],
    relatedStudies: [],
    locations: ["city-bell"],
    images: ["/imagenes equipos/Osteosys – Primus.png"],
  },
];

export function getEquipmentBySlug(slug: string): Equipment | undefined {
  return equipment.find((e) => e.slug === slug);
}
