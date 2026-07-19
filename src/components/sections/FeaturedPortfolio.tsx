"use client";

import { portfolioItems } from "@/data/portfolio";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { CardCarousel } from "@/components/ui/CardCarousel";
import { PortfolioCard } from "@/components/ui/PortfolioCard";
import { PortfolioCarousel } from "@/components/ui/PortfolioCarousel";

type FeaturedPortfolioProps = {
  title?: string;
  showHeading?: boolean;
};

export function FeaturedPortfolio({
  title = "Portfolio",
  showHeading = true,
}: FeaturedPortfolioProps) {
  return (
    <section
      id="portfolio"
      className={
        showHeading
          ? "scroll-mt-20 px-5 pt-0 pb-0 md:px-8 md:pt-5"
          : "scroll-mt-20 px-5 pt-0 pb-0 md:px-8"
      }
    >
      <div className="mx-auto max-w-6xl">
        {showHeading && (
          <SectionHeading
            title={title}
            mobileTitle="Portfolio"
            className="my-4 md:mb-6 md:mt-0"
          />
        )}

        <div className="hidden md:block">
          <CardCarousel>
            {portfolioItems.map((item) => (
              <PortfolioCard key={item.slug} item={item} />
            ))}
          </CardCarousel>
        </div>

        <div className="md:hidden">
          <PortfolioCarousel items={portfolioItems} />
        </div>
      </div>
    </section>
  );
}
