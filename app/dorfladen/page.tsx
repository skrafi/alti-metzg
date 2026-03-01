import PageHero from "@/components/PageHero";
import Section, { SectionTitle, SectionSubtitle } from "@/components/Section";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Dorfladen",
  description: "Unser Dorfladen in Mürren bietet lokale Fleisch- und Milchprodukte, frisches Brot, saisonales Obst und Gemüse aus der Region.",
};

const categories = [
  {
    title: "Päsci's Convenience-Food",
    description: "Fertiggerichte von Päsci – regional und mit Liebe zubereitet.",
    image: "convenience-food.jpg",
  },
  {
    title: "Frisches Brot",
    description: "Täglich frisch gebackenes Brot von lokalen Bäckereien.",
    image: "fresh-bread.jpg",
  },
  {
    title: "Lokale Fleisch- und Milchprodukte",
    description: "Fleisch und Käse direkt von Bauern aus der Region.",
    image: "meat-cheese.jpg",
  },
  {
    title: "Saisonales Obst und Gemüse",
    description: "Was die Saison hergibt – frisch und voller Geschmack.",
    image: "fruits-vegetables.jpg",
  },
  {
    title: "Teigwaren und Getreideprodukte",
    description: "Nudeln, Reis und Getreide von Schweizer Produzenten.",
    image: "pasta-grains.jpg",
  },
];

export default function DorfladenPage() {
  return (
    <>
      {/* Hero - Dark background with placeholder */}
      <section className="relative h-[60vh] min-h-[500px] overflow-hidden bg-[#2C2825]">
        <div className="absolute inset-0 flex items-center justify-center">
          <p className="text-white/30 text-sm font-mono">dorfladen-hero.jpg</p>
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-charcoal/60 via-charcoal/30 to-transparent" />
        <div className="relative h-full flex flex-col items-center justify-center text-center px-6">
          <h1 className="font-heading text-5xl md:text-6xl lg:text-7xl text-white tracking-tight">
            Dorfladen
          </h1>
        </div>
      </section>

      {/* Intro */}
      <Section>
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="font-heading text-3xl md:text-4xl text-charcoal mb-6">
            Was Dich in der alten Metzgerei erwartet
          </h2>
          <p className="text-charcoal/70 text-lg leading-relaxed">
            Unser Dorfladen ist mehr als nur ein Laden – es ist ein Treffpunkt
            für die Gemeinde und ein Ort, wo Du Produkte aus der Region
            findest. Von frischem Brot über lokale Käse bis zu saisonalem
            Gemüse: alles kommt von Produzenten, die wir persönlich kennen.
          </p>
        </div>
      </Section>

      {/* Product Categories - Alternating Rows */}
      <Section>
        <div className="text-center mb-16">
          <SectionTitle>Unser Sortiment</SectionTitle>
        </div>

        <div className="space-y-16">
          {categories.map((category, index) => (
            <div
              key={category.title}
              className={`grid grid-cols-1 md:grid-cols-2 gap-8 items-center ${
                index % 2 === 1 ? 'md:grid-flow-col-dense' : ''
              }`}
            >
              {/* Image */}
              <div className={`${index % 2 === 1 ? 'md:col-start-2' : ''}`}>
                <div className="aspect-[4/3] bg-[#E8E4DF] flex items-center justify-center overflow-hidden">
                  <p className="text-charcoal/40 text-sm font-mono">{category.image}</p>
                </div>
              </div>

              {/* Text */}
              <div className={`${index % 2 === 1 ? 'md:col-start-1 md:row-start-1' : ''}`}>
                <h3 className="font-heading text-2xl md:text-3xl text-charcoal mb-4">
                  {category.title}
                </h3>
                <p className="text-charcoal/60 text-lg leading-relaxed">
                  {category.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </Section>

      {/* Philosophy - Typographic Values Section */}
      <Section dark>
        <div className="text-center">
          <SectionTitle light className="!text-3xl md:!text-4xl mb-8">
            Regional · Saisonal · Persönlich
          </SectionTitle>
          <SectionSubtitle light className="max-w-2xl mx-auto">
            Kurze Wege, frische Produkte, persönliche Beziehungen.
            Wir beziehen direkt von Bauern und Produzenten aus der Umgebung.
            Was die Saison hergibt, landet bei uns im Regal.
          </SectionSubtitle>
        </div>
      </Section>

      {/* Producers */}
      <Section>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="md:w-[40%]">
            <h2 className="font-heading text-3xl md:text-4xl text-charcoal mb-6">
              Unsere Produzenten
            </h2>
            <p className="text-charcoal/70 mb-6 leading-relaxed">
              Hinter jedem Produkt steht ein Gesicht. Wir kennen unsere
              Lieferanten persönlich und wissen, woher unsere Ware kommt. Das
              ist Qualität, die man schmecken kann.
            </p>
            <Link
              href="/ueber-uns"
              className="inline-flex items-center gap-2 text-charcoal font-medium hover:gap-3 hover:text-forest transition-all"
            >
              Mehr über uns
              <ArrowRight size={16} />
            </Link>
          </div>
          <div className="md:w-[60%] space-y-4">
            <div className="aspect-[3/2] bg-[#E8E4DF] flex items-center justify-center">
              <p className="text-charcoal/40 text-sm font-mono">producer-01.jpg</p>
            </div>
            <div className="aspect-[3/2] bg-[#E8E4DF] flex items-center justify-center">
              <p className="text-charcoal/40 text-sm font-mono">producer-02.jpg</p>
            </div>
          </div>
        </div>
      </Section>

      {/* CTA */}
      <Section>
        <div className="text-center">
          <h2 className="font-heading text-3xl md:text-4xl text-charcoal mb-6">
            Schau vorbei
          </h2>
          <p className="text-charcoal/70 mb-8 max-w-xl mx-auto">
            Wir freuen uns auf Deinen Besuch. Oder komm ins Bistro – die
            Speisekarte orientiert sich an dem, was wir im Laden haben.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/bistro"
              className="btn-primary"
            >
              Zum Bistro
              <ArrowRight size={18} />
            </Link>
            <Link
              href="/kontakt"
              className="btn-outline"
            >
              Kontakt & Anfahrt
            </Link>
          </div>
        </div>
      </Section>
    </>
  );
}
