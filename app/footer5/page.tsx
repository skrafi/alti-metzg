"use client";

import { motion } from "framer-motion";
import Link from "next/link";

const colors = { charcoal: "#0F0E0C", brass: "#B08D57", white: "#FFFFFF", stone: "#F6F4F1" };

export default function Footer5Page() {
  return (
    <div style={{ background: colors.stone, minHeight: "100vh" }}>
      {/* Preview Content */}
      <section style={{ padding: "200px 60px 150px", textAlign: "center" }}>
        <h1 style={{ fontFamily: "Cormorant Garamond, Georgia, serif", fontSize: "clamp(48px, 8vw, 72px)", color: colors.charcoal, fontWeight: 300, marginBottom: "24px" }}>Footer 5</h1>
        <p style={{ fontFamily: "Inter, system-ui, sans-serif", fontSize: "16px", color: "rgba(15,14,12,0.6)" }}>Full Width Immersive · Parallax Background</p>
      </section>

      {/* Footer 5 - Full Width Immersive */}
      <footer style={{ position: "relative", minHeight: "600px", display: "flex", flexDirection: "column", justifyContent: "flex-end", overflow: "hidden" }}>
        {/* Background gradient */}
        <div style={{ position: "absolute", inset: 0, background: `linear-gradient(180deg, ${colors.stone} 0%, ${colors.charcoal} 30%, ${colors.charcoal} 100%)` }} />

        {/* Decorative circles */}
        <motion.div animate={{ scale: [1, 1.2, 1], opacity: [0.1, 0.15, 0.1] }} transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }} style={{ position: "absolute", top: "-100px", right: "-100px", width: "400px", height: "400px", borderRadius: "50%", background: colors.brass, filter: "blur(80px)" }} />
        <motion.div animate={{ scale: [1, 1.3, 1], opacity: [0.08, 0.12, 0.08] }} transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }} style={{ position: "absolute", bottom: "-150px", left: "-100px", width: "500px", height: "500px", borderRadius: "50%", background: colors.brass, filter: "blur(100px)" }} />

        {/* Content */}
        <div style={{ position: "relative", zIndex: 1, padding: "100px 60px 60px", maxWidth: "1400px", margin: "0 auto", width: "100%" }}>
          {/* Large tagline */}
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }} style={{ textAlign: "center", marginBottom: "80px" }}>
            <p style={{ fontFamily: "Inter, system-ui, sans-serif", fontSize: "12px", letterSpacing: "0.4em", textTransform: "uppercase", color: colors.brass, marginBottom: "24px" }}>Seit 1850</p>
            <h2 style={{ fontFamily: "Cormorant Garamond, Georgia, serif", fontSize: "clamp(56px, 10vw, 120px)", fontWeight: 300, color: colors.white, lineHeight: 1, letterSpacing: "-0.04em", marginBottom: "32px" }}>
              Regional.<br />Saisonal.<br />Ehrlich.
            </h2>
            <p style={{ fontFamily: "Inter, system-ui, sans-serif", fontSize: "16px", color: "rgba(255,255,255,0.5)", maxWidth: "500px", margin: "0 auto" }}>
              Aus Liebe zur Tradition. Aus Liebe zur Region. Aus Liebe zu guten Produkten.
            </p>
          </motion.div>

          {/* Navigation strip */}
          <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.3 }} style={{ display: "flex", justifyContent: "center", gap: "48px", marginBottom: "60px", flexWrap: "wrap" }}>
            {["Dorfladen", "Bistro", "Carnotzet", "Kontakt"].map((link) => (
              <Link key={link} href="#" style={{ fontFamily: "Cormorant Garamond, Georgia, serif", fontSize: "18px", color: "rgba(255,255,255,0.7)", textDecoration: "none", transition: "all 0.3s ease", position: "relative" }}>
                {link}
                <span style={{ position: "absolute", bottom: "-4px", left: 0, width: "0", height: "1px", background: colors.brass, transition: "width 0.3s ease" }} />
              </Link>
            ))}
          </motion.div>

          {/* Contact info - centered */}
          <div style={{ display: "flex", justifyContent: "center", gap: "48px", marginBottom: "60px", flexWrap: "wrap" }}>
            {[
              { label: "Telefon", value: "033 525 88 17" },
              { label: "E-Mail", value: "muh@alti-metzg.ch" },
              { label: "Adresse", value: "Zaun 990B, 3825 Mürren" }
            ].map((item, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.4, delay: 0.4 + i * 0.08 }} style={{ textAlign: "center" }}>
                <p style={{ fontFamily: "Inter, system-ui, sans-serif", fontSize: "10px", letterSpacing: "0.3em", textTransform: "uppercase", color: "rgba(255,255,255,0.4)", marginBottom: "6px" }}>{item.label}</p>
                <p style={{ fontFamily: "Inter, system-ui, sans-serif", fontSize: "14px", color: colors.white }}>{item.value}</p>
              </motion.div>
            ))}
          </div>

          {/* Bottom bar */}
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", paddingTop: "40px", borderTop: "1px solid rgba(255,255,255,0.08)", flexWrap: "wrap", gap: "20px" }}>
            <p style={{ fontFamily: "Inter, system-ui, sans-serif", fontSize: "11px", color: "rgba(255,255,255,0.3)" }}>© {new Date().getFullYear()} Alti Metzg. Mürren, Schweiz.</p>
            <div style={{ display: "flex", gap: "32px" }}>
              <a href="#" style={{ fontFamily: "Inter, system-ui, sans-serif", fontSize: "11px", color: "rgba(255,255,255,0.4)", textDecoration: "none", transition: "color 0.3s ease" }}>Instagram</a>
              <a href="#" style={{ fontFamily: "Inter, system-ui, sans-serif", fontSize: "11px", color: "rgba(255,255,255,0.4)", textDecoration: "none", transition: "color 0.3s ease" }}>Facebook</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
