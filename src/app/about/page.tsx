"use client";

import type { ReactNode } from "react";
import Image from "next/image";
import { Check } from "lucide-react";
import { PageShell } from "@/components/layout/PageShell";
import { PageIntro } from "@/components/ui/PageIntro";
import { Button } from "@/components/ui/Button";
import { useLocale } from "@/i18n/LocaleProvider";
import { getToolLabels } from "@/i18n/localize";

const ABOUT_IMAGE = "/images/about-karly.png";

function richText(text: string): ReactNode[] {
  return text.split(/(\*\*[^*]+\*\*)/g).map((part, i) => {
    if (part.startsWith("**") && part.endsWith("**")) {
      return (
        <strong key={i} className="font-semibold text-ink">
          {part.slice(2, -2)}
        </strong>
      );
    }
    return part;
  });
}

function ToolList({
  tools,
  className,
}: {
  tools: { short: string; name: string }[];
  className?: string;
}) {
  return (
    <ul
      className={
        className ??
        "mt-5 flex flex-wrap items-center justify-center gap-x-4 gap-y-1.5 md:justify-start"
      }
    >
      {tools.map((tool) => (
        <li
          key={tool.name}
          className="inline-flex items-center gap-1.5 text-[11px] text-ink-muted"
        >
          <span
            className="flex size-6 items-center justify-center rounded bg-bg-warm font-sans text-[9px] font-semibold tracking-wide text-ink"
            aria-hidden
          >
            {tool.short}
          </span>
          {tool.name}
        </li>
      ))}
    </ul>
  );
}

export default function AboutPage() {
  const { locale, t } = useLocale();
  const tools = getToolLabels(locale);
  const highlights = [t.about.h1, t.about.h2, t.about.h3, t.about.h4];
  const body = [t.about.body1, t.about.body2, t.about.body3, t.about.body4];

  return (
    <PageShell>
      <div className="flex flex-1 flex-col">
        <PageIntro title={t.pages.aboutTitle} />

        <div className="my-auto px-5 pb-4 pt-2 md:px-8 md:pb-6">
          <section className="mx-auto grid max-w-4xl gap-6 md:grid-cols-[minmax(0,15rem)_1fr] md:items-stretch md:gap-x-4 md:gap-y-4 lg:gap-x-5">
            {/* Mobile photo */}
            <div className="relative mx-auto aspect-[4/5] w-[85%] max-w-[17rem] overflow-hidden rounded-lg bg-bg-warm md:hidden">
              <Image
                src={ABOUT_IMAGE}
                alt={t.about.imageAlt}
                fill
                sizes="68vw"
                className="object-cover object-[center_20%]"
                priority
              />
            </div>

            {/* Desktop photo: stretches to match text + tools height */}
            <div className="relative hidden min-h-0 overflow-hidden rounded-lg bg-bg-warm md:row-start-1 md:block md:self-stretch">
              <Image
                src={ABOUT_IMAGE}
                alt={t.about.imageAlt}
                fill
                sizes="240px"
                className="object-cover object-[center_18%]"
                priority
              />
            </div>

            <div className="text-center md:row-start-1 md:text-left">
              {body.map((paragraph, index) => (
                <p
                  key={paragraph}
                  className={
                    index === 0
                      ? "text-[13px] font-medium leading-relaxed text-ink md:text-[14px]"
                      : "mt-3 text-[13px] leading-relaxed text-ink-muted md:text-[14px]"
                  }
                >
                  {richText(paragraph)}
                </p>
              ))}

              <ul className="mt-5 grid gap-x-4 gap-y-1.5 text-left sm:grid-cols-2">
                {highlights.map((item) => (
                  <li
                    key={item}
                    className="flex items-start gap-2 text-[12px] text-ink md:text-[13px]"
                  >
                    <Check
                      className="mt-0.5 size-3.5 shrink-0 text-script"
                      strokeWidth={2}
                      aria-hidden
                    />
                    {item}
                  </li>
                ))}
              </ul>

              <ToolList tools={tools} />

              <div className="mt-6 flex justify-center md:hidden">
                <Button href="/contact" showArrow>
                  {t.about.cta}
                </Button>
              </div>
            </div>

            <div className="hidden md:col-start-2 md:row-start-2 md:flex md:justify-start">
              <Button href="/contact" showArrow>
                {t.about.cta}
              </Button>
            </div>
          </section>
        </div>
      </div>
    </PageShell>
  );
}
