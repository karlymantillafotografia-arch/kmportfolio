import type { Metadata } from "next";
import {
  Playfair_Display,
  Plus_Jakarta_Sans,
  Great_Vibes,
} from "next/font/google";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { CtaBanner } from "@/components/sections/CtaBanner";
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
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${plusJakarta.variable} ${playfair.variable} ${greatVibes.variable} h-full antialiased`}
    >
      <body className="flex min-h-full flex-col bg-bg font-sans text-ink">
        <Header />
        {/* Compensa el header fixed (h-14 móvil / h-16 desde md) */}
        <main className="flex flex-1 flex-col pt-14 md:pt-16">
          <div className="flex flex-1 flex-col">{children}</div>
          {/* Ready CTA fijo al pie del main: misma posición en todas las vistas */}
          <CtaBanner />
        </main>
        <Footer />
      </body>
    </html>
  );
}
