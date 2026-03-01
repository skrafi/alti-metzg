"use client";

import { useState, useEffect } from "react";

export default function Hero4Demo() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    // Opóźnienie żeby animacja była widoczna
    const t = setTimeout(() => setOpen(true), 400);
    return () => clearTimeout(t);
  }, []);

  return (
    <main
      style={{
        height: "100vh",
        position: "relative",
        overflow: "hidden",
        background: "var(--charcoal)"
      }}
    >
      {/* TŁÓ — zdjęcie pełne */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          backgroundImage: "url('/images/hero.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundColor: "#1A1816"
        }}
      />

      {/* Gradient overlay na zdjęciu */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          background: "linear-gradient(to top, rgba(30,30,28,0.75) 0%, rgba(30,30,28,0.2) 60%, transparent 100%)"
        }}
      />

      {/* KURTYNA LEWA */}
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          bottom: 0,
          width: "50%",
          background: "var(--charcoal)",
          transform: open ? "translateX(-100%)" : "translateX(0)",
          transition: "transform 1.4s cubic-bezier(0.76, 0, 0.24, 1)",
          zIndex: 10,
          borderRight: "1px solid rgba(255,255,255,0.05)",
          display: "flex",
          alignItems: "center",
          justifyContent: "flex-end",
          paddingRight: "48px"
        }}
      >
        {/* Tekst na kurtynie który znika przy otwieraniu */}
        <div
          style={{
            opacity: open ? 0 : 1,
            transition: "opacity 0.3s ease",
            textAlign: "right"
          }}
        >
          <p
            style={{
              fontFamily: "var(--font-display)",
              fontSize: "13px",
              fontStyle: "italic",
              color: "rgba(255,255,255,0.2)",
              letterSpacing: "0.05em"
            }}
          >
            Alti
          </p>
        </div>
      </div>

      {/* KURTYNA PRAWA */}
      <div
        style={{
          position: "absolute",
          top: 0,
          right: 0,
          bottom: 0,
          width: "50%",
          background: "var(--charcoal)",
          transform: open ? "translateX(100%)" : "translateX(0)",
          transition: "transform 1.4s cubic-bezier(0.76, 0, 0.24, 1)",
          zIndex: 10,
          borderLeft: "1px solid rgba(255,255,255,0.05)",
          display: "flex",
          alignItems: "center",
          paddingLeft: "48px"
        }}
      >
        <div
          style={{
            opacity: open ? 0 : 1,
            transition: "opacity 0.3s ease"
          }}
        >
          <p
            style={{
              fontFamily: "var(--font-display)",
              fontSize: "13px",
              fontStyle: "italic",
              color: "rgba(255,255,255,0.2)",
              letterSpacing: "0.05em"
            }}
          >
            Metzg.
          </p>
        </div>
      </div>

      {/* ŚRODKOWA SZPARA — linia między kurtynami (na początku) */}
      <div
        style={{
          position: "absolute",
          top: 0,
          bottom: 0,
          left: "50%",
          width: "1px",
          background: "rgba(176,141,87,0.6)",
          transform: "translateX(-50%)",
          zIndex: 11,
          opacity: open ? 0 : 1,
          transition: "opacity 0.4s ease 0.3s"
        }}
      />

      {/* CONTENT — pojawia się po otwarciu kurtyn */}
      <div
        style={{
          position: "absolute",
          bottom: "72px",
          left: "80px",
          right: "80px",
          zIndex: 5,
          opacity: open ? 1 : 0,
          transform: open ? "translateY(0)" : "translateY(20px)",
          transition: "opacity 0.8s ease 1s, transform 0.8s ease 1s",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "flex-end"
        }}
      >
        {/* Lewa — tytuł */}
        <div>
          <p
            style={{
              fontFamily: "var(--font-body)",
              fontSize: "10px",
              letterSpacing: "0.3em",
              textTransform: "uppercase",
              color: "var(--aged-brass)",
              marginBottom: "16px"
            }}
          >
            MÜRREN · BERNER OBERLAND · SEIT 2021
          </p>
          <h1
            style={{
              fontFamily: "var(--font-display)",
              fontSize: "clamp(56px, 7vw, 96px)",
              fontWeight: 300,
              fontStyle: "italic",
              lineHeight: 0.88,
              letterSpacing: "-0.02em",
              color: "#FFFFFF",
              marginBottom: "4px"
            }}
          >
            Alti
          </h1>
          <h1
            style={{
              fontFamily: "var(--font-display)",
              fontSize: "clamp(56px, 7vw, 96px)",
              fontWeight: 600,
              fontStyle: "normal",
              lineHeight: 0.88,
              letterSpacing: "-0.02em",
              color: "#FFFFFF"
            }}
          >
            Metzg.
          </h1>
        </div>

        {/* Prawa — opis + CTA */}
        <div style={{ maxWidth: "360px", textAlign: "right" }}>
          <p
            style={{
              fontFamily: "var(--font-body)",
              fontSize: "15px",
              fontWeight: 300,
              color: "rgba(255,255,255,0.5)",
              lineHeight: 1.75,
              marginBottom: "32px"
            }}
          >
            Dorfladen, Bistro und Carnotzet —
            drei Welten in der alten Metzgerei
            von Mürren.
          </p>
          <div style={{ display: "flex", gap: "16px", justifyContent: "flex-end" }}>
            <a href="/dorfladen" className="btn btn-brass">
              Entdecken
            </a>
            <a href="/kontakt" className="btn btn-ghost">
              Reservieren
            </a>
          </div>
        </div>
      </div>

      {/* ROK — bottom center, pojawia się po otwarciu */}
      <div
        style={{
          position: "absolute",
          bottom: "32px",
          left: "50%",
          transform: "translateX(-50%)",
          zIndex: 5,
          opacity: open ? 1 : 0,
          transition: "opacity 0.6s ease 1.3s"
        }}
      >
        <p
          style={{
            fontFamily: "var(--font-body)",
            fontSize: "9px",
            letterSpacing: "0.3em",
            color: "rgba(255,255,255,0.2)",
            textTransform: "uppercase"
          }}
        >
          SCROLL
        </p>
      </div>
    </main>
  );
}
