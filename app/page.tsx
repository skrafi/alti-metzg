"use client";

import { motion } from "framer-motion";
import Hero from "@/components/Hero";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, ShoppingBag } from "lucide-react";
import GlobalFooter from "@/components/GlobalFooter";

// Reveal animation variant for sections
const revealVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 },
};

export default function Home() {

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
                style={{ filter: "brightness(1.1) saturate(1.05)" }}
                priority
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
                className="btn btn-primary min-h-[44px] min-w-[44px]"
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
              <Link
                href="/bistro"
                className="btn min-h-[44px] min-w-[44px]"
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
                style={{ filter: "brightness(1.05) saturate(1.02)" }}
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* CARNOTZET - Redesigned with proper image visibility */}
      <section className="section-charcoal section-padding-lg relative overflow-hidden">
        {/* Background image with reduced overlay */}
        <div className="absolute inset-0">
          <Image
            src="/images/carnotzet-interior.jpg"
            alt="Carnotzet"
            fill
            className="object-cover"
            sizes="100vw"
          />
          {/* Lighter overlay - image is now visible */}
          <div className="absolute inset-0"
               style={{ background: "radial-gradient(circle at center, rgba(0,0,0,0.2) 0%, rgba(0,0,0,0.5) 70%, rgba(0,0,0,0.75) 100%)" }} />
          <div className="absolute inset-0"
               style={{ background: "linear-gradient(to bottom, rgba(0,0,0,0.3) 0%, rgba(0,0,0,0.6) 100%)" }} />
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
            <p className="eyebrow-brass mb-8" style={{ textShadow: "0 2px 8px rgba(0,0,0,0.5)" }}>
              Der Keller · Regionale Weine
            </p>
            <h2 className="section-title mb-10" style={{ color: "#F6F4F1", textShadow: "0 2px 8px rgba(0,0,0,0.5)" }}>
              Carnotzet
            </h2>
            <p className="body-lg mb-6" style={{ color: "#F6F4F1", opacity: 0.95, textShadow: "0 2px 8px rgba(0,0,0,0.5)" }}>
              Wo einst ein dunkler Keller war, glänzt nun im neuen Kleid ein gemütliches Carnotzet.
            </p>
            <p className="body-lg mb-10" style={{ color: "#F6F4F1", opacity: 0.95, textShadow: "0 2px 8px rgba(0,0,0,0.5)" }}>
              Gemeinsam mit Freunden kannst Du im rustikalen Ambiente eine Flasche Wein trinken
              und dazu ein Apéroplättli mit regionalen Spezialitäten genießen.
            </p>
            <Link
              href="/carnotzet"
              className="btn min-h-[44px] min-w-[44px]"
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


      <GlobalFooter />
    </>
  );
}
