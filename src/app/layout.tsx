import type { Metadata } from "next";
import { cookies } from "next/headers";
import {
  Playfair_Display,
  Plus_Jakarta_Sans,
  Great_Vibes,
} from "next/font/google";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { CtaBanner } from "@/components/sections/CtaBanner";
import { LocaleProvider } from "@/i18n/LocaleProvider";
import { defaultLocale, isLocale, LOCALE_COOKIE, type Locale } from "@/i18n/config";
import "./globals.css";

const plusJakarta = Plus_Jakarta_Sans({
  variable: "--font-plus-jakarta",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const greatVibes = Great_Vibes({
  variable: "--font-great-vibes",
  subsets: ["latin"],
  weight: "400",
});

export const metadata: Metadata = {
  title: {
    default: "Karly — Professional Photo Retouching",
    template: "%s · Karly",
  },
  description:
    "High-end photo retouching and image editing for portraits, fashion, and product photography.",
  icons: {
    icon: [
      { url: "/favicon.svg", type: "image/svg+xml" },
      {
        url: "/favicon-light.png",
        type: "image/png",
        media: "(prefers-color-scheme: light)",
      },
      {
        url: "/favicon-dark.png",
        type: "image/png",
        media: "(prefers-color-scheme: dark)",
      },
    ],
    apple: [
      {
        url: "/apple-icon-light.png",
        media: "(prefers-color-scheme: light)",
      },
      {
        url: "/apple-icon-dark.png",
        media: "(prefers-color-scheme: dark)",
      },
    ],
  },
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const cookieStore = await cookies();
  const cookieLocale = cookieStore.get(LOCALE_COOKIE)?.value;
  const initialLocale: Locale = isLocale(cookieLocale)
    ? cookieLocale
    : defaultLocale;

  return (
    <html
      lang={initialLocale}
      className={`${plusJakarta.variable} ${playfair.variable} ${greatVibes.variable} h-full antialiased`}
    >
      <body className="flex min-h-full flex-col bg-bg font-sans text-ink">
        <LocaleProvider initialLocale={initialLocale}>
          <Header />
          {/* Compensa el header fixed (h-14 móvil / h-16 desde md) */}
          <main className="flex flex-1 flex-col pt-14 md:pt-16">
            <div className="flex flex-1 flex-col">{children}</div>
            {/* Ready CTA fijo al pie del main: misma posición en todas las vistas */}
            <CtaBanner />
          </main>
          <Footer />
        </LocaleProvider>
      </body>
    </html>
  );
}
