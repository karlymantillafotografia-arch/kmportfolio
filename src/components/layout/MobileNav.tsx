"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";
import { NAV_ITEMS } from "@/lib/constants";
import { cn } from "@/lib/cn";

type MobileNavProps = {
  onClose: () => void;
};

export function MobileNav({ onClose }: MobileNavProps) {
  const pathname = usePathname();

  return (
    <motion.div
      id="mobile-nav"
      initial={{ opacity: 0, y: -8 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -8 }}
      transition={{ duration: 0.2 }}
      className="border-t border-border bg-bg px-5 py-6 lg:hidden"
    >
      <nav className="flex flex-col gap-1">
        {NAV_ITEMS.map((item, index) => {
          const active =
            item.href === "/"
              ? pathname === "/"
              : pathname === item.href || pathname.startsWith(`${item.href}/`);

          return (
            <motion.div
              key={item.href}
              initial={{ opacity: 0, x: -8 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.03 }}
            >
              <Link
                href={item.href}
                onClick={onClose}
                className={cn(
                  "block rounded-md px-3 py-3 text-[15px] font-semibold tracking-wide",
                  active ? "bg-surface-muted text-ink" : "text-ink",
                )}
              >
                {item.label}
              </Link>
            </motion.div>
          );
        })}
      </nav>
    </motion.div>
  );
}
