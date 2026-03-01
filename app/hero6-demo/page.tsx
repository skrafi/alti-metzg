"use client";

import { useEffect, useState } from "react";

export default function Hero6Demo() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setTimeout(() => setMounted(true), 150);
  }, []);

  return (
    <main
      style={{
        height: "100vh",
        display: "grid",
        // Kluczowa: nieregularna siatka
        gridTemplateColumns: "1fr 2px 52% 2px 1fr",
        gridTemplateRows: "2px 42% 2px 1fr 2px",
        background: "var(--warm-white)"
      }}
    >
      {/* LINIE SIATKI — poziome i pionowe */}
      {/* Kolumna 2 i 4 to linie 2px */}
      <div style={{ gridColumn: "2", gridRow: "1 / -1", background: "rgba(0,0,0,0.06)" }} />
      <div style={{ gridColumn: "4", gridRow: "1 / -1", background: "rgba(0,0,0,0.06)" }} />
      {/* Rząd 1, 3, 5 to linie 2px */}
      <div style={{ gridRow: "1", gridColumn: "1 / -1", background: "rgba(0,0,0,0.06)" }} />
      <div style={{ gridRow: "3", gridColumn: "1 / -1", background: "rgba(0,0,0,0.06)" }} />
      <div style={{ gridRow: "5", gridColumn: "1 / -1", background: "rgba(0,0,0,0.06)" }} />

      {/* BLOK A — górny lewy: miejsce + data */}
      <div
        style={{
          gridColumn: "1",
          gridRow: "2",
          display: "flex",
          flexDirection: "column",
          justifyContent: "flex-end",
          padding: "0 40px",
          opacity: mounted ? 1 : 0,
          transition: "opacity 0.6s ease 0.1s"
        }}
      >
        <p
          style={{
            fontFamily: "var(--font-body)",
            fontSize: "9px",
            letterSpacing: "0.25em",
            textTransform: "uppercase",
            color: "var(--stone)",
            lineHeight: 1.8
          }}
        >
          MÜRREN
          <br />
          SCHWEIZ
          <br />
          EST. 2021
        </p>
        <div
          style={{
            width: "24px",
            height: "1px",
            background: "var(--aged-brass)",
            marginTop: "16px"
          }}
        />
      </div>

      {/* BLOK B — górny środek (52%): GŁÓWNE ZDJĘCIE */}
      <div
        style={{
          gridColumn: "3",
          gridRow: "2",
          position: "relative",
          overflow: "hidden",
          opacity: mounted ? 1 : 0,
          transition: "opacity 0.8s ease 0.2s"
        }}
      >
        <div
          style={{
            position: "absolute",
            inset: 0,
            backgroundImage: "url('/images/hero.jpg')",
            backgroundSize: "cover",
            backgroundPosition: "center 30%",
            backgroundColor: "#2A2520",
            transform: mounted ? "scale(1)" : "scale(1.05)",
            transition: "transform 1.2s cubic-bezier(0.25, 0.46, 0.45, 0.94) 0.2s"
          }}
        />
        {/* Brass badge na zdjęciu */}
        <div
          style={{
            position: "absolute",
            bottom: "24px",
            right: "24px",
            background: "var(--aged-brass)",
            padding: "8px 16px"
          }}
        >
          <p
            style={{
              fontFamily: "var(--font-body)",
              fontSize: "9px",
              fontWeight: 500,
              letterSpacing: "0.2em",
              color: "white"
            }}
          >
            1638 M Ü.M.
          </p>
        </div>
      </div>

      {/* BLOK C — górny prawy: numer wydania / tagline */}
      <div
        style={{
          gridColumn: "5",
          gridRow: "2",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "40px 40px",
          opacity: mounted ? 1 : 0,
          transition: "opacity 0.6s ease 0.15s"
        }}
      >
        {/* Góra */}
        <div>
          <p
            style={{
              fontFamily: "var(--font-display)",
              fontSize: "48px",
              fontWeight: 300,
              color: "rgba(0,0,0,0.06)",
              lineHeight: 1
            }}
          >
            №1
          </p>
        </div>
        {/* Dół */}
        <div>
          <p
            style={{
              fontFamily: "var(--font-display)",
              fontSize: "16px",
              fontStyle: "italic",
              fontWeight: 300,
              color: "rgba(30,30,28,0.4)",
              lineHeight: 1.5
            }}
          >
            "Regional."
            <br />
            "Saisonal."
            <br />
            "Ehrlich."
          </p>
        </div>
      </div>

      {/* BLOK D — dolny lewy: OGROMNY TYTUŁ */}
      <div
        style={{
          gridColumn: "1 / 4", // rozciąga się przez lewą + linię + środek
          gridRow: "4",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "0 40px",
          position: "relative",
          overflow: "hidden",
          opacity: mounted ? 1 : 0,
          transform: mounted ? "translateY(0)" : "translateY(20px)",
          transition: "opacity 0.8s ease 0.4s, transform 0.8s ease 0.4s"
        }}
      >
        {/* Ghost ogromne litery w tle */}
        <div
          style={{
            position: "absolute",
            bottom: "-24px",
            left: "-10px",
            fontFamily: "var(--font-display)",
            fontSize: "200px",
            fontWeight: 600,
            color: "rgba(0,0,0,0.03)",
            lineHeight: 1,
            userSelect: "none",
            letterSpacing: "-0.04em",
            whiteSpace: "nowrap"
          }}
        >
          ALTI METZG
        </div>

        {/* Actual title */}
        <div style={{ position: "relative", zIndex: 1 }}>
          <h1
            style={{
              fontFamily: "var(--font-display)",
              fontSize: "clamp(64px, 8vw, 112px)",
              fontWeight: 300,
              fontStyle: "italic",
              lineHeight: 0.88,
              letterSpacing: "-0.025em",
              color: "var(--charcoal)"
            }}
          >
            Alti
          </h1>
          <h1
            style={{
              fontFamily: "var(--font-display)",
              fontSize: "clamp(64px, 8vw, 112px)",
              fontWeight: 600,
              fontStyle: "normal",
              lineHeight: 0.88,
              letterSpacing: "-0.025em",
              color: "var(--charcoal)"
            }}
          >
            Metzg
            <span style={{ color: "var(--aged-brass)" }}>.</span>
          </h1>
        </div>
      </div>

      {/* BLOK E — dolny prawy: opis + nawigacja */}
      <div
        style={{
          gridColumn: "5",
          gridRow: "4",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "32px 40px",
          borderLeft: "none",
          opacity: mounted ? 1 : 0,
          transition: "opacity 0.7s ease 0.55s"
        }}
      >
        <p
          style={{
            fontFamily: "var(--font-body)",
            fontSize: "14px",
            fontWeight: 300,
            color: "rgba(30,30,28,0.5)",
            lineHeight: 1.8
          }}
        >
          Dorfladen, Bistro
          <br />
          und Carnotzet —
          <br />
          drei eigenständige
          <br />
          Orte. Eine Adresse.
        </p>

        {/* Trzy linki pionowo */}
        <div style={{ display: "flex", flexDirection: "column", gap: "0" }}>
          {[
            { label: "Dorfladen", href: "/dorfladen", num: "01" },
            { label: "Bistro", href: "/bistro", num: "02" },
            { label: "Carnotzet", href: "/carnotzet", num: "03" }
          ].map((item, i) => (
            <a
              key={i}
              href={item.href}
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                padding: "12px 0",
                borderBottom: "1px solid rgba(0,0,0,0.07)",
                textDecoration: "none",
                transition: "padding-left 0.3s ease"
              }}
              onMouseEnter={(e) => (e.currentTarget.style.paddingLeft = "8px")}
              onMouseLeave={(e) => (e.currentTarget.style.paddingLeft = "0")}
            >
              <span
                style={{
                  fontFamily: "var(--font-body)",
                  fontSize: "11px",
                  fontWeight: 500,
                  letterSpacing: "0.1em",
                  textTransform: "uppercase",
                  color: "var(--charcoal)"
                }}
              >
                {item.label}
              </span>
              <span
                style={{
                  fontFamily: "var(--font-display)",
                  fontSize: "12px",
                  color: "var(--stone)"
                }}
              >
                {item.num}
              </span>
            </a>
          ))}
        </div>

        <a
          href="/dorfladen"
          className="btn btn-primary"
          style={{ marginTop: "8px" }}
        >
          Entdecken →
        </a>
      </div>
    </main>
  );
}
