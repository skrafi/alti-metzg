"use client";

import { motion } from "framer-motion";
import Link from "next/link";

const colors = { charcoal: "#0F0E0C", brass: "#B08D57", white: "#FFFFFF", stone: "#F6F4F1" };

export default function Footer4Page() {
  return (
    <div style={{ background: colors.stone, minHeight: "100vh" }}>
      {/* Preview Content */}
      <section style={{ padding: "200px 60px 150px", textAlign: "center" }}>
        <h1 style={{ fontFamily: "Cormorant Garamond, Georgia, serif", fontSize: "clamp(48px, 8vw, 72px)", color: colors.charcoal, fontWeight: 300, marginBottom: "24px" }}>Footer 4</h1>
        <p style={{ fontFamily: "Inter, system-ui, sans-serif", fontSize: "16px", color: "rgba(15,14,12,0.6)" }}>Card Modular · Interactive Hover Effects</p>
      </section>

      {/* Footer 4 - Card Modular */}
      <footer style={{ background: colors.stone, padding: "80px 60px" }}>
        <div style={{ maxWidth: "1400px", margin: "0 auto" }}>
          {/* Logo strip */}
          <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ duration: 0.6 }} style={{ textAlign: "center", marginBottom: "60px" }}>
            <h2 style={{ fontFamily: "Cormorant Garamond, Georgia, serif", fontSize: "clamp(32px, 5vw, 48px)", fontWeight: 300, color: colors.charcoal }}>Alti Metzg</h2>
          </motion.div>

          {/* Cards Grid */}
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "24px", marginBottom: "60px" }}>
            {[
              { title: "Dorfladen", desc: "Regionale Produkte. Frisch vom Bauern.", link: "Besuchen" },
              { title: "Bistro", desc: "Hausmannskost. Gemütlich. Satt.", link: "Reservieren" },
              { title: "Carnotzet", desc: "Wein. Freunde. Exklusive Abende.", link: "Anmelden" },
              { title: "Kontakt", desc: "Zaun 990B, 3825 Mürren", link: "Anfahrt" }
            ].map((card, i) => (
              <motion.a key={card.title} href="#" initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: i * 0.1 }} whileHover={{ y: -5 }} style={{ display: "block", padding: "32px", background: colors.white, border: "1px solid rgba(15,14,12,0.08)", textDecoration: "none", transition: "all 0.3s ease" }}>
                <h3 style={{ fontFamily: "Cormorant Garamond, Georgia, serif", fontSize: "28px", fontWeight: 500, color: colors.charcoal, marginBottom: "12px" }}>{card.title}</h3>
                <p style={{ fontFamily: "Inter, system-ui, sans-serif", fontSize: "14px", color: "rgba(15,14,12,0.6)", lineHeight: 1.6, marginBottom: "20px" }}>{card.desc}</p>
                <span style={{ fontFamily: "Inter, system-ui, sans-serif", fontSize: "12px", letterSpacing: "0.15em", textTransform: "uppercase", color: colors.brass, fontWeight: 500 }}>{card.link} →</span>
              </motion.a>
            ))}
          </div>

          {/* Contact Cards */}
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: "20px", marginBottom: "40px" }}>
            {[
              { icon: "📞", text: "033 525 88 17", href: "tel:+41335258817" },
              { icon: "✉️", text: "muh@alti-metzg.ch", href: "mailto:muh@alti-metzg.ch" },
              { icon: "📍", text: "Zaun 990B, 3825 Mürren", href: "#" },
              { icon: "🇨🇭", text: "Schweiz", href: "#" }
            ].map((item, i) => (
              <motion.a key={i} href={item.href} initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.4 + i * 0.05 }} whileHover={{ background: colors.white }} style={{ display: "flex", alignItems: "center", gap: "12px", padding: "16px 20px", background: "rgba(255,255,255,0.5)", textDecoration: "none", transition: "all 0.3s ease" }}>
                <span style={{ fontSize: "18px" }}>{item.icon}</span>
                <span style={{ fontFamily: "Inter, system-ui, sans-serif", fontSize: "13px", color: colors.charcoal }}>{item.text}</span>
              </motion.a>
            ))}
          </div>

          {/* Bottom bar */}
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", paddingTop: "40px", borderTop: "1px solid rgba(15,14,12,0.1)", flexWrap: "wrap", gap: "16px" }}>
            <p style={{ fontFamily: "Inter, system-ui, sans-serif", fontSize: "12px", color: "rgba(15,14,12,0.4)" }}>© {new Date().getFullYear()} Alti Metzg. Alle Rechte vorbehalten.</p>
            <div style={{ display: "flex", gap: "32px" }}>
              <a href="#" style={{ fontFamily: "Inter, system-ui, sans-serif", fontSize: "12px", color: "rgba(15,14,12,0.5)", textDecoration: "none" }}>Impressum</a>
              <a href="#" style={{ fontFamily: "Inter, system-ui, sans-serif", fontSize: "12px", color: "rgba(15,14,12,0.5)", textDecoration: "none" }}>Datenschutz</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
