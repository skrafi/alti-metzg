"use client";

import { motion } from "framer-motion";
import Link from "next/link";

const colors = { charcoal: "#0F0E0C", brass: "#B08D57", white: "#FFFFFF", stone: "#F6F4F1" };

export default function Footer2Page() {
  return (
    <div style={{ background: colors.stone, minHeight: "100vh" }}>
      {/* Preview Content */}
      <section style={{ padding: "200px 60px 150px", textAlign: "center" }}>
        <h1 style={{ fontFamily: "Cormorant Garamond, Georgia, serif", fontSize: "clamp(48px, 8vw, 72px)", color: colors.charcoal, fontWeight: 300, marginBottom: "24px" }}>Footer 2</h1>
        <p style={{ fontFamily: "Inter, system-ui, sans-serif", fontSize: "16px", color: "rgba(15,14,12,0.6)" }}>Split Contrast · Dark/Light Dual</p>
      </section>

      {/* Footer 2 - Split Contrast */}
      <footer style={{ display: "grid", gridTemplateColumns: "1fr 1fr", minHeight: "500px" }}>
        {/* Left - Dark with large typography */}
        <motion.div initial={{ x: -50, opacity: 0 }} whileInView={{ x: 0, opacity: 1 }} viewport={{ once: true }} transition={{ duration: 0.8 }} style={{ background: colors.charcoal, padding: "80px 60px", display: "flex", flexDirection: "column", justifyContent: "center" }}>
          <h2 style={{ fontFamily: "Cormorant Garamond, Georgia, serif", fontSize: "clamp(52px, 8vw, 88px)", fontWeight: 300, color: colors.white, lineHeight: 0.9, marginBottom: "32px", letterSpacing: "-0.03em" }}>
            Alti<br />Metzg
          </h2>
          <p style={{ fontFamily: "Inter, system-ui, sans-serif", fontSize: "14px", color: "rgba(255,255,255,0.5)", lineHeight: 1.8, maxWidth: "300px" }}>
            Zaun 990B<br />3825 Mürren<br />Schweiz
          </p>
          <div style={{ marginTop: "40px", display: "flex", gap: "20px" }}>
            <a href="#" style={{ width: "44px", height: "44px", display: "flex", alignItems: "center", justifyContent: "center", border: "1px solid rgba(255,255,255,0.2)", borderRadius: "50%", color: colors.white, textDecoration: "none", transition: "all 0.3s ease" }}>IG</a>
            <a href="#" style={{ width: "44px", height: "44px", display: "flex", alignItems: "center", justifyContent: "center", border: "1px solid rgba(255,255,255,0.2)", borderRadius: "50%", color: colors.white, textDecoration: "none", transition: "all 0.3s ease" }}>FB</a>
          </div>
        </motion.div>

        {/* Right - Light with navigation */}
        <motion.div initial={{ x: 50, opacity: 0 }} whileInView={{ x: 0, opacity: 1 }} viewport={{ once: true }} transition={{ duration: 0.8, delay: 0.2 }} style={{ background: colors.stone, padding: "80px 60px", display: "flex", flexDirection: "column", justifyContent: "center" }}>
          <div style={{ display: "flex", flexDirection: "column", gap: "32px" }}>
            {[
              { title: "Unser Angebot", links: ["Dorfladen", "Bistro", "Carnotzet"] },
              { title: "Kontakt", links: ["033 525 88 17", "muh@alti-metzg.ch"] }
            ].map((section, i) => (
              <div key={section.title}>
                <p style={{ fontFamily: "Inter, system-ui, sans-serif", fontSize: "11px", letterSpacing: "0.35em", textTransform: "uppercase", color: colors.brass, marginBottom: "16px" }}>{section.title}</p>
                <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
                  {section.links.map((link) => (
                    <Link key={link} href="#" style={{ fontFamily: "Cormorant Garamond, Georgia, serif", fontSize: "24px", color: colors.charcoal, textDecoration: "none", transition: "opacity 0.3s ease" }}>{link}</Link>
                  ))}
                </div>
              </div>
            ))}
          </div>
          <p style={{ fontFamily: "Inter, system-ui, sans-serif", fontSize: "11px", color: "rgba(15,14,12,0.4)", marginTop: "60px" }}>© {new Date().getFullYear()}</p>
        </motion.div>
      </footer>
    </div>
  );
}
