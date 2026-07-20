"use client";

import { PageShell } from "@/components/layout/PageShell";
import { PageIntro } from "@/components/ui/PageIntro";
import { Services } from "@/components/sections/Services";
import { useLocale } from "@/i18n/LocaleProvider";

export default function ServicesPage() {
  const { t } = useLocale();

  return (
    <PageShell>
      <div className="flex flex-1 flex-col">
        <PageIntro
          title={t.pages.servicesTitle}
          description={t.pages.servicesDesc}
        />
        <div className="my-auto pt-2 md:py-0">
          <Services showHeading={false} />
        </div>
      </div>
    </PageShell>
  );
}
