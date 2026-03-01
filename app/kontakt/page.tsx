"use client";

import { motion, useInView } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import GlobalFooter from "@/components/GlobalFooter";

// Coordinate Typer Component
function CoordinateTyper({ text, delay = 0 }: { text: string; delay?: number }) {
  const [displayed, setDisplayed] = useState("");

  useEffect(() => {
    const timeout = setTimeout(() => {
      let i = 0;
      const interval = setInterval(() => {
        setDisplayed(text.slice(0, i + 1));
        i++;
        if (i >= text.length) clearInterval(interval);
      }, 80);
      return () => clearInterval(interval);
    }, delay);
    return () => clearTimeout(timeout);
  }, [text, delay]);

  return (
    <span>
      {displayed}
      {displayed.length < text.length && (
        <span
          style={{
            display: "inline-block",
            width: "2px",
            height: "0.8em",
            background: "var(--aged-brass)",
            marginLeft: "2px",
            verticalAlign: "middle",
            animation: "blink 0.7s step-end infinite"
          }}
        />
      )}
    </span>
  );
}

// Reveal Section Wrapper
function RevealSection({ children, delay = 0 }: { children: React.ReactNode; delay?: number }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.8, delay }}
    >
      {children}
    </motion.div>
  );
}

export default function KontaktPage() {
  const [formState, setFormState] = useState({ name: "", email: "", message: "" });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
    // Reset after 5 seconds
    setTimeout(() => setIsSubmitted(false), 5000);
  };

  return (
    <>
      <style>{`
        @keyframes scrollLine {
          0% { transform: scaleY(0); opacity: 1 }
          100% { transform: scaleY(1); opacity: 0 }
        }
        @keyframes blink {
          0%, 100% { opacity: 1 }
          50% { opacity: 0 }
        }
        @keyframes crosshairPulse {
          0%, 100% { r: 12; opacity: 0.4 }
          50% { r: 20; opacity: 0 }
        }
      `}</style>

      {/* HERO SECTION */}
      <section
        style={{
          background: "var(--charcoal)",
          height: "75vh",
          display: "flex",
          flexDirection: "column" as const,
          alignItems: "center",
          justifyContent: "center",
          position: "relative",
          overflow: "hidden"
        }}
      >
        {/* Ghost tło — "KONTAKT" jako dekoracja */}
        <div
          style={{
            position: "absolute",
            fontFamily: "var(--font-display)",
            fontSize: "clamp(180px, 25vw, 320px)",
            fontWeight: 600,
            color: "rgba(255,255,255,0.025)",
            letterSpacing: "-0.04em",
            userSelect: "none",
            pointerEvents: "none",
            whiteSpace: "nowrap",
            lineHeight: 1
          }}
        >
          KONTAKT
        </div>

        {/* Main content */}
        <RevealSection>
          <div
            style={{
              position: "relative",
              zIndex: 1,
              textAlign: "center" as const,
              display: "flex",
              flexDirection: "column" as const,
              alignItems: "center",
              gap: "0"
            }}
          >
            {/* Eyebrow */}
            <p
              style={{
                fontFamily: "var(--font-body)",
                fontSize: "11px",
                fontWeight: 400,
                letterSpacing: "0.3em",
                textTransform: "uppercase",
                color: "var(--stone)",
                marginBottom: "32px"
              }}
            >
              MÜRREN · ZAUN 990B · 1638 M Ü.M.
            </p>

            {/* Główny tytuł */}
            <h1
              style={{
                fontFamily: "var(--font-display)",
                fontSize: "clamp(72px, 12vw, 160px)",
                fontWeight: 300,
                fontStyle: "italic",
                lineHeight: 0.9,
                letterSpacing: "-0.02em",
                color: "#FFFFFF",
                marginBottom: "40px"
              }}
            >
              Komm
              <br />
              <span
                style={{ fontWeight: 600, fontStyle: "normal" }}
              >
                vorbei.
              </span>
            </h1>

            {/* Subline */}
            <p
              style={{
                fontFamily: "var(--font-body)",
                fontSize: "14px",
                fontWeight: 300,
                letterSpacing: "0.08em",
                color: "rgba(255,255,255,0.4)"
              }}
            >
              Wir freuen uns auf Dich
            </p>
          </div>
        </RevealSection>

        {/* Scroll indicator */}
        <div
          style={{
            position: "absolute",
            bottom: "40px",
            left: "50%",
            transform: "translateX(-50%)",
            display: "flex",
            flexDirection: "column" as const,
            alignItems: "center",
            gap: "8px"
          }}
        >
          <div
            style={{
              width: "1px",
              height: "40px",
              background: "rgba(255,255,255,0.2)",
              transformOrigin: "top",
              animation: "scrollLine 2s ease-in-out infinite"
            }}
          />
          <p
            style={{
              fontFamily: "var(--font-body)",
              fontSize: "9px",
              letterSpacing: "0.25em",
              textTransform: "uppercase",
              color: "rgba(255,255,255,0.25)"
            }}
          >
            SCROLL
          </p>
        </div>
      </section>

      {/* KONTAKT & FORM — demo2-carnotzet style */}
      <section style={{ background: "var(--charcoal)", padding: "120px 60px" }}>
        <div style={{ maxWidth: "1000px", margin: "0 auto", display: "grid", gridTemplateColumns: "1fr 1fr", gap: "80px", alignItems: "start" }}>
          {/* Left */}
          <div>
            <p style={{ fontFamily: "var(--font-body)", fontSize: "10px", letterSpacing: "0.35em", textTransform: "uppercase", color: "var(--aged-brass)", marginBottom: "24px" }}>Kontakt</p>
            <h2 style={{ fontFamily: "var(--font-display)", fontSize: "clamp(36px, 5vw, 52px)", color: "#FFFFFF", marginBottom: "32px", lineHeight: 1.1 }}>
              Lass uns
              <br />
              <span style={{ fontStyle: "italic", color: "var(--aged-brass)" }}>
                sprechen.
              </span>
            </h2>
            <p style={{ fontFamily: "var(--font-body)", fontSize: "15px", fontWeight: 300, color: "rgba(255,255,255,0.6)", lineHeight: 1.7, marginBottom: "48px" }}>
              Fragen? Anregungen? Oder einfach Hallo sagen.<br />
              Wir antworten binnen 24 Stunden.
            </p>

            {/* Contact Details */}
            <div style={{ display: "flex", flexDirection: "column", gap: "24px" }}>
              <div>
                <p style={{ fontFamily: "var(--font-body)", fontSize: "10px", letterSpacing: "0.25em", textTransform: "uppercase", color: "var(--aged-brass)", marginBottom: "8px" }}>ADRESSE</p>
                <p style={{ fontFamily: "var(--font-display)", fontSize: "20px", color: "#FFFFFF", marginBottom: "4px" }}>Zaun 990B, 3825 Mürren</p>
                <p style={{ fontFamily: "var(--font-body)", fontSize: "13px", color: "rgba(255,255,255,0.4)" }}>Autofrei · 1'638 m ü.M.</p>
              </div>
              <div>
                <p style={{ fontFamily: "var(--font-body)", fontSize: "10px", letterSpacing: "0.25em", textTransform: "uppercase", color: "var(--aged-brass)", marginBottom: "8px" }}>TELEFON</p>
                <a href="tel:+41335258817" style={{ fontFamily: "var(--font-display)", fontSize: "20px", color: "#FFFFFF", textDecoration: "none", display: "block", marginBottom: "4px" }}>033 525 88 17</a>
                <p style={{ fontFamily: "var(--font-body)", fontSize: "13px", color: "rgba(255,255,255,0.4)" }}>Mo–So 08:00–22:00</p>
              </div>
              <div>
                <p style={{ fontFamily: "var(--font-body)", fontSize: "10px", letterSpacing: "0.25em", textTransform: "uppercase", color: "var(--aged-brass)", marginBottom: "8px" }}>E-MAIL</p>
                <a href="mailto:muh@alti-metzg.ch" style={{ fontFamily: "var(--font-display)", fontSize: "20px", color: "#FFFFFF", textDecoration: "none", display: "block", marginBottom: "4px" }}>muh@alti-metzg.ch</a>
                <p style={{ fontFamily: "var(--font-body)", fontSize: "13px", color: "rgba(255,255,255,0.4)" }}>Antwort binnen 24h</p>
              </div>
            </div>
          </div>

          {/* Right - Form */}
          <form onSubmit={handleSubmit} style={{ display: "grid", gap: "20px" }}>
            <input
              type="text"
              placeholder="Dein Name"
              value={formState.name}
              onChange={(e) => setFormState({ ...formState, name: e.target.value })}
              style={{
                width: "100%",
                padding: "18px 24px",
                fontFamily: "var(--font-body)",
                fontSize: "15px",
                background: "rgba(255,255,255,0.05)",
                border: "1px solid rgba(255,255,255,0.15)",
                borderRadius: "0",
                outline: "none",
                color: "#FFFFFF"
              }}
            />
            <input
              type="email"
              placeholder="E-Mail"
              value={formState.email}
              onChange={(e) => setFormState({ ...formState, email: e.target.value })}
              style={{
                width: "100%",
                padding: "18px 24px",
                fontFamily: "var(--font-body)",
                fontSize: "15px",
                background: "rgba(255,255,255,0.05)",
                border: "1px solid rgba(255,255,255,0.15)",
                borderRadius: "0",
                outline: "none",
                color: "#FFFFFF"
              }}
            />
            <textarea
              placeholder="Deine Nachricht..."
              rows={5}
              value={formState.message}
              onChange={(e) => setFormState({ ...formState, message: e.target.value })}
              style={{
                width: "100%",
                padding: "18px 24px",
                fontFamily: "var(--font-body)",
                fontSize: "15px",
                background: "rgba(255,255,255,0.05)",
                border: "1px solid rgba(255,255,255,0.15)",
                borderRadius: "0",
                outline: "none",
                resize: "none",
                color: "#FFFFFF",
                lineHeight: 1.6
              }}
            />
            {!isSubmitted ? (
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                type="submit"
                style={{
                  width: "100%",
                  padding: "20px 32px",
                  fontFamily: "var(--font-body)",
                  fontSize: "14px",
                  letterSpacing: "0.1em",
                  color: "#FFFFFF",
                  backgroundColor: "var(--aged-brass)",
                  border: "none",
                  borderRadius: "0",
                  cursor: "pointer",
                  textTransform: "uppercase"
                }}
              >
                Nachricht senden
              </motion.button>
            ) : (
              <div
                style={{
                  display: "flex",
                  gap: "12px",
                  alignItems: "center",
                  padding: "20px 24px",
                  background: "rgba(255,255,255,0.05)",
                  border: "1px solid rgba(176,141,87,0.3)"
                }}
              >
                <div
                  style={{
                    width: 24,
                    height: 24,
                    borderRadius: "50%",
                    background: "var(--aged-brass)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontSize: "14px",
                    color: "white"
                  }}
                >
                  ✓
                </div>
                <span style={{ color: "rgba(255,255,255,0.7)", fontSize: "14px" }}>
                  Nachricht gesendet. Wir melden uns!
                </span>
              </div>
            )}
          </form>
        </div>
      </section>

      {/* MAP SECTION */}
      <section style={{ position: "relative", height: "80vh", overflow: "hidden" }}>
        {/* Google Maps */}
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d5490!2d7.8922!3d46.5592!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x478fa57ebb54f74b%3A0x7e3a5a0c2c4b7e8a!2sMurren%2C+Switzerland!5e0!3m2!1sde!2sch!4v1709123456789"
          style={{
            position: "absolute",
            inset: 0,
            width: "100%",
            height: "100%",
            border: "none",
            filter: "grayscale(100%) contrast(1.1) brightness(0.4)"
          }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="Mürren"
        />

        {/* Overlay gradient */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            pointerEvents: "none",
            background: `
              linear-gradient(to right, rgba(30,30,28,0.8) 0%, transparent 30%, transparent 70%, rgba(30,30,28,0.8) 100%),
              linear-gradient(to bottom, rgba(30,30,28,0.6) 0%, transparent 30%, transparent 70%, rgba(30,30,28,0.6) 100%)
            `
          }}
        />

        {/* Content overlay — lewa strona */}
        <RevealSection>
          <div
            style={{
              position: "absolute",
              left: "80px",
              top: "50%",
              transform: "translateY(-50%)",
              zIndex: 2
            }}
          >
            <p
              style={{
                fontFamily: "var(--font-body)",
                fontSize: "9px",
                letterSpacing: "0.3em",
                textTransform: "uppercase",
                color: "rgba(255,255,255,0.3)",
                marginBottom: "24px"
              }}
            >
              KOORDINATEN
            </p>

            {/* Ticker — współrzędne */}
            <div
              style={{
                fontFamily: "var(--font-display)",
                fontSize: "clamp(32px, 4vw, 56px)",
                fontWeight: 300,
                color: "#FFFFFF",
                lineHeight: 1.2,
                letterSpacing: "-0.01em"
              }}
            >
              <CoordinateTyper text="46°33'33″N" delay={500} />
              <br />
              <CoordinateTyper text="7°53'32″E" delay={2000} />
            </div>

            <div
              style={{
                marginTop: "24px",
                display: "flex",
                gap: "24px"
              }}
            >
              {[
                { label: "HÖHE", value: "1'638 m" },
                { label: "AUTOFREI", value: "Ja" }
              ].map((item) => (
                <div key={item.label}>
                  <p
                    style={{
                      fontSize: "9px",
                      letterSpacing: "0.2em",
                      color: "rgba(255,255,255,0.25)",
                      marginBottom: "4px"
                    }}
                  >
                    {item.label}
                  </p>
                  <p
                    style={{
                      fontSize: "15px",
                      fontWeight: 300,
                      color: "rgba(255,255,255,0.7)"
                    }}
                  >
                    {item.value}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </RevealSection>

        {/* Prawa strona — crosshair */}
        <div
          style={{
            position: "absolute",
            left: "55%",
            top: "50%",
            transform: "translate(-50%, -50%)",
            zIndex: 2,
            pointerEvents: "none"
          }}
        >
          <svg width="60" height="60" viewBox="0 0 60 60">
            <line x1="30" y1="0" x2="30" y2="25" stroke="rgba(176,141,87,0.7)" strokeWidth="1" />
            <line x1="30" y1="35" x2="30" y2="60" stroke="rgba(176,141,87,0.7)" strokeWidth="1" />
            <line x1="0" y1="30" x2="25" y2="30" stroke="rgba(176,141,87,0.7)" strokeWidth="1" />
            <line x1="35" y1="30" x2="60" y2="30" stroke="rgba(176,141,87,0.7)" strokeWidth="1" />
            <circle cx="30" cy="30" r="4" fill="none" stroke="var(--aged-brass)" strokeWidth="1.5" />
            <circle cx="30" cy="30" r="1.5" fill="var(--aged-brass)" />
            <circle cx="30" cy="30" r="12" fill="none" stroke="rgba(176,141,87,0.2)" strokeWidth="1" style={{ animation: "crosshairPulse 3s ease infinite" }} />
          </svg>
        </div>
      </section>

      <GlobalFooter />
    </>
  );
}
