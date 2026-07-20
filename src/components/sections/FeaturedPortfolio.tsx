"use client";

import { useMemo } from "react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { CardCarousel } from "@/components/ui/CardCarousel";
import { PortfolioCard } from "@/components/ui/PortfolioCard";
import { PortfolioCarousel } from "@/components/ui/PortfolioCarousel";
import { useLocale } from "@/i18n/LocaleProvider";
import { getPortfolioItems } from "@/i18n/localize";

type FeaturedPortfolioProps = {
  title?: string;
  showHeading?: boolean;
  /** En móvil muestra el contenido repartido en dos carruseles apilados. */
  mobileTwoRows?: boolean;
};

export function FeaturedPortfolio({
  title,
  showHeading = true,
  mobileTwoRows = false,
}: FeaturedPortfolioProps) {
  const { locale, t } = useLocale();
  const items = useMemo(() => getPortfolioItems(locale), [locale]);
  const half = Math.ceil(items.length / 2);
  const firstRow = items.slice(0, half);
  const secondRow = items.slice(half);
  const heading = title ?? t.sections.portfolio;

  return (
    <section
      id="portfolio"
      className="scroll-mt-20 px-5 pt-0 pb-0 md:px-8"
    >
      <div className="mx-auto max-w-6xl">
        {showHeading && (
          <SectionHeading
            title={heading}
            mobileTitle={t.sections.portfolio}
            href="/portfolio"
          />
        )}

        <div className="hidden lg:block">
          <CardCarousel>
            {items.map((item) => (
              <PortfolioCard key={item.slug} item={item} />
            ))}
          </CardCarousel>
        </div>

        <div className="lg:hidden">
          {mobileTwoRows && secondRow.length > 0 ? (
            <div className="flex flex-col gap-4 md:gap-5">
              <PortfolioCarousel items={firstRow} />
              <PortfolioCarousel items={secondRow} />
            </div>
          ) : (
            <PortfolioCarousel items={items} />
          )}
        </div>
      </div>
    </section>
  );
}
