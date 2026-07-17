import { beforeAfterItems } from "@/data/beforeAfter";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { BeforeAfterSlider } from "@/components/ui/BeforeAfterSlider";

type BeforeAfterProps = {
  limit?: number;
  mobileLimit?: number;
  title?: string;
};

export function BeforeAfter({
  limit,
  mobileLimit = 2,
  title = "Before & After",
}: BeforeAfterProps) {
  const desktopItems = limit
    ? beforeAfterItems.slice(0, limit)
    : beforeAfterItems;
  const mobileItems = desktopItems.slice(0, mobileLimit);

  return (
    <section
      id="before-after"
      className="scroll-mt-20 px-5 pt-5 pb-0 md:px-8 md:pt-6"
    >
      <div className="mx-auto max-w-6xl">
        <SectionHeading title={title} className="mb-5 md:mb-6" />

        <div className="hidden gap-4 sm:grid sm:grid-cols-2 lg:grid-cols-4 lg:gap-5">
          {desktopItems.map((item) => (
            <BeforeAfterSlider key={item.id} item={item} />
          ))}
        </div>

        <div className="grid grid-cols-2 gap-3 sm:hidden">
          {mobileItems.map((item) => (
            <BeforeAfterSlider key={item.id} item={item} />
          ))}
        </div>
      </div>
    </section>
  );
}
