"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";

interface ConceptCardProps {
  title: string;
  description: string;
  imageSrc: string;
  imageAlt: string;
  href: string;
  index?: number;
}

export default function ConceptCard({
  title,
  description,
  imageSrc,
  imageAlt,
  href,
  index = 0,
}: ConceptCardProps) {
  // Middle card (index 1) is taller
  const heightClass = index === 1 ? "h-[520px]" : "h-[420px]";

  return (
    <motion.article
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{
        duration: 0.8,
        delay: index * 0.15,
        ease: [0.16, 1, 0.3, 1]
      }}
      className="group relative overflow-hidden"
    >
      <Link href={href} className={`block ${heightClass}`}>
        {/* Image */}
        <div className="relative h-full">
          <Image
            src={imageSrc}
            alt={imageAlt}
            fill
            className="object-cover transition-transform duration-700 group-hover:scale-105"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />

          {/* Dark Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-charcoal/80 via-charcoal/30 to-charcoal/20" />

          {/* Hover Overlay with title and arrow */}
          <motion.div
            className="absolute inset-0 bg-charcoal/90 flex items-center justify-center"
            initial={{ opacity: 0 }}
            whileHover={{ opacity: 1 }}
            transition={{ duration: 0.3 }}
          >
            <div className="text-center">
              <h3 className="font-heading text-3xl text-white mb-2">{title}</h3>
              <span className="inline-flex items-center gap-2 text-white font-medium">
                <span>→</span>
              </span>
            </div>
          </motion.div>

          {/* Always-visible title at bottom */}
          <div className="absolute bottom-0 left-0 right-0 p-6">
            <h3 className="font-heading text-2xl text-white">{title}</h3>
          </div>
        </div>
      </Link>
    </motion.article>
  );
}
