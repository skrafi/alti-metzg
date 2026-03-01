"use client";

import Image from "next/image";

interface PageHeroProps {
  title: string;
  imageSrc?: string;
  imageAlt?: string;
  dark?: boolean;
}

export default function PageHero({
  title,
  imageSrc = "/images/placeholder.jpg",
  imageAlt,
  dark = false,
}: PageHeroProps) {
  return (
    <section className="relative h-[50vh] min-h-[400px] overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 -z-10">
        <Image
          src={imageSrc}
          alt={imageAlt || title}
          fill
          className="object-cover"
          priority
          sizes="100vw"
        />
        {/* Gradient Overlay */}
        <div
          className={`absolute inset-0 ${
            dark
              ? "bg-gradient-to-t from-charcoal/80 via-charcoal/40 to-charcoal/20"
              : "bg-gradient-to-t from-charcoal/60 via-charcoal/30 to-transparent"
          }`}
        />
      </div>

      {/* Content */}
      <div className="relative h-full flex flex-col items-center justify-center text-center px-6">
        <h1 className="font-heading text-4xl md:text-6xl lg:text-7xl text-white tracking-tight">
          {title}
        </h1>
      </div>
    </section>
  );
}
