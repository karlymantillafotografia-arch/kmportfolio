"use client";

import { useMemo } from "react";
import { PortfolioCategoryDesktop } from "@/components/sections/PortfolioCategoryDesktop";
import { PortfolioCategoryMobile } from "@/components/sections/PortfolioCategoryMobile";
import { useLocale } from "@/i18n/LocaleProvider";
import { getPortfolioItems } from "@/i18n/localize";

export function LocalizedPortfolioCategory({ slug }: { slug: string }) {
  const { locale } = useLocale();
  const item = useMemo(
    () => getPortfolioItems(locale).find((entry) => entry.slug === slug),
    [locale, slug],
  );

  if (!item) return null;

  return (
    <>
      <PortfolioCategoryMobile item={item} />
      <PortfolioCategoryDesktop item={item} />
    </>
  );
}
