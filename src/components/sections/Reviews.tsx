import Image from "next/image";
import { Star } from "lucide-react";
import { reviews, type Review } from "@/data/reviews";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { CardCarousel } from "@/components/ui/CardCarousel";
import { PeekCarousel } from "@/components/ui/PeekCarousel";

function ReviewCard({ review }: { review: Review }) {
  return (
    <article className="flex h-full flex-col rounded-xl bg-bg-warm p-5">
      <div className="flex gap-1">
        {Array.from({ length: 5 }).map((_, index) => (
          <Star
            key={index}
            className="size-4 fill-amber-500 text-amber-500"
            strokeWidth={1}
          />
        ))}
      </div>
      <p className="mt-3 text-[13px] leading-relaxed text-ink-muted">
        &ldquo;{review.text}&rdquo;
      </p>
      <div className="mt-auto flex min-w-0 items-center gap-2.5 pt-5">
        <span className="relative flex size-8 shrink-0 items-center justify-center overflow-hidden rounded-full bg-surface-muted">
          {review.avatar ? (
            <Image
              src={review.avatar}
              alt={`${review.name} avatar`}
              fill
              sizes="32px"
              className="object-cover"
            />
          ) : (
            <span className="text-[13px] font-medium text-ink-muted">
              {review.name.charAt(0)}
            </span>
          )}
        </span>
        <span className="truncate text-[13px] font-medium text-ink">
          {review.name}
        </span>
      </div>
    </article>
  );
}

export function Reviews({ title = "Reviews" }: { title?: string }) {
  return (
    <section id="reviews" className="scroll-mt-20 px-5 pt-0 pb-0 md:px-8">
      <div className="mx-auto max-w-6xl">
        <SectionHeading title={title} className="my-4 md:my-6" />

        <div className="hidden md:block">
          <CardCarousel slideClassName="flex-[0_0_30.5%]">
            {reviews.map((review) => (
              <ReviewCard key={review.id} review={review} />
            ))}
          </CardCarousel>
        </div>

        <div className="md:hidden">
          <PeekCarousel slideClassName="flex-[0_0_80%]">
            {reviews.map((review) => (
              <ReviewCard key={review.id} review={review} />
            ))}
          </PeekCarousel>
        </div>
      </div>
    </section>
  );
}
