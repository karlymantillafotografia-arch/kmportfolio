import type { Metadata } from "next";
import Image from "next/image";
import { notFound } from "next/navigation";
import { getPortfolioBySlug, portfolioItems } from "@/data/portfolio";
import { PageShell } from "@/components/layout/PageShell";
import { Button } from "@/components/ui/Button";
import { CtaBanner } from "@/components/sections/CtaBanner";
import { PortfolioCategoryDesktop } from "@/components/sections/PortfolioCategoryDesktop";

type PageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return portfolioItems.map((item) => ({ slug: item.slug }));
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const item = getPortfolioBySlug(slug);
  if (!item) return { title: "Portfolio" };
  return {
    title: item.title,
    description: item.description,
  };
}

export default async function PortfolioDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const item = getPortfolioBySlug(slug);
  if (!item) notFound();

  return (
    <PageShell>
      {/* Mobile: layout actual */}
      <section className="mx-auto grid max-w-6xl gap-6 px-5 py-8 md:hidden">
        <div className="relative aspect-[5/4] overflow-hidden rounded-lg bg-surface-muted">
          <Image
            src={item.image}
            alt={item.imageAlt}
            fill
            priority
            sizes="100vw"
            className="object-cover"
          />
        </div>
        <div>
          <p className="text-[10px] tracking-[0.2em] text-ink-muted uppercase">
            Portfolio
          </p>
          <h1 className="mt-2 font-serif text-3xl text-ink">{item.title}</h1>
          <p className="mt-3 max-w-md text-[13px] leading-relaxed text-ink-muted">
            {item.description}
          </p>
          <div className="mt-5 flex flex-wrap gap-2.5">
            <Button href="/portfolio" variant="secondary">
              Back to Portfolio
            </Button>
            <Button href="/contact" showArrow>
              Start a Project
            </Button>
          </div>
        </div>
      </section>
      <div className="md:hidden">
        <CtaBanner />
      </div>

      {/* Desktop: mockup nuevo */}
      <PortfolioCategoryDesktop item={item} />
    </PageShell>
  );
}
