import type { Metadata } from "next";
import { PageShell } from "@/components/layout/PageShell";
import { PageIntro } from "@/components/ui/PageIntro";
import { FeaturedPortfolio } from "@/components/sections/FeaturedPortfolio";
import { CtaBanner } from "@/components/sections/CtaBanner";

export const metadata: Metadata = {
  title: "Portfolio",
  description:
    "Featured retouching work across portraits, fashion, product, and smile enhancement.",
};

export default function PortfolioPage() {
  return (
    <PageShell>
      {/* Columna a pantalla completa: intro arriba, carrusel centrado y CTA abajo */}
      <div className="flex min-h-[calc(100dvh-10rem)] flex-col">
        <PageIntro
          title="Portfolio"
          description="A selection of retouching work across portraits, fashion, product, and smile enhancement."
        />
        <div className="pt-2 md:my-auto md:pt-0">
          <FeaturedPortfolio
            title="Featured Work"
            showHeading={false}
            mobileTwoRows
          />
        </div>
        <CtaBanner />
      </div>
    </PageShell>
  );
}
