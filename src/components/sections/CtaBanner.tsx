import { site } from "@/data/site";
import { Button } from "@/components/ui/Button";
import { UpworkMark } from "@/components/ui/UpworkMark";

export function CtaBanner() {
  return (
    <section id="contact" className="scroll-mt-20 px-5 py-6 md:px-8">
      <div className="mx-auto flex max-w-6xl flex-col items-start gap-4 rounded-lg bg-bg-warm px-5 py-5 md:flex-row md:items-center md:justify-between md:gap-6 md:px-6 md:py-4">
        <div className="hidden shrink-0 text-ink md:block">
          <UpworkMark className="size-6" />
        </div>

        <div className="flex-1 md:text-center">
          <h2 className="font-serif text-xl text-ink md:text-2xl">
            {site.cta.title}
          </h2>
          <p className="mt-1 text-[12px] text-ink-muted">{site.cta.body}</p>
        </div>

        <Button
          href={site.upworkUrl}
          external
          showArrow
          className="w-full shrink-0 md:w-auto"
        >
          <UpworkMark className="size-3.5 md:hidden" />
          Hire me on Upwork
        </Button>
      </div>
    </section>
  );
}
