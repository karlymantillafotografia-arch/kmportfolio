import { VideosProcess } from "@/components/sections/VideosProcess";
import { Consulting } from "@/components/sections/Consulting";

export function VideosAndConsulting() {
  return (
    <section className="px-5 pt-0 pb-4 md:px-8 md:pt-6 md:pb-10">
      <div className="mx-auto grid max-w-6xl gap-0 lg:grid-cols-[1.15fr_0.85fr] lg:gap-6">
        <div className="lg:hidden">
          <VideosProcess limit={4} showHeading={false} />
        </div>
        <div className="hidden lg:block">
          <VideosProcess />
        </div>
        <Consulting hideHeadingOnMobile />
      </div>
    </section>
  );
}
