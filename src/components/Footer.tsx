import { Instagram, Facebook, Phone, Mail, MapPin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="gradient-footer text-white/80">
      <div className="container mx-auto px-4 md:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {/* Brand */}
          <div>
            <h3 className="text-2xl font-serif font-bold text-gradient-gold mb-3">Hill Side</h3>
            <p className="text-sm text-white/50 tracking-wider uppercase mb-4">Kotagarh Park & Kalyan Mandap</p>
            <p className="text-sm text-white/60 leading-relaxed">
              Where celebrations meet nature. A premium event destination in the heart of Odisha.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-white/90 mb-4">Quick Links</h4>
            <div className="space-y-2">
              {["Home", "Events", "Facilities", "Gallery", "Pricing", "Booking", "Contact"].map((link) => (
                <a
                  key={link}
                  href={`#${link.toLowerCase()}`}
                  className="block text-sm text-white/50 hover:text-primary transition-colors"
                >
                  {link}
                </a>
              ))}
            </div>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold text-white/90 mb-4">Contact Info</h4>
            <div className="space-y-3 text-sm">
              <div className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-primary" />
                <span>+91 7008928285</span>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-primary" />
                <span>deepakmahapatra93@gmail.com</span>
              </div>
              <div className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-primary mt-0.5" />
                <span>Chandpur - Rajsunakhala Rd, Kotagarh, Odisha 752065</span>
              </div>
            </div>

            {/* Social */}
            <div className="flex gap-3 mt-6">
              <a
                href="https://www.instagram.com/kotagarh_park/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-primary/30 transition-all hover:scale-110"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="https://www.facebook.com/p/Hillside-park-resort-KOTAGARH-PARK-100088110218620/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-primary/30 transition-all hover:scale-110"
              >
                <Facebook className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 mt-12 pt-8 text-center text-xs text-white/40">
          © {new Date().getFullYear()} Hill Side Kotagarh Park & Kalyan Mandap. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
