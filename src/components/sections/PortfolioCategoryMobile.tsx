"use client";

import { useEffect, useMemo, useState } from "react";
import { motion } from "framer-motion";
import type { PortfolioItem, PortfolioProject } from "@/data/portfolio";
import { Button } from "@/components/ui/Button";
import { ImageLightbox } from "@/components/ui/ImageLightbox";
import { ProjectCarousel } from "@/components/ui/ProjectCarousel";
import { useLocale } from "@/i18n/LocaleProvider";

type PortfolioCategoryMobileProps = {
  item: PortfolioItem;
};

const FALLBACK_DESCRIPTION =
  "Detailed retouching with natural texture, balanced color, and a clean, polished finish.";
const FALLBACK_DELIVERABLES = "Web, Print, Social";

function toHiRes(url: string) {
  return url.replace("w=800", "w=1600");
}

function galleryFor(project: PortfolioProject, all: PortfolioProject[]) {
  if (project.gallery) return project.gallery;
  const index = all.findIndex((entry) => entry.id === project.id);
  return [0, 1, 2].map((offset) => {
    const source = all[(index + offset) % all.length];
    return { image: toHiRes(source.image), imageAlt: source.imageAlt };
  });
}

export function PortfolioCategoryMobile({ item }: PortfolioCategoryMobileProps) {
  const { t } = useLocale();
  const { featured, projects } = item;

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

  // Precarga todas las galerías para que el cambio de proyecto sea instantáneo
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
    <section className="mx-auto max-w-6xl px-5 pt-2 pb-6 md:hidden">
      <div className="mb-3 text-center">
        <h1 className="font-serif text-xl text-ink">{item.pageTitle}</h1>
        <p className="mx-auto mt-1 max-w-md text-[12px] leading-snug text-ink-muted">
          {item.description}
        </p>
      </div>

      {/* Tarjeta pastel: imagen + información del proyecto seleccionado */}
      <div className="overflow-hidden rounded-xl bg-bg-warm">
        <div className="relative aspect-[4/3]">
          <ImageLightbox
            key={selected.id}
            images={gallery.map((entry) => ({
              src: entry.image,
              alt: entry.imageAlt,
            }))}
            priority
            sizes="100vw"
          />
        </div>

        <motion.div
          key={selected.id}
          initial={{ opacity: 0, y: 6 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.25 }}
          className="px-4 py-4"
        >
          <p className="text-[8px] font-medium tracking-[0.18em] text-ink-muted uppercase">
            {t.portfolioUi.featured}
          </p>
          <h2 className="mt-1 font-serif text-base text-ink">
            {selected.title}
          </h2>
          <p className="mt-1.5 text-[11px] leading-snug text-ink-muted">
            {selected.description ?? FALLBACK_DESCRIPTION}
          </p>
          <dl className="mt-3 space-y-1.5 border-t border-border/80 pt-3 text-[10px]">
            <div className="grid grid-cols-[5.5rem_1fr] gap-2">
              <dt className="text-ink-muted">{t.portfolioUi.category}</dt>
              <dd className="text-ink">{selected.category}</dd>
            </div>
            <div className="grid grid-cols-[5.5rem_1fr] gap-2">
              <dt className="text-ink-muted">{t.portfolioUi.retouching}</dt>
              <dd className="text-ink">
                {selected.retouching ?? featured.retouching}
              </dd>
            </div>
            <div className="grid grid-cols-[5.5rem_1fr] gap-2">
              <dt className="text-ink-muted">{t.portfolioUi.deliverables}</dt>
              <dd className="text-ink">
                {selected.deliverables ?? FALLBACK_DELIVERABLES}
              </dd>
            </div>
          </dl>
        </motion.div>
      </div>

      <div className="mt-4">
        <ProjectCarousel
          projects={carouselProjects}
          onSelect={(project) => setSelectedId(project.id)}
          compact
          slideClassName="flex-[0_0_30%]"
        />
      </div>

      <div className="mt-4 flex flex-wrap justify-center gap-2.5">
        <Button
          href="/portfolio"
          variant="secondary"
          className="px-3 py-1.5 text-[11px]"
        >
          {t.portfolioUi.back}
        </Button>
        <Button href="/contact" showArrow className="px-3 py-1.5 text-[11px]">
          {t.portfolioUi.start}
        </Button>
      </div>
    </section>
  );
}
