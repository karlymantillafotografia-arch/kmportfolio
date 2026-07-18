"use client";

import { useState } from "react";
import Image from "next/image";
import { Play, ExternalLink } from "lucide-react";
import type { VideoItem } from "@/data/videos";
import { cn } from "@/lib/cn";

type VideoCardProps = {
  video: VideoItem;
  className?: string;
  hideDescription?: boolean;
};

export function VideoCard({
  video,
  className,
  hideDescription = false,
}: VideoCardProps) {
  const [playing, setPlaying] = useState(false);
  const isEmbeddable = Boolean(video.youtubeId);

  const cover = (
    <>
      <Image
        src={video.thumbnail}
        alt=""
        fill
        sizes="(max-width: 768px) 45vw, 20vw"
        className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
      />
      <span className="absolute inset-0 flex items-center justify-center bg-ink/10">
        <span className="flex size-8 items-center justify-center rounded-full bg-surface/90 text-ink shadow-sm">
          <Play className="size-3.5 fill-current" aria-hidden />
        </span>
      </span>
      <span className="absolute right-2 bottom-2 rounded bg-ink/70 px-1.5 py-0.5 text-[9px] tracking-wide text-bg">
        {video.duration}
      </span>
    </>
  );

  return (
    <article className={cn("flex flex-col gap-1.5", className)}>
      {playing && video.youtubeId ? (
        <div className="relative aspect-video overflow-hidden rounded-lg bg-ink">
          <iframe
            src={`https://www.youtube.com/embed/${video.youtubeId}?autoplay=1&rel=0`}
            title={video.title}
            className="absolute inset-0 h-full w-full"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          />
        </div>
      ) : isEmbeddable ? (
        <button
          type="button"
          onClick={() => setPlaying(true)}
          className="group relative aspect-video cursor-pointer overflow-hidden rounded-lg bg-surface-muted"
          aria-label={`Play ${video.title}`}
        >
          {cover}
        </button>
      ) : (
        <a
          href={video.href}
          className="group relative aspect-video overflow-hidden rounded-lg bg-surface-muted"
          aria-label={`Play ${video.title}`}
        >
          {cover}
        </a>
      )}
      <div>
        <div className="flex items-start justify-between gap-2">
          <h3 className="font-serif text-[12px] leading-snug text-ink md:text-[13px]">
            {video.title}
          </h3>
          {isEmbeddable ? (
            <a
              href={video.href}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-0.5 flex shrink-0 items-center gap-1 text-[10px] text-ink-muted transition-colors hover:text-ink"
              aria-label={`Watch ${video.title} on YouTube`}
            >
              YouTube
              <ExternalLink className="size-2.5" aria-hidden />
            </a>
          ) : null}
        </div>
        {hideDescription ? null : (
          <p className="mt-0.5 line-clamp-2 text-[11px] leading-snug text-ink-muted">
            {video.description}
          </p>
        )}
      </div>
    </article>
  );
}
