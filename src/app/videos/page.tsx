import type { Metadata } from "next";
import { PageShell } from "@/components/layout/PageShell";
import { PageIntro } from "@/components/ui/PageIntro";
import { VideosProcess } from "@/components/sections/VideosProcess";
import { CtaBanner } from "@/components/sections/CtaBanner";

export const metadata: Metadata = {
  title: "Videos",
  description: "Process videos and workflow walkthroughs for photo retouching.",
};

export default function VideosPage() {
  return (
    <PageShell>
      <div className="flex min-h-[calc(100dvh-10rem)] flex-col">
        <PageIntro
          title="Videos / Process"
          description="Short walkthroughs that show how polished results come together."
        />
        <div className="pt-2 md:my-auto">
          <section className="px-5 md:px-8 md:py-0">
            <div className="mx-auto max-w-6xl">
              <VideosProcess showHeading={false} columns={4} />
            </div>
          </section>
        </div>
        <CtaBanner />
      </div>
    </PageShell>
  );
}
