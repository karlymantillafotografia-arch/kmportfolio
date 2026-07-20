"use client";

import { PageShell } from "@/components/layout/PageShell";
import { PageIntro } from "@/components/ui/PageIntro";
import { FeaturedPortfolio } from "@/components/sections/FeaturedPortfolio";
import { useLocale } from "@/i18n/LocaleProvider";

export default function PortfolioPage() {
  const { t } = useLocale();

  return (
    <PageShell>
      <div className="flex flex-1 flex-col">
        <PageIntro
          title={t.pages.portfolioTitle}
          description={t.pages.portfolioDesc}
        />
        <div className="my-auto pt-2 md:pt-0">
          <FeaturedPortfolio
            title={t.sections.featuredWork}
            showHeading={false}
            mobileTwoRows
          />
        </div>
      </div>
    </PageShell>
  );
}
