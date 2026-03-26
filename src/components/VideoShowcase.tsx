import { useState } from "react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { X, ExternalLink, Play } from "lucide-react";
import SectionParticles from "./SectionParticles";

const MAIN_VIDEO_ID = "W3_NkGKGCN8";

const relatedVideos = [
  { id: "W3_NkGKGCN8", title: "Kotagarh Park – Overview" },
  { id: "dAcrOe24BM0", title: "Kotagarh Park – Scenic Views" },
  { id: "KjFYDkyql68", title: "Kotagarh Park – Nature Walk" },
  { id: "MzL5VHahqh0", title: "Kotagarh Park – Highlights" },
];

const VideoShowcase = () => {
  const { ref, isVisible } = useScrollAnimation();
  const [activeId, setActiveId] = useState<string | null>(null);

  return (
    <>
      <section
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
          {/* Header */}
          <div className="text-center mb-12">
            <span
              className="inline-block px-4 py-1.5 rounded-full text-sm font-medium tracking-wider uppercase mb-4"
              style={{ background: "rgba(180,120,0,0.12)", border: "1px solid rgba(180,120,0,0.28)", color: "hsl(36,70%,30%)" }}
            >
              Virtual Tour
            </span>
            <h2 className="section-title" style={{ color: "hsl(30,40%,15%)" }}>
              Experience the Venue <span className="text-gradient-gold">in Motion</span>
            </h2>
          </div>


          {/* Main video – slightly smaller via max-w-3xl */}
          <div
            className={`max-w-3xl mx-auto mb-8 ${isVisible ? "animate-scale-in" : "opacity-0"}`}
            style={{ animationFillMode: "forwards" }}
          >
            <div
              className="relative aspect-video rounded-2xl overflow-hidden glow-card cursor-pointer group"
              onClick={() => setActiveId(MAIN_VIDEO_ID)}
            >
              <img
                src={`https://img.youtube.com/vi/${MAIN_VIDEO_ID}/maxresdefault.jpg`}
                alt="Kotagarh Park – main video tour"
                loading="lazy"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black/30 group-hover:bg-black/20 transition-colors flex items-center justify-center">
                <div className="w-20 h-20 rounded-full bg-primary/90 flex items-center justify-center shadow-xl group-hover:scale-110 transition-transform glow-gold">
                  <Play className="w-8 h-8 text-primary-foreground ml-1" />
                </div>
              </div>
            </div>
          </div>

          {/* 4 related videos in one row */}
          <div
            className={`grid grid-cols-2 sm:grid-cols-4 gap-3 max-w-4xl mx-auto mb-10 ${
              isVisible ? "animate-fade-in-up" : "opacity-0"
            }`}
            style={{ animationDelay: "200ms", animationFillMode: "forwards" }}
          >
            {relatedVideos.map((v) => (
              <div
                key={v.id}
                className="group relative rounded-xl overflow-hidden cursor-pointer glow-card"
                onClick={() => setActiveId(v.id)}
              >
                <div className="aspect-video">
                  <img
                    src={`https://img.youtube.com/vi/${v.id}/mqdefault.jpg`}
                    alt={v.title}
                    loading="lazy"
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="absolute inset-0 bg-black/40 group-hover:bg-black/25 transition-colors flex items-center justify-center">
                  <div className="w-10 h-10 rounded-full bg-primary/80 flex items-center justify-center group-hover:scale-110 transition-transform">
                    <Play className="w-4 h-4 text-primary-foreground ml-0.5" />
                  </div>
                </div>
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent px-2 py-2">
                  <p className="text-[11px] text-white/90 truncate font-medium">{v.title}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Watch More button */}
          <div className="text-center">
            <a
              href="https://www.youtube.com/results?search_query=kotagarh+park"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-7 py-3 rounded-full font-semibold text-sm transition-all hover:scale-105 hover:brightness-110"
              style={{
                background: "linear-gradient(135deg, hsl(43,90%,55%) 0%, hsl(36,85%,40%) 100%)",
                color: "#1c0e00",
                boxShadow: "0 4px 18px rgba(212,160,0,0.40)",
              }}
            >
              <ExternalLink className="w-4 h-4" />
              Watch More on YouTube
            </a>
          </div>
        </div>
      </section>

      {/* Video Modal */}
      {activeId && (
        <div
          className="fixed inset-0 z-[100] bg-black/85 flex items-center justify-center p-4 animate-scale-in"
          onClick={() => setActiveId(null)}
        >
          <div className="relative w-full max-w-5xl aspect-video" onClick={(e) => e.stopPropagation()}>
            <button
              onClick={() => setActiveId(null)}
              className="absolute -top-12 right-0 p-2 rounded-full bg-primary/20 hover:bg-primary/40 transition-colors"
              style={{ color: "hsl(40,50%,90%)" }}
            >
              <X className="w-6 h-6" />
            </button>
            <iframe
              src={`https://www.youtube.com/embed/${activeId}?autoplay=1`}
              className="w-full h-full rounded-2xl"
              allow="autoplay; encrypted-media"
              allowFullScreen
              title="Kotagarh Park video"
            />
          </div>
        </div>
      )}
    </>
  );
};

export default VideoShowcase;
