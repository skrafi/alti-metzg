"use client";

import { useRef, useState, useEffect } from "react";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

export default function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isLoaded, setIsLoaded] = useState(false);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  // Smooth scale on scroll
  const scale = useSpring(useTransform(scrollYProgress, [0, 1], [1.1, 1]), {
    stiffness: 80,
    damping: 25,
  });

  // Fade out on scroll
  const opacity = useTransform(scrollYProgress, [0, 0.4], [1, 0]);
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "20%"]);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  return (
    <section
      ref={containerRef}
      className="relative h-screen min-h-[750px] overflow-hidden"
    >
      {/* ========== BACKGROUND LAYER ========== */}
      <motion.div
        style={{ scale, y }}
        className="absolute inset-0 z-0"
      >
        <Image
          src="/hero-bg.jpg"
          alt="Alpine Mürren Landscape"
          fill
          className="object-cover"
          priority
          sizes="100vw"
          quality={95}
        />
      </motion.div>

      {/* ========== MULTI-LAYER GRADIENT OVERLAY ========== */}
      {/* Top fade for better visibility */}
      <div className="absolute inset-0 z-10 bg-gradient-to-b from-stone-900/40 via-transparent to-transparent" />

      {/* Center dark overlay for text readability */}
      <div className="absolute inset-0 z-10 bg-gradient-radial from-transparent via-slate-900/30 to-slate-900/60" />

      {/* Bottom fade for text visibility */}
      <div className="absolute inset-0 z-10 bg-gradient-to-t from-stone-900/60 via-stone-900/20 to-transparent" />

      {/* ========== DECORATIVE ELEMENTS ========== */}
      {/* Top left decorative line */}
      <div className="absolute top-0 left-0 z-20 w-32 h-px bg-gradient-to-r from-amber-500/60 to-transparent" />
      <div className="absolute top-0 left-0 z-20 w-px h-32 bg-gradient-to-b from-amber-500/60 to-transparent" />

      {/* Bottom right decorative line */}
      <div className="absolute bottom-0 right-0 z-20 w-32 h-px bg-gradient-to-l from-amber-500/60 to-transparent" />
      <div className="absolute bottom-0 right-0 z-20 w-px h-32 bg-gradient-to-t from-amber-500/60 to-transparent" />

      {/* Corner accent dots */}
      <div className="absolute top-8 left-8 z-20 flex flex-col gap-2 opacity-60">
        <div className="w-1 h-1 bg-amber-400 rounded-full" />
        <div className="w-1 h-1 bg-amber-400 rounded-full" />
        <div className="w-1 h-1 bg-amber-400 rounded-full" />
      </div>
      <div className="absolute top-8 right-8 z-20 flex flex-col gap-2 opacity-60">
        <div className="w-1 h-1 bg-amber-400 rounded-full" />
        <div className="w-1 h-1 bg-amber-400 rounded-full" />
        <div className="w-1 h-1 bg-amber-400 rounded-full" />
      </div>

      {/* ========== CONTENT LAYER ========== */}
      <motion.div
        style={{ opacity }}
        className="relative z-30 h-full flex flex-col items-center justify-center text-center px-6"
      >
        {/* Main Title */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isLoaded ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
          className="space-y-6 max-w-5xl"
        >
          {/* Decorative line above title */}
          <motion.div
            initial={{ scaleX: 0 }}
            animate={isLoaded ? { scaleX: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="w-24 h-px mx-auto mb-8"
            style={{
              background: "linear-gradient(90deg, transparent, var(--aged-brass), transparent)"
            }}
          />

          {/* Main Title with shadow */}
          <h1 className="display-hero text-white tracking-tight relative">
            <span className="absolute inset-0 blur-3xl opacity-20 bg-amber-400/30" />
            <span className="relative">
              Alti Metzg
            </span>
          </h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isLoaded ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 1, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="subheading text-white/90 font-normal tracking-wide"
            style={{ textShadow: "0 2px 8px rgba(0,0,0,0.3)" }}
          >
            Dorfladen · Bistro · Carnotzet
          </motion.p>

          {/* Tagline */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isLoaded ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 1, delay: 0.55, ease: [0.16, 1, 0.3, 1] }}
            className="body-md text-amber-300 tracking-wide uppercase letter-spacing-wider"
            style={{
              color: "#D4A857",
              textShadow: "0 2px 12px rgba(212, 168, 87, 0.4)"
            }}
          >
            <span className="inline-block mx-3 text-white/40">|</span>
            Verwurzelt in Mürren
            <span className="inline-block mx-3 text-white/40">|</span>
          </motion.p>
        </motion.div>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isLoaded ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1, delay: 0.7 }}
          className="mt-14 flex flex-col sm:flex-row items-center gap-4"
        >
          {/* Primary Button - Premium Dark */}
          <Link
            href="#about"
            className="group relative px-10 py-4 bg-stone-900/80 text-white text-[11px] font-medium tracking-[0.15em] uppercase overflow-hidden transition-all duration-500 hover:bg-stone-800/90 hover:-translate-y-1 hover:shadow-2xl"
            style={{
              backdropFilter: "blur(8px)",
              boxShadow: "0 4px 20px rgba(0,0,0,0.3), inset 0 1px 0 rgba(255,255,255,0.1)"
            }}
          >
            {/* Button inner glow */}
            <span className="absolute inset-0 bg-gradient-to-r from-transparent via-amber-500/10 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700" />
            <span className="relative flex items-center gap-3">
              Entdecken
              <ArrowRight size={14} />
            </span>
          </Link>

          {/* Secondary Button - Brass Accent */}
          <Link
            href="/bistro"
            className="group relative px-10 py-4 bg-transparent text-white text-[11px] font-medium tracking-[0.15em] uppercase overflow-hidden transition-all duration-500 hover:bg-amber-600/20 hover:-translate-y-1 hover:shadow-2xl border border-white/20 hover:border-amber-400/40"
            style={{ textShadow: "0 1px 4px rgba(0,0,0,0.3)" }}
          >
            <span className="absolute inset-0 bg-gradient-to-r from-transparent via-amber-500/20 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700" />
            <span className="relative">Bistro Menü</span>
          </Link>
        </motion.div>

        {/* Quick Info Bar */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isLoaded ? { opacity: 1 } : {}}
          transition={{ duration: 1, delay: 1 }}
          className="mt-16 flex items-center gap-8 text-white/60 text-[10px] tracking-widest uppercase"
        >
          <div className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 bg-amber-400 rounded-full animate-pulse" />
            <span>1'638 m ü. M.</span>
          </div>
          <span className="text-white/20">•</span>
          <div className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 bg-amber-400 rounded-full animate-pulse" />
            <span>Regional · Saisonal</span>
          </div>
          <span className="text-white/20">•</span>
          <div className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 bg-amber-400 rounded-full animate-pulse" />
            <span>Mürren, Schweiz</span>
          </div>
        </motion.div>
      </motion.div>

      {/* ========== SCROLL INDICATOR ========== */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={isLoaded ? { opacity: 1 } : {}}
        transition={{ delay: 1.2 }}
        className="absolute bottom-16 left-1/2 -translate-x-1/2 z-30"
      >
        <motion.div
          animate={{ y: [0, 24, 0], opacity: [1, 0.2, 1] }}
          transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
          className="flex flex-col items-center gap-3"
        >
          <span className="text-[9px] tracking-[0.2em] uppercase text-white/40">Scroll</span>
          <div className="w-px h-16 bg-gradient-to-b from-amber-400/50 via-amber-400/20 to-transparent" />
        </motion.div>
      </motion.div>

      {/* ========== BOTTOM VIGNETTE ========== */}
      <div className="absolute bottom-0 left-0 right-0 h-32 z-20 bg-gradient-to-t from-stone-900/80 to-transparent" />
    </section>
  );
}

function ArrowRight({ size }: { size: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
      <path d="M5 12h14M12 5l7 7-7 7" />
    </svg>
  );
}
