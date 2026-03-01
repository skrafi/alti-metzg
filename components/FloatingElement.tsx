"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

interface FloatingElementProps {
  children: React.ReactNode;
  className?: string;
  yOffset?: number;
}

export default function FloatingElement({ 
  children, 
  className = "",
  yOffset = 100 
}: FloatingElementProps) {
  const ref = useRef<HTMLDivElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [yOffset, -yOffset]);
  const rotate = useTransform(scrollYProgress, [0, 0.5, 1], [-10, 0, 10]);

  return (
    <motion.div
      ref={ref}
      style={{ y, rotate }}
      className={`fixed z-10 pointer-events-none ${className}`}
    >
      {children}
    </motion.div>
  );
}
