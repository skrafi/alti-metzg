"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const colors = { charcoal: "#0F0E0C", brass: "#B08D57", white: "#FFFFFF", stone: "#F6F4F1" };

const values = [
  {
    id: "01",
    title: "Regional",
    desc: "Jedes Produkt hat eine Herkunft. Jeder Bauer ist bekannt. Keine anonymen Lieferungen – nur Persönliches aus der Umgebung von Mürren.",
    img: "/images/dorfladen-shelves.jpg",
    fact: "100% der Produkte aus der Region"
  },
  {
    id: "02",
    title: "Saisonal",
    desc: "Was die Natur gibt, das servieren wir. Spargel im Frühling, Kürbis im Herbst. Echte Küche folgt den Jahreszeiten.",
    img: "/images/bistro-interior.jpg",
    fact: "Jeden Monat neues Angebot"
  },
  {
    id: "03",
    title: "Ehrlich",
    desc: "Was wir sagen, das servieren wir. Keine Marketing-Floskeln. Einfach gut. Das ist unser Versprechen an jeden Gast.",
    img: "/images/carnotzet-interior.jpg",
    fact: "Seit 174 Jahren"
  }
];

export default function Uber4DemoPage() {
  return (
    <div style={{ background: colors.white, minHeight: "100vh" }}>
      {/* Hero - The Philosophy */}
      <section style={{ height: "85vh", position: "relative", overflow: "hidden", background: colors.charcoal }}>
        <Image src="/images/dorfladen-shelves.jpg" alt="Regional" fill style={{ objectFit: "cover", opacity: 0.2 }} />
        <div style={{ position: "absolute", inset: 0, display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", textAlign: "center", padding: "40px" }}>
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1.2 }}>
            <p style={{ fontFamily: "Inter, system-ui, sans-serif", fontSize: "11px", letterSpacing: "0.4em", textTransform: "uppercase", color: colors.brass, marginBottom: "32px" }}>Unsere Philosophie</p>
            <h1 style={{ fontFamily: "Cormorant Garamond, Georgia, serif", fontWeight: 300, fontSize: "clamp(48px, 8vw, 96px)", color: colors.white, lineHeight: 1, marginBottom: "40px" }}>
              Drei Wörter.<br />Alles was wir sind.
            </h1>
          </motion.div>
        </div>
      </section>

      {/* Values - Full Screen Sections */}
      {values.map((value, i) => (
        <section key={i} style={{ minHeight: "100vh", position: "relative", display: "grid", gridTemplateColumns: "1fr 1fr", background: i % 2 === 0 ? colors.stone : colors.white }}>
          {/* Image */}
          <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ duration: 1 }} style={{ position: "relative", height: "100%", minHeight: "100vh", order: i % 2 === 0 ? 1 : 2 }}>
            <Image src={value.img} alt={value.title} fill style={{ objectFit: "cover" }} />
          </motion.div>

          {/* Content */}
          <motion.div initial={{ opacity: 0, x: i % 2 === 0 ? -40 : 40 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.8, delay: 0.2 }} style={{ display: "flex", flexDirection: "column", justifyContent: "center", padding: "80px 100px", order: i % 2 === 0 ? 0 : 1 }}>
            <span style={{ fontFamily: "Cormorant Garamond, Georgia, serif", fontSize: "120px", fontWeight: 200, color: colors.brass, opacity: 0.15, display: "block", marginBottom: "-40px", zIndex: 0 }}>{value.id}</span>
            <div style={{ position: "relative", zIndex: 1 }}>
              <h2 style={{ fontFamily: "Cormorant Garamond, Georgia, serif", fontSize: "clamp(56px, 8vw, 96px)", color: colors.charcoal, fontWeight: 300, marginBottom: "32px", lineHeight: 1 }}>{value.title}</h2>
              <p style={{ fontFamily: "Inter, system-ui, sans-serif", fontSize: "16px", color: "rgba(15,14,12,0.7)", lineHeight: 1.9, marginBottom: "40px" }}>{value.desc}</p>
              <div style={{ display: "inline-block", padding: "16px 24px", border: "1px solid colors.brass", borderRadius: "4px", background: i % 2 === 0 ? "rgba(176,141,87,0.1)" : "rgba(176,141,87,0.05)" }}>
                <p style={{ fontFamily: "Inter, system-ui, sans-serif", fontSize: "12px", letterSpacing: "0.1em", textTransform: "uppercase", color: colors.brass }}>{value.fact}</p>
              </div>
            </div>
          </motion.div>
        </section>
      ))}

      {/* Closing Statement */}
      <section style={{ padding: "150px 60px", background: colors.charcoal, textAlign: "center" }}>
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
          <h2 style={{ fontFamily: "Cormorant Garamond, Georgia, serif", fontSize: "clamp(48px, 8vw, 88px)", color: colors.white, fontWeight: 300, lineHeight: 1, marginBottom: "40px" }}>
            Regional.<br />Saisonal.<br />Ehrlich.
          </h2>
          <p style={{ fontFamily: "Inter, system-ui, sans-serif", fontSize: "16px", color: "rgba(255,255,255,0.5)", letterSpacing: "0.1em" }}>Das ist Alti Metzg.</p>
        </motion.div>
      </section>
    </div>
  );
}
