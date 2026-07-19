"use client";

import Image from "next/image";
import { useCallback, useEffect, useRef, useState } from "react";
import { ChevronLeft, ChevronRight, X } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";

export type LightboxImage = {
  src: string;
  alt: string;
};

type ImageLightboxProps = {
  images: LightboxImage[];
  sizes?: string;
  priority?: boolean;
};

export function ImageLightbox({
  images,
  sizes = "50vw",
  priority = false,
}: ImageLightboxProps) {
  const [open, setOpen] = useState(false);
  const [index, setIndex] = useState(0);
  const [zoomed, setZoomed] = useState(false);
  const [origin, setOrigin] = useState({ x: 50, y: 50 });
  const touchStartX = useRef<number | null>(null);

  const count = images.length;
  const cover = images[0];
  const current = images[index] ?? cover;

  const goTo = useCallback(
    (next: number) => {
      setIndex(((next % count) + count) % count);
      setZoomed(false);
    },
    [count],
  );

  useEffect(() => {
    if (!open) return;
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
      if (event.key === "ArrowRight") goTo(index + 1);
      if (event.key === "ArrowLeft") goTo(index - 1);
    };
    window.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [open, index, goTo]);

  const pointFromEvent = (event: React.MouseEvent<HTMLElement>) => {
    const rect = event.currentTarget.getBoundingClientRect();
    return {
      x: ((event.clientX - rect.left) / rect.width) * 100,
      y: ((event.clientY - rect.top) / rect.height) * 100,
    };
  };

  const handleImageClick = (event: React.MouseEvent<HTMLElement>) => {
    setOrigin(pointFromEvent(event));
    setZoomed((value) => !value);
  };

  const handleMouseMove = (event: React.MouseEvent<HTMLElement>) => {
    if (!zoomed) return;
    setOrigin(pointFromEvent(event));
  };

  // Deslizar en pantallas táctiles para cambiar de foto
  const handleTouchStart = (event: React.TouchEvent<HTMLElement>) => {
    touchStartX.current = event.touches[0].clientX;
  };

  const handleTouchEnd = (event: React.TouchEvent<HTMLElement>) => {
    if (touchStartX.current === null || zoomed || count < 2) return;
    const delta = event.changedTouches[0].clientX - touchStartX.current;
    touchStartX.current = null;
    if (Math.abs(delta) < 50) return;
    goTo(delta < 0 ? index + 1 : index - 1);
  };

  return (
    <>
      <button
        type="button"
        aria-label={`Enlarge image: ${cover.alt}`}
        onClick={() => {
          setIndex(0);
          setZoomed(false);
          setOpen(true);
        }}
        className="absolute inset-0 cursor-zoom-in"
      >
        <Image
          src={cover.src}
          alt={cover.alt}
          fill
          priority={priority}
          sizes={sizes}
          unoptimized
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
              className="absolute top-5 right-5 z-10 flex size-10 items-center justify-center rounded-full bg-white/10 text-white transition hover:bg-white/20"
              onClick={() => setOpen(false)}
            >
              <X className="size-5" />
            </button>

            {count > 1 && (
              <>
                <button
                  type="button"
                  aria-label="Previous image"
                  className="absolute left-4 z-10 flex size-11 items-center justify-center rounded-full bg-white/10 text-white transition hover:bg-white/20 md:left-6"
                  onClick={(event) => {
                    event.stopPropagation();
                    goTo(index - 1);
                  }}
                >
                  <ChevronLeft className="size-6" />
                </button>
                <button
                  type="button"
                  aria-label="Next image"
                  className="absolute right-4 z-10 flex size-11 items-center justify-center rounded-full bg-white/10 text-white transition hover:bg-white/20 md:right-6"
                  onClick={(event) => {
                    event.stopPropagation();
                    goTo(index + 1);
                  }}
                >
                  <ChevronRight className="size-6" />
                </button>
                <p className="absolute bottom-5 z-10 text-[13px] tracking-widest text-white/80">
                  {index + 1} / {count}
                </p>
              </>
            )}

            <motion.div
              initial={{ scale: 0.96 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.96 }}
              transition={{ duration: 0.2 }}
              className="relative h-full w-full overflow-hidden"
              onClick={(event) => event.stopPropagation()}
              onTouchStart={handleTouchStart}
              onTouchEnd={handleTouchEnd}
            >
              <div
                className={zoomed ? "absolute inset-0 cursor-zoom-out" : "absolute inset-0 cursor-zoom-in"}
                onClick={handleImageClick}
                onMouseMove={handleMouseMove}
              >
                <Image
                  key={current.src}
                  src={current.src}
                  alt={current.alt}
                  fill
                  sizes="90vw"
                  unoptimized
                  className="object-contain transition-transform duration-200"
                  style={{
                    transform: zoomed ? "scale(2.5)" : "scale(1)",
                    transformOrigin: `${origin.x}% ${origin.y}%`,
                  }}
                />
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
