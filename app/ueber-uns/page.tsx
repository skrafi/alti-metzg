import PageHero from "@/components/PageHero";
import Section from "@/components/Section";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Heart, MapPin, Clock } from "lucide-react";

export default function UeberUnsPage() {
  return (
    <>
      <PageHero
        title="Über uns"
        imageSrc="/images/team-hero.jpg"
        imageAlt="Das Team der Alti Metzg"
      />

      {/* Story */}
      <Section>
        <div className="max-w-3xl mx-auto">
          <h2 className="font-heading text-3xl md:text-4xl text-contrast mb-8 text-center">
            Die Geschichte der Alti Metzg
          </h2>
          <div className="prose prose-lg text-contrast/80 mx-auto space-y-6">
            <p>
              &ldquo;Alti Metzg&rdquo; bedeutet auf Schweizerdeutsch &ldquo;alte
              Metzgerei&rdquo;. Und genau das war dieser Ort einst: eine
              traditionelle Metzgerei im Herzen von Mürren, wo die Einwohner
              ihr Fleisch kauften und sich trafen.
            </p>
            <p>
              Als die Metzgerei schloss, blieb der Ort nicht leer. Die Idee war
              geboren: einen Dorfladen zu eröffnen, der die Lücke füllt und
              gleichzeitig etwas Neues schafft. Ein Ort für die Gemeinde, mit
              lokalen Produkten und persönlichem Service.
            </p>
            <p>
              Heute ist die Alti Metzg drei Dinge zugleich: ein Dorfladen mit
              regionalen Produkten, ein kleines Bistro mit saisonaler Küche
              und ein gemütliches Carnotzet im ehemaligen Keller. Alles
              verbunden durch die Philosophie von Regionalität, Nachhaltigkeit
              und Gemeinschaft.
            </p>
          </div>
        </div>
      </Section>

      {/* Timeline / Images */}
      <Section className="!py-0">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="aspect-video bg-muted/30 rounded-sm flex items-center justify-center">
            <span className="text-contrast/30 text-sm">old-butchery.jpg</span>
          </div>
          <div className="aspect-video bg-muted/30 rounded-sm flex items-center justify-center">
            <span className="text-contrast/30 text-sm">metzg-today.jpg</span>
          </div>
        </div>
      </Section>

      {/* Values */}
      <Section dark>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          <div>
            <Heart className="mx-auto mb-4 text-primary" size={40} />
            <h3 className="font-heading text-xl text-secondary mb-3">
              Lokal & Regional
            </h3>
            <p className="text-secondary/70 text-sm">
              Wir beziehen unsere Produkte von Bauern und Produzenten aus der
              Region. Kurze Wege, frische Ware, persönliche Beziehungen.
            </p>
          </div>
          <div>
            <MapPin className="mx-auto mb-4 text-primary" size={40} />
            <h3 className="font-heading text-xl text-secondary mb-3">
              Für Mürren
            </h3>
            <p className="text-secondary/70 text-sm">
              Mürren ist unser Zuhause. Wir sind Teil dieser Gemeinde und
              möchten einen Ort schaffen, der alle willkommen heisst.
            </p>
          </div>
          <div>
            <Clock className="mx-auto mb-4 text-primary" size={40} />
            <h3 className="font-heading text-xl text-secondary mb-3">
              Nachhaltig
            </h3>
            <p className="text-secondary/70 text-sm">
              Zero Waste ist kein Modewort, sondern Überzeugung. Durch die
              Verbindung von Laden und Bistro vermeiden wir Verschwendung.
            </p>
          </div>
        </div>
      </Section>

      {/* Team */}
      <Section>
        <h2 className="font-heading text-3xl md:text-4xl text-center text-contrast mb-12">
          Das Team
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Team Member 1 */}
          <div className="text-center">
            <div className="aspect-square bg-muted/30 rounded-sm mb-4 flex items-center justify-center">
              <span className="text-contrast/30 text-sm">team-01.jpg</span>
            </div>
            <h3 className="font-heading text-xl text-contrast mb-1">
              Name Nachname
            </h3>
            <p className="text-accent text-sm mb-3">Rolle / Funktion</p>
            <p className="text-contrast/60 text-sm">
              Kurze Bio des Teammitglieds. Was sie oder ihn antreibt und mit
              der Alti Metzg verbindet.
            </p>
          </div>
          {/* Team Member 2 */}
          <div className="text-center">
            <div className="aspect-square bg-muted/30 rounded-sm mb-4 flex items-center justify-center">
              <span className="text-contrast/30 text-sm">team-02.jpg</span>
            </div>
            <h3 className="font-heading text-xl text-contrast mb-1">
              Name Nachname
            </h3>
            <p className="text-accent text-sm mb-3">Rolle / Funktion</p>
            <p className="text-contrast/60 text-sm">
              Kurze Bio des Teammitglieds. Was sie oder ihn antreibt und mit
              der Alti Metzg verbindet.
            </p>
          </div>
          {/* Placeholder for more team members */}
          <div className="text-center hidden lg:block">
            <div className="aspect-square bg-muted/30 rounded-sm mb-4 flex items-center justify-center">
              <span className="text-contrast/30 text-sm">team-03.jpg</span>
            </div>
            <h3 className="font-heading text-xl text-contrast mb-1">
              Name Nachname
            </h3>
            <p className="text-accent text-sm mb-3">Rolle / Funktion</p>
            <p className="text-contrast/60 text-sm">
              Kurze Bio des Teammitglieds. Was sie oder ihn antreibt und mit
              der Alti Metzg verbindet.
            </p>
          </div>
        </div>
        <p className="text-center text-contrast/50 mt-8 text-sm">
          Fotos und Bios folgen in Kürze.
        </p>
      </Section>

      {/* Mürren */}
      <Section>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="order-2 md:order-1">
            <div className="aspect-video bg-muted/30 rounded-sm flex items-center justify-center">
              <span className="text-contrast/30 text-sm">muerren-village.jpg</span>
            </div>
          </div>
          <div className="order-1 md:order-2">
            <h2 className="font-heading text-3xl md:text-4xl text-contrast mb-6">
              Mürren
            </h2>
            <p className="text-contrast/70 mb-6 leading-relaxed">
              Mürren ist ein autofreies Bergdorf auf 1&apos;638 Metern über
              Meer, hoch über dem Lauterbrunnental. Ein Ort, der Ruhe,
              Natur und Gemeinschaft atmet.
            </p>
            <p className="text-contrast/70 mb-8 leading-relaxed">
              Die Alti Metzg ist Teil dieses besonderen Ortes. Für die
              Einwohner und für die Besucher, die die Schönheit der
              Schweizer Alpen erleben möchten.
            </p>
            <Link
              href="/kontakt"
              className="inline-flex items-center gap-2 text-accent font-medium hover:gap-3 transition-all"
            >
              Anfahrt & Kontakt
              <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </Section>

      {/* CTA */}
      <Section dark>
        <div className="text-center">
          <h2 className="font-heading text-3xl md:text-4xl text-secondary mb-6">
            Besuche uns
          </h2>
          <p className="text-secondary/70 mb-8 max-w-xl mx-auto">
            Wir freuen uns auf Deinen Besuch. Schau im Dorfladen vorbei,
            probier unser Bistro oder reserviere das Carnotzet für einen
            besonderen Abend.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/kontakt"
              className="px-6 py-3 bg-secondary text-contrast font-medium rounded-sm hover:bg-primary transition-colors"
            >
              Kontakt
            </Link>
            <Link
              href="/dorfladen"
              className="px-6 py-3 border border-secondary/30 text-secondary font-medium rounded-sm hover:border-primary hover:text-primary transition-colors"
            >
              Zum Dorfladen
            </Link>
          </div>
        </div>
      </Section>
    </>
  );
}
