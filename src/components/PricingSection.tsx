import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { Ticket, Camera, Baby } from "lucide-react";
import SectionParticles from "./SectionParticles";

const prices = [
  { icon: Ticket, title: "Adult Entry", price: "₹30", desc: "Per person" },
  { icon: Baby, title: "Children Entry", price: "₹20", desc: "Per child" },
  { icon: Camera, title: "DSLR Camera", price: "₹500", desc: "Photography pass" },
];

const PricingSection = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section
      id="pricing"
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
        <div className="text-center mb-16">
          <span
            className="inline-block px-4 py-1.5 rounded-full text-sm font-medium tracking-wider uppercase mb-4"
            style={{ background: "rgba(180,120,0,0.12)", border: "1px solid rgba(180,120,0,0.28)", color: "hsl(36,70%,30%)" }}
          >
            Park Entry
          </span>
          <h2 className="section-title" style={{ color: "hsl(30,40%,15%)" }}>
            Entry <span className="text-gradient-gold">Pricing</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-3xl mx-auto">
          {prices.map((item, i) => (
            <div
              key={item.title}
              className={`group relative overflow-hidden rounded-2xl p-8 text-center transition-all hover:-translate-y-1 hover:shadow-xl ${
                isVisible ? "animate-fade-in-up" : "opacity-0"
              }`}
              style={{
                animationDelay: `${i * 150}ms`,
                animationFillMode: "forwards",
                background: "rgba(255, 252, 248, 0.75)", // Blemish white
                backdropFilter: "blur(12px)",
                border: "1px solid rgba(255,255,255,0.8)",
                boxShadow: "0 4px 20px rgba(180,130,0,0.06)",
              }}
            >
              <div className="absolute left-0 bottom-0 w-full h-1 bg-gradient-to-r from-amber-400 to-amber-600 origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500 ease-out" />
              <div className="w-14 h-14 mx-auto rounded-2xl bg-primary/10 flex items-center justify-center mb-5 group-hover:bg-primary/20 transition-colors">
                <item.icon className="w-7 h-7 text-primary" />
              </div>
              <h3 className="text-lg font-semibold mb-2" style={{ color: "hsl(30,40%,15%)" }}>{item.title}</h3>
              <p className="text-4xl font-serif font-bold text-gradient-gold mb-1">{item.price}</p>
              <p className="text-sm" style={{ color: "hsl(30,25%,40%)" }}>{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
