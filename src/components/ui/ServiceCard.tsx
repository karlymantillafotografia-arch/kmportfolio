import {
  Sparkles,
  Shirt,
  ShoppingBag,
  WandSparkles,
  Layers,
  MessagesSquare,
} from "lucide-react";
import type { ServiceItem } from "@/data/services";
import { cn } from "@/lib/cn";

const icons = {
  portrait: Sparkles,
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

  return (
    <article
      className={cn(
        "flex flex-col items-start rounded-lg bg-surface-muted",
        compact ? "gap-1.5 p-3" : "gap-1.5 p-3.5",
        className,
      )}
    >
      <Icon className="size-4 text-ink" strokeWidth={1.5} aria-hidden />
      <h3 className="font-serif text-[13px] leading-snug text-ink">
        {service.title}
      </h3>
      {!compact ? (
        <p className="text-[11px] leading-relaxed text-ink-muted">
          {service.description}
        </p>
      ) : null}
    </article>
  );
}
