"use client";

import { motion } from "framer-motion";
import Link from "next/link";

const colors = { charcoal: "#0F0E0C", brass: "#B08D57", white: "#FFFFFF", stone: "#F6F4F1" };

export default function Footer3Page() {
  return (
    <div style={{ background: colors.stone, minHeight: "100vh" }}>
      {/* Preview Content */}
      <section style={{ padding: "200px 60px 150px", textAlign: "center" }}>
        <h1 style={{ fontFamily: "Cormorant Garamond, Georgia, serif", fontSize: "clamp(48px, 8vw, 72px)", color: colors.charcoal, fontWeight: 300, marginBottom: "24px" }}>Footer 3</h1>
        <p style={{ fontFamily: "Inter, system-ui, sans-serif", fontSize: "16px", color: "rgba(15,14,12,0.6)" }}>Story Timeline · Journey Through Time</p>
      </section>

      {/* Footer 3 - Story Timeline */}
      <footer style={{ background: colors.charcoal, padding: "100px 60px 80px" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
          {/* Top - Logo */}
          <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ duration: 0.6 }} style={{ textAlign: "center", marginBottom: "80px" }}>
            <h2 style={{ fontFamily: "Cormorant Garamond, Georgia, serif", fontSize: "clamp(36px, 5vw, 52px)", fontWeight: 300, color: colors.white, marginBottom: "16px" }}>Seit 1850</h2>
            <p style={{ fontFamily: "Inter, system-ui, sans-serif", fontSize: "14px", color: "rgba(255,255,255,0.5)" }}>Fast 175 Jahre Tradition in Mürren</p>
          </motion.div>

          {/* Timeline */}
          <div style={{ position: "relative", marginBottom: "80px" }}>
            {/* Vertical line */}
            <div style={{ position: "absolute", left: "50%", top: 0, bottom: 0, width: "1px", background: "linear-gradient(to bottom, transparent, rgba(176,141,87,0.3), transparent)" }} />

            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "40px" }}>
              {[
                { year: "1850", text: "Gründung der Metzgerei" },
                { year: "1920", text: "Übergabe an 2. Generation" },
                { year: "1985", text: "Erweiterung Dorfladen" },
                { year: "2021", text: "Eröffnung Carnotzet" }
              ].map((item, i) => (
                <motion.div key={item.year} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: i * 0.1 }} style={{ textAlign: i % 2 === 0 ? "right" : "left", paddingRight: i % 2 === 0 ? "40px" : "0", paddingLeft: i % 2 === 1 ? "40px" : "0" }}>
                  <span style={{ fontFamily: "Cormorant Garamond, Georgia, serif", fontSize: "48px", fontWeight: 300, color: i === 3 ? colors.brass : "rgba(255,255,255,0.2)", display: "block", marginBottom: "8px" }}>{item.year}</span>
                  <p style={{ fontFamily: "Inter, system-ui, sans-serif", fontSize: "14px", color: "rgba(255,255,255,0.6)" }}>{item.text}</p>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Bottom - Contact & Links */}
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: "40px", paddingTop: "60px", borderTop: "1px solid rgba(255,255,255,0.08)" }}>
            <div>
              <p style={{ fontFamily: "Inter, system-ui, sans-serif", fontSize: "11px", letterSpacing: "0.3em", textTransform: "uppercase", color: "rgba(255,255,255,0.4)", marginBottom: "16px" }}>Kontakt</p>
              <p style={{ fontFamily: "Inter, system-ui, sans-serif", fontSize: "14px", color: colors.white }}>033 525 88 17</p>
            </div>
            <div>
              <p style={{ fontFamily: "Inter, system-ui, sans-serif", fontSize: "11px", letterSpacing: "0.3em", textTransform: "uppercase", color: "rgba(255,255,255,0.4)", marginBottom: "16px" }}>E-Mail</p>
              <a href="#" style={{ fontFamily: "Inter, system-ui, sans-serif", fontSize: "14px", color: colors.white, textDecoration: "none" }}>muh@alti-metzg.ch</a>
            </div>
            <div>
              <p style={{ fontFamily: "Inter, system-ui, sans-serif", fontSize: "11px", letterSpacing: "0.3em", textTransform: "uppercase", color: "rgba(255,255,255,0.4)", marginBottom: "16px" }}>Links</p>
              <div style={{ display: "flex", gap: "20px" }}>
                <a href="#" style={{ fontFamily: "Inter, system-ui, sans-serif", fontSize: "12px", color: "rgba(255,255,255,0.5)", textDecoration: "none" }}>Instagram</a>
                <a href="#" style={{ fontFamily: "Inter, system-ui, sans-serif", fontSize: "12px", color: "rgba(255,255,255,0.5)", textDecoration: "none" }}>Facebook</a>
              </div>
            </div>
            <div>
              <p style={{ fontFamily: "Inter, system-ui, sans-serif", fontSize: "11px", letterSpacing: "0.3em", textTransform: "uppercase", color: "rgba(255,255,255,0.4)", marginBottom: "16px" }}>Rechtliches</p>
              <div style={{ display: "flex", gap: "20px" }}>
                <a href="#" style={{ fontFamily: "Inter, system-ui, sans-serif", fontSize: "12px", color: "rgba(255,255,255,0.5)", textDecoration: "none" }}>Impressum</a>
                <a href="#" style={{ fontFamily: "Inter, system-ui, sans-serif", fontSize: "12px", color: "rgba(255,255,255,0.5)", textDecoration: "none" }}>Datenschutz</a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
