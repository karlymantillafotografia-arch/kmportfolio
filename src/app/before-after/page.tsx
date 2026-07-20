import type { Metadata } from "next";
import { PageShell } from "@/components/layout/PageShell";
import { PageIntro } from "@/components/ui/PageIntro";
import { BeforeAfter } from "@/components/sections/BeforeAfter";

export const metadata: Metadata = {
  title: "Before & After",
  description:
    "Interactive before-and-after comparisons of professional photo retouching.",
};

export default function BeforeAfterPage() {
  return (
    <PageShell>
      <div className="flex flex-1 flex-col">
        <PageIntro
          title="Before & After"
          description="Drag the slider to compare original captures with finished retouching."
        />
        <div className="my-auto pt-2 md:pt-0">
          <BeforeAfter carousel showHeading={false} showTitles mobileTwoRows />
        </div>
      </div>
    </PageShell>
  );
}
