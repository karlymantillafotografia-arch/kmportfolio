"use client";

import { site } from "@/data/site";
import { useLocale } from "@/i18n/LocaleProvider";
import { cn } from "@/lib/cn";
import {
  InstagramIcon,
  MailIcon,
  TikTokIcon,
} from "@/components/ui/SocialIcons";

type SocialLinksProps = {
  className?: string;
  showLabel?: boolean;
  withText?: boolean;
};

const links = [
  {
    label: "Instagram",
    href: site.social.instagram,
    icon: InstagramIcon,
  },
  {
    label: "TikTok",
    href: site.social.tiktok,
    icon: TikTokIcon,
  },
  {
    label: "Email",
    href: site.social.email,
    icon: MailIcon,
  },
] as const;

export function SocialLinks({
  className,
  showLabel = false,
  withText = false,
}: SocialLinksProps) {
  const { t } = useLocale();

  return (
    <div className={cn("flex flex-col gap-1.5", className)}>
      {showLabel ? (
        <p className="text-[11px] tracking-wide text-ink-muted">
          {t.hero.connect}
        </p>
      ) : null}
      <ul className="flex items-center gap-3">
        {links.map(({ label, href, icon: Icon }) => (
          <li key={label}>
            <a
              href={href}
              target={href.startsWith("mailto:") ? undefined : "_blank"}
              rel={href.startsWith("mailto:") ? undefined : "noopener noreferrer"}
              className="inline-flex items-center gap-1.5 text-ink transition-opacity hover:opacity-60"
              aria-label={label}
            >
              <Icon className="size-3.5" />
              {withText ? (
                <span className="text-[12px] tracking-wide">{label}</span>
              ) : null}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}
