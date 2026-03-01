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
  const [formState, setFormState] = useState({ name: "", email: "", subject: "", message: "" });
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
        @keyframes destinationPulse {
          0%, 100% { box-shadow: 0 0 0 0 rgba(176,141,87,0.4) }
          50% { box-shadow: 0 0 0 12px rgba(176,141,87,0) }
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

      {/* SECTION 2 — KONTAKT INFO */}
      <section style={{ background: "var(--warm-white)", padding: "120px 80px" }}>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", gap: "80px" }}>
          {/* Left — headline */}
          <RevealSection>
            <div style={{ maxWidth: "480px" }}>
              <p
                className="eyebrow"
                style={{ marginBottom: "24px" }}
              >
                VERBINDUNG AUFNEHMEN
              </p>
              <h2
                style={{
                  fontFamily: "var(--font-display)",
                  fontSize: "clamp(48px, 6vw, 80px)",
                  fontWeight: 300,
                  fontStyle: "italic",
                  lineHeight: 0.92,
                  color: "var(--charcoal)"
                }}
              >
                Wir sind
                <br />
                <em style={{ fontStyle: "normal", fontWeight: 600 }}>
                  für Dich da.
                </em>
              </h2>
            </div>
          </RevealSection>

          {/* Right — three data rows */}
          <RevealSection delay={0.2}>
            <div style={{ flex: 1, maxWidth: "560px" }}>
              {[
                {
                  index: "01",
                  label: "ADRESSE",
                  primary: "Zaun 990B, 3825 Mürren",
                  secondary: "Autofrei · 1'638 m ü.M.",
                  action: null
                },
                {
                  index: "02",
                  label: "TELEFON",
                  primary: "033 525 88 17",
                  secondary: "Mo–So · 08:00–22:00",
                  action: "tel:+41335258817"
                },
                {
                  index: "03",
                  label: "E-MAIL",
                  primary: "muh@alti-metzg.ch",
                  secondary: "Antwort binnen 24h",
                  action: "mailto:muh@alti-metzg.ch"
                }
              ].map((item, i) => (
                <div
                  key={i}
                  style={{
                    display: "flex",
                    alignItems: "flex-start",
                    gap: "32px",
                    padding: "28px 0",
                    borderBottom: "1px solid rgba(0,0,0,0.07)",
                    transition: "padding-left 0.3s ease",
                    cursor: item.action ? "pointer" : "default"
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.paddingLeft = "8px";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.paddingLeft = "0px";
                  }}
                  onClick={() => item.action && window.open(item.action, "_self")}
                >
                  {/* Numer */}
                  <span
                    style={{
                      fontFamily: "var(--font-display)",
                      fontSize: "13px",
                      fontWeight: 300,
                      color: "var(--stone)",
                      minWidth: "24px",
                      paddingTop: "2px"
                    }}
                  >
                    {item.index}
                  </span>

                  {/* Label */}
                  <span
                    style={{
                      fontFamily: "var(--font-body)",
                      fontSize: "9px",
                      fontWeight: 500,
                      letterSpacing: "0.25em",
                      textTransform: "uppercase",
                      color: "var(--stone)",
                      minWidth: "72px",
                      paddingTop: "4px"
                    }}
                  >
                    {item.label}
                  </span>

                  {/* Data */}
                  <div>
                    <p
                      style={{
                        fontFamily: "var(--font-display)",
                        fontSize: "22px",
                        fontWeight: 400,
                        color: "var(--charcoal)",
                        lineHeight: 1.2,
                        marginBottom: "4px"
                      }}
                    >
                      {item.primary}
                    </p>
                    <p
                      style={{
                        fontFamily: "var(--font-body)",
                        fontSize: "13px",
                        color: "var(--stone)",
                        fontWeight: 300
                      }}
                    >
                      {item.secondary}
                    </p>
                  </div>

                  {/* Arrow — tylko jeśli jest action */}
                  {item.action && (
                    <motion.span
                      initial={{ x: 0 }}
                      whileHover={{ x: 4 }}
                      style={{
                        marginLeft: "auto",
                        color: "var(--aged-brass)",
                        fontSize: "18px",
                        alignSelf: "center",
                        transition: "transform 0.3s ease"
                      }}
                    >
                      →
                    </motion.span>
                  )}
                </div>
              ))}
            </div>
          </RevealSection>
        </div>
      </section>

      {/* SECTION 3 — FORM "NACHRICHT" */}
      <section style={{ background: "var(--charcoal)", padding: "120px 80px" }}>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", gap: "80px" }}>
          {/* LEWA — atmosfera */}
          <RevealSection>
            <div style={{ maxWidth: "440px" }}>
              {/* Duży dekoracyjny numer */}
              <div
                style={{
                  fontFamily: "var(--font-display)",
                  fontSize: "160px",
                  fontWeight: 300,
                  color: "rgba(176,141,87,0.08)",
                  lineHeight: 1,
                  marginBottom: "-40px",
                  userSelect: "none"
                }}
              >
                ✦
              </div>

              <p
                className="eyebrow"
                style={{
                  color: "var(--aged-brass)",
                  marginBottom: "24px"
                }}
              >
                SCHREIB UNS
              </p>

              <h2
                style={{
                  fontFamily: "var(--font-display)",
                  fontSize: "clamp(40px, 5vw, 64px)",
                  fontWeight: 300,
                  fontStyle: "italic",
                  color: "#FFFFFF",
                  lineHeight: 0.95,
                  marginBottom: "32px"
                }}
              >
                Haben wir
                <br />
                uns verpasst?
              </h2>

              <p
                style={{
                  fontFamily: "var(--font-body)",
                  fontSize: "15px",
                  fontWeight: 300,
                  color: "rgba(255,255,255,0.45)",
                  lineHeight: 1.8,
                  maxWidth: "320px"
                }}
              >
                Wir antworten innerhalb von 24 Stunden.
                Für dringende Anfragen erreicht Ihr uns
                telefonisch unter 033 525 88 17.
              </p>

              {/* Öffnungszeiten kompakt */}
              <div
                style={{
                  marginTop: "48px",
                  paddingTop: "32px",
                  borderTop: "1px solid rgba(255,255,255,0.07)"
                }}
              >
                <p
                  style={{
                    fontFamily: "var(--font-body)",
                    fontSize: "9px",
                    letterSpacing: "0.25em",
                    textTransform: "uppercase",
                    color: "rgba(255,255,255,0.25)",
                    marginBottom: "16px"
                  }}
                >
                  ÖFFNUNGSZEITEN
                </p>
                {[
                  { days: "Di–Do", time: "08:00–18:45" },
                  { days: "Fr–Sa", time: "08:00–19:15" },
                  { days: "So", time: "08:00–18:45" },
                  { days: "Mo", time: "Ruhetag", muted: true }
                ].map((row, i) => (
                  <div
                    key={i}
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      padding: "8px 0",
                      borderBottom: "1px solid rgba(255,255,255,0.04)"
                    }}
                  >
                    <span
                      style={{
                        fontSize: "13px",
                        fontWeight: 300,
                        color: "rgba(255,255,255,0.4)"
                      }}
                    >
                      {row.days}
                    </span>
                    <span
                      style={{
                        fontSize: "13px",
                        fontWeight: 300,
                        color: row.muted
                          ? "rgba(255,255,255,0.2)"
                          : "rgba(255,255,255,0.7)",
                        fontStyle: row.muted ? "italic" : "normal"
                      }}
                    >
                      {row.time}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </RevealSection>

          {/* PRAWA — form */}
          <RevealSection delay={0.2}>
            <div style={{ flex: 1, maxWidth: "520px" }}>
              <form
                style={{ display: "flex", flexDirection: "column", gap: "40px" }}
                onSubmit={handleSubmit}
              >
                {/* Name + Email w rzędzie */}
                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "32px" }}>
                  <div style={{ position: "relative" }}>
                    <label className="label-brass">Dein Name</label>
                    <input
                      className="input-underline input-underline-dark"
                      placeholder="Thomas Müller"
                      value={formState.name}
                      onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                    />
                  </div>
                  <div style={{ position: "relative" }}>
                    <label className="label-brass">E-Mail</label>
                    <input
                      className="input-underline input-underline-dark"
                      type="email"
                      placeholder="deine@email.ch"
                      value={formState.email}
                      onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                    />
                  </div>
                </div>

                {/* Betreff */}
                <div style={{ position: "relative" }}>
                  <label className="label-brass">Betreff</label>
                  <select
                    className="input-underline input-underline-dark"
                    style={{
                      cursor: "pointer",
                      WebkitAppearance: "none",
                      appearance: "none",
                      background: "transparent"
                    }}
                    value={formState.subject}
                    onChange={(e) => setFormState({ ...formState, subject: e.target.value })}
                  >
                    <option value="">Wähle ein Thema</option>
                    <option value="bistro">Tischreservierung · Bistro</option>
                    <option value="carnotzet">Carnotzet · Privatanlass</option>
                    <option value="dorfladen">Dorfladen · Anfrage</option>
                    <option value="allgemein">Allgemeine Frage</option>
                  </select>
                </div>

                {/* Nachricht */}
                <div style={{ position: "relative" }}>
                  <label className="label-brass">Nachricht</label>
                  <textarea
                    className="input-underline input-underline-dark"
                    rows={5}
                    placeholder="Wir freuen uns von Dir zu hören..."
                    value={formState.message}
                    onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                    style={{
                      resize: "none",
                      lineHeight: 1.7,
                      caretColor: "var(--aged-brass)"
                    }}
                  />
                  {/* Character counter */}
                  {formState.message.length > 0 && (
                    <p
                      style={{
                        fontFamily: "var(--font-body)",
                        fontSize: "10px",
                        color: "rgba(255,255,255,0.25)",
                        textAlign: "right" as const,
                        marginTop: "8px"
                      }}
                    >
                      {formState.message.length} / 500
                    </p>
                  )}
                </div>

                {/* Submit */}
                <div style={{ display: "flex", alignItems: "center", gap: "24px" }}>
                  {!isSubmitted ? (
                    <button
                      type="submit"
                      className="btn btn-brass"
                      style={{ minWidth: "200px", borderRadius: 0 }}
                    >
                      Nachricht senden
                    </button>
                  ) : (
                    <div
                      style={{
                        display: "flex",
                        gap: "12px",
                        alignItems: "center"
                      }}
                    >
                      <div
                        style={{
                          width: 20,
                          height: 20,
                          borderRadius: "50%",
                          background: "var(--aged-brass)",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          fontSize: "12px",
                          color: "white"
                        }}
                      >
                        ✓
                      </div>
                      <span
                        style={{
                          color: "rgba(255,255,255,0.6)",
                          fontSize: "13px"
                        }}
                      >
                        Nachricht gesendet. Wir melden uns!
                      </span>
                    </div>
                  )}
                </div>
              </form>
            </div>
          </RevealSection>
        </div>
      </section>

      {/* SECTION 4 — ANFAHRT "DIE REISE" */}
      <section style={{ background: "var(--warm-white)", padding: "120px 80px" }}>
        <RevealSection>
          {/* Headline */}
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "flex-end",
              marginBottom: "80px"
            }}
          >
            <div>
              <p className="eyebrow" style={{ marginBottom: "16px" }}>
                ANFAHRT
              </p>
              <h2
                style={{
                  fontFamily: "var(--font-display)",
                  fontSize: "clamp(44px, 5vw, 72px)",
                  fontWeight: 300,
                  fontStyle: "italic",
                  color: "var(--charcoal)",
                  lineHeight: 0.95
                }}
              >
                Nur per
                <br />
                <strong style={{ fontStyle: "normal", fontWeight: 600 }}>
                  Seilbahn.
                </strong>
              </h2>
            </div>
            <p
              style={{
                fontSize: "13px",
                color: "var(--stone)",
                fontWeight: 300,
                maxWidth: "240px",
                textAlign: "right",
                lineHeight: 1.7
              }}
            >
              Mürren ist autofrei. Das macht
              die Anreise zur Erfahrung.
            </p>
          </div>
        </RevealSection>

        {/* 4-step Seilbahn diagram */}
        <div
          style={{
            position: "relative",
            display: "grid",
            gridTemplateColumns: "repeat(4, 1fr)"
          }}
        >
          {/* Verbindungslinie zwischen Stops */}
          <div
            style={{
              position: "absolute",
              top: "20px",
              left: "12.5%",
              right: "12.5%",
              height: "1px",
              background: `repeating-linear-gradient(
                to right,
                var(--stone) 0px,
                var(--stone) 8px,
                transparent 8px,
                transparent 16px
              )`,
              zIndex: 0
            }}
          />

          {[
            {
              step: "01",
              ort: "Stechelberg",
              detail: "Parkplatz\n& Bushaltestelle",
              altitude: "910 m"
            },
            {
              step: "02",
              ort: "Luftseilbahn",
              detail: "Fahrt ca.\n4 Minuten",
              altitude: "↑ 728 m"
            },
            {
              step: "03",
              ort: "Mürren Dorf",
              detail: "5 Minuten\nzu Fuss",
              altitude: "1'638 m"
            },
            {
              step: "04",
              ort: "Alti Metzg",
              detail: "Zaun 990B\n3825 Mürren",
              altitude: "Angekommen",
              isDestination: true
            }
          ].map((stop, i) => (
            <RevealSection key={i} delay={i * 0.15}>
              <div
                style={{
                  display: "flex",
                  flexDirection: "column" as const,
                  alignItems: "center",
                  textAlign: "center" as const,
                  paddingTop: 0,
                  position: "relative"
                }}
              >
                {/* Dot */}
                <div
                  style={{
                    width: stop.isDestination ? "16px" : "10px",
                    height: stop.isDestination ? "16px" : "10px",
                    borderRadius: "50%",
                    background: stop.isDestination
                      ? "var(--aged-brass)"
                      : "var(--charcoal)",
                    border: stop.isDestination
                      ? "2px solid var(--aged-brass)"
                      : "none",
                    marginBottom: "24px",
                    position: "relative",
                    zIndex: 1,
                    flexShrink: 0,
                    animation: stop.isDestination
                      ? "destinationPulse 3s ease infinite"
                      : "none"
                  }}
                />

                {/* Step number */}
                <span
                  style={{
                    fontFamily: "var(--font-display)",
                    fontSize: "48px",
                    fontWeight: 300,
                    color: "rgba(0,0,0,0.05)",
                    lineHeight: 1,
                    marginBottom: "16px",
                    display: "block"
                  }}
                >
                  {stop.step}
                </span>

                {/* Ort */}
                <p
                  style={{
                    fontFamily: "var(--font-body)",
                    fontSize: "11px",
                    fontWeight: 500,
                    letterSpacing: "0.15em",
                    textTransform: "uppercase",
                    color: stop.isDestination
                      ? "var(--aged-brass)"
                      : "var(--charcoal)",
                    marginBottom: "8px"
                  }}
                >
                  {stop.ort}
                </p>

                {/* Detail */}
                <p
                  style={{
                    fontFamily: "var(--font-body)",
                    fontSize: "13px",
                    fontWeight: 300,
                    color: "var(--stone)",
                    lineHeight: 1.6,
                    whiteSpace: "pre-line"
                  }}
                >
                  {stop.detail}
                </p>

                {/* Altitude */}
                <p
                  style={{
                    fontFamily: "var(--font-body)",
                    fontSize: "11px",
                    color: "rgba(0,0,0,0.2)",
                    marginTop: "12px",
                    letterSpacing: "0.05em"
                  }}
                >
                  {stop.altitude}
                </p>
              </div>
            </RevealSection>
          ))}
        </div>
      </section>

      {/* SECTION 5 — MAP */}
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
            {/* Krzyżyk */}
            <line
              x1="30"
              y1="0"
              x2="30"
              y2="25"
              stroke="rgba(176,141,87,0.7)"
              strokeWidth="1"
            />
            <line
              x1="30"
              y1="35"
              x2="30"
              y2="60"
              stroke="rgba(176,141,87,0.7)"
              strokeWidth="1"
            />
            <line
              x1="0"
              y1="30"
              x2="25"
              y2="30"
              stroke="rgba(176,141,87,0.7)"
              strokeWidth="1"
            />
            <line
              x1="35"
              y1="30"
              x2="60"
              y2="30"
              stroke="rgba(176,141,87,0.7)"
              strokeWidth="1"
            />
            {/* Środkowe kółko */}
            <circle
              cx="30"
              cy="30"
              r="4"
              fill="none"
              stroke="var(--aged-brass)"
              strokeWidth="1.5"
            />
            <circle cx="30" cy="30" r="1.5" fill="var(--aged-brass)" />
            {/* Pulsujące kółko */}
            <circle
              cx="30"
              cy="30"
              r="12"
              fill="none"
              stroke="rgba(176,141,87,0.2)"
              strokeWidth="1"
              style={{ animation: "crosshairPulse 3s ease infinite" }}
            />
          </svg>
        </div>
      </section>

      <GlobalFooter />
    </>
  );
}
