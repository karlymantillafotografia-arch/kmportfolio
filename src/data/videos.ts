export type VideoItem = {
  id: string;
  title: string;
  description: string;
  duration: string;
  thumbnail: string;
  href: string;
  /** Si existe, el video se reproduce embebido en la página. */
  youtubeId?: string;
};

export const videos: VideoItem[] = [
  {
    id: "skin-retouching",
    title: "Retoque de Piel Avanzado en Photoshop",
    description: "Advanced skin retouching walkthrough in under 4 minutes.",
    duration: "04:39",
    thumbnail: "https://i.ytimg.com/vi/OMhfnFVuL-M/hqdefault.jpg",
    href: "https://www.youtube.com/watch?v=OMhfnFVuL-M",
    youtubeId: "OMhfnFVuL-M",
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
  {
    id: "color-grading",
    title: "Color Grading Essentials",
    description: "Balance tones and mood for polished, delivery-ready images.",
    duration: "05:04",
    thumbnail:
      "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?auto=format&fit=crop&w=900&q=80",
    href: "#",
  },
  {
    id: "beauty-cleanup",
    title: "Clean Beauty Retouching Basics",
    description: "Fundamentals for flawless yet natural beauty images.",
    duration: "05:41",
    thumbnail:
      "https://images.unsplash.com/photo-1526170375885-4d8ecf77b99f?auto=format&fit=crop&w=900&q=80",
    href: "#",
  },
  {
    id: "batch-lightroom",
    title: "Batch Editing in Lightroom",
    description: "Speed up volume editing without losing consistency.",
    duration: "07:02",
    thumbnail:
      "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?auto=format&fit=crop&w=900&q=80",
    href: "#",
  },
];
