import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import {
  Snowflake, UtensilsCrossed, Sparkles, Lightbulb, Speaker, Users,
  Zap, Car, ShieldCheck, Leaf
} from "lucide-react";
import SectionParticles from "./SectionParticles";

const facilities = [
  { icon: Snowflake, title: "AC Rooms", desc: "Premium air-conditioned stay for guests" },
  { icon: UtensilsCrossed, title: "Luxury Catering", desc: "Multi-cuisine catering services" },
  { icon: Sparkles, title: "Stage Decoration", desc: "Premium stage & floral décor" },
  { icon: Lightbulb, title: "Advanced Lighting", desc: "State-of-the-art lighting setup" },
  { icon: Speaker, title: "Audio-Visual Equipment", desc: "Professional sound & display" },
  { icon: Users, title: "Large Dining Area", desc: "Spacious dining for 500+ guests" },
  { icon: Zap, title: "DG Backup", desc: "Uninterrupted diesel generator power" },
  { icon: Car, title: "Huge Parking", desc: "Ample parking for 200+ vehicles" },
  { icon: ShieldCheck, title: "24×7 Security", desc: "Round-the-clock surveillance" },
  { icon: Leaf, title: "Hygienic Environment", desc: "Clean & eco-friendly premises" },
];

const FacilitiesSection = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section
      id="facilities"
      className="section-padding relative overflow-hidden"
      style={{
        background: "linear-gradient(180deg, hsl(30, 20%, 8%) 0%, hsl(24, 25%, 5%) 100%)",
      }}
    >
      {/* Subtle sparks with low opacity for dark theme */}
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

      <div className="container mx-auto relative" style={{ zIndex: 2 }} ref={ref}>
        <div className="text-center mb-16">
          <span
            className="inline-block px-4 py-1.5 rounded-full text-xs font-semibold tracking-[0.2em] uppercase mb-4 shadow-lg shadow-amber-900/20"
            style={{
              background: "#e0a11d",
              color: "black",
              border: "none",
            }}
          >
            World-Class Amenities
          </span>
          <h2 className="section-title text-white">
            Luxury <span className="text-gradient-gold">Facilities</span>
          </h2>
          <p className="section-subtitle mt-4 max-w-2xl mx-auto text-white/60 leading-relaxed">
            Everything you need for a flawless event, from premium stays to state-of-the-art equipment
          </p>
          <div className="w-20 h-1 bg-gradient-to-r from-transparent via-[#e0a11d] to-transparent mx-auto mt-8 opacity-50" />
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-5 md:gap-8">
          {facilities.map((item, i) => (
            <div
              key={item.title}
              className={`group relative overflow-hidden rounded-[2rem] p-6 md:p-8 text-center transition-all duration-500 hover:-translate-y-2 ${
                isVisible ? "animate-fade-in-up" : "opacity-0"
              }`}
              style={{
                animationDelay: `${i * 70}ms`,
                animationFillMode: "forwards",
                background: "rgba(255, 252, 248, 0.95)", // Solid ivory/blemish white
                backdropFilter: "blur(12px)",
                border: "1.5px solid rgba(224, 161, 29, 0.3)",
                boxShadow: "0 15px 45px rgba(0,0,0,0.4), inset 0 0 0 1px rgba(255,255,255,0.8)",
              }}
            >
              {/* Hover Glow Effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-[#e0a11d]/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              {/* Bottom Animated Border */}
              <div className="absolute left-1/4 right-1/4 bottom-0 h-1 bg-[#e0a11d] origin-center scale-x-0 group-hover:scale-x-100 transition-transform duration-500 ease-out rounded-t-full shadow-[0_0_15px_#e0a11d]" />

              <div
                className="w-14 h-14 mx-auto rounded-2xl flex items-center justify-center mb-6 transition-all duration-500 group-hover:rotate-[10deg] group-hover:scale-110 shadow-md"
                style={{ 
                  background: "rgba(224, 161, 29, 0.1)",
                  border: "1px solid rgba(224, 161, 29, 0.2)"
                }}
              >
                <item.icon className="w-7 h-7" style={{ color: "#e0a11d" }} />
              </div>
              
              <h3 className="font-bold text-base md:text-lg mb-2 text-[#3c2300] group-hover:text-[#e0a11d] transition-colors duration-300">
                {item.title}
              </h3>
              <p className="text-xs md:text-sm leading-relaxed text-[#60451a] group-hover:text-[#e0a11d]/80 transition-colors duration-500">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FacilitiesSection;
