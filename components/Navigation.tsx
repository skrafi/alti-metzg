"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

const navLinks = [
  { href: "/dorfladen", label: "Dorfladen" },
  { href: "/bistro", label: "Bistro" },
  { href: "/carnotzet", label: "Carnotzet" },
  { href: "/ueber-uns", label: "Über uns" },
  { href: "/kontakt", label: "Kontakt" },
];

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();
  const isHome = pathname === "/";

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = isMobileMenuOpen ? "hidden" : "";
  }, [isMobileMenuOpen]);

  const showBlurredNav = !isHome || isScrolled;

  return (
    <>
      <motion.nav
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className={`fixed top-0 left-0 right-0 z-50 h-20 transition-all duration-500 ${
          showBlurredNav
            ? "nav-blur"
            : "bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-16 h-full flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="group flex items-center gap-3 min-h-[44px] min-w-[44px]">
            <div
              className={`w-9 h-9 rounded-full border flex items-center justify-center transition-all duration-500 ${
                showBlurredNav
                  ? "border-charcoal text-charcoal"
                  : "border-white/60 text-white"
              }`}
              style={{
                borderColor: showBlurredNav ? "var(--charcoal)" : "rgba(255,255,255,0.6)",
                color: showBlurredNav ? "var(--charcoal)" : "white"
              }}
            >
              <span className="font-display text-sm font-medium">AM</span>
            </div>
            <span
              className={`font-display text-lg font-medium transition-colors duration-500 ${
                showBlurredNav ? "text-charcoal" : "text-white"
              }`}
              style={{
                color: showBlurredNav ? "var(--charcoal)" : "white"
              }}
            >
              Alti Metzg
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`nav-link min-h-[44px] min-w-[44px] flex items-center ${
                  showBlurredNav
                    ? pathname === link.href
                      ? "nav-link-dark active"
                      : "nav-link-dark"
                    : pathname === link.href
                    ? "nav-link-light active"
                    : "nav-link-light"
                }`}
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Right - CTA */}
          <div className="flex items-center gap-4">
            <Link
              href="/kontakt"
              className={`hidden md:flex items-center justify-center gap-2 px-6 py-2.5 min-h-[44px] text-[11px] font-medium tracking-[0.1em] uppercase transition-all duration-300 hover:-translate-y-0.5 ${
                showBlurredNav
                  ? "bg-charcoal text-warm-white hover:bg-deep-forest"
                  : "bg-white/10 text-white border border-white/30 hover:bg-white/20"
              }`}
              style={{
                backgroundColor: showBlurredNav ? "var(--charcoal)" : "rgba(255,255,255,0.1)",
                borderColor: !showBlurredNav ? "rgba(255,255,255,0.3)" : undefined,
                color: showBlurredNav ? "var(--warm-white)" : "white"
              }}
            >
              Tisch reservieren
            </Link>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className={`lg:hidden w-12 h-12 min-w-[44px] min-h-[44px] flex items-center justify-center transition-colors rounded-lg ${
                showBlurredNav ? "text-charcoal hover:bg-charcoal/5" : "text-white hover:bg-white/10"
              }`}
              style={{
                color: showBlurredNav ? "var(--charcoal)" : "white"
              }}
              aria-label={isMobileMenuOpen ? "Menü schliessen" : "Menü öffnen"}
            >
              {isMobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-40 lg:hidden bg-warm-white"
            style={{ backgroundColor: "var(--warm-white)" }}
          >
            <div className="h-full flex flex-col items-center justify-center gap-8">
              {navLinks.map((link, index) => (
                <motion.div
                  key={link.href}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 + index * 0.05 }}
                >
                  <Link
                    href={link.href}
                    className={`text-3xl font-display tracking-tight transition-colors min-h-[44px] min-w-[44px] flex items-center ${
                      pathname === link.href
                        ? "text-aged-brass"
                        : "text-charcoal hover:text-aged-brass"
                    }`}
                    style={{
                      color: pathname === link.href ? "var(--aged-brass)" : "var(--charcoal)"
                    }}
                  >
                    {link.label}
                  </Link>
                </motion.div>
              ))}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="mt-8"
              >
                <Link
                  href="/kontakt"
                  className="flex items-center justify-center gap-2 px-6 py-4 min-h-[44px] min-w-[44px] bg-charcoal text-warm-white text-sm tracking-wider hover:bg-deep-forest transition-all"
                  style={{
                    backgroundColor: "var(--charcoal)",
                    color: "var(--warm-white)"
                  }}
                >
                  Tisch reservieren
                </Link>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
