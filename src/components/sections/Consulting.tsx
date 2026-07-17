import Image from "next/image";
import { Check } from "lucide-react";
import { site } from "@/data/site";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";

const CONSULTING_IMAGE = "/images/consulting.jpg";

type ConsultingProps = {
  showHeading?: boolean;
  ctaHref?: string;
  ctaLabel?: string;
};

export function Consulting({
  showHeading = true,
  ctaHref = "/consulting",
  ctaLabel = "Learn More",
}: ConsultingProps) {
  return (
    <section id="consulting" className="scroll-mt-20">
      {showHeading ? (
        <SectionHeading
          title="Consulting & Mentorship"
          className="mb-5 md:mb-6"
        />
      ) : null}

      <div className="grid overflow-hidden rounded-lg bg-bg-warm md:grid-cols-2">
        <div className="flex flex-col justify-center px-5 py-5 md:px-6 md:py-6">
          <h3 className="font-serif text-base leading-snug text-ink md:text-lg">
            {site.consulting.title}
          </h3>
          <p className="mt-2 text-[12px] leading-relaxed text-ink-muted">
            {site.consulting.body}
          </p>
          <ul className="mt-3 flex flex-col gap-1.5">
            {site.consulting.features.map((feature) => (
              <li
                key={feature}
                className="flex items-center gap-2 text-[12px] text-ink"
              >
                <Check
                  className="size-3.5 shrink-0 text-ink"
                  strokeWidth={1.75}
                  aria-hidden
                />
                {feature}
              </li>
            ))}
          </ul>
          <div className="mt-4">
            <Button
              href={ctaHref}
              showArrow
              className="border-[#e8dcc8] bg-[#e8dcc8] px-3.5 py-2 text-[11px] text-ink hover:bg-[#ddd0b8] hover:text-ink"
            >
              {ctaLabel}
            </Button>
          </div>
        </div>

        <div className="relative min-h-44 w-full md:min-h-[240px]">
          <Image
            src={CONSULTING_IMAGE}
            alt="Editing workspace for consulting sessions"
            fill
            sizes="(max-width: 768px) 100vw, 40vw"
            className="object-cover"
          />
        </div>
      </div>
    </section>
  );
}
