"use client";

import {
  ReactCompareSlider,
  ReactCompareSliderImage,
} from "react-compare-slider";
import type { BeforeAfterItem } from "@/data/beforeAfter";
import { cn } from "@/lib/cn";

type BeforeAfterSliderProps = {
  item: BeforeAfterItem;
  className?: string;
};

export function BeforeAfterSlider({ item, className }: BeforeAfterSliderProps) {
  return (
    <div
      className={cn(
        "relative overflow-hidden rounded-lg bg-surface-muted",
        className,
      )}
    >
      <ReactCompareSlider
        className="aspect-[4/3] w-full md:aspect-[5/4]"
        itemOne={
          <ReactCompareSliderImage
            src={item.before}
            alt={item.beforeAlt}
            style={{ objectFit: "cover" }}
          />
        }
        itemTwo={
          <ReactCompareSliderImage
            src={item.after}
            alt={item.afterAlt}
            style={{ objectFit: "cover" }}
          />
        }
        handle={
          <div className="flex h-full items-center justify-center">
            <div className="flex size-7 items-center justify-center rounded-full border border-border bg-surface shadow-sm">
              <span className="text-[9px] tracking-wide text-ink">↔</span>
            </div>
          </div>
        }
      />
      <span className="pointer-events-none absolute top-2 left-2 rounded bg-surface/85 px-1.5 py-0.5 text-[9px] tracking-wide text-ink uppercase backdrop-blur-sm">
        Before
      </span>
      <span className="pointer-events-none absolute top-2 right-2 rounded bg-surface/85 px-1.5 py-0.5 text-[9px] tracking-wide text-ink uppercase backdrop-blur-sm">
        After
      </span>
    </div>
  );
}
