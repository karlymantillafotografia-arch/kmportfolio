export type BeforeAfterItem = {
  id: string;
  title: string;
  before: string;
  after: string;
  beforeAlt: string;
  afterAlt: string;
};

export const beforeAfterItems: BeforeAfterItem[] = [
  {
    id: "portrait-1",
    title: "Portrait polish",
    before:
      "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=900&q=80",
    after:
      "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=900&q=80",
    beforeAlt: "Portrait before retouching",
    afterAlt: "Portrait after retouching",
  },
  {
    id: "smile-1",
    title: "Smile enhancement",
    before:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=900&q=80",
    after:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=900&q=80",
    beforeAlt: "Smile before enhancement",
    afterAlt: "Smile after enhancement",
  },
  {
    id: "fashion-1",
    title: "Fashion cleanup",
    before:
      "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?auto=format&fit=crop&w=900&q=80",
    after:
      "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=900&q=80",
    beforeAlt: "Fashion before retouching",
    afterAlt: "Fashion after retouching",
  },
  {
    id: "product-1",
    title: "Product refine",
    before:
      "https://images.unsplash.com/photo-1572635196237-14b3f281503f?auto=format&fit=crop&w=900&q=80",
    after:
      "https://images.unsplash.com/photo-1560343090-f0409e92791a?auto=format&fit=crop&w=900&q=80",
    beforeAlt: "Product before editing",
    afterAlt: "Product after editing",
  },
];
