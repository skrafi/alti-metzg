"use client";

import { useState, useEffect, useRef } from "react";

export default function Hero5Demo() {
  const [mouse, setMouse] = useState({ x: 0, y: 0 });
  const [mounted, setMounted] = useState(false);
  const heroRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setMounted(true);
    const handleMouse = (e: MouseEvent) => {
      if (!heroRef.current) return;
      const rect = heroRef.current.getBoundingClientRect();
      // Normalizuj do -1 / +1
      const x = ((e.clientX - rect.left) / rect.width - 0.5) * 2;
      const y = ((e.clientY - rect.top) / rect.height - 0.5) * 2;
      setMouse({ x, y });
    };
    window.addEventListener("mousemove", handleMouse);
    return () => window.removeEventListener("mousemove", handleMouse);
  }, []);

  // Funkcja przeliczająca przesunięcie warstw
  const layer = (depth: number) => ({
    transform: `translate(${mouse.x * depth * -1}px, ${mouse.y * depth * -1}px)`,
    transition: "transform 0.6s cubic-bezier(0.25, 0.46, 0.45, 0.94)"
  });

  return (
    <main
      ref={heroRef}
      style={{
        height: "100vh",
        position: "relative",
        overflow: "hidden",
        background: "#0F0D0B", // jeszcze ciemniejszy niż charcoal
        cursor: "none" // ukryj systemowy kursor
      }}
    >
      {/* WARSTWA 1 — zdjęcie (porusza się najwolniej, depth: 18) */}
      <div
        style={{
          position: "absolute",
          inset: "-5%", // większe niż viewport żeby był margines na ruch
          ...layer(18)
        }}
      >
        <div
          style={{
            width: "100%",
            height: "100%",
            backgroundImage: "url('/images/hero.jpg')",
            backgroundSize: "cover",
            backgroundPosition: "center 30%",
            backgroundColor: "#1A1816",
            filter: "brightness(0.55)"
          }}
        />
      </div>

      {/* WARSTWA 2 — gradient vignette (nieruchome) */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          background: "radial-gradient(ellipse at center, transparent 30%, rgba(10,9,8,0.7) 100%)",
          pointerEvents: "none"
        }}
      />

      {/* WARSTWA 3 — ghost duże litery AM (depth: 30 — szybcze niż bg) */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          pointerEvents: "none",
          ...layer(30)
        }}
      >
        <p
          style={{
            fontFamily: "var(--font-display)",
            fontSize: "clamp(200px, 30vw, 400px)",
            fontWeight: 600,
            color: "rgba(255,255,255,0.025)",
            letterSpacing: "-0.05em",
            lineHeight: 1,
            userSelect: "none"
          }}
        >
          AM
        </p>
      </div>

      {/* WARSTWA 4 — główny tekst (depth: 12 — pośrodku) */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          display: "flex",
          flexDirection: "column",
          justifyContent: "flex-end",
          padding: "80px",
          ...layer(12)
        }}
      >
        <div
          style={{
            opacity: mounted ? 1 : 0,
            transition: "opacity 1s ease 0.3s"
          }}
        >
          <p
            style={{
              fontFamily: "var(--font-body)",
              fontSize: "10px",
              letterSpacing: "0.32em",
              textTransform: "uppercase",
              color: "var(--aged-brass)",
              marginBottom: "24px"
            }}
          >
            DORFLADEN · BISTRO · CARNOTZET
          </p>
          <h1
            style={{
              fontFamily: "var(--font-display)",
              fontSize: "clamp(72px, 10vw, 140px)",
              fontWeight: 300,
              fontStyle: "italic",
              lineHeight: 0.86,
              letterSpacing: "-0.025em",
              color: "#FFFFFF",
              marginBottom: "0"
            }}
          >
            Alti
          </h1>
          <h1
            style={{
              fontFamily: "var(--font-display)",
              fontSize: "clamp(72px, 10vw, 140px)",
              fontWeight: 600,
              fontStyle: "normal",
              lineHeight: 0.86,
              letterSpacing: "-0.025em",
              color: "#FFFFFF",
              marginBottom: "40px"
            }}
          >
            Metzg.
          </h1>
          <p
            style={{
              fontFamily: "var(--font-body)",
              fontSize: "15px",
              fontWeight: 300,
              color: "rgba(255,255,255,0.4)",
              lineHeight: 1.75,
              maxWidth: "400px"
            }}
          >
            Drei Welten in der alten Metzgerei von Mürren.
            1638 Meter über Meer. Autofrei.
          </p>
          <a href="/dorfladen" className="btn btn-brass">
            Entdecken →
          </a>
        </div>
      </div>

      {/* WARSTWA 5 — custom kursor (depth: 0 — zawsze na wierzchu) */}
      <div
        style={{
          position: "fixed",
          left: `calc(50% + ${mouse.x * 50}vw * 0.5)`,
          top: `calc(50% + ${mouse.y * 50}vh * 0.5)`,
          // Lepszy sposób — tracking przez osobny state
          pointerEvents: "none",
          zIndex: 100,
          transform: "translate(-50%, -50%)",
          transition: "left 0.08s linear, top 0.08s linear"
        }}
      >
        {/* Custom kursor — kółko z krzyżykiem */}
        <svg width="40" height="40" viewBox="0 0 40 40">
          <circle cx="20" cy="20" r="18" fill="none" stroke="rgba(176,141,87,0.5)" strokeWidth="1" />
          <line x1="20" y1="14" x2="20" y2="26" stroke="rgba(176,141,87,0.5)" strokeWidth="1" />
          <line x1="14" y1="20" x2="26" y2="20" stroke="rgba(176,141,87,0.5)" strokeWidth="1" />
        </svg>
      </div>

      {/* Prawy górny róg — współrzędne które się dynamicznie zmieniają */}
      <div
        style={{
          position: "absolute",
          top: "40px",
          right: "40px",
          zIndex: 5,
          opacity: mounted ? 1 : 0,
          transition: "opacity 0.8s ease 0.5s"
        }}
      >
        <p
          style={{
            fontFamily: "var(--font-body)",
            fontSize: "9px",
            letterSpacing: "0.2em",
            color: "rgba(255,255,255,0.2)",
            textAlign: "right",
            lineHeight: 1.8
          }}
        >
          46°33'N<br />7°53'E<br />1638 M
        </p>
      </div>
    </main>
  );
}
