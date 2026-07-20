"use client";

import { useMemo } from "react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { VideoCard } from "@/components/ui/VideoCard";
import { PeekCarousel } from "@/components/ui/PeekCarousel";
import { useLocale } from "@/i18n/LocaleProvider";
import { getVideos } from "@/i18n/localize";

type VideosProcessProps = {
  limit?: number;
  title?: string;
  showHeading?: boolean;
  columns?: 3 | 4;
};

export function VideosProcess({
  limit,
  title,
  showHeading = true,
  columns = 3,
}: VideosProcessProps) {
  const { locale, t } = useLocale();
  const all = useMemo(() => getVideos(locale), [locale]);
  const items = limit ? all.slice(0, limit) : all;
  const heading = title ?? t.sections.videos;

  return (
    <section id="videos" className="scroll-mt-20">
      {showHeading ? (
        <SectionHeading title={heading} href="/videos" />
      ) : null}

      {limit ? (
        <PeekCarousel
          slideClassName="flex-[0_0_78%] md:flex-[0_0_40%]"
          dotsClassName="mt-2 mb-0"
        >
          {items.map((video) => (
            <VideoCard key={video.id} video={video} hideDescription />
          ))}
        </PeekCarousel>
      ) : (
        <div
          className={
            columns === 4
              ? "grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-4"
              : "grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3"
          }
        >
          {items.map((video) => (
            <VideoCard key={video.id} video={video} />
          ))}
        </div>
      )}
    </section>
  );
}
