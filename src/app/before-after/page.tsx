import type { Metadata } from "next";
import { PageShell } from "@/components/layout/PageShell";
import { PageIntro } from "@/components/ui/PageIntro";
import { BeforeAfter } from "@/components/sections/BeforeAfter";
import { CtaBanner } from "@/components/sections/CtaBanner";

export const metadata: Metadata = {
  title: "Before & After",
  description:
    "Interactive before-and-after comparisons of professional photo retouching.",
};

export default function BeforeAfterPage() {
  return (
    <PageShell>
      {/* Columna a pantalla completa: intro arriba, carrusel centrado y CTA abajo */}
      <div className="flex min-h-[calc(100dvh-10rem)] flex-col">
        <PageIntro
          title="Before & After"
          description="Drag the slider to compare original captures with finished retouching."
        />
        <div className="pt-2 md:my-auto md:pt-0">
          <BeforeAfter carousel showHeading={false} showTitles mobileTwoRows />
        </div>
        <CtaBanner />
      </div>
    </PageShell>
  );
}
