"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const colors = { charcoal: "#0F0E0C", brass: "#B08D57", white: "#FFFFFF", stone: "#F6F4F1" };

const timeline = [
  { year: "1850", title: "Die Gründung", desc: "Ur-Ur-Grossvater eröffnet die Metzgerei in Mürren.", img: "/images/dorfladen-shelves.jpg" },
  { year: "1920", title: "Zweite Generation", desc: "Der Sohn übernimmt und erweitert das Angebot.", img: "/images/bistro-interior.jpg" },
  { year: "1955", title: "Die goldene Ära", desc: "Mürren blüht auf – die Metzgerei wird zum Treffpunkt.", img: "/images/carnotzet-interior.jpg" },
  { year: "1985", title: "Dorfladen", desc: "Die Idee: Produkte direkt vom Bauern an die Gäste.", img: "/images/dorfladen-shelves.jpg" },
  { year: "2021", title: "Carnotzet", desc: "Aus dem Keller wird ein exklusiver Weinkeller.", img: "/images/bistro-interior.jpg" },
  { year: "HEUTE", title: "Tradition trifft Moderne", desc: "Regional. Saisonal. Ehrlich. Seit fast 175 Jahren.", img: "/images/carnotzet-interior.jpg" }
];

export default function Uber2DemoPage() {
  return (
    <div style={{ background: colors.white, minHeight: "100vh" }}>
      {/* Hero - Timeline Concept */}
      <section style={{ height: "85vh", position: "relative", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", padding: "40px", background: colors.charcoal }}>
        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1 }} style={{ textAlign: "center" }}>
          <p style={{ fontFamily: "Inter, system-ui, sans-serif", fontSize: "11px", letterSpacing: "0.4em", textTransform: "uppercase", color: colors.brass, marginBottom: "24px" }}>Seit 1850</p>
          <h1 style={{ fontFamily: "Cormorant Garamond, Georgia, serif", fontWeight: 300, fontSize: "clamp(64px, 12vw, 140px)", color: colors.white, lineHeight: 0.85, marginBottom: "32px" }}>174</h1>
          <p style={{ fontFamily: "Inter, system-ui, sans-serif", fontSize: "16px", color: "rgba(255,255,255,0.6)", letterSpacing: "0.1em" }}>Jahre Tradition</p>
        </motion.div>
      </section>

      {/* Vertical Timeline */}
      <section style={{ padding: "100px 60px", background: colors.white, position: "relative" }}>
        {/* Center line */}
        <div style={{ position: "absolute", left: "50%", top: 0, bottom: 0, width: "1px", background: colors.charcoal, opacity: 0.1 }} />

        <div style={{ maxWidth: "1000px", margin: "0 auto" }}>
          {timeline.map((item, i) => (
            <motion.div key={item.year} initial={{ opacity: 0, x: i % 2 === 0 ? -50 : 50 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.8, delay: i * 0.15 }} style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "60px", marginBottom: i < timeline.length - 1 ? "120px" : "0", alignItems: "center" }}>
              {/* Image - alternates left/right */}
              <div style={{ position: "relative", aspectRatio: "16/10", overflow: "hidden", order: i % 2 === 0 ? 1 : 0 }}>
                <Image src={item.img} alt={item.title} fill style={{ objectFit: "cover", filter: "grayscale(100%) brightness(0.95)" }} />
              </div>

              {/* Content - alternates right/left */}
              <div style={{ order: i % 2 === 0 ? 0 : 1, textAlign: i % 2 === 0 ? "right" : "left" }}>
                <span style={{ fontFamily: "Cormorant Garamond, Georgia, serif", fontSize: "72px", fontWeight: 300, color: colors.brass, opacity: 0.3, display: "block", marginBottom: "16px" }}>{item.year}</span>
                <h3 style={{ fontFamily: "Cormorant Garamond, Georgia, serif", fontSize: "32px", color: colors.charcoal, marginBottom: "16px" }}>{item.title}</h3>
                <p style={{ fontFamily: "Inter, system-ui, sans-serif", fontSize: "15px", color: "rgba(15,14,12,0.6)", lineHeight: 1.7 }}>{item.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Numbers Section */}
      <section style={{ padding: "100px 60px", background: colors.stone }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto", display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: "40px", textAlign: "center" }}>
          {[
            { num: "1850", label: "Gründungsjahr" },
            { num: "174", label: "Jahre Tradition" },
            { num: "4", label: "Generationen" },
            { num: "3", label: "Standorte" }
          ].map((stat, i) => (
            <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}>
              <span style={{ fontFamily: "Cormorant Garamond, Georgia, serif", fontSize: "clamp(48px, 6vw, 72px)", color: colors.brass, display: "block", marginBottom: "8px" }}>{stat.num}</span>
              <p style={{ fontFamily: "Inter, system-ui, sans-serif", fontSize: "13px", textTransform: "uppercase", letterSpacing: "0.15em", color: "rgba(15,14,12,0.6)" }}>{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
}
