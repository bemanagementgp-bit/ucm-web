export interface Professional {
  slug: string;
  name: string;
  specialty: string;
  area: string;
  locations: string[];
  license?: string;
  education: string;
  experience: string;
  areasOfCare: string[];
  relatedServices: string[];
  image: string;
  featured: boolean;
  practiceNote?: string;
  /** Solo dígitos en formato internacional, ej. "5492216799773". Si existe, el botón de turno abre WhatsApp directo al consultorio. */
  consultationWhatsapp?: string;
}

export const professionals: Professional[] = [
  {
    slug: "dr-aldo-creton",
    name: "Dr. Aldo Miguel Creton",
    specialty: "Cirugía General y Mastología",
    area: "Dirección y cirugía",
    locations: ["imp", "city-bell"],
    license: "MP 18.089 / MN 80.069",
    education:
      "Especialista en Cirugía General. Especialista en Mastología. Fellow en Mastología (Instituto Alexander Fleming).",
    experience:
      "Director de la Unidad de Cuidado Mamario. Jefe de la Unidad de Mastología del IMP. Miembro de la Sociedad Argentina de Mastología.",
    areasOfCare: ["Mastología", "Cirugía mamaria", "Dirección médica"],
    relatedServices: ["mastologia", "cirugia-mamaria"],
    image: "/images/placeholder-profesional-1.jpg",
    featured: true,
  },
  {
    slug: "dra-natalia-patino",
    name: "Dra. Natalia Karina Patiño",
    specialty: "Diagnóstico por Imágenes Mamarias",
    area: "Imágenes",
    locations: ["imp", "city-bell"],
    license: "MP 114.868",
    education:
      "Especialista Jerarquizada en Diagnóstico por Imágenes. Formación en imágenes mamarias.",
    experience:
      "Jefa del Servicio de Imágenes Mamarias de la UCM. Especialista en mamografía, ecografía mamaria e intervencionismo.",
    areasOfCare: [
      "Mamografía",
      "Ecografía mamaria",
      "Intervencionismo mamario",
    ],
    relatedServices: [
      "mamografia",
      "ecografia-mamaria",
      "intervencionismo-mamario",
      "biopsias",
      "marcaciones",
    ],
    image: "/images/placeholder-profesional-2.jpg",
    featured: true,
  },
  {
    slug: "dra-valeria-moliner",
    name: "Dra. Valeria Moliner",
    specialty: "Cirugía y Mastología",
    area: "Cirugía",
    locations: ["imp", "city-bell"],
    license: "MP 115.664 / MN 207.399",
    education:
      "Especialista en Cirugía General. Especialista en Mastología.",
    experience:
      "Cirujana mastóloga de la UCM. Práctica enfocada en cirugía mamaria oncológica y conservadora.",
    areasOfCare: ["Mastología", "Cirugía mamaria oncológica"],
    relatedServices: ["mastologia", "cirugia-mamaria"],
    image: "/images/placeholder-profesional-3.jpg",
    featured: true,
  },
  {
    slug: "dra-ivana-mileo",
    name: "Dra. Ivana Patricia Mileo",
    specialty: "Diagnóstico por Imágenes Mamarias",
    area: "Imágenes",
    locations: ["imp", "city-bell"],
    education:
      "Especialista Jerarquizada en Diagnóstico por Imágenes. Formación en imagen mamaria.",
    experience:
      "Médica especialista en imágenes mamarias de la UCM desde 2023. Ecografía mamaria, mamografía diagnóstica.",
    areasOfCare: ["Mamografía", "Ecografía mamaria"],
    relatedServices: ["mamografia", "ecografia-mamaria"],
    image: "/images/placeholder-profesional-4.jpg",
    featured: true,
  },
  {
    slug: "dra-fernanda-sisu",
    name: "Dra. María Fernanda Sisu Di Pizio",
    specialty: "Diagnóstico por Imágenes Mamarias",
    area: "Imágenes",
    locations: ["imp", "city-bell"],
    license: "MP 117.951",
    education:
      "Especialista en Diagnóstico por Imágenes. Formación en mamografía y densitometría.",
    experience:
      "Médica especialista en imágenes mamarias y densitometría de la UCM desde 2020.",
    areasOfCare: ["Mamografía", "Ecografía mamaria", "Densitometría"],
    relatedServices: ["mamografia", "ecografia-mamaria"],
    image: "/images/placeholder-profesional-5.jpg",
    featured: true,
  },
  {
    slug: "dra-juliana-ciuci",
    name: "Dra. Juliana Ciuci",
    specialty: "Diagnóstico por Imágenes Mamarias",
    area: "Imágenes",
    locations: ["imp", "city-bell"],
    education:
      "Especialista en Diagnóstico por Imágenes. Formación en imagen mamaria.",
    experience:
      "Médica especialista en imágenes mamarias de la UCM. Desempeño en sedes IMP y CMD City Bell.",
    areasOfCare: ["Mamografía", "Ecografía mamaria"],
    relatedServices: ["mamografia", "ecografia-mamaria"],
    image: "/images/placeholder-profesional-6.jpg",
    featured: false,
  },
  {
    slug: "dra-paula-calaramo",
    name: "Dra. Paula Andrea Calaramo",
    specialty: "Diagnóstico por Imágenes Mamarias",
    area: "Imágenes",
    locations: ["imp"],
    education:
      "Especialista en Diagnóstico por Imágenes. Más de 20 años de trayectoria. Premio ARRS 2022.",
    experience:
      "Médica especialista en imágenes mamarias de la UCM. Amplia trayectoria en Hospital Italiano de La Plata. Investigadora premiada.",
    areasOfCare: ["Mamografía", "Ecografía mamaria", "Intervencionismo mamario"],
    relatedServices: [
      "mamografia",
      "ecografia-mamaria",
      "intervencionismo-mamario",
    ],
    image: "/images/placeholder-profesional-7.jpg",
    featured: false,
  },
  {
    slug: "dra-florencia-calaramo",
    name: "Dra. Florencia Calaramo",
    specialty: "Cirugía Plástica y Reconstructiva",
    area: "Cirugía",
    locations: ["imp"],
    license: "MP 114.624 / MN 128.590",
    education:
      "Especialista Jerarquizada en Cirugía Plástica. Formación en oncoplastia mamaria.",
    experience:
      "Cirujana plástica de la UCM. Especialista en reconstrucción y oncoplastia mamaria.",
    areasOfCare: ["Reconstrucción mamaria", "Oncoplastia mamaria", "Cirugía plástica"],
    relatedServices: ["cirugia-plastica-reconstructiva"],
    image: "/images/placeholder-profesional-8.jpg",
    featured: true,
    practiceNote:
      "Realiza cirugías en el Instituto Médico Platense, pero no atiende consultas en la sede: las consultas se realizan en su consultorio particular.",
    consultationWhatsapp: "5492214947570",
  },
  {
    slug: "dra-mercedes-skare",
    name: "Dra. Mercedes Skare",
    specialty: "Anatomía Patológica",
    area: "Diagnóstico",
    locations: ["imp"],
    license: "MP 117.265 / MN 127.193",
    education:
      "Especialista en Anatomía Patológica.",
    experience:
      "Anatomopatóloga de la UCM. Análisis histopatológico de biopsias y piezas quirúrgicas mamarias.",
    areasOfCare: ["Anatomía patológica mamaria", "Biopsias"],
    relatedServices: ["biopsias"],
    image: "/images/placeholder-profesional-9.jpg",
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
