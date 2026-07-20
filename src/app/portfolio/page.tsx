import type { Metadata } from "next";
import { PageShell } from "@/components/layout/PageShell";
import { PageIntro } from "@/components/ui/PageIntro";
import { FeaturedPortfolio } from "@/components/sections/FeaturedPortfolio";

export const metadata: Metadata = {
  title: "Portfolio",
  description:
    "Featured retouching work across portraits, fashion, product, and smile enhancement.",
};

export default function PortfolioPage() {
  return (
    <PageShell>
      <div className="flex flex-1 flex-col">
        <PageIntro
          title="Portfolio"
          description="A selection of retouching work across portraits, fashion, product, and smile enhancement."
        />
        <div className="my-auto pt-2 md:pt-0">
          <FeaturedPortfolio
            title="Featured Work"
            showHeading={false}
            mobileTwoRows
          />
        </div>
      </div>
    </PageShell>
  );
}
