import Image from "next/image";
import { Sparkles } from "lucide-react";
import type { PortfolioItem } from "@/data/portfolio";
import { Button } from "@/components/ui/Button";
import { ProjectCarousel } from "@/components/ui/ProjectCarousel";

type PortfolioCategoryDesktopProps = {
  item: PortfolioItem;
};

export function PortfolioCategoryDesktop({
  item,
}: PortfolioCategoryDesktopProps) {
  const { featured, projects, cta } = item;

  return (
    <div className="hidden md:block">
      {/* Intro */}
      <section className="mx-auto max-w-3xl px-8 pt-12 pb-10 text-center">
        <p className="text-[11px] font-medium tracking-[0.2em] text-ink-muted uppercase">
          Portfolio
        </p>
        <h1 className="mt-3 font-serif text-4xl text-ink lg:text-[2.75rem]">
          {item.pageTitle}
        </h1>
        <p className="mx-auto mt-4 max-w-xl text-[14px] leading-relaxed text-ink-muted">
          {item.description}
        </p>
        <div className="mt-6 flex flex-wrap items-center justify-center gap-3">
          <Button href="/portfolio" variant="secondary">
            View All Work
          </Button>
          <Button href="/contact" showArrow>
            Start a Project
          </Button>
        </div>
      </section>

      {/* Featured project */}
      <section className="mx-auto max-w-6xl px-8 pb-12">
        <div className="grid overflow-hidden rounded-xl bg-bg-warm md:grid-cols-2">
          <div className="relative min-h-[340px] lg:min-h-[400px]">
            <Image
              src={featured.image}
              alt={featured.imageAlt}
              fill
              priority
              sizes="50vw"
              className="object-cover"
            />
          </div>
          <div className="flex flex-col justify-center px-8 py-8 lg:px-10 lg:py-10">
            <p className="text-[10px] font-medium tracking-[0.18em] text-ink-muted uppercase">
              Featured Project
            </p>
            <h2 className="mt-2 font-serif text-2xl text-ink lg:text-[1.75rem]">
              {featured.title}
            </h2>
            <p className="mt-3 text-[13px] leading-relaxed text-ink-muted">
              {featured.description}
            </p>
            <dl className="mt-6 space-y-2.5 border-t border-border/80 pt-5 text-[13px]">
              <div className="grid grid-cols-[7rem_1fr] gap-3">
                <dt className="text-ink-muted">Category</dt>
                <dd className="text-ink">{featured.category}</dd>
              </div>
              <div className="grid grid-cols-[7rem_1fr] gap-3">
                <dt className="text-ink-muted">Retouching</dt>
                <dd className="text-ink">{featured.retouching}</dd>
              </div>
              <div className="grid grid-cols-[7rem_1fr] gap-3">
                <dt className="text-ink-muted">Deliverables</dt>
                <dd className="text-ink">{featured.deliverables}</dd>
              </div>
            </dl>
            <div className="mt-7">
              <Button href="/contact" variant="secondary" showArrow>
                View Project Details
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Project carousel */}
      <section className="mx-auto max-w-6xl px-8 pb-12">
        <ProjectCarousel projects={projects} />
      </section>

      {/* Category CTA */}
      <section className="px-8 pb-10">
        <div className="mx-auto flex max-w-6xl items-center justify-between gap-6 rounded-xl bg-bg-warm px-6 py-5">
          <div className="flex size-10 shrink-0 items-center justify-center rounded-full bg-surface text-ink">
            <Sparkles className="size-4" strokeWidth={1.5} />
          </div>
          <div className="min-w-0 flex-1">
            <h2 className="font-serif text-xl text-ink">{cta.title}</h2>
            <p className="mt-1 text-[13px] text-ink-muted">{cta.body}</p>
          </div>
          <Button href="/contact" showArrow className="shrink-0">
            Start a Project
          </Button>
        </div>
      </section>
    </div>
  );
}
