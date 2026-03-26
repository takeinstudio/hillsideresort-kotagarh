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
        {/* Dark Vignette Overlay for overall contrast */}
        <div
          className="absolute inset-0 z-[1]"
          style={{
            background: "linear-gradient(to bottom, rgba(0,0,0,0.6) 0%, rgba(0,0,0,0.2) 30%, rgba(0,0,0,0.2) 70%, rgba(0,0,0,0.6) 100%)",
          }}
        />
        {/* Subtle center dark scrim behind text for legibility */}
        <div
          className="absolute inset-0 z-[1]"
          style={{
            background: "radial-gradient(circle at 50% 50%, rgba(0,0,0,0.45) 0%, transparent 65%)"
          }}
        />
      </div>

      {/* ── Floating Particles ── */}
      {particles.map((p) => (
        <div
          key={p.id}
          className="absolute rounded-full pointer-events-none z-[2]"
          style={{
            left: `${p.left}%`,
            width: p.size,
            height: p.size,
            background: "rgba(224,161,29,0.35)",
            animation: `particle-float ${p.duration}s linear ${p.delay}s infinite`,
          }}
        />
      ))}

      {/* ── Content ── */}
      <div className="relative z-10 text-center px-4 max-w-5xl mx-auto select-none pt-24 md:pt-10 pb-14 md:pb-20">

        {/* Badge */}
        <div
          className={`transition-all duration-700 delay-300 ${loaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`}
        >
          <span
            className="inline-block px-4 py-1.5 rounded-full text-[9px] md:text-xs font-bold uppercase mb-4 md:mb-8 shadow-2xl shadow-black/40"
            style={{
              background: "#e0a11d",
              color: "black",
              letterSpacing: "0.22em",
            }}
          >
            ✦ Premium Event Destination ✦
          </span>
        </div>

        {/* Headline Hierarchy: 3-row restructure */}
        <div className={`transition-all duration-700 delay-400 ${loaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}>

          {/* Row 1: Hill Side */}
          <h2
            className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-serif font-medium tracking-[0.2em] md:tracking-[0.3em] mb-2 md:mb-4 opacity-100 italic drop-shadow-[0_4px_10px_rgba(0,0,0,0.9)]"
            style={{ color: "hsl(43,90%,85%)" }}
          >
            Hill Side
          </h2>

          {/* Row 2: Kotagarh */}
          <h1
            className="text-4xl sm:text-7xl md:text-8xl lg:text-9xl font-serif font-black leading-tight mb-1 md:mb-2 uppercase tracking-tighter"
            style={{
              color: "#ffffff",
              textShadow: "0 8px 30px rgba(0,0,0,1), 0 0 50px rgba(0,0,0,0.6)",
            }}
          >
            Kotagarh
          </h1>

          {/* Row 3: Park & Resort */}
          <div
            className="text-lg sm:text-3xl md:text-4xl lg:text-5xl font-serif font-bold uppercase tracking-[0.05em] md:tracking-[0.1em] mb-6 md:mb-10"
            style={{
              color: "#e0a11d",
              textShadow: "0 4px 15px rgba(0,0,0,1), 0 0 20px rgba(224,161,29,0.2)"
            }}
          >
            Park &amp; Resort
          </div>
        </div>

        {/* Tagline / Sub-headline */}
        <div
          className={`text-base sm:text-lg md:text-xl font-serif mb-10 transition-all duration-700 delay-500 ${loaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`}
          style={{
            color: "rgba(255,255,255,0.9)",
            textShadow: "0 2px 10px rgba(0,0,0,1)",
          }}
        >
          Where Celebrations <span className="text-[#e0a11d] italic">Meet Nature</span>
        </div>

        {/* Decorative divider */}
        <div className="flex items-center justify-center gap-3 mb-12">
          <div className="h-px w-24 bg-gradient-to-r from-transparent via-[#e0a11d]/60 to-transparent" />
          <div className="w-2 h-2 rounded-full bg-[#e0a11d] shadow-[0_0_15px_#e0a11d]" />
          <div className="h-px w-24 bg-gradient-to-l from-transparent via-[#e0a11d]/60 to-transparent" />
        </div>

        {/* CTA Buttons */}
        <div
          className={`flex flex-col sm:flex-row gap-5 justify-center transition-all duration-700 delay-600 ${loaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`}
        >
          <a
            href="#booking"
            className="px-12 py-4.5 rounded-full font-black text-base transition-all hover:scale-105 active:scale-95 shadow-2xl"
            style={{
              background: "#e0a11d",
              color: "#000000",
              boxShadow: "0 10px 40px rgba(224,161,29,0.3)",
            }}
          >
            Book Your Event
          </a>
          <a
            href="#events"
            className="px-12 py-4.5 rounded-full font-bold text-base transition-all hover:scale-105 active:scale-95 border-2 border-white/40 backdrop-blur-md"
            style={{
              background: "rgba(255,255,255,0.05)",
              color: "#ffffff",
              boxShadow: "0 10px 30px rgba(0,0,0,0.3)",
            }}
          >
            Explore Venue
          </a>
        </div>
      </div>

      {/* ── Scroll Indicator ── */}
      <div className="absolute bottom-2 md:bottom-10 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-1 md:gap-3 scale-75 md:scale-100">
        <span
          className="text-[9px] md:text-xs font-bold tracking-[0.3em] uppercase animate-pulse"
          style={{ color: "rgba(255,255,255,0.8)" }}
        >
          Scroll Down
        </span>
        <div className="animate-bounce">
          <div
            className="w-5 h-8 md:w-6 md:h-10 rounded-full border-2 flex items-start justify-center pt-1.5 md:pt-2"
            style={{ borderColor: "rgba(224,161,29,0.5)", background: "rgba(0,0,0,0.2)" }}
          >
            <div
              className="w-1 h-2 md:w-1.5 md:h-3 rounded-full bg-[#e0a11d] shadow-[0_0_10px_#e0a11d]"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
