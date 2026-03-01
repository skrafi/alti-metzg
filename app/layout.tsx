import type { Metadata } from "next";
import { Cormorant_Garamond, Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import ScrollProgress from "@/components/ScrollProgress";

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  style: ["normal", "italic"],
  variable: "--font-cormorant",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-inter",
  display: "swap",
});

const jetbrains = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-jetbrains",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Alti Metzg — Verwurzelt in Mürren",
    template: "%s | Alti Metzg",
  },
  description: "Alti Metzg — Dorfladen, Bistro und Carnotzet in Mürren. Ein Ort für Einheimische und jene, die es werden möchten. Regional, saisonal, ehrlich.",
  keywords: ["Mürren", "Dorfladen", "Bistro", "Carnotzet", "Schweiz", "lokal", "saisonal", "Alpen", "Bergdorf"],
  authors: [{ name: "Alti Metzg" }],
  creator: "Alti Metzg",
  icons: {
    icon: "/icon.svg",
  },
  openGraph: {
    title: "Alti Metzg — Dorfladen · Bistro · Carnotzet",
    description: "Ein Ort für Einheimische. Und für jene, die es werden möchten. Verwurzelt in Mürren.",
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
      <body className={`${cormorant.variable} ${inter.variable} ${jetbrains.variable}`}>
        <ScrollProgress />
        <Navigation />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
