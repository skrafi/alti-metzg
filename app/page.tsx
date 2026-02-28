import Hero from "@/components/Hero";
import ConceptCard from "@/components/ConceptCard";
import OpeningHours from "@/components/OpeningHours";
import Section from "@/components/Section";
import Link from "next/link";
import { ArrowRight, MapPin, Phone } from "lucide-react";

const concepts = [
  {
    title: "Dorfladen",
    description:
      "Lokale Fleisch- und Milchprodukte, frisches Brot, saisonales Obst und Gemüse – alles aus der Region.",
    imageSrc: "/images/dorfladen-shelves.jpg",
    imageAlt: "Dorfladen mit lokalen Produkten",
    href: "/dorfladen",
  },
  {
    title: "Bistro",
    description:
      "Saisonale Speisekarte, die sich am Ladenangebot orientiert. Vielseitig, abwechslungsreich und ohne Verschwendung.",
    imageSrc: "/images/bistro-interior.jpg",
    imageAlt: "Gemütliches Bistro Interieur",
    href: "/bistro",
  },
  {
    title: "Carnotzet",
    description:
      "Ein gemütlicher Weinkeller, wo Du mit Freunden regionale Spezialitäten und einen guten Wein geniessen kannst.",
    imageSrc: "/images/carnotzet-interior.jpg",
    imageAlt: "Rustikales Carnotzet",
    href: "/carnotzet",
  },
];

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <Hero />

      {/* Intro Section */}
      <Section>
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="font-heading text-3xl md:text-4xl text-contrast mb-6">
            Willkommen bei der Alti Metzg
          </h2>
          <p className="text-contrast/70 text-lg leading-relaxed">
            Wo einst eine alte Metzgerei war, erwartet Dich heute ein Dorfladen,
            ein kleines Bistro und ein gemütliches Carnotzet. Lokales,
            Saisonales und Authentisches – mitten in Mürren.
          </p>
        </div>
      </Section>

      {/* Three Concepts */}
      <Section>
        <h2 className="font-heading text-3xl md:text-4xl text-center text-contrast mb-16">
          Was Dich erwartet
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12">
          {concepts.map((concept, index) => (
            <ConceptCard
              key={concept.title}
              {...concept}
              index={index}
            />
          ))}
        </div>
      </Section>

      {/* Opening Hours */}
      <Section dark>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="font-heading text-3xl md:text-4xl text-secondary mb-6">
              Öffnungszeiten
            </h2>
            <p className="text-secondary/70 mb-8">
              Wir freuen uns auf Deinen Besuch. Montags ruhen wir uns aus,
              damit wir die restliche Woche für Dich da sein können.
            </p>
            <OpeningHours />
          </div>
          <div className="text-center md:text-left">
            <p className="text-secondary/70 text-sm mb-2">Jetzt geöffnet?</p>
            <OpeningHours compact />
          </div>
        </div>
      </Section>

      {/* Location Teaser */}
      <Section>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="font-heading text-3xl md:text-4xl text-contrast mb-6">
              Besuche uns
            </h2>
            <p className="text-contrast/70 mb-8 leading-relaxed">
              Mürren – ein autofreies Bergdorf auf 1&apos;638 Metern über Meer.
              Erreichbar mit der Bahn und Seilbahn ab Lauterbrunnen. Wir freuen
              uns auf Deinen Besuch!
            </p>
            <div className="space-y-4 mb-8">
              <div className="flex items-start gap-3 text-contrast/70">
                <MapPin size={20} className="mt-1 shrink-0 text-accent" />
                <div>
                  <p className="font-medium text-contrast">Zaun 990B</p>
                  <p>3825 Mürren, Schweiz</p>
                </div>
              </div>
              <div className="flex items-center gap-3 text-contrast/70">
                <Phone size={18} className="shrink-0 text-accent" />
                <a
                  href="tel:+41335258817"
                  className="hover:text-accent transition-colors"
                >
                  033 525 88 17
                </a>
              </div>
            </div>
            <Link
              href="/kontakt"
              className="inline-flex items-center gap-2 text-accent font-medium hover:gap-3 transition-all"
            >
              Kontakt & Anfahrt
              <ArrowRight size={16} />
            </Link>
          </div>
          {/* Map Placeholder */}
          <div className="aspect-square bg-muted/30 rounded-sm flex items-center justify-center">
            <div className="text-center text-contrast/40">
              <MapPin size={48} className="mx-auto mb-4" />
              <p className="text-sm">Google Maps</p>
            </div>
          </div>
        </div>
      </Section>
    </>
  );
}
