export type ServiceItem = {
  id: string;
  title: string;
  shortTitle?: string;
  description: string;
  icon:
    | "portrait"
    | "fashion"
    | "lifestyle"
    | "product"
    | "marketplace"
    | "realestate"
    | "ai"
    | "aiScenes"
    | "backgrounds"
    | "batch"
    | "jewelry"
    | "color";
  details: string;
  includes: string[];
  process: string[];
  images: string[];
};

const defaultProcess = [
  "You share your images, goals, and style references",
  "I prepare a sample or first batch for approval",
  "The full set is finished with the approved direction",
  "Final review and delivery ready for your use",
];

export const services: ServiceItem[] = [
  {
    id: "portrait",
    title: "Portrait & Beauty Retouching",
    shortTitle: "Portrait & Beauty",
    description:
      "Skin, features, and lighting refined with precision for a natural finish.",
    icon: "portrait",
    details:
      "Focused on beauty, makeup, personal portrait, and professional photography. The edit improves texture, skin tones, light, and facial detail while keeping a realistic, clean, polished look—without erasing natural features or making the retouch obvious.",
    includes: [
      "Skin cleanup with natural texture preserved",
      "Correction of blemishes, redness, and distractions",
      "Retouching of eyes, lips, teeth, and facial details",
      "Hair and flyaway cleanup",
      "Dodge & burn for volume and dimension",
      "Color, light, and contrast adjustment",
    ],
    process: defaultProcess,
    images: [
      "https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?auto=format&fit=crop&w=900&q=80",
      "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?auto=format&fit=crop&w=900&q=80",
      "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=900&q=80",
    ],
  },
  {
    id: "fashion",
    title: "Fashion & Editorial Retouching",
    shortTitle: "Fashion & Editorial",
    description:
      "A refined aesthetic for campaigns, lookbooks, fashion, and editorial work.",
    icon: "fashion",
    details:
      "Skin, garments, hair, color, and lighting are treated as one visual direction. The result keeps the essence of the photo while improving finish, depth, and consistency—especially across series that need to feel connected.",
    includes: [
      "Skin retouching with a natural finish",
      "Cleanup of garments, wrinkles, lint, and visible marks",
      "Hair cleanup and fine detail work",
      "Editorial color adjustment",
      "Balance of light, contrast, and depth",
      "Visual consistency across photos",
    ],
    process: defaultProcess,
    images: [
      "https://images.unsplash.com/photo-1469334031218-e382a71b716b?auto=format&fit=crop&w=900&q=80",
      "https://images.unsplash.com/photo-1483985988355-763728e1935b?auto=format&fit=crop&w=900&q=80",
      "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&w=900&q=80",
    ],
  },
  {
    id: "lifestyle",
    title: "Lifestyle & Commercial Content Editing",
    shortTitle: "Lifestyle & Commercial",
    description:
      "Cleaner, more balanced visuals better prepared to communicate.",
    icon: "lifestyle",
    details:
      "Applied to campaigns, social media, lifestyle content, and commercial pieces. Color, light, framing, and specific details are adjusted to improve how the image reads, strengthen its visual intent, and deliver a more professional presentation without losing natural feel.",
    includes: [
      "Light and color correction",
      "Removal of distracting elements",
      "Framing and composition adjustments",
      "Retouching of people, spaces, or products",
      "Tone homogenization",
      "Export optimized for web or social",
    ],
    process: defaultProcess,
    images: [
      "https://images.unsplash.com/photo-1492707892479-7bc8d5a4ee93?auto=format&fit=crop&w=900&q=80",
      "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=900&q=80",
      "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=900&q=80",
    ],
  },
  {
    id: "product",
    title: "Product & E-commerce Editing",
    shortTitle: "Product & E-commerce",
    description:
      "Form, color, and texture more clearly defined to show the product with clarity.",
    icon: "product",
    details:
      "Each image respects the product’s real characteristics while correcting marks, reflections, color, shadows, and surface detail—so photography is cleaner, more consistent, and more reliable for online stores, catalogs, and commercial materials.",
    includes: [
      "Cleanup of dust, stains, scratches, and reflections",
      "Color correction true to the product",
      "Shadow and volume adjustments",
      "Sharpness and texture enhancement",
      "Background cleanup or adjustment",
      "Consistency across images of the same product",
    ],
    process: defaultProcess,
    images: [
      "https://images.unsplash.com/photo-1541643600914-78b084683601?auto=format&fit=crop&w=900&q=80",
      "https://images.unsplash.com/photo-1620916567453-8d70fdf46573?auto=format&fit=crop&w=900&q=80",
      "https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&w=900&q=80",
    ],
  },
  {
    id: "marketplace",
    title: "Marketplace Optimization",
    shortTitle: "Marketplaces",
    description:
      "Clear, organized images adapted to each platform’s requirements.",
    icon: "marketplace",
    details:
      "Amazon, Shopify, Etsy, and other marketplaces need images that work visually and technically. Proportions, background, cleanup, color, and consistency are adjusted so the product is understood quickly and keeps a professional look in the store.",
    includes: [
      "Format and proportion adaptation",
      "White, clean, or as-required backgrounds",
      "Visual product cleanup",
      "Color and light correction",
      "Consistent primary and secondary images",
      "Export ready to upload to your store",
    ],
    process: defaultProcess,
    images: [
      "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&w=900&q=80",
      "https://images.unsplash.com/photo-1472851294608-062f824d29cc?auto=format&fit=crop&w=900&q=80",
      "https://images.unsplash.com/photo-1607082348824-0a96f2a4b9da?auto=format&fit=crop&w=900&q=80",
    ],
  },
  {
    id: "realestate",
    title: "Real Estate Editing",
    shortTitle: "Real Estate",
    description:
      "Brighter, balanced spaces that stay true to how they really look.",
    icon: "realestate",
    details:
      "Interiors and exteriors are corrected with care for exposure, white balance, perspective, and detail. Windows are recovered, lights balanced, and distractions removed so the space reads better—without looking artificial or different from the real property.",
    includes: [
      "Exposure and lighting correction",
      "White balance adjustment",
      "Window and interior light improvement",
      "Basic perspective correction",
      "Cleanup of stains, cables, or distractions",
      "Balanced color and contrast",
    ],
    process: defaultProcess,
    images: [
      "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=900&q=80",
      "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=900&q=80",
      "https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?auto=format&fit=crop&w=900&q=80",
    ],
  },
  {
    id: "ai",
    title: "AI Image Retouching & Enhancement",
    shortTitle: "AI Enhancement",
    description:
      "AI tools combined with manual retouching and visual control.",
    icon: "ai",
    details:
      "AI is part of the process—not an automatic final result. It helps reconstruct areas, solve complex details, enlarge images, or improve quality, while manual retouching corrects edges, lighting, texture, and color to keep realism and consistency.",
    includes: [
      "Visual quality improvement",
      "Correction of errors or complex details",
      "Reconstruction or extension of areas",
      "Removal of unwanted elements",
      "Manual adjustment of edges, light, and color",
      "Final check for realism and consistency",
    ],
    process: defaultProcess,
    images: [
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=900&q=80",
      "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=900&q=80",
      "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=900&q=80",
    ],
  },
  {
    id: "aiScenes",
    title: "AI Models & Lifestyle Scenes",
    shortTitle: "AI Models & Scenes",
    description:
      "Products and concepts integrated into scenes with more creative freedom.",
    icon: "aiScenes",
    details:
      "Using AI and manual compositing, models, backgrounds, and environments are developed to place a product in a more engaging context. Integration is carefully adjusted for scale, perspective, lighting, shadows, and color so every element belongs to the same scene.",
    includes: [
      "Generation of models or environments with AI",
      "Lifestyle scene creation",
      "Product integration into the scene",
      "Perspective, scale, and proportion adjustment",
      "Light and color correction",
      "Manual finishing for greater realism",
    ],
    process: defaultProcess,
    images: [
      "https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&w=900&q=80",
      "https://images.unsplash.com/photo-1483985988355-763728e1935b?auto=format&fit=crop&w=900&q=80",
      "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&w=900&q=80",
    ],
  },
  {
    id: "backgrounds",
    title: "Background Change & Cleanup",
    shortTitle: "Backgrounds",
    description:
      "Precise cutouts and better-integrated backgrounds for each use case.",
    icon: "backgrounds",
    details:
      "Backgrounds are removed, cleaned, or replaced with careful work on edges, hair, transparencies, shadows, and depth. The final blend keeps a natural look—avoiding hard cutouts, halos, or lighting mismatches between subject and new environment.",
    includes: [
      "Background removal or replacement",
      "White, transparent, or custom backgrounds",
      "Cleanup of visual distractions",
      "Edge correction and fine cutouts",
      "Shadow and light integration",
      "Final color and depth adjustment",
    ],
    process: defaultProcess,
    images: [
      "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?auto=format&fit=crop&w=900&q=80",
      "https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&w=900&q=80",
      "https://images.unsplash.com/photo-1541643600914-78b084683601?auto=format&fit=crop&w=900&q=80",
    ],
  },
  {
    id: "batch",
    title: "Batch Editing & Visual Consistency",
    shortTitle: "Batch Editing",
    description:
      "Large image sets with a uniform visual line.",
    icon: "batch",
    details:
      "When a series has many photos, editing each file in isolation is not enough. A shared base of color, lighting, contrast, and finish keeps continuity across every image, with a clear process and organized deliveries.",
    includes: [
      "Volume color and light correction",
      "Application of a uniform visual style",
      "Basic or advanced retouching depending on the batch",
      "File and delivery organization",
      "Consistency review across images",
      "Export for the final use case",
    ],
    process: defaultProcess,
    images: [
      "https://images.unsplash.com/photo-1492707892479-7bc8d5a4ee93?auto=format&fit=crop&w=900&q=80",
      "https://images.unsplash.com/photo-1496747611176-843222e1e57c?auto=format&fit=crop&w=900&q=80",
      "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=900&q=80",
    ],
  },
  {
    id: "jewelry",
    title: "Jewelry, Accessories & Clothing Retouching",
    shortTitle: "Jewelry & Apparel",
    description:
      "Materials, highlights, and details refined with precision and cleanliness.",
    icon: "jewelry",
    details:
      "Metals, stones, fabrics, seams, and surfaces need specific treatment to keep their real look. Imperfections, reflections, texture, color, and small details are corrected for a more defined image without losing each material’s character.",
    includes: [
      "Cleanup of dust, stains, and unwanted reflections",
      "Enhancement of highlights, texture, and definition",
      "Fabric, wrinkle, and drape retouching",
      "Material color correction",
      "Shadow and depth adjustment",
      "Edge cleanup and fine detail work",
    ],
    process: defaultProcess,
    images: [
      "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?auto=format&fit=crop&w=900&q=80",
      "https://images.unsplash.com/photo-1605100804763-247f67b3557e?auto=format&fit=crop&w=900&q=80",
      "https://images.unsplash.com/photo-1611652022419-a9419f74343d?auto=format&fit=crop&w=900&q=80",
    ],
  },
  {
    id: "color",
    title: "Color Variations & Creative Editing",
    shortTitle: "Color Variations",
    description:
      "New color versions while keeping material, volume, and realism.",
    icon: "color",
    details:
      "Clothing, accessories, or product colors can be changed without altering original texture. Each variation accounts for shadows, reflections, folds, transparencies, and specific references so results stay believable and consistent with each other.",
    includes: [
      "Color change on clothing, products, or accessories",
      "Preservation of texture and volume",
      "Adjustment of shadows, highlights, and reflections",
      "Variations based on color references",
      "Correction of edges and contaminated areas",
      "Versions ready for catalog, store, or presentation",
    ],
    process: defaultProcess,
    images: [
      "https://images.unsplash.com/photo-1558171813-4c088753af8f?auto=format&fit=crop&w=900&q=80",
      "https://images.unsplash.com/photo-1523381210434-271e8be1f52b?auto=format&fit=crop&w=900&q=80",
      "https://images.unsplash.com/photo-1445205170230-053b83016050?auto=format&fit=crop&w=900&q=80",
    ],
  },
];

export const featuredServiceIds = ["portrait", "fashion", "product"] as const;
