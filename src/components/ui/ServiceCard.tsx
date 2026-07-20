"use client";

import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import Image from "next/image";
import Link from "next/link";
import {
  ScanFace,
  Shirt,
  ShoppingBag,
  WandSparkles,
  Layers,
  MessagesSquare,
  History,
  Building2,
  Heart,
  Check,
  ArrowRight,
  X,
} from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";
import type { ServiceItem } from "@/data/services";
import { useLocale } from "@/i18n/LocaleProvider";
import { cn } from "@/lib/cn";

const icons = {
  portrait: ScanFace,
  fashion: Shirt,
  product: ShoppingBag,
  ai: WandSparkles,
  batch: Layers,
  consulting: MessagesSquare,
  restoration: History,
  realestate: Building2,
  wedding: Heart,
} as const;

type ServiceCardProps = {
  service: ServiceItem;
  className?: string;
  compact?: boolean;
};

export function ServiceCard({
  service,
  className,
  compact = false,
}: ServiceCardProps) {
  const { t } = useLocale();
  const [open, setOpen] = useState(false);
  const [mounted, setMounted] = useState(false);
  const Icon = icons[service.icon];

  useEffect(() => setMounted(true), []);

  useEffect(() => {
    if (!open) return;
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [open]);

  const label =
    compact && service.shortTitle ? service.shortTitle : service.title;

  const modal = (
    <AnimatePresence>
      {open && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 p-4 backdrop-blur-md md:p-8"
          onClick={() => setOpen(false)}
        >
          <motion.div
            initial={{ scale: 0.96, y: 8 }}
            animate={{ scale: 1, y: 0 }}
            exit={{ scale: 0.96, y: 8 }}
            transition={{ duration: 0.2 }}
            className="relative flex max-h-[88vh] w-full max-w-5xl flex-col overflow-hidden rounded-2xl bg-bg shadow-2xl md:h-[82vh] md:flex-row"
            onClick={(event) => event.stopPropagation()}
          >
            <button
              type="button"
              aria-label="Close service details"
              className="absolute top-4 right-4 z-10 flex size-9 items-center justify-center rounded-full bg-black/30 text-white backdrop-blur-sm transition hover:bg-black/50 md:bg-ink/5 md:text-ink md:hover:bg-ink/10"
              onClick={() => setOpen(false)}
            >
              <X className="size-4" />
            </button>

            {/* Collage de fotos */}
            <div className="grid h-44 shrink-0 grid-cols-3 gap-1.5 md:h-auto md:w-[42%] md:grid-cols-2 md:grid-rows-3 md:gap-2 md:p-2">
              <div className="relative col-span-1 overflow-hidden md:col-span-2 md:row-span-2 md:rounded-lg">
                <Image
                  src={service.images[0]}
                  alt={`${service.title} sample 1`}
                  fill
                  sizes="(max-width: 768px) 33vw, 40vw"
                  className="object-cover"
                />
              </div>
              <div className="relative overflow-hidden md:rounded-lg">
                <Image
                  src={service.images[1]}
                  alt={`${service.title} sample 2`}
                  fill
                  sizes="(max-width: 768px) 33vw, 20vw"
                  className="object-cover"
                />
              </div>
              <div className="relative overflow-hidden md:rounded-lg">
                <Image
                  src={service.images[2]}
                  alt={`${service.title} sample 3`}
                  fill
                  sizes="(max-width: 768px) 33vw, 20vw"
                  className="object-cover"
                />
              </div>
            </div>

            {/* Contenido */}
            <div className="min-h-0 flex-1 overflow-y-auto p-6 md:p-9">
              <div className="hidden items-center gap-3 md:flex">
                <div className="flex size-10 items-center justify-center rounded-full bg-surface-muted">
                  <Icon
                    className="size-5 text-ink"
                    strokeWidth={1.35}
                    aria-hidden
                  />
                </div>
                <p className="text-[10px] font-medium tracking-[0.22em] text-ink-muted uppercase">
                  {t.serviceCard.service}
                </p>
              </div>

              <h3 className="mt-0 font-serif text-2xl text-ink md:mt-4 md:text-3xl">
                {service.title}
              </h3>
              <p className="mt-3 text-[13px] leading-relaxed text-ink-muted md:text-sm">
                {service.details}
              </p>

              <p className="mt-7 text-[11px] font-medium tracking-[0.18em] text-ink-muted uppercase">
                {t.serviceCard.included}
              </p>
              <ul className="mt-3 grid gap-x-5 gap-y-2 lg:grid-cols-2">
                {service.includes.map((item) => (
                  <li
                    key={item}
                    className="flex items-start gap-2.5 text-[13px] leading-snug text-ink"
                  >
                    <Check
                      className="mt-0.5 size-3.5 shrink-0 text-ink-muted"
                      strokeWidth={2}
                      aria-hidden
                    />
                    {item}
                  </li>
                ))}
              </ul>

              <p className="mt-7 text-[11px] font-medium tracking-[0.18em] text-ink-muted uppercase">
                {t.serviceCard.how}
              </p>
              <ol className="mt-3 space-y-2.5">
                {service.process.map((step, stepIndex) => (
                  <li
                    key={step}
                    className="flex items-start gap-3 text-[13px] leading-snug text-ink"
                  >
                    <span className="flex size-5 shrink-0 items-center justify-center rounded-full bg-surface-muted font-serif text-[11px] text-ink">
                      {stepIndex + 1}
                    </span>
                    {step}
                  </li>
                ))}
              </ol>

              <div className="mt-8 flex flex-wrap items-center gap-4 border-t border-ink/10 pt-6">
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 rounded-full bg-ink px-5 py-2.5 text-[12px] tracking-wide text-bg transition-opacity hover:opacity-85"
                >
                  {t.serviceCard.start}
                  <ArrowRight className="size-3.5" aria-hidden />
                </Link>
                <Link
                  href="/portfolio"
                  className="text-[12px] tracking-wide text-ink-muted underline-offset-4 transition-colors hover:text-ink hover:underline"
                >
                  {t.serviceCard.related}
                </Link>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );

  return (
    <>
      <button
        type="button"
        onClick={() => setOpen(true)}
        aria-label={`View details: ${service.title}`}
        className={cn(
          "flex cursor-pointer flex-col transition-transform duration-300 hover:-translate-y-0.5",
          compact
            ? "items-center gap-1.5 bg-transparent p-1 text-center"
            : "items-start gap-1.5 rounded-lg bg-surface-muted p-3.5 text-left hover:shadow-sm",
          className,
        )}
      >
        <Icon
          className={cn("text-ink", compact ? "size-5" : "size-4")}
          strokeWidth={1.35}
          aria-hidden
        />
        <h3
          className={cn(
            "font-serif leading-snug text-ink",
            compact ? "text-[11px]" : "text-[13px]",
          )}
        >
          {label}
        </h3>
        {!compact ? (
          <p className="text-[11px] leading-relaxed text-ink-muted">
            {service.description}
          </p>
        ) : null}
      </button>

      {mounted ? createPortal(modal, document.body) : null}
    </>
  );
}
