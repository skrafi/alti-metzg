"use client";

import { motion } from "framer-motion";
import { useRef, useState } from "react";

const colors = { charcoal: "#0F0E0C", brass: "#B08D57", white: "#FFFFFF", stone: "#F6F4F1" };

export default function Kontakt3Page() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  return (
    <div style={{ background: colors.white, minHeight: "100vh" }}>
      {/* Hero - Bold Typography */}
      <section style={{ height: "85vh", display: "flex", alignItems: "center", padding: "40px", background: colors.stone }}>
        <div style={{ maxWidth: "1000px", margin: "0 auto" }}>
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            <p style={{ fontFamily: "Inter, system-ui, sans-serif", fontSize: "11px", letterSpacing: "0.4em", textTransform: "uppercase", color: colors.brass, marginBottom: "24px" }}>Kontakt</p>
            <h1 style={{ fontFamily: "Cormorant Garamond, Georgia, serif", fontSize: "clamp(64px, 10vw, 120px)", color: colors.charcoal, fontWeight: 400, lineHeight: 0.9, marginBottom: "32px" }}>
              Lass uns<br />sprechen.
            </h1>
          </motion.div>
        </div>
      </section>

      {/* Contact Grid - Bold Cards */}
      <section style={{ padding: "100px 60px", background: colors.white }}>
        <div style={{ maxWidth: "1400px", margin: "0 auto", display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: "0" }}>
          {[
            { title: "Anrufen", value: "033 525 88 17", sub: "Mo–So 08:00–22:00" },
            { title: "E-Mail", value: "muh@alti-metzg.ch", sub: "Antwort binnen 24h" },
            { title: "Adresse", value: "Zaun 990B", sub: "3825 Mürren" },
            { title: "Anfahrt", value: "Seilbahn ab Stechelberg", sub: "4 Min. Fahrt" }
          ].map((card, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              onMouseEnter={() => setActiveIndex(i)}
              onMouseLeave={() => setActiveIndex(null)}
              style={{
                padding: "80px 40px",
                background: activeIndex === i ? colors.charcoal : colors.stone,
                border: "1px solid rgba(15,14,12,0.05)",
                transition: "all 0.4s cubic-bezier(0.23, 1, 0.32, 1)"
              }}
            >
              <p style={{ fontFamily: "Inter, system-ui, sans-serif", fontSize: "11px", letterSpacing: "0.3em", textTransform: "uppercase", color: activeIndex === i ? colors.brass : colors.charcoal, marginBottom: "24px" }}>{card.title}</p>
              <p style={{ fontFamily: "Cormorant Garamond, Georgia, serif", fontSize: "clamp(28px, 4vw, 40px)", color: activeIndex === i ? colors.white : colors.charcoal, marginBottom: "16px", lineHeight: 1.2 }}>{card.value}</p>
              <p style={{ fontFamily: "Inter, system-ui, sans-serif", fontSize: "14px", color: activeIndex === i ? "rgba(255,255,255,0.6)" : "rgba(15,14,12,0.5)" }}>{card.sub}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Form Section */}
      <section style={{ padding: "120px 60px", background: colors.charcoal }}>
        <div style={{ maxWidth: "700px", margin: "0 auto" }}>
          <motion.h2
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            style={{ fontFamily: "Cormorant Garamond, Georgia, serif", fontSize: "clamp(40px, 6vw, 64px)", color: colors.white, fontWeight: 300, marginBottom: "48px", textAlign: "center" }}
          >
            Deine Nachricht
          </motion.h2>

          <div style={{ display: "flex", flexDirection: "column", gap: "24px" }}>
            <input
              type="text"
              placeholder="Name"
              style={{
                width: "100%",
                padding: "20px 24px",
                background: "rgba(255,255,255,0.05)",
                border: "1px solid rgba(255,255,255,0.1)",
                color: colors.white,
                fontFamily: "Inter, system-ui, sans-serif",
                fontSize: "15px",
                outline: "none",
                transition: "all 0.3s ease"
              }}
            />
            <input
              type="email"
              placeholder="E-Mail"
              style={{
                width: "100%",
                padding: "20px 24px",
                background: "rgba(255,255,255,0.05)",
                border: "1px solid rgba(255,255,255,0.1)",
                color: colors.white,
                fontFamily: "Inter, system-ui, sans-serif",
                fontSize: "15px",
                outline: "none",
                transition: "all 0.3s ease"
              }}
            />
            <textarea
              placeholder="Nachricht..."
              rows={5}
              style={{
                width: "100%",
                padding: "20px 24px",
                background: "rgba(255,255,255,0.05)",
                border: "1px solid rgba(255,255,255,0.1)",
                color: colors.white,
                fontFamily: "Inter, system-ui, sans-serif",
                fontSize: "15px",
                outline: "none",
                resize: "none",
                transition: "all 0.3s ease"
              }}
            />
            <motion.button
              whileHover={{ scale: 1.02, backgroundColor: colors.brass }}
              whileTap={{ scale: 0.98 }}
              style={{
                padding: "20px 48px",
                background: "transparent",
                border: `1px solid ${colors.brass}`,
                color: colors.white,
                fontFamily: "Inter, system-ui, sans-serif",
                fontSize: "13px",
                letterSpacing: "0.15em",
                textTransform: "uppercase",
                cursor: "pointer",
                alignSelf: "flex-start"
              }}
            >
              Senden
            </motion.button>
          </div>
        </div>
      </section>
    </div>
  );
}
