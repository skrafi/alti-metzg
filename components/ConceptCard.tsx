"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

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
  return (
    <motion.article
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className="group"
    >
      <Link href={href} className="block">
        {/* Image */}
        <div className="relative aspect-[3/4] overflow-hidden rounded-sm mb-6">
          <Image
            src={imageSrc}
            alt={imageAlt}
            fill
            className="object-cover transition-transform duration-700 group-hover:scale-105"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
        </div>

        {/* Content */}
        <h3 className="font-heading text-2xl text-contrast mb-3">{title}</h3>
        <p className="text-contrast/70 text-sm leading-relaxed mb-4">
          {description}
        </p>

        {/* CTA */}
        <span className="inline-flex items-center gap-2 text-accent text-sm font-medium group-hover:gap-3 transition-all">
          Mehr erfahren
          <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
        </span>
      </Link>
    </motion.article>
  );
}
