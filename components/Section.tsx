"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

interface SectionProps {
  children: ReactNode;
  className?: string;
  id?: string;
  dark?: boolean;
}

export default function Section({
  children,
  className = "",
  id,
  dark = false,
}: SectionProps) {
  return (
    <section
      id={id}
      className={`py-16 md:py-24 lg:py-32 ${dark ? "bg-contrast text-secondary" : "bg-secondary text-contrast"} ${className}`}
    >
      <div className="max-w-7xl mx-auto px-6">{children}</div>
    </section>
  );
}

export function SectionTitle({
  children,
  centered = true,
}: {
  children: ReactNode;
  centered?: boolean;
}) {
  return (
    <motion.h2
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className={`font-heading text-3xl md:text-4xl lg:text-5xl mb-6 ${
        centered ? "text-center" : ""
      }`}
    >
      {children}
    </motion.h2>
  );
}

export function SectionText({
  children,
  centered = true,
  className = "",
}: {
  children: ReactNode;
  centered?: boolean;
  className?: string;
}) {
  return (
    <motion.p
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: 0.1 }}
      className={`text-contrast/70 text-lg max-w-2xl ${
        centered ? "text-center mx-auto" : ""
      } ${className}`}
    >
      {children}
    </motion.p>
  );
}
