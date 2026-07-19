"use client";

import useEmblaCarousel from "embla-carousel-react";
import { Children, useCallback, useEffect, useState } from "react";
import { cn } from "@/lib/cn";

type PeekCarouselProps = {
  children: React.ReactNode;
  slideClassName?: string;
  dotsClassName?: string;
};

export function PeekCarousel({
  children,
  slideClassName = "flex-[0_0_42%]",
  dotsClassName = "mt-3 mb-0",
}: PeekCarouselProps) {
  const originals = Children.toArray(children);
  // Con pocas tarjetas el loop de Embla se desactiva (no llenan el ancho);
  // se repiten hasta tener suficientes para que siempre sea infinito.
  const slides =
    originals.length >= 5
      ? originals
      : Array.from(
          { length: Math.ceil(5 / Math.max(1, originals.length)) },
          () => originals,
        ).flat();

  const [emblaRef, emblaApi] = useEmblaCarousel({
    align: "start",
    loop: true,
  });
  const [selected, setSelected] = useState(0);
  const pageCount = Math.max(1, Math.ceil(slides.length / 2));

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
        <div className="-ml-2.5 flex items-stretch">
          {slides.map((child, index) => (
            <div key={index} className={cn("min-w-0 pl-2.5", slideClassName)}>
              {child}
            </div>
          ))}
        </div>
      </div>
      <div className={cn("flex justify-center gap-1.5", dotsClassName)}>
        {Array.from({ length: pageCount }).map((_, index) => (
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
        ))}
      </div>
    </div>
  );
}
