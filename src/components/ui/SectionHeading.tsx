import { cn } from "@/lib/cn";

type SectionHeadingProps = {
  title: string;
  mobileTitle?: string;
  className?: string;
};

export function SectionHeading({
  title,
  mobileTitle,
  className,
}: SectionHeadingProps) {
  return (
    <div className={cn("flex items-center gap-3", className)}>
      <span className="h-px flex-1 bg-border" aria-hidden />
      {mobileTitle ? (
        <>
          <h2 className="shrink-0 text-center text-[11px] font-medium tracking-[0.2em] text-ink uppercase md:hidden">
            {mobileTitle}
          </h2>
          <h2 className="hidden shrink-0 text-center text-[11px] font-medium tracking-[0.2em] text-ink uppercase md:block">
            {title}
          </h2>
        </>
      ) : (
        <h2 className="shrink-0 text-center text-[11px] font-medium tracking-[0.2em] text-ink uppercase">
          {title}
        </h2>
      )}
      <span className="h-px flex-1 bg-border" aria-hidden />
    </div>
  );
}
