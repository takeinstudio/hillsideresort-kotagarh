import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { Phone, Mail, MapPin, Clock } from "lucide-react";
import SectionParticles from "./SectionParticles";

const ContactSection = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section
      id="contact"
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
      <div className="container mx-auto max-w-4xl relative" style={{ zIndex: 2 }}>
        <div className="text-center mb-12">
          <span className="inline-block px-4 py-1.5 rounded-full bg-sage-light text-secondary-foreground text-sm font-medium tracking-wider uppercase mb-4">
            Get in Touch
          </span>
          <h2 className="section-title text-foreground">
            Contact <span className="text-gradient-gold">Us</span>
          </h2>
        </div>

        <div className={`grid grid-cols-1 md:grid-cols-2 gap-6 ${isVisible ? "animate-fade-in-up" : "opacity-0"}`} style={{ animationFillMode: "forwards" }}>
          <div className="glass rounded-2xl p-8 space-y-6">
            <div className="flex items-start gap-4">
              <Phone className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
              <div>
                <h3 className="font-semibold text-foreground mb-2">Phone Numbers</h3>
                <a href="tel:7008928285" className="block text-muted-foreground hover:text-primary transition-colors">+91 7008928285</a>
                <a href="tel:8917255025" className="block text-muted-foreground hover:text-primary transition-colors">+91 8917255025</a>
                <a href="tel:8908640247" className="block text-muted-foreground hover:text-primary transition-colors">+91 8908640247</a>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <Mail className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
              <div>
                <h3 className="font-semibold text-foreground mb-2">Email</h3>
                <a href="mailto:deepakmahapatra93@gmail.com" className="text-muted-foreground hover:text-primary transition-colors">
                  deepakmahapatra93@gmail.com
                </a>
              </div>
            </div>
          </div>

          <div className="glass rounded-2xl p-8 space-y-6">
            <div className="flex items-start gap-4">
              <MapPin className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
              <div>
                <h3 className="font-semibold text-foreground mb-2">Address</h3>
                <p className="text-muted-foreground">
                  Chandpur - Rajsunakhala Rd,<br />
                  Kotagarh, Odisha 752065
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <Clock className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
              <div>
                <h3 className="font-semibold text-foreground mb-2">Visiting Hours</h3>
                <p className="text-muted-foreground">Open daily: 8:00 AM – 9:00 PM</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
