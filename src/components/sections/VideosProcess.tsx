import { videos } from "@/data/videos";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { VideoCard } from "@/components/ui/VideoCard";

type VideosProcessProps = {
  limit?: number;
  title?: string;
  showHeading?: boolean;
};

export function VideosProcess({
  limit,
  title = "Videos / Process",
  showHeading = true,
}: VideosProcessProps) {
  const items = limit ? videos.slice(0, limit) : videos;

  return (
    <section id="videos" className="scroll-mt-20">
      {showHeading ? (
        <SectionHeading title={title} className="mb-5 md:mb-6" />
      ) : null}
      <div
        className={
          limit === 2
            ? "grid grid-cols-1 gap-3 sm:grid-cols-2"
            : "grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3"
        }
      >
        {items.map((video) => (
          <VideoCard key={video.id} video={video} />
        ))}
      </div>
    </section>
  );
}
