import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { featuredServiceIds, services } from "@/data/services";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ServiceCard } from "@/components/ui/ServiceCard";

type ServicesProps = {
  compact?: boolean;
  title?: string;
  showHeading?: boolean;
};

export function Services({
  compact = false,
  title = "Services",
  showHeading = true,
}: ServicesProps) {
  const mobileItems = compact
    ? services.filter((service) =>
        featuredServiceIds.includes(
          service.id as (typeof featuredServiceIds)[number],
        ),
      )
    : services;

  return (
    <section id="services" className="scroll-mt-20 px-5 pt-0 pb-0 md:px-8 md:pt-0">
      <div className="mx-auto max-w-6xl">
        {showHeading ? (
          <SectionHeading title={title} className="mb-3 mt-0 md:my-6" />
        ) : null}

        <div className="hidden gap-3 md:grid md:grid-cols-3 lg:grid-cols-6">
          {services.map((service) => (
            <ServiceCard key={service.id} service={service} />
          ))}
        </div>

        <div
          className={
            compact
              ? "grid grid-cols-3 gap-2.5 md:hidden"
              : "grid grid-cols-1 gap-2.5 sm:grid-cols-2 md:hidden"
          }
        >
          {mobileItems.map((service) => (
            <ServiceCard
              key={service.id}
              service={service}
              compact={compact}
            />
          ))}
        </div>

        {compact ? (
          <div className="mt-2 mb-5 flex justify-center md:hidden">
            <Link
              href="/services"
              className="inline-flex items-center gap-1 text-xs tracking-wide text-ink transition-opacity hover:opacity-60"
            >
              View all services
              <ArrowRight className="size-3.5" aria-hidden />
            </Link>
          </div>
        ) : null}
      </div>
    </section>
  );
}
