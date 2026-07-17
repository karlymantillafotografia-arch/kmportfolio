import type { Metadata } from "next";
import { PageShell } from "@/components/layout/PageShell";
import { PageIntro } from "@/components/ui/PageIntro";
import { BeforeAfter } from "@/components/sections/BeforeAfter";
import { CtaBanner } from "@/components/sections/CtaBanner";

export const metadata: Metadata = {
  title: "Before & After",
  description:
    "Interactive before-and-after comparisons of professional photo retouching.",
};

export default function BeforeAfterPage() {
  return (
    <PageShell>
      <PageIntro
        title="Before & After"
        description="Drag the slider to compare original captures with finished retouching."
      />
      <BeforeAfter />
      <CtaBanner />
    </PageShell>
  );
}
