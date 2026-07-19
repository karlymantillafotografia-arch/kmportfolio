import { cn } from "@/lib/cn";

type PageIntroProps = {
  title: string;
  description?: string;
  className?: string;
};

export function PageIntro({ title, description, className }: PageIntroProps) {
  return (
    <div
      className={cn(
        "mx-auto max-w-2xl px-5 pt-2 pb-1 text-center md:px-8 md:pt-10 md:pb-2",
        className,
      )}
    >
      <h1 className="font-serif text-2xl text-ink md:text-3xl">{title}</h1>
      {description ? (
        <p className="mt-1.5 text-[13px] leading-snug text-ink-muted md:mt-2 md:leading-relaxed">
          {description}
        </p>
      ) : null}
    </div>
  );
}
