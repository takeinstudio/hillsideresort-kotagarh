import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { Ticket, Camera, Baby, Sparkles } from "lucide-react";
import SectionParticles from "./SectionParticles";

const prices = [
  { 
    icon: Baby, 
    title: "Children Entry", 
    price: "₹20", 
    desc: "Per child (Under 5 free)",
    accent: "from-blue-400 to-cyan-500"
  },
  { 
    icon: Ticket, 
    title: "Standard Entry", 
    price: "₹30", 
    desc: "Per adult (All events)",
    accent: "from-[#e0a11d] to-[#fcd34d]",
    popular: true
  },
  { 
    icon: Camera, 
    title: "Photography", 
    price: "₹500", 
    desc: "Professional DSLR pass",
    accent: "from-purple-400 to-pink-500"
  },
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
      
      {/* Mesh Gradient / Aurora Background Depth */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-40">
        <div className="absolute top-[10%] left-[20%] w-[40%] h-[40%] rounded-full bg-amber-200/40 blur-[100px] animate-pulse-soft" />
        <div className="absolute bottom-[20%] right-[10%] w-[30%] h-[30%] rounded-full bg-orange-200/30 blur-[80px] animate-float" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[50%] h-[50%] rounded-full bg-white/20 blur-[120px]" />
      </div>

      <div
        className="absolute inset-0 pointer-events-none"
        style={{ background: "radial-gradient(ellipse at 50% 40%, rgba(212,175,55,0.20) 0%, transparent 65%)", zIndex: 1 }}
      />
      
      <div className="container mx-auto relative px-4" style={{ zIndex: 2 }}>
        <div className="text-center mb-16">
          <span
            className="inline-block px-4 py-1.5 rounded-full text-sm font-medium tracking-wider uppercase mb-4 shadow-sm"
            style={{ background: "#e0a11d", color: "white", border: "none" }}
          >
            Pass Pricing
          </span>
          <h2 className="section-title" style={{ color: "hsl(30,40%,15%)" }}>
            Entry <span className="text-gradient-gold">Experiences</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-transparent via-[#e0a11d] to-transparent mx-auto mt-6 opacity-40" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {prices.map((item, i) => (
            <div
              key={item.title}
              className={`group relative perspective-1000 ${
                isVisible ? "animate-fade-in-up" : "opacity-0"
              }`}
              style={{ animationDelay: `${i * 150}ms`, animationFillMode: "forwards" }}
            >
              <div 
                className="relative h-full rounded-[2.5rem] p-8 md:p-10 transition-all duration-500 [transform-style:preserve-3d] group-hover:[transform:translateY(-10px)_rotateX(2deg)_rotateY(1deg)]"
                style={{
                  background: item.popular 
                    ? "rgba(255, 255, 255, 0.9)" 
                    : "rgba(255, 252, 248, 0.7)",
                  backdropFilter: "blur(20px)",
                  border: item.popular 
                    ? "2px solid rgba(224, 161, 29, 0.4)" 
                    : "1px solid rgba(255, 255, 255, 0.8)",
                  boxShadow: item.popular
                    ? "0 20px 50px rgba(180, 130, 0, 0.15), 0 0 0 1px rgba(255, 255, 255, 0.5) inset"
                    : "0 10px 30px rgba(0, 0, 0, 0.05), 0 0 0 1px rgba(255, 255, 255, 0.5) inset",
                }}
              >
                {/* Popular Badge */}
                {item.popular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-[#e0a11d] text-white px-4 py-1 rounded-full text-xs font-bold tracking-widest uppercase flex items-center gap-1.5 shadow-lg">
                    <Sparkles className="w-3 h-3" />
                    Most Popular
                  </div>
                )}

                {/* Left-to-right animated line */}
                <div className="absolute left-10 right-10 bottom-0 h-1 bg-gradient-to-r from-transparent via-[#e0a11d] to-transparent origin-center scale-x-0 group-hover:scale-x-100 transition-transform duration-700 ease-out" />

                <div 
                  className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${item.accent} flex items-center justify-center mb-8 shadow-lg group-hover:scale-110 transition-transform duration-500`}
                >
                  <item.icon className="w-8 h-8 text-white" />
                </div>

                <h3 className="text-xl font-bold mb-4 font-serif" style={{ color: "hsl(30,40%,15%)" }}>
                  {item.title}
                </h3>
                
                <div className="mb-6 relative">
                  <span className="text-5xl font-sans font-bold tracking-tight text-gradient-gold block mb-2 group-hover:scale-105 transition-transform duration-500">
                    {item.price}
                  </span>
                  <div className="w-12 h-0.5 bg-[#e0a11d]/20 rounded-full" />
                </div>

                <p className="text-sm leading-relaxed mb-8" style={{ color: "hsl(30,25%,40%)" }}>
                  {item.desc}
                </p>

                <ul className="space-y-3 mb-10 text-left">
                  <li className="flex items-center gap-3 text-sm" style={{ color: "hsl(30,25%,35%)" }}>
                    <div className="w-1.5 h-1.5 rounded-full bg-[#e0a11d]" />
                    Full park access
                  </li>
                  <li className="flex items-center gap-3 text-sm" style={{ color: "hsl(30,25%,35%)" }}>
                    <div className="w-1.5 h-1.5 rounded-full bg-[#e0a11d]" />
                    Valid for entire day
                  </li>
                </ul>

                <button 
                  className="w-full py-4 rounded-2xl font-bold text-sm tracking-widest uppercase transition-all duration-300 hover:shadow-xl hover:brightness-110 active:scale-95"
                  style={{ 
                    background: item.popular ? "#e0a11d" : "rgba(224, 161, 29, 0.1)",
                    color: item.popular ? "white" : "#e0a11d",
                    border: item.popular ? "none" : "1px solid rgba(224, 161, 29, 0.3)"
                  }}
                >
                  Get Tickets
                </button>
              </div>

              {/* Decorative side shine effect */}
              <div className="absolute inset-0 rounded-[2.5rem] bg-gradient-to-tr from-white/0 via-white/20 to-white/0 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-1000" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
