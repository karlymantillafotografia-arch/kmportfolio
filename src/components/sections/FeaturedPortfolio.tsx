"use client";

import { portfolioItems } from "@/data/portfolio";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { PortfolioCard } from "@/components/ui/PortfolioCard";
import { PortfolioCarousel } from "@/components/ui/PortfolioCarousel";

type FeaturedPortfolioProps = {
  title?: string;
};

export function FeaturedPortfolio({
  title = "Featured Portfolio",
}: FeaturedPortfolioProps) {
  return (
    <section id="portfolio" className="scroll-mt-20 px-5 pt-0 pb-0 md:px-8 md:pt-5">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          title={title}
          mobileTitle="Portfolio"
          className="my-4 md:mb-6 md:mt-0"
        />

        <div className="hidden gap-4 md:grid md:grid-cols-2 lg:grid-cols-4 lg:gap-5">
          {portfolioItems.map((item) => (
            <PortfolioCard key={item.slug} item={item} />
          ))}
        </div>

        <div className="md:hidden">
          <PortfolioCarousel items={portfolioItems} />
        </div>
      </div>
    </section>
  );
}
