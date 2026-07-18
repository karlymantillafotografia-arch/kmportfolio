"use client";

import { useEffect, useMemo, useState } from "react";
import { Sparkles } from "lucide-react";
import { motion } from "framer-motion";
import type { PortfolioItem, PortfolioProject } from "@/data/portfolio";
import { Button } from "@/components/ui/Button";
import { ImageLightbox } from "@/components/ui/ImageLightbox";
import { ProjectCarousel } from "@/components/ui/ProjectCarousel";

type PortfolioCategoryDesktopProps = {
  item: PortfolioItem;
};

const FALLBACK_DESCRIPTION =
  "Detailed retouching with natural texture, balanced color, and a clean, polished finish.";
const FALLBACK_DELIVERABLES = "Web, Print, Social";

function toHiRes(url: string) {
  return url.replace("w=800", "w=1600");
}

/**
 * Projects without an explicit gallery get a 3-image one built from their own
 * photo plus the next two projects in the list, so the lightbox always
 * behaves as a carousel.
 */
function galleryFor(project: PortfolioProject, all: PortfolioProject[]) {
  if (project.gallery) return project.gallery;
  const index = all.findIndex((entry) => entry.id === project.id);
  return [0, 1, 2].map((offset) => {
    const source = all[(index + offset) % all.length];
    return { image: toHiRes(source.image), imageAlt: source.imageAlt };
  });
}

export function PortfolioCategoryDesktop({
  item,
}: PortfolioCategoryDesktopProps) {
  const { featured, projects, cta } = item;

  const allProjects = useMemo<PortfolioProject[]>(
    () => [
      {
        id: "featured",
        title: featured.title,
        category: featured.category,
        image: featured.image,
        imageAlt: featured.imageAlt,
        description: featured.description,
        retouching: featured.retouching,
        deliverables: featured.deliverables,
        gallery: featured.gallery,
      },
      ...projects,
    ],
    [featured, projects],
  );

  const [selectedId, setSelectedId] = useState(allProjects[0].id);
  const selected =
    allProjects.find((project) => project.id === selectedId) ?? allProjects[0];
  const carouselProjects = allProjects.filter(
    (project) => project.id !== selected.id,
  );

  const gallery = galleryFor(selected, allProjects);

  // Preload every gallery image so swapping projects and browsing the
  // lightbox feels instant.
  useEffect(() => {
    const sources = new Set(
      allProjects.flatMap((project) =>
        galleryFor(project, allProjects).map((entry) => entry.image),
      ),
    );
    sources.forEach((src) => {
      const img = new window.Image();
      img.src = src;
    });
  }, [allProjects]);

  return (
    <div className="hidden md:block">
      {/* Intro */}
      <section className="mx-auto max-w-3xl px-8 pt-5 pb-5 text-center">
        <h1 className="font-serif text-3xl text-ink lg:text-[2.25rem]">
          {item.pageTitle}
        </h1>
        <p className="mx-auto mt-2.5 max-w-xl text-[13px] leading-relaxed text-ink-muted">
          {item.description}
        </p>
      </section>

      {/* Featured project */}
      <section className="mx-auto max-w-6xl px-8 pb-7">
        <div className="grid overflow-hidden rounded-xl bg-bg-warm md:grid-cols-2">
          <div className="relative min-h-[350px] lg:min-h-[390px]">
            <ImageLightbox
              key={selected.id}
              images={gallery.map((entry) => ({
                src: entry.image,
                alt: entry.imageAlt,
              }))}
              priority
              sizes="50vw"
            />
          </div>
          <motion.div
            key={selected.id}
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.25 }}
            className="flex flex-col justify-center px-8 py-6 lg:px-10 lg:py-7"
          >
            <p className="text-[10px] font-medium tracking-[0.18em] text-ink-muted uppercase">
              Featured Project
            </p>
            <h2 className="mt-1.5 font-serif text-xl text-ink lg:text-2xl">
              {selected.title}
            </h2>
            <p className="mt-2 text-[13px] leading-relaxed text-ink-muted">
              {selected.description ?? FALLBACK_DESCRIPTION}
            </p>
            <dl className="mt-4 space-y-2 border-t border-border/80 pt-4 text-[12px]">
              <div className="grid grid-cols-[7rem_1fr] gap-3">
                <dt className="text-ink-muted">Category</dt>
                <dd className="text-ink">{selected.category}</dd>
              </div>
              <div className="grid grid-cols-[7rem_1fr] gap-3">
                <dt className="text-ink-muted">Retouching</dt>
                <dd className="text-ink">
                  {selected.retouching ?? featured.retouching}
                </dd>
              </div>
              <div className="grid grid-cols-[7rem_1fr] gap-3">
                <dt className="text-ink-muted">Deliverables</dt>
                <dd className="text-ink">
                  {selected.deliverables ?? FALLBACK_DELIVERABLES}
                </dd>
              </div>
            </dl>
            <div className="mt-5">
              <Button href="/contact" variant="secondary" showArrow>
                View Project Details
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Project carousel */}
      <section className="mx-auto max-w-6xl px-8 pb-7">
        <ProjectCarousel
          projects={carouselProjects}
          onSelect={(project) => setSelectedId(project.id)}
        />
      </section>

      {/* Category CTA */}
      <section className="px-8 pb-7">
        <div className="mx-auto flex max-w-6xl items-center justify-between gap-6 rounded-xl bg-bg-warm px-6 py-4">
          <div className="flex size-10 shrink-0 items-center justify-center rounded-full bg-surface text-ink">
            <Sparkles className="size-4" strokeWidth={1.5} />
          </div>
          <div className="min-w-0 flex-1">
            <h2 className="font-serif text-lg text-ink">{cta.title}</h2>
            <p className="mt-0.5 text-[12px] text-ink-muted">{cta.body}</p>
          </div>
          <Button href="/contact" showArrow className="shrink-0">
            Start a Project
          </Button>
        </div>
      </section>
    </div>
  );
}
