import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

const navLinks = [
  { label: "Home", href: "#hero" },
  { label: "Events", href: "#events" },
  { label: "Facilities", href: "#facilities" },
  { label: "Gallery", href: "#gallery" },
  { label: "Pricing", href: "#pricing" },
  { label: "Booking", href: "#booking" },
  { label: "Contact", href: "#contact" },
];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "glass py-3 shadow-xl"
          : "bg-transparent py-5"
      }`}
    >
      <div className="container mx-auto flex items-center justify-between px-4 md:px-8">
        <a href="#hero" className="flex flex-col">
          <span className="text-xl md:text-2xl font-serif font-bold text-gradient-gold">
            Hill Side
          </span>
          <span className="text-[10px] md:text-xs tracking-[0.2em] uppercase text-muted-foreground">
            Kotagarh Park & Kalyan Mandap
          </span>
        </a>

        {/* Desktop Nav */}
        <div className="hidden lg:flex items-center gap-1">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="px-4 py-2 text-sm font-medium text-foreground/80 hover:text-primary transition-colors rounded-full hover:bg-primary/10"
            >
              {link.label}
            </a>
          ))}
          <a
            href="#booking"
            className="ml-4 px-6 py-2.5 rounded-full gradient-gold text-primary-foreground font-semibold text-sm shadow-md hover:shadow-lg transition-all hover:scale-105"
          >
            Book Now
          </a>
        </div>

        {/* Mobile Toggle */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="lg:hidden p-2 rounded-full hover:bg-primary/10 transition-colors"
        >
          {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="lg:hidden glass mt-2 mx-4 rounded-2xl p-4 animate-scale-in">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setMobileOpen(false)}
              className="block px-4 py-3 text-sm font-medium text-foreground/80 hover:text-primary transition-colors rounded-xl hover:bg-primary/10"
            >
              {link.label}
            </a>
          ))}
          <a
            href="#booking"
            onClick={() => setMobileOpen(false)}
            className="block mt-2 px-6 py-3 rounded-full gradient-gold text-primary-foreground font-semibold text-sm text-center"
          >
            Book Now
          </a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
