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
      <div className="md:flex md:min-h-[calc(100vh-10rem)] md:flex-col">
        <PageIntro
          title="Services"
          description="End-to-end image finishing for brands, photographers, and growing creative businesses."
        />
        <div className="md:my-auto">
          <Services showHeading={false} />
        </div>
        <CtaBanner />
      </div>
    </PageShell>
  );
}
