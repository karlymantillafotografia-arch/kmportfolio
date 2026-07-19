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
  // Con pocas tarjetas el loop de Embla se desactiva (no llenan el ancho);
  // se repiten los items hasta tener suficientes para que siempre sea infinito.
  const slides =
    items.length >= 6
      ? items
      : Array.from(
          { length: Math.ceil(6 / Math.max(1, items.length)) },
          () => items,
        ).flat();

  const [emblaRef, emblaApi] = useEmblaCarousel({
    align: "start",
    loop: true,
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
      {/* Separación con pl + -ml para que el gap se mantenga en el salto del loop */}
      <div className="overflow-hidden" ref={emblaRef}>
        <div className="-ml-2.5 flex items-start">
          {slides.map((item, index) => (
            <div
              key={`${item.slug}-${index}`}
              className="min-w-0 flex-[0_0_42%] pl-2.5"
            >
              <PortfolioCard item={item} className="w-full" />
            </div>
          ))}
        </div>
      </div>
      <div className="my-3 flex justify-center gap-1.5">
        {Array.from({ length: Math.max(1, Math.ceil(slides.length / 2)) }).map(
          (_, index) => (
            <button
              key={index}
              type="button"
              aria-label={`Go to slide ${index + 1}`}
              className={cn(
                "size-1.5 rounded-full transition-colors",
                Math.floor(selected / 2) === index ? "bg-ink" : "bg-border",
              )}
              onClick={() => emblaApi?.scrollTo(index * 2)}
            />
          ),
        )}
      </div>
    </div>
  );
}
