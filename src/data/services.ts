export type ServiceItem = {
  id: string;
  title: string;
  shortTitle?: string;
  description: string;
  icon: "portrait" | "fashion" | "product" | "ai" | "batch" | "consulting";
  details: string;
  includes: string[];
};

export const services: ServiceItem[] = [
  {
    id: "portrait",
    title: "Portrait Retouching",
    description: "Natural skin work and refined portrait finishing.",
    icon: "portrait",
    details:
      "High-end portrait finishing that keeps skin looking like skin. Every image is retouched by hand with non-destructive techniques, preserving natural texture while refining tone, light, and detail for a polished, editorial-quality result.",
    includes: [
      "Skin retouching with preserved natural texture",
      "Blemish and stray-hair removal",
      "Dodge & burn for dimension and light shaping",
      "Eye, lip, and teeth enhancement",
      "Color correction and white balance",
      "Background cleanup and final crop",
    ],
  },
  {
    id: "fashion",
    title: "Fashion & Editorial",
    description: "Editorial polish for campaigns and lookbooks.",
    icon: "fashion",
    details:
      "Campaign-ready finishing for fashion imagery. From lookbooks to magazine editorials, I refine garments, skin, and color so every frame holds a consistent visual language across the full set.",
    includes: [
      "Garment cleanup: wrinkles, lint, and shape refinement",
      "High-end skin retouching",
      "Consistent color grading across the series",
      "Set and background refinement",
      "Compositing and small object removal",
      "Delivery in print and web formats",
    ],
  },
  {
    id: "product",
    title: "Product & E-commerce",
    shortTitle: "Product Editing",
    description: "Consistent product imagery for online stores.",
    icon: "product",
    details:
      "Clean, consistent product imagery that converts. I standardize lighting, color, and framing across your entire catalog so products look accurate, professional, and cohesive in any storefront.",
    includes: [
      "Background removal or pure-white backdrops",
      "Accurate color matching to the real product",
      "Dust, scratch, and reflection cleanup",
      "Shadow creation for natural grounding",
      "Alignment and crop consistency across the catalog",
      "Marketplace-ready export (Amazon, Shopify, etc.)",
    ],
  },
  {
    id: "ai",
    title: "AI Image Enhancement",
    description: "Smart cleanup paired with careful manual finishing.",
    icon: "ai",
    details:
      "The speed of AI with the judgment of a professional retoucher. I use AI tools for upscaling, noise reduction, and cleanup, then finish every image by hand so results never look artificial.",
    includes: [
      "AI upscaling for low-resolution images",
      "Noise reduction and detail recovery",
      "Smart object and distraction removal",
      "Generative fill reviewed and refined manually",
      "Old or damaged photo restoration",
      "Final manual pass for a natural finish",
    ],
  },
  {
    id: "batch",
    title: "Batch Editing",
    description: "Efficient volume editing with consistent quality.",
    icon: "batch",
    details:
      "Reliable volume editing for photographers and brands with large sets. Whether it is a wedding, an event, or a seasonal catalog, every image gets the same consistent look with fast turnaround.",
    includes: [
      "Color correction and exposure balancing at scale",
      "Consistent style applied across the full set",
      "Culling support and selection guidance",
      "Custom presets built for your workflow",
      "Fast, agreed-upon turnaround times",
      "Organized delivery, named and sorted",
    ],
  },
  {
    id: "consulting",
    title: "Personalized Consulting",
    description: "Mentorship to sharpen skills and grow your business.",
    icon: "consulting",
    details:
      "One-on-one sessions tailored to where you are now and where you want to go. We review your work together, refine your editing workflow, and build a plan to grow your skills or your photography business.",
    includes: [
      "Portfolio review with actionable feedback",
      "Live retouching sessions on your own images",
      "Workflow and software guidance (Photoshop, Lightroom)",
      "Pricing and client-communication strategy",
      "Personalized learning roadmap",
      "Session recording so you can rewatch anytime",
    ],
  },
];

export const featuredServiceIds = ["portrait", "fashion", "product"] as const;
