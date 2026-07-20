"use client";

import Image from "next/image";
import Link from "next/link";
import { site } from "@/data/site";
import { useLocale } from "@/i18n/LocaleProvider";
import { UpworkMark } from "@/components/ui/UpworkMark";
import {
  InstagramIcon,
  MailIcon,
  TikTokIcon,
} from "@/components/ui/SocialIcons";

const footerLinks = [
  { label: "Instagram", href: site.social.instagram, icon: InstagramIcon },
  { label: "TikTok", href: site.social.tiktok, icon: TikTokIcon },
  { label: "Email", href: site.social.email, icon: MailIcon },
  { label: "Upwork", href: site.social.upwork, icon: UpworkMark },
] as const;

export function Footer() {
  const year = new Date().getFullYear();
  const { t } = useLocale();

  return (
    <footer className="border-t border-border/60 bg-bg">
      <div className="mx-auto flex max-w-6xl items-start justify-between gap-3 px-5 py-5 md:items-center md:px-8 md:py-5">
        <div className="min-w-0">
          <Link href="/" aria-label="Karly — home" className="inline-flex">
            <Image
              src="/images/logo-km.png"
              alt="KM logo"
              width={32}
              height={32}
              className="size-7 object-contain md:size-8"
            />
          </Link>
          <p className="mt-0.5 text-[10px] text-ink-muted md:mt-1 md:text-[11px]">
            © {year} {site.name}. {t.footer.rights}
          </p>
        </div>

        <ul className="flex flex-wrap items-center justify-end gap-x-3 gap-y-1.5 md:gap-4">
          {footerLinks.map(({ label, href, icon: Icon }) => (
            <li key={label}>
              <a
                href={href}
                target={href.startsWith("mailto:") ? undefined : "_blank"}
                rel={
                  href.startsWith("mailto:") ? undefined : "noopener noreferrer"
                }
                className="inline-flex items-center gap-1 text-[10px] text-ink transition-opacity hover:opacity-60 md:gap-1.5 md:text-[12px]"
              >
                <Icon className="size-3 md:size-3.5" />
                {label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </footer>
  );
}
