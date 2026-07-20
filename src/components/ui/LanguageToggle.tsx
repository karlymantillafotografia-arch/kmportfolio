"use client";

import { useLocale } from "@/i18n/LocaleProvider";
import { cn } from "@/lib/cn";

type LanguageToggleProps = {
  className?: string;
  compact?: boolean;
};

export function LanguageToggle({ className, compact }: LanguageToggleProps) {
  const { locale, setLocale, t } = useLocale();

  return (
    <div
      role="group"
      aria-label={t.lang.switchTo}
      className={cn(
        "inline-flex items-center rounded-full border border-border/80 bg-bg-warm/80 p-0.5 text-[11px] font-semibold tracking-wide",
        compact && "text-[10px]",
        className,
      )}
    >
      <button
        type="button"
        onClick={() => setLocale("en")}
        aria-pressed={locale === "en"}
        className={cn(
          "rounded-full px-2 py-1 transition-colors",
          locale === "en"
            ? "bg-ink text-bg"
            : "text-ink-muted hover:text-ink",
        )}
      >
        {t.lang.en}
      </button>
      <button
        type="button"
        onClick={() => setLocale("es")}
        aria-pressed={locale === "es"}
        className={cn(
          "rounded-full px-2 py-1 transition-colors",
          locale === "es"
            ? "bg-ink text-bg"
            : "text-ink-muted hover:text-ink",
        )}
      >
        {t.lang.es}
      </button>
    </div>
  );
}
