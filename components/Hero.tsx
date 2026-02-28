"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { ChevronDown } from "lucide-react";
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

  const backgroundScale = useTransform(scrollYProgress, [0, 1], [1, 1.1]);
  const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const textOpacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const textY = useTransform(scrollYProgress, [0, 0.5], ["0%", "-50%"]);

  return (
    <section
      ref={containerRef}
      className="relative h-screen min-h-[600px] overflow-hidden"
    >
      {/* Background Image with Parallax */}
      <motion.div
        style={{ scale: backgroundScale, y: backgroundY }}
        className="absolute inset-0 -z-10"
      >
        <Image
          src="/hero.svg"
          alt="Alti Metzg - Alte Metzgerei in Mürren"
          fill
          className="object-cover"
          priority
          sizes="100vw"
        />
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-contrast/60 via-contrast/20 to-transparent" />
      </motion.div>

      {/* Content */}
      <motion.div
        style={{ opacity: textOpacity, y: textY }}
        className="relative h-full flex flex-col items-center justify-center text-center px-6"
      >
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="font-heading text-5xl md:text-7xl lg:text-8xl text-secondary tracking-tight"
        >
          {title}
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-4 text-lg md:text-xl text-secondary/80 font-light max-w-md"
        >
          {subtitle}
        </motion.p>
      </motion.div>

      {/* Scroll Indicator */}
      {showScrollIndicator && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            className="text-secondary/60"
          >
            <ChevronDown size={32} />
          </motion.div>
        </motion.div>
      )}
    </section>
  );
}
