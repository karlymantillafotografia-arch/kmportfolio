"use client";

import { Mail } from "lucide-react";
import { PageShell } from "@/components/layout/PageShell";
import { PageIntro } from "@/components/ui/PageIntro";
import { Consulting } from "@/components/sections/Consulting";
import { site } from "@/data/site";
import { useLocale } from "@/i18n/LocaleProvider";

export default function ConsultingPage() {
  const { t } = useLocale();

  return (
    <PageShell>
      <div className="flex flex-1 flex-col">
        <PageIntro
          title={t.pages.consultingTitle}
          description={t.pages.consultingDesc}
        />
        <div className="my-auto pt-2">
          <section className="px-5 md:px-8 md:py-0">
            <div className="mx-auto max-w-7xl">
              <Consulting
                showHeading={false}
                ctaHref="/contact"
                ctaLabel={t.consulting.book}
              />

              <div className="mt-5 flex justify-center md:mt-6">
                <a
                  href={site.social.email}
                  className="inline-flex items-center gap-2 rounded-full border border-ink/20 bg-transparent px-6 py-3 text-[12px] tracking-wide text-ink transition-colors hover:bg-ink/5"
                >
                  <Mail className="size-4" aria-hidden />
                  {t.consulting.emailMe}
                </a>
              </div>
            </div>
          </section>
        </div>
      </div>
    </PageShell>
  );
}
