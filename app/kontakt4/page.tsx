"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef, useState } from "react";

const colors = { charcoal: "#0F0E0C", brass: "#B08D57", white: "#FFFFFF", stone: "#F6F4F1" };

export default function Kontakt4Page() {
  const [scrollProgress, setScrollProgress] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  scrollYProgress.on("change", (latest) => {
    setScrollProgress(latest);
  });

  const scale = useTransform(scrollYProgress, [0, 1], [1, 0.8]);
  const opacity = useTransform(scrollYProgress, [0, 0.3], [1, 0]);
  const rotate = useTransform(scrollYProgress, [0, 1], [0, 360]);

  return (
    <div ref={containerRef} style={{ background: colors.white, minHeight: "100vh", overflow: "hidden" }}>
      {/* Fixed Background with Scale Effect */}
      <motion.div style={{ scale, opacity, position: "fixed", inset: 0, zIndex: -1 }}>
        <div style={{ width: "100%", height: "100%", background: colors.stone, display: "flex", alignItems: "center", justifyContent: "center" }}>
          <motion.h1
            style={{
              rotate,
              fontFamily: "Cormorant Garamond, Georgia, serif",
              fontSize: "clamp(80px, 20vw, 200px)",
              color: "rgba(15,14,12,0.03)",
              fontWeight: 300,
              lineHeight: 1
            }}
          >
            KONTAKT
          </motion.h1>
        </div>
      </motion.div>

      {/* Scroll Content */}
      <div style={{ position: "relative", zIndex: 1 }}>
        {/* Hero */}
        <section style={{ height: "100vh", display: "flex", alignItems: "center", justifyContent: "center", padding: "40px", background: "transparent" }}>
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            style={{ textAlign: "center" }}
          >
            <p style={{ fontFamily: "Inter, system-ui, sans-serif", fontSize: "11px", letterSpacing: "0.4em", textTransform: "uppercase", color: colors.brass, marginBottom: "24px" }}>Alti Metzg</p>
            <h1 style={{ fontFamily: "Cormorant Garamond, Georgia, serif", fontSize: "clamp(56px, 10vw, 100px)", color: colors.charcoal, fontWeight: 300, lineHeight: 0.9, marginBottom: "32px" }}>
              Wir hören<br />dir zu.
            </h1>
            <motion.div animate={{ y: [0, 10, 0] }} transition={{ duration: 2, repeat: Infinity }} style={{ fontSize: "24px" }}>↓</motion.div>
          </motion.div>
        </section>

        {/* Contact List - Minimal */}
        <section style={{ minHeight: "100vh", padding: "100px 60px", display: "flex", alignItems: "center", justifyContent: "center" }}>
          <div style={{ maxWidth: "600px", width: "100%" }}>
            {[
              { label: "Telefon", value: "033 525 88 17" },
              { label: "E-Mail", value: "muh@alti-metzg.ch" },
              { label: "Adresse", value: "Zaun 990B, 3825 Mürren" }
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.15 }}
                style={{ padding: "32px 0", borderBottom: "1px solid rgba(15,14,12,0.1)" }}
              >
                <p style={{ fontFamily: "Inter, system-ui, sans-serif", fontSize: "11px", letterSpacing: "0.3em", textTransform: "uppercase", color: colors.brass, marginBottom: "12px" }}>{item.label}</p>
                <p style={{ fontFamily: "Cormorant Garamond, Georgia, serif", fontSize: "28px", color: colors.charcoal }}>{item.value}</p>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Form - Minimal Centered */}
        <section style={{ minHeight: "100vh", padding: "100px 60px", display: "flex", alignItems: "center", justifyContent: "center", background: colors.charcoal }}>
          <div style={{ maxWidth: "500px", width: "100%" }}>
            <motion.h2
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              style={{ fontFamily: "Cormorant Garamond, Georgia, serif", fontSize: "clamp(40px, 6vw, 64px)", color: colors.white, fontWeight: 300, marginBottom: "48px", textAlign: "center" }}
            >
              Schreib uns
            </motion.h2>

            <div style={{ display: "flex", flexDirection: "column", gap: "40px" }}>
              {["Name", "E-Mail", "Nachricht"].map((placeholder, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.1 * i }}
                >
                  <input
                    type={placeholder === "E-Mail" ? "email" : "text"}
                    placeholder={placeholder}
                    style={{
                      width: "100%",
                      padding: "16px 0",
                      background: "transparent",
                      border: "none",
                      borderBottom: "1px solid rgba(255,255,255,0.2)",
                      outline: "none",
                      color: colors.white,
                      fontFamily: "Inter, system-ui, sans-serif",
                      fontSize: "16px",
                      transition: "border-color 0.3s ease"
                    }}
                  />
                </motion.div>
              ))}
              <motion.button
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                whileHover={{ letterSpacing: "0.25em" }}
                style={{
                  padding: "16px 0",
                  background: "transparent",
                  border: "none",
                  color: colors.white,
                  fontFamily: "Inter, system-ui, sans-serif",
                  fontSize: "13px",
                  letterSpacing: "0.15em",
                  textTransform: "uppercase",
                  cursor: "pointer",
                  textAlign: "left",
                  transition: "all 0.3s ease",
                  borderBottom: "1px solid rgba(255,255,255,0.2)"
                }}
              >
                Senden →
              </motion.button>
            </div>
          </div>
        </section>

        {/* Scroll Progress Bar */}
        <div style={{ position: "fixed", top: 0, left: 0, right: 0, height: "3px", zIndex: 100, pointerEvents: "none" }}>
          <motion.div style={{ width: `${scrollProgress * 100}%`, height: "100%", background: colors.brass }} />
        </div>
      </div>
    </div>
  );
}
