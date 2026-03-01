import type { Metadata } from "next";
import { Playfair_Display, DM_Sans } from "next/font/google";
import "./globals.css";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import ScrollProgress from "@/components/ScrollProgress";

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-dm-sans",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Alti Metzg | Dorfladen und Bistro in Mürren",
    template: "%s | Alti Metzg",
  },
  description: "Alti Metzg - Dorfladen und Bistro in Mürren, Schweiz. Lokale Produkte, saisonale Küche und ein gemütliches Carnotzet.",
  keywords: ["Mürren", "Dorfladen", "Bistro", "Carnotzet", "Schweiz", "lokal", "saisonal", "Alpen", "Bergdorf"],
  authors: [{ name: "Alti Metzg" }],
  creator: "Alti Metzg",
  icons: {
    icon: "/icon.svg",
  },
  openGraph: {
    title: "Alti Metzg | Dorfladen und Bistro",
    description: "Wo einst eine alte Metzgerei war, erwartet Dich heute ein Dorfladen, Bistro und Carnotzet in Mürren.",
    locale: "de_CH",
    type: "website",
    siteName: "Alti Metzg",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="de" className="scroll-smooth">
      <body className={`${playfair.variable} ${dmSans.variable}`}>
        <ScrollProgress />
        <Navigation />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
