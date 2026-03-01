"use client";

import { motion } from "framer-motion";

interface BackgroundTextProps {
  text: string;
  className?: string;
}

export default function BackgroundText({ text, className = "" }: BackgroundTextProps) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 1 }}
      className={`absolute pointer-events-none select-none overflow-hidden ${className}`}
    >
      <span
        className="font-heading text-[clamp(120px,20vw,300px)] font-bold leading-none tracking-tighter whitespace-nowrap"
        style={{
          color: "transparent",
          WebkitTextStroke: "1px currentColor",
          opacity: 0.04,
        }}
      >
        {text}
      </span>
    </motion.div>
  );
}
