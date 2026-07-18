export type BeforeAfterItem = {
  id: string;
  title: string;
  before: string;
  after: string;
  beforeAlt: string;
  afterAlt: string;
  edits: string[];
  /** Encabezado del globo de ediciones; si falta se usa el genérico. */
  editsHeading?: string;
};

// Lista estándar de ediciones; personalízala por imagen reemplazando
// `edits: standardEdits` con una lista propia en cada elemento.
const standardEdits = [
  "Corrección de color y balance de blancos",
  "Retoque de piel manteniendo la textura natural",
  "Eliminación de manchas e imperfecciones temporales",
  "Suavizado de ojeras y líneas de expresión",
  "Ajuste de luces y sombras con dodge & burn",
  "Mejora del brillo y definición de los ojos",
  "Corrección del tono de labios y dientes",
  "Eliminación de cabellos sueltos",
  "Limpieza y uniformidad del fondo",
  "Ajuste de contraste, saturación y exposición",
  "Corrección de arrugas en la ropa",
  "Recorte y composición final",
  "Enfoque selectivo en el rostro",
  "Preparación y exportación para web y redes sociales",
];

export const beforeAfterItems: BeforeAfterItem[] = [
  {
    id: "portrait-1",
    title: "Portrait polish",
    before:
      "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=900&q=80",
    after:
      "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=900&q=80",
    beforeAlt: "Portrait before retouching",
    afterAlt: "Portrait after retouching",
    edits: standardEdits,
  },
  {
    id: "smile-1",
    title: "Smile enhancement",
    before:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=900&q=80",
    after:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=900&q=80",
    beforeAlt: "Smile before enhancement",
    afterAlt: "Smile after enhancement",
    editsHeading: "Mejora de sonrisa",
    edits: [
      "Blanqueamiento dental",
      "Alineación sutil",
      "Corrección de labios",
      "Acabado natural",
    ],
  },
  {
    id: "fashion-1",
    title: "Fashion cleanup",
    before:
      "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?auto=format&fit=crop&w=900&q=80",
    after:
      "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=900&q=80",
    beforeAlt: "Fashion before retouching",
    afterAlt: "Fashion after retouching",
    edits: standardEdits,
  },
  {
    id: "product-1",
    title: "Product refine",
    before:
      "https://images.unsplash.com/photo-1572635196237-14b3f281503f?auto=format&fit=crop&w=900&q=80",
    after:
      "https://images.unsplash.com/photo-1560343090-f0409e92791a?auto=format&fit=crop&w=900&q=80",
    beforeAlt: "Product before editing",
    afterAlt: "Product after editing",
    edits: standardEdits,
  },
  {
    id: "editorial-1",
    title: "Editorial tone",
    before:
      "https://images.unsplash.com/photo-1483985988355-763728e1935b?auto=format&fit=crop&w=900&q=80",
    after:
      "https://images.unsplash.com/photo-1509631179647-0177331693ae?auto=format&fit=crop&w=900&q=80",
    beforeAlt: "Editorial before color grading",
    afterAlt: "Editorial after color grading",
    edits: standardEdits,
  },
  {
    id: "beauty-1",
    title: "Beauty glow",
    before:
      "https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?auto=format&fit=crop&w=900&q=80",
    after:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=900&q=80",
    beforeAlt: "Beauty portrait before glow retouch",
    afterAlt: "Beauty portrait after glow retouch",
    edits: standardEdits,
  },
];
