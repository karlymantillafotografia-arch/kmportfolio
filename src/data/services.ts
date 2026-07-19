export type ServiceItem = {
  id: string;
  title: string;
  shortTitle?: string;
  description: string;
  icon:
    | "portrait"
    | "fashion"
    | "product"
    | "ai"
    | "batch"
    | "consulting"
    | "restoration"
    | "realestate"
    | "wedding";
  details: string;
  includes: string[];
  process: string[];
  images: string[];
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
    process: [
      "You send your selects and reference looks",
      "I retouch a sample image for your approval",
      "Full set is finished with the approved style",
      "Delivery in high-res, ready for print and web",
    ],
    images: [
      "https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?auto=format&fit=crop&w=900&q=80",
      "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?auto=format&fit=crop&w=900&q=80",
      "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=900&q=80",
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
    process: [
      "We define the visual direction of the campaign",
      "Test edit on a key frame to lock the look",
      "Full editorial is retouched with that language",
      "Final review round and delivery per your specs",
    ],
    images: [
      "https://images.unsplash.com/photo-1469334031218-e382a71b716b?auto=format&fit=crop&w=900&q=80",
      "https://images.unsplash.com/photo-1483985988355-763728e1935b?auto=format&fit=crop&w=900&q=80",
      "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&w=900&q=80",
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
    process: [
      "You share your catalog and platform requirements",
      "I build a style guide from a sample batch",
      "The full catalog is edited to that standard",
      "Files delivered named and organized by SKU",
    ],
    images: [
      "https://images.unsplash.com/photo-1541643600914-78b084683601?auto=format&fit=crop&w=900&q=80",
      "https://images.unsplash.com/photo-1620916567453-8d70fdf46573?auto=format&fit=crop&w=900&q=80",
      "https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&w=900&q=80",
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
    process: [
      "We review your images and define what AI can solve",
      "AI enhancement is applied with the right tools",
      "Every result is checked and refined by hand",
      "You receive natural-looking, high-quality files",
    ],
    images: [
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=900&q=80",
      "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=900&q=80",
      "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=900&q=80",
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
    process: [
      "You send the full set with your style references",
      "A sample batch defines the editing standard",
      "The set is edited in volume with quality control",
      "On-time delivery, sorted and ready to publish",
    ],
    images: [
      "https://images.unsplash.com/photo-1492707892479-7bc8d5a4ee93?auto=format&fit=crop&w=900&q=80",
      "https://images.unsplash.com/photo-1496747611176-843222e1e57c?auto=format&fit=crop&w=900&q=80",
      "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=900&q=80",
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
    process: [
      "Short intake call to understand your goals",
      "We build a personalized session plan",
      "Live one-on-one sessions with real projects",
      "Follow-up materials and recording included",
    ],
    images: [
      "https://images.unsplash.com/photo-1544717297-fa95b6ee9643?auto=format&fit=crop&w=900&q=80",
      "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=900&q=80",
      "https://images.unsplash.com/photo-1558655146-d09347e92766?auto=format&fit=crop&w=900&q=80",
    ],
  },
  {
    id: "restoration",
    title: "Photo Restoration",
    description: "Bring damaged or faded photos back to life.",
    icon: "restoration",
    details:
      "Careful restoration of old, damaged, or faded photographs. Tears, stains, scratches, and color loss are repaired by hand, preserving the character of the original image while making it ready to print and share again.",
    includes: [
      "Repair of tears, scratches, and stains",
      "Reconstruction of missing areas",
      "Fading and color-cast correction",
      "Optional colorization of black-and-white photos",
      "Noise cleanup and detail sharpening",
      "High-resolution file ready to reprint",
    ],
    process: [
      "You send a scan or photo of the original",
      "I assess the damage and confirm the scope",
      "The image is restored with regular previews",
      "You receive the restored file in high resolution",
    ],
    images: [
      "https://images.unsplash.com/photo-1526170375885-4d8ecf77b99f?auto=format&fit=crop&w=900&q=80",
      "https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?auto=format&fit=crop&w=900&q=80",
      "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?auto=format&fit=crop&w=900&q=80",
    ],
  },
  {
    id: "realestate",
    title: "Real Estate Editing",
    description: "Bright, inviting property images that sell.",
    icon: "realestate",
    details:
      "Property photography editing that makes listings stand out. From window pulls and sky replacements to HDR blending, every room is delivered bright, true to color, and ready to attract buyers.",
    includes: [
      "HDR blending and exposure balancing",
      "Window pulls with natural outside views",
      "Sky replacement and lawn enhancement",
      "Vertical and lens-distortion correction",
      "Object and clutter removal",
      "Day-to-dusk conversions",
    ],
    process: [
      "You upload the raw brackets or exposures",
      "A sample room sets the editing standard",
      "The full listing is edited consistently",
      "Delivery within the agreed turnaround, MLS-ready",
    ],
    images: [
      "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=900&q=80",
      "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=900&q=80",
      "https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?auto=format&fit=crop&w=900&q=80",
    ],
  },
  {
    id: "wedding",
    title: "Wedding & Events",
    description: "Consistent, emotive editing for your big day.",
    icon: "wedding",
    details:
      "Full-gallery editing for weddings and special events. Skin tones stay natural, colors stay true to the venue, and the whole gallery keeps one cohesive, timeless look — delivered on time for your clients.",
    includes: [
      "Color and exposure correction for the full gallery",
      "Consistent style across ceremonies and receptions",
      "Skin-tone refinement for key portraits",
      "Distraction removal in hero shots",
      "Black-and-white versions of selected images",
      "Culling support on request",
    ],
    process: [
      "You share the gallery and your style references",
      "A sample set locks in the look you want",
      "The complete gallery is edited consistently",
      "On-time delivery, organized and export-ready",
    ],
    images: [
      "https://images.unsplash.com/photo-1521146764736-56c929d59c83?auto=format&fit=crop&w=900&q=80",
      "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=900&q=80",
      "https://images.unsplash.com/photo-1544717297-fa95b6ee9643?auto=format&fit=crop&w=900&q=80",
    ],
  },
];

export const featuredServiceIds = ["portrait", "fashion", "product"] as const;
