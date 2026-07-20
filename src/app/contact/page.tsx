import type { Metadata } from "next";
import { site } from "@/data/site";
import { PageShell } from "@/components/layout/PageShell";
import { PageIntro } from "@/components/ui/PageIntro";
import { Button } from "@/components/ui/Button";
import { SocialLinks } from "@/components/ui/SocialLinks";
import { UpworkMark } from "@/components/ui/UpworkMark";

export const metadata: Metadata = {
  title: "Contact",
  description: "Hire Karly on Upwork or get in touch for retouching projects.",
};

export default function ContactPage() {
  return (
    <PageShell>
      <div className="flex flex-1 flex-col">
        <PageIntro
          title="Contact"
          description="Ready to elevate your images? Reach out and let's start a project."
        />
        <div className="my-auto pt-2">
          <section className="mx-auto max-w-xl px-5 text-center md:px-8 md:py-0">
            <div className="flex flex-col items-center gap-4">
              <Button
                href={site.upworkUrl}
                external
                className="w-full sm:w-auto"
              >
                <UpworkMark className="size-4" />
                Hire me on Upwork
              </Button>
              <Button
                href={site.social.email}
                variant="secondary"
                className="w-full sm:w-auto"
              >
                Email {site.email}
              </Button>
              <SocialLinks className="mt-6 items-center" withText />
            </div>
          </section>
        </div>
      </div>
    </PageShell>
  );
}
