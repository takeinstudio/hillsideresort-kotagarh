import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { Ticket, Camera, Baby } from "lucide-react";

const prices = [
  { icon: Ticket, title: "Adult Entry", price: "₹30", desc: "Per person" },
  { icon: Baby, title: "Children Entry", price: "₹20", desc: "Per child" },
  { icon: Camera, title: "DSLR Camera", price: "₹500", desc: "Photography pass" },
];

const PricingSection = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section id="pricing" className="section-padding gradient-premium" ref={ref}>
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1.5 rounded-full bg-sunset-light text-foreground text-sm font-medium tracking-wider uppercase mb-4">
            Park Entry
          </span>
          <h2 className="section-title text-foreground">
            Entry <span className="text-gradient-gold">Pricing</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-3xl mx-auto">
          {prices.map((item, i) => (
            <div
              key={item.title}
              className={`glass rounded-2xl p-8 text-center glow-card group ${
                isVisible ? "animate-fade-in-up" : "opacity-0"
              }`}
              style={{ animationDelay: `${i * 150}ms`, animationFillMode: "forwards" }}
            >
              <div className="w-14 h-14 mx-auto rounded-2xl bg-primary/10 flex items-center justify-center mb-5 group-hover:bg-primary/20 transition-colors">
                <item.icon className="w-7 h-7 text-primary" />
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-2">{item.title}</h3>
              <p className="text-4xl font-serif font-bold text-gradient-gold mb-1">{item.price}</p>
              <p className="text-sm text-muted-foreground">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
