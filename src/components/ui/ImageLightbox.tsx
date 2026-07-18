"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { X } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";

type ImageLightboxProps = {
  src: string;
  alt: string;
  sizes?: string;
  priority?: boolean;
};

export function ImageLightbox({
  src,
  alt,
  sizes = "50vw",
  priority = false,
}: ImageLightboxProps) {
  const [open, setOpen] = useState(false);

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

  return (
    <>
      <button
        type="button"
        aria-label={`Enlarge image: ${alt}`}
        onClick={() => setOpen(true)}
        className="absolute inset-0 cursor-zoom-in"
      >
        <Image
          src={src}
          alt={alt}
          fill
          priority={priority}
          sizes={sizes}
          className="object-cover"
        />
      </button>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 p-6 backdrop-blur-md md:p-12"
            onClick={() => setOpen(false)}
          >
            <button
              type="button"
              aria-label="Close enlarged image"
              className="absolute top-5 right-5 flex size-10 items-center justify-center rounded-full bg-white/10 text-white transition hover:bg-white/20"
              onClick={() => setOpen(false)}
            >
              <X className="size-5" />
            </button>
            <motion.div
              initial={{ scale: 0.96 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.96 }}
              transition={{ duration: 0.2 }}
              className="relative h-full w-full"
              onClick={(event) => event.stopPropagation()}
            >
              <Image
                src={src}
                alt={alt}
                fill
                sizes="90vw"
                className="cursor-zoom-out object-contain"
                onClick={() => setOpen(false)}
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
