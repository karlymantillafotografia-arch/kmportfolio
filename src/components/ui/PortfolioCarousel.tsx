"use client";

import useEmblaCarousel from "embla-carousel-react";
import { useCallback, useEffect, useState } from "react";
import type { PortfolioItem } from "@/data/portfolio";
import { PortfolioCard } from "@/components/ui/PortfolioCard";
import { cn } from "@/lib/cn";

type PortfolioCarouselProps = {
  items: PortfolioItem[];
};

export function PortfolioCarousel({ items }: PortfolioCarouselProps) {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    align: "start",
    containScroll: "trimSnaps",
  });
  const [selected, setSelected] = useState(0);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelected(emblaApi.selectedScrollSnap());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    emblaApi.on("select", onSelect);
    emblaApi.on("reInit", onSelect);
    return () => {
      emblaApi.off("select", onSelect);
      emblaApi.off("reInit", onSelect);
    };
  }, [emblaApi, onSelect]);

  return (
    <div>
      <div className="overflow-hidden" ref={emblaRef}>
        <div className="flex gap-4">
          {items.map((item) => (
            <div key={item.slug} className="min-w-0 flex-[0_0_82%]">
              <PortfolioCard item={item} />
            </div>
          ))}
        </div>
      </div>
      <div className="mt-5 flex justify-center gap-2">
        {items.map((item, index) => (
          <button
            key={item.slug}
            type="button"
            aria-label={`Go to slide ${index + 1}`}
            className={cn(
              "size-2 rounded-full transition-colors",
              selected === index ? "bg-ink" : "bg-border",
            )}
            onClick={() => emblaApi?.scrollTo(index)}
          />
        ))}
      </div>
    </div>
  );
}
