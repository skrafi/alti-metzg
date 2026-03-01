import Section, { SectionTitle, SectionSubtitle } from "@/components/Section";
import ContactForm from "@/components/ContactForm";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Carnotzet",
  description: "Unser gemütlicher Weinkeller in Mürren. Geniesse regionale Weine und Apéroplättli im rustikalen Ambiente der alten Metzgerei.",
};

export default function CarnotzetPage() {
  // Carnotzet has a dark theme throughout
  return (
    <div className="bg-[#1C1917] text-white min-h-screen">
      {/* Hero - Dark with typography */}
      <section className="relative h-[70vh] min-h-[500px] flex items-center justify-center">
        <div className="text-center px-6">
          <h1 className="font-heading text-6xl md:text-7xl lg:text-8xl text-white tracking-tight mb-6">
            Carnotzet
          </h1>
          <p className="text-white/60 text-xl max-w-2xl mx-auto">
            Wo einst ein dunkler Keller war, glänzt nun im neuen Kleid
            ein gemütliches Carnotzet.
          </p>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#1C1917] to-transparent" />
      </section>

      {/* Story */}
      <Section className="!py-24 !bg-transparent">
        <div className="max-w-3xl mx-auto text-center">
          <SectionTitle className="!text-3xl md:!text-4xl mb-8 !text-white">
            Wo einst ein dunkler Keller war...
          </SectionTitle>
          <blockquote className="text-white/70 text-xl md:text-2xl leading-relaxed italic font-heading">
            &ldquo;Wo einst ein dunkler Keller war, glänzt nun im neuen Kleid
            ein gemütliches Carnotzet. Gemeinsam mit Freunden kannst Du im
            rustikalen Ambiente eine Flasche Wein trinken und dazu ein
            Apéroplättli mit regionalen Spezialitäten geniessen.&rdquo;
          </blockquote>
        </div>
      </Section>

      {/* Experience */}
      <Section className="!py-24 !bg-transparent">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-16 text-center">
          <div>
            <div className="mb-6">
              <span className="text-4xl">🍷</span>
            </div>
            <h3 className="font-heading text-2xl text-white mb-3">
              Regionale Weine
            </h3>
            <p className="text-white/50 text-lg leading-relaxed">
              Eine Auswahl an Weinen aus der Region und darüber hinaus. Lass
              Dich beraten und entdecke Neues.
            </p>
          </div>
          <div>
            <div className="mb-6">
              <span className="text-4xl">👥</span>
            </div>
            <h3 className="font-heading text-2xl text-white mb-3">
              Für Gruppen
            </h3>
            <p className="text-white/50 text-lg leading-relaxed">
              Das Carnotzet ist perfekt für einen Abend mit Freunden. Gemütlich,
              rustikal, zum Verweilen einladen.
            </p>
          </div>
          <div>
            <div className="mb-6">
              <span className="text-4xl">🧀</span>
            </div>
            <h3 className="font-heading text-2xl text-white mb-3">
              Apéroplättli
            </h3>
            <p className="text-white/50 text-lg leading-relaxed">
              Regionale Spezialitäten auf dem Holzbrett. Käse, Fleisch,
              Eingemachtes – alles aus der Region.
            </p>
          </div>
        </div>
      </Section>

      {/* Atmosphere */}
      <Section className="!py-24 !bg-transparent">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <SectionTitle className="!text-white !text-3xl md:!text-4xl mb-6">
              Rustikales Ambiente
            </SectionTitle>
            <SectionSubtitle className="!text-white/50 !text-lg mt-6">
              Der alte Keller der Metzgerei wurde mit viel Liebe zum Detail in
              ein gemütliches Carnotzet verwandelt. Natursteinwände,
              Holzmöbel und gedimmtes Licht schaffen eine Atmosphäre, die zum
              Bleiben einlädt.
            </SectionSubtitle>
            <SectionSubtitle className="!text-white/50 !text-lg mt-4">
              Ob für einen gemütlichen Abend zu zweit oder eine Feier mit
              Freunden – das Carnotzet bietet Platz für unvergessliche
              Momente.
            </SectionSubtitle>
            <p className="text-white font-medium mt-8">
              Nach Voranmeldung buchbar
            </p>
          </div>
          <div className="space-y-4">
            <div className="aspect-[3/4] bg-white/5 flex items-center justify-center">
              <p className="text-white/30 text-sm font-mono">carnotzet-01.jpg</p>
            </div>
            <div className="aspect-[3/4] bg-white/5 flex items-center justify-center">
              <p className="text-white/30 text-sm font-mono">carnotzet-02.jpg</p>
            </div>
            <div className="aspect-[3/4] bg-white/5 flex items-center justify-center">
              <p className="text-white/30 text-sm font-mono">apero-platter.jpg</p>
            </div>
          </div>
        </div>
      </Section>

      {/* Reservation */}
      <Section className="!py-24 !bg-transparent">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <SectionTitle className="!text-white !text-3xl md:!text-4xl mb-6">
              Reservierung
            </SectionTitle>
            <SectionSubtitle className="!text-white/50 !text-lg mt-6">
              Möchtest Du das Carnotzet für einen besonderen Anlass buchen?
              Schreib uns eine Nachricht und wir finden einen passenden
              Termin.
            </SectionSubtitle>
            <div className="space-y-4 text-white/60 text-lg mt-8">
              <p>
                <strong className="text-white">Gruppengrösse:</strong> Bis
                zu 12 Personen
              </p>
              <p>
                <strong className="text-white">
                  Voranmeldung:
                </strong>{" "}
                Mindestens 2 Tage im Voraus
              </p>
              <p>
                <strong className="text-white">Preis:</strong> Nach
                Absprache – abhängig von Auswahl
              </p>
            </div>
          </div>
          <div className="bg-white/5 p-8">
            <ContactForm />
          </div>
        </div>
      </Section>

      {/* CTA */}
      <Section className="!py-24 !bg-transparent">
        <div className="text-center">
          <SectionTitle className="!text-white !text-3xl md:!text-4xl">Mehr entdecken</SectionTitle>
          <SectionSubtitle className="!text-white/50 !text-lg mt-6">
            Kombiniere Deinen Abend im Carnotzet mit einem Besuch im Dorfladen
            oder Bistro.
          </SectionSubtitle>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mt-10">
            <Link
              href="/dorfladen"
              className="btn-primary"
            >
              Zum Dorfladen
              <ArrowRight size={18} />
            </Link>
            <Link
              href="/bistro"
              className="btn-outline"
            >
              Zum Bistro
              <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </Section>
    </div>
  );
}
