import PageHero from "@/components/PageHero";
import Section from "@/components/Section";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Leaf, Heart, MapPin } from "lucide-react";

const categories = [
  {
    title: "Päsci's Convenience-Food",
    description: "Fertiggerichte von Päsci – regional und mit Liebe zubereitet.",
    icon: "🍽️",
  },
  {
    title: "Frisches Brot",
    description: "Täglich frisch gebackenes Brot von lokalen Bäckereien.",
    icon: "🍞",
  },
  {
    title: "Lokale Fleisch- und Milchprodukte",
    description: "Fleisch und Käse direkt von Bauern aus der Region.",
    icon: "🧀",
  },
  {
    title: "Saisonales Obst und Gemüse",
    description: "Was die Saison hergibt – frisch und voller Geschmack.",
    icon: "🥬",
  },
  {
    title: "Teigwaren und Getreideprodukte",
    description: "Nudeln, Reis und Getreide von Schweizer Produzenten.",
    icon: "🌾",
  },
];

export default function DorfladenPage() {
  return (
    <>
      <PageHero
        title="Dorfladen"
        imageSrc="/images/dorfladen-hero.jpg"
        imageAlt="Dorfladen Regale mit lokalen Produkten"
      />

      {/* Intro */}
      <Section>
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="font-heading text-3xl md:text-4xl text-contrast mb-6">
            Was Dich in der alten Metzgerei erwartet
          </h2>
          <p className="text-contrast/70 text-lg leading-relaxed">
            Unser Dorfladen ist mehr als nur ein Laden – es ist ein Treffpunkt
            für die Gemeinde und ein Ort, wo Du Produkte aus der Region
            findest. Von frischem Brot über lokale Käse bis zu saisonalem
            Gemüse: alles kommt von Produzenten, die wir persönlich kennen.
          </p>
        </div>
      </Section>

      {/* Product Categories */}
      <Section>
        <h2 className="font-heading text-3xl md:text-4xl text-center text-contrast mb-12">
          Unser Sortiment
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {categories.map((category, index) => (
            <div
              key={category.title}
              className="p-6 bg-primary/20 rounded-sm hover:bg-primary/30 transition-colors"
            >
              <span className="text-3xl mb-4 block">{category.icon}</span>
              <h3 className="font-heading text-xl text-contrast mb-2">
                {category.title}
              </h3>
              <p className="text-contrast/70 text-sm">{category.description}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* Philosophy */}
      <Section dark>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          <div>
            <Leaf className="mx-auto mb-4 text-primary" size={40} />
            <h3 className="font-heading text-xl text-secondary mb-3">
              Regional
            </h3>
            <p className="text-secondary/70 text-sm">
              Kurze Wege, frische Produkte. Wir beziehen direkt von Bauern und
              Produzenten aus der Umgebung.
            </p>
          </div>
          <div>
            <Heart className="mx-auto mb-4 text-primary" size={40} />
            <h3 className="font-heading text-xl text-secondary mb-3">
              Saisonal
            </h3>
            <p className="text-secondary/70 text-sm">
              Was die Saison hergibt, landet bei uns im Regal. Natürlich und im
              Einklang mit der Natur.
            </p>
          </div>
          <div>
            <MapPin className="mx-auto mb-4 text-primary" size={40} />
            <h3 className="font-heading text-xl text-secondary mb-3">
              Für die Gemeinde
            </h3>
            <p className="text-secondary/70 text-sm">
              Ein Dorfladen für Mürren – von Mürren. Ein Ort der Begegnung und
              des Austauschs.
            </p>
          </div>
        </div>
      </Section>

      {/* Producers */}
      <Section>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="font-heading text-3xl md:text-4xl text-contrast mb-6">
              Unsere Produzenten
            </h2>
            <p className="text-contrast/70 mb-6 leading-relaxed">
              Hinter jedem Produkt steht ein Gesicht. Wir kennen unsere
              Lieferanten persönlich und wissen, woher unsere Ware kommt. Das
              ist Qualität, die man schmecken kann.
            </p>
            <Link
              href="/ueber-uns"
              className="inline-flex items-center gap-2 text-accent font-medium hover:gap-3 transition-all"
            >
              Mehr über uns
              <ArrowRight size={16} />
            </Link>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div className="aspect-square bg-muted/30 rounded-sm flex items-center justify-center">
              <span className="text-contrast/30 text-sm">producer-01.jpg</span>
            </div>
            <div className="aspect-square bg-muted/30 rounded-sm flex items-center justify-center">
              <span className="text-contrast/30 text-sm">producer-02.jpg</span>
            </div>
          </div>
        </div>
      </Section>

      {/* Gallery */}
      <Section className="!py-0">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {["local-products.jpg", "fresh-bread.jpg"].map((img) => (
            <div
              key={img}
              className="aspect-square bg-muted/30 rounded-sm flex items-center justify-center"
            >
              <span className="text-contrast/30 text-sm">{img}</span>
            </div>
          ))}
          <div className="aspect-square bg-muted/30 rounded-sm flex items-center justify-center">
            <span className="text-contrast/30 text-sm">products-03.jpg</span>
          </div>
          <div className="aspect-square bg-muted/30 rounded-sm flex items-center justify-center">
            <span className="text-contrast/30 text-sm">products-04.jpg</span>
          </div>
        </div>
      </Section>

      {/* CTA */}
      <Section>
        <div className="text-center">
          <h2 className="font-heading text-3xl md:text-4xl text-contrast mb-6">
            Schau vorbei
          </h2>
          <p className="text-contrast/70 mb-8 max-w-xl mx-auto">
            Wir freuen uns auf Deinen Besuch. Oder komm ins Bistro – die
            Speisekarte orientiert sich an dem, was wir im Laden haben.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/bistro"
              className="px-6 py-3 bg-contrast text-secondary font-medium rounded-sm hover:bg-accent transition-colors"
            >
              Zum Bistro
            </Link>
            <Link
              href="/kontakt"
              className="px-6 py-3 border border-contrast/30 text-contrast font-medium rounded-sm hover:border-accent hover:text-accent transition-colors"
            >
              Kontakt & Anfahrt
            </Link>
          </div>
        </div>
      </Section>
    </>
  );
}
