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
  /** En móvil muestra el contenido repartido en dos carruseles apilados. */
  mobileTwoRows?: boolean;
};

export function BeforeAfter({
  limit,
  mobileLimit,
  title = "Before & After",
  carousel = false,
  showHeading = true,
  showTitles = false,
  mobileTwoRows = false,
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
          <SectionHeading
            title={title}
            href="/before-after"
          />
        )}

        {/* Escritorio (lg+): carrusel/grid ancho. Móvil y tablet: peek tipo celular */}
        {carousel ? (
          <div className="hidden lg:block">
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
          <div className="hidden gap-4 lg:grid lg:grid-cols-4 lg:gap-5">
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

        <div className="lg:hidden">
          {mobileTwoRows && mobileItems.length > 3 ? (
            <div className="flex flex-col gap-4 md:gap-5">
              {[
                mobileItems.slice(0, Math.ceil(mobileItems.length / 2)),
                mobileItems.slice(Math.ceil(mobileItems.length / 2)),
              ].map((row, rowIndex) => (
                <PeekCarousel
                  key={rowIndex}
                  slideClassName="flex-[0_0_42%] md:flex-[0_0_34%]"
                >
                  {row.map((item) => (
                    <BeforeAfterSlider
                      key={item.id}
                      item={item}
                      items={mobileItems}
                      showTitle={showTitles}
                    />
                  ))}
                </PeekCarousel>
              ))}
            </div>
          ) : (
            <PeekCarousel slideClassName="flex-[0_0_42%] md:flex-[0_0_34%]">
              {mobileItems.map((item) => (
                <BeforeAfterSlider
                  key={item.id}
                  item={item}
                  items={mobileItems}
                  showTitle={showTitles}
                />
              ))}
            </PeekCarousel>
          )}
        </div>
      </div>
    </section>
  );
}
