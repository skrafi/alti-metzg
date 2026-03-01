import Section from "@/components/Section";
import OpeningHours from "@/components/OpeningHours";
import ContactForm from "@/components/ContactForm";
import { MapPin, Phone, Mail, Train, CableCar, Footprints } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Kontakt",
  description: "Kontaktiere die Alti Metzg in Mürren. Adresse, Telefon, Öffnungszeiten und Anfahrt zum autofreien Bergdorf.",
};

const arrivalSteps = [
  {
    step: 1,
    title: "Stechelberg",
    description: "Mit dem Auto oder Bus bis Stechelberg, Talstation der Luftseilbahn.",
    icon: Train,
  },
  {
    step: 2,
    title: "Luftseilbahn",
    description: "Mit der Seilbahn in 4 Minuten nach Mürren hochfahren.",
    icon: CableCar,
  },
  {
    step: 3,
    title: "Mürren Dorf",
    description: "Vom Bahnhof ca. 5 Minuten zu Fuss durch das Dorf.",
    icon: Footprints,
  },
  {
    step: 4,
    title: "Alti Metzg",
    description: "Zaun 990B – wir sind direkt im Dorfzentrum.",
    icon: MapPin,
  },
];

export default function KontaktPage() {
  return (
    <>
      {/* Header - Dark Typographic */}
      <section className="pt-40 pb-24 bg-[#1C1917]">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h1 className="font-heading text-5xl md:text-6xl lg:text-7xl text-white tracking-tight">
            Komm vorbei.
          </h1>
          <p className="mt-6 text-white/60 text-xl max-w-2xl mx-auto">
            Wir freuen uns auf Deinen Besuch oder Deine Nachricht.
          </p>
        </div>
      </section>

      {/* How to find us - Horizontal Timeline */}
      <Section>
        <div className="max-w-5xl mx-auto">
          <h2 className="font-heading text-3xl md:text-4xl text-charcoal mb-4 text-center">
            So findest Du uns
          </h2>
          <p className="text-charcoal/60 text-center mb-12 max-w-2xl mx-auto">
            Mürren ist ein autofreies Bergdorf. Die Anreise ist Teil des Erlebnisses –
            mit Bahn und Seilbahn hoch in die Berge.
          </p>

          {/* Timeline */}
          <div className="relative">
            {/* Connection line */}
            <div className="hidden md:block absolute top-6 left-0 right-0 h-px bg-stone" />

            <div className="grid grid-cols-1 md:grid-cols-4 gap-8 md:gap-4 relative">
              {arrivalSteps.map((step, index) => (
                <div key={step.step} className="relative">
                  {/* Number */}
                  <span className="hidden md:block absolute -top-5 left-0 text-charcoal/30 text-sm font-medium">
                    {String(step.step).padStart(2, '0')}
                  </span>

                  {/* Content */}
                  <div className="pt-4 md:pt-8">
                    <step.icon size={28} className="text-forest mb-4" />
                    <h3 className="font-heading text-lg text-charcoal mb-2">
                      {step.title}
                    </h3>
                    <p className="text-charcoal/60 text-sm leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Section>

      {/* Contact Info & Form */}
      <Section>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Contact Info */}
          <div>
            <h2 className="font-heading text-2xl md:text-3xl text-charcoal mb-8">
              So erreichst Du uns
            </h2>

            {/* Address - clickable to Google Maps */}
            <div className="mb-8">
              <a
                href="https://www.google.com/maps/search/?api=1&query=Zaun+990B+3825+Mürren+Schweiz"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-start gap-4 mb-4 p-4 -mx-4 hover:bg-forest/5 transition-colors group"
              >
                <MapPin size={24} className="text-gold mt-1 shrink-0 group-hover:scale-110 transition-transform" />
                <div>
                  <h3 className="font-medium text-charcoal mb-1 group-hover:text-forest transition-colors">
                    Adresse
                    <span className="ml-2 text-xs text-forest/60 opacity-0 group-hover:opacity-100 transition-opacity">
                      In Google Maps öffnen →
                    </span>
                  </h3>
                  <p className="text-charcoal/60">
                    Zaun 990B<br />
                    3825 Mürren<br />
                    Schweiz
                  </p>
                </div>
              </a>
            </div>

            {/* Phone - tel: link */}
            <div className="mb-8">
              <a 
                href="tel:+41335258817"
                className="flex items-center gap-4 p-4 -mx-4  hover:bg-forest/5 transition-colors group"
              >
                <Phone size={20} className="text-gold shrink-0 group-hover:scale-110 transition-transform" />
                <div>
                  <h3 className="font-medium text-charcoal mb-1 group-hover:text-forest transition-colors">Telefon</h3>
                  <span className="text-charcoal/60 group-hover:text-gold transition-colors">
                    033 525 88 17
                  </span>
                </div>
              </a>
            </div>

            {/* Email */}
            <div className="mb-12">
              <a 
                href="mailto:muh@alti-metzg.ch"
                className="flex items-center gap-4 p-4 -mx-4  hover:bg-forest/5 transition-colors group"
              >
                <Mail size={20} className="text-gold shrink-0 group-hover:scale-110 transition-transform" />
                <div>
                  <h3 className="font-medium text-charcoal mb-1 group-hover:text-forest transition-colors">E-Mail</h3>
                  <span className="text-charcoal/60 group-hover:text-gold transition-colors">
                    muh@alti-metzg.ch
                  </span>
                </div>
              </a>
            </div>

            {/* Opening Hours */}
            <div>
              <h3 className="font-heading text-xl text-charcoal mb-6">
                Öffnungszeiten
              </h3>
              <OpeningHours />
            </div>
          </div>

          {/* Contact Form */}
          <div>
            <h2 className="font-heading text-2xl md:text-3xl text-charcoal mb-8">
              Nachricht senden
            </h2>
            <ContactForm />
          </div>
        </div>
      </Section>

      {/* Map */}
      <Section className="!pt-0">
        <h2 className="font-heading text-2xl md:text-3xl text-charcoal mb-8 text-center">
          Anfahrt
        </h2>
        <a 
          href="https://www.google.com/maps/search/?api=1&query=Zaun+990B+3825+Mürren+Schweiz"
          target="_blank"
          rel="noopener noreferrer"
          className="block aspect-video bg-gradient-to-br from-forest/5 to-stone-light/30  flex items-center justify-center hover:from-forest/10 transition-colors group cursor-pointer relative overflow-hidden"
        >
          {/* Decorative pattern */}
          <div className="absolute inset-0 opacity-10" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%231B4332' fill-opacity='0.3'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }} />
          
          <div className="text-center relative z-10">
            <MapPin size={48} className="mx-auto mb-4 text-forest group-hover:scale-110 transition-transform" />
            <p className="text-charcoal font-medium mb-2">In Google Maps öffnen</p>
            <p className="text-charcoal/50 text-sm max-w-md px-4">
              Zaun 990B, 3825 Mürren – ein autofreies Bergdorf auf 1'638 m ü. M.
            </p>
          </div>
        </a>
      </Section>
    </>
  );
}
