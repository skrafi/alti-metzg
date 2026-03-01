"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function GlobalFooter3() {
  return (
    <footer style={{ background: "#0F0E0C", padding: "100px 60px 80px" }}>
      <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
        {/* Top section with large logo */}
        <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ duration: 0.8 }} style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "80px", flexWrap: "wrap", gap: "40px" }}>
          {/* Large Logo */}
          <div>
            <Link href="/" style={{ textDecoration: "none" }}>
              <h1 style={{ fontFamily: "Cormorant Garamond, Georgia, serif", fontSize: "clamp(36px, 5vw, 56px)", fontWeight: 300, color: "#FFFFFF", letterSpacing: "-0.02em", transition: "color 0.3s ease" }}>Alti Metzg</h1>
            </Link>
            <p style={{ fontFamily: "Inter, system-ui, sans-serif", fontSize: "13px", fontWeight: 300, color: "rgba(255,255,255,0.5)", marginTop: "8px" }}>Regional. Saisonal. Ehrlich.</p>
          </div>
          {/* Quick links */}
          <nav style={{ display: "flex", gap: "32px", flexWrap: "wrap" }}>
            <Link href="/dorfladen" style={{ fontFamily: "Inter, system-ui, sans-serif", fontSize: "13px", color: "rgba(255,255,255,0.6)", textDecoration: "none", transition: "all 0.3s ease" }}>Dorfladen</Link>
            <Link href="/bistro" style={{ fontFamily: "Inter, system-ui, sans-serif", fontSize: "13px", color: "rgba(255,255,255,0.6)", textDecoration: "none", transition: "all 0.3s ease" }}>Bistro</Link>
            <Link href="/carnotzet" style={{ fontFamily: "Inter, system-ui, sans-serif", fontSize: "13px", color: "rgba(255,255,255,0.6)", textDecoration: "none", transition: "all 0.3s ease" }}>Carnotzet</Link>
            <Link href="/kontakt" style={{ fontFamily: "Inter, system-ui, sans-serif", fontSize: "13px", color: "rgba(255,255,255,0.6)", textDecoration: "none", transition: "all 0.3s ease" }}>Kontakt</Link>
          </nav>
        </motion.div>
        {/* Middle section */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "40px", marginBottom: "80px", borderTop: "1px solid rgba(255,255,255,0.08)", paddingTop: "60px" }}>
          {/* Address */}
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.1 }}>
            <p style={{ fontFamily: "Inter, system-ui, sans-serif", fontSize: "10px", letterSpacing: "0.3em", textTransform: "uppercase", color: "rgba(255,255,255,0.3)", marginBottom: "16px" }}>Standort</p>
            <p style={{ fontFamily: "Inter, system-ui, sans-serif", fontSize: "14px", fontWeight: 300, color: "#FFFFFF", lineHeight: 1.7, marginBottom: "8px" }}>Zaun 990B<br />3825 Mürren</p>
            <p style={{ fontFamily: "Inter, system-ui, sans-serif", fontSize: "13px", color: "rgba(255,255,255,0.5)" }}>Schweiz</p>
          </motion.div>
          {/* Contact */}
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.2 }}>
            <p style={{ fontFamily: "Inter, system-ui, sans-serif", fontSize: "10px", letterSpacing: "0.3em", textTransform: "uppercase", color: "rgba(255,255,255,0.3)", marginBottom: "16px" }}>Kontakt</p>
            <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
              <a href="tel:+41335258817" style={{ fontFamily: "Inter, system-ui, sans-serif", fontSize: "14px", color: "#FFFFFF", textDecoration: "none", transition: "opacity 0.3s ease" }}>033 525 88 17</a>
              <a href="mailto:muh@alti-metzg.ch" style={{ fontFamily: "Inter, system-ui, sans-serif", fontSize: "14px", color: "#FFFFFF", textDecoration: "none", transition: "opacity 0.3s ease" }}>muh@alti-metzg.ch</a>
            </div>
          </motion.div>
          {/* Opening Hours */}
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.3 }}>
            <p style={{ fontFamily: "Inter, system-ui, sans-serif", fontSize: "10px", letterSpacing: "0.3em", textTransform: "uppercase", color: "rgba(255,255,255,0.3)", marginBottom: "16px" }}>Oeffnungszeiten</p>
            <div style={{ fontSize: "13px", color: "rgba(255,255,255,0.6)" }}>
              <div style={{ marginBottom: "8px", borderBottom: "1px solid rgba(255,255,255,0.1)", paddingBottom: "8px" }}>
                <span style={{ fontFamily: "Inter, system-ui, sans-serif", fontSize: "11px", opacity: "0.5" }}>MO</span>
                <span style={{ float: "right", fontFamily: "Inter, system-ui, sans-serif" }}>Ruhetag</span>
              </div>
              <div style={{ marginBottom: "8px", borderBottom: "1px solid rgba(255,255,255,0.1)", paddingBottom: "8px" }}>
                <span style={{ fontFamily: "Inter, system-ui, sans-serif", fontSize: "11px", opacity: "0.5" }}>DI - SO</span>
                <span style={{ float: "right", fontFamily: "Inter, system-ui, sans-serif" }}>17:00–22:00</span>
              </div>
              <div style={{ marginBottom: "8px", borderBottom: "1px solid rgba(255,255,255,0.1)", paddingBottom: "8px" }}>
                <span style={{ fontFamily: "Inter, system-ui, sans-serif", fontSize: "11px", opacity: "0.5" }}>FR - SA</span>
                <span style={{ float: "right", fontFamily: "Inter, system-ui, sans-serif" }}>16:00–00:00</span>
              </div>
            </div>
          </motion.div>
        </div>
        {/* Bottom bar */}
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", paddingTop: "60px", borderTop: "1px solid rgba(255,255,255,0.08)", flexWrap: "wrap", gap: "32px" }}>
          <motion.p initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ duration: 0.6 }} style={{ fontFamily: "Inter, system-ui, sans-serif", fontSize: "11px", color: "rgba(255,255,255,0.3)" }}>© {new Date().getFullYear()} Alti Metzg. Alle Rechte vorbehalten.</motion.p>
          <div style={{ display: "flex", gap: "24px" }}>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" style={{ fontFamily: "Inter, system-ui, sans-serif", fontSize: "12px", color: "rgba(255,255,255,0.5)", textDecoration: "none", transition: "opacity 0.3s ease" }}>Instagram</a>
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" style={{ fontFamily: "Inter, system-ui, sans-serif", fontSize: "12px", color: "rgba(255,255,255,0.5)", textDecoration: "none", transition: "opacity 0.3s ease" }}>Facebook</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
