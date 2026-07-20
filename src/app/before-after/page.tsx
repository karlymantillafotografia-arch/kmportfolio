"use client";

import { PageShell } from "@/components/layout/PageShell";
import { PageIntro } from "@/components/ui/PageIntro";
import { BeforeAfter } from "@/components/sections/BeforeAfter";
import { useLocale } from "@/i18n/LocaleProvider";

export default function BeforeAfterPage() {
  const { t } = useLocale();

  return (
    <PageShell>
      <div className="flex flex-1 flex-col">
        <PageIntro
          title={t.pages.beforeAfterTitle}
          description={t.pages.beforeAfterDesc}
        />
        <div className="my-auto pt-2 md:pt-0">
          <BeforeAfter carousel showHeading={false} showTitles mobileTwoRows />
        </div>
      </div>
    </PageShell>
  );
}
