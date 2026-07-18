export type Review = {
  id: string;
  name: string;
  /** Si falta, se muestra un círculo con la inicial del nombre. */
  avatar?: string;
  text: string;
  /** Enlace de verificación propio; si falta se usa el perfil general. */
  url?: string;
};

export const reviews: Review[] = [
  {
    id: "r1",
    // TODO: reemplazar por el nombre real del cliente de esta reseña.
    name: "Upwork Client",
    text: "We are looking to hire here soon. She is very responsive, excellent job.",
    url: "https://www.upwork.com/ab/g/pub/wom/prx/eyJwZXJzb25VaWQiOiIxNjMyNTQ5ODg2MDE4NTMxMzI4IiwiY29udHJhY3RSaWQiOiIzOTk5Njg0OSIsImJhbm5lclR5cGUiOiJjb250cmFjdCIsImJhbm5lclZhcmlhbnQiOiJkZWZhdWx0Iiwid29tIjoiZmx2MiIsInJlZGlyZWN0IjoiZmxfcHJvZmlsZV9wcm9tbyJ9?network=linkedin",
  },
  {
    id: "r2",
    name: "Daniel R.",
    avatar:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&q=80",
    text: "Amazing attention to detail and color work. She enhanced our campaign images beautifully while keeping them natural.",
  },
  {
    id: "r3",
    name: "Sophie T.",
    avatar:
      "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=200&q=80",
    text: "Professional, responsive, and incredibly talented. Karly is our go-to retoucher for all client projects.",
  },
  {
    id: "r4",
    name: "Marcus L.",
    avatar:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=200&q=80",
    text: "Fast turnaround and flawless product retouching. Our e-commerce photos have never looked better.",
  },
  {
    id: "r5",
    name: "Elena V.",
    avatar:
      "https://images.unsplash.com/photo-1544717297-fa95b6ee9643?auto=format&fit=crop&w=200&q=80",
    text: "She elevated our editorial series with a subtle, consistent grade. Communication was smooth from start to finish.",
  },
  {
    id: "r6",
    name: "James K.",
    avatar:
      "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=200&q=80",
    text: "Great eye for natural skin texture. Delivered exactly what our brand needed, on every single batch.",
  },
];
