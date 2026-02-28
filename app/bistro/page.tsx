import PageHero from "@/components/PageHero";
import Section from "@/components/Section";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Utensils, Leaf, Clock } from "lucide-react";

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
        imageSrc="/images/bistro-hero.jpg"
        imageAlt="Bistro Interieur mit Tischen"
      />

      {/* Philosophy */}
      <Section>
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="font-heading text-3xl md:text-4xl text-contrast mb-8">
            Saisonal. Regional. Ohne Verschwendung.
          </h2>
          <blockquote className="text-contrast/80 text-xl md:text-2xl leading-relaxed italic font-heading">
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
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          <div>
            <Utensils className="mx-auto mb-4 text-primary" size={40} />
            <h3 className="font-heading text-xl text-secondary mb-3">
              Vom Laden in den Teller
            </h3>
            <p className="text-secondary/70 text-sm">
              Unsere Speisekarte orientiert sich am aktuellen Angebot im
              Dorfladen. Was im Regal ist, landet auch auf dem Teller.
            </p>
          </div>
          <div>
            <Leaf className="mx-auto mb-4 text-primary" size={40} />
            <h3 className="font-heading text-xl text-secondary mb-3">
              Zero Waste
            </h3>
            <p className="text-secondary/70 text-sm">
              Wir werfen nichts weg. Durch die enge Verzahnung von Laden und
              Bistro vermeiden wir Lebensmittelverschwendung konsequent.
            </p>
          </div>
          <div>
            <Clock className="mx-auto mb-4 text-primary" size={40} />
            <h3 className="font-heading text-xl text-secondary mb-3">
              Immer frisch
            </h3>
            <p className="text-secondary/70 text-sm">
              Die Karte wechselt mit der Saison. Immer frisch, immer anders,
              immer überraschend.
            </p>
          </div>
        </div>
      </Section>

      {/* Menu */}
      <Section>
        <h2 className="font-heading text-3xl md:text-4xl text-center text-contrast mb-4">
          Speisekarte
        </h2>
        <p className="text-center text-contrast/60 mb-12 text-sm">
          Die Karte wechselt saisonal. Hier ein Überblick unserer Kategorien.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Vorspeisen */}
          <div>
            <h3 className="font-heading text-xl text-accent mb-6 pb-2 border-b border-accent/30">
              Vorspeisen
            </h3>
            <div className="space-y-6">
              <div className="group">
                <div className="flex justify-between items-start mb-1">
                  <h4 className="font-medium text-contrast">
                    Saisonal wechselnd
                  </h4>
                  <span className="text-accent text-sm">~</span>
                </div>
                <p className="text-contrast/60 text-sm">
                  Frische Vorspeisen je nach Saison und Verfügbarkeit
                </p>
              </div>
            </div>
          </div>

          {/* Hauptgerichte */}
          <div>
            <h3 className="font-heading text-xl text-accent mb-6 pb-2 border-b border-accent/30">
              Hauptgerichte
            </h3>
            <div className="space-y-6">
              <div className="group">
                <div className="flex justify-between items-start mb-1">
                  <h4 className="font-medium text-contrast">Tagesmenu</h4>
                  <span className="text-accent text-sm">~</span>
                </div>
                <p className="text-contrast/60 text-sm">
                  Wechselt täglich – frag nach, was die Küche heute zaubert
                </p>
              </div>
            </div>
          </div>

          {/* Desserts */}
          <div>
            <h3 className="font-heading text-xl text-accent mb-6 pb-2 border-b border-accent/30">
              Desserts
            </h3>
            <div className="space-y-6">
              <div className="group">
                <div className="flex justify-between items-start mb-1">
                  <h4 className="font-medium text-contrast">Hausgemacht</h4>
                  <span className="text-accent text-sm">~</span>
                </div>
                <p className="text-contrast/60 text-sm">
                  Süsse Versuchungen aus der eigenen Küche
                </p>
              </div>
            </div>
          </div>
        </div>

        <p className="text-center text-contrast/50 mt-12 text-sm">
          Preise und Gerichte erfährst Du vor Ort – alles ist frisch und
          saisonal.
        </p>
      </Section>

      {/* Food Gallery */}
      <Section className="!py-0">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {["meal-01.jpg", "meal-02.jpg", "meal-03.jpg", "meal-04.jpg"].map(
            (img) => (
              <div
                key={img}
                className="aspect-square bg-muted/30 rounded-sm flex items-center justify-center"
              >
                <span className="text-contrast/30 text-sm">{img}</span>
              </div>
            )
          )}
        </div>
      </Section>

      {/* CTA */}
      <Section>
        <div className="text-center">
          <h2 className="font-heading text-3xl md:text-4xl text-contrast mb-6">
            Hungrig geworden?
          </h2>
          <p className="text-contrast/70 mb-8 max-w-xl mx-auto">
            Komm vorbei und lass Dich überraschen. Oder reserviere einen Platz
            im Carnotzet für einen gemütlichen Abend mit Freunden.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/carnotzet"
              className="px-6 py-3 bg-contrast text-secondary font-medium rounded-sm hover:bg-accent transition-colors"
            >
              Zum Carnotzet
            </Link>
            <Link
              href="/kontakt"
              className="px-6 py-3 border border-contrast/30 text-contrast font-medium rounded-sm hover:border-accent hover:text-accent transition-colors"
            >
              Kontakt
            </Link>
          </div>
        </div>
      </Section>
    </>
  );
}
