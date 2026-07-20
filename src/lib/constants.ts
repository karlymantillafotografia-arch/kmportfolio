export const NAV_ITEMS = [
  { label: "Home", href: "/", hash: undefined },
  { label: "Portfolio", href: "/portfolio", hash: "portfolio" },
  { label: "Services", href: "/services", hash: "services" },
  { label: "Before & After", href: "/before-after", hash: "before-after" },
  { label: "Videos", href: "/videos", hash: "videos" },
  { label: "Consulting", href: "/consulting", hash: "consulting" },
  { label: "About Me", href: "/about", hash: "about" },
  { label: "Contact", href: "/contact", hash: "contact" },
] as const;

export type NavItem = (typeof NAV_ITEMS)[number];
