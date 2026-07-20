"use client";

import { site } from "@/data/site";
import { useLocale } from "@/i18n/LocaleProvider";
import { Button } from "@/components/ui/Button";
import { UpworkMark } from "@/components/ui/UpworkMark";

export function CtaBanner() {
  const { t } = useLocale();

  return (
    <section id="contact" className="scroll-mt-20 px-5 pt-3 pb-4 md:px-8 md:py-6">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-1.5 rounded-lg bg-bg-warm px-4 py-2.5 text-center md:flex-row md:items-center md:justify-between md:gap-6 md:px-6 md:py-4">
        <div className="hidden shrink-0 text-ink md:block">
          <UpworkMark className="size-6" />
        </div>

        <div className="flex-1">
          <h2 className="font-serif text-[1rem] text-ink md:text-2xl">
            {t.cta.title}
          </h2>
          <p className="mt-1 hidden text-[12px] text-ink-muted md:block">
            {t.cta.body}
          </p>
        </div>

        <Button
          href={site.upworkUrl}
          external
          showArrow
          className="mt-0.5 w-auto shrink-0 px-3.5 py-1.5 text-[11px] [&>svg:last-child]:hidden md:mt-0 md:w-auto md:max-w-none md:px-3.5 md:py-2 md:text-[12px] md:[&>svg:last-child]:inline"
        >
          <UpworkMark className="size-3.5 md:hidden" />
          {t.cta.hire}
        </Button>
      </div>
    </section>
  );
}
