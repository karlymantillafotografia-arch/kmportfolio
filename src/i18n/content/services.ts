import type { Locale } from "@/i18n/config";

type L = Record<Locale, string>;

type ServiceCopy = {
  title: L;
  shortTitle?: L;
  description: L;
  details: L;
  includes: L[];
  process: L[];
};

export const serviceCopy: Record<string, ServiceCopy> = {
  portrait: {
    title: { en: "Portrait Retouching", es: "Retoque de retrato" },
    description: {
      en: "Natural skin work and refined portrait finishing.",
      es: "Piel natural y acabado refinado de retrato.",
    },
    details: {
      en: "High-end portrait finishing that keeps skin looking like skin. Every image is retouched by hand with non-destructive techniques, preserving natural texture while refining tone, light, and detail for a polished, editorial-quality result.",
      es: "Acabado premium de retrato que mantiene la piel real. Cada imagen se retoca a mano con técnicas no destructivas, cuidando textura, tono, luz y detalle para un resultado editorial pulido.",
    },
    includes: [
      {
        en: "Skin retouching with preserved natural texture",
        es: "Retoque de piel con textura natural intacta",
      },
      {
        en: "Blemish and stray-hair removal",
        es: "Eliminación de manchas y pelos sueltos",
      },
      {
        en: "Dodge & burn for dimension and light shaping",
        es: "Dodge & burn para volumen y modelado de luz",
      },
      {
        en: "Eye, lip, and teeth enhancement",
        es: "Mejora de ojos, labios y dientes",
      },
      {
        en: "Color correction and white balance",
        es: "Corrección de color y balance de blancos",
      },
      {
        en: "Background cleanup and final crop",
        es: "Limpieza de fondo y recorte final",
      },
    ],
    process: [
      {
        en: "You send your selects and reference looks",
        es: "Envías tus fotos seleccionadas y referencias de estilo",
      },
      {
        en: "I retouch a sample image for your approval",
        es: "Retoco una muestra para tu aprobación",
      },
      {
        en: "Full set is finished with the approved style",
        es: "La serie completa se edita con ese estilo",
      },
      {
        en: "Delivery in high-res, ready for print and web",
        es: "Entrega en alta resolución, lista para impresión y web",
      },
    ],
  },
  fashion: {
    title: { en: "Fashion & Editorial", es: "Moda y editorial" },
    description: {
      en: "Editorial polish for campaigns and lookbooks.",
      es: "Pulido editorial para campañas y lookbooks.",
    },
    details: {
      en: "Campaign-ready finishing for fashion imagery. From lookbooks to magazine editorials, I refine garments, skin, and color so every frame holds a consistent visual language across the full set.",
      es: "Acabado listo para campaña en moda. De lookbooks a editoriales, refino prendas, piel y color para un lenguaje visual coherente en toda la serie.",
    },
    includes: [
      {
        en: "Garment cleanup: wrinkles, lint, and shape refinement",
        es: "Limpieza de prenda: arrugas, pelusa y forma",
      },
      { en: "High-end skin retouching", es: "Retoque de piel de alto nivel" },
      {
        en: "Consistent color grading across the series",
        es: "Corrección de color consistente en la serie",
      },
      {
        en: "Set and background refinement",
        es: "Refinado de escenario y fondo",
      },
      {
        en: "Compositing and small object removal",
        es: "Composición y eliminación de objetos pequeños",
      },
      {
        en: "Delivery in print and web formats",
        es: "Entrega en formatos de impresión y web",
      },
    ],
    process: [
      {
        en: "We define the visual direction of the campaign",
        es: "Definimos la dirección visual de la campaña",
      },
      {
        en: "Test edit on a key frame to lock the look",
        es: "Edición de prueba en un fotograma clave",
      },
      {
        en: "Full editorial is retouched with that language",
        es: "El editorial completo se retoca con ese estilo",
      },
      {
        en: "Final review round and delivery per your specs",
        es: "Revisión final y entrega según tus especificaciones",
      },
    ],
  },
  product: {
    title: { en: "Product & E-commerce", es: "Producto y comercio electrónico" },
    shortTitle: { en: "Product Editing", es: "Edición de producto" },
    description: {
      en: "Consistent product imagery for online stores.",
      es: "Imágenes de producto consistentes para tiendas en línea.",
    },
    details: {
      en: "Clean, consistent product imagery that converts. I standardize lighting, color, and framing across your entire catalog so products look accurate, professional, and cohesive in any storefront.",
      es: "Imágenes de producto limpias que convierten. Estandarizo luz, color y encuadre en todo el catálogo para un aspecto preciso, profesional y cohesivo.",
    },
    includes: [
      {
        en: "Background removal or pure-white backdrops",
        es: "Recorte de fondo o fondos blanco puro",
      },
      {
        en: "Accurate color matching to the real product",
        es: "Color fiel al producto real",
      },
      {
        en: "Dust, scratch, and reflection cleanup",
        es: "Limpieza de polvo, rayas y reflejos",
      },
      {
        en: "Shadow creation for natural grounding",
        es: "Sombras para anclar el producto",
      },
      {
        en: "Alignment and crop consistency across the catalog",
        es: "Alineación y recorte consistentes en el catálogo",
      },
      {
        en: "Marketplace-ready export (Amazon, Shopify, etc.)",
        es: "Exportación lista para marketplaces (Amazon, Shopify)",
      },
    ],
    process: [
      {
        en: "You share your catalog and platform requirements",
        es: "Compartes catálogo y requisitos de plataforma",
      },
      {
        en: "I build a style guide from a sample batch",
        es: "Creo una guía de estilo con un lote de muestra",
      },
      {
        en: "The full catalog is edited to that standard",
        es: "El catálogo completo se edita a ese estándar",
      },
      {
        en: "Files delivered named and organized by SKU",
        es: "Archivos entregados y ordenados por SKU",
      },
    ],
  },
  ai: {
    title: { en: "AI Image Enhancement", es: "Mejora de imagen con IA" },
    description: {
      en: "Smart cleanup paired with careful manual finishing.",
      es: "Limpieza inteligente con acabado manual cuidadoso.",
    },
    details: {
      en: "The speed of AI with the judgment of a professional retoucher. I use AI tools for upscaling, noise reduction, and cleanup, then finish every image by hand so results never look artificial.",
      es: "La velocidad de la IA con criterio profesional. Uso IA para ampliación, ruido y limpieza, y termino a mano para que nada se vea artificial.",
    },
    includes: [
      {
        en: "AI upscaling for low-resolution images",
        es: "Ampliación con IA para baja resolución",
      },
      {
        en: "Noise reduction and detail recovery",
        es: "Reducción de ruido y recuperación de detalle",
      },
      {
        en: "Smart object and distraction removal",
        es: "Eliminación inteligente de objetos y distracciones",
      },
      {
        en: "Generative fill reviewed and refined manually",
        es: "Relleno generativo revisado y refinado a mano",
      },
      {
        en: "Old or damaged photo restoration",
        es: "Restauración de fotos viejas o dañadas",
      },
      {
        en: "Final manual pass for a natural finish",
        es: "Pase manual final para un acabado natural",
      },
    ],
    process: [
      {
        en: "We review your images and define what AI can solve",
        es: "Revisamos imágenes y qué puede resolver la IA",
      },
      {
        en: "AI enhancement is applied with the right tools",
        es: "Se aplica la mejora con IA usando las herramientas correctas",
      },
      {
        en: "Every result is checked and refined by hand",
        es: "Cada resultado se revisa y refina a mano",
      },
      {
        en: "You receive natural-looking, high-quality files",
        es: "Recibes archivos naturales y de alta calidad",
      },
    ],
  },
  batch: {
    title: { en: "Batch Editing", es: "Edición por lotes" },
    description: {
      en: "Efficient volume editing with consistent quality.",
      es: "Edición en volumen con calidad consistente.",
    },
    details: {
      en: "Reliable volume editing for photographers and brands with large sets. Whether it is a wedding, an event, or a seasonal catalog, every image gets the same consistent look with fast turnaround.",
      es: "Edición fiable en volumen para fotógrafos y marcas. Boda, evento o catálogo: mismo estilo consistente y entrega ágil.",
    },
    includes: [
      {
        en: "Color correction and exposure balancing at scale",
        es: "Color y exposición balanceados a escala",
      },
      {
        en: "Consistent style applied across the full set",
        es: "Estilo consistente en toda la serie",
      },
      {
        en: "Culling support and selection guidance",
        es: "Apoyo en la selección de fotos",
      },
      {
        en: "Custom presets built for your workflow",
        es: "Presets a medida para tu flujo",
      },
      {
        en: "Fast, agreed-upon turnaround times",
        es: "Tiempos de entrega acordados y ágiles",
      },
      {
        en: "Organized delivery, named and sorted",
        es: "Entrega organizada, nombrada y ordenada",
      },
    ],
    process: [
      {
        en: "You send the full set with your style references",
        es: "Envías la serie completa con referencias",
      },
      {
        en: "A sample batch defines the editing standard",
        es: "Un lote de muestra define el estándar",
      },
      {
        en: "The set is edited in volume with quality control",
        es: "La serie se edita en volumen con control de calidad",
      },
      {
        en: "On-time delivery, sorted and ready to publish",
        es: "Entrega a tiempo, ordenada y lista para publicar",
      },
    ],
  },
  consulting: {
    title: { en: "Personalized Consulting", es: "Consultoría personalizada" },
    description: {
      en: "Mentorship to sharpen skills and grow your business.",
      es: "Mentoría para pulir habilidades y crecer tu negocio.",
    },
    details: {
      en: "One-on-one sessions tailored to where you are now and where you want to go. We review your work together, refine your editing workflow, and build a plan to grow your skills or your photography business.",
      es: "Sesiones uno a uno según tu punto actual y tu meta. Revisamos tu trabajo, afinamos el flujo de edición y armamos un plan para crecer.",
    },
    includes: [
      {
        en: "Portfolio review with actionable feedback",
        es: "Revisión de portafolio con comentarios accionables",
      },
      {
        en: "Live retouching sessions on your own images",
        es: "Sesiones en vivo de retoque en tus imágenes",
      },
      {
        en: "Workflow and software guidance (Photoshop, Lightroom)",
        es: "Guía de flujo y software (Photoshop, Lightroom)",
      },
      {
        en: "Pricing and client-communication strategy",
        es: "Estrategia de precios y comunicación",
      },
      {
        en: "Personalized learning roadmap",
        es: "Hoja de ruta de aprendizaje personal",
      },
      {
        en: "Session recording so you can rewatch anytime",
        es: "Grabación de la sesión para volver a verla cuando quieras",
      },
    ],
    process: [
      {
        en: "Short intake call to understand your goals",
        es: "Llamada breve para entender tus metas",
      },
      {
        en: "We build a personalized session plan",
        es: "Armamos un plan de sesión personalizado",
      },
      {
        en: "Live one-on-one sessions with real projects",
        es: "Sesiones uno a uno con proyectos reales",
      },
      {
        en: "Follow-up materials and recording included",
        es: "Material de seguimiento y grabación incluidos",
      },
    ],
  },
  restoration: {
    title: { en: "Photo Restoration", es: "Restauración de fotos" },
    description: {
      en: "Bring damaged or faded photos back to life.",
      es: "Devuelve vida a fotos dañadas o desvanecidas.",
    },
    details: {
      en: "Careful restoration of old, damaged, or faded photographs. Tears, stains, scratches, and color loss are repaired by hand, preserving the character of the original image while making it ready to print and share again.",
      es: "Restauración cuidadosa de fotos viejas o dañadas. Rasgaduras, manchas y color se reparan a mano, cuidando el carácter original y dejándolas listas para imprimir.",
    },
    includes: [
      {
        en: "Repair of tears, scratches, and stains",
        es: "Reparación de rasgaduras, rayas y manchas",
      },
      {
        en: "Reconstruction of missing areas",
        es: "Reconstrucción de áreas faltantes",
      },
      {
        en: "Fading and color-cast correction",
        es: "Corrección de decoloración y tintes",
      },
      {
        en: "Optional colorization of black-and-white photos",
        es: "Colorización opcional de fotos en blanco y negro",
      },
      {
        en: "Noise cleanup and detail sharpening",
        es: "Limpieza de ruido y enfoque de detalle",
      },
      {
        en: "High-resolution file ready to reprint",
        es: "Archivo en alta resolución listo para reimprimir",
      },
    ],
    process: [
      {
        en: "You send a scan or photo of the original",
        es: "Envías un escaneo o foto del original",
      },
      {
        en: "I assess the damage and confirm the scope",
        es: "Evalúo el daño y confirmo el alcance",
      },
      {
        en: "The image is restored with regular previews",
        es: "Se restaura con vistas previas regulares",
      },
      {
        en: "You receive the restored file in high resolution",
        es: "Recibes el archivo restaurado en alta resolución",
      },
    ],
  },
  realestate: {
    title: { en: "Real Estate Editing", es: "Edición inmobiliaria" },
    description: {
      en: "Bright, inviting property images that sell.",
      es: "Imágenes de propiedades luminosas e invitadoras que venden.",
    },
    details: {
      en: "Property photography editing that makes listings stand out. From window pulls and sky replacements to HDR blending, every room is delivered bright, true to color, and ready to attract buyers.",
      es: "Edición inmobiliaria que destaca los anuncios. De recuperación de vistas en ventanas y cielos a fusión HDR: cada espacio sale claro, fiel al color y listo para atraer compradores.",
    },
    includes: [
      {
        en: "HDR blending and exposure balancing",
        es: "Fusión HDR y balance de exposición",
      },
      {
        en: "Window pulls with natural outside views",
        es: "Recuperación de vistas en ventanas con exteriores naturales",
      },
      {
        en: "Sky replacement and lawn enhancement",
        es: "Cambio de cielo y mejora de césped",
      },
      {
        en: "Vertical and lens-distortion correction",
        es: "Corrección vertical y de distorsión",
      },
      {
        en: "Object and clutter removal",
        es: "Eliminación de objetos y desorden",
      },
      {
        en: "Day-to-dusk conversions",
        es: "Conversiones de día a atardecer",
      },
    ],
    process: [
      {
        en: "You upload the raw brackets or exposures",
        es: "Subes los brackets o las exposiciones en raw",
      },
      {
        en: "A sample room sets the editing standard",
        es: "Una habitación de muestra fija el estándar",
      },
      {
        en: "The full listing is edited consistently",
        es: "El anuncio completo se edita con consistencia",
      },
      {
        en: "Delivery within the agreed turnaround, MLS-ready",
        es: "Entrega a tiempo, lista para MLS",
      },
    ],
  },
  wedding: {
    title: { en: "Wedding & Events", es: "Bodas y eventos" },
    description: {
      en: "Consistent, emotive editing for your big day.",
      es: "Edición emotiva y consistente para tu gran día.",
    },
    details: {
      en: "Full-gallery editing for weddings and special events. Skin tones stay natural, colors stay true to the venue, and the whole gallery keeps one cohesive, timeless look — delivered on time for your clients.",
      es: "Edición de galería completa para bodas y eventos. Tonos naturales, color fiel al lugar y un estilo cohesivo — entregado a tiempo.",
    },
    includes: [
      {
        en: "Color and exposure correction for the full gallery",
        es: "Color y exposición en toda la galería",
      },
      {
        en: "Consistent style across ceremonies and receptions",
        es: "Estilo consistente en ceremonia y recepción",
      },
      {
        en: "Skin-tone refinement for key portraits",
        es: "Ajuste de piel en retratos clave",
      },
      {
        en: "Distraction removal in hero shots",
        es: "Eliminación de distracciones en las fotos principales",
      },
      {
        en: "Black-and-white versions of selected images",
        es: "Versiones en blanco y negro de imágenes seleccionadas",
      },
      {
        en: "Culling support on request",
        es: "Apoyo en la selección de fotos a pedido",
      },
    ],
    process: [
      {
        en: "You share the gallery and your style references",
        es: "Compartes la galería y tus referencias",
      },
      {
        en: "A sample set locks in the look you want",
        es: "Una serie de muestra fija el estilo deseado",
      },
      {
        en: "The complete gallery is edited consistently",
        es: "La galería completa se edita con consistencia",
      },
      {
        en: "On-time delivery, organized and export-ready",
        es: "Entrega a tiempo, ordenada y lista para exportación",
      },
    ],
  },
};
