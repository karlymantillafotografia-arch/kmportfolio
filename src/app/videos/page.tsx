"use client";

import { PageShell } from "@/components/layout/PageShell";
import { PageIntro } from "@/components/ui/PageIntro";
import { VideosProcess } from "@/components/sections/VideosProcess";
import { useLocale } from "@/i18n/LocaleProvider";

export default function VideosPage() {
  const { t } = useLocale();

  return (
    <PageShell>
      <div className="flex flex-1 flex-col">
        <PageIntro
          title={t.pages.videosTitle}
          description={t.pages.videosDesc}
        />
        <div className="my-auto pt-2">
          <section className="px-5 md:px-8 md:py-0">
            <div className="mx-auto max-w-6xl">
              <VideosProcess showHeading={false} columns={4} />
            </div>
          </section>
        </div>
      </div>
    </PageShell>
  );
}
