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
        background: "linear-gradient(135deg, hsl(30, 20%, 12%) 0%, hsl(24, 25%, 8%) 100%)",
      }}
    >
      {/* Keeping some subtle sparks for continuity */}
      <div className="opacity-40">
        <SectionParticles />
      </div>

      <div
        className="absolute inset-0 pointer-events-none"
        style={{ background: "radial-gradient(ellipse at 50% 40%, rgba(212,175,55,0.12) 0%, transparent 70%)", zIndex: 1 }}
      />
      <div className="container mx-auto max-w-4xl relative" style={{ zIndex: 2 }}>
        <div className="text-center mb-12">
          <span
            className="inline-block px-4 py-1.5 rounded-full text-sm font-medium tracking-wider uppercase mb-4"
            style={{ background: "#e0a11d", color: "white", border: "none" }}
          >
            Get in Touch
          </span>
          <h2 className="section-title text-white">
            Contact <span className="text-gradient-gold">Us</span>
          </h2>
        </div>

        <div className={`grid grid-cols-1 md:grid-cols-2 gap-6 ${isVisible ? "animate-fade-in-up" : "opacity-0"}`} style={{ animationFillMode: "forwards" }}>
          <div
            className="rounded-2xl p-8 space-y-6 transition-all hover:shadow-2xl group relative overflow-hidden"
            style={{
              background: "rgba(0, 0, 0, 0.45)",
              backdropFilter: "blur(12px)",
              border: "1px solid rgba(212, 175, 55, 0.20)",
              boxShadow: "0 8px 32px rgba(0,0,0,0.6)",
            }}
          >
            <div className="absolute left-0 bottom-0 w-full h-1 bg-gradient-to-r from-amber-400 to-amber-600 origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500 ease-out" />
            <div className="flex items-start gap-4">
              <Phone className="w-5 h-5 mt-1 flex-shrink-0" style={{ color: "hsl(43,70%,60%)" }} />
              <div>
                <h3 className="font-semibold text-white mb-2">Phone Numbers</h3>
                <a href="tel:7008928285" className="block text-white/70 hover:text-white transition-colors">+91 7008928285</a>
                <a href="tel:8917255025" className="block text-white/70 hover:text-white transition-colors">+91 8917255025</a>
                <a href="tel:8908640247" className="block text-white/70 hover:text-white transition-colors">+91 8908640247</a>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <Mail className="w-5 h-5 mt-1 flex-shrink-0" style={{ color: "hsl(43,70%,60%)" }} />
              <div>
                <h3 className="font-semibold text-white mb-2">Email</h3>
                <a href="mailto:deepakmahapatra93@gmail.com" className="text-white/70 hover:text-white transition-colors break-all">
                  deepakmahapatra93@gmail.com
                </a>
              </div>
            </div>
          </div>

          <div
            className="rounded-2xl p-8 space-y-6 transition-all hover:shadow-2xl group relative overflow-hidden"
            style={{
              background: "rgba(0, 0, 0, 0.45)",
              backdropFilter: "blur(12px)",
              border: "1px solid rgba(212, 175, 55, 0.20)",
              boxShadow: "0 8px 32px rgba(0,0,0,0.6)",
            }}
          >
            <div className="absolute left-0 bottom-0 w-full h-1 bg-gradient-to-r from-amber-400 to-amber-600 origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500 ease-out" />
            <div className="flex items-start gap-4">
              <MapPin className="w-5 h-5 mt-1 flex-shrink-0" style={{ color: "hsl(43,70%,60%)" }} />
              <div>
                <h3 className="font-semibold text-white mb-2">Address</h3>
                <p className="text-white/70">
                  Chandpur - Rajsunakhala Rd,<br />
                  Kotagarh, Odisha 752065
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <Clock className="w-5 h-5 mt-1 flex-shrink-0" style={{ color: "hsl(43,70%,60%)" }} />
              <div>
                <h3 className="font-semibold text-white mb-2">Visiting Hours</h3>
                <p className="text-white/70">Open daily: 8:00 AM – 9:00 PM</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
