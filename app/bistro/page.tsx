"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Utensils } from "lucide-react";

const menuCategories = [
  { category: "Vorspeisen", items: [
    { name: "Bruschetta al Pomodoro", desc: "Tomaten, Basilikum, Knoblauch", price: "CHF 14" },
    { name: "Burrata", desc: "San Daniele, Feige, Focaccia", price: "CHF 22" },
  ]},
  { category: "Hauptgerichte", items: [
    { name: "Tagesmenu", desc: "Wechselt täglich – frag nach", price: "~" },
    { name: "Saisonal wechselnd", desc: "Frisch aus dem Laden", price: "~" },
  ]},
  { category: "Desserts", items: [
    { name: "Hausgemacht", desc: "Süsse Versuchungen aus der Küche", price: "~" },
  ]},
];

const seasonalDishes = [
  { title: "Frühling", desc: "Spargel, Rhabarber, frische Kräuter", image: "/images/meal-01.jpg" },
  { title: "Sommer", desc: "Tomaten, Zucchini, Erdbeeren", image: "/images/meal-02.jpg" },
  { title: "Herbst & Winter", desc: "Kürbis, Wurzelgemüse, Wild", image: "/images/meal-03.jpg" },
];

const revealVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 },
};

export default function BistroPage() {
  return (
    <>
      {/* Sub-hero - Dark */}
      <section className="section-charcoal relative h-[50vh] min-h-[400px] flex items-center justify-center overflow-hidden">
        <Image
          src="/images/bistro-hero.jpg"
          alt="Bistro"
          fill
          className="object-cover"
          priority
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 to-black/70" />
        <div className="relative z-10 text-center px-6">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="display-hero text-warm-white mb-4"
          >
            Bistro
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="subheading text-warm-white/80"
          >
            Saisonale Küche · Zero Waste · Vom Laden in den Teller
          </motion.p>
        </div>
      </section>

      {/* PHILOSOPHIE - Light */}
      <section className="section-warm-white section-padding-lg">
        <div className="container-max container-padding">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Image */}
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

            {/* Text */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={revealVariants}
            >
              <p className="eyebrow-brass mb-6">
                Philosophie
              </p>

              <blockquote className="section-title italic mb-8" style={{ color: "var(--charcoal)" }}>
                Vom Laden in den Teller. Zero Waste.
              </blockquote>

              <p className="body-lg mb-6" style={{ color: "var(--charcoal)", opacity: 0.85 }}>
                In unserem kleinen Bistro bieten wir eine übersichtliche saisonale Speisekarte an,
                welche sich am Angebot in unserem Laden anlehnt.
              </p>

              <p className="body-lg mb-10" style={{ color: "var(--charcoal)", opacity: 0.85 }}>
                Somit erwartet Dich ein vielseitiges und abwechslungsreiches Angebot.
                Zusätzlich vermeiden wir auf diesem Weg eine Verschwendung der Lebensmittel.
              </p>

              <div className="flex items-center gap-4">
                <Utensils size={20} strokeWidth={1} style={{ color: "var(--aged-brass)" }} />
                <span className="body-sm opacity-60">Winterkarte 2025/26</span>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* SAISONALE GERICHTE - Image cards */}
      <section className="section-warm-white section-padding-md">
        <div className="container-max container-padding">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={revealVariants}
            className="text-center mb-16"
          >
            <p className="eyebrow-brass mb-4">
              Saisonal
            </p>
            <h2 className="section-title" style={{ color: "var(--charcoal)" }}>
              Was die Saison hergibt
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {seasonalDishes.map((dish, index) => (
              <motion.div
                key={dish.title}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={revealVariants}
                transition={{ delay: index * 0.1 }}
                className="group"
              >
                <div className="relative aspect-[4/3] overflow-hidden mb-6">
                  <Image
                    src={dish.image}
                    alt={dish.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                </div>
                <h3 className="section-title mb-2" style={{ color: "var(--charcoal)" }}>
                  {dish.title}
                </h3>
                <p className="body-md" style={{ color: "var(--charcoal)", opacity: 0.7 }}>
                  {dish.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* SPEISEKARTE - Light */}
      <section className="section-warm-white section-padding-lg">
        <div className="container-narrow container-padding">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={revealVariants}
            className="text-center mb-16"
          >
            <p className="eyebrow-brass mb-4">
              Speisekarte
            </p>
            <h2 className="section-title" style={{ color: "var(--charcoal)" }}>
              Saisonal & Frisch
            </h2>
          </motion.div>

          {/* Menu Editorial List */}
          <div>
            {menuCategories.map((section, sectionIndex) => (
              <motion.div
                key={section.category}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={revealVariants}
                transition={{ delay: sectionIndex * 0.1 }}
                className="mb-12"
              >
                <h3 className="eyebrow mb-6">{section.category}</h3>

                {section.items.map((item, itemIndex) => (
                  <div
                    key={item.name}
                    className="py-5 border-b border-charcoal/10"
                    style={{ borderColor: "rgba(30,30,28,0.1)" }}
                  >
                    <div className="flex justify-between items-start mb-1">
                      <h4 className="body-md font-medium" style={{ color: "var(--charcoal)" }}>{item.name}</h4>
                      <span className="price" style={{ color: "var(--aged-brass)" }}>{item.price}</span>
                    </div>
                    <p className="body-sm" style={{ color: "var(--charcoal)", opacity: 0.6 }}>{item.desc}</p>
                  </div>
                ))}
              </motion.div>
            ))}
          </div>

          <motion.p
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={revealVariants}
            className="text-center body-sm mt-8"
            style={{ color: "var(--charcoal)", opacity: 0.6 }}
          >
            Preise und Gerichte wechseln saisonal. Erfahre mehr vor Ort.
          </motion.p>
        </div>
      </section>

      {/* CTA - Brass */}
      <section className="section-padding-md" style={{ backgroundColor: "var(--aged-brass)" }}>
        <div className="container-narrow container-padding text-center">
          <motion.h2
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={revealVariants}
            className="section-title text-white mb-4"
          >
            Tisch reservieren
          </motion.h2>
          <motion.p
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={revealVariants}
            transition={{ delay: 0.1 }}
            className="body-lg text-white/80 mb-10"
          >
            Wir freuen uns auf Dich
          </motion.p>
          <Link
            href="/kontakt"
            className="btn bg-white text-charcoal hover:bg-warm-white"
            style={{
              backgroundColor: "var(--warm-white)",
              color: "var(--charcoal)"
            }}
          >
            Reservierung
            <ArrowRight size={14} />
          </Link>
        </div>
      </section>
    </>
  );
}
