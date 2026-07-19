import Image from "next/image";
import { Star } from "lucide-react";
import { reviews, type Review } from "@/data/reviews";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { CardCarousel } from "@/components/ui/CardCarousel";
import { PeekCarousel } from "@/components/ui/PeekCarousel";

function ReviewCard({ review }: { review: Review }) {
  return (
    <article className="flex h-full flex-col rounded-xl bg-bg-warm p-3.5 md:p-5">
      <div className="flex gap-1">
        {Array.from({ length: 5 }).map((_, index) => (
          <Star
            key={index}
            className="size-3 fill-amber-500 text-amber-500 md:size-4"
            strokeWidth={1}
          />
        ))}
      </div>
      <p className="mt-2 text-[11px] leading-snug text-ink-muted md:mt-3 md:text-[13px] md:leading-relaxed">
        &ldquo;{review.text}&rdquo;
      </p>
      <div className="mt-auto flex min-w-0 items-center gap-2 pt-3 md:gap-2.5 md:pt-5">
        <span className="relative flex size-6 shrink-0 items-center justify-center overflow-hidden rounded-full bg-surface-muted md:size-8">
          {review.avatar ? (
            <Image
              src={review.avatar}
              alt={`${review.name} avatar`}
              fill
              sizes="32px"
              className="object-cover"
            />
          ) : (
            <span className="text-[11px] font-medium text-ink-muted md:text-[13px]">
              {review.name.charAt(0)}
            </span>
          )}
        </span>
        <span className="truncate text-[11px] font-medium text-ink md:text-[13px]">
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
        <SectionHeading title={title} href="/contact" className="my-4 md:my-6" />

        <div className="hidden md:block">
          <CardCarousel slideClassName="flex-[0_0_30.5%]">
            {reviews.map((review) => (
              <ReviewCard key={review.id} review={review} />
            ))}
          </CardCarousel>
        </div>

        <div className="md:hidden">
          <PeekCarousel slideClassName="flex-[0_0_62%]">
            {reviews.map((review) => (
              <ReviewCard key={review.id} review={review} />
            ))}
          </PeekCarousel>
        </div>
      </div>
    </section>
  );
}
