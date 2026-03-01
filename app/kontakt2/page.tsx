"use client";

import { motion } from "framer-motion";
import { useScroll, useTransform } from "framer-motion";
import { useRef, useEffect, useState } from "react";

const colors = { charcoal: "#0F0E0C", brass: "#B08D57", white: "#FFFFFF", stone: "#F6F4F1" };

const messages = [
  { text: "Herzlich willkommen!", delay: 1000 },
  { text: "Wie können wir helfen?", delay: 2500 },
  { text: "Wir sind für dich da.", delay: 4000 }
];

export default function Kontakt2Page() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [currentMessage, setCurrentMessage] = useState(0);

  const { scrollYProgress } = useScroll({ target: containerRef });
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "20%"]);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentMessage((prev) => (prev + 1) % messages.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div ref={containerRef} style={{ background: colors.white, minHeight: "100vh" }}>
      {/* Hero - Typewriter Concept */}
      <section style={{ height: "100vh", display: "flex", alignItems: "center", justifyContent: "center", padding: "40px", background: colors.charcoal, position: "relative", overflow: "hidden" }}>
        <motion.div style={{ y }}>
          <div style={{ textAlign: "center" }}>
            <motion.p
              key={currentMessage}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
              style={{
                fontFamily: "Cormorant Garamond, Georgia, serif",
                fontSize: "clamp(48px, 8vw, 88px)",
                color: colors.white,
                fontWeight: 300,
                lineHeight: 1.2,
                minHeight: "120px"
              }}
            >
              "{messages[currentMessage].text}"
            </motion.p>

            {/* Animated cursor */}
            <motion.div
              animate={{ opacity: [1, 0, 1] }}
              transition={{ duration: 1, repeat: Infinity }}
              style={{
                display: "inline-block",
                width: "3px",
                height: "clamp(48px, 8vw, 88px)",
                background: colors.brass,
                marginLeft: "4px",
                verticalAlign: "middle"
              }}
            />
          </div>
        </motion.div>

        {/* Decorative elements */}
        <div style={{ position: "absolute", bottom: "40px", left: "40px" }}>
          <p style={{ fontFamily: "Inter, system-ui, sans-serif", fontSize: "11px", letterSpacing: "0.2em", color: "rgba(255,255,255,0.4)" }}>ALTI METZG · MÜRREN</p>
        </div>
      </section>

      {/* Contact Cards Grid */}
      <section style={{ padding: "100px 60px", background: colors.stone }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto", display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "40px" }}>
          {[
            { title: "Anrufen", value: "033 525 88 17", desc: "Mo–So 08:00–22:00", emoji: "📞" },
            { title: "Schreiben", value: "muh@alti-metzg.ch", desc: "Antwort binnen 24h", emoji: "✉️" },
            { title: "Besuchen", value: "Mürren, 3825", desc: "Zaun 990B", emoji: "📍" }
          ].map((card, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, rotate: i % 2 === 0 ? -5 : 5 }}
              whileInView={{ opacity: 1, rotate: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: i * 0.15 }}
              whileHover={{ y: -10, rotate: 0 }}
              style={{
                background: colors.white,
                padding: "48px 32px",
                borderRadius: "16px",
                boxShadow: "0 4px 20px rgba(0,0,0,0.08)",
                textAlign: "center",
                cursor: "pointer"
              }}
            >
              <span style={{ fontSize: "48px", display: "block", marginBottom: "24px" }}>{card.emoji}</span>
              <p style={{ fontFamily: "Inter, system-ui, sans-serif", fontSize: "11px", letterSpacing: "0.3em", textTransform: "uppercase", color: colors.brass, marginBottom: "16px" }}>{card.title}</p>
              <p style={{ fontFamily: "Cormorant Garamond, Georgia, serif", fontSize: "24px", color: colors.charcoal, marginBottom: "8px" }}>{card.value}</p>
              <p style={{ fontFamily: "Inter, system-ui, sans-serif", fontSize: "13px", color: "rgba(15,14,12,0.5)" }}>{card.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Simple Form */}
      <section style={{ padding: "120px 60px", background: colors.white }}>
        <div style={{ maxWidth: "600px", margin: "0 auto", textAlign: "center" }}>
          <h2 style={{ fontFamily: "Cormorant Garamond, Georgia, serif", fontSize: "clamp(36px, 5vw, 52px)", color: colors.charcoal, fontWeight: 300, marginBottom: "24px" }}>
            Oder schreib uns direkt
          </h2>
          <p style={{ fontFamily: "Inter, system-ui, sans-serif", fontSize: "15px", color: "rgba(15,14,12,0.6)", marginBottom: "48px" }}>
            Wir freuen uns auf deine Nachricht.
          </p>

          <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
            {["Dein Name", "Deine E-Mail"].map((placeholder, i) => (
              <input
                key={i}
                type="text"
                placeholder={placeholder}
                style={{
                  width: "100%",
                  padding: "16px 24px",
                  background: colors.stone,
                  border: "2px solid transparent",
                  borderRadius: "8px",
                  outline: "none",
                  fontFamily: "Inter, system-ui, sans-serif",
                  fontSize: "14px",
                  transition: "all 0.3s ease"
                }}
              />
            ))}
            <textarea
              placeholder="Deine Nachricht..."
              rows={4}
              style={{
                width: "100%",
                padding: "16px 24px",
                background: colors.stone,
                border: "2px solid transparent",
                borderRadius: "8px",
                outline: "none",
                fontFamily: "Inter, system-ui, sans-serif",
                fontSize: "14px",
                resize: "none"
              }}
            />
            <button
              style={{
                width: "100%",
                padding: "18px",
                background: colors.brass,
                border: "none",
                color: colors.white,
                fontFamily: "Inter, system-ui, sans-serif",
                fontSize: "14px",
                fontWeight: 500,
                borderRadius: "8px",
                cursor: "pointer",
                transition: "transform 0.2s ease"
              }}
            >
              Nachricht senden
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
