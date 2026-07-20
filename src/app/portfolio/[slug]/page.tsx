import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getPortfolioBySlug, portfolioItems } from "@/data/portfolio";
import { PageShell } from "@/components/layout/PageShell";
import { PortfolioCategoryDesktop } from "@/components/sections/PortfolioCategoryDesktop";
import { PortfolioCategoryMobile } from "@/components/sections/PortfolioCategoryMobile";

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
      {/* Mobile: tarjeta pastel con lightbox, como la vista de escritorio */}
      <PortfolioCategoryMobile item={item} />

      {/* Desktop: mockup nuevo */}
      <PortfolioCategoryDesktop item={item} />
    </PageShell>
  );
}
