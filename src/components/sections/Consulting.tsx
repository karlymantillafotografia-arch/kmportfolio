"use client";

import Image from "next/image";
import { Check } from "lucide-react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";
import { cn } from "@/lib/cn";
import { useLocale } from "@/i18n/LocaleProvider";

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
  ctaLabel,
}: ConsultingProps) {
  const { t } = useLocale();
  const features = [t.consulting.f1, t.consulting.f2, t.consulting.f3];
  const mobileFeatures = [
    t.consulting.mf1,
    t.consulting.mf2,
    t.consulting.mf3,
    t.consulting.mf4,
  ];
  const label = ctaLabel ?? t.consulting.book;

  return (
    <section id="consulting" className="scroll-mt-20">
      {showHeading ? (
        <SectionHeading
          title={t.sections.consulting}
          href="/consulting"
          className={cn(hideHeadingOnMobile && "hidden lg:flex")}
        />
      ) : null}

      <div className="mx-auto grid max-w-xl grid-cols-[1.15fr_0.85fr] overflow-hidden rounded-lg bg-bg-warm md:max-w-2xl lg:max-w-none lg:grid-cols-2">
        <div className="flex flex-col justify-start px-3.5 py-3 md:px-4 md:py-3.5 lg:justify-center lg:px-6 lg:py-6">
          <h3 className="font-serif text-[13px] leading-snug text-ink md:text-[14px] lg:text-lg">
            {t.consulting.title}
          </h3>
          <p className="mt-2 hidden text-[12px] leading-relaxed text-ink-muted lg:block">
            {t.consulting.body}
          </p>

          <ul className="mt-2 grid grid-cols-2 gap-x-2 gap-y-1 lg:hidden">
            {mobileFeatures.map((feature) => (
              <li
                key={feature}
                className="flex items-start gap-1 text-[9px] leading-tight text-ink md:text-[10px]"
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

          <ul className="mt-3 hidden flex-col gap-1.5 lg:flex">
            {features.map((feature) => (
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

          <div className="mt-2.5 lg:mt-4">
            <Button
              href={ctaHref}
              showArrow
              className="px-2.5 py-1.5 text-[10px] md:px-3 md:text-[10px] lg:border-[#e8dcc8] lg:bg-[#e8dcc8] lg:px-3.5 lg:py-2 lg:text-[11px] lg:text-ink lg:hover:bg-[#ddd0b8] lg:hover:text-ink"
            >
              {label}
            </Button>
          </div>
        </div>

        <div className="relative min-h-36 w-full self-stretch md:min-h-40 lg:min-h-[240px]">
          <Image
            src={CONSULTING_IMAGE}
            alt={t.consulting.imageAlt}
            fill
            sizes="(max-width: 1023px) 40vw, 40vw"
            className="object-cover object-[20%_center] lg:object-center"
          />
        </div>
      </div>
    </section>
  );
}
