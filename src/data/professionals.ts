export interface Professional {
  slug: string;
  name: string;
  specialty: string;
  area: string;
  locations: string[];
  /* Placeholder – matrícula opcional */
  license?: string;
  education: string;
  experience: string;
  areasOfCare: string[];
  relatedServices: string[];
  image: string;
  featured: boolean;
}

/*
 * DATOS MOCK – Reemplazar con información real de los profesionales de UCM.
 * No se han utilizado nombres, matrículas ni especialidades reales.
 */
export const professionals: Professional[] = [
  {
    slug: "dra-ejemplo-mastologa",
    name: "[Nombre Profesional 1]",
    specialty: "Mastología",
    area: "Diagnóstico y tratamiento",
    locations: ["imp", "city-bell"],
    license: "[Matrícula]",
    education: "[Formación académica – pendiente de carga]",
    experience: "[Experiencia profesional – pendiente de carga]",
    areasOfCare: ["Mastología", "Diagnóstico mamario", "Seguimiento"],
    relatedServices: ["mamografia", "ecografia-mamaria", "mastologia"],
    image: "/images/placeholder-profesional-1.jpg",
    featured: true,
  },
  {
    slug: "dr-ejemplo-cirujano",
    name: "[Nombre Profesional 2]",
    specialty: "Cirugía mamaria",
    area: "Cirugía",
    locations: ["imp"],
    license: "[Matrícula]",
    education: "[Formación académica – pendiente de carga]",
    experience: "[Experiencia profesional – pendiente de carga]",
    areasOfCare: ["Cirugía mamaria", "Cirugía oncológica"],
    relatedServices: ["cirugia-mamaria"],
    image: "/images/placeholder-profesional-2.jpg",
    featured: true,
  },
  {
    slug: "dra-ejemplo-oncologa",
    name: "[Nombre Profesional 3]",
    specialty: "Oncología clínica",
    area: "Tratamiento",
    locations: ["imp", "city-bell"],
    license: "[Matrícula]",
    education: "[Formación académica – pendiente de carga]",
    experience: "[Experiencia profesional – pendiente de carga]",
    areasOfCare: ["Oncología clínica", "Tratamiento sistémico"],
    relatedServices: ["oncologia-clinica"],
    image: "/images/placeholder-profesional-3.jpg",
    featured: true,
  },
  {
    slug: "dra-ejemplo-ecografista",
    name: "[Nombre Profesional 4]",
    specialty: "Diagnóstico por imágenes",
    area: "Imágenes",
    locations: ["city-bell"],
    license: "[Matrícula]",
    education: "[Formación académica – pendiente de carga]",
    experience: "[Experiencia profesional – pendiente de carga]",
    areasOfCare: ["Ecografía mamaria", "Diagnóstico por imágenes"],
    relatedServices: ["ecografia-mamaria", "mamografia"],
    image: "/images/placeholder-profesional-4.jpg",
    featured: true,
  },
  {
    slug: "lic-ejemplo-psicooncologia",
    name: "[Nombre Profesional 5]",
    specialty: "Psicooncología",
    area: "Acompañamiento",
    locations: ["imp", "city-bell"],
    license: "[Matrícula]",
    education: "[Formación académica – pendiente de carga]",
    experience: "[Experiencia profesional – pendiente de carga]",
    areasOfCare: ["Psicooncología", "Acompañamiento emocional"],
    relatedServices: ["psicooncologia"],
    image: "/images/placeholder-profesional-5.jpg",
    featured: false,
  },
  {
    slug: "dra-ejemplo-plastica",
    name: "[Nombre Profesional 6]",
    specialty: "Cirugía plástica y reconstructiva",
    area: "Cirugía",
    locations: ["imp"],
    license: "[Matrícula]",
    education: "[Formación académica – pendiente de carga]",
    experience: "[Experiencia profesional – pendiente de carga]",
    areasOfCare: ["Reconstrucción mamaria", "Cirugía plástica"],
    relatedServices: ["cirugia-plastica-reconstructiva"],
    image: "/images/placeholder-profesional-6.jpg",
    featured: false,
  },
];

export function getProfessionalBySlug(slug: string): Professional | undefined {
  return professionals.find((p) => p.slug === slug);
}

export function getFeaturedProfessionals(): Professional[] {
  return professionals.filter((p) => p.featured);
}

export function getProfessionalsByLocation(locationId: string): Professional[] {
  return professionals.filter((p) => p.locations.includes(locationId));
}

export function getUniqueSpecialties(): string[] {
  return [...new Set(professionals.map((p) => p.specialty))];
}
