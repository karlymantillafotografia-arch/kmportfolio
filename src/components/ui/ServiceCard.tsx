"use client";

import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import Link from "next/link";
import {
  ScanFace,
  Shirt,
  ShoppingBag,
  WandSparkles,
  Layers,
  MessagesSquare,
  Check,
  ArrowRight,
  X,
} from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";
import type { ServiceItem } from "@/data/services";
import { cn } from "@/lib/cn";

const icons = {
  portrait: ScanFace,
  fashion: Shirt,
  product: ShoppingBag,
  ai: WandSparkles,
  batch: Layers,
  consulting: MessagesSquare,
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
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 p-5 backdrop-blur-md md:p-10"
          onClick={() => setOpen(false)}
        >
          <motion.div
            initial={{ scale: 0.96, y: 8 }}
            animate={{ scale: 1, y: 0 }}
            exit={{ scale: 0.96, y: 8 }}
            transition={{ duration: 0.2 }}
            className="relative max-h-[85vh] w-full max-w-lg overflow-y-auto rounded-2xl bg-bg p-7 shadow-2xl md:p-9"
            onClick={(event) => event.stopPropagation()}
          >
            <button
              type="button"
              aria-label="Close service details"
              className="absolute top-4 right-4 flex size-8 items-center justify-center rounded-full bg-ink/5 text-ink transition hover:bg-ink/10"
              onClick={() => setOpen(false)}
            >
              <X className="size-4" />
            </button>

            <div className="flex size-11 items-center justify-center rounded-full bg-surface-muted">
              <Icon className="size-5 text-ink" strokeWidth={1.35} aria-hidden />
            </div>

            <h3 className="mt-4 font-serif text-2xl text-ink">
              {service.title}
            </h3>
            <p className="mt-3 text-[13px] leading-relaxed text-ink-muted">
              {service.details}
            </p>

            <p className="mt-6 text-[11px] font-medium tracking-[0.18em] text-ink-muted uppercase">
              What&apos;s included
            </p>
            <ul className="mt-3 space-y-2">
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

            <Link
              href="/contact"
              className="mt-7 inline-flex items-center gap-2 rounded-full bg-ink px-5 py-2.5 text-[12px] tracking-wide text-bg transition-opacity hover:opacity-85"
            >
              Start a Project
              <ArrowRight className="size-3.5" aria-hidden />
            </Link>
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
