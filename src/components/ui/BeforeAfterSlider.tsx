"use client";

import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import {
  ReactCompareSlider,
  ReactCompareSliderImage,
} from "react-compare-slider";
import { ChevronLeft, ChevronRight, Info, Maximize2, X } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";
import type { BeforeAfterItem } from "@/data/beforeAfter";
import { cn } from "@/lib/cn";

type BeforeAfterSliderProps = {
  item: BeforeAfterItem;
  /** Lista completa para navegar entre comparativas dentro del modal. */
  items?: BeforeAfterItem[];
  /** Muestra el título de la comparativa debajo de la tarjeta. */
  showTitle?: boolean;
  className?: string;
};

function CompareView({
  item,
  className,
  fit = "cover",
  handleOnly = false,
}: {
  item: BeforeAfterItem;
  className?: string;
  fit?: "cover" | "contain";
  /** Solo la manija arrastra la barra; el resto de la imagen queda libre
      para deslizar el carrusel que contiene la tarjeta. */
  handleOnly?: boolean;
}) {
  return (
    <ReactCompareSlider
      className={className}
      onlyHandleDraggable={handleOnly}
      itemOne={
        <ReactCompareSliderImage
          src={item.before}
          alt={item.beforeAlt}
          style={{ objectFit: fit }}
        />
      }
      itemTwo={
        <ReactCompareSliderImage
          src={item.after}
          alt={item.afterAlt}
          style={{ objectFit: fit }}
        />
      }
      handle={
        <div
          className="flex h-full items-center justify-center"
          // Evita que Embla capture el arrastre de la manija
          onPointerDown={(event) => event.stopPropagation()}
          onTouchStart={(event) => event.stopPropagation()}
          onMouseDown={(event) => event.stopPropagation()}
        >
          <div className="flex size-7 items-center justify-center rounded-full border border-border bg-surface shadow-sm">
            <span className="text-[9px] tracking-wide text-ink">↔</span>
          </div>
        </div>
      }
    />
  );
}

function Badges() {
  return (
    <>
      <span className="pointer-events-none absolute top-2 left-2 rounded bg-surface/85 px-1.5 py-0.5 text-[9px] tracking-wide text-ink uppercase backdrop-blur-sm">
        Before
      </span>
      <span className="pointer-events-none absolute top-2 right-2 rounded bg-surface/85 px-1.5 py-0.5 text-[9px] tracking-wide text-ink uppercase backdrop-blur-sm">
        After
      </span>
    </>
  );
}

export function BeforeAfterSlider({
  item,
  items,
  showTitle = false,
  className,
}: BeforeAfterSliderProps) {
  const [open, setOpen] = useState(false);
  const [showInfo, setShowInfo] = useState(false);
  const [mounted, setMounted] = useState(false);
  const [ratio, setRatio] = useState(4 / 5);
  const [index, setIndex] = useState(0);

  const list = items && items.length > 0 ? items : [item];
  const count = list.length;
  const current = list[index] ?? item;

  const goTo = (next: number) => {
    setIndex(((next % count) + count) % count);
    setShowInfo(false);
  };

  useEffect(() => {
    setMounted(true);
  }, []);

  // Medir la proporción real de la foto para que el contenedor del modal
  // coincida con la imagen y la barra no se salga de ella.
  useEffect(() => {
    if (!open) return;
    const img = new window.Image();
    img.onload = () => {
      if (img.naturalHeight > 0) {
        setRatio(img.naturalWidth / img.naturalHeight);
      }
    };
    img.src = current.after;
  }, [open, current.after]);

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
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [open, index, count]);

  const card = (
    <div
      className={cn(
        "relative overflow-hidden bg-surface-muted",
        showTitle ? "" : "rounded-lg",
        className,
      )}
    >
      <CompareView
        item={item}
        handleOnly
        className="aspect-[4/3] w-full md:aspect-[5/4]"
      />
      <Badges />
      <button
        type="button"
        aria-label={`Enlarge comparison: ${item.title}`}
        onClick={() => {
          const start = list.findIndex((entry) => entry.id === item.id);
          setIndex(start >= 0 ? start : 0);
          setShowInfo(false);
          setOpen(true);
        }}
        className="absolute right-2 bottom-2 flex size-7 cursor-pointer items-center justify-center rounded-full bg-surface/85 text-ink shadow-sm backdrop-blur-sm transition hover:bg-surface"
      >
        <Maximize2 className="size-3.5" />
      </button>
    </div>
  );

  return (
    <>
      {showTitle ? (
        /* Tarjeta estilo portafolio: imagen arriba y franja pastel con el título.
           Altura completa y título con alto fijo para que todas midan igual. */
        <article className="flex h-full flex-col overflow-hidden rounded-md bg-bg-warm">
          {card}
          <div className="flex flex-1 items-center px-4 py-3">
            <h3 className="line-clamp-2 min-h-[2.5em] content-center font-serif text-base leading-snug text-ink">
              {item.title}
            </h3>
          </div>
        </article>
      ) : (
        card
      )}

      {/* The modal is rendered in a portal because embla applies a CSS
          transform to the carousel track, which would trap position: fixed
          inside the card. */}
      {mounted &&
        createPortal(
          <AnimatePresence>
            {open && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.2 }}
                className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 p-6 backdrop-blur-md md:p-10"
                onClick={() => setOpen(false)}
              >
                <button
                  type="button"
                  aria-label="Close comparison"
                  className="absolute top-5 right-5 z-10 flex size-10 items-center justify-center rounded-full bg-white/10 text-white transition hover:bg-white/20"
                  onClick={() => setOpen(false)}
                >
                  <X className="size-5" />
                </button>

                {count > 1 && (
                  <>
                    <button
                      type="button"
                      aria-label="Previous comparison"
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
                      aria-label="Next comparison"
                      className="absolute right-4 z-10 flex size-11 items-center justify-center rounded-full bg-white/10 text-white transition hover:bg-white/20 md:right-6"
                      onClick={(event) => {
                        event.stopPropagation();
                        goTo(index + 1);
                      }}
                    >
                      <ChevronRight className="size-6" />
                    </button>
                    <p className="absolute bottom-4 z-10 text-[13px] tracking-widest text-white/80">
                      {index + 1} / {count}
                    </p>
                  </>
                )}

                <motion.div
                  initial={{ scale: 0.96 }}
                  animate={{ scale: 1 }}
                  exit={{ scale: 0.96 }}
                  transition={{ duration: 0.2 }}
                  className="relative flex h-full w-full items-center justify-center"
                  onClick={(event) => event.stopPropagation()}
                >
                  <div
                    className="relative w-full max-w-full max-h-full md:h-full md:w-auto"
                    style={{ aspectRatio: ratio }}
                  >
                    <div className="relative h-full w-full overflow-hidden rounded-lg">
                      <CompareView
                        key={current.id}
                        item={current}
                        fit="contain"
                        className="h-full w-full"
                      />
                    </div>

                    <button
                      type="button"
                      aria-label="Show retouching details"
                      onClick={() => setShowInfo((value) => !value)}
                      className="absolute top-3 right-3 z-20 flex size-8 cursor-pointer items-center justify-center rounded-full bg-surface/85 text-ink shadow-sm backdrop-blur-sm transition hover:bg-surface"
                    >
                      <Info className="size-4" />
                    </button>

                    {/* Móvil: globo sobre la imagen. Escritorio: a la derecha */}
                    <AnimatePresence>
                      {showInfo && (
                        <motion.div
                          initial={{ opacity: 0, x: -10 }}
                          animate={{ opacity: 1, x: 0 }}
                          exit={{ opacity: 0, x: -10 }}
                          transition={{ duration: 0.2 }}
                          className="absolute inset-x-2 top-12 z-10 max-h-[calc(100%-4rem)] md:inset-x-auto md:top-0 md:left-full md:ml-5 md:max-h-full md:w-max md:max-w-[min(24rem,40vw)]"
                        >
                          <span className="absolute top-4 -left-1.5 hidden size-3 rotate-45 bg-[#57524c]/70 md:block" />
                          <div className="max-h-full overflow-y-auto rounded-xl bg-[#57524c]/70 p-4 text-white backdrop-blur-sm md:p-5">
                            <p className="text-center text-[10px] font-medium tracking-[0.18em] text-white/75 uppercase">
                              {current.title}
                            </p>
                            <h3 className="mt-1 text-center font-serif text-lg font-semibold">
                              {current.editsHeading ??
                                "Ediciones realizadas en la imagen"}
                            </h3>
                            <ul className="mt-3 list-disc space-y-0.5 pl-5 text-left text-[13px] leading-snug text-white/95 marker:text-white/60">
                              {current.edits.map((edit) => (
                                <li key={edit}>{edit}</li>
                              ))}
                            </ul>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                </motion.div>
              </motion.div>
            )}
          </AnimatePresence>,
          document.body,
        )}
    </>
  );
}
