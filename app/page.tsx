"use client";

import { motion } from "framer-motion";
import Hero from "@/components/Hero";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Utensils, Wine, ShoppingBag, MapPin } from "lucide-react";

// Reveal animation variant for sections
const revealVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 },
};

export default function Home() {
  const todayIndex = new Date().getDay() === 0 ? 6 : new Date().getDay() - 1;

  return (
    <>
      {/* Hero */}
      <Hero />

      {/* DORFLADEN PREVIEW - Image left, text right */}
      <section id="about" className="section-warm-white section-padding-lg">
        <div className="container-max container-padding">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
            {/* Left - Image */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative aspect-[4/5] overflow-hidden"
            >
              <Image
                src="/images/dorfladen-shelves.jpg"
                alt="Dorfladen Regale"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </motion.div>

            {/* Right - Text */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={revealVariants}
              transition={{ duration: 0.7 }}
            >
              <p className="eyebrow-brass mb-6" style={{ color: "var(--aged-brass)" }}>
                Seit 2021
              </p>
              <h2 className="section-title mb-8" style={{ color: "var(--charcoal)" }}>
                Dorfladen
              </h2>
              <p className="body-lg mb-6" style={{ color: "var(--charcoal)", opacity: 0.8 }}>
                Lokale Produkte, frisches Brot, saisonales Gemüse – alles aus der Region.
                Wir kennen jeden Produzenten persönlich.
              </p>
              <ul className="space-y-3 mb-10">
                <li className="body-sm flex items-center gap-3" style={{ color: "var(--charcoal)", opacity: 0.7 }}>
                  <ShoppingBag size={16} strokeWidth={1} style={{ color: "var(--aged-brass)" }} />
                  Päsci's Convenience-Food
                </li>
                <li className="body-sm flex items-center gap-3" style={{ color: "var(--charcoal)", opacity: 0.7 }}>
                  <ShoppingBag size={16} strokeWidth={1} style={{ color: "var(--aged-brass)" }} />
                  Frisches Brot von lokalen Bäckereien
                </li>
                <li className="body-sm flex items-center gap-3" style={{ color: "var(--charcoal)", opacity: 0.7 }}>
                  <ShoppingBag size={16} strokeWidth={1} style={{ color: "var(--aged-brass)" }} />
                  Fleisch- und Milchprodukte aus der Region
                </li>
              </ul>
              <Link
                href="/dorfladen"
                className="btn btn-primary"
              >
                Zum Dorfladen
                <ArrowRight size={14} />
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* BISTRO SECTION - Dark background */}
      <section className="section-charcoal section-padding-lg">
        <div className="container-max container-padding">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
            {/* Left - Text */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={revealVariants}
              transition={{ duration: 0.7 }}
            >
              <p className="eyebrow-brass mb-6">
                Vom Laden in den Teller
              </p>
              <h2 className="section-title mb-8">
                Bistro
              </h2>
              <p className="body-lg mb-6" style={{ opacity: 0.9 }}>
                In unserem kleinen Bistro bieten wir eine übersichtliche saisonale
                Speisekarte an, welche sich am Angebot in unserem Laden anlehnt.
              </p>
              <p className="body-lg mb-10" style={{ opacity: 0.9 }}>
                Somit erwartet Dich ein vielseitiges und abwechslungsreiches Angebot.
                Zusätzlich vermeiden wir auf diesem Weg eine Verschwendung der Lebensmittel.
              </p>
              <div className="flex items-center gap-6 mb-10">
                <div className="flex items-center gap-2">
                  <Utensils size={18} strokeWidth={1} style={{ color: "var(--aged-brass)" }} />
                  <span className="body-sm">Saisonal</span>
                </div>
                <div className="w-px h-4 bg-white/20" />
                <div className="flex items-center gap-2">
                  <span className="body-sm">Zero Waste</span>
                </div>
              </div>
              <Link
                href="/bistro"
                className="btn"
                style={{
                  backgroundColor: "var(--aged-brass)",
                  color: "white"
                }}
              >
                Speisekarte entdecken
                <ArrowRight size={14} />
              </Link>
            </motion.div>

            {/* Right - Image */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative aspect-[4/5] overflow-hidden"
            >
              <Image
                src="/images/bistro-interior.jpg"
                alt="Bistro Interieur"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* CARNOTZET - Emotional centered section */}
      <section className="section-forest section-padding-lg relative overflow-hidden">
        {/* Background image with vignette */}
        <div className="absolute inset-0">
          <Image
            src="/images/carnotzet-interior.jpg"
            alt="Carnotzet"
            fill
            className="object-cover"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-radial from-transparent via-deep-forest/80 to-deep-forest" />
        </div>

        <div className="container-max container-padding relative z-10">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={revealVariants}
            transition={{ duration: 0.8 }}
            className="max-w-3xl mx-auto text-center"
          >
            <p className="eyebrow-brass mb-8">
              Der Keller · Regionale Weine
            </p>
            <h2 className="section-title mb-10">
              Carnotzet
            </h2>
            <p className="body-lg mb-6" style={{ opacity: 0.95 }}>
              Wo einst ein dunkler Keller war, glänzt nun im neuen Kleid ein gemütliches Carnotzet.
            </p>
            <p className="body-lg mb-10" style={{ opacity: 0.95 }}>
              Gemeinsam mit Freunden kannst Du im rustikalen Ambiente eine Flasche Wein trinken
              und dazu ein Apéroplättli mit regionalen Spezialitäten genießen.
            </p>
            <div className="flex items-center justify-center gap-6 mb-10">
              <div className="flex items-center gap-2">
                <Wine size={18} strokeWidth={1} style={{ color: "var(--aged-brass)" }} />
                <span className="body-sm">Regionale Weine</span>
              </div>
              <div className="w-px h-4 bg-white/20" />
              <div className="flex items-center gap-2">
                <span className="body-sm">Apéroplättli</span>
              </div>
            </div>
            <Link
              href="/carnotzet"
              className="btn"
              style={{
                backgroundColor: "var(--aged-brass)",
                color: "white"
              }}
            >
              Carnotzet reservieren
              <ArrowRight size={14} />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* EDITORIAL QUOTE */}
      <section className="section-warm-white section-padding-md">
        <div className="container-max container-padding">
          <motion.blockquote
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={revealVariants}
            className="display-lg text-center italic max-w-4xl mx-auto"
            style={{ color: "var(--charcoal)" }}
          >
            Regional. Saisonal. Ehrlich.
          </motion.blockquote>
        </div>
      </section>

      {/* ÖFFNUNGSZEITEN */}
      <section className="section-warm-white section-padding-lg">
        <div className="container-narrow container-padding">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={revealVariants}
            className="text-center mb-16"
          >
            <p className="eyebrow mb-4">
              Öffnungszeiten
            </p>
            <h2 className="section-title" style={{ color: "var(--charcoal)" }}>
              Wann wir für Dich da sind
            </h2>
          </motion.div>

          {/* Hours Grid */}
          <div className="grid grid-cols-7 gap-2 sm:gap-4">
            {[
              { day: "Mo", time: "Ruhetag", closed: true },
              { day: "Di", time: "08:00–18:45" },
              { day: "Mi", time: "08:00–18:45" },
              { day: "Do", time: "08:00–18:45" },
              { day: "Fr", time: "08:00–19:15" },
              { day: "Sa", time: "08:00–19:15" },
              { day: "So", time: "08:00–18:45" },
            ].map((item, index) => {
              const isToday = index === todayIndex;

              return (
                <motion.div
                  key={item.day}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  variants={revealVariants}
                  transition={{ delay: index * 0.05 }}
                  className={`text-center p-4 sm:p-6 transition-all ${
                    isToday
                      ? "bg-charcoal text-warm-white"
                      : "bg-stone/30 hover:bg-charcoal hover:text-warm-white"
                  }`}
                  style={{
                    backgroundColor: isToday ? "var(--charcoal)" : "rgba(206,200,190,0.3)",
                    color: isToday ? "var(--warm-white)" : "var(--charcoal)"
                  }}
                >
                  <p
                    className={`body-xs font-medium tracking-[0.15em] uppercase mb-2 ${
                      isToday ? "" : "opacity-60"
                    }`}
                  >
                    {item.day}
                  </p>
                  <p className={`body-sm ${item.closed ? "italic opacity-50" : ""}`}>
                    {item.time}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CONTACT TEASER */}
      <section className="section-stone section-padding-lg">
        <div className="container-max container-padding">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Left - Text */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={revealVariants}
            >
              <p className="eyebrow-brass mb-6">
                Mürren · Schweiz
              </p>
              <h2 className="section-title mb-8" style={{ color: "var(--charcoal)" }}>
                Besuche uns
              </h2>
              <p className="body-lg mb-10" style={{ color: "var(--charcoal)", opacity: 0.9 }}>
                Mürren ist ein autofreies Bergdorf auf 1&apos;638 Metern über Meer.
                Nur per Seilbahn erreichbar. Ein Ort, der Ruhe, Natur und Gemeinschaft atmet.
              </p>

              {/* Address */}
              <div className="mb-10 p-6" style={{ backgroundColor: "rgba(30,30,28,0.05)" }}>
                <p className="body-xs font-medium tracking-[0.2em] uppercase mb-3 opacity-60">Adresse</p>
                <p className="section-title mb-1" style={{ color: "var(--charcoal)" }}>Zaun 990B</p>
                <p className="body-md">3825 Mürren, Schweiz</p>
              </div>

              <Link
                href="/kontakt"
                className="btn btn-primary"
              >
                Kontakt & Anfahrt
                <ArrowRight size={14} />
              </Link>
            </motion.div>

            {/* Right - Map */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <a
                href="https://www.google.com/maps/search/?api=1&query=Zaun+990B+3825+Mürren+Schweiz"
                target="_blank"
                rel="noopener noreferrer"
                className="block relative aspect-[4/3] bg-warm-white overflow-hidden group cursor-pointer"
                style={{ backgroundColor: "var(--warm-white)" }}
              >
                <div className="absolute inset-0 flex items-center justify-center p-8">
                  <div className="text-center">
                    <MapPin size={48} strokeWidth={1} className="mx-auto mb-4 transition-transform group-hover:scale-110" style={{ color: "var(--charcoal)", opacity: 0.3 }} />
                    <p className="section-title mb-2" style={{ color: "var(--charcoal)" }}>Mürren</p>
                    <p className="body-md">1&apos;638 m ü. M.</p>
                    <p className="body-sm mt-2 opacity-60">Auf Google Maps öffnen</p>
                  </div>
                </div>
              </a>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
}
