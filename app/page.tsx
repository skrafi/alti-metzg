"use client";

import { motion } from "framer-motion";
import Hero from "@/components/Hero";
import ConceptCard from "@/components/ConceptCard";
import OpeningHours from "@/components/OpeningHours";
import Section, { SectionLabel, SectionTitle, SectionSubtitle } from "@/components/Section";
import Link from "next/link";
import { ArrowRight, MapPin, Phone, Clock } from "lucide-react";

const concepts = [
  {
    title: "Dorfladen",
    description:
      "Lokale Fleisch- und Milchprodukte, frisches Brot, saisonales Obst und Gemüse – alles aus der Region.",
    imageSrc: "/images/dorfladen-shelves.jpg",
    imageAlt: "Dorfladen mit lokalen Produkten",
    href: "/dorfladen",
  },
  {
    title: "Bistro",
    description:
      "Saisonale Speisekarte, die sich am Ladenangebot orientiert. Vielseitig, abwechslungsreich und ohne Verschwendung.",
    imageSrc: "/images/bistro-interior.jpg",
    imageAlt: "Gemütliches Bistro Interieur",
    href: "/bistro",
  },
  {
    title: "Carnotzet",
    description:
      "Ein gemütlicher Weinkeller, wo Du mit Freunden regionale Spezialitäten und einen guten Wein geniessen kannst.",
    imageSrc: "/images/carnotzet-interior.jpg",
    imageAlt: "Rustikales Carnotzet",
    href: "/carnotzet",
  },
];

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <Hero />

      {/* Intro Section */}
      <div id="entdecken" className="relative overflow-hidden">
        <Section>
          <div className="max-w-4xl mx-auto text-center relative z-10">
            {/* Seit 2021 label as part of composition */}
            <SectionLabel>
              Seit 2021 in Mürren
            </SectionLabel>

            <SectionTitle>
              Wo einst eine alte{" "}
              <span className="text-gradient">Metzgerei</span> war
            </SectionTitle>

            <SectionSubtitle className="mt-8">
              Erwartet Dich heute ein Dorfladen, ein kleines Bistro und ein
              gemütliches Carnotzet. Lokales, Saisonales und Authentisches –
              mitten in Mürren.
            </SectionSubtitle>
          </div>
        </Section>
      </div>

      {/* Three Concepts - Asymmetric Layout */}
      <Section>
        <div className="text-center mb-16">
          <SectionLabel>Unsere drei Welten</SectionLabel>
          <SectionTitle>Was Dich erwartet</SectionTitle>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {concepts.map((concept, index) => (
            <ConceptCard key={concept.title} {...concept} index={index} />
          ))}
        </div>
      </Section>

      {/* Opening Hours - Full Width Dark Background */}
      <Section dark className="!py-24">
        <div className="text-center mb-12">
          <SectionLabel light>Öffnungszeiten</SectionLabel>
          <SectionTitle light className="!text-4xl md:!text-5xl">
            Wann wir für Dich da sind
          </SectionTitle>
          <SectionSubtitle light className="mt-6 max-w-2xl mx-auto">
            Wir freuen uns auf Deinen Besuch. Montags ruhen wir uns aus,
            damit wir die restliche Woche mit voller Energie für Dich da sein können.
          </SectionSubtitle>
        </div>

        {/* Horizontal days row */}
        <div className="flex flex-wrap justify-center gap-2 md:gap-3 max-w-5xl mx-auto">
          {["MO", "DI", "MI", "DO", "FR", "SA", "SO"].map((day, index) => {
            const todayIndex = new Date().getDay() === 0 ? 6 : new Date().getDay() - 1;
            const isToday = index === todayIndex;
            const isClosed = index === 0; // Montag is closed

            const hours = [
              { label: "Ruhetag", time: "—" },
              { label: "08:00 – 18:45", time: "08:00 – 18:45" },
              { label: "08:00 – 18:45", time: "08:00 – 18:45" },
              { label: "08:00 – 18:45", time: "08:00 – 18:45" },
              { label: "08:00 – 19:15", time: "08:00 – 19:15" },
              { label: "08:00 – 19:15", time: "08:00 – 19:15" },
              { label: "08:00 – 18:45", time: "08:00 – 18:45" },
            ];

            return (
              <motion.div
                key={day}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                className={`
                  px-6 py-5 min-w-[140px] text-center transition-all duration-300
                  ${isToday
                    ? 'bg-white/10 border border-white/20'
                    : 'hover:bg-white/5'
                  }
                `}
              >
                <div className="text-xs tracking-[0.15em] uppercase mb-2">
                  {day}
                </div>
                <div className={`font-heading text-lg ${isToday ? 'text-white' : 'text-white'} ${isClosed ? 'text-white/50 italic' : ''}`}>
                  {isClosed ? 'Ruhetag' : hours[index].time}
                </div>
              </motion.div>
            );
          })}
        </div>

        <div className="text-center mt-10">
          <Link
            href="/kontakt"
            className="inline-flex items-center gap-2 text-white/70 font-semibold group hover:text-white transition-colors"
          >
            Kontakt & Anfahrt
            <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </Section>

      {/* Location Teaser */}
      <Section>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          {/* Map placeholder */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="aspect-[4/3] overflow-hidden bg-gradient-to-br from-stone-light to-stone/30 relative"
          >
            {/* Decorative grid pattern */}
            <div className="absolute inset-0 opacity-20" style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%231B4332' fill-opacity='0.15'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
            }} />

            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-center">
                <motion.div
                  animate={{ y: [0, -8, 0] }}
                  transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                  className="w-24 h-24 bg-forest/10 flex items-center justify-center mx-auto mb-6"
                >
                  <MapPin size={40} className="text-forest" />
                </motion.div>
                <p className="text-charcoal/50 font-semibold text-lg">Mürren, Schweiz</p>
                <p className="text-charcoal/30 text-sm mt-1">1'638 m ü. M.</p>
              </div>
            </div>
          </motion.div>

          {/* Info */}
          <div>
            <SectionLabel>Anfahrt</SectionLabel>
            <SectionTitle>
              Besuche uns in Mürren
            </SectionTitle>
            <SectionSubtitle className="mt-6">
              Mürren – ein autofreies Bergdorf auf 1'638 Metern über Meer.
              Erreichbar mit der Bahn und Seilbahn ab Lauterbrunnen.
              Ein Ort, der Ruhe und Natur atmet.
            </SectionSubtitle>

            {/* Address Card */}
            <div className="mt-10 p-6 max-w-sm">
              <p className="text-xs text-charcoal/50 mb-1 uppercase tracking-wider">Adresse</p>
              <p className="font-bold text-charcoal text-lg">Zaun 990B</p>
              <p className="text-charcoal/60">3825 Mürren</p>
              <p className="text-charcoal/40 text-sm mt-2">Schweiz</p>
            </div>

            <div className="mt-8 space-y-4">
              <div className="flex items-center gap-5 p-5 group hover:bg-forest/5 transition-colors">
                <div className="w-14 h-14 bg-forest/10 flex items-center justify-center group-hover:bg-forest/20 transition-colors">
                  <Phone size={22} className="text-forest" />
                </div>
                <div>
                  <p className="text-sm text-charcoal/50 mb-1">Telefon</p>
                  <a href="tel:+41335258817" className="text-charcoal font-bold text-lg hover:text-forest transition-colors">
                    033 525 88 17
                  </a>
                </div>
              </div>
            </div>

            <div className="mt-10">
              <Link href="/kontakt" className="btn-primary">
                Kontakt aufnehmen
                <ArrowRight size={18} />
              </Link>
            </div>
          </div>
        </div>
      </Section>
    </>
  );
}
