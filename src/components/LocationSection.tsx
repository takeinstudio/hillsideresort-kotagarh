import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { MapPin, Navigation } from "lucide-react";
import SectionParticles from "./SectionParticles";

const distances = [
  { place: "Rajsunakhala", dist: "4 km" },
  { place: "Nayagarh", dist: "30 km" },
  { place: "Bhubaneswar", dist: "65 km" },
];

const LocationSection = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section
      className="section-padding relative overflow-hidden"
      ref={ref}
      style={{
        background: "linear-gradient(135deg, hsl(43,65%,92%) 0%, hsl(38,55%,86%) 50%, hsl(45,70%,90%) 100%)",
      }}
    >
      <SectionParticles />
      <div
        className="absolute inset-0 pointer-events-none"
        style={{ background: "radial-gradient(ellipse at 50% 40%, rgba(212,175,55,0.20) 0%, transparent 65%)", zIndex: 1 }}
      />
      <div className="container mx-auto relative" style={{ zIndex: 2 }}>
        <div className="text-center mb-12">
          <span
            className="inline-block px-4 py-1.5 rounded-full text-sm font-medium tracking-wider uppercase mb-4"
            style={{ background: "#e0a11d", color: "white", border: "none" }}
          >
            Find Us
          </span>
          <h2 className="section-title" style={{ color: "hsl(30,40%,15%)" }}>
            Location &amp; <span className="text-gradient-gold">Accessibility</span>
          </h2>
        </div>

        <div
          className={`grid grid-cols-1 lg:grid-cols-2 gap-8 ${isVisible ? "animate-fade-in-up" : "opacity-0"}`}
          style={{ animationFillMode: "forwards" }}
        >
          {/* Map */}
          <div className="rounded-2xl overflow-hidden shadow-lg h-[400px]" style={{ border: "1px solid rgba(212,175,55,0.30)" }}>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3752.123!2d84.947!3d20.123!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjDCsDA3JzIzLjAiTiA4NMKwNTYnNDkuMiJF!5e0!3m2!1sen!2sin!4v1"
              className="w-full h-full border-0"
              loading="lazy"
              title="Hill Side Kotagarh Park location"
              allowFullScreen
            />
          </div>

          {/* Info */}
          <div className="flex flex-col justify-center">
            <div
              className="rounded-2xl p-8 mb-6 transition-all hover:shadow-xl group relative overflow-hidden"
              style={{
                background: "rgba(255, 252, 248, 0.75)", // Blemish white
                backdropFilter: "blur(12px)",
                border: "1px solid rgba(255,255,255,0.8)",
                boxShadow: "0 4px 20px rgba(180,130,0,0.06)",
              }}
            >
              <div className="absolute left-0 bottom-0 w-full h-1 bg-gradient-to-r from-amber-400 to-amber-600 origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500 ease-out" />
              <div className="flex items-start gap-4 mb-6">
                <MapPin className="w-6 h-6 mt-1 flex-shrink-0" style={{ color: "hsl(36,75%,38%)" }} />
                <div>
                  <h3 className="font-semibold text-lg mb-1" style={{ color: "hsl(30,40%,15%)" }}>Address</h3>
                  <p style={{ color: "hsl(30,30%,35%)" }}>Chandpur - Rajsunakhala Rd, Kotagarh, Odisha 752065</p>
                </div>
              </div>
              <div className="space-y-3">
                {distances.map((d) => (
                  <div
                    key={d.place}
                    className="flex items-center gap-3 px-4 py-3 rounded-xl"
                    style={{ background: "rgba(212,175,55,0.12)" }}
                  >
                    <Navigation className="w-4 h-4" style={{ color: "hsl(36,75%,38%)" }} />
                    <span className="font-medium" style={{ color: "hsl(30,40%,20%)" }}>{d.dist}</span>
                    <span style={{ color: "hsl(30,30%,40%)" }}>from {d.place}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LocationSection;
