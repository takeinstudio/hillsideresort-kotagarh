import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { Instagram, Facebook } from "lucide-react";
import SectionParticles from "./SectionParticles";

const goldSection = {
  background: "linear-gradient(135deg, hsl(43,65%,92%) 0%, hsl(38,55%,86%) 50%, hsl(45,70%,90%) 100%)",
} as const;

const SocialSection = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section className="section-padding relative overflow-hidden" style={goldSection} ref={ref}>
      <SectionParticles />
      <div
        className="absolute inset-0 pointer-events-none"
        style={{ background: "radial-gradient(ellipse at 50% 40%, rgba(212,175,55,0.20) 0%, transparent 65%)", zIndex: 1 }}
      />
      <div className="container mx-auto max-w-4xl text-center relative" style={{ zIndex: 2 }}>
        <div className="mb-12">
          <span
            className="inline-block px-4 py-1.5 rounded-full text-sm font-medium tracking-wider uppercase mb-4"
            style={{ background: "rgba(180,120,0,0.12)", border: "1px solid rgba(180,120,0,0.28)", color: "hsl(36,70%,30%)" }}
          >
            Stay Connected
          </span>
          <h2 className="section-title" style={{ color: "hsl(30,40%,15%)" }}>
            Follow Our <span className="text-gradient-gold">Journey</span>
          </h2>
        </div>

        <div
          className={`grid grid-cols-1 sm:grid-cols-2 gap-6 ${isVisible ? "animate-fade-in-up" : "opacity-0"}`}
          style={{ animationFillMode: "forwards" }}
        >
          <a
            href="https://www.instagram.com/kotagarh_park/"
            target="_blank"
            rel="noopener noreferrer"
            className="group rounded-2xl p-8 text-center transition-all hover:scale-[1.02] hover:-translate-y-1"
            style={{
              background: "rgba(255,248,220,0.70)",
              backdropFilter: "blur(8px)",
              border: "1px solid rgba(212,175,55,0.30)",
              boxShadow: "0 2px 16px rgba(180,130,0,0.10)",
            }}
          >
            <div className="w-16 h-16 mx-auto rounded-2xl bg-gradient-to-br from-pink-500 via-red-500 to-yellow-500 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform shadow-lg">
              <Instagram className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-xl font-serif font-bold mb-1" style={{ color: "hsl(30,40%,15%)" }}>Instagram</h3>
            <p className="text-sm mb-4" style={{ color: "hsl(30,30%,40%)" }}>@kotagarh_park</p>
            <span
              className="inline-block px-6 py-2 rounded-full text-sm font-medium transition-all group-hover:scale-105"
              style={{ background: "rgba(180,120,0,0.15)", color: "hsl(36,70%,30%)", border: "1px solid rgba(180,120,0,0.25)" }}
            >
              Follow Us
            </span>
          </a>

          <a
            href="https://www.facebook.com/p/Hillside-park-resort-KOTAGARH-PARK-100088110218620/"
            target="_blank"
            rel="noopener noreferrer"
            className="group rounded-2xl p-8 text-center transition-all hover:scale-[1.02] hover:-translate-y-1"
            style={{
              background: "rgba(255,248,220,0.70)",
              backdropFilter: "blur(8px)",
              border: "1px solid rgba(212,175,55,0.30)",
              boxShadow: "0 2px 16px rgba(180,130,0,0.10)",
            }}
          >
            <div className="w-16 h-16 mx-auto rounded-2xl bg-blue-600 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform shadow-lg">
              <Facebook className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-xl font-serif font-bold mb-1" style={{ color: "hsl(30,40%,15%)" }}>Facebook</h3>
            <p className="text-sm mb-4" style={{ color: "hsl(30,30%,40%)" }}>Hillside Park Resort</p>
            <span
              className="inline-block px-6 py-2 rounded-full text-sm font-medium transition-all group-hover:scale-105"
              style={{ background: "rgba(180,120,0,0.15)", color: "hsl(36,70%,30%)", border: "1px solid rgba(180,120,0,0.25)" }}
            >
              Like Our Page
            </span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default SocialSection;
