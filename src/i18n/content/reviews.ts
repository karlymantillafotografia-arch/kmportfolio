import type { Locale } from "@/i18n/config";

type L = Record<Locale, string>;

export const reviewCopy: Record<string, { text: L }> = {
  r1: {
    text: {
      en: "We are looking to hire here soon. She is very responsive, excellent job.",
      es: "Pronto queremos contratarla. Responde muy rápido y su trabajo es excelente.",
    },
  },
  r2: {
    text: {
      en: "Amazing attention to detail and color work. She enhanced our campaign images beautifully while keeping them natural.",
      es: "Gran atención al detalle y al color. Mejoró las imágenes de nuestra campaña con belleza, manteniéndolas naturales.",
    },
  },
  r3: {
    text: {
      en: "Professional, responsive, and incredibly talented. Karly is our go-to retoucher for all client projects.",
      es: "Profesional, rápida y muy talentosa. Karly es nuestra retocadora de confianza para todos los proyectos.",
    },
  },
  r4: {
    text: {
      en: "Fast turnaround and flawless product retouching. Our e-commerce photos have never looked better.",
      es: "Entrega rápida y retoque de producto impecable. Nuestras fotos de tienda nunca se habían visto mejor.",
    },
  },
  r5: {
    text: {
      en: "She elevated our editorial series with a subtle, consistent grade. Communication was smooth from start to finish.",
      es: "Elevó nuestra serie editorial con una corrección de color sutil y constante. La comunicación fue fluida de inicio a fin.",
    },
  },
  r6: {
    text: {
      en: "Great eye for natural skin texture. Delivered exactly what our brand needed, on every single batch.",
      es: "Gran ojo para la textura natural de la piel. Entregó exactamente lo que la marca necesitaba en cada lote.",
    },
  },
};
