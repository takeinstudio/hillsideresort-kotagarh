import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import {
  Snowflake, UtensilsCrossed, Sparkles, Lightbulb, Speaker, Users,
  Zap, Car, ShieldCheck, Leaf
} from "lucide-react";

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
    <section id="facilities" className="section-padding bg-background">
      <div className="container mx-auto" ref={ref}>
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1.5 rounded-full bg-sage-light text-secondary-foreground text-sm font-medium tracking-wider uppercase mb-4">
            World-Class Amenities
          </span>
          <h2 className="section-title text-foreground">
            Luxury <span className="text-gradient-gold">Facilities</span>
          </h2>
          <p className="section-subtitle mt-4">
            Everything you need for a flawless event, from premium stays to state-of-the-art equipment
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 md:gap-6">
          {facilities.map((item, i) => (
            <div
              key={item.title}
              className={`group glass rounded-2xl p-5 md:p-6 text-center glow-card ${
                isVisible ? "animate-fade-in-up" : "opacity-0"
              }`}
              style={{ animationDelay: `${i * 80}ms`, animationFillMode: "forwards" }}
            >
              <div className="w-12 h-12 mx-auto rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                <item.icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="font-semibold text-sm md:text-base text-foreground mb-1">{item.title}</h3>
              <p className="text-xs text-muted-foreground leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FacilitiesSection;
