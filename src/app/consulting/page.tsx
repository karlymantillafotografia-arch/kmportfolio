import type { Metadata } from "next";
import { PageShell } from "@/components/layout/PageShell";
import { PageIntro } from "@/components/ui/PageIntro";
import { Consulting } from "@/components/sections/Consulting";
import { CtaBanner } from "@/components/sections/CtaBanner";

export const metadata: Metadata = {
  title: "Consulting",
  description:
    "Personalized consulting and mentorship for retouchers and creative businesses.",
};

export default function ConsultingPage() {
  return (
    <PageShell>
      <PageIntro
        title="Consulting & Mentorship"
        description="Level up your craft, workflow, and client business with guided support."
      />
      <section className="px-5 py-10 md:px-8 md:py-14">
        <div className="mx-auto max-w-7xl">
          <Consulting
            showHeading={false}
            ctaHref="/contact"
            ctaLabel="Book a Session"
          />
        </div>
      </section>
      <CtaBanner />
    </PageShell>
  );
}
