export type PortfolioItem = {
  slug: string;
  title: string;
  description: string;
  image: string;
  imageAlt: string;
};

export const portfolioItems: PortfolioItem[] = [
  {
    slug: "portrait-retouching",
    title: "Portrait Retouching",
    description:
      "Natural skin refinement, frequency separation, and polished portrait finishes.",
    image:
      "https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?auto=format&fit=crop&w=800&q=80",
    imageAlt: "Portrait retouching sample",
  },
  {
    slug: "fashion-editorial",
    title: "Fashion & Editorial",
    description:
      "High-end fashion cleanup with refined color, texture, and editorial polish.",
    image:
      "https://images.unsplash.com/photo-1469334031218-e382a71b716b?auto=format&fit=crop&w=800&q=80",
    imageAlt: "Fashion editorial sample",
  },
  {
    slug: "product-ecommerce",
    title: "Product & E-commerce",
    description:
      "Clean product cuts, consistent lighting, and marketplace-ready imagery.",
    image:
      "https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&w=800&q=80",
    imageAlt: "Product photography sample",
  },
  {
    slug: "smile-profile",
    title: "Smile & Profile Enhancement",
    description:
      "Subtle dental and profile enhancements that stay true to the subject.",
    image:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=800&q=80",
    imageAlt: "Smile enhancement sample",
  },
];

export function getPortfolioBySlug(slug: string) {
  return portfolioItems.find((item) => item.slug === slug);
}
