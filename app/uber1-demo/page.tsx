"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

const colors = { charcoal: "#0F0E0C", brass: "#B08D57", white: "#FFFFFF", stone: "#F6F4F1" };

const team = [
  { name: "Päsc", role: "Gründer & Koch", img: "/images/dorfladen-shelves.jpg", quote: "Kochen ist Liebe. Servieren ist Gastfreundschaft." },
  { name: "Muh", role: "Die Seele", img: "/images/bistro-interior.jpg", quote: "Jeder Gast wird wie Familie empfangen." },
  { name: "Sarah", role: "Service", img: "/images/carnotzet-interior.jpg", quote: "Der erste Eindruck zählt –immer." },
  { name: "Thomas", role: "Kellermeister", img: "/images/dorfladen-shelves.jpg", quote: "Ein guter Wein erzählt eine Geschichte." },
  { name: "Elena", role: "Bäckerin", img: "/images/bistro-interior.jpg", quote: "Frisches Brot ist der beste Start in den Tag." },
  { name: "Marco", role: "Metzger", img: "/images/carnotzet-interior.jpg", quote: "Qualität beginnt beim Erzeuger." }
];

export default function Uber1DemoPage() {
  return (
    <div style={{ background: colors.white, minHeight: "100vh" }}>
      {/* Hero - The Faces */}
      <section style={{ height: "90vh", position: "relative", overflow: "hidden" }}>
        <Image src="/images/dorfladen-shelves.jpg" alt="Team" fill style={{ objectFit: "cover", filter: "grayscale(100%) brightness(0.9)" }} />
        <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to bottom, rgba(15,14,12,0.7) 0%, rgba(15,14,12,0.9) 100%)" }} />
        <div style={{ position: "absolute", inset: 0, display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", textAlign: "center", padding: "40px" }}>
          <motion.div initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1 }}>
            <p style={{ fontFamily: "Inter, system-ui, sans-serif", fontSize: "11px", letterSpacing: "0.4em", textTransform: "uppercase", color: colors.brass, marginBottom: "24px" }}>Die Gesichter dahinter</p>
            <h1 style={{ fontFamily: "Cormorant Garamond, Georgia, serif", fontWeight: 400, fontSize: "clamp(56px, 10vw, 100px)", color: colors.white, lineHeight: 0.9, marginBottom: "24px" }}>Uns</h1>
            <p style={{ fontFamily: "Inter, system-ui, sans-serif", fontSize: "18px", color: "rgba(255,255,255,0.7)", maxWidth: "500px", lineHeight: 1.6 }}>Menschen. Leidenschaft. Tradition.</p>
          </motion.div>
        </div>
      </section>

      {/* Team Grid - Large Portraits */}
      <section style={{ padding: "120px 60px" }}>
        <div style={{ maxWidth: "1600px", margin: "0 auto" }}>
          <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} style={{ textAlign: "center", marginBottom: "80px" }}>
            <h2 style={{ fontFamily: "Cormorant Garamond, Georgia, serif", fontSize: "clamp(40px, 6vw, 64px)", color: colors.charcoal, fontWeight: 300 }}>Wer wir sind</h2>
          </motion.div>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "0" }}>
            {team.map((member, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7, delay: i * 0.1 }} style={{ position: "relative", aspectRatio: "3/4", overflow: "hidden" }}>
                <Image src={member.img} alt={member.name} fill style={{ objectFit: "cover", filter: "grayscale(100%)" }} />
                <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to top, rgba(15,14,12,0.9) 0%, transparent 60%)" }} />
                <div style={{ position: "absolute", bottom: "0", left: "0", right: "0", padding: "32px" }}>
                  <p style={{ fontFamily: "Inter, system-ui, sans-serif", fontSize: "11px", letterSpacing: "0.25em", textTransform: "uppercase", color: colors.brass, marginBottom: "8px" }}>{member.role}</p>
                  <h3 style={{ fontFamily: "Cormorant Garamond, Georgia, serif", fontSize: "28px", color: colors.white, marginBottom: "12px" }}>{member.name}</h3>
                  <p style={{ fontFamily: "Inter, system-ui, sans-serif", fontSize: "13px", color: "rgba(255,255,255,0.7)", fontStyle: "italic", lineHeight: 1.5 }}>"{member.quote}"</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section style={{ padding: "100px 60px", background: colors.stone, textAlign: "center" }}>
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
          <h2 style={{ fontFamily: "Cormorant Garamond, Georgia, serif", fontSize: "clamp(36px, 5vw, 52px)", color: colors.charcoal, fontWeight: 300, marginBottom: "24px" }}>Lerne uns persönlich kennen</h2>
          <Link href="/kontakt" style={{ display: "inline-block", padding: "18px 40px", fontFamily: "Inter, system-ui, sans-serif", fontSize: "13px", letterSpacing: "0.15em", textTransform: "uppercase", color: colors.white, backgroundColor: colors.charcoal, textDecoration: "none", transition: "all 0.3s ease" }}>Besuch uns</Link>
        </motion.div>
      </section>
    </div>
  );
}
