import { cn } from "@/lib/cn";

type SealBadgeProps = {
  className?: string;
};

export function SealBadge({ className }: SealBadgeProps) {
  return (
    <div
      className={cn(
        "flex size-[4.5rem] items-center justify-center rounded-full bg-seal text-ink shadow-sm md:size-20",
        className,
      )}
      aria-hidden
    >
      <svg viewBox="0 0 120 120" className="size-[88%]">
        <defs>
          <path
            id="seal-circle"
            d="M60,60 m-42,0 a42,42 0 1,1 84,0 a42,42 0 1,1 -84,0"
          />
        </defs>
        <text
          className="fill-ink"
          style={{ fontSize: "9px", letterSpacing: "2px" }}
        >
          <textPath href="#seal-circle" startOffset="0%">
            QUALITY · PRECISION · CREATIVITY ·
          </textPath>
        </text>
        <text
          x="60"
          y="68"
          textAnchor="middle"
          className="fill-ink"
          style={{
            fontFamily: "var(--font-playfair), Georgia, serif",
            fontSize: "32px",
          }}
        >
          K
        </text>
      </svg>
    </div>
  );
}
