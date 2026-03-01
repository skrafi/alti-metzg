"use client";

import { motion, MotionProps } from "framer-motion";
import { ReactNode } from "react";

interface SectionProps extends Omit<MotionProps, 'children'> {
  children: ReactNode;
  className?: string;
  id?: string;
  dark?: boolean;
  stone?: boolean;
  fullHeight?: boolean;
}

export default function Section({
  children,
  className = "",
  id,
  dark = false,
  stone = false,
  fullHeight = false,
  ...props
}: SectionProps) {
  return (
    <motion.section
      id={id}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
      className={`
        relative
        py-20 md:py-28 lg:py-32
        ${fullHeight ? 'min-h-screen flex items-center' : ''}
        ${dark ? 'section-charcoal' : stone ? 'section-stone' : 'section-warm-white'}
        ${className}
      `}
      {...props}
    >
      <div className="container-max container-padding w-full">
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
      transition={{ duration: 0.7, delay: 0.1 }}
      className={`
        section-title
        ${centered ? 'text-center mx-auto' : ''}
        ${light ? 'text-warm-white' : 'text-charcoal'}
        ${className}
      `}
      style={{
        color: light ? "var(--warm-white)" : "var(--charcoal)"
      }}
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
      transition={{ duration: 0.7, delay: 0.2 }}
      className={`
        body-lg
        max-w-2xl
        ${centered ? 'text-center mx-auto' : ''}
        ${className}
      `}
      style={{
        color: light ? "rgba(246,244,241,0.8)" : "rgba(30,30,28,0.85)"
      }}
    >
      {children}
    </motion.p>
  );
}
