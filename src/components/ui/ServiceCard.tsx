import {
  ScanFace,
  Shirt,
  ShoppingBag,
  WandSparkles,
  Layers,
  MessagesSquare,
} from "lucide-react";
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
  const Icon = icons[service.icon];

  const label =
    compact && service.shortTitle ? service.shortTitle : service.title;

  return (
    <article
      className={cn(
        "flex flex-col",
        compact
          ? "items-center gap-1.5 bg-transparent p-1 text-center"
          : "items-start gap-1.5 rounded-lg bg-surface-muted p-3.5",
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
    </article>
  );
}
