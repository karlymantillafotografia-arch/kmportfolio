import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import type { PortfolioItem } from "@/data/portfolio";
import { cn } from "@/lib/cn";

type PortfolioCardProps = {
  item: PortfolioItem;
  className?: string;
};

export function PortfolioCard({ item, className }: PortfolioCardProps) {
  return (
    <article
      className={cn(
        "group overflow-hidden rounded-md bg-bg-warm",
        className,
      )}
    >
      <Link
        href={`/portfolio/${item.slug}`}
        className="relative block aspect-[3/2] overflow-hidden bg-bg-warm"
      >
        <Image
          src={item.image}
          alt={item.imageAlt}
          fill
          sizes="(max-width: 768px) 80vw, 22vw"
          className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
        />
      </Link>

      <div className="flex flex-col gap-2 px-4 pt-3.5 pb-4">
        <h3 className="font-serif text-[15px] leading-snug text-ink md:text-base">
          {item.title}
        </h3>
        <Link
          href={`/portfolio/${item.slug}`}
          className="inline-flex w-fit items-center gap-1 text-[10px] tracking-[0.12em] text-ink-muted uppercase transition-colors hover:text-ink"
        >
          View Work
          <ArrowRight className="size-3" aria-hidden />
        </Link>
      </div>
    </article>
  );
}
