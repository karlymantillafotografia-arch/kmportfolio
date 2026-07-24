import type { Locale } from "@/i18n/config";

type L = Record<Locale, string>;

export const toolNames: { short: string; name: L }[] = [
  { short: "Ps", name: { en: "Photoshop", es: "Photoshop" } },
  { short: "Lr", name: { en: "Lightroom", es: "Lightroom" } },
  { short: "Cr", name: { en: "Camera Raw", es: "Camera Raw" } },
  { short: "AI", name: { en: "AI Tools", es: "AI Tools" } },
];
