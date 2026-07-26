"use client";

import type { ReactNode } from "react";
import Image from "next/image";
import { Check } from "lucide-react";
import { PageShell } from "@/components/layout/PageShell";
import { PageIntro } from "@/components/ui/PageIntro";
import { useLocale } from "@/i18n/LocaleProvider";
import { getToolLabels } from "@/i18n/localize";

const ABOUT_IMAGE = "/images/about-karly-5.png";

function richText(text: string): ReactNode[] {
  return text.split(/(\*\*[^*]+\*\*)/g).map((part, i) => {
    if (part.startsWith("**") && part.endsWith("**")) {
      return (
        <strong key={i} className="font-medium text-ink">
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
        "flex w-full flex-wrap items-center justify-center gap-x-4 gap-y-2 md:justify-between"
      }
    >
      {tools.map((tool) => (
        <li
          key={tool.name}
          className="inline-flex items-center gap-1.5 text-[12px] text-ink-muted md:text-[13px]"
        >
          <span
            className="flex size-7 items-center justify-center rounded bg-bg-warm font-sans text-[10px] font-semibold tracking-wide text-ink md:size-8 md:text-[11px]"
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

        <div className="my-auto px-5 pt-2 pb-0 md:px-8">
          <section className="mx-auto grid max-w-5xl gap-6 md:grid-cols-[minmax(0,17rem)_1fr] md:items-stretch md:gap-x-8 lg:grid-cols-[minmax(0,18rem)_1fr] lg:gap-x-10">
            {/* Mobile photo */}
            <div className="mx-auto w-[85%] max-w-[17rem] overflow-hidden rounded-lg bg-bg-warm md:hidden">
              <Image
                src={ABOUT_IMAGE}
                alt={t.about.imageAlt}
                width={819}
                height={1024}
                sizes="68vw"
                className="h-auto w-full"
                priority
              />
            </div>

            {/* Desktop photo: same height as text + bullets + tools */}
            <div className="relative hidden min-h-0 overflow-hidden rounded-lg bg-bg-warm md:row-start-1 md:block md:h-full md:min-h-full md:self-stretch">
              <Image
                src={ABOUT_IMAGE}
                alt={t.about.imageAlt}
                fill
                sizes="320px"
                className="object-cover object-center"
                priority
              />
            </div>

            <div className="text-center md:row-start-1 md:text-left">
              {body.map((paragraph, index) => (
                <p
                  key={paragraph}
                  className={`text-center text-[13px] leading-relaxed text-ink-muted md:text-justify md:text-[14px] ${index === 0 ? "" : "mt-3"}`}
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

              <div className="mt-5">
                <ToolList
                  tools={tools}
                  className="flex w-full flex-wrap items-center justify-center gap-x-4 gap-y-2 md:justify-between"
                />
              </div>
            </div>
          </section>
        </div>
      </div>
    </PageShell>
  );
}
