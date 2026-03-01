"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function GlobalFooter2() {
  return (
    <footer style={{ background: "#F6F4F1", padding: "80px 60px" }}>
      <div style={{ maxWidth: "1000px", margin: "0 auto", display: "grid", gridTemplateColumns: "1fr 1fr", gap: "80px", alignItems: "start" }}>
        {/* Left */}
        <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ duration: 0.8 }}>
          <h2 style={{ fontFamily: "Cormorant Garamond, Georgia, serif", fontSize: "48px", fontWeight: 300, color: "#0F0E0C", marginBottom: "24px", lineHeight: 1 }}>Alti Metzg</h2>
          <p style={{ fontFamily: "Inter, system-ui, sans-serif", fontSize: "14px", fontWeight: 300, color: "rgba(15,14,12,0.5)", lineHeight: 1.7, marginBottom: "32px" }}>Zaun 990B<br />3825 Mürren</p>
          <div style={{ display: "flex", gap: "24px" }}>
            <a href="tel:+41335258817" style={{ fontFamily: "Inter, system-ui, sans-serif", fontSize: "13px", color: "#0F0E0C", textDecoration: "none", borderBottom: "1px solid rgba(15,14,12,0.2)", transition: "all 0.3s ease" }}>033 525 88 17</a>
            <a href="mailto:muh@alti-metzg.ch" style={{ fontFamily: "Inter, system-ui, sans-serif", fontSize: "13px", color: "#0F0E0C", textDecoration: "none", borderBottom: "1px solid rgba(15,14,12,0.2)", transition: "all 0.3s ease" }}>muh@alti-metzg.ch</a>
          </div>
        </motion.div>
        {/* Right */}
        <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ duration: 0.8, delay: 0.15 }} style={{ textAlign: "right" }}>
          <nav style={{ display: "flex", flexDirection: "column", gap: "16px", alignItems: "flex-end" }}>
            <Link href="/dorfladen" style={{ fontFamily: "Cormorant Garamond, Georgia, serif", fontSize: "20px", color: "#0F0E0C", textDecoration: "none", transition: "all 0.3s ease" }}>Dorfladen</Link>
            <Link href="/bistro" style={{ fontFamily: "Cormorant Garamond, Georgia, serif", fontSize: "20px", color: "#0F0E0C", textDecoration: "none", transition: "all 0.3s ease" }}>Bistro</Link>
            <Link href="/carnotzet" style={{ fontFamily: "Cormorant Garamond, Georgia, serif", fontSize: "20px", color: "#0F0E0C", textDecoration: "none", transition: "all 0.3s ease" }}>Carnotzet</Link>
            <Link href="/kontakt" style={{ fontFamily: "Cormorant Garamond, Georgia, serif", fontSize: "20px", color: "#0F0E0C", textDecoration: "none", transition: "all 0.3s ease" }}>Kontakt</Link>
          </nav>
        </motion.div>
      </div>
      {/* Bottom */}
      <div style={{ maxWidth: "1000px", margin: "80px auto 0", borderTop: "1px solid rgba(15,14,12,0.08)", paddingTop: "40px", display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: "24px" }}>
        <motion.p initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ duration: 0.6 }} style={{ fontFamily: "Inter, system-ui, sans-serif", fontSize: "12px", color: "rgba(15,14,12,0.4)" }}>© {new Date().getFullYear()} Alti Metzg</motion.p>
        <div style={{ display: "flex", gap: "24px" }}>
          <Link href="/impressum" style={{ fontFamily: "Inter, system-ui, sans-serif", fontSize: "12px", color: "rgba(15,14,12,0.4)", textDecoration: "none", transition: "all 0.3s ease" }}>Impressum</Link>
          <Link href="/datenschutz" style={{ fontFamily: "Inter, system-ui, sans-serif", fontSize: "12px", color: "rgba(15,14,12,0.4)", textDecoration: "none", transition: "all 0.3s ease" }}>Datenschutz</Link>
        </div>
      </div>
    </footer>
  );
}
