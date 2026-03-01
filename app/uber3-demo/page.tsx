"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const colors = { charcoal: "#0F0E0C", brass: "#B08D57", white: "#FFFFFF", stone: "#F6F4F1" };

const moments = [
  { time: "05:30", title: "Der Anfang", desc: "Der Bäcker heizt den Ofen. Der Duft von frischem Brot füllt den Laden.", img: "/images/dorfladen-shelves.jpg" },
  { time: "07:00", title: "Lieferung", desc: "Bauern aus der Region bringen frische Milch, Käse und Gemüse.", img: "/images/bistro-interior.jpg" },
  { time: "09:00", title: "Vorbereitung", desc: "Der Metzger bereitet die Fleischwaren zu. Präzision und Sorgfalt.", img: "/images/carnotzet-interior.jpg" },
  { time: "11:30", title: "Mittagsstunde", desc: "Gäste strömen ins Bistro. Hausmannskost frisch auf den Teller.", img: "/images/dorfladen-shelves.jpg" },
  { time: "15:00", title: "Nachmittag", desc: "Im Dorfladen wählt die Kundschaft. Gespräche, Lachen, Gemeinschaft.", img: "/images/bistro-interior.jpg" },
  { time: "17:00", title: "Carnotzet öffnet", desc: "Der erste Gast sitzt im Keller. Wein korken. Abend beginnt.", img: "/images/carnotzet-interior.jpg" },
  { time: "20:00", title: "Stunde der Geschichten", desc: "Freunde treffen sich. Lachen, Weinglas, Apéroplättli.", img: "/images/dorfladen-shelves.jpg" },
  { time: "23:00", title: "Ende eines Tages", desc: "Letzter Gast geht. Küche ruht. Morgen beginnt alles neu.", img: "/images/bistro-interior.jpg" }
];

export default function Uber3DemoPage() {
  return (
    <div style={{ background: colors.white, minHeight: "100vh" }}>
      {/* Hero - Day at Alti Metzg */}
      <section style={{ height: "80vh", position: "relative", overflow: "hidden", background: colors.charcoal }}>
        <Image src="/images/dorfladen-shelves.jpg" alt="Morgen" fill style={{ objectFit: "cover", opacity: 0.3 }} />
        <div style={{ position: "absolute", inset: 0, display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", textAlign: "center", padding: "40px" }}>
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1 }}>
            <p style={{ fontFamily: "Inter, system-ui, sans-serif", fontSize: "11px", letterSpacing: "0.4em", textTransform: "uppercase", color: colors.brass, marginBottom: "24px" }}>24 Stunden</p>
            <h1 style={{ fontFamily: "Cormorant Garamond, Georgia, serif", fontWeight: 300, fontSize: "clamp(48px, 8vw, 88px)", color: colors.white, lineHeight: 1, marginBottom: "24px" }}>Ein Tag bei Alti Metzg</h1>
            <p style={{ fontFamily: "Inter, system-ui, sans-serif", fontSize: "15px", color: "rgba(255,255,255,0.6)" }}>Hinter den Kulissen · Authentic · Ehrlich</p>
          </motion.div>
        </div>
      </section>

      {/* Timeline Grid - Instagram Editorial Style */}
      <section style={{ padding: "80px 20px" }}>
        <div style={{ maxWidth: "1800px", margin: "0 auto" }}>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: "4px" }}>
            {moments.map((moment, i) => (
              <motion.div key={i} initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: i * 0.08 }} style={{ position: "relative", aspectRatio: "1", overflow: "hidden", background: colors.stone, cursor: "pointer" }}>
                <Image src={moment.img} alt={moment.title} fill style={{ objectFit: "cover", transition: "transform 0.5s ease" }} className="hover-scale" />
                <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to top, rgba(0,0,0,0.8) 0%, transparent 50%)" }} />
                <div style={{ position: "absolute", bottom: "0", left: "0", right: "0", padding: "20px" }}>
                  <span style={{ fontFamily: "Cormorant Garamond, Georgia, serif", fontSize: "20px", color: colors.brass, display: "block", marginBottom: "4px" }}>{moment.time}</span>
                  <h3 style={{ fontFamily: "Inter, system-ui, sans-serif", fontSize: "14px", fontWeight: 500, color: colors.white, marginBottom: "6px" }}>{moment.title}</h3>
                  <p style={{ fontFamily: "Inter, system-ui, sans-serif", fontSize: "11px", color: "rgba(255,255,255,0.7)", lineHeight: 1.4 }}>{moment.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Quote Section */}
      <section style={{ padding: "120px 60px", background: colors.stone, textAlign: "center" }}>
        <div style={{ maxWidth: "800px", margin: "0 auto" }}>
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <p style={{ fontFamily: "Cormorant Garamond, Georgia, serif", fontSize: "clamp(32px, 4vw, 48px)", color: colors.charcoal, fontStyle: "italic", lineHeight: 1.4, marginBottom: "32px" }}>
              "Die besten Geschichten schreibt man nicht –<br />die erlebt man. Jeden Tag."
            </p>
            <p style={{ fontFamily: "Inter, system-ui, sans-serif", fontSize: "13px", letterSpacing: "0.2em", textTransform: "uppercase", color: colors.brass }}>– Das Team von Alti Metzg</p>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
