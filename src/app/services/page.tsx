import type { Metadata } from "next";
import { PageShell } from "@/components/layout/PageShell";
import { PageIntro } from "@/components/ui/PageIntro";
import { Services } from "@/components/sections/Services";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Portrait retouching, fashion, product editing, AI enhancement, batch work, and consulting.",
};

export default function ServicesPage() {
  return (
    <PageShell>
      <div className="flex flex-1 flex-col">
        <PageIntro
          title="Services"
          description="End-to-end image finishing for brands, photographers, and growing creative businesses."
        />
        <div className="my-auto pt-2 md:py-0">
          <Services showHeading={false} />
        </div>
      </div>
    </PageShell>
  );
}
