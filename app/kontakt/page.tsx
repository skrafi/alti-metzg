"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { MapPin, Phone, Mail, Train, CableCar, Footprints, ArrowRight } from "lucide-react";
import ContactForm from "@/components/ContactForm";

const steps = [
  { icon: Train, title: "Stechelberg", desc: "Auto oder Bus bis Stechelberg, Talstation" },
  { icon: CableCar, title: "Luftseilbahn", desc: "4 Minuten nach Mürren hochfahren" },
  { icon: Footprints, title: "Mürren Dorf", desc: "5 Minuten zu Fuss durch das Dorf" },
  { icon: MapPin, title: "Alti Metzg", desc: "Zaun 990B – direkt im Dorfzentrum" },
];

const hours = [
  { day: "Montag", time: "Ruhetag", closed: true },
  { day: "Dienstag", time: "08:00–18:45" },
  { day: "Mittwoch", time: "08:00–18:45" },
  { day: "Donnerstag", time: "08:00–18:45" },
  { day: "Freitag", time: "08:00–19:15" },
  { day: "Samstag", time: "08:00–19:15" },
  { day: "Sonntag", time: "08:00–18:45" },
];

const revealVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 },
};

function OpeningHours() {
  const [currentDayIndex, setCurrentDayIndex] = useState<number | null>(null);

  useEffect(() => {
    const today = new Date().getDay(); // 0 = Sunday, 1 = Monday, etc.
    // Convert to our index: Sunday = 6, Monday = 0, Tuesday = 1, etc.
    const index = today === 0 ? 6 : today - 1;
    setCurrentDayIndex(index);
  }, []);

  return (
    <div className="space-y-3">
      {hours.map((hour, index) => {
        const isToday = index === currentDayIndex;
        return (
          <div
            key={hour.day}
            className={`flex justify-between py-2 ${isToday ? "font-medium" : ""}`}
            style={{
              color: isToday ? "var(--charcoal)" : "rgba(30,30,28,0.7)",
              backgroundColor: isToday ? "rgba(176,141,87,0.1)" : undefined
            }}
          >
            <span className="body-md">{hour.day}</span>
            <span className="body-sm">{hour.time}</span>
          </div>
        );
      })}
    </div>
  );
}

export default function KontaktPage() {
  return (
    <>
      {/* Header - Dark */}
      <section className="section-charcoal section-padding-md">
        <div className="container-narrow container-padding text-center">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="section-title mb-4"
          >
            Komm vorbei.
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="body-lg opacity-70"
          >
            Wir freuen uns auf Dich.
          </motion.p>
        </div>
      </section>

      {/* ANFAHRT - Timeline */}
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
              Anfahrt
            </p>
            <h2 className="section-title" style={{ color: "var(--charcoal)" }}>
              So findest Du uns
            </h2>
          </motion.div>

          {/* Timeline */}
          <div className="max-w-4xl mx-auto">
            <div className="flex justify-between items-start relative">
              {/* Line */}
              <div className="absolute top-6 left-0 right-0 h-px" style={{ backgroundColor: "rgba(176,141,87,0.3)" }} />

              {steps.map((step, i) => (
                <motion.div
                  key={step.title}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  variants={revealVariants}
                  transition={{ delay: i * 0.1 }}
                  className="relative flex-1 text-center px-2"
                >
                  <div className="w-3 h-3 rounded-full mx-auto mb-6 relative z-10" style={{ backgroundColor: "var(--aged-brass)" }} />
                  <step.icon size={24} strokeWidth={1} className="mx-auto mb-3" style={{ color: "var(--charcoal)", opacity: 0.5 }} />
                  <p className="body-md mb-1" style={{ color: "var(--charcoal)" }}>{step.title}</p>
                  <p className="body-sm" style={{ color: "var(--charcoal)", opacity: 0.6 }}>{step.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* KONTAKT + FORM */}
      <section className="section-warm-white section-padding-lg">
        <div className="container-max container-padding">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Left - Contact Info */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={revealVariants}
            >
              <h2 className="section-title mb-10" style={{ color: "var(--charcoal)" }}>
                So erreichst Du uns
              </h2>

              {/* Address */}
              <a
                href="https://www.google.com/maps/search/?api=1&query=Zaun+990B+3825+Mürren+Schweiz"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-start gap-4 mb-8 group"
              >
                <MapPin size={20} className="mt-1 shrink-0" strokeWidth={1} style={{ color: "var(--aged-brass)" }} />
                <div>
                  <p className="body-xs mb-1" style={{ color: "var(--charcoal)", opacity: 0.6 }}>Adresse</p>
                  <p className="section-title mb-1 group-hover:text-aged-brass transition-colors" style={{ color: "var(--charcoal)" }}>
                    Zaun 990B
                  </p>
                  <p className="body-md" style={{ color: "var(--charcoal)", opacity: 0.7 }}>3825 Mürren, Schweiz</p>
                </div>
              </a>

              {/* Phone */}
              <a href="tel:+41335258817" className="flex items-center gap-4 mb-8 group">
                <Phone size={20} className="shrink-0" strokeWidth={1} style={{ color: "var(--aged-brass)" }} />
                <div>
                  <p className="body-xs mb-1" style={{ color: "var(--charcoal)", opacity: 0.6 }}>Telefon</p>
                  <p className="section-title group-hover:text-aged-brass transition-colors" style={{ color: "var(--charcoal)" }}>
                    033 525 88 17
                  </p>
                </div>
              </a>

              {/* Email */}
              <a href="mailto:muh@alti-metzg.ch" className="flex items-center gap-4 mb-12 group">
                <Mail size={20} className="shrink-0" strokeWidth={1} style={{ color: "var(--aged-brass)" }} />
                <div>
                  <p className="body-xs mb-1" style={{ color: "var(--charcoal)", opacity: 0.6 }}>E-Mail</p>
                  <p className="section-title group-hover:text-aged-brass transition-colors" style={{ color: "var(--charcoal)" }}>
                    muh@alti-metzg.ch
                  </p>
                </div>
              </a>

              {/* Opening Hours */}
              <div>
                <p className="eyebrow mb-6">Öffnungszeiten</p>
                <OpeningHours />
              </div>
            </motion.div>

            {/* Right - Form */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={revealVariants}
            >
              <h2 className="section-title mb-10" style={{ color: "var(--charcoal)" }}>
                Nachricht senden
              </h2>
              <ContactForm />
            </motion.div>
          </div>
        </div>
      </section>

      {/* MAP */}
      <section className="section-warm-white section-padding-md">
        <div className="container-max container-padding">
          <a
            href="https://www.google.com/maps/search/?api=1&query=Zaun+990B+3825+Mürren+Schweiz"
            target="_blank"
            rel="noopener noreferrer"
            className="block relative aspect-video overflow-hidden group cursor-pointer border border-charcoal/10"
            style={{ borderColor: "rgba(30,30,28,0.1)" }}
          >
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2723.1474!2d7.9073!3d46.5585!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47859071640616b3%3A0xc5f3d7f0e3b7c5a5!2sZaun%20990B%2C%203825%20M%C3%BCrren%2C%20Switzerland!5e0!3m2!1sen!2sus!4v1700000000000"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
            <div className="absolute inset-0 bg-transparent group-hover:bg-charcoal/5 transition-colors pointer-events-none" />
          </a>
        </div>
      </section>
    </>
  );
}
