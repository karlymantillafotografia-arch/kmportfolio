import { site } from "@/data/site";
import { Button } from "@/components/ui/Button";
import { UpworkMark } from "@/components/ui/UpworkMark";

export function CtaBanner() {
  return (
    <section id="contact" className="scroll-mt-20 px-5 pt-3 pb-7 md:px-8 md:py-6">
      {/* Mobile: plain centered block. Desktop: cream banner row */}
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-3 px-0 py-0 text-center md:flex-row md:items-center md:justify-between md:gap-6 md:rounded-lg md:bg-bg-warm md:px-6 md:py-4 md:text-center">
        <div className="hidden shrink-0 text-ink md:block">
          <UpworkMark className="size-6" />
        </div>

        <div className="flex-1">
          <h2 className="font-serif text-[1.35rem] text-ink md:text-2xl">
            {site.cta.title}
          </h2>
          <p className="mx-auto mt-2 max-w-sm text-[12px] leading-relaxed text-ink-muted md:hidden">
            {site.cta.mobileBody}
          </p>
          <p className="mt-1 hidden text-[12px] text-ink-muted md:block">
            {site.cta.body}
          </p>
        </div>

        <Button
          href={site.upworkUrl}
          external
          showArrow
          className="mt-1 w-full max-w-xs shrink-0 [&>svg:last-child]:hidden md:mt-0 md:w-auto md:max-w-none md:[&>svg:last-child]:inline"
        >
          <UpworkMark className="size-3.5 md:hidden" />
          Hire me on Upwork
        </Button>
      </div>
    </section>
  );
}
