import PageHero from "@/components/PageHero";
import Section from "@/components/Section";
import BackgroundText from "@/components/BackgroundText";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Heart, MapPin, Clock } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Über uns",
  description: "Die Geschichte der Alti Metzg – von der alten Metzgerei zum Dorfladen, Bistro und Carnotzet in Mürren.",
};

export default function UeberUnsPage() {
  return (
    <>
      <PageHero
        title="Über uns"
        imageSrc="/images/bistro-interior.jpg"
        imageAlt="Das Team der Alti Metzg"
      />

      {/* Story */}
      <Section>
        <div className="max-w-3xl mx-auto">
          <h2 className="font-heading text-3xl md:text-4xl text-charcoal mb-8 text-center">
            Die Geschichte der Alti Metzg
          </h2>
          <div className="prose prose-lg text-charcoal/80 mx-auto space-y-6">
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
          <div className="aspect-video bg-stone-light/50  flex items-center justify-center">
            <span className="text-charcoal/30 text-sm">old-butchery.jpg</span>
          </div>
          <div className="aspect-video bg-stone-light/50  flex items-center justify-center">
            <span className="text-charcoal/30 text-sm">metzg-today.jpg</span>
          </div>
        </div>
      </Section>

      {/* Values */}
      <Section dark>
        <div className="relative overflow-hidden">
          <BackgroundText text="MÜRREN" className="top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-white" />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center relative z-10">
          <div>
            <Heart className="mx-auto mb-4 text-forest-light" size={40} />
            <h3 className="font-heading text-xl text-white mb-3">
              Lokal & Regional
            </h3>
            <p className="text-white/60 text-sm">
              Wir beziehen unsere Produkte von Bauern und Produzenten aus der
              Region. Kurze Wege, frische Ware, persönliche Beziehungen.
            </p>
          </div>
          <div>
            <MapPin className="mx-auto mb-4 text-forest-light" size={40} />
            <h3 className="font-heading text-xl text-white mb-3">
              Für Mürren
            </h3>
            <p className="text-white/60 text-sm">
              Mürren ist unser Zuhause. Wir sind Teil dieser Gemeinde und
              möchten einen Ort schaffen, der alle willkommen heisst.
            </p>
          </div>
          <div>
            <Clock className="mx-auto mb-4 text-forest-light" size={40} />
            <h3 className="font-heading text-xl text-white mb-3">
              Nachhaltig
            </h3>
            <p className="text-white/60 text-sm">
              Zero Waste ist kein Modewort, sondern Überzeugung. Durch die
              Verbindung von Laden und Bistro vermeiden wir Verschwendung.
            </p>
          </div>
          </div>
        </div>
      </Section>

      {/* Team */}
      <Section>
        <h2 className="font-heading text-3xl md:text-4xl text-center text-charcoal mb-12">
          Das Team
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Team Member 1 */}
          <div className="text-center">
            <div className="aspect-square bg-stone-light/50  mb-4 flex items-center justify-center">
              <span className="text-charcoal/30 text-sm">team-01.jpg</span>
            </div>
            <h3 className="font-heading text-xl text-charcoal mb-1">
              Name Nachname
            </h3>
            <p className="text-gold text-sm mb-3">Rolle / Funktion</p>
            <p className="text-charcoal/50 text-sm">
              Kurze Bio des Teammitglieds. Was sie oder ihn antreibt und mit
              der Alti Metzg verbindet.
            </p>
          </div>
          {/* Team Member 2 */}
          <div className="text-center">
            <div className="aspect-square bg-stone-light/50  mb-4 flex items-center justify-center">
              <span className="text-charcoal/30 text-sm">team-02.jpg</span>
            </div>
            <h3 className="font-heading text-xl text-charcoal mb-1">
              Name Nachname
            </h3>
            <p className="text-gold text-sm mb-3">Rolle / Funktion</p>
            <p className="text-charcoal/50 text-sm">
              Kurze Bio des Teammitglieds. Was sie oder ihn antreibt und mit
              der Alti Metzg verbindet.
            </p>
          </div>
          {/* Placeholder for more team members */}
          <div className="text-center hidden lg:block">
            <div className="aspect-square bg-stone-light/50  mb-4 flex items-center justify-center">
              <span className="text-charcoal/30 text-sm">team-03.jpg</span>
            </div>
            <h3 className="font-heading text-xl text-charcoal mb-1">
              Name Nachname
            </h3>
            <p className="text-gold text-sm mb-3">Rolle / Funktion</p>
            <p className="text-charcoal/50 text-sm">
              Kurze Bio des Teammitglieds. Was sie oder ihn antreibt und mit
              der Alti Metzg verbindet.
            </p>
          </div>
        </div>
        <p className="text-center text-charcoal/40 mt-8 text-sm">
          Fotos und Bios folgen in Kürze.
        </p>
      </Section>

      {/* Mürren */}
      <Section>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="order-2 md:order-1">
            <div className="aspect-video bg-stone-light/50  flex items-center justify-center">
              <span className="text-charcoal/30 text-sm">muerren-village.jpg</span>
            </div>
          </div>
          <div className="order-1 md:order-2">
            <h2 className="font-heading text-3xl md:text-4xl text-charcoal mb-6">
              Mürren
            </h2>
            <p className="text-charcoal/60 mb-6 leading-relaxed">
              Mürren ist ein autofreies Bergdorf auf 1&apos;638 Metern über
              Meer, hoch über dem Lauterbrunnental. Ein Ort, der Ruhe,
              Natur und Gemeinschaft atmet.
            </p>
            <p className="text-charcoal/60 mb-8 leading-relaxed">
              Die Alti Metzg ist Teil dieses besonderen Ortes. Für die
              Einwohner und für die Besucher, die die Schönheit der
              Schweizer Alpen erleben möchten.
            </p>
            <Link
              href="/kontakt"
              className="inline-flex items-center gap-2 text-gold font-medium hover:gap-3 transition-all"
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
          <h2 className="font-heading text-3xl md:text-4xl text-white mb-6">
            Besuche uns
          </h2>
          <p className="text-white/60 mb-8 max-w-xl mx-auto">
            Wir freuen uns auf Deinen Besuch. Schau im Dorfladen vorbei,
            probier unser Bistro oder reserviere das Carnotzet für einen
            besonderen Abend.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/kontakt"
              className="btn-primary"
            >
              Kontakt
              <ArrowRight size={18} />
            </Link>
            <Link
              href="/dorfladen"
              className="btn-outline"
            >
              Zum Dorfladen
            </Link>
          </div>
        </div>
      </Section>
    </>
  );
}
