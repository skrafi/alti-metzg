"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const colors = { charcoal: "#0F0E0C", brass: "#B08D57", white: "#FFFFFF", stone: "#F6F4F1" };

const whyHere = [
  { num: "01", title: "1'638 Meter", desc: "Hoch oben. Wo die Luft rein ist. Wo der Himmel näher scheint.", img: "/images/dorfladen-shelves.jpg" },
  { num: "02", title: "Autofrei", desc: "Kein Lärm. Kein Auspuff. Nur Schritte und Stille.", img: "/images/bistro-interior.jpg" },
  { num: "03", title: "Panorama", desc: "Eiger, Mönch, Jungfrau. Drei Gipfel als Nachbarn.", img: "/images/carnotzet-interior.jpg" },
  { num: "04", title: "Gemeinschaft", desc: "Mürren ist mehr als ein Dorf. Es ist eine Familie.", img: "/images/dorfladen-shelves.jpg" }
];

export default function Uber5DemoPage() {
  return (
    <div style={{ background: colors.white, minHeight: "100vh" }}>
      {/* Hero - Panoramic */}
      <section style={{ height: "100vh", position: "relative", overflow: "hidden" }}>
        <Image src="/images/dorfladen-shelves.jpg" alt="Mürren Panorama" fill style={{ objectFit: "cover" }} />
        <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to bottom, rgba(0,0,0,0.3) 0%, rgba(0,0,0,0.6) 100%)" }} />

        {/* Location Badge */}
        <motion.div initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 1, delay: 0.5 }} style={{ position: "absolute", top: "50%", left: "50%", transform: "translate(-50%, -50%)", textAlign: "center" }}>
          <div style={{ display: "inline-flex", flexDirection: "column", alignItems: "center", gap: "16px" }}>
            <div style={{ width: "80px", height: "80px", border: "2px solid colors.white", borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center", background: "rgba(255,255,255,0.1)", backdropFilter: "blur(10px)" }}>
              <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth={1.5}><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" /><circle cx="12" cy="10" r="3" /></svg>
            </div>
            <p style={{ fontFamily: "Inter, system-ui, sans-serif", fontSize: "11px", letterSpacing: "0.3em", textTransform: "uppercase", color: colors.white, textShadow: "0 2px 8px rgba(0,0,0,0.5)" }}>3825 Mürren · Schweiz</p>
          </div>
        </motion.div>

        {/* Bottom Info */}
        <div style={{ position: "absolute", bottom: "60px", left: "60px", right: "60px" }}>
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1, delay: 0.8 }}>
            <p style={{ fontFamily: "Inter, system-ui, sans-serif", fontSize: "11px", letterSpacing: "0.4em", textTransform: "uppercase", color: colors.brass, marginBottom: "16px" }}>Warum hier?</p>
            <h1 style={{ fontFamily: "Cormorant Garamond, Georgia, serif", fontWeight: 300, fontSize: "clamp(56px, 10vw, 120px)", color: colors.white, lineHeight: 0.85, textShadow: "0 4px 20px rgba(0,0,0,0.5)" }}>Mürren</h1>
          </motion.div>
        </div>
      </section>

      {/* Reasons Grid */}
      <section style={{ padding: "100px 60px", background: colors.white }}>
        <div style={{ maxWidth: "1400px", margin: "0 auto" }}>
          <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} style={{ textAlign: "center", marginBottom: "80px" }}>
            <h2 style={{ fontFamily: "Cormorant Garamond, Georgia, serif", fontSize: "clamp(40px, 6vw, 64px)", color: colors.charcoal, fontWeight: 300 }}>Vier Gründe</h2>
          </motion.div>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: "60px" }}>
            {whyHere.map((reason, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7, delay: i * 0.15 }} style={{ display: "grid", gridTemplateColumns: "auto 1fr", gap: "32px", alignItems: "start" }}>
                <div style={{ position: "relative", aspectRatio: "1", width: "80px" }}>
                  <Image src={reason.img} alt={reason.title} fill style={{ objectFit: "cover", borderRadius: "50%", filter: "grayscale(100%)" }} />
                  <span style={{ position: "absolute", bottom: "-8px", right: "-8px", width: "32px", height: "32px", background: colors.brass, color: colors.white, borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center", fontFamily: "Inter, system-ui, sans-serif", fontSize: "12px" }}>{reason.num}</span>
                </div>
                <div>
                  <h3 style={{ fontFamily: "Cormorant Garamond, Georgia, serif", fontSize: "32px", color: colors.charcoal, marginBottom: "12px" }}>{reason.title}</h3>
                  <p style={{ fontFamily: "Inter, system-ui, sans-serif", fontSize: "15px", color: "rgba(15,14,12,0.6)", lineHeight: 1.7 }}>{reason.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Full Width Image Quote */}
      <section style={{ position: "relative", height: "70vh", display: "flex", alignItems: "center", justifyContent: "center" }}>
        <Image src="/images/bistro-interior.jpg" alt="View" fill style={{ objectFit: "cover" }} />
        <div style={{ position: "absolute", inset: 0, background: "rgba(0,0,0,0.5)" }} />
        <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} style={{ position: "relative", zIndex: 1, textAlign: "center", padding: "60px", maxWidth: "900px" }}>
          <p style={{ fontFamily: "Cormorant Garamond, Georgia, serif", fontSize: "clamp(36px, 5vw, 56px)", color: colors.white, fontStyle: "italic", lineHeight: 1.3, marginBottom: "32px", textShadow: "0 2px 16px rgba(0,0,0,0.5)" }}>
            "Mürren ist nicht nur ein Ort.<br />Es ist ein Gefühl."
          </p>
          <p style={{ fontFamily: "Inter, system-ui, sans-serif", fontSize: "13px", letterSpacing: "0.2em", textTransform: "uppercase", color: colors.brass }}>– Die Familie Päsc</p>
        </motion.div>
      </section>

      {/* Stats Section */}
      <section style={{ padding: "100px 60px", background: colors.stone }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto", display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))", gap: "40px" }}>
          {[
            { val: "1'638", unit: "m ü.M.", label: "Höhe" },
            { val: "~400", unit: "", label: "Einwohner" },
            { val: "0", unit: "", label: "Autos" },
            { val: "∞", unit: "", label: "Aussicht" }
          ].map((stat, i) => (
            <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} style={{ textAlign: "center" }}>
              <span style={{ fontFamily: "Cormorant Garamond, Georgia, serif", fontSize: "clamp(56px, 8vw, 88px)", color: colors.brass, fontWeight: 300 }}>{stat.val}</span>
              <span style={{ fontFamily: "Cormorant Garamond, Georgia, serif", fontSize: "clamp(32px, 5vw, 56px)", color: colors.brass, fontWeight: 300 }}>{stat.unit}</span>
              <p style={{ fontFamily: "Inter, system-ui, sans-serif", fontSize: "13px", letterSpacing: "0.2em", textTransform: "uppercase", color: "rgba(15,14,12,0.6)", marginTop: "8px" }}>{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
}
