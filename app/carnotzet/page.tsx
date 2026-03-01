"use client";

import { motion, useInView } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import GlobalFooter from "@/components/GlobalFooter";

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

export default function CarnotzetPage() {
  const [heroImageY, setHeroImageY] = useState(0);
  const heroImageRef = useRef<HTMLDivElement>(null);

  // Parallax effect
  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      setHeroImageY(scrollY * 0.25);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Get today's info for Öffnungszeiten
  const getTodayInfo = () => {
    const days = [
      { short: "Mo", isClosed: true },
      { short: "Di", time: "17:00–23:00" },
      { short: "Mi", time: "17:00–23:00" },
      { short: "Do", time: "17:00–23:00" },
      { short: "Fr", time: "16:00–00:00" },
      { short: "Sa", time: "16:00–00:00" },
      { short: "So", time: "16:00–22:00" }
    ];
    const todayIdx = new Date().getDay() === 0 ? 6 : new Date().getDay() - 1;
    return { days, todayIdx, todayTime: days[todayIdx].isClosed ? "Geschlossen" : days[todayIdx].time };
  };

  const { days, todayIdx, todayTime } = getTodayInfo();

  return (
    <>
      <style>{`
        @keyframes scrollLine {
          0% { transform: scaleY(0); opacity: 1 }
          100% { transform: scaleY(1); opacity: 0 }
        }
      `}</style>

      {/* HERO */}
      <section style={{ height: "92vh", position: "relative", overflow: "hidden" }}>
        {/* Zdjęcie fullscreen z parallax */}
        <div
          ref={heroImageRef}
          style={{
            position: "absolute",
            inset: 0,
            backgroundImage: "url('/images/carnotzet-hero.jpg')",
            backgroundSize: "cover",
            backgroundPosition: "center",
            transform: `scale(1.06) translateY(${heroImageY}px)`,
            willChange: "transform"
          }}
        />

        {/* Overlay */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            background: `linear-gradient(
              160deg,
              rgba(30,30,28,0.55) 0%,
              rgba(30,30,28,0.25) 50%,
              rgba(30,30,28,0.65) 100%
            )`
          }}
        />

        {/* Content */}
        <div style={{ position: "absolute", bottom: "80px", left: "80px", zIndex: 2, maxWidth: "680px" }}>
          <RevealSection>
            <p className="eyebrow" style={{ color: "var(--stone)", marginBottom: "20px" }}>
              DER KELLER · REGIONALE WEINE · PRIVATANLÄSSE
            </p>
            <h1
              style={{
                fontFamily: "var(--font-display)",
                fontSize: "clamp(64px, 9vw, 120px)",
                fontWeight: 300,
                fontStyle: "italic",
                lineHeight: 0.92,
                letterSpacing: "-0.02em",
                color: "#FFFFFF",
                marginBottom: "8px"
              }}
            >
              Das
            </h1>
            <h1
              style={{
                fontFamily: "var(--font-display)",
                fontSize: "clamp(64px, 9vw, 120px)",
                fontWeight: 600,
                fontStyle: "normal",
                lineHeight: 0.92,
                letterSpacing: "-0.02em",
                color: "#FFFFFF",
                marginBottom: "32px"
              }}
            >
              Carnotzet.
            </h1>
            <p
              style={{
                fontFamily: "var(--font-body)",
                fontSize: "16px",
                fontWeight: 300,
                color: "rgba(255,255,255,0.6)",
                lineHeight: 1.7,
                maxWidth: "440px",
                marginBottom: "40px"
              }}
            >
              Aus der alten Metzgerei wurde ein Raum für gute Abende. Wein, Gesellschaft, Atmosphäre.
            </p>
            <a href="#reservierung" className="btn btn-brass">
              Tisch reservieren
            </a>
          </RevealSection>
        </div>

        {/* Prawa strona — pionowy label */}
        <div
          style={{
            position: "absolute",
            right: "40px",
            top: "50%",
            transform: "translateY(-50%) rotate(90deg)",
            transformOrigin: "center",
            fontFamily: "var(--font-body)",
            fontSize: "9px",
            fontWeight: 400,
            letterSpacing: "0.3em",
            textTransform: "uppercase",
            color: "rgba(255,255,255,0.2)",
            whiteSpace: "nowrap"
          }}
        >
          ALTI METZG · CARNOTZET
        </div>
      </section>

      {/* DER ABEND — deep-forest */}
      <section
        style={{
          background: "var(--deep-forest)",
          padding: "120px 80px",
          position: "relative",
          overflow: "hidden"
        }}
      >
        {/* Ghost text dekoracja */}
        <div
          style={{
            position: "absolute",
            fontFamily: "var(--font-display)",
            fontSize: "280px",
            fontWeight: 600,
            color: "rgba(255,255,255,0.02)",
            bottom: "-40px",
            right: "-20px",
            lineHeight: 1,
            userSelect: "none",
            pointerEvents: "none",
            letterSpacing: "-0.04em"
          }}
        >
          KELLER
        </div>

        <RevealSection>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              gap: "80px",
              alignItems: "center",
              position: "relative",
              zIndex: 1
            }}
          >
            {/* Lewa — placeholder zdjęcia */}
            <div
              style={{
                aspectRatio: "4/5",
                background: "#1a2a1e",
                display: "flex",
                alignItems: "center",
                justifyContent: "center"
              }}
            >
              <p style={{ fontFamily: "monospace", fontSize: "12px", opacity: 0.25, color: "white" }}>
                carnotzet-01.jpg
              </p>
            </div>

            {/* Prawa — tekst */}
            <div>
              <p className="eyebrow" style={{ color: "rgba(255,255,255,0.3)", marginBottom: "24px" }}>
                DER KELLER
              </p>
              <h2
                style={{
                  fontFamily: "var(--font-display)",
                  fontSize: "clamp(40px, 5vw, 64px)",
                  fontWeight: 300,
                  fontStyle: "italic",
                  color: "#FFFFFF",
                  lineHeight: 1,
                  marginBottom: "32px"
                }}
              >
                Ein Ort für
                <br />
                <strong style={{ fontWeight: 600, fontStyle: "normal" }}>gute Abende.</strong>
              </h2>
              <p
                style={{
                  fontSize: "16px",
                  fontWeight: 300,
                  color: "rgba(255,255,255,0.5)",
                  lineHeight: 1.8,
                  marginBottom: "48px"
                }}
              >
                Natursteinwände, Holzdecken, gedimmtes Licht.
                Der ehemalige Keller der Metzgerei wurde zum
                gemütlichsten Raum in Mürren.
              </p>

              {/* 3 fakty */}
              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "repeat(3, 1fr)",
                  gap: "0",
                  borderTop: "1px solid rgba(255,255,255,0.08)",
                  paddingTop: "40px"
                }}
              >
                {[
                  { num: "12–20", label: "Personen\nKapazität" },
                  { num: "100+", label: "Regionale\nWeine" },
                  { num: "Privat", label: "Buchbar auf\nAnfrage" }
                ].map((f, i) => (
                  <div
                    key={i}
                    style={{
                      paddingRight: "32px",
                      borderRight: i < 2 ? "1px solid rgba(255,255,255,0.08)" : "none",
                      paddingLeft: i > 0 ? "32px" : "0"
                    }}
                  >
                    <p
                      style={{
                        fontFamily: "var(--font-display)",
                        fontSize: "36px",
                        fontWeight: 300,
                        color: "var(--aged-brass)",
                        lineHeight: 1,
                        marginBottom: "8px"
                      }}
                    >
                      {f.num}
                    </p>
                    <p
                      style={{
                        fontSize: "11px",
                        fontWeight: 300,
                        color: "rgba(255,255,255,0.3)",
                        lineHeight: 1.5,
                        whiteSpace: "pre-line"
                      }}
                    >
                      {f.label}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </RevealSection>
      </section>

      {/* UNSERE WEINE */}
      <section style={{ background: "var(--warm-white)", padding: "96px 80px" }}>
        <RevealSection>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "flex-end",
              marginBottom: "64px",
              gap: "40px"
            }}
          >
            <div>
              <p className="eyebrow" style={{ marginBottom: "16px" }}>WEINAUSWAHL</p>
              <h2
                style={{
                  fontFamily: "var(--font-display)",
                  fontSize: "clamp(36px, 5vw, 60px)",
                  fontWeight: 300,
                  fontStyle: "italic",
                  color: "var(--charcoal)",
                  lineHeight: 0.95
                }}
              >
                Weine die
                <br />
                <strong style={{ fontWeight: 600, fontStyle: "normal" }}>Geschichten erzählen.</strong>
              </h2>
            </div>
            <p
              style={{
                fontSize: "13px",
                fontWeight: 300,
                color: "var(--stone)",
                maxWidth: "260px",
                lineHeight: 1.7,
                textAlign: "right"
              }}
            >
              Vorwiegend aus der Deutschschweiz und dem Wallis — von Winzern die wir kennen.
            </p>
          </div>

          {/* Wine list */}
          {[
            { region: "WALLIS", name: "Fendant du Valais", type: "Weiss · Chasselas", year: "2022", producer: "Domaine Cornulus" },
            { region: "GRAUBÜNDEN", name: "Malanser Pinot Noir", type: "Rot · Pinot Noir", year: "2021", producer: "Weinbau von Tscharner" },
            { region: "ZÜRICHSEE", name: "Räuschling", type: "Weiss · Räuschling", year: "2023", producer: "Reblaube Meilen" },
            { region: "TESSIN", name: "Merlot del Ticino", type: "Rot · Merlot", year: "2020", producer: "Vini Kopp" }
          ].map((wine, i) => (
            <div
              key={i}
              style={{
                display: "grid",
                gridTemplateColumns: "80px 1fr 1fr auto",
                gap: "24px",
                alignItems: "center",
                padding: "24px 0",
                borderBottom: "1px solid rgba(0,0,0,0.06)"
              }}
              onMouseEnter={(e) => (e.currentTarget.style.paddingLeft = "8px")}
              onMouseLeave={(e) => (e.currentTarget.style.paddingLeft = "0px")}
            >
              <span style={{ fontSize: "9px", letterSpacing: "0.15em", color: "var(--stone)" }}>{wine.region}</span>
              <p
                style={{
                  fontFamily: "var(--font-display)",
                  fontSize: "22px",
                  fontWeight: 400,
                  color: "var(--charcoal)"
                }}
              >
                {wine.name}
              </p>
              <p style={{ fontSize: "13px", fontWeight: 300, color: "var(--stone)" }}>
                {wine.type} · {wine.producer}
              </p>
              <p style={{ fontSize: "13px", color: "rgba(0,0,0,0.3)", textAlign: "right" }}>{wine.year}</p>
            </div>
          ))}

          {/* Reservierung CTA */}
          <div style={{ display: "flex", justifyContent: "center", marginTop: "64px" }}>
            <a href="tel:+41335258817" className="btn btn-primary">
              Abend reservieren — 033 525 88 17
            </a>
          </div>
        </RevealSection>
      </section>

      {/* ÖFFNUNGSZEITEN */}
      <section style={{ background: "var(--charcoal)", padding: "96px 80px" }}>
        <div className="container-max container-padding">
          <RevealSection>
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "flex-end",
                marginBottom: "64px",
                flexWrap: "wrap",
                gap: "32px"
              }}
            >
              <div>
                <p className="eyebrow" style={{ color: "var(--stone)", marginBottom: "16px" }}>
                  ÖFFNUNGSZEITEN
                </p>
                <h2
                  style={{
                    fontFamily: "var(--font-display)",
                    fontSize: "clamp(36px, 5vw, 56px)",
                    fontWeight: 300,
                    fontStyle: "italic",
                    color: "#FFFFFF",
                    lineHeight: 0.95
                  }}
                >
                  Wann wir für
                  <br />
                  <strong style={{ fontWeight: 600, fontStyle: "normal" }}>Dich da sind.</strong>
                </h2>
              </div>

              {/* Today badge */}
              <div style={{ border: "1px solid rgba(255,255,255,0.12)", padding: "16px 24px" }}>
                <p style={{ fontSize: "9px", letterSpacing: "0.2em", color: "rgba(255,255,255,0.3)", marginBottom: "6px" }}>
                  HEUTE
                </p>
                <p style={{ fontSize: "16px", fontWeight: 300, color: "#FFFFFF" }}>{todayTime}</p>
              </div>
            </div>

            {/* 7 dni grid */}
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(7, 1fr)",
                borderTop: "1px solid rgba(255,255,255,0.07)",
                borderLeft: "1px solid rgba(255,255,255,0.07)"
              }}
            >
              {days.map((day, i) => (
                <div
                  key={i}
                  style={{
                    padding: "28px 16px",
                    textAlign: "center",
                    borderRight: "1px solid rgba(255,255,255,0.07)",
                    borderBottom: "1px solid rgba(255,255,255,0.07)",
                    background: i === todayIdx ? "rgba(176,141,87,0.07)" : "transparent"
                  }}
                >
                  {i === todayIdx && (
                    <div style={{ width: "4px", height: "4px", borderRadius: "50%", background: "var(--aged-brass)", margin: "0 auto 10px" }} />
                  )}
                  <p
                    style={{
                      fontSize: "9px",
                      fontWeight: 500,
                      letterSpacing: "0.2em",
                      textTransform: "uppercase",
                      color: i === todayIdx ? "var(--aged-brass)" : "rgba(255,255,255,0.25)",
                      marginBottom: "12px"
                    }}
                  >
                    {day.short}
                  </p>
                  <p
                    style={{
                      fontSize: "13px",
                      fontWeight: 300,
                      color: day.isClosed ? "rgba(255,255,255,0.2)" : i === todayIdx ? "#FFFFFF" : "rgba(255,255,255,0.65)",
                      fontStyle: day.isClosed ? "italic" : "normal",
                      lineHeight: 1.4
                    }}
                  >
                    {day.isClosed ? "Ruhetag" : day.time}
                  </p>
                </div>
              ))}
            </div>
          </RevealSection>
        </div>
      </section>

      {/* MAPA */}
      <section style={{ display: "grid", gridTemplateColumns: "1fr 1fr", minHeight: "560px" }}>
        {/* Lewa — ciemna */}
        <div
          style={{
            background: "var(--charcoal)",
            padding: "80px",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center"
          }}
        >
          <RevealSection>
            <p className="eyebrow" style={{ color: "var(--stone)", marginBottom: "24px" }}>
              ANFAHRT & ADRESSE
            </p>
            <h3
              style={{
                fontFamily: "var(--font-display)",
                fontSize: "clamp(32px, 4vw, 52px)",
                fontWeight: 300,
                fontStyle: "italic",
                color: "#FFFFFF",
                lineHeight: 1,
                marginBottom: "40px"
              }}
            >
              Nur per
              <br />
              <strong style={{ fontWeight: 600, fontStyle: "normal" }}>Seilbahn.</strong>
            </h3>

            {/* Adres */}
            <div
              style={{
                borderLeft: "1px solid rgba(176,141,87,0.4)",
                paddingLeft: "20px",
                marginBottom: "40px"
              }}
            >
              <p style={{ fontSize: "9px", letterSpacing: "0.2em", color: "rgba(255,255,255,0.25)", marginBottom: "8px" }}>
                ADRESSE
              </p>
              <p
                style={{
                  fontFamily: "var(--font-display)",
                  fontSize: "28px",
                  fontWeight: 400,
                  color: "#FFFFFF",
                  lineHeight: 1.2
                }}
              >
                Zaun 990B
                <br />
                3825 Mürren
              </p>
            </div>

            {/* 3 kroki */}
            {[
              { step: "01", label: "Stechelberg", detail: "Parkplatz & Bushaltestelle" },
              { step: "02", label: "Luftseilbahn", detail: "4 Minuten · ca. CHF 12.–" },
              { step: "03", label: "Mürren Dorf", detail: "5 Minuten zu Fuss" }
            ].map((s, i) => (
              <div
                key={i}
                style={{
                  display: "flex",
                  gap: "20px",
                  padding: "14px 0",
                  borderBottom: "1px solid rgba(255,255,255,0.05)"
                }}
              >
                <span
                  style={{
                    fontFamily: "var(--font-display)",
                    fontSize: "13px",
                    fontWeight: 300,
                    color: "rgba(255,255,255,0.2)",
                    minWidth: "24px"
                  }}
                >
                  {s.step}
                </span>
                <div>
                  <p style={{ fontSize: "12px", fontWeight: 500, letterSpacing: "0.1em", color: "rgba(255,255,255,0.7)" }}>
                    {s.label}
                  </p>
                  <p style={{ fontSize: "12px", fontWeight: 300, color: "rgba(255,255,255,0.3)" }}>{s.detail}</p>
                </div>
              </div>
            ))}

            <a
              href="https://maps.google.com/?q=Murren,Switzerland"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                marginTop: "32px",
                fontFamily: "var(--font-body)",
                fontSize: "11px",
                fontWeight: 500,
                letterSpacing: "0.15em",
                textTransform: "uppercase",
                color: "var(--aged-brass)",
                borderBottom: "1px solid rgba(176,141,87,0.3)",
                paddingBottom: "2px",
                display: "inline-block",
                textDecoration: "none",
                transition: "border-color 0.3s"
              }}
            >
              Auf Google Maps öffnen →
            </a>
          </RevealSection>
        </div>

        {/* Prawa — mapa */}
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d5490!2d7.8922!3d46.5592!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x478fa57ebb54f74b%3A0x7e3a5a0c2c4b7e8a!2sMurren%2C+Switzerland!5e0!3m2!1sde!2sch!4v1709123456789"
          style={{
            width: "100%",
            height: "100%",
            border: "none",
            display: "block",
            filter: "grayscale(100%) contrast(1.05) brightness(0.9)",
            minHeight: "400px"
          }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="Mürren, Switzerland"
        />
      </section>

      <GlobalFooter />
    </>
  );
}
