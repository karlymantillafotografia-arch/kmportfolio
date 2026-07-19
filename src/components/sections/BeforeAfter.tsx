import { beforeAfterItems } from "@/data/beforeAfter";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { BeforeAfterSlider } from "@/components/ui/BeforeAfterSlider";
import { CardCarousel } from "@/components/ui/CardCarousel";
import { PeekCarousel } from "@/components/ui/PeekCarousel";

type BeforeAfterProps = {
  limit?: number;
  /** Máximo de items en móvil; sin límite muestra todos. */
  mobileLimit?: number;
  title?: string;
  carousel?: boolean;
  showHeading?: boolean;
  showTitles?: boolean;
};

export function BeforeAfter({
  limit,
  mobileLimit,
  title = "Before & After",
  carousel = false,
  showHeading = true,
  showTitles = false,
}: BeforeAfterProps) {
  const desktopItems = limit
    ? beforeAfterItems.slice(0, limit)
    : beforeAfterItems;
  const mobileItems = mobileLimit
    ? desktopItems.slice(0, mobileLimit)
    : desktopItems;

  return (
    <section
      id="before-after"
      className="scroll-mt-20 px-5 pt-0 pb-0 md:px-8 md:pt-0"
    >
      <div className="mx-auto max-w-6xl">
        {showHeading && (
          <SectionHeading title={title} className="mb-3 mt-0 md:my-6" />
        )}

        {carousel ? (
          <div className="hidden sm:block">
            <CardCarousel>
              {desktopItems.map((item) => (
                <BeforeAfterSlider
                  key={item.id}
                  item={item}
                  items={desktopItems}
                  showTitle={showTitles}
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
                showTitle={showTitles}
              />
            ))}
          </div>
        )}

        <div className="sm:hidden">
          <PeekCarousel>
            {mobileItems.map((item) => (
              <BeforeAfterSlider
                key={item.id}
                item={item}
                items={mobileItems}
                showTitle={showTitles}
              />
            ))}
          </PeekCarousel>
        </div>
      </div>
    </section>
  );
}
