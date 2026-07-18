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
  dotsClassName = "my-3",
}: PeekCarouselProps) {
  const slides = Children.toArray(children);
  const [emblaRef, emblaApi] = useEmblaCarousel({
    align: "start",
    containScroll: "trimSnaps",
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
      <div className="overflow-hidden" ref={emblaRef}>
        <div className="flex items-stretch gap-2.5">
          {slides.map((child, index) => (
            <div key={index} className={cn("min-w-0", slideClassName)}>
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
