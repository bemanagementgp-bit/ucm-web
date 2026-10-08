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
  /** Ruta del retrato en `public/`. Vacío mientras no haya fotografía cargada. */
  image: string;
  featured: boolean;
  practiceNote?: string;
  /** Solo dígitos en formato internacional, ej. "5492216799773". Si existe, el botón de turno abre WhatsApp directo al consultorio. */
  consultationWhatsapp?: string;
  /** Si true, aparece en el listing pero sin ficha de detalle (no clickeable). */
  noDetailPage?: boolean;
}

export const professionals: Professional[] = [
  {
    slug: "dr-aldo-creton",
    name: "Dr. Aldo Miguel Creton",
    specialty: "Mastología",
    area: "Mastólogo",
    locations: ["imp", "city-bell"],
    license: "MP 18.089 / MN 80.069",
    education:
      "Médico especialista en Cirugía General. Fellowship en Mastología.",
    experience:
      "Director de la Unidad de Cuidado Mamario. Práctica enfocada en cirugía mamaria oncológica, conservadora y oncoplástica. Miembro de la Sociedad Argentina de Mastología (SAMAS).",
    areasOfCare: ["Mastología", "Cirugía mamaria oncológica", "Cirugía oncoplástica"],
    relatedServices: ["mastologia", "cirugia-mamaria"],
    image: "/images/profesionales/dr-aldo-creton.jpg",
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
      "Especialista Jerarquizada en Diagnóstico por Imágenes. Imágenes mamarias (SAMAS y SAR). Intervencionismo mamario.",
    experience:
      "Jefa del área de Imágenes Mamarias de la UCM. Ex jefa de Sala y de Imágenes Mamarias del HIGA San Martín de La Plata.",
    areasOfCare: [
      "Mamografía",
      "Ecografía mamaria",
      "Ecografía ginecológica",
      "Ecografía general (abdomen, tiroides)",
      "Intervencionismo mamario",
    ],
    relatedServices: [
      "mamografia",
      "ecografia-mamaria",
      "ecografia-ginecologica",
      "intervencionismo-mamario",
      "biopsias",
      "marcaciones",
    ],
    image: "/images/profesionales/dra-natalia-patino.jpg",
    featured: true,
  },
  {
    slug: "dra-valeria-moliner",
    name: "Dra. Valeria Moliner",
    specialty: "Mastología",
    area: "Cirugía",
    locations: ["imp", "city-bell"],
    license: "MP 115.664 / MN 207.399",
    education:
      "Médica especialista en Cirugía General. Fellowship en Mastología (SAMAS).",
    experience:
      "Cirujana mastóloga de la UCM. Práctica enfocada en cirugía mamaria oncológica, conservadora y oncoplástica. Planta permanente de la Clínica Quirúrgica y Mastología del Hospital Alejandro Korn de Melchor Romero. Miembro de la Sociedad Argentina de Mastología.",
    areasOfCare: ["Mastología", "Cirugía mamaria oncológica", "Cirugía oncoplástica"],
    relatedServices: ["mastologia", "cirugia-mamaria"],
    image: "/images/profesionales/dra-valeria-moliner.jpg",
    featured: true,
  },
  {
    slug: "dra-noelia-hobaica",
    name: "Dra. Noelia Hobaica",
    specialty: "Mastología",
    area: "Cirugía",
    locations: ["imp", "city-bell"],
    license: "MP 116.877 / MN 207.116",
    education:
      "Especialista en Cirugía General. Especialista en Mastología.",
    experience:
      "Médica mastóloga de la UCM. Práctica enfocada en cirugía mamaria oncológica, conservadora y oncoplástica. Miembro de la Sociedad Argentina de Mastología.",
    areasOfCare: ["Mastología", "Cirugía mamaria oncológica", "Cirugía oncoplástica"],
    relatedServices: ["mastologia", "cirugia-mamaria"],
    image: "/images/profesionales/dra-noelia-hobaica.jpg",
    featured: true,
  },
  {
    slug: "dra-ivana-mileo",
    name: "Dra. Ivana Patricia Mileo",
    specialty: "Diagnóstico por Imágenes Mamarias",
    area: "Imágenes",
    locations: ["imp"],
    license: "MP 117.307",
    education:
      "Especialista en Diagnóstico por Imágenes, Hospital Rossi (SAR).",
    experience:
      "Médica especialista en imágenes mamarias de la UCM desde 2023. Ecografía mamaria, mamografía diagnóstica.",
    areasOfCare: [
      "Mamografía",
      "Ecografía mamaria",
      "Ecografía ginecológica",
      "Ecografía general (abdomen, tiroides)",
    ],
    relatedServices: [
      "mamografia",
      "ecografia-mamaria",
      "ecografia-ginecologica",
    ],
    image: "/images/profesionales/dra-ivana-mileo.jpg",
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
      "Especialista Jerarquizada en Diagnóstico por Imágenes. Imágenes mamarias (Hospital Austral, SAMAS y SAR). Intervencionismo mamario. Especialista en Docencia Universitaria, UNLP.",
    experience:
      "Médica especialista en imágenes mamarias de la UCM. Docente de la Cátedra de Diagnóstico por Imágenes de la UNLP. Densitometría ósea y evaluación de composición corporal por DEXA.",
    areasOfCare: [
      "Mamografía",
      "Ecografía mamaria",
      "Ecografía ginecológica",
      "Ecografía general (abdomen, tiroides)",
      "Densitometría",
      "Intervencionismo mamario",
    ],
    relatedServices: [
      "mamografia",
      "ecografia-mamaria",
      "ecografia-ginecologica",
      "intervencionismo-mamario",
    ],
    image: "/images/profesionales/dra-fernanda-sisu.jpg",
    featured: true,
  },
  {
    slug: "dra-juliana-ciuci",
    name: "Dra. Juliana Ciuci",
    specialty: "Diagnóstico por Imágenes Mamarias",
    area: "Imágenes",
    locations: ["imp", "city-bell"],
    license: "MP 231.765",
    education:
      "Especialista en Diagnóstico por Imágenes. Imágenes e intervencionismo mamario.",
    experience:
      "Médica especialista en imágenes mamarias de la UCM. Médica staff del Hospital San Juan de Dios de La Plata.",
    areasOfCare: [
      "Mamografía",
      "Ecografía mamaria",
      "Ecografía ginecológica",
      "Ecografía general (abdomen, tiroides)",
      "Intervencionismo mamario",
    ],
    relatedServices: [
      "mamografia",
      "ecografia-mamaria",
      "ecografia-ginecologica",
      "intervencionismo-mamario",
    ],
    image: "/images/profesionales/dra-juliana-ciuci.jpg",
    featured: false,
  },
  {
    slug: "dra-laura-miranda",
    name: "Dra. Laura Miranda",
    specialty: "Diagnóstico por Imágenes Mamarias",
    area: "Imágenes",
    locations: ["imp", "city-bell"],
    license: "MP 111.827",
    education:
      "Especialista en Diagnóstico por Imágenes. Imágenes mamarias. Intervencionismo mamario.",
    experience:
      "Directora de la Unidad de Cuidado Mamario. Médica especialista en imágenes mamarias de la UCM. Realiza también biopsias y marcaciones.",
    areasOfCare: [
      "Mamografía",
      "Ecografía mamaria",
      "Ecografía ginecológica",
      "Ecografía general (abdomen, tiroides)",
      "Intervencionismo mamario",
    ],
    relatedServices: ["mamografia", "ecografia-mamaria", "ecografia-ginecologica", "intervencionismo-mamario", "biopsias", "marcaciones"],
    image: "/images/profesionales/dra-laura-miranda.jpg",
    featured: true,
  },
  {
    slug: "dra-barbara-carloni",
    name: "Dra. Bárbara Carloni",
    specialty: "Diagnóstico por Imágenes Mamarias",
    area: "Imágenes",
    locations: ["imp", "city-bell"],
    license: "MP 118.048",
    education:
      "Especialista en Diagnóstico por Imágenes. Fellowship en Diagnóstico Mamario e Imágenes en la Mujer, TCba Centro de Diagnóstico.",
    experience: "Médica especialista en imágenes mamarias de la UCM.",
    areasOfCare: [
      "Mamografía",
      "Ecografía mamaria",
      "Ecografía ginecológica",
      "Ecografía general (abdomen, tiroides)",
    ],
    relatedServices: ["mamografia", "ecografia-mamaria", "ecografia-ginecologica"],
    image: "/images/profesionales/dra-barbara-carloni.jpg",
    featured: false,
  },
  {
    slug: "dra-gabriela-tiburzi",
    name: "Dra. Gabriela Tiburzi",
    specialty: "Diagnóstico por Imágenes Mamarias",
    area: "Imágenes",
    locations: ["imp", "city-bell"],
    license: "MP 111.340",
    education: "Especialista en Diagnóstico por Imágenes.",
    experience: "Médica especialista en imágenes mamarias de la UCM.",
    areasOfCare: [
      "Mamografía",
      "Ecografía mamaria",
      "Ecografía ginecológica",
      "Ecografía general (abdomen, tiroides)",
    ],
    relatedServices: ["mamografia", "ecografia-mamaria", "ecografia-ginecologica"],
    image: "/images/profesionales/dra-gabriela-tiburzi.jpg",
    featured: false,
  },
  {
    slug: "dra-agustina-de-andreis",
    name: "Dra. Agustina De Andreis",
    specialty: "Diagnóstico por Imágenes Mamarias",
    area: "Imágenes",
    locations: ["imp", "city-bell"],
    license: "MP 119.304",
    education:
      "Especialista en Diagnóstico por Imágenes, HIGA San Martín de La Plata (FAARDIT). Imágenes mamarias (PROEMAS, SAR y FAARDIT).",
    experience: "Médica especialista en imágenes mamarias de la UCM.",
    areasOfCare: [
      "Mamografía",
      "Ecografía mamaria",
      "Ecografía ginecológica",
      "Ecografía general (abdomen, tiroides)",
    ],
    relatedServices: ["mamografia", "ecografia-mamaria", "ecografia-ginecologica"],
    image: "/images/profesionales/dra-agustina-de-andreis.jpg",
    featured: false,
  },
  {
    slug: "dra-milea-clapsos",
    name: "Dra. Milea Clapsos",
    specialty: "Diagnóstico por Imágenes Mamarias",
    area: "Imágenes",
    locations: ["imp", "city-bell"],
    license: "MP 118.544",
    education: "Especialista en Diagnóstico por Imágenes.",
    experience:
      "Médica especialista en imágenes mamarias de la UCM. Médica staff del Hospital San Martín de La Plata.",
    areasOfCare: [
      "Mamografía",
      "Ecografía mamaria",
      "Ecografía ginecológica",
      "Ecografía general (abdomen, tiroides)",
    ],
    relatedServices: ["mamografia", "ecografia-mamaria", "ecografia-ginecologica"],
    image: "/images/profesionales/dra-milea-clapsos.jpg",
    featured: false,
  },
  {
    slug: "dra-silvia-ortiz-polanco",
    name: "Dra. Silvia Ortiz Polanco",
    specialty: "Diagnóstico por Imágenes Mamarias",
    area: "Imágenes",
    locations: ["imp"],
    license: "MP 119.758",
    education:
      "Especialista en Diagnóstico por Imágenes. Especialista en Epidemiología, Universidad Surcolombiana (Colombia). Subespecialista en Imágenes e Intervencionismo Mamario. Fellow en Imágenes Mamarias e Intervencionismo, Clínica Privada DIM.",
    experience:
      "Médica especialista en imágenes mamarias de la UCM. Formación en inteligencia artificial y tecnología médica: manejo de Koios DS Breast. Médica coordinadora de Teleeducación. Ayudante diplomada de la Cátedra de Diagnóstico por Imágenes de la UNLP. Médica staff del Hospital Ramón Carrillo y del Hospital Campomar.",
    areasOfCare: [
      "Mamografía",
      "Ecografía mamaria",
      "Ecografía ginecológica",
      "Ecografía general (abdomen, tiroides)",
      "Intervencionismo mamario",
    ],
    relatedServices: [
      "mamografia",
      "ecografia-mamaria",
      "ecografia-ginecologica",
      "intervencionismo-mamario",
    ],
    image: "/images/profesionales/dra-silvia-ortiz-polanco.jpg",
    featured: false,
  },
  {
    slug: "dra-paula-calaramo",
    name: "Dra. Paula Andrea Calaramo",
    specialty: "Diagnóstico por Imágenes Mamarias",
    area: "Imágenes",
    locations: ["imp", "city-bell"],
    license: "MP 114.452",
    education:
      "Especialista en Diagnóstico por Imágenes. Más de 20 años de trayectoria. Premio ARRS 2022.",
    experience:
      "Médica especialista en imágenes mamarias de la UCM. Médica staff del Hospital Italiano de La Plata. Investigadora premiada.",
    areasOfCare: [
      "Mamografía",
      "Ecografía mamaria",
      "Ecografía ginecológica",
      "Ecografía general (abdomen, tiroides)",
      "Intervencionismo mamario",
    ],
    relatedServices: [
      "mamografia",
      "ecografia-mamaria",
      "ecografia-ginecologica",
      "intervencionismo-mamario",
    ],
    image: "/images/profesionales/dra-paula-calaramo.jpg",
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
      "Especialista Jerarquizada en Cirugía Plástica, Estética y Reparadora. Especialista en Cirugía Plástica y Reconstructiva Infantil y Quemados. Posgrado Universitario en Oncoplastia Mamaria (UCA). Fellowships en el exterior con los profesores Ivo Pitanguy (Río de Janeiro), Felipe Coifmann (Bogotá) y Ergun Kürün (Estambul).",
    experience:
      "Cirujana plástica y responsable del Área de Cirugía Plástica y Oncoplastia del Instituto Médico Platense. Ex presidenta de la Sociedad de Cirugía Plástica, Estética y Reparadora de La Plata (2023-2025), miembro titular de la Sociedad Argentina de Cirugía Plástica, Estética y Reparadora (SACPER) y de la Federación Iberolatinoamericana de Cirugía Plástica (FILACP). Residencia completa en cirugía general y oncológica en el Centro Oncológico de Excelencia (Fundación Mainetti); residencia completa, jefa de residentes e instructora de residentes en Clínica Juri de Cirugía Plástica. En el Hospital de Niños Sor María Ludovica de La Plata fue médica de planta y responsable del departamento de Patología Mamaria Infanto-Juvenil, y actualmente es médica consultora del Servicio de Cirugía Plástica y Quemados.",
    areasOfCare: [
      "Oncoplastia mamaria",
      "Reconstrucción mamaria",
      "Cirugía plástica estética y reparadora",
      "Cirugía plástica y reconstructiva infantil",
    ],
    relatedServices: ["cirugia-plastica-reconstructiva"],
    image: "/images/profesionales/dra-florencia-calaramo.jpg",
    featured: true,
    practiceNote:
      "Realiza cirugías en el Instituto Médico Platense, pero no atiende consultas en la sede: las consultas se realizan en su consultorio particular de calle 20 nº 1375 e/ 60 y 61, La Plata.",
    consultationWhatsapp: "5492214947570",
  },
  {
    slug: "dra-maria-bolla",
    name: "Dra. María Bolla",
    specialty: "Anatomía Patológica",
    area: "Diagnóstico",
    locations: ["imp"],
    education: "Especialista en Anatomía Patológica.",
    experience: "Anatomopatóloga de la UCM.",
    areasOfCare: ["Anatomía patológica mamaria"],
    relatedServices: [],
    image: "",
    featured: false,
    noDetailPage: true,
  },
  {
    slug: "dra-mercedes-skare",
    name: "Dra. Mercedes Skare",
    specialty: "Anatomía Patológica",
    area: "Diagnóstico",
    locations: ["imp"],
    license: "MP 117.265 / MN 127.193",
    education:
      "Médica especialista en Anatomía Patológica. Médica especialista en Medicina Crítica y Cuidados Intensivos.",
    experience:
      "Anatomopatóloga de la UCM. Médica perito forense en Anatomía Patológica. Asesoría Pericial de la Suprema Corte de Justicia de la Provincia de Buenos Aires.",
    areasOfCare: ["Anatomía patológica mamaria", "Biopsias"],
    relatedServices: ["biopsias"],
    image: "/images/profesionales/dra-mercedes-skare.jpg",
    featured: false,
  },
  {
    slug: "dra-paola-price",
    name: "Dra. Paola Price",
    specialty: "Oncología Clínica",
    area: "Oncología",
    locations: ["imp"],
    education:
      "Especialista consultora en Oncología. Máster en Oncología Biomolecular, Universidad de Bélgica.",
    experience:
      "Jefa del área de Oncología de la UCM. Médica staff del Centro Oncológico Integral. Investigadora y subinvestigadora de ensayos clínicos. Ex presidenta de la Sociedad de Cancerología de la ciudad de La Plata. Premio IASLC Cancer Team Award of Latin America 2026.",
    areasOfCare: [
      "Oncología clínica mamaria",
      "Tratamiento oncológico sistémico",
      "Asesoramiento genético en oncología",
    ],
    relatedServices: ["oncologia-clinica"],
    image: "",
    featured: false,
  },
  {
    // TODO: completar matrícula, formación, experiencia y sedes reales (datos provisorios)
    slug: "dra-andrea-mainella",
    name: "Dra. Andrea Mainella",
    specialty: "Oncología Clínica",
    area: "Oncología",
    locations: ["imp", "city-bell"],
    license: "MP 113.821",
    education:
      "Médica especialista en Oncología Clínica. Posgrado en Asesoramiento Genético en Oncología.",
    experience: "Médica oncóloga de la UCM.",
    areasOfCare: ["Oncología clínica mamaria", "Tratamiento oncológico sistémico"],
    relatedServices: ["oncologia-clinica"],
    image: "/images/profesionales/dra-andrea-mainella.jpg",
    featured: false,
  },
  {
    // TODO: completar matrícula, formación, experiencia y sedes reales (datos provisorios)
    slug: "dra-fabiana-marmisole",
    name: "Dra. Fabiana Marmisole",
    specialty: "Oncología Clínica",
    area: "Oncología",
    locations: ["imp", "city-bell"],
    education: "Especialista en Oncología Clínica.",
    experience: "Médica oncóloga de la UCM.",
    areasOfCare: ["Oncología clínica mamaria", "Tratamiento oncológico sistémico"],
    relatedServices: ["oncologia-clinica"],
    image: "",
    featured: false,
  },
  {
    slug: "lic-gabriela-miranda",
    name: "Lic. Gabriela Miranda",
    specialty: "Psicooncología",
    area: "Acompañamiento",
    locations: ["imp", "city-bell"],
    education:
      "Licenciada en Psicología.",
    experience:
      "Psicooncóloga de la UCM. Acompañamiento emocional de pacientes y familiares durante el proceso diagnóstico y terapéutico.",
    areasOfCare: ["Psicooncología", "Acompañamiento emocional"],
    relatedServices: ["psicooncologia"],
    image: "/images/profesionales/lic-gabriela-miranda.jpg",
    featured: false,
    practiceNote:
      "Los turnos con la Lic. Gabriela Miranda se coordinan directamente con ella por WhatsApp, no por las vías de turnos de las sedes.",
    consultationWhatsapp: "5492216393621",
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
