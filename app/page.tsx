"use client";

import { motion } from "framer-motion";
import { useEffect } from "react";
import Hero from "@/components/Hero";
import GlobalFooter from "@/components/GlobalFooter";

const panels = [
  {
    href: "/dorfladen",
    number: "01",
    eyebrow: "LOKALE PRODUKTE",
    title: "Der\nDorfladen.",
    body: "Frisches Brot, regionaler Käse, saisonales Gemüse — direkt vom Produzenten.",
    cta: "Sortiment entdecken"
  },
  {
    href: "/bistro",
    number: "02",
    eyebrow: "SAISONALE KÜCHE",
    title: "Das\nBistro.",
    body: "Saisonal, ehrlich, mit Blick auf die Alpen. Mittag und Abend.",
    cta: "Speisekarte ansehen"
  },
  {
    href: "/carnotzet",
    number: "03",
    eyebrow: "DER KELLER",
    title: "Das\nCarnotzet.",
    body: "Regionale Weine, Naturstein, gute Gesellschaft. Der schönste Keller in Mürren.",
    cta: "Tisch reservieren"
  }
];

export default function Home() {
  // Entry animation for panels
  useEffect(() => {
    const panelElements = document.querySelectorAll(".drei-panel");
    panelElements.forEach((panel, i) => {
      const element = panel as HTMLElement;
      setTimeout(() => {
        element.style.opacity = "1";
        element.style.transform = "translateY(0)";
      }, 200 + i * 120);
    });
  }, []);

  return (
    <>
      <Hero />

      {/* DREI WELTEN — three fullscreen panels */}
      <section
        className="drei-welten-grid"
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr 1fr",
          height: "88vh",
          minHeight: "600px"
        }}
      >
        {panels.map((panel, i) => (
          <a
            key={i}
            href={panel.href}
            className="drei-panel"
            style={{
              position: "relative",
              overflow: "hidden",
              display: "block",
              textDecoration: "none",
              cursor: "pointer",
              borderRight: i < 2 ? "1px solid rgba(255,255,255,0.1)" : "none",
              opacity: 0,
              transform: "translateY(20px)",
              transition: "opacity 0.7s ease, transform 0.7s ease"
            }}
            onMouseEnter={(e) => {
              const img = e.currentTarget.querySelector(".panel-img") as HTMLElement;
              const overlay = e.currentTarget.querySelector(".panel-overlay") as HTMLElement;
              const arrow = e.currentTarget.querySelector(".panel-arrow") as HTMLElement;
              if (img) img.style.transform = "scale(1.06)";
              if (overlay)
                overlay.style.background =
                  "linear-gradient(to top, rgba(30,30,28,0.92) 0%, rgba(30,30,28,0.4) 60%, rgba(30,30,28,0.25) 100%)";
              if (arrow) arrow.style.transform = "translateX(6px)";
            }}
            onMouseLeave={(e) => {
              const img = e.currentTarget.querySelector(".panel-img") as HTMLElement;
              const overlay = e.currentTarget.querySelector(".panel-overlay") as HTMLElement;
              const arrow = e.currentTarget.querySelector(".panel-arrow") as HTMLElement;
              if (img) img.style.transform = "scale(1)";
              if (overlay)
                overlay.style.background =
                  "linear-gradient(to top, rgba(30,30,28,0.85) 0%, rgba(30,30,28,0.3) 55%, rgba(30,30,28,0.15) 100%)";
              if (arrow) arrow.style.transform = "translateX(0)";
            }}
          >
            {/* Zdjęcie — fullscreen w panelu */}
            <div
              className="panel-img"
              style={{
                position: "absolute",
                inset: 0,
                backgroundImage: `url('/images/${i === 0 ? "dorfladen-hero.jpg" : i === 1 ? "bistro-hero.jpg" : "carnotzet-hero.jpg"}')`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundColor: i === 0 ? "#2A2520" : i === 1 ? "#1E1E1C" : "#1A2018",
                transition: "transform 0.7s cubic-bezier(0.25, 0.46, 0.45, 0.94)"
              }}
            />

            {/* Gradient overlay */}
            <div
              className="panel-overlay"
              style={{
                position: "absolute",
                inset: 0,
                background:
                  "linear-gradient(to top, rgba(30,30,28,0.85) 0%, rgba(30,30,28,0.3) 55%, rgba(30,30,28,0.15) 100%)",
                transition: "background 0.5s ease"
              }}
            />

            {/* Numer — górny lewy róg */}
            <div
              style={{
                position: "absolute",
                top: "32px",
                left: "32px",
                fontFamily: "var(--font-display)",
                fontSize: "64px",
                fontWeight: 300,
                color: "rgba(255,255,255,0.07)",
                lineHeight: 1,
                userSelect: "none"
              }}
            >
              {panel.number}
            </div>

            {/* Content — bottom */}
            <div
              style={{
                position: "absolute",
                bottom: "52px",
                left: "40px",
                right: "40px",
                zIndex: 2,
                paddingBottom: "0"
              }}
            >
              {/* Eyebrow */}
              <p
                style={{
                  fontFamily: "var(--font-body)",
                  fontSize: "9px",
                  fontWeight: 400,
                  letterSpacing: "0.28em",
                  textTransform: "uppercase",
                  color: "var(--aged-brass)",
                  marginBottom: "16px"
                }}
              >
                {panel.eyebrow}
              </p>

              {/* Tytuł */}
              <h2
                style={{
                  fontFamily: "var(--font-display)",
                  fontSize: "clamp(36px, 3vw, 52px)",
                  fontWeight: 300,
                  fontStyle: "italic",
                  lineHeight: 0.92,
                  letterSpacing: "-0.02em",
                  color: "#FFFFFF",
                  whiteSpace: "pre-line",
                  marginBottom: "20px"
                }}
              >
                {panel.title}
              </h2>

              {/* Body */}
              <p
                style={{
                  fontFamily: "var(--font-body)",
                  fontSize: "13px",
                  fontWeight: 300,
                  color: "rgba(255,255,255,0.6)",
                  lineHeight: 1.7,
                  marginBottom: "28px",
                  maxWidth: "280px"
                }}
              >
                {panel.body}
              </p>

              {/* CTA */}
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "8px"
                }}
              >
                <span
                  style={{
                    fontFamily: "var(--font-body)",
                    fontSize: "10px",
                    fontWeight: 500,
                    letterSpacing: "0.15em",
                    textTransform: "uppercase",
                    color: "#FFFFFF",
                    borderBottom: "1px solid rgba(255,255,255,0.35)",
                    paddingBottom: "2px"
                  }}
                >
                  {panel.cta}
                </span>
                <span
                  className="panel-arrow"
                  style={{
                    color: "#FFFFFF",
                    fontSize: "14px",
                    transition: "transform 0.3s ease"
                  }}
                >
                  →
                </span>
              </div>
            </div>
          </a>
        ))}
      </section>

      {/* Mobile styles */}
      <style>{`
        @media (max-width: 768px) {
          .drei-welten-grid {
            grid-template-columns: 1fr !important;
            height: auto !important;
          }
          .drei-welten-grid > a {
            height: 70vh;
            border-right: none !important;
            border-bottom: 1px solid rgba(255,255,255,0.1);
          }
        }
      `}</style>

      <GlobalFooter />
    </>
  );
}
