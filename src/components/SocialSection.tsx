import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { Instagram, Facebook } from "lucide-react";
import SectionParticles from "./SectionParticles";

const SocialSection = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section className="section-padding relative overflow-hidden" ref={ref}>
      {/* Premium Sunset Frost Background */}
      <div 
        className="absolute inset-0 z-0 bg-cover bg-center bg-fixed opacity-20 pointer-events-none"
        style={{ backgroundImage: "url('/gallery/gallery (19).jpg')" }}
      />
      
      {/* Multi-layered Frosted Overlay */}
      <div 
        className="absolute inset-0 z-[1] backdrop-blur-[60px]"
        style={{ 
          background: "linear-gradient(135deg, rgba(255, 252, 248, 0.9) 0%, rgba(255, 248, 230, 0.85) 100%)" 
        }}
      />

      {/* Animated Liquid Amber Glows */}
      <div className="absolute inset-0 z-[2] overflow-hidden pointer-events-none">
        <div className="absolute top-[-10%] right-[-10%] w-[50%] h-[50%] rounded-full bg-[#e0a11d]/15 blur-[120px] animate-float" />
        <div className="absolute bottom-[-20%] left-[-10%] w-[60%] h-[60%] rounded-full bg-orange-200/20 blur-[100px] animate-pulse-soft" />
      </div>

      <SectionParticles />
      
      {/* Radial highlighting glow */}
      <div
        className="absolute inset-0 pointer-events-none z-[3]"
        style={{ background: "radial-gradient(ellipse at 50% 40%, rgba(224, 161, 29, 0.1) 0%, transparent 70%)" }}
      />

      <div className="container mx-auto max-w-4xl text-center relative z-[4]">
        <div className="mb-14">
          <span
            className="inline-block px-5 py-2 rounded-full text-xs font-bold tracking-[0.2em] uppercase mb-5 shadow-lg shadow-amber-900/10"
            style={{ background: "#e0a11d", color: "white", border: "none" }}
          >
            Stay Connected
          </span>
          <h2 className="section-title" style={{ color: "hsl(30,40%,15%)" }}>
            Follow Our <span className="text-gradient-gold">Journey</span>
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-transparent via-[#e0a11d]/40 to-transparent mx-auto mt-6" />
        </div>

        <div
          className={`grid grid-cols-1 sm:grid-cols-2 gap-10 ${isVisible ? "animate-fade-in-up" : "opacity-0"}`}
          style={{ animationFillMode: "forwards" }}
        >
          {/* Instagram Flip Card */}
          <a
            href="https://www.instagram.com/kotagarh_park/"
            target="_blank"
            rel="noopener noreferrer"
            className="group relative w-full h-[320px] [perspective:1200px] cursor-pointer"
          >
            <div className="w-full h-full transition-all duration-1000 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">
              
              {/* Front Face */}
              <div 
                className="absolute inset-0 [backface-visibility:hidden] rounded-[2.5rem] p-10 flex flex-col items-center justify-center transition-all duration-500"
                style={{
                  background: "rgba(255, 255, 255, 0.95)",
                  backdropFilter: "blur(20px)",
                  border: "1.5px solid white",
                  boxShadow: "0 15px 35px rgba(180,130,0,0.08), inset 0 0 0 1px rgba(255,255,255,1)",
                }}
              >
                <div className="w-20 h-20 rounded-3xl bg-gradient-to-br from-pink-500 via-red-500 to-yellow-500 flex items-center justify-center mb-6 shadow-xl group-hover:scale-110 transition-transform duration-700">
                  <Instagram className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-2xl font-serif font-bold mb-2 tracking-tight" style={{ color: "hsl(30,40%,15%)" }}>Instagram</h3>
                <p className="text-sm font-bold tracking-[0.1em] uppercase opacity-40">@kotagarh_park</p>
                
                <div className="absolute bottom-10 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                   <p className="text-[10px] font-black tracking-widest text-[#e0a11d] uppercase">Click to follow</p>
                </div>
              </div>

              {/* Back Face */}
              <div 
                className="absolute inset-0 [backface-visibility:hidden] [transform:rotateY(180deg)] rounded-[2.5rem] p-10 flex flex-col items-center justify-center text-white bg-gradient-to-br from-pink-500 via-red-500 to-yellow-500"
                style={{
                  boxShadow: "0 20px 50px rgba(225,48,108,0.3)",
                }}
              >
                <Instagram className="w-14 h-14 mb-5 drop-shadow-xl" />
                <h3 className="text-3xl font-black mb-2 drop-shadow-md tracking-tight">Follow Us</h3>
                <p className="text-white font-bold text-xl drop-shadow-sm tracking-wide">@kotagarh_park</p>
              </div>

            </div>
          </a>

          {/* Facebook Flip Card */}
          <a
            href="https://www.facebook.com/p/Hillside-park-resort-KOTAGARH-PARK-100088110218620/"
            target="_blank"
            rel="noopener noreferrer"
            className="group relative w-full h-[320px] [perspective:1200px] cursor-pointer"
          >
            <div className="w-full h-full transition-all duration-1000 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">
              
              {/* Front Face */}
              <div 
                className="absolute inset-0 [backface-visibility:hidden] rounded-[2.5rem] p-10 flex flex-col items-center justify-center transition-all duration-500"
                style={{
                  background: "rgba(255, 255, 255, 0.95)",
                  backdropFilter: "blur(20px)",
                  border: "1.5px solid white",
                  boxShadow: "0 15px 35px rgba(180,130,0,0.08), inset 0 0 0 1px rgba(255,255,255,1)",
                }}
              >
                <div className="w-20 h-20 rounded-3xl bg-blue-600 flex items-center justify-center mb-6 shadow-xl group-hover:scale-110 transition-transform duration-700">
                  <Facebook className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-2xl font-serif font-bold mb-2 tracking-tight" style={{ color: "hsl(30,40%,15%)" }}>Facebook</h3>
                <p className="text-sm font-bold tracking-[0.1em] uppercase opacity-40 text-blue-900">Hillside Park Resort</p>
                
                <div className="absolute bottom-10 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                   <p className="text-[10px] font-black tracking-widest text-[#e0a11d] uppercase">Click to follow</p>
                </div>
              </div>

              {/* Back Face */}
              <div 
                className="absolute inset-0 [backface-visibility:hidden] [transform:rotateY(180deg)] rounded-[2.5rem] p-10 flex flex-col items-center justify-center text-white bg-blue-600"
                style={{
                  boxShadow: "0 20px 50px rgba(37,99,235,0.3)",
                }}
              >
                <Facebook className="w-14 h-14 mb-5 drop-shadow-xl" />
                <h3 className="text-3xl font-black mb-2 drop-shadow-md tracking-tight">Like Our Page</h3>
                <p className="text-white font-bold text-xl drop-shadow-sm tracking-wide">Hillside Park Resort</p>
              </div>

            </div>
          </a>

        </div>
      </div>
    </section>
  );
};

export default SocialSection;
