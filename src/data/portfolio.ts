export type PortfolioProject = {
  id: string;
  title: string;
  category: string;
  image: string;
  imageAlt: string;
  description?: string;
  retouching?: string;
  deliverables?: string;
  gallery?: { image: string; imageAlt: string }[];
};

export type PortfolioItem = {
  slug: string;
  title: string;
  pageTitle: string;
  description: string;
  image: string;
  imageAlt: string;
  featured: {
    title: string;
    description: string;
    image: string;
    imageAlt: string;
    gallery: { image: string; imageAlt: string }[];
    category: string;
    retouching: string;
    deliverables: string;
  };
  projects: PortfolioProject[];
  cta: {
    title: string;
    body: string;
  };
};

export const portfolioItems: PortfolioItem[] = [
  {
    slug: "portrait-retouching",
    title: "Portrait Retouching",
    pageTitle: "Portrait Retouching Portfolio",
    description:
      "Natural skin refinement, frequency separation, and polished portrait finishes for beauty and personal branding.",
    image:
      "https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?auto=format&fit=crop&w=800&q=80",
    imageAlt: "Portrait retouching sample",
    featured: {
      title: "Editorial Beauty Portrait",
      description:
        "Soft skin work with preserved texture, refined eyes, and balanced color for a clean beauty finish.",
      image:
        "https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?auto=format&fit=crop&w=1200&q=80",
      imageAlt: "Featured beauty portrait",
      gallery: [
        {
          image:
            "https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?auto=format&fit=crop&w=1600&q=80",
          imageAlt: "Featured beauty portrait",
        },
        {
          image:
            "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?auto=format&fit=crop&w=1600&q=80",
          imageAlt: "Soft glow detail",
        },
        {
          image:
            "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=1600&q=80",
          imageAlt: "Studio close-up detail",
        },
        {
          image:
            "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=1600&q=80",
          imageAlt: "Clean skin finish detail",
        },
      ],
      category: "Beauty / Portrait",
      retouching: "Skin texture, dodge & burn, color",
      deliverables: "Web, Print, Social",
    },
    projects: [
      {
        id: "p1",
        title: "Soft Glow Session",
        category: "Beauty",
        image:
          "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?auto=format&fit=crop&w=800&q=80",
        imageAlt: "Soft glow portrait",
      },
      {
        id: "p2",
        title: "Natural Headshot",
        category: "Corporate",
        image:
          "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=800&q=80",
        imageAlt: "Natural headshot",
      },
      {
        id: "p3",
        title: "Studio Close-up",
        category: "Beauty",
        image:
          "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=800&q=80",
        imageAlt: "Studio close-up",
      },
      {
        id: "p4",
        title: "Warm Tone Portrait",
        category: "Lifestyle",
        image:
          "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=800&q=80",
        imageAlt: "Warm tone portrait",
      },
      {
        id: "p5",
        title: "Clean Skin Finish",
        category: "Beauty",
        image:
          "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=800&q=80",
        imageAlt: "Clean skin finish",
      },
      {
        id: "p6",
        title: "Profile Study",
        category: "Editorial",
        image:
          "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=800&q=80",
        imageAlt: "Profile study",
      },
      {
        id: "p7",
        title: "Golden Hour Portrait",
        category: "Editorial",
        image:
          "https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?auto=format&fit=crop&w=800&q=80",
        imageAlt: "Golden hour portrait",
      },
      {
        id: "p8",
        title: "Minimal Beauty",
        category: "Beauty",
        image:
          "https://images.unsplash.com/photo-1521146764736-56c929d59c83?auto=format&fit=crop&w=800&q=80",
        imageAlt: "Minimal beauty portrait",
      },
    ],
    cta: {
      title: "Let's refine your next portraits.",
      body: "Premium retouching that keeps skin natural and results delivery-ready.",
    },
  },
  {
    slug: "fashion-editorial",
    title: "Fashion & Editorial",
    pageTitle: "Fashion & Editorial Portfolio",
    description:
      "High-end fashion cleanup with refined color, texture, and editorial polish for campaigns and lookbooks.",
    image:
      "https://images.unsplash.com/photo-1469334031218-e382a71b716b?auto=format&fit=crop&w=800&q=80",
    imageAlt: "Fashion editorial sample",
    featured: {
      title: "Summer Lookbook Edit",
      description:
        "Fabric cleanup, color harmony, and silhouette refinement for a cohesive editorial set.",
      image:
        "https://images.unsplash.com/photo-1469334031218-e382a71b716b?auto=format&fit=crop&w=1200&q=80",
      imageAlt: "Featured fashion lookbook",
      gallery: [
        {
          image:
            "https://images.unsplash.com/photo-1469334031218-e382a71b716b?auto=format&fit=crop&w=1600&q=80",
          imageAlt: "Featured fashion lookbook",
        },
        {
          image:
            "https://images.unsplash.com/photo-1483985988355-763728e1935b?auto=format&fit=crop&w=1600&q=80",
          imageAlt: "Street style look",
        },
        {
          image:
            "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&w=1600&q=80",
          imageAlt: "Studio campaign look",
        },
        {
          image:
            "https://images.unsplash.com/photo-1509631179647-0177331693ae?auto=format&fit=crop&w=1600&q=80",
          imageAlt: "Runway finish look",
        },
      ],
      category: "Fashion",
      retouching: "Garment cleanup, color, skin",
      deliverables: "Campaign, Lookbook, Social",
    },
    projects: [
      {
        id: "f1",
        title: "Street Style Set",
        category: "Editorial",
        image:
          "https://images.unsplash.com/photo-1483985988355-763728e1935b?auto=format&fit=crop&w=800&q=80",
        imageAlt: "Street style set",
      },
      {
        id: "f2",
        title: "Runway Finish",
        category: "Fashion",
        image:
          "https://images.unsplash.com/photo-1509631179647-0177331693ae?auto=format&fit=crop&w=800&q=80",
        imageAlt: "Runway finish",
      },
      {
        id: "f3",
        title: "Studio Campaign",
        category: "Campaign",
        image:
          "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&w=800&q=80",
        imageAlt: "Studio campaign",
      },
      {
        id: "f4",
        title: "Accessories Edit",
        category: "Product",
        image:
          "https://images.unsplash.com/photo-1492707892479-7bc8d5a4ee93?auto=format&fit=crop&w=800&q=80",
        imageAlt: "Accessories edit",
      },
      {
        id: "f5",
        title: "Color Story",
        category: "Editorial",
        image:
          "https://images.unsplash.com/photo-1487222477894-8943e31ef7b2?auto=format&fit=crop&w=800&q=80",
        imageAlt: "Color story",
      },
      {
        id: "f6",
        title: "Night Look",
        category: "Fashion",
        image:
          "https://images.unsplash.com/photo-1496747611176-843222e1e57c?auto=format&fit=crop&w=800&q=80",
        imageAlt: "Night look",
      },
      {
        id: "f7",
        title: "Boutique Editorial",
        category: "Fashion",
        image:
          "https://images.unsplash.com/photo-1490481651871-ab68de25d43d?auto=format&fit=crop&w=800&q=80",
        imageAlt: "Boutique editorial look",
      },
      {
        id: "f8",
        title: "Wardrobe Story",
        category: "Editorial",
        image:
          "https://images.unsplash.com/photo-1445205170230-053b83016050?auto=format&fit=crop&w=800&q=80",
        imageAlt: "Wardrobe story set",
      },
    ],
    cta: {
      title: "Let's elevate your next campaign.",
      body: "Editorial retouching with clean detail and consistent fashion polish.",
    },
  },
  {
    slug: "product-ecommerce",
    title: "Product & E-commerce",
    pageTitle: "Product & E-commerce Portfolio",
    description:
      "High-end retouching for beauty, lifestyle, and commercial products — clean, consistent, and market-ready.",
    image:
      "https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&w=800&q=80",
    imageAlt: "Product photography sample",
    featured: {
      title: "Sérénité Eau de Parfum",
      description:
        "Clean reflections, natural shadows, and refined product detailing for a premium fragrance campaign.",
      image:
        "https://images.unsplash.com/photo-1541643600914-78b084683601?auto=format&fit=crop&w=1200&q=80",
      imageAlt: "Sérénité perfume bottle",
      gallery: [
        {
          image:
            "https://images.unsplash.com/photo-1541643600914-78b084683601?auto=format&fit=crop&w=1600&q=80",
          imageAlt: "Sérénité perfume bottle",
        },
        {
          image:
            "https://images.unsplash.com/photo-1620916567453-8d70fdf46573?auto=format&fit=crop&w=1600&q=80",
          imageAlt: "Skincare bottle detail",
        },
        {
          image:
            "https://images.unsplash.com/photo-1556228578-0d85b1a4d571?auto=format&fit=crop&w=1600&q=80",
          imageAlt: "Cleanser product detail",
        },
        {
          image:
            "https://images.unsplash.com/photo-1524592094714-0f0654e20314?auto=format&fit=crop&w=1600&q=80",
          imageAlt: "Watch product detail",
        },
      ],
      category: "Fragrance",
      retouching: "Color correction, reflections, shadow",
      deliverables: "Web, Print, Social",
    },
    projects: [
      {
        id: "pr1",
        title: "Luma Skincare",
        category: "Skincare",
        image:
          "https://images.unsplash.com/photo-1620916567453-8d70fdf46573?auto=format&fit=crop&w=800&q=80",
        imageAlt: "Luma skincare bottle",
      },
      {
        id: "pr2",
        title: "Aura Cleanser",
        category: "Beauty",
        image:
          "https://images.unsplash.com/photo-1556228578-0d85b1a4d571?auto=format&fit=crop&w=800&q=80",
        imageAlt: "Aura cleanser",
      },
      {
        id: "pr3",
        title: "Noir Watch",
        category: "Accessories",
        image:
          "https://images.unsplash.com/photo-1524592094714-0f0654e20314?auto=format&fit=crop&w=800&q=80",
        imageAlt: "Noir watch",
      },
      {
        id: "pr4",
        title: "Velvet Bag",
        category: "Fashion",
        image:
          "https://images.unsplash.com/photo-1584917865442-de89df76afd3?auto=format&fit=crop&w=800&q=80",
        imageAlt: "Velvet bag",
      },
      {
        id: "pr5",
        title: "Soft Foundation",
        category: "Makeup",
        image:
          "https://images.unsplash.com/photo-1596462502278-27bfdc403348?auto=format&fit=crop&w=800&q=80",
        imageAlt: "Soft foundation",
      },
      {
        id: "pr6",
        title: "Amber Candle",
        category: "Home",
        image:
          "https://images.unsplash.com/photo-1603006984940-6741d02cd9e2?auto=format&fit=crop&w=800&q=80",
        imageAlt: "Amber candle",
      },
      {
        id: "pr7",
        title: "Retro Camera",
        category: "Tech",
        image:
          "https://images.unsplash.com/photo-1526170375885-4d8ecf77b99f?auto=format&fit=crop&w=800&q=80",
        imageAlt: "Retro camera product",
      },
      {
        id: "pr8",
        title: "Solar Shades",
        category: "Accessories",
        image:
          "https://images.unsplash.com/photo-1572635196237-14b3f281503f?auto=format&fit=crop&w=800&q=80",
        imageAlt: "Solar shades sunglasses",
      },
    ],
    cta: {
      title: "Let's make your products stand out.",
      body: "Premium retouching that elevates your brand and drives results.",
    },
  },
  {
    slug: "smile-profile",
    title: "Smile & Profile Enhancement",
    pageTitle: "Smile & Profile Portfolio",
    description:
      "Subtle dental and profile enhancements that stay true to the subject for natural, confident results.",
    image:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=800&q=80",
    imageAlt: "Smile enhancement sample",
    featured: {
      title: "Natural Smile Refine",
      description:
        "Gentle whitening, alignment polish, and profile balance without losing authenticity.",
      image:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=1200&q=80",
      imageAlt: "Natural smile refine",
      gallery: [
        {
          image:
            "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=1600&q=80",
          imageAlt: "Natural smile refine",
        },
        {
          image:
            "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=1600&q=80",
          imageAlt: "Bright smile detail",
        },
        {
          image:
            "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=1600&q=80",
          imageAlt: "Soft profile detail",
        },
        {
          image:
            "https://images.unsplash.com/photo-1544717297-fa95b6ee9643?auto=format&fit=crop&w=1600&q=80",
          imageAlt: "Warm expression detail",
        },
      ],
      category: "Smile / Portrait",
      retouching: "Dental polish, skin, contour",
      deliverables: "Web, Print, Social",
    },
    projects: [
      {
        id: "s1",
        title: "Bright Smile",
        category: "Dental",
        image:
          "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=800&q=80",
        imageAlt: "Bright smile",
      },
      {
        id: "s2",
        title: "Soft Profile",
        category: "Portrait",
        image:
          "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=800&q=80",
        imageAlt: "Soft profile",
      },
      {
        id: "s3",
        title: "Confidence Edit",
        category: "Lifestyle",
        image:
          "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=800&q=80",
        imageAlt: "Confidence edit",
      },
      {
        id: "s4",
        title: "Clean Headshot",
        category: "Corporate",
        image:
          "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=800&q=80",
        imageAlt: "Clean headshot",
      },
      {
        id: "s5",
        title: "Warm Expression",
        category: "Portrait",
        image:
          "https://images.unsplash.com/photo-1544717297-fa95b6ee9643?auto=format&fit=crop&w=800&q=80",
        imageAlt: "Warm expression",
      },
      {
        id: "s6",
        title: "Detail Refine",
        category: "Beauty",
        image:
          "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?auto=format&fit=crop&w=800&q=80",
        imageAlt: "Detail refine",
      },
      {
        id: "s7",
        title: "Genuine Smile",
        category: "Portrait",
        image:
          "https://images.unsplash.com/photo-1507591064344-4c6ce005b128?auto=format&fit=crop&w=800&q=80",
        imageAlt: "Genuine smile portrait",
      },
      {
        id: "s8",
        title: "Calm Confidence",
        category: "Portrait",
        image:
          "https://images.unsplash.com/photo-1531123897727-8f129e1688ce?auto=format&fit=crop&w=800&q=80",
        imageAlt: "Calm confidence portrait",
      },
    ],
    cta: {
      title: "Let's enhance with care.",
      body: "Subtle smile and profile work that stays natural and true to you.",
    },
  },
];

export function getPortfolioBySlug(slug: string) {
  return portfolioItems.find((item) => item.slug === slug);
}
