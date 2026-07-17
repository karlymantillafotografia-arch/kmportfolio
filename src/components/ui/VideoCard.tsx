import Image from "next/image";
import { Play } from "lucide-react";
import type { VideoItem } from "@/data/videos";
import { cn } from "@/lib/cn";

type VideoCardProps = {
  video: VideoItem;
  className?: string;
};

export function VideoCard({ video, className }: VideoCardProps) {
  return (
    <article className={cn("flex flex-col gap-1.5", className)}>
      <a
        href={video.href}
        className="group relative aspect-video overflow-hidden rounded-lg bg-surface-muted"
        aria-label={`Play ${video.title}`}
      >
        <Image
          src={video.thumbnail}
          alt=""
          fill
          sizes="(max-width: 768px) 90vw, 20vw"
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
      </a>
      <div>
        <h3 className="font-serif text-[13px] leading-snug text-ink">
          {video.title}
        </h3>
        <p className="mt-0.5 line-clamp-2 text-[11px] leading-snug text-ink-muted">
          {video.description}
        </p>
      </div>
    </article>
  );
}
