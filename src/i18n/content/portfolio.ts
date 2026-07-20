import type { Locale } from "@/i18n/config";

type L = Record<Locale, string>;

type ProjectCopy = {
  title?: L;
  category?: L;
  imageAlt?: L;
  description?: L;
  retouching?: L;
  deliverables?: L;
};

type PortfolioCopy = {
  title: L;
  pageTitle: L;
  description: L;
  imageAlt: L;
  featured: {
    title: L;
    description: L;
    imageAlt: L;
    category: L;
    retouching: L;
    deliverables: L;
    galleryAlts?: L[];
  };
  projects?: Record<string, ProjectCopy>;
  cta: { title: L; body: L };
};

const webPrintSocial: L = {
  en: "Web, Print, Social",
  es: "Web, impresión, redes",
};

export const portfolioCopy: Record<string, PortfolioCopy> = {
  "portrait-retouching": {
    title: { en: "Portrait Retouching", es: "Retoque de retrato" },
    pageTitle: {
      en: "Portrait Retouching Portfolio",
      es: "Portafolio de retoque de retrato",
    },
    description: {
      en: "Natural skin refinement, frequency separation, and polished portrait finishes for beauty and personal branding.",
      es: "Piel natural, separación de frecuencias y acabados de retrato para belleza y marca personal.",
    },
    imageAlt: {
      en: "Portrait retouching sample",
      es: "Muestra de retoque de retrato",
    },
    featured: {
      title: {
        en: "Editorial Beauty Portrait",
        es: "Retrato de belleza editorial",
      },
      description: {
        en: "Soft skin work with preserved texture, refined eyes, and balanced color for a clean beauty finish.",
        es: "Piel suave con textura, ojos refinados y color equilibrado para un acabado de belleza limpio.",
      },
      imageAlt: {
        en: "Featured beauty portrait",
        es: "Retrato de belleza destacado",
      },
      category: { en: "Beauty / Portrait", es: "Belleza / Retrato" },
      retouching: {
        en: "Skin texture, dodge & burn, color",
        es: "Textura, dodge & burn, color",
      },
      deliverables: webPrintSocial,
    },
    projects: {
      p1: { title: { en: "Soft Glow Session", es: "Sesión de brillo suave" } },
      p2: { title: { en: "Natural Headshot", es: "Retrato corporativo natural" } },
      p3: { title: { en: "Studio Close-up", es: "Primer plano de estudio" } },
      p4: { title: { en: "Warm Tone Portrait", es: "Retrato tono cálido" } },
      p5: { title: { en: "Clean Skin Finish", es: "Acabado de piel limpia" } },
      p6: { title: { en: "Profile Study", es: "Estudio de perfil" } },
      p7: {
        title: { en: "Golden Hour Portrait", es: "Retrato en hora dorada" },
      },
      p8: { title: { en: "Minimal Beauty", es: "Belleza minimalista" } },
    },
    cta: {
      title: {
        en: "Let's refine your next portraits.",
        es: "Refinemos tus próximos retratos.",
      },
      body: {
        en: "Premium retouching that keeps skin natural and results delivery-ready.",
        es: "Retoque premium que cuida la piel natural y entrega lista para usar.",
      },
    },
  },
  "fashion-editorial": {
    title: { en: "Fashion & Editorial", es: "Moda y editorial" },
    pageTitle: {
      en: "Fashion & Editorial Portfolio",
      es: "Portafolio de moda y editorial",
    },
    description: {
      en: "Campaign-ready fashion finishing with garment cleanup, consistent color, and editorial polish.",
      es: "Acabado de moda listo para campaña: prendas, color consistente y pulido editorial.",
    },
    imageAlt: {
      en: "Fashion editorial sample",
      es: "Muestra de moda editorial",
    },
    featured: {
      title: { en: "Summer Lookbook Edit", es: "Edición de lookbook de verano" },
      description: {
        en: "Clean garment work and cohesive grading across a bright seasonal lookbook set.",
        es: "Prendas limpias y corrección de color cohesiva en un lookbook de temporada.",
      },
      imageAlt: {
        en: "Featured fashion lookbook",
        es: "Lookbook de moda destacado",
      },
      category: { en: "Fashion / Editorial", es: "Moda / Editorial" },
      retouching: {
        en: "Garment, skin, color grade",
        es: "Prenda, piel, corrección de color",
      },
      deliverables: webPrintSocial,
    },
    projects: {
      f1: { title: { en: "Street Style Set", es: "Serie de estilo urbano" } },
      f2: { title: { en: "Runway Finish", es: "Acabado de pasarela" } },
      f3: { title: { en: "Studio Campaign", es: "Campaña de estudio" } },
      f4: { title: { en: "Accessories Edit", es: "Edición de accesorios" } },
      f5: { title: { en: "Color Story", es: "Historia de color" } },
      f6: { title: { en: "Night Look", es: "Estilo nocturno" } },
      f7: { title: { en: "Boutique Editorial", es: "Editorial boutique" } },
      f8: { title: { en: "Wardrobe Story", es: "Historia de guardarropa" } },
    },
    cta: {
      title: {
        en: "Let's elevate your next campaign.",
        es: "Elevemos tu próxima campaña.",
      },
      body: {
        en: "Editorial retouching with clean detail and consistent fashion polish.",
        es: "Retoque editorial con detalle limpio y pulido de moda consistente.",
      },
    },
  },
  "product-ecommerce": {
    title: { en: "Product & E-commerce", es: "Producto y comercio electrónico" },
    pageTitle: {
      en: "Product & E-commerce Portfolio",
      es: "Portafolio de producto y comercio electrónico",
    },
    description: {
      en: "Clean catalog imagery with accurate color, soft shadows, and storefront-ready consistency.",
      es: "Catálogo limpio con color fiel, sombras suaves y consistencia lista para tienda.",
    },
    imageAlt: {
      en: "Product retouching sample",
      es: "Muestra de retoque de producto",
    },
    featured: {
      title: {
        en: "Sérénité Eau de Parfum",
        es: "Sérénité Eau de Parfum",
      },
      description: {
        en: "True-to-product color, soft reflections, and a clean commercial finish for luxury packaging.",
        es: "Color fiel, reflejos suaves y acabado comercial limpio para empaque de lujo.",
      },
      imageAlt: {
        en: "Featured perfume product",
        es: "Producto de perfume destacado",
      },
      category: { en: "Product / Beauty", es: "Producto / Belleza" },
      retouching: {
        en: "Color match, cleanup, shadows",
        es: "Color, limpieza, sombras",
      },
      deliverables: webPrintSocial,
    },
    projects: {
      pr1: { title: { en: "Luma Skincare", es: "Luma Skincare" } },
      pr2: { title: { en: "Aura Cleanser", es: "Aura Cleanser" } },
      pr3: { title: { en: "Noir Watch", es: "Reloj Noir" } },
      pr4: { title: { en: "Velvet Bag", es: "Bolso de terciopelo" } },
      pr5: { title: { en: "Soft Foundation", es: "Base suave" } },
      pr6: { title: { en: "Amber Candle", es: "Vela ámbar" } },
      pr7: { title: { en: "Retro Camera", es: "Cámara retro" } },
      pr8: { title: { en: "Solar Shades", es: "Gafas solares" } },
    },
    cta: {
      title: {
        en: "Let's make your products stand out.",
        es: "Hagamos que tus productos destaquen.",
      },
      body: {
        en: "Premium retouching that elevates your brand and drives results.",
        es: "Retoque premium que eleva tu marca e impulsa resultados.",
      },
    },
  },
  "smile-profile": {
    title: {
      en: "Smile & Profile Enhancement",
      es: "Mejora de sonrisa y perfil",
    },
    pageTitle: {
      en: "Smile & Profile Portfolio",
      es: "Portafolio de sonrisa y perfil",
    },
    description: {
      en: "Subtle smile and profile refinement that stays natural, flattering, and true to the person.",
      es: "Mejora sutil de sonrisa y perfil, natural, favorecedora y fiel a la persona.",
    },
    imageAlt: {
      en: "Smile enhancement sample",
      es: "Muestra de mejora de sonrisa",
    },
    featured: {
      title: { en: "Natural Smile Refine", es: "Refinado de sonrisa natural" },
      description: {
        en: "Gentle whitening and lip balance for a confident, still-natural smile.",
        es: "Blanqueado suave y balance de labios para una sonrisa natural y segura.",
      },
      imageAlt: {
        en: "Featured smile enhancement",
        es: "Mejora de sonrisa destacada",
      },
      category: { en: "Smile / Portrait", es: "Sonrisa / Retrato" },
      retouching: {
        en: "Teeth, lips, soft contour",
        es: "Dientes, labios, contorno suave",
      },
      deliverables: webPrintSocial,
    },
    projects: {
      s1: { title: { en: "Bright Smile", es: "Sonrisa brillante" } },
      s2: { title: { en: "Soft Profile", es: "Perfil suave" } },
      s3: { title: { en: "Confidence Edit", es: "Edición de confianza" } },
      s4: { title: { en: "Clean Headshot", es: "Retrato corporativo limpio" } },
      s5: { title: { en: "Warm Expression", es: "Expresión cálida" } },
      s6: { title: { en: "Detail Refine", es: "Refinado de detalle" } },
      s7: { title: { en: "Genuine Smile", es: "Sonrisa genuina" } },
      s8: { title: { en: "Calm Confidence", es: "Confianza serena" } },
    },
    cta: {
      title: {
        en: "Let's enhance with care.",
        es: "Mejoremos con cuidado.",
      },
      body: {
        en: "Subtle smile and profile work that stays natural and true to you.",
        es: "Trabajo sutil de sonrisa y perfil, natural y fiel a ti.",
      },
    },
  },
  "real-estate": {
    title: { en: "Real Estate", es: "Bienes raíces" },
    pageTitle: {
      en: "Real Estate Portfolio",
      es: "Portafolio inmobiliario",
    },
    description: {
      en: "Bright listing imagery with balanced exposure, clean skies, and true-to-space color.",
      es: "Anuncios claros con exposición equilibrada, cielos limpios y color fiel al espacio.",
    },
    imageAlt: {
      en: "Real estate editing sample",
      es: "Muestra de edición inmobiliaria",
    },
    featured: {
      title: {
        en: "Coastal Villa Listing",
        es: "Anuncio de villa costera",
      },
      description: {
        en: "HDR balance, window pulls, and inviting color for a premium coastal listing.",
        es: "HDR, recuperación de vistas en ventanas y color atractivo para un anuncio costero premium.",
      },
      imageAlt: {
        en: "Featured real estate interior",
        es: "Interior inmobiliario destacado",
      },
      category: { en: "Real Estate", es: "Bienes raíces" },
      retouching: {
        en: "HDR, windows, sky, cleanup",
        es: "HDR, ventanas, cielo, limpieza",
      },
      deliverables: webPrintSocial,
    },
    projects: {
      re1: { title: { en: "Modern Loft", es: "Loft moderno" } },
      re2: { title: { en: "Dusk Exterior", es: "Exterior al atardecer" } },
      re3: { title: { en: "Bright Kitchen", es: "Cocina luminosa" } },
    },
    cta: {
      title: {
        en: "Let's make your listings shine.",
        es: "Hagamos brillar tus anuncios.",
      },
      body: {
        en: "Clean, natural property retouching that gets buyers through the door.",
        es: "Retoque inmobiliario limpio y natural que atrae compradores.",
      },
    },
  },
};
