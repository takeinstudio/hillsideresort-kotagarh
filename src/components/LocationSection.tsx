import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { MapPin, Navigation, Car, Train, Plane } from "lucide-react";
import SectionParticles from "./SectionParticles";

const distances = [
  { place: "Rajsunakhala", dist: "4 km", icon: Car },
  { place: "Nayagarh", dist: "30 km", icon: Train },
  { place: "Bhubaneswar", dist: "65 km", icon: Plane },
];

const LocationSection = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section
      className="section-padding relative overflow-hidden"
      ref={ref}
      style={{
        background: "linear-gradient(180deg, hsl(30, 15%, 8%) 0%, hsl(24, 20%, 5%) 100%)",
      }}
    >
      {/* Cinema Particles */}
      <div className="opacity-30">
        <SectionParticles />
      </div>

      {/* Premium Radial Gold Center Glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(circle at 50% 50%, rgba(224, 161, 29, 0.12) 0%, transparent 70%)",
          zIndex: 1,
        }}
      />

      <div className="container mx-auto relative px-4" style={{ zIndex: 2 }}>
        <div className="text-center mb-12">
          <span
            className="inline-block px-4 py-1.5 rounded-full text-xs font-bold tracking-[0.2em] uppercase mb-4 shadow-lg shadow-amber-900/20"
            style={{ background: "#e0a11d", color: "black", border: "none" }}
          >
            Find Us
          </span>
          <h2 className="section-title text-white">
            Location &amp; <span className="text-gradient-gold">Accessibility</span>
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-transparent via-[#e0a11d] to-transparent mx-auto mt-8 opacity-40" />
        </div>

        <div
          className={`grid grid-cols-1 lg:grid-cols-2 gap-10 items-center max-w-6xl mx-auto ${isVisible ? "animate-fade-in-up" : "opacity-0"}`}
          style={{ animationFillMode: "forwards" }}
        >
          {/* Map Section */}
          <div className="relative group">
            <div className="relative rounded-[2rem] overflow-hidden shadow-2xl h-[380px] border border-white/5 transition-all duration-500">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3752.123!2d84.947!3d20.123!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjDCsDA3JzIzLjAiTiA4NMKwNTYnNDkuMiJF!5e0!3m2!1sen!2sin!4v1"
                className="w-full h-full border-0 grayscale-[0.2] transition-all duration-700"
                loading="lazy"
                title="Hill Side Kotagarh Park location"
                allowFullScreen
              />
              <div className="absolute inset-0 pointer-events-none shadow-[inset_0_0_80px_rgba(0,0,0,0.3)]" />
            </div>
            
            <a 
              href="https://maps.google.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="absolute bottom-6 right-6 px-6 py-3 bg-[#e0a11d] text-white rounded-xl shadow-xl hover:-translate-y-1 active:scale-95 transition-all flex items-center gap-2 font-bold text-xs tracking-wider uppercase group/btn"
            >
              <Navigation className="w-4 h-4" />
              Directions
            </a>
          </div>

          {/* Info Section */}
          <div className="flex flex-col gap-8">
            {/* Address Card */}
            <div
              className="rounded-[2.5rem] p-8 relative overflow-hidden group shadow-2xl"
              style={{
                background: "rgba(255, 252, 248, 0.95)", // High-contrast Ivory
                border: "1.5px solid rgba(224, 161, 29, 0.2)",
                boxShadow: "0 20px 50px rgba(0,0,0,0.3)",
              }}
            >
              <div className="flex items-start gap-5 mb-8">
                <div className="w-12 h-12 rounded-xl bg-[#e0a11d]/10 flex items-center justify-center flex-shrink-0">
                   <MapPin className="w-6 h-6" style={{ color: "#e0a11d" }} />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2 font-serif" style={{ color: "hsl(30,40%,15%)" }}>Resort Address</h3>
                  <p className="text-base leading-relaxed opacity-80" style={{ color: "hsl(30,30%,35%)" }}>
                    Chandpur - Rajsunakhala Rd, <br />Kotagarh, Odisha 752065
                  </p>
                </div>
              </div>

              {/* Distances Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-6">
                {distances.map((d) => (
                  <div
                    key={d.place}
                    className="flex flex-col items-center justify-center p-4 rounded-[1.5rem] text-center border border-amber-50"
                    style={{ background: "rgba(212,175,55,0.08)" }}
                  >
                    <d.icon className="w-5 h-5 mb-3 text-[#e0a11d] opacity-50" />
                    <span className="text-2xl font-black text-gradient-gold">{d.dist}</span>
                    <span className="text-[10px] font-bold tracking-[0.1em] uppercase opacity-40">from {d.place}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Accessibility Note */}
            <div className="px-8 py-4 rounded-full bg-white/5 border border-white/10 flex items-center gap-3 w-fit text-sm text-white/50 font-medium">
               <div className="w-2 h-2 rounded-full bg-green-500 shadow-[0_0_10px_rgba(34,197,94,0.4)]" />
               Well-connected via State Highways and Public Transport
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LocationSection;
