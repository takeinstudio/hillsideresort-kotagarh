import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { Instagram, Facebook } from "lucide-react";
import SectionParticles from "./SectionParticles";

const SocialSection = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section 
      id="contact" 
      className="section-padding relative overflow-hidden" 
      ref={ref}
      style={{
        background: "linear-gradient(180deg, hsl(30, 20%, 8%) 0%, hsl(24, 25%, 5%) 100%)", // Cinema Dark
      }}
    >
      {/* Dark Modern Background Elements */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none opacity-40">
        <div className="absolute top-[-10%] right-[-10%] w-[50%] h-[50%] rounded-full bg-[#e0a11d]/10 blur-[120px] animate-float" />
        <div className="absolute bottom-[-20%] left-[-10%] w-[60%] h-[60%] rounded-full bg-orange-950/20 blur-[100px] animate-pulse-soft" />
      </div>

      <div className="opacity-30">
        <SectionParticles />
      </div>
      
      {/* Subtle radial highlighting */}
      <div
        className="absolute inset-0 pointer-events-none z-[1]"
        style={{ background: "radial-gradient(circle at 50% 40%, rgba(224, 161, 29, 0.08) 0%, transparent 70%)" }}
      />

      <div className="container mx-auto max-w-4xl text-center relative z-[2]">
        <div className="mb-10">
          <span
            className="inline-block px-4 py-1.5 rounded-full text-[10px] font-bold tracking-[0.2em] uppercase mb-4 shadow-lg shadow-amber-900/40 font-sans"
            style={{ background: "#e0a11d", color: "black", border: "none" }}
          >
            Stay Connected
          </span>
          <h2 className="section-title text-white">
            Follow Our <span className="text-gradient-gold">Journey</span>
          </h2>
          <div className="w-16 h-0.5 bg-gradient-to-r from-transparent via-[#e0a11d]/40 to-transparent mx-auto mt-6" />
        </div>

        <div
          className={`grid grid-cols-1 sm:grid-cols-2 gap-8 max-w-2xl mx-auto ${isVisible ? "animate-fade-in-up" : "opacity-0"}`}
          style={{ animationFillMode: "forwards" }}
        >
          {/* Instagram Flip Card */}
          <a
            href="https://www.instagram.com/kotagarh_park/"
            target="_blank"
            rel="noopener noreferrer"
            className="group relative w-full h-[190px] sm:h-[220px] [perspective:1200px] cursor-pointer"
          >
            <div className="w-full h-full transition-all duration-1000 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">
              
              {/* Front Face (Dark Glass) */}
              <div 
                className="absolute inset-0 [backface-visibility:hidden] rounded-[2rem] p-8 flex flex-col items-center justify-center overflow-hidden"
                style={{
                  background: "rgba(255, 255, 255, 0.03)",
                  backdropFilter: "blur(20px)",
                  border: "1px solid rgba(255, 255, 255, 0.08)",
                  boxShadow: "0 20px 50px rgba(0,0,0,0.5)",
                }}
              >
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-tr from-pink-500/10 to-yellow-500/10 border border-white/5 flex items-center justify-center mb-4 shadow-xl">
                  <Instagram className="w-7 h-7 text-[#e0a11d]" />
                </div>
                <h3 className="text-xl font-bold text-white mb-1">Instagram</h3>
                <p className="text-[10px] font-bold tracking-[0.2em] uppercase text-[#e0a11d]/60">@kotagarh_park</p>
              </div>

              {/* Back Face (Instagram Colors) */}
              <div 
                className="absolute inset-0 [backface-visibility:hidden] [transform:rotateY(180deg)] rounded-[2rem] p-8 flex flex-col items-center justify-center text-white shadow-2xl overflow-hidden"
                style={{
                   background: "linear-gradient(45deg, #f09433 0%,#e6683c 25%,#dc2743 50%,#cc2366 75%,#bc1888 100%)",
                }}
              >
                {/* Subtle back pattern */}
                <div className="absolute inset-0 opacity-10 pointer-events-none" style={{ backgroundImage: "radial-gradient(circle at 1px 1px, white 1px, transparent 0)", backgroundSize: "20px 20px" }} />
                
                <Instagram className="w-12 h-12 mb-4 drop-shadow-xl text-white" />
                <h3 className="text-2xl font-black mb-1 drop-shadow-md text-white uppercase tracking-tighter italic">Follow Us</h3>
                <p className="text-white/90 font-bold text-sm tracking-widest">@KOTAGARH_PARK</p>
              </div>

            </div>
          </a>

          {/* Facebook Flip Card */}
          <a
            href="https://www.facebook.com/p/Hillside-park-resort-KOTAGARH-PARK-100088110218620/"
            target="_blank"
            rel="noopener noreferrer"
            className="group relative w-full h-[190px] sm:h-[220px] [perspective:1200px] cursor-pointer"
          >
            <div className="w-full h-full transition-all duration-1000 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">
              
              {/* Front Face (Dark Glass) */}
              <div 
                className="absolute inset-0 [backface-visibility:hidden] rounded-[2rem] p-8 flex flex-col items-center justify-center overflow-hidden"
                style={{
                  background: "rgba(255, 255, 255, 0.03)",
                  backdropFilter: "blur(20px)",
                  border: "1px solid rgba(255, 255, 255, 0.08)",
                  boxShadow: "0 20px 50px rgba(0,0,0,0.5)",
                }}
              >
                <div className="w-14 h-14 rounded-2xl bg-blue-600/10 border border-white/5 flex items-center justify-center mb-4 shadow-xl">
                  <Facebook className="w-7 h-7 text-[#e0a11d]" />
                </div>
                <h3 className="text-xl font-bold text-white mb-1">Facebook</h3>
                <p className="text-[10px] font-bold tracking-[0.2em] uppercase text-[#e0a11d]/60 text-amber-500/60">Hillside Resort</p>
              </div>

              {/* Back Face (Facebook Blue) */}
              <div 
                className="absolute inset-0 [backface-visibility:hidden] [transform:rotateY(180deg)] rounded-[2rem] p-8 flex flex-col items-center justify-center text-white shadow-2xl overflow-hidden shadow-[#1877F2]/20"
                style={{
                   background: "#1877F2",
                }}
              >
                {/* Subtle back pattern */}
                <div className="absolute inset-0 opacity-10 pointer-events-none" style={{ backgroundImage: "radial-gradient(circle at 1px 1px, white 1px, transparent 0)", backgroundSize: "20px 20px" }} />
                
                <Facebook className="w-12 h-12 mb-4 drop-shadow-xl text-white" />
                <h3 className="text-2xl font-black mb-1 drop-shadow-md text-white uppercase tracking-tighter italic">Like Page</h3>
                <p className="text-white/90 font-bold text-sm tracking-widest text-center">HILLSIDE PARK RESORT</p>
              </div>

            </div>
          </a>

        </div>
      </div>
    </section>
  );
};

export default SocialSection;
