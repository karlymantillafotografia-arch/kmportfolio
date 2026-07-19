"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { site } from "@/data/site";
import { Button } from "@/components/ui/Button";
import { SocialLinks } from "@/components/ui/SocialLinks";
import { SealBadge } from "@/components/ui/SealBadge";
import { UpworkMark } from "@/components/ui/UpworkMark";

const HERO_IMAGE = "/images/hero-v5.png";

export function Hero() {
  return (
    <section className="relative overflow-x-clip">
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          backgroundImage:
            "linear-gradient(90deg, #faf9f8 0%, #f5f0eb 55%, #f2ece7 100%)",
        }}
        aria-hidden
      />

      <div className="relative z-10 mx-auto grid max-w-6xl grid-cols-[1.15fr_0.9fr] items-stretch gap-1 pl-5 pr-0 pt-0 pb-0 md:min-h-[min(52vh,500px)] md:grid-cols-2 md:gap-8 md:px-8">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="relative z-20 flex w-full min-w-0 max-w-lg flex-col justify-center py-4 pr-6 md:h-full md:max-w-lg md:py-5 md:pr-0 lg:max-w-[30rem]"
        >
          <p className="font-script text-[1.3rem] leading-none text-script md:text-[clamp(1.4rem,2.3vw,2.1rem)]">
            {site.greeting}
          </p>
          <h1 className="mt-0.5 font-serif text-[1.3rem] leading-[1.12] tracking-[-0.01em] text-ink md:mt-1.5 md:text-[clamp(1.7rem,3.2vw,2.95rem)]">
            <span className="md:hidden">
              Professional Photo
              <br />
              Retouching & Image
              <br />
              Editing
            </span>
            <span className="hidden md:inline">{site.tagline}</span>
          </h1>
          <p className="mt-3 hidden max-w-md leading-relaxed text-ink-muted md:block md:text-[clamp(12px,1.2vw,15px)]">
            {site.description}
          </p>

          <div className="mt-2 flex w-fit flex-col gap-1 md:mt-5 md:w-auto md:flex-row md:items-center md:gap-2.5">
            <Button
              href={site.upworkUrl}
              external
              className="h-6 w-auto px-2.5 py-0 text-[9px] leading-none md:h-auto md:px-4 md:py-2.5 md:text-[13px]"
            >
              <UpworkMark className="size-2.5 md:size-3.5" />
              Hire me on Upwork
            </Button>
            <Button
              href="/portfolio"
              variant="secondary"
              showArrow
              className="h-6 w-auto border-ink/80 bg-[#f3eee8] px-2.5 py-0 text-[9px] leading-none hover:bg-[#f3eee8] hover:text-ink md:h-auto md:border-ink md:bg-transparent md:px-4 md:py-2.5 md:text-[13px] md:hover:bg-ink md:hover:text-bg [&_svg]:size-2.5 md:[&_svg]:size-3.5"
            >
              View Portfolio
            </Button>
          </div>

          <SocialLinks
            className="mt-1.5 md:mt-5 [&_p]:text-[8px] md:[&_p]:text-[13px] [&_svg]:size-2.5 md:[&_svg]:size-[15px]"
            showLabel
          />
        </motion.div>

        {/* La imagen sobresale a propósito en móvil; el section (overflow-x-clip)
            y html/body lo recortan para no ensanchar el documento. */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.45 }}
          className="relative z-10 -ml-10 min-h-[250px] w-[calc(100%+3.5rem)] max-w-none translate-x-6 self-stretch md:ml-0 md:min-h-[320px] md:w-full md:translate-x-0 md:overflow-hidden"
        >
          <Image
            src={HERO_IMAGE}
            alt="Karly — professional photo retoucher"
            fill
            priority
            sizes="(max-width: 768px) 65vw, 48vw"
            className="origin-bottom-right scale-[1.12] object-contain object-right-bottom md:origin-center md:scale-100 md:object-right-top"
          />
          <SealBadge className="absolute right-0 bottom-0 z-10 scale-[0.5] md:right-1 md:bottom-3 md:scale-100" />
        </motion.div>
      </div>
    </section>
  );
}
