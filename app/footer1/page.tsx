"use client";

import { motion } from "framer-motion";
import Link from "next/link";

const colors = { charcoal: "#0F0E0C", brass: "#B08D57", white: "#FFFFFF", stone: "#F6F4F1" };

export default function Footer1Page() {
  return (
    <div style={{ background: colors.stone, minHeight: "100vh" }}>
      {/* Preview Content */}
      <section style={{ padding: "200px 60px 150px", textAlign: "center" }}>
        <h1 style={{ fontFamily: "Cormorant Garamond, Georgia, serif", fontSize: "clamp(48px, 8vw, 72px)", color: colors.charcoal, fontWeight: 300, marginBottom: "24px" }}>Footer 1</h1>
        <p style={{ fontFamily: "Inter, system-ui, sans-serif", fontSize: "16px", color: "rgba(15,14,12,0.6)" }}>Minimal Elegance · Brass Accent Line</p>
      </section>

      {/* Footer 1 - Minimal Elegance */}
      <footer style={{ background: colors.charcoal, padding: "100px 60px 60px", position: "relative" }}>
        {/* Brass accent line */}
        <motion.div initial={{ width: 0 }} whileInView={{ width: "60px" }} viewport={{ once: true }} transition={{ duration: 0.8 }} style={{ height: "1px", background: colors.brass, marginBottom: "60px", marginLeft: "auto", marginRight: "auto" }} />

        <div style={{ maxWidth: "1400px", margin: "0 auto" }}>
          {/* Main logo centered */}
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} style={{ textAlign: "center", marginBottom: "80px" }}>
            <h2 style={{ fontFamily: "Cormorant Garamond, Georgia, serif", fontSize: "clamp(42px, 6vw, 64px)", fontWeight: 300, color: colors.white, letterSpacing: "-0.03em", marginBottom: "16px" }}>Alti Metzg</h2>
            <p style={{ fontFamily: "Inter, system-ui, sans-serif", fontSize: "13px", letterSpacing: "0.25em", textTransform: "uppercase", color: colors.brass }}>Regional · Saisonal · Ehrlich</p>
          </motion.div>

          {/* Three column grid */}
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: "40px", marginBottom: "80px" }}>
            {[
              { label: "Angebote", links: ["Dorfladen", "Bistro", "Carnotzet"] },
              { label: "Unternehmen", links: ["Über uns", "Team", "Karriere"] },
              { label: "Kontakt", links: ["Standort", "Anfahrt", "Newsletter"] }
            ].map((col, i) => (
              <motion.div key={col.label} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: i * 0.1 }}>
                <p style={{ fontFamily: "Inter, system-ui, sans-serif", fontSize: "11px", letterSpacing: "0.3em", textTransform: "uppercase", color: "rgba(255,255,255,0.4)", marginBottom: "20px" }}>{col.label}</p>
                <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
                  {col.links.map((link) => (
                    <Link key={link} href="#" style={{ fontFamily: "Inter, system-ui, sans-serif", fontSize: "14px", color: "rgba(255,255,255,0.7)", textDecoration: "none", transition: "color 0.3s ease" }}>{link}</Link>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>

          {/* Bottom bar */}
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", paddingTop: "40px", borderTop: "1px solid rgba(255,255,255,0.08)", flexWrap: "wrap", gap: "20px" }}>
            <p style={{ fontFamily: "Inter, system-ui, sans-serif", fontSize: "12px", color: "rgba(255,255,255,0.35)" }}>© {new Date().getFullYear()} Alti Metzg</p>
            <div style={{ display: "flex", gap: "24px" }}>
              <a href="#" style={{ fontFamily: "Inter, system-ui, sans-serif", fontSize: "12px", color: "rgba(255,255,255,0.5)", textDecoration: "none", transition: "opacity 0.3s ease" }}>Instagram</a>
              <a href="#" style={{ fontFamily: "Inter, system-ui, sans-serif", fontSize: "12px", color: "rgba(255,255,255,0.5)", textDecoration: "none", transition: "opacity 0.3s ease" }}>Facebook</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
