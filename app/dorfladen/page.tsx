"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ShoppingBag, Wheat, Beef, Apple, Package } from "lucide-react";

const categories = [
  {
    icon: ShoppingBag,
    title: "Päsci's Convenience-Food",
    description: "Fertiggerichte von Päsci – regional und mit Liebe zubereitet.",
    image: "/images/convenience-food.jpg",
  },
  {
    icon: Wheat,
    title: "Frisches Brot",
    description: "Täglich frisch gebackenes Brot von lokalen Bäckereien.",
    image: "/images/fresh-bread.jpg",
  },
  {
    icon: Beef,
    title: "Lokale Fleisch- und Milchprodukte",
    description: "Fleisch und Käse direkt von Bauern aus der Region.",
    image: "/images/meat-cheese.jpg",
  },
  {
    icon: Apple,
    title: "Saisonales Obst und Gemüse",
    description: "Was die Saison hergibt – frisch und voller Geschmack.",
    image: "/images/local-products.jpg",
  },
  {
    icon: Package,
    title: "Teigwaren und Getreideprodukte",
    description: "Nudeln, Reis und Getreide von Schweizer Produzenten.",
    image: "/images/pasta-grains.jpg",
  },
];

const revealVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 },
};

export default function DorfladenPage() {
  return (
    <>
      {/* Sub-hero with large image */}
      <section className="relative h-[60vh] min-h-[500px] overflow-hidden">
        <Image
          src="/images/dorfladen-hero.jpg"
          alt="Dorfladen"
          fill
          className="object-cover"
          priority
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/20 to-black/70" />
        <div className="absolute inset-0 flex items-center justify-center text-center px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            <h1 className="display-hero text-warm-white mb-4">
              Dorfladen
            </h1>
            <p className="subheading text-warm-white/80">
              Lokale Produkte · Frisches Brot · Aus der Region
            </p>
          </motion.div>
        </div>
      </section>

      {/* INTRO */}
      <section className="section-warm-white section-padding-md">
        <div className="container-narrow container-padding">
          <motion.p
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={revealVariants}
            className="body-lg text-center"
            style={{ color: "var(--charcoal)", opacity: 0.85 }}
          >
            Im Dorfladen findest Du alles, was der Alltag braucht – und ein bisschen mehr.
            Produkte aus der Region, die wir persönlich kennen und schätzen.
          </motion.p>
        </div>
      </section>

      {/* SORTIMENT - Image-first layout with balanced asymmetry */}
      <section className="section-warm-white">
        {categories.map((category, index) => (
          <motion.div
            key={category.title}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={revealVariants}
            transition={{ delay: index * 0.05 }}
            className={`py-16 lg:py-24 ${index % 2 === 1 ? "bg-warm-white" : "bg-stone/20"}`}
            style={{
              backgroundColor: index % 2 === 1 ? "var(--warm-white)" : "rgba(206,200,190,0.2)"
            }}
          >
            <div className="container-max container-padding">
              <div className={`grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center ${
                index % 2 === 1 ? "lg:grid-flow-col-dense" : ""
              }`}>
                {/* Image */}
                <div className={`relative aspect-[4/3] overflow-hidden ${index % 2 === 1 ? "lg:col-start-2" : ""}`}>
                  <Image
                    src={category.image}
                    alt={category.title}
                    fill
                    className="object-cover transition-transform duration-700 hover:scale-[1.03]"
                    sizes="(max-width: 1024px) 100vw, 50vw"
                  />
                </div>

                {/* Text */}
                <div className={index % 2 === 1 ? "lg:col-start-1" : ""}>
                  <category.icon size={32} strokeWidth={1} className="mb-6" style={{ color: "var(--aged-brass)" }} />
                  <h3 className="section-title mb-4" style={{ color: "var(--charcoal)" }}>
                    {category.title}
                  </h3>
                  <p className="body-lg" style={{ color: "var(--charcoal)", opacity: 0.8 }}>
                    {category.description}
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </section>

      {/* UNSERE PHILOSOPHIE */}
      <section className="section-charcoal section-padding-lg">
        <div className="container-narrow container-padding">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={revealVariants}
            className="text-center"
          >
            <p className="eyebrow-brass mb-8">
              Unsere Philosophie
            </p>
            <h2 className="section-title mb-12">
              Regional heisst: wir kennen jeden Produzenten persönlich.
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mt-16">
            {[
              { title: "Zero Waste", desc: "Wir vermeiden Verschwendung – vom Einkauf bis zur Auslage." },
              { title: "Regional", desc: "Kurze Wege, frische Produkte, bekannter Ursprung." },
              { title: "Nachhaltig", desc: "Saisonal einkaufen, was die Natur gerade gibt." },
            ].map((item, index) => (
              <motion.div
                key={item.title}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={revealVariants}
                transition={{ delay: index * 0.1 }}
                className="text-center"
              >
                <div className="w-12 h-12 mx-auto mb-6 rounded-full border border-white/20 flex items-center justify-center">
                  <span className="section-title opacity-30">{index + 1}</span>
                </div>
                <h3 className="section-title mb-4">{item.title}</h3>
                <p className="body-md" style={{ opacity: 0.8 }}>
                  {item.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-warm-white section-padding-md">
        <div className="container-max container-padding text-center">
          <h2 className="section-title mb-6" style={{ color: "var(--charcoal)" }}>
            Schau vorbei
          </h2>
          <p className="body-lg mb-10 max-w-lg mx-auto" style={{ color: "var(--charcoal)", opacity: 0.85 }}>
            Wir freuen uns auf Deinen Besuch. Oder komm ins Bistro –
            die Speisekarte orientiert sich an dem, was wir im Laden haben.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/bistro" className="btn btn-primary min-h-[44px] min-w-[44px]">
              Zum Bistro
              <ArrowRight size={14} />
            </Link>
            <Link href="/kontakt" className="btn btn-ghost-dark min-h-[44px] min-w-[44px]">
              Kontakt & Anfahrt
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
