import PageHero from "@/components/PageHero";
import Section from "@/components/Section";
import ContactForm from "@/components/ContactForm";
import Link from "next/link";
import { ArrowRight, Wine, Users, Flame } from "lucide-react";

export default function CarnotzetPage() {
  return (
    <>
      <PageHero
        title="Carnotzet"
        imageSrc="/images/carnotzet-hero.jpg"
        imageAlt="Gemütliches Carnotzet Interieur"
        dark
      />

      {/* Story */}
      <Section>
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="font-heading text-3xl md:text-4xl text-contrast mb-8">
            Wo einst ein dunkler Keller war...
          </h2>
          <blockquote className="text-contrast/80 text-xl md:text-2xl leading-relaxed italic font-heading">
            &ldquo;Wo einst ein dunkler Keller war, glänzt nun im neuen Kleid
            ein gemütliches Carnotzet. Gemeinsam mit Freunden kannst Du im
            rustikalen Ambiente eine Flasche Wein trinken und dazu ein
            Apéroplättli mit regionalen Spezialitäten geniessen.&rdquo;
          </blockquote>
        </div>
      </Section>

      {/* Experience */}
      <Section dark>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          <div>
            <Wine className="mx-auto mb-4 text-primary" size={40} />
            <h3 className="font-heading text-xl text-secondary mb-3">
              Regionale Weine
            </h3>
            <p className="text-secondary/70 text-sm">
              Eine Auswahl an Weinen aus der Region und darüber hinaus. Lass
              Dich beraten und entdecke Neues.
            </p>
          </div>
          <div>
            <Users className="mx-auto mb-4 text-primary" size={40} />
            <h3 className="font-heading text-xl text-secondary mb-3">
              Für Gruppen
            </h3>
            <p className="text-secondary/70 text-sm">
              Das Carnotzet ist perfekt für einen Abend mit Freunden. Gemütlich,
              rustikal, zum Verweilen einladen.
            </p>
          </div>
          <div>
            <Flame className="mx-auto mb-4 text-primary" size={40} />
            <h3 className="font-heading text-xl text-secondary mb-3">
              Apéroplättli
            </h3>
            <p className="text-secondary/70 text-sm">
              Regionale Spezialitäten auf dem Holzbrett. Käse, Fleisch,
              Eingemachtes – alles aus der Region.
            </p>
          </div>
        </div>
      </Section>

      {/* Atmosphere */}
      <Section>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="font-heading text-3xl md:text-4xl text-contrast mb-6">
              Rustikales Ambiente
            </h2>
            <p className="text-contrast/70 mb-6 leading-relaxed">
              Der alte Keller der Metzgerei wurde mit viel Liebe zum Detail in
              ein gemütliches Carnotzet verwandelt. Natursteinwände,
              Holzmöbel und gedimmtes Licht schaffen eine Atmosphäre, die zum
              Bleiben einlädt.
            </p>
            <p className="text-contrast/70 mb-8 leading-relaxed">
              Ob für einen gemütlichen Abend zu zweit oder eine Feier mit
              Freunden – das Carnotzet bietet Platz für unvergessliche
              Momente.
            </p>
            <p className="text-accent font-medium">
              Nach Voranmeldung buchbar
            </p>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div className="aspect-[3/4] bg-muted/30 rounded-sm flex items-center justify-center">
              <span className="text-contrast/30 text-sm">carnotzet-01.jpg</span>
            </div>
            <div className="aspect-[3/4] bg-muted/30 rounded-sm flex items-center justify-center">
              <span className="text-contrast/30 text-sm">carnotzet-02.jpg</span>
            </div>
            <div className="aspect-[3/4] bg-muted/30 rounded-sm flex items-center justify-center col-span-2">
              <span className="text-contrast/30 text-sm">apero-platter.jpg</span>
            </div>
          </div>
        </div>
      </Section>

      {/* Reservation */}
      <Section>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div>
            <h2 className="font-heading text-3xl md:text-4xl text-contrast mb-6">
              Reservierung
            </h2>
            <p className="text-contrast/70 mb-6 leading-relaxed">
              Möchtest Du das Carnotzet für einen besonderen Anlass buchen?
              Schreib uns eine Nachricht und wir finden einen passenden
              Termin.
            </p>
            <div className="space-y-4 text-contrast/70 text-sm">
              <p>
                <strong className="text-contrast">Gruppengrösse:</strong> Bis
                zu 12 Personen
              </p>
              <p>
                <strong className="text-contrast">
                  Voranmeldung:
                </strong>{" "}
                Mindestens 2 Tage im Voraus
              </p>
              <p>
                <strong className="text-contrast">Preis:</strong> Nach
                Absprache – abhängig von Auswahl
              </p>
            </div>
          </div>
          <div>
            <ContactForm />
          </div>
        </div>
      </Section>

      {/* CTA */}
      <Section dark>
        <div className="text-center">
          <h2 className="font-heading text-3xl md:text-4xl text-secondary mb-6">
            Mehr entdecken
          </h2>
          <p className="text-secondary/70 mb-8 max-w-xl mx-auto">
            Kombiniere Deinen Abend im Carnotzet mit einem Besuch im Dorfladen
            oder Bistro.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/dorfladen"
              className="px-6 py-3 bg-secondary text-contrast font-medium rounded-sm hover:bg-primary transition-colors"
            >
              Zum Dorfladen
            </Link>
            <Link
              href="/bistro"
              className="px-6 py-3 border border-secondary/30 text-secondary font-medium rounded-sm hover:border-primary hover:text-primary transition-colors"
            >
              Zum Bistro
            </Link>
          </div>
        </div>
      </Section>
    </>
  );
}
