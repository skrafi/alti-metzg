"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";

interface HeroProps {
  title?: string;
  subtitle?: string;
  showScrollIndicator?: boolean;
}

export default function Hero({
  title = "Alti Metzg",
  subtitle = "Dorfladen und Bistro in Mürren",
  showScrollIndicator = true,
}: HeroProps) {
  const containerRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  const backgroundScale = useTransform(scrollYProgress, [0, 1], [1, 1.15]);
  const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "40%"]);
  const textOpacity = useTransform(scrollYProgress, [0, 0.6], [1, 0]);
  const textY = useTransform(scrollYProgress, [0, 0.6], ["0%", "-30%"]);
  const textScale = useTransform(scrollYProgress, [0, 0.6], [1, 0.9]);

  return (
    <section
      ref={containerRef}
      className="relative h-screen min-h-[700px] overflow-hidden"
    >
      {/* Background Image with Parallax */}
      <motion.div
        style={{ scale: backgroundScale, y: backgroundY }}
        className="absolute inset-0 -z-10"
      >
        <Image
          src="/assets/hero.png"
          alt="Alti Metzg - Alte Metzgerei in Mürren"
          fill
          className="object-cover"
          priority
          sizes="100vw"
          onError={(e) => {
            // Fallback to solid color if image not found
            (e.target as HTMLImageElement).style.display = 'none';
            (e.target as HTMLImageElement).parentElement!.style.background = '#2C2825';
          }}
        />
        {/* Premium Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-forest-deep/30 via-forest/50 to-charcoal/90" />

        {/* Subtle vignette */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-transparent" />
      </motion.div>

      {/* Decorative Elements */}
      <div className="absolute top-1/4 left-10 w-px h-32 bg-gradient-to-b from-white/0 via-white/30 to-white/0 hidden lg:block" />
      <div className="absolute top-1/3 right-10 w-px h-48 bg-gradient-to-b from-white/0 via-white/20 to-white/0 hidden lg:block" />

      {/* Content */}
      <motion.div
        style={{ opacity: textOpacity, y: textY, scale: textScale }}
        className="relative h-full flex flex-col items-center justify-center text-center px-6"
      >
        {/* Small Label - Seit 2021 as typography element */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 0.7, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mb-6"
        >
          <span className="text-white/70 text-xs font-semibold tracking-[0.2em] uppercase">
            Seit 2021
          </span>
        </motion.div>

        {/* Main Title */}
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
          className="font-heading text-6xl sm:text-7xl md:text-8xl lg:text-9xl text-white tracking-tight"
        >
          {title}
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
          className="mt-6 text-lg md:text-xl text-white/70 font-light max-w-md tracking-wide"
        >
          {subtitle}
        </motion.p>

        {/* CTA - Simple text link with arrow */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.7 }}
          className="mt-12"
        >
          <a
            href="#entdecken"
            className="inline-flex items-center gap-2 text-white/80 font-semibold hover:text-white hover:gap-3 transition-all duration-300"
          >
            Entdecken
            <span className="text-sm">→</span>
          </a>
        </motion.div>
      </motion.div>

      {/* Animated Scroll Indicator */}
      {showScrollIndicator && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2"
        >
          <div className="relative h-16 w-px">
            {/* Animated growing line */}
            <motion.div
              animate={{ scaleY: [0, 1] }}
              transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
              className="absolute inset-0 bg-gradient-to-b from-white/80 to-transparent origin-top"
              style={{ transformOrigin: "top" }}
            />
          </div>
        </motion.div>
      )}

      {/* Bottom Gradient Fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-snow to-transparent" />
    </section>
  );
}
