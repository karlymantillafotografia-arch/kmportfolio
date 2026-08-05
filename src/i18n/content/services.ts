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

const defaultProcess: L[] = [
  {
    en: "You share your images, goals, and style references",
    es: "Compartes tus imágenes, objetivos y referencias de estilo",
  },
  {
    en: "I prepare a sample or first batch for approval",
    es: "Preparo una muestra o primer lote para aprobación",
  },
  {
    en: "The full set is finished with the approved direction",
    es: "La serie completa se finaliza con la dirección aprobada",
  },
  {
    en: "Final review and delivery ready for your use",
    es: "Revisión final y entrega lista para tu uso",
  },
];

export const serviceCopy: Record<string, ServiceCopy> = {
  portrait: {
    title: {
      en: "Portrait and Beauty Retouching",
      es: "Retoque de retrato y belleza",
    },
    shortTitle: { en: "Portrait & Beauty", es: "Retrato y belleza" },
    description: {
      en: "Skin, facial features, and lighting refined with precision while maintaining a natural finish.",
      es: "Piel, rasgos e iluminación trabajados con precisión, manteniendo un acabado natural.",
    },
    details: {
      en: "Focused on beauty, makeup, personal portraits, and professional photography. The editing improves skin texture, tones, lighting, and facial details while preserving a realistic, clean, and polished appearance, without removing natural features or making the retouching look obvious.",
      es: "Enfocado en imágenes de belleza, maquillaje, retrato personal y fotografía profesional. La edición mejora textura, tonos de piel, luz y detalles del rostro, conservando una apariencia realista, limpia y bien terminada, sin borrar los rasgos naturales ni hacer que el retoque resulte evidente.",
    },
    includes: [
      {
        en: "Skin cleanup while preserving natural texture",
        es: "Limpieza de piel conservando textura natural",
      },
      {
        en: "Correction of blemishes, redness, and distractions",
        es: "Corrección de imperfecciones, rojeces y distracciones",
      },
      {
        en: "Retouching of eyes, lips, teeth, and facial details",
        es: "Retoque de ojos, labios, dientes y detalles del rostro",
      },
      {
        en: "Hair cleanup and flyaway removal",
        es: "Limpieza de cabello y flyaways",
      },
      {
        en: "Dodge and burn for volume and dimension",
        es: "Dodge & burn para volumen y dimensión",
      },
      {
        en: "Color, lighting, and contrast adjustments",
        es: "Ajuste de color, luz y contraste",
      },
    ],
    process: defaultProcess,
  },
  fashion: {
    title: {
      en: "Fashion and Editorial Retouching",
      es: "Retoque de moda y editorial",
    },
    shortTitle: { en: "Fashion & Editorial", es: "Moda y editorial" },
    description: {
      en: "A more refined visual finish for campaigns, lookbooks, fashion, and editorial photography.",
      es: "Una estética más cuidada para campañas, lookbooks, moda y fotografía editorial.",
    },
    details: {
      en: "Skin, clothing, hair, color, and lighting are treated as part of the same visual direction. The final result preserves the essence of the original photography while improving its finish, depth, and consistency, especially across image series that need to feel visually connected.",
      es: "La piel, las prendas, el cabello, el color y la iluminación se trabajan como parte de una misma dirección visual. El resultado mantiene la esencia de la fotografía, pero mejora su acabado, profundidad y coherencia, especialmente en series donde todas las imágenes deben verse conectadas.",
    },
    includes: [
      {
        en: "Natural-looking skin retouching",
        es: "Retoque de piel con acabado natural",
      },
      {
        en: "Removal of wrinkles, lint, marks, and clothing imperfections",
        es: "Limpieza de prendas, arrugas, pelusas y marcas visibles",
      },
      {
        en: "Hair cleanup and fine-detail corrections",
        es: "Corrección de cabello y detalles finos",
      },
      {
        en: "Editorial color grading",
        es: "Ajuste de color editorial",
      },
      {
        en: "Lighting, contrast, and depth adjustments",
        es: "Balance de luz, contraste y profundidad",
      },
      {
        en: "Visual consistency across photographs",
        es: "Consistencia visual entre fotografías",
      },
    ],
    process: defaultProcess,
  },
  lifestyle: {
    title: {
      en: "Lifestyle and Commercial Content Editing",
      es: "Edición lifestyle y contenido comercial",
    },
    shortTitle: {
      en: "Lifestyle & Commercial",
      es: "Lifestyle y comercial",
    },
    description: {
      en: "Cleaner, more balanced content prepared to communicate visually.",
      es: "Contenido visual más limpio, equilibrado y mejor preparado para comunicar.",
    },
    details: {
      en: "Applied to campaigns, social media, lifestyle content, and commercial materials. Color, lighting, framing, and specific details are adjusted to improve the image’s visual clarity, strengthen its purpose, and create a more professional presentation without losing its natural appearance.",
      es: "Aplicada a campañas, redes sociales, contenido lifestyle y piezas comerciales. Se ajustan color, luz, encuadre y detalles específicos para mejorar la lectura de la imagen, reforzar su intención visual y conseguir una presentación más profesional sin perder naturalidad.",
    },
    includes: [
      {
        en: "Lighting and color correction",
        es: "Corrección de luz y color",
      },
      {
        en: "Removal of distracting elements",
        es: "Limpieza de elementos distractores",
      },
      {
        en: "Framing and composition adjustments",
        es: "Ajuste de encuadre y composición",
      },
      {
        en: "Retouching of people, spaces, or products",
        es: "Retoque de personas, espacios o productos",
      },
      {
        en: "Tone matching and color consistency",
        es: "Homogeneización de tonos",
      },
      {
        en: "Optimized export for web or social media",
        es: "Exportación optimizada para web o redes",
      },
    ],
    process: defaultProcess,
  },
  product: {
    title: {
      en: "Product and E-commerce Editing",
      es: "Edición de producto y e-commerce",
    },
    shortTitle: {
      en: "Product & E-commerce",
      es: "Producto y e-commerce",
    },
    description: {
      en: "Shape, color, and texture refined to present the product clearly.",
      es: "Forma, color y textura mejor definidos para mostrar el producto con claridad.",
    },
    details: {
      en: "Each image is edited while respecting the product’s real characteristics, correcting marks, reflections, color, shadows, and surface details. This creates cleaner, more consistent, and trustworthy images for online stores, catalogs, and commercial materials.",
      es: "Cada imagen se trabaja respetando las características reales del producto, corrigiendo manchas, reflejos, color, sombras y detalles de superficie. Esto permite obtener fotografías más limpias, consistentes y confiables para tiendas online, catálogos y materiales comerciales.",
    },
    includes: [
      {
        en: "Removal of dust, stains, scratches, and unwanted reflections",
        es: "Limpieza de polvo, manchas, rayones y reflejos",
      },
      {
        en: "Product-accurate color correction",
        es: "Corrección de color fiel al producto",
      },
      {
        en: "Shadow and volume adjustments",
        es: "Ajuste de sombras y volumen",
      },
      {
        en: "Texture and sharpness enhancement",
        es: "Mejora de nitidez y textura",
      },
      {
        en: "Background cleanup or adjustment",
        es: "Limpieza o ajuste de fondo",
      },
      {
        en: "Consistency across images of the same product",
        es: "Consistencia entre imágenes del mismo producto",
      },
    ],
    process: defaultProcess,
  },
  marketplace: {
    title: {
      en: "Marketplace Image Optimization",
      es: "Optimización para marketplaces",
    },
    shortTitle: { en: "Marketplaces", es: "Marketplaces" },
    description: {
      en: "Clear, organized images adapted to the requirements of each platform.",
      es: "Imágenes organizadas, claras y adaptadas a los requisitos de cada plataforma.",
    },
    details: {
      en: "Amazon, Shopify, Etsy, and other marketplaces require images that work both visually and technically. Proportions, backgrounds, cleanup, color, and consistency are adjusted so the product can be understood quickly and presented professionally within the online store.",
      es: "Amazon, Shopify, Etsy y otros marketplaces requieren imágenes que funcionen bien tanto visual como técnicamente. Se ajustan proporciones, fondo, limpieza, color y consistencia para que el producto pueda entenderse rápidamente y mantenga una presentación profesional dentro de la tienda.",
    },
    includes: [
      {
        en: "Format and proportion adjustments",
        es: "Adaptación de formato y proporciones",
      },
      {
        en: "White, clean, or platform-specific backgrounds",
        es: "Fondo blanco, limpio o según requerimiento",
      },
      {
        en: "Visual product cleanup",
        es: "Limpieza visual del producto",
      },
      {
        en: "Lighting and color correction",
        es: "Corrección de color y luz",
      },
      {
        en: "Consistent primary and secondary images",
        es: "Imágenes principales y secundarias consistentes",
      },
      {
        en: "Files exported and ready for upload",
        es: "Exportación lista para cargar en tienda",
      },
    ],
    process: defaultProcess,
  },
  realestate: {
    title: {
      en: "Real Estate Photo Editing",
      es: "Edición para real estate",
    },
    shortTitle: { en: "Real Estate", es: "Real estate" },
    description: {
      en: "Brighter, more balanced spaces that remain faithful to their real appearance.",
      es: "Espacios más luminosos, equilibrados y fieles a su apariencia real.",
    },
    details: {
      en: "Interior and exterior images are corrected with attention to exposure, white balance, perspective, and detail. Windows are recovered, interior lighting is balanced, and distractions are removed to improve the overall perception of the space without creating an artificial or misleading result.",
      es: "Interiores y exteriores se corrigen cuidando exposición, balance de blancos, perspectiva y detalle. También se recuperan ventanas, se equilibran luces y se eliminan distracciones para mejorar la percepción del espacio sin crear una apariencia artificial o diferente a la propiedad real.",
    },
    includes: [
      {
        en: "Exposure and lighting correction",
        es: "Corrección de exposición e iluminación",
      },
      {
        en: "White balance adjustments",
        es: "Ajuste de balance de blancos",
      },
      {
        en: "Window and interior light enhancement",
        es: "Mejora de ventanas y luces interiores",
      },
      {
        en: "Basic perspective correction",
        es: "Corrección básica de perspectiva",
      },
      {
        en: "Removal of stains, cables, and visual distractions",
        es: "Limpieza de manchas, cables o distracciones",
      },
      {
        en: "Balanced color and contrast",
        es: "Color y contraste equilibrados",
      },
    ],
    process: defaultProcess,
  },
  ai: {
    title: {
      en: "AI-Assisted Image Retouching and Enhancement",
      es: "Retoque y mejora de imágenes con IA",
    },
    shortTitle: { en: "AI Enhancement", es: "Mejora con IA" },
    description: {
      en: "AI tools combined with manual retouching and careful visual control.",
      es: "Herramientas de IA combinadas con retoque manual y control visual.",
    },
    details: {
      en: "Artificial intelligence is used as part of the editing process, not as an automatic final result. It helps reconstruct areas, resolve complex details, extend images, or improve quality, while manual retouching corrects edges, lighting, texture, and color to maintain realism and visual consistency.",
      es: "La inteligencia artificial se utiliza como parte del proceso, no como resultado final automático. Permite reconstruir áreas, resolver detalles complejos, ampliar imágenes o mejorar calidad, mientras el retoque manual corrige bordes, iluminación, textura y color para conservar realismo y coherencia.",
    },
    includes: [
      {
        en: "Visual quality enhancement",
        es: "Mejora de calidad visual",
      },
      {
        en: "Correction of complex errors or details",
        es: "Corrección de errores o detalles complejos",
      },
      {
        en: "Reconstruction or extension of image areas",
        es: "Reconstrucción o extensión de áreas",
      },
      {
        en: "Removal of unwanted elements",
        es: "Limpieza de elementos no deseados",
      },
      {
        en: "Manual adjustment of edges, lighting, and color",
        es: "Ajuste manual de bordes, luz y color",
      },
      {
        en: "Final review for realism and consistency",
        es: "Revisión final de realismo y coherencia",
      },
    ],
    process: defaultProcess,
  },
  aiScenes: {
    title: {
      en: "AI Models and Lifestyle Scenes",
      es: "Modelos IA y escenas lifestyle",
    },
    shortTitle: {
      en: "AI Models & Scenes",
      es: "Modelos IA y escenas",
    },
    description: {
      en: "Products and concepts integrated into custom scenes with greater visual flexibility.",
      es: "Productos y conceptos integrados en escenas visuales creadas con mayor libertad.",
    },
    details: {
      en: "AI and manual compositing are used to create models, backgrounds, and environments that present products within a more engaging context. Scale, perspective, lighting, shadows, and color are carefully adjusted so every element feels naturally integrated into the same scene.",
      es: "Mediante IA y composición manual se desarrollan modelos, fondos y ambientes que permiten presentar un producto dentro de un contexto más atractivo. La integración se ajusta cuidadosamente en escala, perspectiva, iluminación, sombras y color para que todos los elementos pertenezcan a la misma escena.",
    },
    includes: [
      {
        en: "AI-generated models or environments",
        es: "Generación de modelos o ambientes con IA",
      },
      {
        en: "Creation of lifestyle scenes",
        es: "Creación de escenas lifestyle",
      },
      {
        en: "Product integration within the scene",
        es: "Integración de productos en la escena",
      },
      {
        en: "Perspective, scale, and proportion adjustments",
        es: "Ajuste de perspectiva, escala y proporción",
      },
      {
        en: "Lighting and color correction",
        es: "Corrección de luz y color",
      },
      {
        en: "Manual finishing for greater realism",
        es: "Acabado manual para mayor realismo",
      },
    ],
    process: defaultProcess,
  },
  backgrounds: {
    title: {
      en: "Background Removal and Replacement",
      es: "Cambio y limpieza de fondos",
    },
    shortTitle: { en: "Backgrounds", es: "Fondos" },
    description: {
      en: "Precise cutouts and backgrounds adapted to the final use of each image.",
      es: "Recortes precisos y fondos mejor integrados según el uso de la imagen.",
    },
    details: {
      en: "Backgrounds are removed, cleaned, or replaced with careful attention to edges, hair, transparent areas, shadows, and depth. The final integration maintains a natural appearance, avoiding harsh cutouts, halos, or lighting differences between the subject and the new environment.",
      es: "Se elimina, limpia o reemplaza el fondo trabajando cuidadosamente bordes, cabello, transparencias, sombras y profundidad. La integración final conserva una apariencia natural, evitando recortes rígidos, halos o diferencias de iluminación entre el sujeto y el nuevo entorno.",
    },
    includes: [
      {
        en: "Background removal or replacement",
        es: "Eliminación o reemplazo de fondo",
      },
      {
        en: "White, transparent, or custom backgrounds",
        es: "Fondo blanco, transparente o personalizado",
      },
      {
        en: "Removal of visual distractions",
        es: "Limpieza de distracciones visuales",
      },
      {
        en: "Fine edge and cutout correction",
        es: "Corrección de bordes y recortes finos",
      },
      {
        en: "Shadow and lighting integration",
        es: "Integración de sombras y luz",
      },
      {
        en: "Final color and depth adjustments",
        es: "Ajuste final de color y profundidad",
      },
    ],
    process: defaultProcess,
  },
  batch: {
    title: {
      en: "Batch Editing and Visual Consistency",
      es: "Edición por lotes y consistencia visual",
    },
    shortTitle: { en: "Batch Editing", es: "Edición por lotes" },
    description: {
      en: "Large image sets maintained under one consistent visual direction.",
      es: "Grandes volúmenes de imágenes con una línea visual uniforme.",
    },
    details: {
      en: "When a project includes a high volume of photographs, editing each image individually is not enough. A shared foundation of color, lighting, contrast, and finish is established to maintain continuity throughout the entire set, while keeping the workflow and delivery organized.",
      es: "Cuando una serie contiene muchas fotografías, no basta con editar cada archivo por separado. Se establece una base común de color, iluminación, contraste y acabado para mantener continuidad entre todas las imágenes, además de organizar el proceso y las entregas de forma clara.",
    },
    includes: [
      {
        en: "High-volume lighting and color correction",
        es: "Corrección de color y luz en volumen",
      },
      {
        en: "Application of a consistent visual style",
        es: "Aplicación de un estilo visual uniforme",
      },
      {
        en: "Basic or advanced retouching depending on the project",
        es: "Retoque básico o avanzado según el lote",
      },
      {
        en: "Organized file management and delivery",
        es: "Organización de archivos y entregas",
      },
      {
        en: "Consistency review across all images",
        es: "Revisión de consistencia entre imágenes",
      },
      {
        en: "Export according to the final use",
        es: "Exportación según el uso final",
      },
    ],
    process: defaultProcess,
  },
  jewelry: {
    title: {
      en: "Jewelry, Accessories, and Clothing Retouching",
      es: "Retoque de joyería, accesorios y ropa",
    },
    shortTitle: {
      en: "Jewelry & Apparel",
      es: "Joyería y ropa",
    },
    description: {
      en: "Materials, highlights, and fine details refined with precision.",
      es: "Materiales, brillos y detalles trabajados con precisión y limpieza.",
    },
    details: {
      en: "Metals, stones, fabrics, stitching, and other surfaces require specific treatment to preserve their real appearance. Imperfections, reflections, textures, color, and small details are corrected to create a cleaner and more defined image without losing the natural characteristics of each material.",
      es: "Metales, piedras, telas, costuras y superficies requieren un tratamiento específico para conservar su apariencia real. Se corrigen imperfecciones, reflejos, textura, color y pequeños detalles, logrando una imagen más definida sin perder las características propias de cada material.",
    },
    includes: [
      {
        en: "Removal of dust, stains, and unwanted reflections",
        es: "Limpieza de polvo, manchas y reflejos no deseados",
      },
      {
        en: "Enhancement of highlights, texture, and definition",
        es: "Mejora de brillos, textura y definición",
      },
      {
        en: "Fabric retouching, wrinkle removal, and garment shaping",
        es: "Retoque de telas, arrugas y caída de prendas",
      },
      {
        en: "Material-accurate color correction",
        es: "Corrección de color del material",
      },
      {
        en: "Shadow and depth adjustments",
        es: "Ajuste de sombras y profundidad",
      },
      {
        en: "Edge cleanup and fine-detail correction",
        es: "Limpieza de bordes y detalles finos",
      },
    ],
    process: defaultProcess,
  },
  color: {
    title: {
      en: "Color Variations and Creative Editing",
      es: "Variaciones de color y edición creativa",
    },
    shortTitle: {
      en: "Color Variations",
      es: "Variaciones de color",
    },
    description: {
      en: "New color versions created while preserving material, volume, and realism.",
      es: "Nuevas versiones de color conservando material, volumen y realismo.",
    },
    details: {
      en: "The color of clothing, accessories, or products can be changed without affecting the original texture. Each variation is adjusted according to shadows, reflections, folds, transparent areas, and specific color references, creating believable and visually consistent versions.",
      es: "El color de ropa, accesorios o productos puede modificarse sin alterar su textura original. Cada variación se ajusta teniendo en cuenta sombras, reflejos, pliegues, transparencias y referencias específicas, para conseguir versiones creíbles y consistentes entre sí.",
    },
    includes: [
      {
        en: "Color changes for clothing, products, or accessories",
        es: "Cambio de color en ropa, productos o accesorios",
      },
      {
        en: "Preservation of texture and volume",
        es: "Conservación de textura y volumen",
      },
      {
        en: "Shadow, highlight, and reflection adjustments",
        es: "Ajuste de sombras, brillos y reflejos",
      },
      {
        en: "Variations based on color references",
        es: "Variaciones según referencias de color",
      },
      {
        en: "Edge correction and cleanup of color contamination",
        es: "Corrección de bordes y zonas contaminadas",
      },
      {
        en: "Versions prepared for catalogs, online stores, or presentations",
        es: "Versiones listas para catálogo, tienda o presentación",
      },
    ],
    process: defaultProcess,
  },
};
