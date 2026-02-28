import type { Metadata } from "next";
import { Playfair_Display, DM_Sans } from "next/font/google";
import "./globals.css";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

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
  title: "Alti Metzg | Dorfladen und Bistro in Mürren",
  description: "Alti Metzg - Dorfladen und Bistro in Mürren, Schweiz. Lokale Produkte, saisonale Küche und ein gemütliches Carnotzet.",
  keywords: ["Mürren", "Dorfladen", "Bistro", "Carnotzet", "Schweiz", "lokal", "saisonal"],
  openGraph: {
    title: "Alti Metzg | Dorfladen und Bistro",
    description: "Wo einst eine alte Metzgerei war, erwartet Dich heute ein Dorfladen, Bistro und Carnotzet.",
    locale: "de_CH",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="de" className="scroll-smooth">
      <body className={`${playfair.variable} ${dmSans.variable} font-sans antialiased bg-secondary text-contrast`}>
        <Navigation />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
