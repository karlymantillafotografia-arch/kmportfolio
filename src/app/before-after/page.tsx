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
      <div className="md:flex md:min-h-[calc(100vh-10rem)] md:flex-col">
        <PageIntro
          title="Before & After"
          description="Drag the slider to compare original captures with finished retouching."
        />
        <div className="md:my-auto">
          <BeforeAfter carousel showHeading={false} showTitles />
        </div>
        <CtaBanner />
      </div>
    </PageShell>
  );
}
