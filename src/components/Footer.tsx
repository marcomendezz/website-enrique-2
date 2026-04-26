import { ArrowUp, Circle, WhatsappLogo, InstagramLogo, YoutubeLogo, LinkedinLogo, TiktokLogo, FacebookLogo } from "@phosphor-icons/react/dist/ssr";
import { LocationMap } from "./ui/expand-map";

const quickLinks = [
  { label: "Property Search", href: "#properties" },
  { label: "Buy", href: "#properties" },
  { label: "Sell", href: "#contact" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
];

const communityLinks = [
  "Pedregal",
  "Quivira",
  "Diamante",
  "Palmilla",
  "Cabo Bello",
  "Vista Mare",
  "San Jose del Cabo",
  "Tourist Corridor",
  "Hacienda Beach Club",
];

export default function Footer() {
  return (
    <footer className="bg-surface border-t border-gold-dim rounded-t-[4rem] mt-20 pb-10">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-10 pt-20">
        {/* Main footer */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 py-16 text-left relative z-20">
          {/* Brand */}
          <div className="lg:col-span-1 relative z-30">
            <p className="font-[family-name:var(--font-playfair)] text-lg tracking-wider text-foreground mb-2">
              ENRIQUE VAZQUEZ
            </p>
            <p className="text-xs tracking-[0.2em] text-muted uppercase mb-6">
              Luxury Real Estate Advisor
            </p>
            <p className="text-muted text-sm leading-relaxed max-w-[35ch] mb-6">
              Your gateway to luxury living in Los Cabos. Born and raised in
              Cabo San Lucas — local expertise meets world-class service.
            </p>

            <div className="mb-6 z-50">
               <LocationMap 
                  location="Cabo San Lucas, BCS" 
                  coordinates="22.8905° N, 109.9167° W"
               />
            </div>
            
            <div className="flex items-center gap-2">
              <Circle weight="fill" className="text-green-500 animate-pulse" size={10} />
              <span className="text-xs text-muted-dark uppercase tracking-widest font-mono">Market Active</span>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <p className="text-sm text-gold tracking-[0.15em] uppercase mb-6">
              Quick Links
            </p>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="cinematic-link text-muted text-sm hover:text-gold"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Communities */}
          <div>
            <p className="text-sm text-gold tracking-[0.15em] uppercase mb-6">
              Communities
            </p>
            <ul className="space-y-3">
              {communityLinks.map((name) => (
                <li key={name}>
                  <a
                    href="#communities"
                    className="cinematic-link text-muted text-sm hover:text-gold"
                  >
                    {name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div className="flex flex-col items-start">
            <p className="text-sm text-gold tracking-[0.15em] uppercase mb-6">
              Contact Us
            </p>
            <div className="space-y-4">
              <a href="tel:+526241417513" className="block text-muted text-sm hover:text-gold">+52 (624) 141-7513 (MX)</a>
              <a href="tel:+19165877585" className="block text-muted text-sm hover:text-gold">+1 (916) 587-7585 (US)</a>
              <a href="mailto:enrique@oceansideloscabos.com" className="block text-muted text-sm hover:text-gold">enrique@oceansideloscabos.com</a>
              <p className="text-muted text-sm leading-relaxed mt-4">
                Paseo del Pescador #2501<br />
                Plaza Pioneros, Local H-5<br />
                Cabo San Lucas, BS 23455
              </p>
            </div>
            
            {/* Social links */}
            <div className="flex items-center gap-4 mt-6 flex-wrap">
              <a
                href="https://wa.me/526241417513"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 border border-gold-dim flex items-center justify-center hover:border-gold hover:text-gold transition-all text-muted rounded-full"
                aria-label="WhatsApp"
              >
                <WhatsappLogo size={18} weight="light" />
              </a>
              <a
                href="https://www.instagram.com/themostinterestingincabo"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 border border-gold-dim flex items-center justify-center hover:border-gold hover:text-gold transition-all text-muted rounded-full"
                aria-label="Instagram"
              >
                <InstagramLogo size={18} weight="light" />
              </a>
              <a
                href="https://www.youtube.com/@enriquevazquezrealestate"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 border border-gold-dim flex items-center justify-center hover:border-gold hover:text-gold transition-all text-muted rounded-full"
                aria-label="YouTube"
              >
                <YoutubeLogo size={18} weight="light" />
              </a>
              <a
                href="https://www.linkedin.com/in/enrique-vazquez-a7a333228/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 border border-gold-dim flex items-center justify-center hover:border-gold hover:text-gold transition-all text-muted rounded-full"
                aria-label="LinkedIn"
              >
                <LinkedinLogo size={18} weight="light" />
              </a>
              <a
                href="https://www.tiktok.com/@enriquevazquez001"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 border border-gold-dim flex items-center justify-center hover:border-gold hover:text-gold transition-all text-muted rounded-full"
                aria-label="TikTok"
              >
                <TiktokLogo size={18} weight="light" />
              </a>
              <a
                href="https://www.facebook.com/oceansideloscabos/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 border border-gold-dim flex items-center justify-center hover:border-gold hover:text-gold transition-all text-muted rounded-full"
                aria-label="Facebook"
              >
                <FacebookLogo size={18} weight="light" />
              </a>
            </div>

            {/* Back To Top */}
            <div className="mt-8">
              <a
                href="#"
                className="cinematic-btn w-10 h-10 border border-gold-dim flex items-center justify-center hover:border-gold rounded-full"
                aria-label="Back to top"
              >
                <ArrowUp
                  size={16}
                  weight="light"
                  className="text-muted group-hover:text-gold transition-colors"
                />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-gold-dim py-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-muted-dark text-xs">
            &copy; 2026 Enrique Vazquez. All rights reserved.
          </p>
          <p className="text-muted-dark text-xs">
            Powered by Oceanside Realty Group
          </p>
        </div>
      </div>
    </footer>
  );
}
