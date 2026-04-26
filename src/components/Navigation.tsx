"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { List, X, Phone, WhatsappLogo, House, MapPin, User, Path, EnvelopeSimple } from "@phosphor-icons/react";
import { FloatingNav } from "./ui/floating-navbar";

const navItems = [
  { name: "Properties", link: "#properties", icon: <House size={14} weight="light" className="text-gold" /> },
  { name: "Areas", link: "#communities", icon: <MapPin size={14} weight="light" className="text-gold" /> },
  { name: "About", link: "#about", icon: <User size={14} weight="light" className="text-gold" /> },
  { name: "Process", link: "#process", icon: <Path size={14} weight="light" className="text-gold" /> },
];

const mobileLinks = [
  { label: "Properties", href: "#properties" },
  { label: "Areas", href: "#communities" },
  { label: "About", href: "#about" },
  { label: "Process", href: "#process" },
  { label: "Contact", href: "#contact" },
];

export default function Navigation() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <>
      {/* Desktop — Floating Nav */}
      <div className="hidden lg:block">
        <FloatingNav navItems={navItems} />
      </div>

      {/* Mobile — Hamburger */}
      <div className="lg:hidden fixed top-4 right-4 z-[5001]">
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="w-10 h-10 bg-background/80 backdrop-blur-xl border border-gold-dim flex items-center justify-center text-foreground"
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X size={20} /> : <List size={20} />}
        </button>
      </div>

      {/* Mobile brand — top left */}
      <div className="lg:hidden fixed top-4 left-4 z-[5001]">
        <a href="#" className="flex flex-col bg-background/80 backdrop-blur-xl border border-gold-dim px-3 py-2">
          <span className="font-[family-name:var(--font-playfair)] text-xs tracking-wider text-foreground">
            ENRIQUE VAZQUEZ
          </span>
        </a>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-[5000] bg-background/98 backdrop-blur-xl lg:hidden"
          >
            <div className="flex flex-col items-center justify-center min-h-[100dvh] gap-8">
              {mobileLinks.map((link, i) => (
                <motion.a
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.08 }}
                  className="font-[family-name:var(--font-playfair)] text-3xl tracking-wide text-foreground hover:text-gold transition-colors"
                >
                  {link.label}
                </motion.a>
              ))}

              <div className="flex flex-col items-center gap-4 mt-8 pt-8 border-t border-gold-dim">
                <a href="tel:+526241417513" className="flex items-center gap-2 text-muted">
                  <Phone size={18} weight="light" />
                  +52 (624) 141-7513
                </a>
                <a
                  href="https://wa.me/526241417513"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-gold"
                >
                  <WhatsappLogo size={18} weight="light" />
                  Chat on WhatsApp
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
