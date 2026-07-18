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
      <div className="md:flex md:min-h-[calc(100vh-10rem)] md:flex-col">
        <PageIntro
          title="Portfolio"
          description="A selection of retouching work across portraits, fashion, product, and smile enhancement."
        />
        <div className="md:my-auto">
          <FeaturedPortfolio title="Featured Work" showHeading={false} />
        </div>
        <CtaBanner />
      </div>
    </PageShell>
  );
}
