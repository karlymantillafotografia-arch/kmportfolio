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

      {/* Hasta lg (tablet incluida) se mantiene el layout compacto tipo móvil.
          El layout de escritorio empieza en lg. */}
      <div className="relative z-10 mx-auto grid max-w-6xl grid-cols-[1.15fr_0.9fr] items-stretch gap-1 pl-5 pr-0 pt-0 pb-0 md:min-h-[420px] md:grid-cols-[1.05fr_1fr] md:gap-0 md:px-8 md:py-0 lg:min-h-[min(52vh,500px)] lg:grid-cols-2 lg:gap-8">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="relative z-20 flex w-full min-w-0 max-w-lg flex-col justify-center py-4 pr-6 md:max-w-none md:justify-center md:py-0 md:pr-10 lg:h-full lg:max-w-[30rem] lg:py-5 lg:pr-0"
        >
          <p className="font-script text-[1.3rem] leading-none text-script md:text-[2.15rem] lg:text-[clamp(1.4rem,2.3vw,2.1rem)]">
            {site.greeting}
          </p>
          <h1 className="mt-0.5 font-serif text-[1.3rem] leading-[1.12] tracking-[-0.01em] text-ink md:mt-2 md:text-[2.25rem] md:leading-[1.12] lg:mt-1.5 lg:text-[clamp(1.7rem,3.2vw,2.95rem)]">
            <span className="lg:hidden">
              Professional Photo
              <br />
              Retouching & Image
              <br />
              Editing
            </span>
            <span className="hidden lg:inline">{site.tagline}</span>
          </h1>
          <p className="mt-3 hidden max-w-md leading-relaxed text-ink-muted lg:block lg:text-[clamp(12px,1.2vw,15px)]">
            {site.description}
          </p>

          <div className="mt-2 flex w-fit flex-col gap-1 md:mt-5 md:gap-2 lg:mt-5 lg:w-auto lg:flex-row lg:items-center lg:gap-2.5">
            <Button
              href={site.upworkUrl}
              external
              className="h-6 w-auto px-2.5 py-0 text-[9px] leading-none md:h-10 md:px-5 md:text-[13px] lg:h-auto lg:px-4 lg:py-2.5 lg:text-[13px]"
            >
              <UpworkMark className="size-2.5 md:size-4 lg:size-3.5" />
              Hire me on Upwork
            </Button>
            <Button
              href="/portfolio"
              variant="secondary"
              showArrow
              className="h-6 w-auto border-ink/80 bg-[#f3eee8] px-2.5 py-0 text-[9px] leading-none hover:bg-[#f3eee8] hover:text-ink md:h-10 md:px-5 md:text-[13px] lg:h-auto lg:border-ink lg:bg-transparent lg:px-4 lg:py-2.5 lg:text-[13px] lg:hover:bg-ink lg:hover:text-bg [&_svg]:size-2.5 md:[&_svg]:size-4 lg:[&_svg]:size-3.5"
            >
              View Portfolio
            </Button>
          </div>

          <SocialLinks
            className="mt-1.5 md:mt-5 lg:mt-5 [&_p]:text-[8px] md:[&_p]:text-[13px] lg:[&_p]:text-[13px] [&_svg]:size-2.5 md:[&_svg]:size-4 lg:[&_svg]:size-[15px]"
            showLabel
          />
        </motion.div>

        {/* Móvil/tablet: la imagen se mete sobre la columna de texto (z debajo del copy).
            Escritorio: columnas separadas sin solapamiento. */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.45 }}
          className="relative z-10 -ml-10 min-h-[250px] w-[calc(100%+3.5rem)] max-w-none translate-x-6 self-stretch md:-ml-24 md:min-h-0 md:h-full md:w-[calc(100%+6rem)] md:translate-x-0 lg:ml-0 lg:min-h-[320px] lg:w-full lg:overflow-hidden"
        >
          <Image
            src={HERO_IMAGE}
            alt="Karly — professional photo retoucher"
            fill
            priority
            sizes="(max-width: 1023px) 60vw, 48vw"
            className="origin-bottom-right scale-[1.12] object-contain object-right-bottom md:origin-bottom-right md:scale-[1.08] md:object-contain md:object-right-bottom lg:origin-center lg:scale-100 lg:object-contain lg:object-right-top"
          />
          <SealBadge className="absolute right-0 bottom-0 z-10 scale-[0.5] md:right-3 md:bottom-3 md:scale-[0.7] lg:right-1 lg:bottom-3 lg:scale-100" />
        </motion.div>
      </div>
    </section>
  );
}
