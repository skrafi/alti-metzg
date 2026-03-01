import PageHero from "@/components/PageHero";
import Section, { SectionTitle, SectionSubtitle, SectionLabel } from "@/components/Section";
import BackgroundText from "@/components/BackgroundText";
import Link from "next/link";
import { ArrowRight, Utensils, Leaf, Clock } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Bistro",
  description: "Saisonale Speisekarte im Bistro der Alti Metzg. Frisch, regional und ohne Verschwendung – direkt vom Laden in den Teller.",
};

// Placeholder menu data (will be replaced with Sanity CMS)
const menuItems = {
  vorspeisen: [
    {
      name: "Saisonal wechselnd",
      description: "Frische Vorspeisen je nach Saison und Verfügbarkeit",
      price: null,
      seasonal: true,
    },
  ],
  hauptgerichte: [
    {
      name: "Tagesmenu",
      description: "Wechselt täglich – frag nach, was die Küche heute zaubert",
      price: null,
      seasonal: true,
    },
  ],
  desserts: [
    {
      name: "Hausgemacht",
      description: "Süsse Versuchungen aus der eigenen Küche",
      price: null,
      seasonal: true,
    },
  ],
};

export default function BistroPage() {
  return (
    <>
      <PageHero
        title="Bistro"
        imageSrc="/images/bistro-interior.jpg"
        imageAlt="Bistro Interieur mit Tischen"
      />

      {/* Philosophy */}
      <Section>
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="font-heading text-3xl md:text-4xl text-charcoal mb-8">
            Saisonal. Regional. Ohne Verschwendung.
          </h2>
          <blockquote className="text-charcoal/80 text-xl md:text-2xl leading-relaxed italic font-heading">
            &ldquo;In unserem kleinen Bistro bieten wir eine übersichtliche
            saisonale Speisekarte an, welche sich am Angebot in unserem Laden
            anlehnen wird, somit erwartet Dich ein vielseitiges und
            abwechslungsreiches Angebot. Zusätzlich vermeiden wir auf diesem
            Weg eine Verschwendung der Lebensmittel.&rdquo;
          </blockquote>
        </div>
      </Section>

      {/* Values */}
      <Section dark>
        <div className="relative overflow-hidden">
          <BackgroundText text="BISTRO" className="top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-white" />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center relative z-10">
            <div>
              <Utensils className="mx-auto mb-4 text-forest-light" size={40} />
              <SectionTitle light centered={false} className="text-xl mb-3">
                Vom Laden in den Teller
              </SectionTitle>
              <SectionSubtitle light centered={false} className="text-white/70 text-sm">
                Unsere Speisekarte orientiert sich am aktuellen Angebot im
                Dorfladen. Was im Regal ist, landet auch auf dem Teller.
              </SectionSubtitle>
            </div>
            <div>
              <Leaf className="mx-auto mb-4 text-forest-light" size={40} />
              <SectionTitle light centered={false} className="text-xl mb-3">
                Zero Waste
              </SectionTitle>
              <SectionSubtitle light centered={false} className="text-white/70 text-sm">
                Wir werfen nichts weg. Durch die enge Verzahnung von Laden und
                Bistro vermeiden wir Lebensmittelverschwendung konsequent.
              </SectionSubtitle>
            </div>
            <div>
              <Clock className="mx-auto mb-4 text-forest-light" size={40} />
              <SectionTitle light centered={false} className="text-xl mb-3">
                Immer frisch
              </SectionTitle>
              <SectionSubtitle light centered={false} className="text-white/70 text-sm">
                Die Karte wechselt mit der Saison. Immer frisch, immer anders,
                immer überraschend.
              </SectionSubtitle>
            </div>
          </div>
        </div>
      </Section>

      {/* Menu */}
      <Section>
        <SectionTitle centered>Speisekarte</SectionTitle>
        <SectionSubtitle className="mt-4 mb-12">
          Die Karte wechselt saisonal. Hier ein Überblick unserer Kategorien.
        </SectionSubtitle>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Vorspeisen */}
          <div>
            <h3 className="font-heading text-xl text-forest mb-6 pb-2 border-b border-gold/30">
              Vorspeisen
            </h3>
            <div className="space-y-6">
              <div className="group">
                <div className="flex justify-between items-start mb-1">
                  <h4 className="font-medium text-charcoal">
                    Saisonal wechselnd
                  </h4>
                  <span className="text-forest text-sm">~</span>
                </div>
                <p className="text-charcoal/60 text-sm">
                  Frische Vorspeisen je nach Saison und Verfügbarkeit
                </p>
              </div>
            </div>
          </div>

          {/* Hauptgerichte */}
          <div>
            <h3 className="font-heading text-xl text-forest mb-6 pb-2 border-b border-gold/30">
              Hauptgerichte
            </h3>
            <div className="space-y-6">
              <div className="group">
                <div className="flex justify-between items-start mb-1">
                  <h4 className="font-medium text-charcoal">Tagesmenu</h4>
                  <span className="text-forest text-sm">~</span>
                </div>
                <p className="text-charcoal/60 text-sm">
                  Wechselt täglich – frag nach, was die Küche heute zaubert
                </p>
              </div>
            </div>
          </div>

          {/* Desserts */}
          <div>
            <h3 className="font-heading text-xl text-forest mb-6 pb-2 border-b border-gold/30">
              Desserts
            </h3>
            <div className="space-y-6">
              <div className="group">
                <div className="flex justify-between items-start mb-1">
                  <h4 className="font-medium text-charcoal">Hausgemacht</h4>
                  <span className="text-forest text-sm">~</span>
                </div>
                <p className="text-charcoal/60 text-sm">
                  Süsse Versuchungen aus der eigenen Küche
                </p>
              </div>
            </div>
          </div>
        </div>

        <p className="text-center text-charcoal/40 mt-12 text-sm">
          Preise und Gerichte erfährst Du vor Ort – alles ist frisch und
          saisonal.
        </p>
      </Section>

      {/* Food Gallery */}
      <Section className="!py-12">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <div className="aspect-square bg-stone-light/50  flex items-center justify-center border border-stone/20">
            <span className="text-charcoal/30 text-sm">meal-01.jpg</span>
          </div>
          <div className="aspect-square bg-stone-light/50  flex items-center justify-center border border-stone/20">
            <span className="text-charcoal/30 text-sm">meal-02.jpg</span>
          </div>
          <div className="aspect-square bg-stone-light/50  flex items-center justify-center border border-stone/20">
            <span className="text-charcoal/30 text-sm">meal-03.jpg</span>
          </div>
          <div className="aspect-square bg-stone-light/50  flex items-center justify-center border border-stone/20">
            <span className="text-charcoal/30 text-sm">meal-04.jpg</span>
          </div>
        </div>
      </Section>

      {/* CTA */}
      <Section>
        <div className="text-center">
          <SectionTitle>Hungrig geworden?</SectionTitle>
          <SectionSubtitle className="mt-6">
            Komm vorbei und lass Dich überraschen. Oder reserviere einen Platz
            im Carnotzet für einen gemütlichen Abend mit Freunden.
          </SectionSubtitle>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mt-10">
            <Link
              href="/carnotzet"
              className="btn-primary"
            >
              Zum Carnotzet
              <ArrowRight size={18} />
            </Link>
            <Link
              href="/kontakt"
              className="btn-outline"
            >
              Kontakt
              <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </Section>
    </>
  );
}
