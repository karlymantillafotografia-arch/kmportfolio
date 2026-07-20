"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { getNavItems } from "@/i18n/localize";
import { useLocale } from "@/i18n/LocaleProvider";
import { cn } from "@/lib/cn";
import { MobileNav } from "@/components/layout/MobileNav";
import { LanguageToggle } from "@/components/ui/LanguageToggle";

function isActive(pathname: string, href: string) {
  if (href === "/") return pathname === "/";
  return pathname === href || pathname.startsWith(`${href}/`);
}

export function Header() {
  const pathname = usePathname();
  const { locale, t } = useLocale();
  const navItems = getNavItems(locale);
  const [open, setOpen] = useState(false);
  const [menuPath, setMenuPath] = useState(pathname);

  if (menuPath !== pathname) {
    setMenuPath(pathname);
    if (open) setOpen(false);
  }

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  useEffect(() => {
    if (!open) return;
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [open]);

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b-0 bg-bg/95 backdrop-blur-md md:border-b md:border-border/50">
      <div className="mx-auto flex h-14 max-w-6xl items-center justify-between gap-3 px-5 md:h-16 md:px-8">
        <Link href="/" aria-label="Karly — home" className="flex items-center">
          <Image
            src="/images/logo-km.png"
            alt="KM logo"
            width={40}
            height={40}
            priority
            className="size-9 object-contain md:size-10"
          />
        </Link>

        <nav className="ml-auto hidden items-center gap-x-5 lg:flex xl:gap-x-7">
          {navItems.map((item) => {
            const active = isActive(pathname, item.href);
            return (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  "relative pb-0.5 text-[13px] font-semibold tracking-wide transition-colors xl:text-[14px]",
                  active
                    ? "text-[#4a4a4a]"
                    : "text-[#6a6a6a] hover:text-[#4a4a4a]",
                )}
              >
                {item.label}
                {active ? (
                  <motion.span
                    layoutId="nav-underline"
                    className="absolute inset-x-0 -bottom-0.5 h-px bg-[#4a4a4a]"
                  />
                ) : null}
              </Link>
            );
          })}
          <LanguageToggle className="ml-1" />
        </nav>

        <div className="flex items-center gap-2 lg:hidden">
          <LanguageToggle compact />
          <button
            type="button"
            className="inline-flex size-9 items-center justify-center rounded-full bg-[#efe8df] text-ink"
            aria-expanded={open}
            aria-controls="mobile-nav"
            aria-label={open ? t.common.closeMenu : t.common.openMenu}
            onClick={() => setOpen((value) => !value)}
          >
            {open ? (
              <X className="size-5" />
            ) : (
              <Menu className="size-5" strokeWidth={1.75} />
            )}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {open ? <MobileNav onClose={() => setOpen(false)} /> : null}
      </AnimatePresence>
    </header>
  );
}
