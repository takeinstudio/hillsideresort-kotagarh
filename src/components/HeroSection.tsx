import { useEffect, useState } from "react";

const particles = Array.from({ length: 18 }, (_, i) => ({
  id: i,
  left: Math.random() * 100,
  delay: Math.random() * 10,
  duration: 8 + Math.random() * 8,
  size: 2 + Math.random() * 3,
}));

const HeroSection = () => {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setLoaded(true), 100);
    return () => clearTimeout(t);
  }, []);

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* ── Static Background ── */}
      <div className="absolute inset-0">
        <img
          src="/hero/6.webp"
          alt="Hill Side Kotagarh Park – decorative lighting"
          className="w-full h-full object-cover"
          style={{
            transform: loaded ? "scale(1.04)" : "scale(1.10)",
            transition: "transform 10s cubic-bezier(0.25, 0.46, 0.45, 0.94)",
          }}
        />
        {/* Subtle top fade for navbar legibility only */}
        <div
          className="absolute inset-0"
          style={{
            background: "linear-gradient(to bottom, rgba(0,0,0,0.38) 0%, transparent 18%)",
          }}
        />
      </div>

      {/* ── Floating Particles ── */}
      {particles.map((p) => (
        <div
          key={p.id}
          className="absolute rounded-full pointer-events-none"
          style={{
            left: `${p.left}%`,
            width: p.size,
            height: p.size,
            background: "rgba(212,175,55,0.45)",
            animation: `particle-float ${p.duration}s linear ${p.delay}s infinite`,
          }}
        />
      ))}

      {/* ── Content ── */}
      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto select-none">

        {/* Badge */}
        <div
          className={`transition-all duration-700 delay-300 ${
            loaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          }`}
        >
          <span
            className="inline-block px-5 py-1.5 rounded-full text-xs font-semibold uppercase mb-6"
            style={{
              background: "rgba(212,175,55,0.18)",
              border: "1px solid rgba(212,175,55,0.55)",
              color: "hsl(43,90%,78%)",
              letterSpacing: "0.22em",
            }}
          >
            ✦ Premium Event Destination ✦
          </span>
        </div>

        {/* Headline */}
        <h1
          className={`text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-serif font-bold leading-tight mb-4 transition-all duration-700 delay-400 ${
            loaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
          }`}
          style={{
            color: "#ffffff",
            textShadow: "0 2px 16px rgba(0,0,0,0.8), 0 4px 32px rgba(0,0,0,0.5)",
          }}
        >
          Where Celebrations
          <br />
          <span
            style={{
              color: "hsl(43,95%,62%)",
              textShadow:
                "0 0 40px rgba(255,200,50,0.45), 0 2px 12px rgba(0,0,0,0.7)",
            }}
          >
            Meet Nature
          </span>
        </h1>

        {/* Decorative divider */}
        <div className="flex items-center justify-center gap-3 mb-5">
          <div className="h-px w-16 bg-gradient-to-r from-transparent to-amber-400/60" />
          <div className="w-1.5 h-1.5 rounded-full bg-amber-400/80" />
          <div className="h-px w-16 bg-gradient-to-l from-transparent to-amber-400/60" />
        </div>

        {/* Subtitle */}
        <p
          className={`text-sm sm:text-base md:text-lg max-w-2xl mx-auto mb-8 leading-relaxed transition-all duration-700 delay-500 ${
            loaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          }`}
          style={{
            color: "rgba(255,255,255,0.85)",
            textShadow: "0 1px 8px rgba(0,0,0,0.8)",
          }}
        >
          Hill Side Kotagarh Park &amp; Kalyan Mandap — Luxury Events, Scenic
          Beauty, Unforgettable Moments
        </p>

        {/* CTA Buttons */}
        <div
          className={`flex flex-col sm:flex-row gap-4 justify-center transition-all duration-700 delay-600 ${
            loaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          }`}
        >
          <a
            href="#booking"
            className="px-8 py-3.5 rounded-full font-bold text-base transition-all hover:scale-105 hover:brightness-110"
            style={{
              background:
                "linear-gradient(135deg, hsl(43,90%,56%) 0%, hsl(36,88%,42%) 100%)",
              color: "#1c0f00",
              boxShadow: "0 4px 20px rgba(212,160,0,0.45)",
            }}
          >
            Book Your Event
          </a>
          <a
            href="#events"
            className="px-8 py-3.5 rounded-full font-semibold text-base transition-all hover:scale-105"
            style={{
              background: "rgba(255,255,255,0.12)",
              border: "1.5px solid rgba(255,255,255,0.35)",
              color: "#ffffff",
            }}
          >
            Explore Venue
          </a>
        </div>
      </div>

      {/* ── Scroll Indicator ── */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2">
        <span
          className="text-xs font-medium tracking-[0.2em] uppercase animate-pulse"
          style={{ color: "rgba(255,255,255,0.70)" }}
        >
          Scroll Down
        </span>
        <div className="animate-bounce">
          <div
            className="w-6 h-10 rounded-full border-2 flex items-start justify-center pt-2"
            style={{ borderColor: "rgba(212,175,55,0.6)" }}
          >
            <div
              className="w-1 h-3 rounded-full"
              style={{ background: "hsl(43,85%,58%)" }}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
