export type ServiceItem = {
  id: string;
  title: string;
  description: string;
  icon: "portrait" | "fashion" | "product" | "ai" | "batch" | "consulting";
};

export const services: ServiceItem[] = [
  {
    id: "portrait",
    title: "Portrait Retouching",
    description: "Natural skin work and refined portrait finishing.",
    icon: "portrait",
  },
  {
    id: "fashion",
    title: "Fashion & Editorial",
    description: "Editorial polish for campaigns and lookbooks.",
    icon: "fashion",
  },
  {
    id: "product",
    title: "Product & E-commerce",
    description: "Consistent product imagery for online stores.",
    icon: "product",
  },
  {
    id: "ai",
    title: "AI Image Enhancement",
    description: "Smart cleanup paired with careful manual finishing.",
    icon: "ai",
  },
  {
    id: "batch",
    title: "Batch Editing",
    description: "Efficient volume editing with consistent quality.",
    icon: "batch",
  },
  {
    id: "consulting",
    title: "Personalized Consulting",
    description: "Mentorship to sharpen skills and grow your business.",
    icon: "consulting",
  },
];

export const featuredServiceIds = ["portrait", "fashion", "product"] as const;
