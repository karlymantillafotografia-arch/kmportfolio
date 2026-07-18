"use client";

import useEmblaCarousel from "embla-carousel-react";
import { Children, useCallback, useEffect, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { cn } from "@/lib/cn";

type CardCarouselProps = {
  children: React.ReactNode;
  /** Clase que controla el ancho de cada tarjeta (por defecto 4 visibles). */
  slideClassName?: string;
};

/** Carrusel infinito genérico que muestra varias tarjetas a la vez. */
export function CardCarousel({
  children,
  slideClassName = "flex-[0_0_23%]",
}: CardCarouselProps) {
  const slides = Children.toArray(children);
  const [emblaRef, emblaApi] = useEmblaCarousel({
    align: "center",
    loop: true,
    slidesToScroll: 1,
  });
  const [selected, setSelected] = useState(0);

  const sync = useCallback(() => {
    if (!emblaApi) return;
    setSelected(emblaApi.selectedScrollSnap());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    sync();
    emblaApi.on("select", sync);
    emblaApi.on("reInit", sync);
    return () => {
      emblaApi.off("select", sync);
      emblaApi.off("reInit", sync);
    };
  }, [emblaApi, sync]);

  const snapCount = emblaApi?.scrollSnapList().length ?? slides.length;

  return (
    <div className="relative">
      <button
        type="button"
        aria-label="Previous cards"
        onClick={() => emblaApi?.scrollPrev()}
        className="absolute top-1/2 left-0 z-10 flex size-10 -translate-y-1/2 items-center justify-center rounded-full border border-border bg-surface text-ink shadow-sm transition"
      >
        <ChevronLeft className="size-5" />
      </button>
      <button
        type="button"
        aria-label="Next cards"
        onClick={() => emblaApi?.scrollNext()}
        className="absolute top-1/2 right-0 z-10 flex size-10 -translate-y-1/2 items-center justify-center rounded-full border border-border bg-surface text-ink shadow-sm transition"
      >
        <ChevronRight className="size-5" />
      </button>

      <div className="overflow-hidden" ref={emblaRef}>
        <div className="-ml-4 flex">
          {slides.map((child, index) => (
            <div key={index} className={cn("min-w-0 pl-4", slideClassName)}>
              {child}
            </div>
          ))}
        </div>
      </div>

      <div className="mt-3 flex justify-center gap-1.5">
        {Array.from({ length: snapCount }).map((_, index) => (
          <button
            key={index}
            type="button"
            aria-label={`Go to card ${index + 1}`}
            className={cn(
              "size-1.5 rounded-full transition-colors",
              selected === index ? "bg-ink" : "bg-border",
            )}
            onClick={() => emblaApi?.scrollTo(index)}
          />
        ))}
      </div>
    </div>
  );
}
