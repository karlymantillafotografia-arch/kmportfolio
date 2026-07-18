"use client";

import Image from "next/image";
import useEmblaCarousel from "embla-carousel-react";
import { useCallback, useEffect, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import type { PortfolioProject } from "@/data/portfolio";
import { cn } from "@/lib/cn";

type ProjectCarouselProps = {
  projects: PortfolioProject[];
};

export function ProjectCarousel({ projects }: ProjectCarouselProps) {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    align: "start",
    containScroll: "trimSnaps",
    slidesToScroll: 1,
  });
  const [selected, setSelected] = useState(0);
  const [canPrev, setCanPrev] = useState(false);
  const [canNext, setCanNext] = useState(false);

  const sync = useCallback(() => {
    if (!emblaApi) return;
    setSelected(emblaApi.selectedScrollSnap());
    setCanPrev(emblaApi.canScrollPrev());
    setCanNext(emblaApi.canScrollNext());
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

  const snapCount = emblaApi?.scrollSnapList().length ?? projects.length;

  return (
    <div className="relative">
      <button
        type="button"
        aria-label="Previous projects"
        disabled={!canPrev}
        onClick={() => emblaApi?.scrollPrev()}
        className="absolute top-1/2 left-0 z-10 flex size-10 -translate-y-[120%] items-center justify-center rounded-full border border-border bg-surface text-ink shadow-sm transition disabled:opacity-30"
      >
        <ChevronLeft className="size-5" />
      </button>
      <button
        type="button"
        aria-label="Next projects"
        disabled={!canNext}
        onClick={() => emblaApi?.scrollNext()}
        className="absolute top-1/2 right-0 z-10 flex size-10 -translate-y-[120%] items-center justify-center rounded-full border border-border bg-surface text-ink shadow-sm transition disabled:opacity-30"
      >
        <ChevronRight className="size-5" />
      </button>

      <div className="overflow-hidden px-12" ref={emblaRef}>
        <div className="flex gap-4">
          {projects.map((project) => (
            <article
              key={project.id}
              className="min-w-0 flex-[0_0_calc((100%-5rem)/6)]"
            >
              <div className="relative aspect-square overflow-hidden rounded-lg bg-bg-warm">
                <Image
                  src={project.image}
                  alt={project.imageAlt}
                  fill
                  sizes="16vw"
                  className="object-cover"
                />
              </div>
              <h3 className="mt-2.5 font-serif text-[14px] text-ink">
                {project.title}
              </h3>
              <p className="mt-0.5 text-[12px] text-ink-muted">
                {project.category}
              </p>
            </article>
          ))}
        </div>
      </div>

      <div className="mt-3 flex justify-center gap-1.5">
        {Array.from({ length: snapCount }).map((_, index) => (
          <button
            key={index}
            type="button"
            aria-label={`Go to slide ${index + 1}`}
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
