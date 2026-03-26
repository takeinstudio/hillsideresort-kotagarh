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
        background: "linear-gradient(135deg, hsl(43,65%,92%) 0%, hsl(38,55%,86%) 50%, hsl(45,70%,90%) 100%)",
      }}
    >
      {/* Floating golden sparks */}
      <SectionParticles />

      {/* Subtle radial glow in centre */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse at 50% 60%, rgba(212,175,55,0.18) 0%, transparent 70%)",
          zIndex: 1,
        }}
      />

      <div className="container mx-auto relative" style={{ zIndex: 2 }} ref={ref}>
        <div className="text-center mb-16">
          <span
            className="inline-block px-4 py-1.5 rounded-full text-sm font-medium tracking-wider uppercase mb-4"
            style={{
              background: "rgba(180,120,0,0.12)",
              border: "1px solid rgba(180,120,0,0.30)",
              color: "hsl(36,70%,30%)",
            }}
          >
            World-Class Amenities
          </span>
          <h2 className="section-title" style={{ color: "hsl(30,40%,15%)" }}>
            Luxury <span className="text-gradient-gold">Facilities</span>
          </h2>
          <p className="section-subtitle mt-4" style={{ color: "hsl(30,25%,35%)" }}>
            Everything you need for a flawless event, from premium stays to state-of-the-art equipment
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 md:gap-6">
          {facilities.map((item, i) => (
            <div
              key={item.title}
              className={`group relative overflow-hidden rounded-2xl p-5 md:p-6 text-center glow-card transition-all hover:-translate-y-1 hover:shadow-xl ${
                isVisible ? "animate-fade-in-up" : "opacity-0"
              }`}
              style={{
                animationDelay: `${i * 80}ms`,
                animationFillMode: "forwards",
                background: "rgba(255, 252, 248, 0.75)", // Blemish white
                backdropFilter: "blur(12px)",
                border: "1px solid rgba(255,255,255,0.8)",
                boxShadow: "0 4px 20px rgba(180,130,0,0.06)",
              }}
            >
              <div className="absolute left-0 bottom-0 w-full h-1 bg-gradient-to-r from-amber-400 to-amber-600 origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500 ease-out" />
              <div
                className="w-12 h-12 mx-auto rounded-xl flex items-center justify-center mb-4 transition-colors group-hover:scale-110"
                style={{ background: "rgba(212,175,55,0.15)" }}
              >
                <item.icon className="w-6 h-6" style={{ color: "hsl(36,80%,35%)" }} />
              </div>
              <h3 className="font-semibold text-sm md:text-base mb-1" style={{ color: "hsl(30,40%,15%)" }}>
                {item.title}
              </h3>
              <p className="text-xs leading-relaxed" style={{ color: "hsl(30,25%,40%)" }}>
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
