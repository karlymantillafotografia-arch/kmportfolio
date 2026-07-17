import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { cn } from "@/lib/cn";

type ButtonVariant = "primary" | "secondary" | "ghost";

type ButtonProps = {
  href: string;
  children: React.ReactNode;
  variant?: ButtonVariant;
  className?: string;
  showArrow?: boolean;
  external?: boolean;
};

const variants: Record<ButtonVariant, string> = {
  primary: "bg-ink text-bg hover:bg-ink/90 border border-ink",
  secondary:
    "bg-transparent text-ink border border-ink hover:bg-ink hover:text-bg",
  ghost: "bg-transparent text-ink hover:opacity-70",
};

export function Button({
  href,
  children,
  variant = "primary",
  className,
  showArrow = false,
  external = false,
}: ButtonProps) {
  const classes = cn(
    "inline-flex items-center justify-center gap-1.5 rounded-md px-3.5 py-2 text-[12px] font-medium tracking-wide transition-colors",
    variants[variant],
    className,
  );

  const isExternal =
    external ||
    href.startsWith("http") ||
    href.startsWith("mailto:") ||
    href.startsWith("tel:");

  if (isExternal) {
    return (
      <a
        href={href}
        target={
          href.startsWith("mailto:") || href.startsWith("tel:")
            ? undefined
            : "_blank"
        }
        rel={
          href.startsWith("mailto:") || href.startsWith("tel:")
            ? undefined
            : "noopener noreferrer"
        }
        className={classes}
      >
        {children}
        {showArrow ? <ArrowRight className="size-3.5" aria-hidden /> : null}
      </a>
    );
  }

  return (
    <Link href={href} className={classes}>
      {children}
      {showArrow ? <ArrowRight className="size-3.5" aria-hidden /> : null}
    </Link>
  );
}
