"use client";

import { motion, MotionProps } from "framer-motion";
import { ReactNode } from "react";

interface SectionProps extends Omit<MotionProps, 'children'> {
  children: ReactNode;
  className?: string;
  id?: string;
  dark?: boolean;
  fullHeight?: boolean;
}

export default function Section({
  children,
  className = "",
  id,
  dark = false,
  fullHeight = false,
  initial,
  animate,
  ...props
}: SectionProps) {
  return (
    <motion.section
      id={id}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      className={`
        relative
        py-20 md:py-28 lg:py-36
        ${fullHeight ? 'min-h-screen flex items-center' : ''}
        ${dark
          ? 'bg-gradient-radial text-white'
          : 'bg-[var(--snow)] text-[var(--charcoal)]'
        }
        ${className}
      `}
      {...props}
    >
      <div className="max-w-7xl mx-auto px-6 w-full">
        {children}
      </div>
    </motion.section>
  );
}

export function SectionTitle({
  children,
  centered = true,
  light = false,
  className = "",
}: {
  children: ReactNode;
  centered?: boolean;
  light?: boolean;
  className?: string;
}) {
  return (
    <motion.h2
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, delay: 0.1 }}
      className={`
        font-heading
        text-4xl md:text-5xl lg:text-6xl
        tracking-tight
        ${centered ? 'text-center mx-auto' : ''}
        ${light ? 'text-white' : 'text-charcoal'}
        ${className}
      `}
    >
      {children}
    </motion.h2>
  );
}

export function SectionSubtitle({
  children,
  centered = true,
  light = false,
  className = "",
}: {
  children: ReactNode;
  centered?: boolean;
  light?: boolean;
  className?: string;
}) {
  return (
    <motion.p
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, delay: 0.2 }}
      className={`
        text-lg md:text-xl
        leading-relaxed
        max-w-2xl
        ${centered ? 'text-center mx-auto' : ''}
        ${light ? 'text-white/80' : 'text-charcoal/60'}
        ${className}
      `}
    >
      {children}
    </motion.p>
  );
}

export function SectionLabel({
  children,
  centered = true,
  light = false,
}: {
  children: ReactNode;
  centered?: boolean;
  light?: boolean;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className={`
        flex items-center gap-4 mb-6
        ${centered ? 'justify-center' : ''}
      `}
    >
      {!centered && <span className="decoration-line" />}
      <span className={`
        text-sm font-semibold tracking-[0.2em] uppercase
        ${light ? 'text-white/70' : 'text-forest'}
      `}>
        {children}
      </span>
      {centered && <span className="decoration-line" />}
    </motion.div>
  );
}
