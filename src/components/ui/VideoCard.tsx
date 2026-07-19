"use client";

import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import Image from "next/image";
import { Play, ExternalLink, X } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";
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
  const [open, setOpen] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  useEffect(() => {
    if (!open) return;
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [open]);

  const modal = (
    <AnimatePresence>
      {open && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 p-5 backdrop-blur-md md:p-12"
          onClick={() => setOpen(false)}
        >
          <button
            type="button"
            aria-label="Close video"
            className="absolute top-5 right-5 z-10 flex size-10 items-center justify-center rounded-full bg-white/10 text-white transition hover:bg-white/20"
            onClick={() => setOpen(false)}
          >
            <X className="size-5" />
          </button>

          <motion.div
            initial={{ scale: 0.96 }}
            animate={{ scale: 1 }}
            exit={{ scale: 0.96 }}
            transition={{ duration: 0.2 }}
            className="w-full max-w-5xl"
            onClick={(event) => event.stopPropagation()}
          >
            <div className="relative aspect-video w-full overflow-hidden rounded-xl bg-black shadow-2xl">
              {video.youtubeId ? (
                <iframe
                  src={`https://www.youtube.com/embed/${video.youtubeId}?autoplay=1&rel=0`}
                  title={video.title}
                  className="absolute inset-0 h-full w-full"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  referrerPolicy="strict-origin-when-cross-origin"
                  allowFullScreen
                />
              ) : (
                <>
                  <Image
                    src={video.thumbnail}
                    alt={video.title}
                    fill
                    sizes="90vw"
                    unoptimized
                    className="object-cover"
                  />
                  <span className="absolute inset-0 flex items-center justify-center bg-ink/20">
                    <span className="flex size-14 items-center justify-center rounded-full bg-surface/90 text-ink shadow-sm">
                      <Play className="size-5 fill-current" aria-hidden />
                    </span>
                  </span>
                </>
              )}
            </div>

            <div className="mt-3 flex items-start justify-between gap-3">
              <div>
                <h3 className="font-serif text-base text-white md:text-lg">
                  {video.title}
                </h3>
                <p className="mt-0.5 text-[12px] leading-snug text-white/70">
                  {video.description}
                </p>
              </div>
              {video.youtubeId ? (
                <a
                  href={video.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-1 flex shrink-0 items-center gap-1.5 rounded-full bg-white/10 px-3.5 py-1.5 text-[11px] tracking-wide text-white transition hover:bg-white/20"
                >
                  Watch on YouTube
                  <ExternalLink className="size-3" aria-hidden />
                </a>
              ) : null}
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );

  return (
    <article className={cn("flex flex-col gap-1.5", className)}>
      <button
        type="button"
        onClick={() => setOpen(true)}
        className="group relative aspect-video cursor-pointer overflow-hidden rounded-lg bg-surface-muted"
        aria-label={`Play ${video.title}`}
      >
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
      </button>
      <div className="min-w-0">
        <h3 className="line-clamp-2 font-serif text-[12px] leading-snug text-ink md:text-[13px]">
          {video.title}
        </h3>
        {video.youtubeId ? (
          <a
            href={video.href}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-0.5 inline-flex items-center gap-1 text-[10px] text-ink-muted transition-colors hover:text-ink"
            aria-label={`Watch ${video.title} on YouTube`}
          >
            YouTube
            <ExternalLink className="size-2.5" aria-hidden />
          </a>
        ) : null}
        {hideDescription ? null : (
          <p className="mt-0.5 line-clamp-2 text-[11px] leading-snug text-ink-muted">
            {video.description}
          </p>
        )}
      </div>

      {mounted ? createPortal(modal, document.body) : null}
    </article>
  );
}
