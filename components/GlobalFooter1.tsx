"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function GlobalFooter1() {
  return (
    <footer style={{
      background: "#0F0E0C",
      padding: "60px 40px",
      borderTop: "1px solid #B08D57"
    }}>
      <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
        {/* Top section */}
        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
          gap: "60px",
          marginBottom: "60px"
        }}>
          {/* Brand */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3 style={{
              fontFamily: "Cormorant Garamond, Georgia, serif",
              fontSize: "32px",
              fontWeight: 400,
              color: "#FFFFFF",
              marginBottom: "12px",
              letterSpacing: "-0.02em"
            }}>
              Alti Metzg
            </h3>
            <p style={{
              fontFamily: "Inter, system-ui, sans-serif",
              fontSize: "14px",
              fontWeight: 300,
              color: "rgba(255,255,255,0.6)",
              lineHeight: 1.6
            }}>
              Zaun 990B
              <br />
              3825 Mürren
            </p>
          </motion.div>

          {/* Navigation */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <p style={{
              fontFamily: "Inter, system-ui, sans-serif",
              fontSize: "10px",
              letterSpacing: "0.3em",
              textTransform: "uppercase",
              color: "#B08D57",
              marginBottom: "20px"
            }}>
              Unsere Seiten
            </p>
            <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
              <Link href="/dorfladen" style={{
                fontFamily: "Inter, system-ui, sans-serif", fontSize: "14px",
                color: "#FFFFFF", textDecoration: "none",
                transition: "all 0.3s ease", display: "flex", alignItems: "center", gap: "8px"
              }}>
                <span style={{ width: "8px", height: "1px", background: "#B08D57", borderRadius: "50%" }} />
                Dorfladen
              </Link>
              <Link href="/bistro" style={{
                fontFamily: "Inter, system-ui, sans-serif", fontSize: "14px",
                color: "#FFFFFF", textDecoration: "none",
                transition: "all 0.3s ease", display: "flex", alignItems: "center", gap: "8px"
              }}>
                <span style={{ width: "8px", height: "1px", background: "#B08D57", borderRadius: "50%" }} />
                Bistro
              </Link>
              <Link href="/carnotzet" style={{
                fontFamily: "Inter, system-ui, sans-serif", fontSize: "14px",
                color: "#FFFFFF", textDecoration: "none",
                transition: "all 0.3s ease", display: "flex", alignItems: "center", gap: "8px"
              }}>
                <span style={{ width: "8px", height: "1px", background: "#B08D57", borderRadius: "50%" }} />
                Carnotzet
              </Link>
              <Link href="/kontakt" style={{
                fontFamily: "Inter, system-ui, sans-serif", fontSize: "14px",
                color: "#FFFFFF", textDecoration: "none",
                transition: "all 0.3s ease", display: "flex", alignItems: "center", gap: "8px"
              }}>
                <span style={{ width: "8px", height: "1px", background: "#B08D57", borderRadius: "50%" }} />
                Kontakt
              </Link>
            </div>
          </motion.div>

          {/* Contact */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <p style={{
              fontFamily: "Inter, system-ui, sans-serif",
              fontSize: "10px",
              letterSpacing: "0.3em",
              textTransform: "uppercase",
              color: "rgba(255,255,255,0.3)",
              marginBottom: "20px"
            }}>
              Kontakt
            </p>
            <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
              <a href="tel:+41335258817" style={{
                fontFamily: "Inter, system-ui, sans-serif", fontSize: "15px",
                color: "#FFFFFF", textDecoration: "none",
                transition: "opacity 0.3s ease"
              }}>033 525 88 17</a>
              <a href="mailto:muh@alti-metzg.ch" style={{
                fontFamily: "Inter, system-ui, sans-serif", fontSize: "15px",
                color: "#FFFFFF", textDecoration: "none",
                transition: "opacity 0.3s ease"
              }}>muh@alti-metzg.ch</a>
            </div>
          </motion.div>

          {/* Social */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <p style={{
              fontFamily: "Inter, system-ui, sans-serif",
              fontSize: "10px",
              letterSpacing: "0.3em",
              textTransform: "uppercase",
              color: "rgba(255,255,255,0.3)",
              marginBottom: "20px"
            }}>
              Social
            </p>
            <div style={{ display: "flex", gap: "20px" }}>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" style={{
                fontFamily: "Inter, system-ui, sans-serif", fontSize: "13px",
                color: "rgba(255,255,255,0.6)", textDecoration: "none", transition: "opacity 0.3s ease"
              }}>Instagram</a>
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" style={{
                fontFamily: "Inter, system-ui, sans-serif", fontSize: "13px",
                color: "rgba(255,255,255,0.6)", textDecoration: "none", transition: "opacity 0.3s ease"
              }}>Facebook</a>
            </div>
          </motion.div>
        </div>

        {/* Bottom bar */}
        <div style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          paddingTop: "40px",
          borderTop: "1px solid rgba(255,255,255,0.08)",
          flexWrap: "wrap",
          gap: "20px"
        }}>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            style={{
              fontFamily: "Inter, system-ui, sans-serif",
              fontSize: "12px",
              color: "rgba(255,255,255,0.35)"
            }}
          >
            © {new Date().getFullYear()} Alti Metzg. Alle Rechte vorbehalten.
          </motion.p>
          <div style={{ display: "flex", gap: "24px" }}>
            <Link href="/impressum" style={{
              fontFamily: "Inter, system-ui, sans-serif", fontSize: "12px",
              color: "rgba(255,255,255,0.5)", textDecoration: "none", transition: "opacity 0.3s ease"
            }}>Impressum</Link>
            <Link href="/datenschutz" style={{
              fontFamily: "Inter, system-ui, sans-serif", fontSize: "12px",
              color: "rgba(255,255,255,0.5)", textDecoration: "none", transition: "opacity 0.3s ease"
            }}>Datenschutz</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
