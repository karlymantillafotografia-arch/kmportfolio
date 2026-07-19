import Link from "next/link";
import { cn } from "@/lib/cn";

type SectionHeadingProps = {
  title: string;
  mobileTitle?: string;
  /** Convierte el título en un enlace (sin recuadro) a la página indicada. */
  href?: string;
  className?: string;
};

export function SectionHeading({
  title,
  mobileTitle,
  href,
  className,
}: SectionHeadingProps) {
  const titleContent = mobileTitle ? (
    <>
      <span className="md:hidden">{mobileTitle}</span>
      <span className="hidden md:inline">{title}</span>
    </>
  ) : (
    title
  );

  return (
    <div className={cn("my-5 flex items-center gap-3 md:my-6", className)}>
      <span className="h-px flex-1 bg-border" aria-hidden />
      <h2 className="shrink-0 text-center text-[11px] font-medium tracking-[0.2em] text-ink uppercase">
        {href ? (
          <Link
            href={href}
            className="transition-opacity hover:opacity-60"
          >
            {titleContent}
          </Link>
        ) : (
          titleContent
        )}
      </h2>
      <span className="h-px flex-1 bg-border" aria-hidden />
    </div>
  );
}
