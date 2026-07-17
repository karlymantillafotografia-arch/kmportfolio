import type { Metadata } from "next";
import { PageShell } from "@/components/layout/PageShell";
import { PageIntro } from "@/components/ui/PageIntro";
import { Services } from "@/components/sections/Services";
import { CtaBanner } from "@/components/sections/CtaBanner";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Portrait retouching, fashion, product editing, AI enhancement, batch work, and consulting.",
};

export default function ServicesPage() {
  return (
    <PageShell>
      <PageIntro
        title="Services"
        description="End-to-end image finishing for brands, photographers, and growing creative businesses."
      />
      <Services />
      <CtaBanner />
    </PageShell>
  );
}
