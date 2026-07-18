import { beforeAfterItems } from "@/data/beforeAfter";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { BeforeAfterSlider } from "@/components/ui/BeforeAfterSlider";
import { CardCarousel } from "@/components/ui/CardCarousel";
import { PeekCarousel } from "@/components/ui/PeekCarousel";

type BeforeAfterProps = {
  limit?: number;
  mobileLimit?: number;
  title?: string;
  carousel?: boolean;
};

export function BeforeAfter({
  limit,
  mobileLimit = 2,
  title = "Before & After",
  carousel = false,
}: BeforeAfterProps) {
  const desktopItems = limit
    ? beforeAfterItems.slice(0, limit)
    : beforeAfterItems;
  const mobileItems = desktopItems.slice(0, mobileLimit);

  return (
    <section
      id="before-after"
      className="scroll-mt-20 px-5 pt-0 pb-0 md:px-8 md:pt-0"
    >
      <div className="mx-auto max-w-6xl">
        <SectionHeading title={title} className="mb-3 mt-0 md:my-6" />

        {carousel ? (
          <div className="hidden sm:block">
            <CardCarousel>
              {desktopItems.map((item) => (
                <BeforeAfterSlider
                  key={item.id}
                  item={item}
                  items={desktopItems}
                />
              ))}
            </CardCarousel>
          </div>
        ) : (
          <div className="hidden gap-4 sm:grid sm:grid-cols-2 lg:grid-cols-4 lg:gap-5">
            {desktopItems.map((item) => (
              <BeforeAfterSlider
                key={item.id}
                item={item}
                items={desktopItems}
              />
            ))}
          </div>
        )}

        <div className="sm:hidden">
          <PeekCarousel>
            {mobileItems.map((item) => (
              <BeforeAfterSlider key={item.id} item={item} items={mobileItems} />
            ))}
          </PeekCarousel>
        </div>
      </div>
    </section>
  );
}
