export interface Article {
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  category: ArticleCategory;
  date: string;
  image: string;
  author?: string;
}

export type ArticleCategory =
  | "prevencion"
  | "institucional"
  | "tecnologia"
  | "equipo"
  | "actividades"
  | "pacientes";

export const articleCategories: { value: ArticleCategory; label: string }[] = [
  { value: "prevencion", label: "Prevención" },
  { value: "institucional", label: "Institucional" },
  { value: "tecnologia", label: "Tecnología" },
  { value: "equipo", label: "Equipo médico" },
  { value: "actividades", label: "Actividades" },
  { value: "pacientes", label: "Información para pacientes" },
];

export const articles: Article[] = [
  {
    slug: "importancia-controles-periodicos",
    title: "La importancia de los controles periódicos en salud mamaria",
    excerpt:
      "Los controles regulares son fundamentales para la detección temprana. Conocé cuáles son los estudios recomendados y cada cuánto realizarlos.",
    content: `
Los controles periódicos de salud mamaria son una herramienta fundamental para la detección temprana de patologías. Realizar los estudios indicados por tu médico en los tiempos recomendados puede hacer una diferencia significativa en el diagnóstico y el tratamiento.

## ¿Cuáles son los controles habituales?

Los controles más frecuentes incluyen la mamografía y la ecografía mamaria. Tu médico puede indicar otros estudios según tus antecedentes y tu situación particular.

## ¿Cada cuánto debo realizarlos?

La frecuencia de los controles depende de varios factores: tu edad, tus antecedentes personales y familiares, y la evaluación de tu médico tratante. Consultá siempre con un profesional para definir el esquema de seguimiento adecuado para vos.

`,
    category: "prevencion",
    date: "2025-03-15",
    image: "/images/placeholder-articulo-prevencion.jpg",
  },
  {
    slug: "ucm-enfoque-integral",
    title: "UCM: un enfoque integral para el cuidado mamario",
    excerpt:
      "Conocé cómo UCM reúne a profesionales de diferentes especialidades para ofrecer un abordaje completo de la salud mamaria.",
    content: `
UCM – Unidad de Cuidado Mamario nace con el objetivo de reunir en un mismo equipo a profesionales de diferentes especialidades vinculadas a la salud mamaria.

## ¿Qué significa un enfoque integral?

Un enfoque integral implica que cada paciente es evaluada de manera completa, considerando no solo el diagnóstico y el tratamiento, sino también la prevención, el acompañamiento emocional y el seguimiento a largo plazo.

## ¿Cómo funciona el equipo?

El equipo de UCM trabaja de forma coordinada, compartiendo información y criterios para que cada decisión médica se tome en el marco de una visión multidisciplinaria.

`,
    category: "institucional",
    date: "2025-02-20",
    image: "/images/placeholder-articulo-institucional.jpg",
  },
  {
    slug: "tecnologia-diagnostico-mamario",
    title: "Tecnología al servicio del diagnóstico mamario",
    excerpt:
      "La tecnología médica avanza continuamente. Conocé cómo el equipamiento de UCM contribuye a un diagnóstico más preciso.",
    content: `
El diagnóstico por imágenes mamarias ha evolucionado significativamente en los últimos años. Los avances tecnológicos permiten obtener imágenes de mayor calidad, con menor dosis de radiación y mayor capacidad de detección.

## Equipamiento especializado

UCM cuenta con equipamiento de última generación para la realización de mamografías, ecografías y procedimientos intervencionistas.

## Beneficios para las pacientes

La tecnología actualizada permite estudios más precisos, más cómodos y con resultados más confiables.

`,
    category: "tecnologia",
    date: "2025-01-10",
    image: "/images/placeholder-articulo-tecnologia.jpg",
  },
];

export function getArticleBySlug(slug: string): Article | undefined {
  return articles.find((a) => a.slug === slug);
}

export function getRecentArticles(count: number = 3): Article[] {
  return [...articles]
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
    .slice(0, count);
}
