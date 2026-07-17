export type VideoItem = {
  id: string;
  title: string;
  description: string;
  duration: string;
  thumbnail: string;
  href: string;
};

export const videos: VideoItem[] = [
  {
    id: "portrait-process",
    title: "Portrait Retouching Process",
    description: "A walkthrough of natural skin refinement and finishing.",
    duration: "04:32",
    thumbnail:
      "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=900&q=80",
    href: "#",
  },
  {
    id: "product-workflow",
    title: "Product Editing Workflow",
    description: "How to keep e-commerce sets clean and consistent.",
    duration: "04:12",
    thumbnail:
      "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=900&q=80",
    href: "#",
  },
  {
    id: "frequency-separation",
    title: "Frequency Separation Tips",
    description: "Practical technique notes for smoother, natural results.",
    duration: "06:18",
    thumbnail:
      "https://images.unsplash.com/photo-1558655146-d09347e92766?auto=format&fit=crop&w=900&q=80",
    href: "#",
  },
];
