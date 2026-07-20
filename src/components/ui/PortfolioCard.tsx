"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import type { PortfolioItem } from "@/data/portfolio";
import { useLocale } from "@/i18n/LocaleProvider";
import { cn } from "@/lib/cn";

type PortfolioCardProps = {
  item: PortfolioItem;
  className?: string;
};

export function PortfolioCard({ item, className }: PortfolioCardProps) {
  const { t } = useLocale();

  return (
    <article
      className={cn(
        "group flex aspect-square w-full flex-col overflow-hidden rounded-md bg-bg-warm md:aspect-auto md:h-full",
        className,
      )}
    >
      <Link
        href={`/portfolio/${item.slug}`}
        className="relative min-h-0 w-full flex-1 overflow-hidden bg-bg-warm md:aspect-[3/2] md:flex-none"
      >
        <Image
          src={item.image}
          alt={item.imageAlt}
          fill
          sizes="(max-width: 768px) 50vw, 22vw"
          className="object-cover object-top transition-transform duration-500 group-hover:scale-[1.03] md:object-center"
        />
      </Link>

      <div className="flex h-[3.35rem] shrink-0 flex-col justify-between px-3 py-1.5 md:h-auto md:gap-2 md:px-4 md:py-3">
        <h3 className="line-clamp-2 font-serif text-[13px] leading-[1.2] text-ink md:text-base md:leading-snug">
          {item.title}
        </h3>
        <Link
          href={`/portfolio/${item.slug}`}
          className="inline-flex w-fit items-center gap-1 text-[10px] leading-none tracking-[0.12em] text-ink-muted uppercase transition-colors hover:text-ink"
          aria-label={`${t.portfolioUi.viewWork}: ${item.title}`}
        >
          <span className="hidden md:inline">{t.portfolioUi.viewWork}</span>
          <ArrowRight
            className="size-3.5 text-ink md:size-3 md:text-ink-muted"
            aria-hidden
          />
        </Link>
      </div>
    </article>
  );
}
