import { cn } from "@/lib/cn";

type SectionHeadingProps = {
  title: string;
  className?: string;
};

export function SectionHeading({ title, className }: SectionHeadingProps) {
  return (
    <div className={cn("flex items-center gap-3", className)}>
      <span className="h-px flex-1 bg-border" aria-hidden />
      <h2 className="shrink-0 text-center text-[11px] font-medium tracking-[0.2em] text-ink uppercase">
        {title}
      </h2>
      <span className="h-px flex-1 bg-border" aria-hidden />
    </div>
  );
}
