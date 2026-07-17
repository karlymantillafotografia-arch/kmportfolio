"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { site } from "@/data/site";
import { Button } from "@/components/ui/Button";
import { SocialLinks } from "@/components/ui/SocialLinks";
import { SealBadge } from "@/components/ui/SealBadge";
import { UpworkMark } from "@/components/ui/UpworkMark";

const HERO_IMAGE = "/images/hero-v4.png";

export function Hero() {
  return (
    <section className="relative overflow-hidden">
      {/* Mockup colors: left off-white → right warm beige */}
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          backgroundImage:
            "linear-gradient(90deg, #faf9f8 0%, #f5f0eb 55%, #f2ece7 100%)",
        }}
        aria-hidden
      />

      {/* Same width + side padding as Featured Portfolio */}
      <div className="relative z-10 mx-auto grid max-w-6xl items-center gap-6 px-5 py-5 md:h-[min(52vh,500px)] md:grid-cols-2 md:gap-8 md:px-8 md:py-5">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="order-2 flex h-full w-full max-w-lg flex-col justify-center md:order-1 lg:max-w-[30rem]"
        >
          <p className="font-script text-2xl text-script md:text-[1.85rem] lg:text-[2.1rem]">
            {site.greeting}
          </p>
          <h1 className="mt-1.5 font-serif text-[2.05rem] leading-[1.08] text-ink md:text-[2.55rem] lg:text-[2.95rem]">
            {site.tagline}
          </h1>
          <p className="mt-3 max-w-md text-sm leading-relaxed text-ink-muted md:text-[15px]">
            {site.description}
          </p>

          <div className="mt-5 flex flex-col gap-2.5 sm:flex-row sm:items-center">
            <Button
              href={site.upworkUrl}
              external
              className="w-full px-4 py-2.5 text-[13px] sm:w-auto"
            >
              <UpworkMark className="size-3.5" />
              Hire me on Upwork
            </Button>
            <Button
              href="/portfolio"
              variant="secondary"
              showArrow
              className="w-full px-4 py-2.5 text-[13px] sm:w-auto"
            >
              View Portfolio
            </Button>
          </div>

          <SocialLinks className="mt-5 [&_p]:text-[13px] [&_svg]:size-[15px]" showLabel />
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.45 }}
          className="relative order-1 h-[40vh] w-full md:order-2 md:h-full md:min-h-0"
        >
          <Image
            src={HERO_IMAGE}
            alt="Karly — professional photo retoucher"
            fill
            priority
            sizes="(max-width: 768px) 90vw, 48vw"
            className="object-contain object-bottom md:object-right-bottom"
          />
          <SealBadge className="absolute right-2 bottom-2 z-10 scale-90 md:right-1 md:bottom-4 md:scale-100" />
        </motion.div>
      </div>
    </section>
  );
}
