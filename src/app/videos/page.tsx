import type { Metadata } from "next";
import { PageShell } from "@/components/layout/PageShell";
import { PageIntro } from "@/components/ui/PageIntro";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { VideosProcess } from "@/components/sections/VideosProcess";
import { CtaBanner } from "@/components/sections/CtaBanner";

export const metadata: Metadata = {
  title: "Videos",
  description: "Process videos and workflow walkthroughs for photo retouching.",
};

export default function VideosPage() {
  return (
    <PageShell>
      <PageIntro
        title="Videos / Process"
        description="Short walkthroughs that show how polished results come together."
      />
      <section className="px-5 py-10 md:px-8 md:py-14">
        <div className="mx-auto max-w-7xl">
          <SectionHeading title="Watch" className="mb-10" />
          <VideosProcess showHeading={false} />
        </div>
      </section>
      <CtaBanner />
    </PageShell>
  );
}
