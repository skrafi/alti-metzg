"use client";

import Link from "next/link";
import { Phone, Mail, MapPin } from "lucide-react";

const navLinks = [
  { href: "/dorfladen", label: "Dorfladen" },
  { href: "/bistro", label: "Bistro" },
  { href: "/carnotzet", label: "Carnotzet" },
  { href: "/ueber-uns", label: "Über uns" },
  { href: "/kontakt", label: "Kontakt" },
];

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer
      className="bg-stone text-charcoal"
      style={{
        backgroundColor: "var(--stone)",
        color: "var(--charcoal)"
      }}
    >
      {/* Top border */}
      <div className="h-px bg-charcoal/10" style={{ backgroundColor: "rgba(30,30,28,0.1)" }} />

      <div className="max-w-7xl mx-auto px-6 lg:px-16 py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">

          {/* Logo & Tagline */}
          <div>
            <Link href="/" className="inline-block mb-6">
              <div
                className="w-10 h-10 rounded-full border border-charcoal/20 flex items-center justify-center"
                style={{ borderColor: "rgba(30,30,28,0.2)" }}
              >
                <span className="font-display text-base" style={{ color: "var(--charcoal)" }}>AM</span>
              </div>
            </Link>
            <p className="body-sm mb-6 max-w-xs" style={{ color: "var(--charcoal)" }}>
              Ein Ort für Einheimische. Und für jene, die es werden möchten.
            </p>
            <div className="flex items-center gap-2 text-xs" style={{ color: "var(--aged-brass)" }}>
              <span>★★★★★</span>
              <span>4.7</span>
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="eyebrow mb-6">Navigation</h4>
            <ul className="space-y-3">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="body-sm hover:text-aged-brass transition-colors"
                    style={{ color: "var(--charcoal)" }}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Öffnungszeiten */}
          <div>
            <h4 className="eyebrow mb-6">Öffnungszeiten</h4>
            <div className="space-y-2 text-sm" style={{ color: "var(--charcoal)" }}>
              <p><span className="opacity-60">Di–Do:</span> 08:00–18:45</p>
              <p><span className="opacity-60">Fr–Sa:</span> 08:00–19:15</p>
              <p><span className="opacity-60">So:</span> 08:00–18:45</p>
              <p className="text-xs mt-3 opacity-50">Montag Ruhetag</p>
            </div>
          </div>

          {/* Kontakt */}
          <div>
            <h4 className="eyebrow mb-6">Kontakt</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3 group">
                <MapPin size={18} className="mt-0.5 shrink-0 stroke-1" style={{ color: "var(--aged-brass)" }} />
                <span className="body-sm group-hover:text-aged-brass transition-colors" style={{ color: "var(--charcoal)" }}>
                  Zaun 990B<br />
                  3825 Mürren
                </span>
              </li>
              <li className="flex items-center gap-3 group">
                <Phone size={16} className="shrink-0 stroke-1" style={{ color: "var(--aged-brass)" }} />
                <a href="tel:+41335258817" className="body-sm hover:text-aged-brass transition-colors" style={{ color: "var(--charcoal)" }}>
                  033 525 88 17
                </a>
              </li>
              <li className="flex items-center gap-3 group">
                <Mail size={16} className="shrink-0 stroke-1" style={{ color: "var(--aged-brass)" }} />
                <a href="mailto:muh@alti-metzg.ch" className="body-sm hover:text-aged-brass transition-colors" style={{ color: "var(--charcoal)" }}>
                  muh@alti-metzg.ch
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-16 pt-8 border-t border-charcoal/10 flex flex-col sm:flex-row justify-between items-center gap-4" style={{ borderColor: "rgba(30,30,28,0.1)" }}>
          <p className="text-xs opacity-50">
            © {currentYear} Alti Metzg · Verwurzelt in Mürren
          </p>
          <div className="flex gap-6 text-xs opacity-50">
            <Link href="/datenschutz" className="hover:opacity-100 transition-opacity">Datenschutz</Link>
            <Link href="/impressum" className="hover:opacity-100 transition-opacity">Impressum</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
