"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

const timeline = [
  {
    label: "Früher",
    year: "",
    title: "Alte Metzgerei",
    desc: "Ein traditioneller Ort im Herzen von Mürren. Fleisch und Wurstwaren nach alter Tradition.",
    image: "/images/old-butcher.jpg",
  },
  {
    label: "Die Idee",
    year: "2021",
    title: "Neubeginn",
    desc: "Die Vision eines Dorfladens mit Bistro – ein Ort für Einheimische und Gäste.",
    image: "/images/renovation.jpg",
  },
  {
    label: "Heute",
    year: "",
    title: "Drei Welten",
    desc: "Dorfladen, Bistro und Carnotzet unter einem Dach. Verwurzelt in Mürren.",
    image: "/images/team-photo.jpg",
  },
];

const team = [
  { name: "Name Nachname", role: "Geschäftsführung" },
  { name: "Name Nachname", role: "Küche" },
  { name: "Name Nachname", role: "Laden" },
];

const revealVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 },
};

export default function UeberUnsPage() {
  return (
    <>
      {/* Header - Light */}
      <section className="section-warm-white section-padding-md">
        <div className="container-narrow container-padding text-center">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="eyebrow-brass mb-6"
          >
            Über uns
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="display-hero mb-8"
            style={{ color: "var(--charcoal)" }}
          >
            Wir sind
          </motion.h1>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="display-hero"
            style={{ color: "var(--aged-brass)", fontWeight: 500 }}
          >
            Alti Metzg.
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="body-lg mt-8"
            style={{ color: "var(--charcoal)", opacity: 0.85 }}
          >
            Wo einst eine alte Metzgerei war, erwartet Dich heute ein Dorfladen,
            Bistro und Carnotzet in Mürren.
          </motion.p>
        </div>
      </section>

      {/* GESCHICHTE - Timeline with images */}
      <section className="section-warm-white">
        {timeline.map((item, index) => (
          <div
            key={item.label}
            className={`py-16 lg:py-24 ${index > 0 ? "border-t border-charcoal/10" : ""}`}
            style={{
              borderColor: index > 0 ? "rgba(30,30,28,0.1)" : undefined,
              backgroundColor: index % 2 === 1 ? "rgba(206,200,190,0.15)" : undefined
            }}
          >
            <div className="container-max container-padding">
              <div className={`grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center ${
                index % 2 === 1 ? "lg:grid-flow-col-dense" : ""
              }`}>
                {/* Image */}
                <motion.div
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8 }}
                  className={`relative aspect-[4/3] overflow-hidden ${index % 2 === 1 ? "lg:col-start-2" : ""}`}
                >
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className="object-cover"
                    sizes="(max-width: 1024px) 100vw, 50vw"
                  />
                </motion.div>

                {/* Text */}
                <motion.div
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  variants={revealVariants}
                  className={index % 2 === 1 ? "lg:col-start-1" : ""}
                >
                  <p className="eyebrow-brass mb-4">
                    {item.label}
                    {item.year && <span className="ml-2">· {item.year}</span>}
                  </p>
                  <h3 className="section-title mb-6" style={{ color: "var(--charcoal)" }}>
                    {item.title}
                  </h3>
                  <p className="body-lg" style={{ color: "var(--charcoal)", opacity: 0.85 }}>
                    {item.desc}
                  </p>
                </motion.div>
              </div>
            </div>
          </div>
        ))}
      </section>

      {/* TEAM - Editorial */}
      <section className="section-warm-white section-padding-lg">
        <div className="container-max container-padding">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={revealVariants}
            className="text-center mb-16"
          >
            <p className="eyebrow-brass mb-4">
              Das Team
            </p>
            <h2 className="section-title" style={{ color: "var(--charcoal)" }}>
              Hinter Alti Metzg
            </h2>
          </motion.div>

          {/* Team Photo */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative aspect-[3/2] overflow-hidden mb-12"
          >
            <Image
              src="/images/team-photo.jpg"
              alt="Das Team"
              fill
              className="object-cover"
              sizes="100vw"
            />
          </motion.div>

          {/* Team Names */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={revealVariants}
            className="border-t border-charcoal/10 pt-8"
            style={{ borderColor: "rgba(30,30,28,0.1)" }}
          >
            <div className="flex flex-col md:flex-row justify-center gap-8 md:gap-16 text-center">
              {team.map((member, index) => (
                <div key={member.name}>
                  <p className="section-title mb-2" style={{ color: "var(--charcoal)" }}>{member.name}</p>
                  <p className="body-sm" style={{ color: "var(--aged-brass)" }}>{member.role}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* WERTE - Dark */}
      <section className="section-charcoal section-padding-lg">
        <div className="container-narrow container-padding text-center">
          <motion.blockquote
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={revealVariants}
            className="display-lg italic mb-8"
          >
            Regional.
          </motion.blockquote>
          <div className="w-16 h-px mx-auto mb-8" style={{ backgroundColor: "var(--aged-brass)" }} />
          <motion.blockquote
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={revealVariants}
            transition={{ delay: 0.1 }}
            className="display-lg italic mb-8"
          >
            Saisonal.
          </motion.blockquote>
          <div className="w-16 h-px mx-auto mb-8" style={{ backgroundColor: "var(--aged-brass)" }} />
          <motion.blockquote
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={revealVariants}
            transition={{ delay: 0.2 }}
            className="display-lg italic"
          >
            Ehrlich.
          </motion.blockquote>
        </div>
      </section>

      {/* CTA */}
      <section className="section-warm-white section-padding-md">
        <div className="container-max container-padding text-center">
          <h2 className="section-title mb-6" style={{ color: "var(--charcoal)" }}>
            Besuche uns
          </h2>
          <p className="body-lg mb-10 max-w-lg mx-auto" style={{ color: "var(--charcoal)", opacity: 0.85 }}>
            Wir freuen uns auf Deinen Besuch. Schau im Dorfladen vorbei,
            probier unser Bistro oder reserviere das Carnotzet.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/kontakt" className="btn btn-primary">
              Kontakt
              <ArrowRight size={14} />
            </Link>
            <Link href="/carnotzet" className="btn btn-ghost-dark">
              Carnotzet
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
