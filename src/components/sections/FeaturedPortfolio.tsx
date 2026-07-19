"use client";

import { portfolioItems } from "@/data/portfolio";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { CardCarousel } from "@/components/ui/CardCarousel";
import { PortfolioCard } from "@/components/ui/PortfolioCard";
import { PortfolioCarousel } from "@/components/ui/PortfolioCarousel";

type FeaturedPortfolioProps = {
  title?: string;
  showHeading?: boolean;
  /** En móvil muestra el contenido repartido en dos carruseles apilados. */
  mobileTwoRows?: boolean;
};

export function FeaturedPortfolio({
  title = "Portfolio",
  showHeading = true,
  mobileTwoRows = false,
}: FeaturedPortfolioProps) {
  const half = Math.ceil(portfolioItems.length / 2);
  const firstRow = portfolioItems.slice(0, half);
  const secondRow = portfolioItems.slice(half);

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
            href="/portfolio"
            className="my-4 md:my-6"
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
          {mobileTwoRows && secondRow.length > 0 ? (
            <div className="flex flex-col gap-1">
              <PortfolioCarousel items={firstRow} />
              <PortfolioCarousel items={secondRow} />
            </div>
          ) : (
            <PortfolioCarousel items={portfolioItems} />
          )}
        </div>
      </div>
    </section>
  );
}
