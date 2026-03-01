"use client";

import { motion } from "framer-motion";
import { useState } from "react";

const colors = { charcoal: "#0F0E0C", brass: "#B08D57", white: "#FFFFFF", stone: "#F6F4F1" };

export default function Kontakt1Page() {
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);

  return (
    <div style={{ background: colors.stone, minHeight: "100vh" }}>
      {/* Hero - Full Screen Contact */}
      <section style={{ height: "100vh", display: "grid", gridTemplateColumns: "1fr 1fr", position: "relative" }}>
        {/* Left - Visual */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
          style={{ background: colors.charcoal, display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", padding: "60px", position: "relative", overflow: "hidden" }}
        >
          {/* Animated circle */}
          <motion.div
            animate={{ scale: [1, 1.5, 1], opacity: [0.1, 0.05, 0.1] }}
            transition={{ duration: 4, repeat: Infinity }}
            style={{ position: "absolute", width: "500px", height: "500px", borderRadius: "50%", background: colors.brass }}
          />

          <h1 style={{ fontFamily: "Cormorant Garamond, Georgia, serif", fontSize: "clamp(64px, 12vw, 140px)", fontWeight: 300, color: colors.white, lineHeight: 0.85, position: "relative", zIndex: 1 }}>
            Sag<br />Hallo.
          </h1>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            style={{ position: "relative", zIndex: 1, marginTop: "40px" }}
          >
            <p style={{ fontFamily: "Inter, system-ui, sans-serif", fontSize: "18px", color: "rgba(255,255,255,0.6)", lineHeight: 1.8 }}>
              Wir freuen uns auf dich.<br />Ehrlich.
            </p>
          </motion.div>
        </motion.div>

        {/* Right - Contact Points */}
        <div style={{ padding: "80px", display: "flex", flexDirection: "column", justifyContent: "center" }}>
          {[
            { label: "Adresse", value: "Zaun 990B, 3825 Mürren", icon: "📍" },
            { label: "Telefon", value: "033 525 88 17", icon: "📞" },
            { label: "E-Mail", value: "muh@alti-metzg.ch", icon: "✉️" }
          ].map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.3 + i * 0.15 }}
              onHoverStart={() => setHoveredCard(i)}
              onHoverEnd={() => setHoveredCard(null)}
              style={{
                padding: "32px 0",
                borderBottom: i < 2 ? "1px solid rgba(15,14,12,0.1)" : "none",
                position: "relative",
                cursor: "pointer"
              }}
            >
              <motion.span
                animate={{ x: hoveredCard === i ? 10 : 0 }}
                style={{ fontSize: "32px", display: "block", marginBottom: "12px" }}
              >
                {item.icon}
              </motion.span>
              <p style={{ fontFamily: "Inter, system-ui, sans-serif", fontSize: "11px", letterSpacing: "0.3em", textTransform: "uppercase", color: colors.brass, marginBottom: "8px" }}>{item.label}</p>
              <p style={{ fontFamily: "Cormorant Garamond, Georgia, serif", fontSize: "28px", color: colors.charcoal }}>{item.value}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Form Section */}
      <section style={{ padding: "120px 60px", background: colors.white }}>
        <div style={{ maxWidth: "800px", margin: "0 auto" }}>
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            style={{ fontFamily: "Cormorant Garamond, Georgia, serif", fontSize: "clamp(40px, 6vw, 64px)", color: colors.charcoal, fontWeight: 300, textAlign: "center", marginBottom: "60px" }}
          >
            Schreib uns
          </motion.h2>

          <div style={{ display: "flex", flexDirection: "column", gap: "32px" }}>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "32px" }}>
              {["Name", "E-Mail"].map((label, i) => (
                <motion.div key={label} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 + i * 0.1 }}>
                  <input
                    type="text"
                    placeholder={label}
                    style={{
                      width: "100%",
                      padding: "20px 0",
                      background: "transparent",
                      border: "none",
                      borderBottom: "1px solid rgba(15,14,12,0.2)",
                      outline: "none",
                      fontFamily: "Inter, system-ui, sans-serif",
                      fontSize: "16px",
                      color: colors.charcoal,
                      transition: "border-color 0.3s ease"
                    }}
                  />
                </motion.div>
              ))}
            </div>
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.3 }}>
              <textarea
                placeholder="Deine Nachricht..."
                rows={5}
                style={{
                  width: "100%",
                  padding: "20px 0",
                  background: "transparent",
                  border: "none",
                  borderBottom: "1px solid rgba(15,14,12,0.2)",
                  outline: "none",
                  fontFamily: "Inter, system-ui, sans-serif",
                  fontSize: "16px",
                  color: colors.charcoal,
                  resize: "none"
                }}
              />
            </motion.div>
            <motion.button
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              whileHover={{ scale: 1.02, backgroundColor: colors.brass }}
              style={{
                padding: "20px 60px",
                background: colors.charcoal,
                border: "none",
                color: colors.white,
                fontFamily: "Inter, system-ui, sans-serif",
                fontSize: "13px",
                letterSpacing: "0.15em",
                textTransform: "uppercase",
                cursor: "pointer",
                transition: "all 0.3s ease",
                alignSelf: "flex-start"
              }}
            >
              Senden →
            </motion.button>
          </div>
        </div>
      </section>
    </div>
  );
}
