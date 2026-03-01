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
    <footer className="relative bg-charcoal text-white overflow-hidden">
      {/* Decorative top border */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-forest-light/50 to-transparent" />

      <div className="max-w-7xl mx-auto px-6 py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">

          {/* Logo & Description */}
          <div className="lg:col-span-1">
            <Link href="/" className="block mb-6 group">
              <span className="font-heading text-2xl text-white inline-block">
                Alti Metzg
              </span>
            </Link>
            <p className="text-white/50 text-sm leading-relaxed max-w-xs">
              Dorfladen und Bistro in Mürren. Wo einst eine alte Metzgerei war,
              erwartet Dich lokales, saisonales und authentisches.
            </p>

            {/* Social proof */}
            <div className="mt-6 flex items-center gap-2">
              <div className="flex">
                {[...Array(5)].map((_, i) => (
                  <svg
                    key={i}
                    className="w-4 h-4 text-forest-light fill-current"
                    viewBox="0 0 20 20"
                  >
                    <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                  </svg>
                ))}
              </div>
              <span className="text-white/60 text-sm ml-1">4.7</span>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-heading text-lg text-white mb-6">Navigation</h4>
            <ul className="space-y-3">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-white/50 hover:text-white transition-colors text-sm inline-flex items-center gap-2 group"
                  >
                    <span className="w-0 h-px bg-forest-light transition-all duration-300 group-hover:w-4" />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Opening Hours Preview */}
          <div>
            <h4 className="font-heading text-lg text-white mb-6">Öffnungszeiten</h4>
            <div className="space-y-2 text-sm">
              <p className="text-white/50">
                <span className="text-white/70">Di–Do:</span> 08:00–18:45
              </p>
              <p className="text-white/50">
                <span className="text-white/70">Fr–Sa:</span> 08:00–19:15
              </p>
              <p className="text-white/50">
                <span className="text-white/70">So:</span> 08:00–18:45
              </p>
              <p className="text-white/40 text-xs mt-3">
                Montag Ruhetag
              </p>
            </div>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-heading text-lg text-white mb-6">Kontakt</h4>
            <ul className="space-y-4 text-sm">
              <li className="flex items-start gap-3 text-white/50 group">
                <MapPin size={18} className="mt-0.5 shrink-0 text-forest-light group-hover:text-forest-glow transition-colors" />
                <span className="group-hover:text-white/70 transition-colors">
                  Zaun 990B<br />
                  3825 Mürren, Schweiz
                </span>
              </li>
              <li className="flex items-center gap-3 text-white/50 group">
                <Phone size={16} className="shrink-0 text-forest-light group-hover:text-forest-glow transition-colors" />
                <a
                  href="tel:+41335258817"
                  className="hover:text-white transition-colors group-hover:text-white/70"
                >
                  033 525 88 17
                </a>
              </li>
              <li className="flex items-center gap-3 text-white/50 group">
                <Mail size={16} className="shrink-0 text-forest-light group-hover:text-forest-glow transition-colors" />
                <a
                  href="mailto:muh@alti-metzg.ch"
                  className="hover:text-white transition-colors group-hover:text-white/70"
                >
                  muh@alti-metzg.ch
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-16 pt-8 border-t border-white/5 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-white/30 text-sm">
            © {currentYear} Alti Metzg. Alle Rechte vorbehalten.
          </p>
          <p className="text-white/20 text-xs">
            Mit ❤ in Mürren
          </p>
        </div>
      </div>
    </footer>
  );
}
