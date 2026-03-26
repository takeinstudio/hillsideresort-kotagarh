import { useState, useEffect, useRef } from "react";
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
  const [active, setActive] = useState("#hero");

  // Track scroll position for docked vs floating state
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // IntersectionObserver – highlight active section
  useEffect(() => {
    const sectionIds = navLinks.map((l) => l.href.replace("#", ""));
    const observers: IntersectionObserver[] = [];

    sectionIds.forEach((id) => {
      const el = document.getElementById(id);
      if (!el) return;
      const obs = new IntersectionObserver(
        ([entry]) => { if (entry.isIntersecting) setActive(`#${id}`); },
        { rootMargin: "-40% 0px -55% 0px" }
      );
      obs.observe(el);
      observers.push(obs);
    });

    return () => observers.forEach((o) => o.disconnect());
  }, []);

  return (
    <>
      {/* ── Desktop dock navbar ── */}
      <div
        className={`fixed left-0 right-0 z-50 transition-all duration-500 ${scrolled ? "top-0 mx-4 mt-0" : "top-0 mx-0"
          }`}
      >
        <nav
          className="flex items-center justify-between px-5 transition-all duration-500"
          style={
            scrolled
              ? {
                background:
                  "linear-gradient(135deg, hsl(43,70%,88%) 0%, hsl(38,60%,82%) 100%)",
                borderRadius: 16,
                padding: "8px 28px",
                boxShadow:
                  "0 4px 24px rgba(180,130,0,0.22), 0 1px 0 rgba(255,255,255,0.6) inset",
                border: "1px solid rgba(212,175,55,0.35)",
              }
              : {
                background:
                  "linear-gradient(135deg, hsl(43,70%,88%) 0%, hsl(38,60%,82%) 100%)",
                borderBottom: "1px solid rgba(212,175,55,0.35)",
                borderRadius: 0,
                padding: "10px 24px",
                boxShadow:
                  "0 2px 16px rgba(180,130,0,0.15), 0 1px 0 rgba(255,255,255,0.5) inset",
              }
          }
        >
          {/* Logo */}
          <a href="#hero" className="flex flex-col shrink-0">
            <span className="text-xl md:text-2xl font-serif font-bold text-gradient-gold leading-none">
              Hill Side
            </span>
            <span
              className="text-[9px] md:text-[10px] tracking-[0.2em] uppercase leading-none mt-0.5"
              style={{ color: scrolled ? "rgba(60,35,0,0.65)" : "rgba(60,35,0,0.65)" }}
            >
              Kotagarh Park &amp; Resort
            </span>
          </a>

          {/* Desktop links */}
          <div className="hidden lg:flex items-center gap-0.5">
            {navLinks.map((link) => {
              const isActive = active === link.href;
              return (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setActive(link.href)}
                  className="relative px-3.5 py-2 text-sm font-medium transition-colors duration-200 group"
                  style={{ color: isActive ? "hsl(36,80%,28%)" : "rgba(50,25,0,0.80)" }}
                >
                  {link.label}
                  {/* Active dot */}
                  {isActive && (
                    <span
                      className="absolute bottom-0.5 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full"
                      style={{ background: "hsl(43,90%,60%)" }}
                    />
                  )}
                  {/* Hover underline – slides left to right */}
                  {!isActive && (
                    <span
                      className="absolute bottom-0.5 left-3.5 right-3.5 h-px origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-300"
                      style={{ background: "hsl(43,85%,60%)" }}
                    />
                  )}
                </a>
              );
            })}
          </div>

          {/* Book Now CTA */}
          <div className="hidden lg:flex items-center">
            <a
              href="#booking"
              className="px-5 py-2 rounded-full text-sm font-bold transition-all hover:scale-105 hover:brightness-110"
              style={{
                background: "#e0a11d",
                color: "#1c0e00",
                boxShadow: "0 3px 14px rgba(224,161,29,0.40)",
              }}
            >
              Book Now
            </a>
          </div>

          {/* Mobile hamburger */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="lg:hidden p-2 rounded-full transition-colors"
            style={{ color: scrolled ? "rgba(50,30,0,0.85)" : "#fff" }}
          >
            {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </nav>
      </div>

      {/* ── Mobile Menu ── */}
      {mobileOpen && (
        <div
          className="fixed top-16 left-4 right-4 z-50 rounded-2xl p-4 animate-scale-in"
          style={{
            background: "rgba(255,248,220,0.95)",
            backdropFilter: "blur(20px)",
            border: "1px solid rgba(212,175,55,0.30)",
            boxShadow: "0 8px 32px rgba(0,0,0,0.18)",
          }}
        >
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => { setActive(link.href); setMobileOpen(false); }}
              className="block px-4 py-3 rounded-xl text-sm font-medium transition-colors hover:bg-amber-100"
              style={{ color: active === link.href ? "hsl(36,85%,35%)" : "rgba(50,30,0,0.85)", fontWeight: active === link.href ? 700 : 500 }}
            >
              {link.label}
            </a>
          ))}
          <a
            href="#booking"
            onClick={() => setMobileOpen(false)}
            className="block mt-3 px-6 py-3 rounded-full text-sm font-bold text-center"
            style={{
              background: "#e0a11d",
              color: "#1c0e00",
            }}
          >
            Book Now
          </a>
        </div>
      )}
    </>
  );
};

export default Navbar;
