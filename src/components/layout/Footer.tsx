import Link from "next/link";
import { site } from "@/data/site";
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

  return (
    <footer className="border-t border-border/60 bg-bg">
      <div className="mx-auto flex max-w-6xl flex-col gap-4 px-5 py-6 md:flex-row md:items-center md:justify-between md:px-8 md:py-5">
        <div>
          <Link href="/" className="font-serif text-xl text-ink">
            {site.name}
          </Link>
          <p className="mt-1 text-[11px] text-ink-muted">
            © {year} {site.name}. All rights reserved.
          </p>
        </div>

        <ul className="flex flex-wrap items-center gap-4">
          {footerLinks.map(({ label, href, icon: Icon }) => (
            <li key={label}>
              <a
                href={href}
                target={href.startsWith("mailto:") ? undefined : "_blank"}
                rel={
                  href.startsWith("mailto:") ? undefined : "noopener noreferrer"
                }
                className="inline-flex items-center gap-1.5 text-[12px] text-ink transition-opacity hover:opacity-60"
              >
                <Icon className="size-3.5" />
                {label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </footer>
  );
}
