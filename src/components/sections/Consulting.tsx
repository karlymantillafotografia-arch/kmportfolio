import Image from "next/image";
import { Check } from "lucide-react";
import { site } from "@/data/site";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";
import { cn } from "@/lib/cn";

const CONSULTING_IMAGE = "/images/consulting.jpg";

type ConsultingProps = {
  showHeading?: boolean;
  hideHeadingOnMobile?: boolean;
  ctaHref?: string;
  ctaLabel?: string;
};

export function Consulting({
  showHeading = true,
  hideHeadingOnMobile = false,
  ctaHref = "/consulting",
  ctaLabel = "Learn More",
}: ConsultingProps) {
  return (
    <section id="consulting" className="scroll-mt-20">
      {showHeading ? (
        <SectionHeading
          title="Consulting & Mentorship"
          href="/consulting"
          className={cn(
            "my-4 md:my-6",
            hideHeadingOnMobile && "hidden md:flex",
          )}
        />
      ) : null}

      <div className="grid grid-cols-[1.15fr_0.85fr] overflow-hidden rounded-lg bg-bg-warm md:grid-cols-2">
        <div className="flex flex-col justify-start px-3.5 py-3 md:justify-center md:px-6 md:py-6">
          <h3 className="font-serif text-[13px] leading-snug text-ink md:text-lg">
            {site.consulting.title}
          </h3>
          <p className="mt-2 hidden text-[12px] leading-relaxed text-ink-muted md:block">
            {site.consulting.body}
          </p>

          <ul className="mt-2 grid grid-cols-2 gap-x-2 gap-y-1 md:hidden">
            {site.consulting.mobileFeatures.map((feature) => (
              <li
                key={feature}
                className="flex items-start gap-1 text-[9px] leading-tight text-ink"
              >
                <Check
                  className="mt-0.5 size-2.5 shrink-0 text-script"
                  strokeWidth={2}
                  aria-hidden
                />
                {feature}
              </li>
            ))}
          </ul>

          <ul className="mt-3 hidden flex-col gap-1.5 md:flex">
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

          <div className="mt-2.5 md:mt-4">
            <Button
              href={ctaHref}
              showArrow
              className="px-2.5 py-1.5 text-[10px] md:border-[#e8dcc8] md:bg-[#e8dcc8] md:px-3.5 md:py-2 md:text-[11px] md:text-ink md:hover:bg-[#ddd0b8] md:hover:text-ink"
            >
              {ctaLabel}
            </Button>
          </div>
        </div>

        <div className="relative min-h-36 w-full self-stretch md:min-h-[240px]">
          <Image
            src={CONSULTING_IMAGE}
            alt="Editing workspace for consulting sessions"
            fill
            sizes="(max-width: 768px) 45vw, 40vw"
            className="object-cover object-[20%_center] md:object-center"
          />
        </div>
      </div>
    </section>
  );
}
