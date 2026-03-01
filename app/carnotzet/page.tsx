"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Wine } from "lucide-react";

const features = [
  {
    number: "01",
    title: "Regionale Weine",
    description: "Eine Auswahl an Weinen aus der Region und darüber hinaus. Lass Dich beraten und entdecke Neues.",
    image: "/images/apero-platter.jpg",
  },
  {
    number: "02",
    title: "Apéroplättli",
    description: "Regionale Spezialitäten auf dem Holzbrett. Käse, Fleisch, Eingemachtes – alles aus der Region.",
    image: "/images/meal-02.jpg",
  },
  {
    number: "03",
    title: "Atmosphäre",
    description: "Natursteinwände, Holzmöbel und gedimmtes Licht schaffen eine Atmosphäre, die zum Bleiben einlädt.",
    image: "/images/carnotzet-interior.jpg",
  },
];

const aperoItems = [
  { name: "Alpkäse", desc: "Aus der Jungfrauregion" },
  { name: "Landjäger", desc: "Lokale Metzgerei" },
  { name: "Brot & Butter", desc: "Frisch vom Dorfladen" },
  { name: "Eingemachtes", desc: "Saisonales aus dem Glas" },
];

const revealVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 },
};

export default function CarnotzetPage() {
  return (
    <div style={{ backgroundColor: "var(--charcoal)", color: "var(--warm-white)" }}>
      {/* HERO - Full screen with vignette */}
      <section className="relative h-screen min-h-[700px] overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/images/carnotzet-hero.jpg"
            alt="Carnotzet"
            fill
            className="object-cover"
            priority
            sizes="100vw"
          />
          {/* Vignette effect */}
          <div className="absolute inset-0 bg-gradient-radial from-transparent via-charcoal/60 to-charcoal" />
        </div>

        {/* Content - Centered */}
        <div className="relative h-full flex flex-col justify-center px-6 lg:px-16 pt-20">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="max-w-2xl mx-auto text-center"
          >
            <p className="eyebrow-brass mb-8">
              Der Keller · Privatanlässe · Regionale Weine
            </p>
            <h1 className="display-hero mb-8">
              Carnotzet
            </h1>
            <p className="body-lg opacity-70 max-w-md mx-auto mb-12">
              Natursteinwände. Gedimmtes Licht. Regionale Weine.
              Eine Atmosphäre die zum Bleiben einlädt.
            </p>
            <Link
              href="#reservation"
              className="btn min-h-[44px] min-w-[44px]"
              style={{
                backgroundColor: "var(--charcoal)",
                color: "var(--warm-white)"
              }}
            >
              Voranmeldung & Anfrage
              <ArrowRight size={14} />
            </Link>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 20, 0] }}
            transition={{ duration: 2.5, repeat: Infinity }}
            className="w-px h-16"
            style={{
              backgroundImage: "linear-gradient(to bottom, var(--aged-brass), transparent)"
            }}
          />
        </motion.div>
      </section>

      {/* DIE GESCHICHTE - Centered text with vignette */}
      <section className="section-padding-lg relative overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/images/carnotzet-interior.jpg"
            alt="Carnotzet Geschichte"
            fill
            className="object-cover"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-charcoal/90" style={{ backgroundColor: "rgba(30,30,28,0.9)" }} />
        </div>

        <div className="container-narrow container-padding relative z-10">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={revealVariants}
            className="text-center"
          >
            <p className="eyebrow-brass mb-8">
              Früher · Jetzt
            </p>
            <h2 className="section-title mb-10">
              Aus der alten Metzgerei...
            </h2>
            <p className="body-lg opacity-80 mb-12 max-w-2xl mx-auto">
              Wo einst ein dunkler Keller war, glänzt nun im neuen Kleid ein gemütliches Carnotzet.
              Der alte Keller der Metzgerei wurde mit viel Liebe zum Detail in
              einen Ort verwandelt, der zum Verweilen einlädt.
            </p>

            {/* Timeline */}
            <div className="flex justify-center gap-12">
              <div>
                <div className="w-2 h-2 rounded-full mx-auto mb-4" style={{ backgroundColor: "var(--aged-brass)" }} />
                <p className="body-xs font-medium tracking-[0.2em] uppercase mb-1 opacity-40">Früher</p>
                <p className="body-md opacity-60">Alte Metzgerei</p>
              </div>
              <div>
                <div className="w-2 h-2 rounded-full mx-auto mb-4" style={{ backgroundColor: "var(--aged-brass)" }} />
                <p className="body-xs font-medium tracking-[0.2em] uppercase mb-1 opacity-40">Die Idee</p>
                <p className="body-md opacity-60">2021</p>
              </div>
              <div>
                <div className="w-2 h-2 rounded-full mx-auto mb-4" style={{ backgroundColor: "var(--aged-brass)" }} />
                <p className="body-xs font-medium tracking-[0.2em] uppercase mb-1 opacity-40">Heute</p>
                <p className="body-md opacity-60">Carnotzet</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* WAS DICH ERWARTET */}
      <section className="section-padding-lg">
        <div className="container-max container-padding">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={revealVariants}
            className="text-center mb-20"
          >
            <p className="eyebrow-brass mb-4">
              Was Dich erwartet
            </p>
            <h2 className="section-title">
              Eine andere Welt
            </h2>
          </motion.div>

          {/* Features */}
          <div className="space-y-24">
            {features.map((feature, index) => (
              <motion.div
                key={feature.number}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={revealVariants}
                transition={{ delay: index * 0.1 }}
                className={`grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center ${
                  index % 2 === 1 ? "lg:grid-flow-col-dense" : ""
                }`}
              >
                {/* Image */}
                <div className={`relative aspect-[4/3] overflow-hidden ${index % 2 === 1 ? "lg:col-start-2" : ""}`}>
                  <Image
                    src={feature.image}
                    alt={feature.title}
                    fill
                    className="object-cover transition-transform duration-700 hover:scale-[1.03]"
                    sizes="(max-width: 1024px) 100vw, 50vw"
                  />
                </div>

                {/* Text */}
                <div className={index % 2 === 1 ? "lg:col-start-1" : ""}>
                  <span className="text-6xl opacity-10" style={{ color: "var(--aged-brass)" }}>{feature.number}</span>
                  <h3 className="section-title mt-4 mb-6">
                    {feature.title}
                  </h3>
                  <p className="body-lg opacity-70">
                    {feature.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* APÉRO GALERIE */}
      <section className="section-padding-lg">
        <div className="container-max container-padding">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={revealVariants}
            className="text-center mb-16"
          >
            <p className="eyebrow-brass mb-4">
              Apéro
            </p>
            <h2 className="section-title">
              Geniessen mit Freunden
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            <div className="relative aspect-[4/3] overflow-hidden">
              <Image
                src="/images/apero-platter.jpg"
                alt="Apéroplättli"
                fill
                className="object-cover transition-transform duration-700 hover:scale-[1.03]"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
            <div className="relative aspect-[4/3] overflow-hidden">
              <Image
                src="/images/wine-selection.jpg"
                alt="Weinauswahl"
                fill
                className="object-cover transition-transform duration-700 hover:scale-[1.03]"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
          </div>

          {/* Apéro items */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {aperoItems.map((item, index) => (
              <motion.div
                key={item.name}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={revealVariants}
                transition={{ delay: index * 0.1 }}
                className="text-center p-6 border border-white/10"
                style={{ borderColor: "rgba(255,255,255,0.1)" }}
              >
                <Wine size={28} strokeWidth={1} className="mx-auto mb-4" style={{ color: "var(--aged-brass)" }} />
                <h3 className="body-md font-medium mb-2">{item.name}</h3>
                <p className="body-sm opacity-50">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* RESERVATION */}
      <section id="reservation" className="section-padding-lg" style={{ backgroundColor: "rgba(47,58,52,0.5)" }}>
        <div className="container-narrow container-padding">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={revealVariants}
            className="text-center mb-12"
          >
            <h2 className="section-title mb-4">
              Einen Abend reservieren
            </h2>
            <p className="body-lg opacity-60">
              Für Gruppen ab 4 Personen · Privatanlässe möglich
            </p>
          </motion.div>

          {/* Form */}
          <motion.form
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={revealVariants}
            transition={{ delay: 0.1 }}
            className="space-y-8 max-w-lg mx-auto"
            onSubmit={(e) => e.preventDefault()}
          >
            <div>
              <label className="label-brass">Name</label>
              <input
                type="text"
                className="input-underline-dark w-full"
                placeholder="Dein Name"
              />
            </div>

            <div>
              <label className="label-brass">E-Mail</label>
              <input
                type="email"
                className="input-underline-dark w-full"
                placeholder="deine@email.ch"
              />
            </div>

            <div>
              <label className="label-brass">Datum & Anzahl Personen</label>
              <input
                type="text"
                className="input-underline-dark w-full"
                placeholder="z.B. Sa 15. März, 6 Personen"
              />
            </div>

            <div>
              <label className="label-brass">Nachricht</label>
              <textarea
                rows={3}
                className="input-underline-dark w-full resize-none"
                placeholder="Deine Nachricht an uns..."
              />
            </div>

            <button
              type="submit"
              className="btn w-full min-h-[44px]"
              style={{
                backgroundColor: "var(--aged-brass)",
                color: "white"
              }}
            >
              Anfrage senden
            </button>
          </motion.form>

          {/* Info */}
          <div className="mt-12 pt-8 border-t border-white/10 grid grid-cols-2 gap-8 max-w-lg mx-auto" style={{ borderColor: "rgba(255,255,255,0.1)" }}>
            <div>
              <p className="body-xs font-medium tracking-[0.2em] uppercase mb-2 opacity-40">Gruppengrösse</p>
              <p className="body-md">Bis zu 12 Personen</p>
            </div>
            <div>
              <p className="body-xs font-medium tracking-[0.2em] uppercase mb-2 opacity-40">Voranmeldung</p>
              <p className="body-md">Min. 2 Tage im Voraus</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding-md" style={{ backgroundColor: "rgba(47,58,52,0.3)" }}>
        <div className="container-max container-padding text-center">
          <h2 className="section-title mb-6">
            Kombiniere Deinen Abend
          </h2>
          <p className="body-lg opacity-60 mb-10">
            Mit einem Besuch im Dorfladen oder Bistro.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/dorfladen"
              className="btn min-h-[44px] min-w-[44px]"
              style={{
                backgroundColor: "transparent",
                borderColor: "rgba(255,255,255,0.3)",
                color: "white"
              }}
            >
              Zum Dorfladen
              <ArrowRight size={14} />
            </Link>
            <Link
              href="/bistro"
              className="btn min-h-[44px] min-w-[44px]"
              style={{
                backgroundColor: "var(--aged-brass)",
                color: "white"
              }}
            >
              Zum Bistro
              <ArrowRight size={14} />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
