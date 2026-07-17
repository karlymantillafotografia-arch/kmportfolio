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
      <PageIntro
        title="Portfolio"
        description="A selection of retouching work across portraits, fashion, product, and smile enhancement."
      />
      <FeaturedPortfolio title="Featured Work" />
      <CtaBanner />
    </PageShell>
  );
}
