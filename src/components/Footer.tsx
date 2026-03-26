import { Instagram, Facebook, Phone, Mail, MapPin } from "lucide-react";
import SectionParticles from "./SectionParticles";

const navLinks = ["Home", "Events", "Facilities", "Gallery", "Pricing", "Booking", "Contact"];

const Footer = () => {
  return (
    <footer
      className="relative overflow-hidden"
      style={{
        background:
          "linear-gradient(135deg, hsl(43,65%,92%) 0%, hsl(38,55%,86%) 50%, hsl(45,70%,90%) 100%)",
      }}
    >
      {/* Floating golden spark particles */}
      <SectionParticles />

      {/* Radial amber glow & Dark Vignette */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse at 50% 30%, rgba(212,175,55,0.22) 0%, transparent 65%)",
          boxShadow: "inset 0 0 150px rgba(0,0,0,0.35)",  // Re-keeping the requested vignette
          zIndex: 1,
        }}
      />

      <div className="relative container mx-auto px-4 md:px-8 py-16" style={{ zIndex: 2 }}>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">

          {/* ── Brand ── */}
          <div>
            <h3 className="text-2xl font-serif font-bold text-gradient-gold mb-2">Hill Side</h3>
            <p
              className="text-xs tracking-[0.2em] uppercase mb-4 font-medium"
              style={{ color: "hsl(36,60%,38%)" }}
            >
              Kotagarh Park &amp; Kalyan Mandap
            </p>
            <p className="text-sm leading-relaxed" style={{ color: "hsl(30,30%,35%)" }}>
              Where celebrations meet nature. A premium event destination in the heart of Odisha.
            </p>

            {/* Social icons */}
            <div className="flex gap-3 mt-6">
              <a
                href="https://www.instagram.com/kotagarh_park/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full flex items-center justify-center transition-all hover:scale-110"
                style={{
                  background: "rgba(180,120,0,0.14)",
                  border: "1px solid rgba(180,120,0,0.28)",
                  color: "hsl(36,70%,32%)",
                }}
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="https://www.facebook.com/p/Hillside-park-resort-KOTAGARH-PARK-100088110218620/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full flex items-center justify-center transition-all hover:scale-110"
                style={{
                  background: "rgba(180,120,0,0.14)",
                  border: "1px solid rgba(180,120,0,0.28)",
                  color: "hsl(36,70%,32%)",
                }}
              >
                <Facebook className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* ── Quick Links ── */}
          <div>
            <h4
              className="font-semibold mb-5 text-sm tracking-widest uppercase"
              style={{ color: "hsl(30,40%,20%)" }}
            >
              Quick Links
            </h4>
            <div className="space-y-2">
              {navLinks.map((link) => (
                <a
                  key={link}
                  href={`#${link.toLowerCase()}`}
                  className="relative block text-sm py-0.5 w-fit group"
                  style={{ color: "hsl(30,30%,38%)" }}
                >
                  {link}
                  {/* Smooth left-to-right underline on hover */}
                  <span
                    className="absolute bottom-0 left-0 h-px origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-300"
                    style={{
                      background: "hsl(36,75%,38%)",
                      width: "100%",
                    }}
                  />
                </a>
              ))}
            </div>
          </div>

          {/* ── Contact ── */}
          <div>
            <h4
              className="font-semibold mb-5 text-sm tracking-widest uppercase"
              style={{ color: "hsl(30,40%,20%)" }}
            >
              Contact Info
            </h4>
            <div className="space-y-4 text-sm" style={{ color: "hsl(30,30%,35%)" }}>
              <div className="flex items-center gap-3 group">
                <Phone className="w-4 h-4 flex-shrink-0" style={{ color: "hsl(36,75%,38%)" }} />
                <a
                  href="tel:7008928285"
                  className="relative group-hover:text-amber-800 transition-colors"
                >
                  +91 7008928285
                  <span
                    className="absolute bottom-0 left-0 h-px w-full origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-300"
                    style={{ background: "hsl(36,75%,38%)" }}
                  />
                </a>
              </div>
              <div className="flex items-center gap-3 group">
                <Mail className="w-4 h-4 flex-shrink-0" style={{ color: "hsl(36,75%,38%)" }} />
                <a
                  href="mailto:deepakmahapatra93@gmail.com"
                  className="relative group-hover:text-amber-800 transition-colors break-all"
                >
                  deepakmahapatra93@gmail.com
                  <span
                    className="absolute bottom-0 left-0 h-px w-full origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-300"
                    style={{ background: "hsl(36,75%,38%)" }}
                  />
                </a>
              </div>
              <div className="flex items-start gap-3">
                <MapPin className="w-4 h-4 flex-shrink-0 mt-0.5" style={{ color: "hsl(36,75%,38%)" }} />
                <span>Chandpur - Rajsunakhala Rd, Kotagarh, Odisha 752065</span>
              </div>
            </div>
          </div>
        </div>

        {/* ── Bottom bar ── */}
        <div
          className="mt-12 pt-6 text-center text-xs"
          style={{
            borderTop: "1px solid rgba(180,120,0,0.25)",
            color: "hsl(30,25%,45%)",
          }}
        >
          © {new Date().getFullYear()} Hill Side Kotagarh Park &amp; Kalyan Mandap. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
