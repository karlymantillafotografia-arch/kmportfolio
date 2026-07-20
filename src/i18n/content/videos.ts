import type { Locale } from "@/i18n/config";

type L = Record<Locale, string>;

export const videoCopy: Record<string, { title: L; description: L }> = {
  "skin-retouching": {
    title: {
      en: "Advanced Skin Retouch in Photoshop",
      es: "Retoque de piel avanzado en Photoshop",
    },
    description: {
      en: "Advanced skin retouching walkthrough in under 4 minutes.",
      es: "Retoque de piel avanzado explicado en menos de 4 minutos.",
    },
  },
  "product-workflow": {
    title: {
      en: "Product Editing Workflow",
      es: "Flujo de edición de producto",
    },
    description: {
      en: "How to keep e-commerce sets clean and consistent.",
      es: "Cómo mantener series de producto limpias y consistentes.",
    },
  },
  "frequency-separation": {
    title: {
      en: "Frequency Separation Tips",
      es: "Consejos de separación de frecuencias",
    },
    description: {
      en: "Practical technique notes for smoother, natural results.",
      es: "Notas prácticas para resultados suaves y naturales.",
    },
  },
  "color-grading": {
    title: {
      en: "Color Grading Essentials",
      es: "Fundamentos de corrección de color",
    },
    description: {
      en: "Core grading steps for a cohesive visual look.",
      es: "Pasos clave de color para un aspecto visual cohesivo.",
    },
  },
  "beauty-cleanup": {
    title: {
      en: "Clean Beauty Retouching Basics",
      es: "Bases del retoque de belleza limpio",
    },
    description: {
      en: "Clean beauty cleanup with natural skin texture.",
      es: "Limpieza de belleza con textura de piel natural.",
    },
  },
  "batch-lightroom": {
    title: {
      en: "Batch Editing in Lightroom",
      es: "Edición por lotes en Lightroom",
    },
    description: {
      en: "Speed up large sets without losing consistency.",
      es: "Acelera lotes grandes sin perder consistencia.",
    },
  },
};
