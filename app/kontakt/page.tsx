import Section from "@/components/Section";
import OpeningHours from "@/components/OpeningHours";
import ContactForm from "@/components/ContactForm";
import { MapPin, Phone, Mail } from "lucide-react";

export default function KontaktPage() {
  return (
    <>
      {/* Header */}
      <section className="pt-32 pb-16 bg-primary/20">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl text-contrast">
            Kontakt
          </h1>
          <p className="mt-4 text-contrast/70 text-lg max-w-xl mx-auto">
            Wir freuen uns auf Deinen Besuch oder Deine Nachricht.
          </p>
        </div>
      </section>

      {/* Contact Info & Form */}
      <Section>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Contact Info */}
          <div>
            <h2 className="font-heading text-2xl md:text-3xl text-contrast mb-8">
              So erreichst Du uns
            </h2>

            {/* Address */}
            <div className="mb-8">
              <div className="flex items-start gap-4 mb-4">
                <MapPin size={24} className="text-accent mt-1 shrink-0" />
                <div>
                  <h3 className="font-medium text-contrast mb-1">Adresse</h3>
                  <p className="text-contrast/70">
                    Zaun 990B<br />
                    3825 Mürren<br />
                    Schweiz
                  </p>
                </div>
              </div>
            </div>

            {/* Phone */}
            <div className="mb-8">
              <div className="flex items-center gap-4">
                <Phone size={20} className="text-accent shrink-0" />
                <div>
                  <h3 className="font-medium text-contrast mb-1">Telefon</h3>
                  <a
                    href="tel:+41335258817"
                    className="text-contrast/70 hover:text-accent transition-colors"
                  >
                    033 525 88 17
                  </a>
                </div>
              </div>
            </div>

            {/* Email */}
            <div className="mb-12">
              <div className="flex items-center gap-4">
                <Mail size={20} className="text-accent shrink-0" />
                <div>
                  <h3 className="font-medium text-contrast mb-1">E-Mail</h3>
                  <a
                    href="mailto:muh@alti-metzg.ch"
                    className="text-contrast/70 hover:text-accent transition-colors"
                  >
                    muh@alti-metzg.ch
                  </a>
                </div>
              </div>
            </div>

            {/* Opening Hours */}
            <div>
              <h3 className="font-heading text-xl text-contrast mb-6">
                Öffnungszeiten
              </h3>
              <OpeningHours />
            </div>
          </div>

          {/* Contact Form */}
          <div>
            <h2 className="font-heading text-2xl md:text-3xl text-contrast mb-8">
              Nachricht senden
            </h2>
            <ContactForm />
          </div>
        </div>
      </Section>

      {/* Map */}
      <Section className="!pt-0">
        <h2 className="font-heading text-2xl md:text-3xl text-contrast mb-8 text-center">
          Anfahrt
        </h2>
        <div className="aspect-video bg-muted/30 rounded-sm flex items-center justify-center">
          <div className="text-center text-contrast/40">
            <MapPin size={48} className="mx-auto mb-4" />
            <p className="text-sm mb-2">Google Maps Embed</p>
            <p className="text-xs max-w-md">
              Mürren ist ein autofreies Bergdorf. Erreichbar mit der Bahn ab
              Interlaken Ost via Lauterbrunnen, dann mit der Seilbahn nach
              Mürren.
            </p>
          </div>
        </div>
      </Section>
    </>
  );
}
