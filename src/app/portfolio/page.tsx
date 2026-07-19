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
          className="pt-5 md:pt-10"
        />
        <div className="my-auto pt-8 md:pt-0">
          <FeaturedPortfolio title="Featured Work" showHeading={false} />
        </div>
        <CtaBanner mobileBoxed />
      </div>
    </PageShell>
  );
}
