import { site } from "@/data/site";
import { Button } from "@/components/ui/Button";
import { UpworkMark } from "@/components/ui/UpworkMark";
import { cn } from "@/lib/cn";

type CtaBannerProps = {
  /** Muestra el recuadro pastel también en móvil (como en escritorio). */
  mobileBoxed?: boolean;
};

export function CtaBanner({ mobileBoxed = false }: CtaBannerProps) {
  return (
    <section
      id="contact"
      className={cn(
        "scroll-mt-20 px-5 pt-3 md:px-8 md:py-6",
        mobileBoxed ? "pb-4" : "pb-7",
      )}
    >
      {/* Mobile: plain centered block. Desktop: cream banner row */}
      <div
        className={cn(
          "mx-auto flex max-w-6xl flex-col items-center text-center md:flex-row md:items-center md:justify-between md:gap-6 md:rounded-lg md:bg-bg-warm md:px-6 md:py-4 md:text-center",
          mobileBoxed ? "gap-1.5 rounded-lg bg-bg-warm px-4 py-2.5" : "gap-3 px-0 py-0",
        )}
      >
        <div className="hidden shrink-0 text-ink md:block">
          <UpworkMark className="size-6" />
        </div>

        <div className="flex-1">
          <h2
            className={cn(
              "font-serif text-ink md:text-2xl",
              mobileBoxed ? "text-[1rem]" : "text-[1.35rem]",
            )}
          >
            {site.cta.title}
          </h2>
          <p
            className={cn(
              "mx-auto max-w-sm text-ink-muted md:hidden",
              mobileBoxed
                ? "hidden"
                : "mt-2 text-[12px] leading-relaxed",
            )}
          >
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
          className={cn(
            "shrink-0 [&>svg:last-child]:hidden md:mt-0 md:w-auto md:max-w-none md:[&>svg:last-child]:inline",
            mobileBoxed
              ? "mt-0.5 w-auto px-3.5 py-1.5 text-[11px] md:px-3.5 md:py-2 md:text-[12px]"
              : "mt-1 w-full max-w-xs",
          )}
        >
          <UpworkMark className="size-3.5 md:hidden" />
          Hire me on Upwork
        </Button>
      </div>
    </section>
  );
}
