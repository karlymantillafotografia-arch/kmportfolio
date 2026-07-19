import { services } from "@/data/services";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ServiceCard } from "@/components/ui/ServiceCard";
import { CardCarousel } from "@/components/ui/CardCarousel";
import { PeekCarousel } from "@/components/ui/PeekCarousel";

type ServicesProps = {
  compact?: boolean;
  title?: string;
  showHeading?: boolean;
  desktopCarousel?: boolean;
};

export function Services({
  compact = false,
  title = "Services",
  showHeading = true,
  desktopCarousel = false,
}: ServicesProps) {
  return (
    <section id="services" className="scroll-mt-20 px-5 pt-0 pb-0 md:px-8 md:pt-0">
      <div className="mx-auto max-w-6xl">
        {showHeading ? (
          <SectionHeading title={title} href="/services" />
        ) : null}

        {desktopCarousel ? (
          <div className="hidden md:block">
            <CardCarousel slideClassName="flex-[0_0_23%] lg:flex-[0_0_15.5%]">
              {services.map((service) => (
                <ServiceCard
                  key={service.id}
                  service={service}
                  className="h-full"
                />
              ))}
            </CardCarousel>
          </div>
        ) : (
          <div className="hidden gap-3 md:grid md:grid-cols-3 lg:grid-cols-6">
            {services.map((service) => (
              <ServiceCard key={service.id} service={service} />
            ))}
          </div>
        )}

        {compact ? (
          /* Home móvil: carrusel infinito con todos los servicios */
          <div className="md:hidden">
            <PeekCarousel slideClassName="flex-[0_0_31%]" dotsClassName="mt-1.5 mb-0">
              {services.map((service) => (
                <ServiceCard
                  key={service.id}
                  service={service}
                  compact
                  className="h-full w-full"
                />
              ))}
            </PeekCarousel>
          </div>
        ) : (
          <div className="grid grid-cols-2 gap-2.5 md:hidden">
            {services.map((service) => (
              <ServiceCard key={service.id} service={service} />
            ))}
          </div>
        )}

      </div>
    </section>
  );
}
