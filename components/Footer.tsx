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
    <footer className="bg-contrast text-secondary">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Logo & Description */}
          <div>
            <Link href="/" className="font-heading text-2xl text-primary">
              Alti Metzg
            </Link>
            <p className="mt-4 text-secondary/70 text-sm leading-relaxed">
              Dorfladen und Bistro in Mürren. Wo einst eine alte Metzgerei war,
              erwartet Dich heute lokales, saisonales und authentisches.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-heading text-lg text-primary mb-4">Navigation</h4>
            <ul className="space-y-2">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-secondary/70 hover:text-secondary transition-colors text-sm"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-heading text-lg text-primary mb-4">Kontakt</h4>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-3 text-secondary/70">
                <MapPin size={18} className="mt-0.5 shrink-0" />
                <span>
                  Zaun 990B<br />
                  3825 Mürren, Schweiz
                </span>
              </li>
              <li className="flex items-center gap-3 text-secondary/70">
                <Phone size={16} className="shrink-0" />
                <a href="tel:+41335258817" className="hover:text-secondary transition-colors">
                  033 525 88 17
                </a>
              </li>
              <li className="flex items-center gap-3 text-secondary/70">
                <Mail size={16} className="shrink-0" />
                <a href="mailto:muh@alti-metzg.ch" className="hover:text-secondary transition-colors">
                  muh@alti-metzg.ch
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-secondary/10 text-center text-secondary/50 text-sm">
          © {currentYear} Alti Metzg. Alle Rechte vorbehalten.
        </div>
      </div>
    </footer>
  );
}
