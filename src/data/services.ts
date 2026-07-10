export interface FAQ {
  question: string;
  answer: string;
}

export interface Service {
  slug: string;
  name: string;
  shortDescription: string;
  description: string;
  category: ServiceCategory;
  icon: string;
  purpose: string;
  procedure: string;
  preparation: string;
  duration: string;
  faqs: FAQ[];
  relatedProfessionals: string[];
  relatedEquipment: string[];
  locations: string[];
  appointmentType: "images" | "pathology" | "interventionism" | "other";
  /* Placeholder para imagen */
  image: string;
}

export type ServiceCategory =
  | "prevencion-diagnostico"
  | "consultas-medicas"
  | "intervencionismo"
  | "tratamientos"
  | "acompanamiento";

export const serviceCategories: { value: ServiceCategory; label: string }[] = [
  { value: "prevencion-diagnostico", label: "Prevención y diagnóstico" },
  { value: "consultas-medicas", label: "Consultas médicas" },
  { value: "intervencionismo", label: "Intervencionismo" },
  { value: "tratamientos", label: "Tratamientos" },
  { value: "acompanamiento", label: "Acompañamiento" },
];

export const services: Service[] = [
  {
    slug: "mamografia",
    name: "Mamografía",
    shortDescription:
      "Estudio de imágenes fundamental para la detección temprana de patologías mamarias.",
    description:
      "La mamografía es un estudio de imágenes que permite evaluar el tejido mamario mediante rayos X de baja dosis. Es el método de referencia para el screening y la detección temprana de lesiones mamarias.",
    category: "prevencion-diagnostico",
    icon: "TbRadioactive",
    purpose:
      "Detectar lesiones mamarias en etapas iniciales, evaluar cambios en el tejido mamario y realizar controles periódicos de salud mamaria.",
    procedure:
      "El estudio se realiza en el mamógrafo, donde se toman imágenes de cada mama en diferentes proyecciones. El procedimiento dura pocos minutos y es realizado por personal técnico especializado.",
    preparation:
      "No se requiere preparación especial. Se recomienda no aplicar desodorante, talco ni cremas en la zona de las axilas y mamas el día del estudio.",
    duration: "Aproximadamente 15 a 20 minutos.",
    faqs: [
      {
        question: "¿Cada cuánto debo realizarme una mamografía?",
        answer:
          "La frecuencia del control depende de tu edad, antecedentes y evaluación médica. Consultá con tu médico para definir el esquema adecuado.",
      },
      {
        question: "¿Es dolorosa?",
        answer:
          "Puede generar una leve molestia por la compresión necesaria para obtener imágenes de calidad, pero dura pocos segundos.",
      },
      {
        question: "¿Necesito orden médica?",
        answer:
          "Sí, es necesario contar con una orden o indicación médica para realizar el estudio.",
      },
    ],
    relatedProfessionals: ["dra-ejemplo-mastologa"],
    relatedEquipment: ["mamografo-principal"],
    locations: ["imp", "city-bell"],
    appointmentType: "images",
    image: "/images/placeholder-mamografia.jpg",
  },
  {
    slug: "ecografia-mamaria",
    name: "Ecografía mamaria",
    shortDescription:
      "Estudio complementario que permite evaluar el tejido mamario mediante ultrasonido.",
    description:
      "La ecografía mamaria utiliza ondas de ultrasonido para generar imágenes del tejido mamario. Es un estudio complementario a la mamografía que permite caracterizar lesiones y evaluar zonas específicas.",
    category: "prevencion-diagnostico",
    icon: "TbWaveSine",
    purpose:
      "Complementar la evaluación mamográfica, caracterizar lesiones detectadas, evaluar mamas densas y guiar procedimientos intervencionistas.",
    procedure:
      "Se aplica gel sobre la mama y se desliza un transductor que emite ultrasonido. Las imágenes se visualizan en tiempo real en un monitor.",
    preparation: "No se requiere preparación especial.",
    duration: "Aproximadamente 15 a 30 minutos.",
    faqs: [
      {
        question: "¿La ecografía reemplaza a la mamografía?",
        answer:
          "No. Son estudios complementarios. La ecografía aporta información adicional que la mamografía no puede ofrecer y viceversa.",
      },
      {
        question: "¿Es un estudio seguro?",
        answer:
          "Sí, la ecografía utiliza ultrasonido y no emite radiación ionizante.",
      },
    ],
    relatedProfessionals: ["dra-ejemplo-mastologa"],
    relatedEquipment: ["ecografo-principal"],
    locations: ["imp", "city-bell"],
    appointmentType: "images",
    image: "/images/placeholder-ecografia.jpg",
  },
  {
    slug: "mastologia",
    name: "Mastología",
    shortDescription:
      "Consulta especializada en el diagnóstico y tratamiento de patologías mamarias.",
    description:
      "La mastología es la especialidad médica dedicada al estudio, diagnóstico y tratamiento de las enfermedades de la mama. El mastólogo evalúa, diagnostica y coordina el abordaje de cada paciente de forma integral.",
    category: "consultas-medicas",
    icon: "TbStethoscope",
    purpose:
      "Evaluar síntomas mamarios, interpretar estudios, definir conductas diagnósticas y terapéuticas, y coordinar el seguimiento junto con el equipo multidisciplinario.",
    procedure:
      "La consulta incluye una entrevista clínica, evaluación de antecedentes, examen físico mamario y análisis de estudios previos. El médico puede solicitar estudios complementarios si lo considera necesario.",
    preparation:
      "Es recomendable llevar estudios previos (mamografías, ecografías, biopsias) y la orden médica correspondiente.",
    duration: "[Duración según cada consulta]",
    faqs: [
      {
        question: "¿Cuándo debo consultar a un mastólogo?",
        answer:
          "Ante cualquier síntoma mamario, resultado anormal en un estudio o como parte de tu control periódico de salud mamaria.",
      },
    ],
    relatedProfessionals: ["dra-ejemplo-mastologa"],
    relatedEquipment: [],
    locations: ["imp", "city-bell"],
    appointmentType: "pathology",
    image: "/images/placeholder-mastologia.jpg",
  },
  {
    slug: "intervencionismo-mamario",
    name: "Intervencionismo mamario",
    shortDescription:
      "Procedimientos mínimamente invasivos guiados por imágenes para diagnóstico y tratamiento.",
    description:
      "El intervencionismo mamario incluye procedimientos mínimamente invasivos realizados bajo guía de imágenes (ecografía, mamografía o resonancia). Permite obtener muestras de tejido y realizar marcaciones con alta precisión.",
    category: "intervencionismo",
    icon: "TbTargetArrow",
    purpose:
      "Realizar biopsias percutáneas, marcaciones prequirúrgicas y otros procedimientos diagnósticos con la menor invasión posible.",
    procedure:
      "Los procedimientos se realizan con anestesia local y guía de imágenes. El tipo de procedimiento depende de las características de la lesión y la indicación médica.",
    preparation:
      "[Indicaciones específicas según el procedimiento – validar con el equipo médico]",
    duration: "[Duración variable según el procedimiento]",
    faqs: [
      {
        question: "¿Es necesaria una internación?",
        answer:
          "En general, los procedimientos intervencionistas mamarios son ambulatorios y no requieren internación.",
      },
      {
        question: "¿Cuánto tarda el resultado de la biopsia?",
        answer:
          "[Plazo a confirmar según el laboratorio de patología]",
      },
    ],
    relatedProfessionals: ["dra-ejemplo-mastologa"],
    relatedEquipment: ["mamografo-principal"],
    locations: ["imp"],
    appointmentType: "interventionism",
    image: "/images/placeholder-intervencionismo.jpg",
  },
  {
    slug: "biopsias",
    name: "Biopsias mamarias",
    shortDescription:
      "Obtención de muestras de tejido mamario para diagnóstico anatomopatológico.",
    description:
      "Las biopsias mamarias permiten obtener muestras de tejido para su análisis anatomopatológico. Se realizan con diferentes técnicas según las características de la lesión, siempre con guía de imágenes y anestesia local.",
    category: "intervencionismo",
    icon: "TbMicroscope",
    purpose:
      "Determinar la naturaleza de una lesión mamaria detectada en estudios de imágenes.",
    procedure:
      "Se realiza bajo anestesia local y guía ecográfica o mamográfica. Se obtiene una muestra de tejido que se envía al laboratorio de patología para su análisis.",
    preparation:
      "[Indicaciones específicas – validar con el equipo médico]",
    duration: "[Duración variable según el tipo de biopsia]",
    faqs: [
      {
        question: "¿Es dolorosa?",
        answer:
          "Se utiliza anestesia local para minimizar las molestias durante el procedimiento.",
      },
    ],
    relatedProfessionals: ["dra-ejemplo-mastologa"],
    relatedEquipment: ["mamografo-principal", "ecografo-principal"],
    locations: ["imp", "city-bell"],
    appointmentType: "interventionism",
    image: "/images/placeholder-biopsia.jpg",
  },
  {
    slug: "marcaciones",
    name: "Marcaciones prequirúrgicas",
    shortDescription:
      "Localización precisa de lesiones mamarias no palpables previo a la cirugía.",
    description:
      "Las marcaciones prequirúrgicas permiten localizar con precisión lesiones no palpables, guiando al cirujano durante la intervención. Se realizan con guía de imágenes y diferentes técnicas según cada caso.",
    category: "intervencionismo",
    icon: "TbMapPin",
    purpose:
      "Guiar al cirujano hacia la localización exacta de una lesión no palpable previamente detectada en estudios de imágenes.",
    procedure:
      "Se realiza con anestesia local y guía de imágenes (ecografía o mamografía). Se coloca un marcador que indica la ubicación exacta de la lesión.",
    preparation:
      "[Indicaciones específicas – validar con el equipo médico]",
    duration: "[Duración variable según la técnica utilizada]",
    faqs: [
      {
        question: "¿Cuándo se realiza la marcación?",
        answer:
          "Generalmente se realiza el mismo día o el día previo a la cirugía, según la indicación del equipo quirúrgico.",
      },
    ],
    relatedProfessionals: ["dra-ejemplo-mastologa"],
    relatedEquipment: ["mamografo-principal"],
    locations: ["imp"],
    appointmentType: "interventionism",
    image: "/images/placeholder-marcacion.jpg",
  },
  {
    slug: "oncologia-clinica",
    name: "Oncología clínica",
    shortDescription:
      "Evaluación y tratamiento oncológico especializado en patología mamaria.",
    description:
      "La oncología clínica se ocupa del tratamiento sistémico de las enfermedades oncológicas mamarias. Trabaja de forma coordinada con el equipo multidisciplinario para definir el plan terapéutico más adecuado para cada paciente.",
    category: "tratamientos",
    icon: "TbHeartbeat",
    purpose:
      "Definir y coordinar el tratamiento oncológico sistémico en el marco del abordaje integral de cada paciente.",
    procedure:
      "La consulta oncológica incluye evaluación clínica, análisis de estudios y definición del plan de tratamiento en conjunto con el equipo multidisciplinario.",
    preparation:
      "Es importante llevar todos los estudios realizados, informes de biopsias y antecedentes médicos relevantes.",
    duration: "[Duración según cada consulta]",
    faqs: [
      {
        question: "¿Cuándo debo consultar a un oncólogo?",
        answer:
          "Tu mastólogo o médico tratante te derivará al oncólogo cuando lo considere necesario dentro del plan de atención.",
      },
    ],
    relatedProfessionals: [],
    relatedEquipment: [],
    locations: ["imp", "city-bell"],
    appointmentType: "pathology",
    image: "/images/placeholder-oncologia.jpg",
  },
  {
    slug: "cirugia-mamaria",
    name: "Cirugía mamaria",
    shortDescription:
      "Abordaje quirúrgico de patologías mamarias con técnicas actualizadas.",
    description:
      "La cirugía mamaria comprende los procedimientos quirúrgicos indicados en el tratamiento de patologías mamarias. Se realiza con técnicas actualizadas y en coordinación con el equipo multidisciplinario.",
    category: "tratamientos",
    icon: "TbCut",
    purpose:
      "Realizar el tratamiento quirúrgico de lesiones mamarias según la indicación del equipo médico.",
    procedure:
      "El tipo de cirugía y la técnica dependen de cada caso. El equipo quirúrgico explica el procedimiento en detalle durante la consulta prequirúrgica.",
    preparation:
      "[Indicaciones prequirúrgicas específicas – validar con el equipo médico]",
    duration: "[Variable según el procedimiento]",
    faqs: [
      {
        question: "¿Cuánto dura la recuperación?",
        answer:
          "El tiempo de recuperación varía según el tipo de cirugía. El equipo quirúrgico te brindará las indicaciones postoperatorias correspondientes.",
      },
    ],
    relatedProfessionals: [],
    relatedEquipment: [],
    locations: ["imp"],
    appointmentType: "pathology",
    image: "/images/placeholder-cirugia.jpg",
  },
  {
    slug: "cirugia-plastica-reconstructiva",
    name: "Cirugía plástica y reconstructiva",
    shortDescription:
      "Reconstrucción mamaria y procedimientos plásticos vinculados al tratamiento oncológico.",
    description:
      "La cirugía plástica y reconstructiva mamaria forma parte del abordaje integral de las pacientes que requieren reconstrucción luego de una cirugía oncológica. Trabaja en coordinación con el equipo quirúrgico y oncológico.",
    category: "tratamientos",
    icon: "TbSparkles",
    purpose:
      "Restablecer la forma y simetría mamaria, contribuyendo a la recuperación integral de cada paciente.",
    procedure:
      "Las técnicas de reconstrucción se definen en conjunto con la paciente y el equipo quirúrgico, considerando cada situación clínica particular.",
    preparation:
      "[Indicaciones específicas – validar con el equipo médico]",
    duration: "[Variable según el procedimiento]",
    faqs: [
      {
        question: "¿Cuándo se puede realizar la reconstrucción?",
        answer:
          "Puede ser inmediata (durante la misma cirugía oncológica) o diferida. El equipo evaluará la mejor opción para cada caso.",
      },
    ],
    relatedProfessionals: [],
    relatedEquipment: [],
    locations: ["imp"],
    appointmentType: "pathology",
    image: "/images/placeholder-cirugia-plastica.jpg",
  },
  {
    slug: "asesoramiento-genetico",
    name: "Asesoramiento genético",
    shortDescription:
      "Evaluación del riesgo hereditario y orientación para pacientes con antecedentes familiares.",
    description:
      "El asesoramiento genético permite evaluar el riesgo de predisposición hereditaria a patologías mamarias. Incluye la evaluación de antecedentes familiares, orientación sobre estudios genéticos y recomendaciones de seguimiento personalizado.",
    category: "acompanamiento",
    icon: "TbDna",
    purpose:
      "Evaluar el riesgo hereditario y orientar a pacientes y familias sobre conductas preventivas y de seguimiento.",
    procedure:
      "Incluye una entrevista detallada sobre antecedentes personales y familiares, evaluación de riesgo y, cuando está indicado, derivación para estudios genéticos específicos.",
    preparation:
      "Es importante contar con la mayor información posible sobre antecedentes familiares de enfermedades oncológicas.",
    duration: "[Duración según cada consulta]",
    faqs: [
      {
        question: "¿Quién debería consultar?",
        answer:
          "Personas con antecedentes familiares significativos de cáncer de mama u ovario, o según la recomendación de su médico tratante.",
      },
    ],
    relatedProfessionals: [],
    relatedEquipment: [],
    locations: ["imp", "city-bell"],
    appointmentType: "pathology",
    image: "/images/placeholder-genetico.jpg",
  },
  {
    slug: "psicooncologia",
    name: "Psicooncología",
    shortDescription:
      "Acompañamiento emocional y psicológico durante el proceso diagnóstico y terapéutico.",
    description:
      "La psicooncología brinda acompañamiento emocional y psicológico a pacientes y familiares durante todas las etapas del proceso: desde el diagnóstico hasta el seguimiento posterior al tratamiento.",
    category: "acompanamiento",
    icon: "TbHeart",
    purpose:
      "Acompañar emocionalmente a las pacientes y sus familias, facilitando la adaptación y el bienestar durante el proceso.",
    procedure:
      "Se realizan consultas individuales o familiares, adaptadas a las necesidades de cada persona y cada momento del proceso.",
    preparation: "No se requiere preparación especial.",
    duration: "[Duración según cada consulta]",
    faqs: [
      {
        question: "¿Es solo para pacientes con diagnóstico oncológico?",
        answer:
          "No necesariamente. También puede ser útil para pacientes que atraviesan procedimientos diagnósticos o situaciones de incertidumbre.",
      },
    ],
    relatedProfessionals: [],
    relatedEquipment: [],
    locations: ["imp", "city-bell"],
    appointmentType: "pathology",
    image: "/images/placeholder-psicooncologia.jpg",
  },
];

export function getServiceBySlug(slug: string): Service | undefined {
  return services.find((s) => s.slug === slug);
}

export function getServicesByCategory(category: ServiceCategory): Service[] {
  return services.filter((s) => s.category === category);
}

export function getFeaturedServices(): Service[] {
  return services.filter((s) =>
    ["mamografia", "ecografia-mamaria", "mastologia", "intervencionismo-mamario", "oncologia-clinica", "cirugia-plastica-reconstructiva"].includes(s.slug)
  );
}
