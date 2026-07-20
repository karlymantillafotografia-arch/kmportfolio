import type { Locale } from "@/i18n/config";

type L = Record<Locale, string>;

export const standardEdits: L[] = [
  {
    en: "Color correction and white balance",
    es: "Corrección de color y balance de blancos",
  },
  {
    en: "Skin retouching with natural texture kept",
    es: "Retoque de piel manteniendo la textura natural",
  },
  {
    en: "Temporary blemish and spot removal",
    es: "Eliminación de manchas e imperfecciones temporales",
  },
  {
    en: "Softening under-eyes and expression lines",
    es: "Suavizado de ojeras y líneas de expresión",
  },
  {
    en: "Light and shadow shaping with dodge & burn",
    es: "Ajuste de luces y sombras con dodge and burn",
  },
  {
    en: "Eye brightness and definition boost",
    es: "Mejora del brillo y la definición de los ojos",
  },
  {
    en: "Lip tone and teeth refinement",
    es: "Corrección del tono de labios y dientes",
  },
  {
    en: "Stray hair cleanup",
    es: "Eliminación de cabellos sueltos",
  },
  {
    en: "Background cleanup and evening",
    es: "Limpieza y uniformidad del fondo",
  },
  {
    en: "Contrast, saturation and exposure tweak",
    es: "Ajuste de contraste, saturación y exposición",
  },
  {
    en: "Clothing wrinkle correction",
    es: "Corrección de arrugas en la ropa",
  },
  {
    en: "Final crop and composition",
    es: "Recorte y composición final",
  },
  {
    en: "Selective facial sharpening",
    es: "Enfoque selectivo en el rostro",
  },
  {
    en: "Export prep for web and social",
    es: "Preparación y exportación para web y redes sociales",
  },
];

export const beforeAfterCopy: Record<
  string,
  {
    title: L;
    beforeAlt: L;
    afterAlt: L;
    editsHeading?: L;
    edits?: L[];
  }
> = {
  "portrait-1": {
    title: { en: "Portrait polish", es: "Pulido de retrato" },
    beforeAlt: {
      en: "Portrait before retouching",
      es: "Retrato antes del retoque",
    },
    afterAlt: {
      en: "Portrait after retouching",
      es: "Retrato después del retoque",
    },
  },
  "smile-1": {
    title: { en: "Smile enhancement", es: "Mejora de sonrisa" },
    beforeAlt: {
      en: "Smile before enhancement",
      es: "Sonrisa antes de la mejora",
    },
    afterAlt: {
      en: "Smile after enhancement",
      es: "Sonrisa después de la mejora",
    },
    editsHeading: { en: "Smile enhancement", es: "Mejora de sonrisa" },
    edits: [
      { en: "Teeth whitening", es: "Blanqueamiento dental" },
      { en: "Subtle alignment", es: "Alineación sutil" },
      { en: "Lip correction", es: "Corrección de labios" },
      { en: "Natural finish", es: "Acabado natural" },
    ],
  },
  "fashion-1": {
    title: { en: "Fashion cleanup", es: "Limpieza de moda" },
    beforeAlt: {
      en: "Fashion before retouching",
      es: "Foto de moda antes del retoque",
    },
    afterAlt: {
      en: "Fashion after retouching",
      es: "Foto de moda después del retoque",
    },
  },
  "product-1": {
    title: { en: "Product refine", es: "Refinado de producto" },
    beforeAlt: {
      en: "Product before editing",
      es: "Producto antes de la edición",
    },
    afterAlt: {
      en: "Product after editing",
      es: "Producto después de la edición",
    },
  },
  "editorial-1": {
    title: { en: "Editorial tone", es: "Tono editorial" },
    beforeAlt: {
      en: "Editorial before color grading",
      es: "Editorial antes de la corrección de color",
    },
    afterAlt: {
      en: "Editorial after color grading",
      es: "Editorial después de la corrección de color",
    },
  },
  "beauty-1": {
    title: { en: "Beauty glow", es: "Brillo de belleza" },
    beforeAlt: {
      en: "Beauty portrait before glow retouch",
      es: "Retrato de belleza antes del retoque",
    },
    afterAlt: {
      en: "Beauty portrait after glow retouch",
      es: "Retrato de belleza después del retoque",
    },
  },
};
