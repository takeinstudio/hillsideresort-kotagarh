import { useEffect, useState } from "react";
import heroImage from "@/assets/hero-wedding.jpg";

const particles = Array.from({ length: 20 }, (_, i) => ({
  id: i,
  left: Math.random() * 100,
  delay: Math.random() * 8,
  duration: 6 + Math.random() * 6,
  size: 2 + Math.random() * 4,
}));

const HeroSection = () => {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setLoaded(true), 200);
    return () => clearTimeout(t);
  }, []);

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Zoom */}
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt="Hill Side Kotagarh Park luxury wedding venue at night"
          width={1920}
          height={1080}
          className={`w-full h-full object-cover transition-transform duration-[3s] ${loaded ? "scale-100" : "scale-110"}`}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/30 to-black/60" />
      </div>

      {/* Floating Particles */}
      {particles.map((p) => (
        <div
          key={p.id}
          className="absolute rounded-full bg-gold/40"
          style={{
            left: `${p.left}%`,
            width: p.size,
            height: p.size,
            animation: `particle-float ${p.duration}s linear ${p.delay}s infinite`,
          }}
        />
      ))}

      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-5xl mx-auto">
        <div
          className={`transition-all duration-1000 delay-300 ${
            loaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <span className="inline-block px-6 py-2 rounded-full glass text-sm font-medium tracking-widest uppercase mb-6 text-primary-foreground/90 border-gold/30">
            ✦ Premium Event Destination ✦
          </span>
        </div>

        <h1
          className={`text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-serif font-bold leading-tight mb-6 transition-all duration-1000 delay-500 ${
            loaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
          style={{ color: "hsl(40, 50%, 95%)" }}
        >
          Where Celebrations
          <br />
          <span className="text-gradient-gold">Meet Nature</span>
        </h1>

        <p
          className={`text-base sm:text-lg md:text-xl max-w-3xl mx-auto mb-10 leading-relaxed transition-all duration-1000 delay-700 ${
            loaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
          style={{ color: "hsl(40, 30%, 85%)" }}
        >
          Hill Side Kotagarh Park & Kalyan Mandap — Luxury Events, Scenic Beauty, Unforgettable Moments
        </p>

        <div
          className={`flex flex-col sm:flex-row gap-4 justify-center transition-all duration-1000 delay-[900ms] ${
            loaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <a
            href="#booking"
            className="px-8 py-4 rounded-full gradient-gold text-primary-foreground font-semibold text-lg shadow-xl hover:shadow-2xl transition-all hover:scale-105 glow-gold"
          >
            Book Your Event
          </a>
          <a
            href="#events"
            className="px-8 py-4 rounded-full glass font-semibold text-lg transition-all hover:scale-105"
            style={{ color: "hsl(40, 50%, 95%)" }}
          >
            Explore Venue
          </a>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 rounded-full border-2 flex items-start justify-center pt-2" style={{ borderColor: "hsl(40, 50%, 80%)" }}>
          <div className="w-1 h-3 rounded-full bg-gold animate-shimmer" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
