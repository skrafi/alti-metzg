"use client";

import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import { useRef, useState } from "react";
import Link from "next/link";
import GlobalFooter from "@/components/GlobalFooter";

const colors = { charcoal: "#0F0E0C", brass: "#B08D57", white: "#FFFFFF", stone: "#F6F4F1" };

export default function KontaktPage() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [formState, setFormState] = useState({ name: "", email: "", message: "" });

  const { scrollYProgress } = useScroll({ target: containerRef, offset: ["start start", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const scale = useSpring(useTransform(scrollYProgress, [0, 0.5], [1, 0.95]), { stiffness: 80, damping: 20 });

  const letters = "KONTAKT".split("");

  return (
    <>
      <div ref={containerRef} style={{ background: colors.charcoal, minHeight: "100vh", position: "relative", overflow: "hidden" }}>
        {/* Animated Background Elements */}
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
          style={{
            position: "absolute",
            width: "800px",
            height: "800px",
            background: "radial-gradient(circle, rgba(176,141,87,0.05) 0%, transparent 70%)",
            borderRadius: "50%",
            top: "-300px",
            right: "-200px",
            pointerEvents: "none"
          }}
        />
        <motion.div
          animate={{ rotate: -360 }}
          transition={{ duration: 80, repeat: Infinity, ease: "linear" }}
          style={{
            position: "absolute",
            width: "600px",
            height: "600px",
            background: "radial-gradient(circle, rgba(176,141,87,0.03) 0%, transparent 70%)",
            borderRadius: "50%",
            bottom: "-200px",
            left: "-100px",
            pointerEvents: "none"
          }}
        />

        {/* Hero - Animated Letters */}
        <section style={{ height: "100vh", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", padding: "40px" }}>
          <motion.div style={{ scale }} className="relative z-10 text-center">
            <div style={{ display: "flex", gap: "4px", marginBottom: "32px", justifyContent: "center" }}>
              {letters.map((letter, i) => (
                <motion.span
                  key={i}
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: i * 0.05 }}
                  style={{
                    fontFamily: "Cormorant Garamond, Georgia, serif",
                    fontSize: "clamp(72px, 15vw, 180px)",
                    fontWeight: 300,
                    color: colors.white,
                    lineHeight: 0.8,
                    display: "inline-block"
                  }}
                  whileHover={{ color: colors.brass, y: -10 }}
                >
                  {letter}
                </motion.span>
              ))}
            </div>

            {/* Animated Coordinates */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.2 }}
              style={{ fontFamily: "JetBrains Mono, monospace", fontSize: "12px", color: colors.brass, letterSpacing: "0.2em" }}
            >
              LAT 46.5592° N · LON 7.8922° E · ALT 1'638 M
            </motion.div>
          </motion.div>

          {/* Scroll Indicator */}
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            style={{ position: "absolute", bottom: "40px" }}
          >
            <div style={{ width: "1px", height: "60px", background: `linear-gradient(to bottom, transparent, ${colors.brass}, transparent)` }} />
          </motion.div>
        </section>

        {/* Floating Contact Cards */}
        <section style={{ padding: "120px 40px", position: "relative" }}>
          <div style={{ maxWidth: "1400px", margin: "0 auto", display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "40px" }}>
            {[
              { icon: "📍", title: "Mürren", subtitle: "Zaun 990B, 3825", desc: "Autofrei · 1'638 m ü.M." },
              { icon: "📞", title: "Telefon", subtitle: "033 525 88 17", desc: "Mo–So 08:00–22:00" },
              { icon: "✉️", title: "E-Mail", subtitle: "muh@alti-metzg.ch", desc: "Antwort binnen 24h" }
            ].map((card, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 60 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8, delay: i * 0.15 }}
                whileHover={{ y: -10, scale: 1.02 }}
                style={{
                  background: "rgba(255,255,255,0.03)",
                  border: "1px solid rgba(255,255,255,0.06)",
                  borderRadius: "24px",
                  padding: "48px 32px",
                  backdropFilter: "blur(20px)",
                  cursor: "pointer",
                  transition: "all 0.4s cubic-bezier(0.23, 1, 0.32, 1)"
                }}
              >
                <motion.span
                  animate={{ rotate: [0, 5, -5, 0] }}
                  transition={{ duration: 4, repeat: Infinity, delay: i * 0.5 }}
                  style={{ fontSize: "48px", display: "block", marginBottom: "24px" }}
                >
                  {card.icon}
                </motion.span>
                <h3 style={{ fontFamily: "Cormorant Garamond, Georgia, serif", fontSize: "28px", color: colors.white, marginBottom: "8px" }}>{card.title}</h3>
                <p style={{ fontFamily: "Inter, system-ui, sans-serif", fontSize: "18px", color: colors.brass, marginBottom: "12px" }}>{card.subtitle}</p>
                <p style={{ fontFamily: "Inter, system-ui, sans-serif", fontSize: "13px", color: "rgba(255,255,255,0.4)" }}>{card.desc}</p>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Interactive Form - Split Layout */}
        <section style={{ padding: "100px 40px", background: "linear-gradient(180deg, transparent 0%, rgba(176,141,87,0.05) 100%)" }}>
          <div style={{ maxWidth: "1200px", margin: "0 auto", display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(350px, 1fr))", gap: "80px", alignItems: "center" }}>
            {/* Left - Text */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <motion.p
                initial={{ opacity: 0, letterSpacing: "0.05em" }}
                whileInView={{ opacity: 1, letterSpacing: "0.3em" }}
                viewport={{ once: true }}
                style={{
                  fontFamily: "Inter, system-ui, sans-serif",
                  fontSize: "11px",
                  textTransform: "uppercase",
                  color: colors.brass,
                  marginBottom: "24px",
                  letterSpacing: "0.3em"
                }}
              >
                Schreib uns
              </motion.p>
              <h2 style={{ fontFamily: "Cormorant Garamond, Georgia, serif", fontSize: "clamp(40px, 6vw, 64px)", color: colors.white, fontWeight: 300, lineHeight: 1.1, marginBottom: "32px" }}>
                Haben wir<br /><span style={{ color: colors.brass }}>verpasst?</span>
              </h2>
              <p style={{ fontFamily: "Inter, system-ui, sans-serif", fontSize: "16px", color: "rgba(255,255,255,0.6)", lineHeight: 1.8 }}>
                Frag alles. Wir antworten. Ehrlich. Persönlich. Binnen 24 Stunden.
              </p>
            </motion.div>

            {/* Right - Form */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              style={{ display: "flex", flexDirection: "column", gap: "20px" }}
            >
              {[
                { label: "Dein Name", key: "name" },
                { label: "E-Mail", key: "email" }
              ].map((field) => (
                <motion.div
                  key={field.key}
                  whileFocus={{ scale: 1.02 }}
                  style={{ position: "relative" }}
                >
                  <input
                    type={field.key === "email" ? "email" : "text"}
                    placeholder=" "
                    value={formState[field.key as keyof typeof formState]}
                    onChange={(e) => setFormState({ ...formState, [field.key]: e.target.value })}
                    style={{
                      width: "100%",
                      padding: "24px 20px 8px",
                      background: "rgba(255,255,255,0.05)",
                      border: "1px solid rgba(255,255,255,0.1)",
                      borderRadius: "0",
                      outline: "none",
                      color: colors.white,
                      fontFamily: "Inter, system-ui, sans-serif",
                      fontSize: "14px",
                      transition: "all 0.3s ease"
                    }}
                  />
                  <motion.label
                    initial={{ y: 0, opacity: 0.5 }}
                    animate={{
                      y: formState[field.key as keyof typeof formState] ? -8 : 0,
                      opacity: formState[field.key as keyof typeof formState] ? 0.7 : 0.4
                    }}
                    style={{
                      position: "absolute",
                      left: "20px",
                      top: "20px",
                      fontFamily: "Inter, system-ui, sans-serif",
                      fontSize: "11px",
                      letterSpacing: "0.15em",
                      textTransform: "uppercase",
                      color: colors.brass,
                      pointerEvents: "none"
                    }}
                  >
                    {field.label}
                  </motion.label>
                </motion.div>
              ))}

              <motion.div whileFocus={{ scale: 1.02 }} style={{ position: "relative" }}>
                <textarea
                  placeholder=" "
                  value={formState.message}
                  onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                  rows={4}
                  style={{
                    width: "100%",
                    padding: "24px 20px 8px",
                    background: "rgba(255,255,255,0.05)",
                    border: "1px solid rgba(255,255,255,0.1)",
                    borderRadius: "0",
                    outline: "none",
                    color: colors.white,
                    fontFamily: "Inter, system-ui, sans-serif",
                    fontSize: "14px",
                    resize: "none",
                    transition: "all 0.3s ease"
                  }}
                />
                <motion.label
                  initial={{ y: 0, opacity: 0.5 }}
                  animate={{
                    y: formState.message ? -8 : 0,
                    opacity: formState.message ? 0.7 : 0.4
                  }}
                  style={{
                    position: "absolute",
                    left: "20px",
                    top: "20px",
                    fontFamily: "Inter, system-ui, sans-serif",
                    fontSize: "11px",
                    letterSpacing: "0.15em",
                    textTransform: "uppercase",
                    color: colors.brass,
                    pointerEvents: "none"
                  }}
                >
                  Deine Nachricht
                </motion.label>
              </motion.div>

              <motion.button
                whileHover={{ scale: 1.02, backgroundColor: colors.brass }}
                whileTap={{ scale: 0.98 }}
                style={{
                  width: "100%",
                  padding: "20px 32px",
                  background: "transparent",
                  border: "1px solid colors.brass",
                  color: colors.white,
                  fontFamily: "Inter, system-ui, sans-serif",
                  fontSize: "13px",
                  letterSpacing: "0.15em",
                  textTransform: "uppercase",
                  cursor: "pointer",
                  transition: "all 0.3s ease",
                  position: "relative",
                  overflow: "hidden"
                }}
              >
                Senden
                <motion.span
                  initial={{ x: "-100%" }}
                  whileHover={{ x: "100%" }}
                  transition={{ duration: 0.5 }}
                  style={{
                    position: "absolute",
                    inset: 0,
                    background: "linear-gradient(90deg, transparent, rgba(255,255,255,0.1), transparent)",
                    pointerEvents: "none"
                  }}
                />
              </motion.button>
            </motion.div>
          </div>
        </section>

        {/* Parallax Map Section */}
        <section style={{ position: "relative", height: "70vh", overflow: "hidden" }}>
          <motion.div style={{ y, position: "absolute", inset: 0 }}>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d10981.5!2d7.8922!3d46.5592!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x478fa57ebb54f74b%3A0x7e3a5a0c2c4b7e8a!2sMurren%2C+Switzerland!5e0!3m2!1sde!2sch!4v1709123456789"
              width="100%"
              height="100%"
              style={{ border: "none", filter: "grayscale(100%) invert(1) contrast(1.1)" }}
              allowFullScreen
              loading="lazy"
            />
          </motion.div>

          {/* Floating Overlay */}
          <motion.div
            initial={{ y: 100, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            style={{
              position: "absolute",
              bottom: "60px",
              left: "50%",
              transform: "translateX(-50%)",
              background: "rgba(15,14,12,0.9)",
              padding: "24px 48px",
              borderRadius: "50px",
              backdropFilter: "blur(20px)",
              border: "1px solid rgba(255,255,255,0.1)",
              textAlign: "center"
            }}
          >
            <p style={{ fontFamily: "Inter, system-ui, sans-serif", fontSize: "11px", letterSpacing: "0.2em", textTransform: "uppercase", color: colors.brass, marginBottom: "8px" }}>So kommst du zu uns</p>
            <p style={{ fontFamily: "Cormorant Garamond, Georgia, serif", fontSize: "20px", color: colors.white }}>Stechelberg → Seilbahn → Mürren</p>
          </motion.div>
        </section>
      </div>
      <GlobalFooter />
    </>
  );
}
