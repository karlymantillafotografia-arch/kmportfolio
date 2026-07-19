import type { Metadata } from "next";
import { Mail } from "lucide-react";
import { PageShell } from "@/components/layout/PageShell";
import { PageIntro } from "@/components/ui/PageIntro";
import { Consulting } from "@/components/sections/Consulting";
import { CtaBanner } from "@/components/sections/CtaBanner";
import { site } from "@/data/site";

export const metadata: Metadata = {
  title: "Consulting",
  description:
    "Personalized consulting and mentorship for retouchers and creative businesses.",
};

export default function ConsultingPage() {
  return (
    <PageShell>
      <div className="flex min-h-[calc(100dvh-10rem)] flex-col">
        <PageIntro
          title="Consulting & Mentorship"
          description="Level up your craft, workflow, and client business with guided support."
          className="pt-5 md:pt-10"
        />
        <div className="my-auto">
          <section className="px-5 py-5 md:px-8 md:py-0">
            <div className="mx-auto max-w-7xl">
              <Consulting
                showHeading={false}
                ctaHref="/contact"
                ctaLabel="Book a Session"
              />

              <div className="mt-5 flex justify-center md:mt-6">
                <a
                  href={site.social.email}
                  className="inline-flex items-center gap-2 rounded-full border border-ink/20 bg-transparent px-6 py-3 text-[12px] tracking-wide text-ink transition-colors hover:bg-ink/5"
                >
                  <Mail className="size-4" aria-hidden />
                  Email Me
                </a>
              </div>
            </div>
          </section>
        </div>
        <CtaBanner />
      </div>
    </PageShell>
  );
}
