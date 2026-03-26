import { useState } from "react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { X, ChevronLeft, ChevronRight, Play, Maximize2 } from "lucide-react";
import SectionParticles from "./SectionParticles";

const categories = ["All", "Night Lighting", "Park Views", "Weddings & Events", "Attractions", "Videos"];

const images = [
  // Night Lighting / Decorations
  { src: "/gallery/gallery (1).jpg",  category: "Night Lighting",      alt: "Colorful night lighting decoration" },
  { src: "/gallery/gallery (4).jpg",  category: "Night Lighting",      alt: "Festival lights at the park" },
  { src: "/gallery/gallery (5).jpg",  category: "Night Lighting",      alt: "Vibrant purple and blue lights" },
  { src: "/gallery/gallery (6).jpg",  category: "Night Lighting",      alt: "Illuminated arch decoration" },
  { src: "/gallery/gallery (14).jpg", category: "Night Lighting",      alt: "Colourful stupa at night" },
  { src: "/gallery/gallery (17).jpg", category: "Night Lighting",      alt: "Purple themed night event" },

  // Park Views / Entrance
  { src: "/gallery/gallery (3).jpg",  category: "Park Views",          alt: "Grand entrance gate" },
  { src: "/gallery/gallery (7).jpg",  category: "Park Views",          alt: "Decorative park entrance" },
  { src: "/gallery/gallery (9).jpg",  category: "Park Views",          alt: "Floral archway walkway" },
  { src: "/gallery/gallery (10).jpg", category: "Park Views",          alt: "Scenic park pathway" },
  { src: "/gallery/gallery (11).jpg", category: "Park Views",          alt: "Aerial view of the park grounds" },

  // Weddings & Events
  { src: "/gallery/gallery (2).jpg",  category: "Weddings & Events",   alt: "Wedding ceremony at the venue" },
  { src: "/gallery/gallery (16).jpg", category: "Weddings & Events",   alt: "Cultural event celebration" },
  { src: "/gallery/gallery (18).jpg", category: "Weddings & Events",   alt: "Wedding couple at the venue" },
  { src: "/gallery/gallery (19).jpg", category: "Weddings & Events",   alt: "Floral wedding arch decoration" },

  // Attractions
  { src: "/gallery/gallery (8).jpg",  category: "Attractions",         alt: "Decorative cartoon character" },
  { src: "/gallery/gallery (12).jpg", category: "Attractions",         alt: "Horse sculpture at the park" },
  { src: "/gallery/gallery (13).jpg", category: "Attractions",         alt: "Artistic horse statue" },
  { src: "/gallery/gallery (15).jpg", category: "Attractions",         alt: "Entertainment character display" },
];

const videos = Array.from({ length: 13 }, (_, i) => ({
  src: `/video/videos (${i + 1}).mp4`,
  alt: `Hill Side Kotagarh – video highlight ${i + 1}`,
  category: "Videos",
}));

const GallerySection = () => {
  const { ref, isVisible } = useScrollAnimation();
  const [filter, setFilter] = useState("All");
  const [lightbox, setLightbox] = useState<number | null>(null);
  const [activeVideo, setActiveVideo] = useState<string | null>(null);

  const isVideoTab = filter === "Videos";
  const filtered = isVideoTab
    ? []
    : filter === "All"
    ? images
    : images.filter((img) => img.category === filter);

  const prev = () =>
    setLightbox((l) => (l !== null ? (l - 1 + filtered.length) % filtered.length : null));
  const next = () =>
    setLightbox((l) => (l !== null ? (l + 1) % filtered.length : null));

  return (
    <>
      <section
        id="gallery"
        className="section-padding relative overflow-hidden"
        ref={ref}
        style={{
          background: "linear-gradient(180deg, hsl(30, 15%, 8%) 0%, hsl(24, 20%, 5%) 100%)",
        }}
      >
        {/* Cinema Particles */}
        <div className="opacity-40">
          <SectionParticles />
        </div>

        {/* Cinematic Radial Glows */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{ 
            background: "radial-gradient(circle at 50% 30%, rgba(224, 161, 29, 0.12) 0%, transparent 60%)", 
            zIndex: 1 
          }}
        />

        <div className="container mx-auto relative px-4" style={{ zIndex: 2 }}>
          <div className="text-center mb-16">
            <span 
              className="inline-block px-4 py-1.5 rounded-full text-xs font-bold tracking-[0.2em] uppercase mb-4 shadow-lg shadow-amber-900/20" 
              style={{ background: "#e0a11d", color: "black", border: "none" }}
            >
              Visual Journey
            </span>
            <h2 className="section-title text-white">
              Premium <span className="text-gradient-gold">Gallery</span>
            </h2>
            <p className="text-white/50 mt-4 max-w-2xl mx-auto text-sm md:text-base leading-relaxed">
              Explore the beauty, colour, and magic of Hill Side Kotagarh Park through our curated photo and video collection.
            </p>
            <div className="w-20 h-1 bg-gradient-to-r from-transparent via-[#e0a11d] to-transparent mx-auto mt-8 opacity-40" />
          </div>

          {/* Premium Filter Tabs */}
          <div className="flex flex-wrap justify-center gap-3 md:gap-4 mb-14">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className={`px-6 py-2.5 rounded-full text-sm font-bold tracking-wide transition-all duration-500 relative overflow-hidden ${
                  filter === cat
                    ? "text-black shadow-xl shadow-amber-900/20"
                    : "text-white/60 hover:text-white hover:bg-white/5"
                }`}
                style={{ 
                  background: filter === cat ? "#e0a11d" : "rgba(255,255,255,0.03)",
                  border: filter === cat ? "none" : "1px solid rgba(255,255,255,0.1)"
                }}
              >
                {filter === cat && (
                  <div className="absolute inset-0 bg-gradient-to-tr from-white/20 to-transparent pointer-events-none" />
                )}
                <span className="relative z-10">
                  {cat === "Videos" ? "🎬 Videos" : cat}
                </span>
              </button>
            ))}
          </div>

          {/* Photo Masonry Grid */}
          {!isVideoTab && (
            <div className={`columns-1 sm:columns-2 lg:columns-3 gap-6 space-y-6 ${isVisible ? "animate-fade-in" : "opacity-0"}`}>
              {filtered.map((img, i) => (
                <div
                  key={`${img.src}-${i}`}
                  className="break-inside-avoid group cursor-pointer relative rounded-3xl overflow-hidden transition-all duration-700 hover:-translate-y-2 hover:shadow-[0_20px_60px_rgba(0,0,0,0.6)]"
                  onClick={() => setLightbox(i)}
                  style={{ 
                    animationDelay: `${i * 50}ms`,
                    animationFillMode: "forwards",
                    border: "1px solid rgba(255,255,255,0.05)"
                  }}
                >
                  <div className="relative overflow-hidden aspect-auto">
                    <img
                      src={img.src}
                      alt={img.alt}
                      loading="lazy"
                      className="w-full h-auto object-cover transition-transform duration-1000 group-hover:scale-110"
                    />
                    
                    {/* Hover Overlay */}
                    <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-all duration-500 flex flex-col items-center justify-center backdrop-blur-[2px]">
                      <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center mb-3 border border-white/20 scale-50 group-hover:scale-100 transition-transform duration-500">
                        <Maximize2 className="w-5 h-5 text-white" />
                      </div>
                      <span className="text-white font-bold text-xs tracking-widest uppercase py-1 px-3 bg-[#e0a11d] rounded-full shadow-lg translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                        View Photo
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* Videos Grid */}
          {isVideoTab && (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {videos.map((video, i) => (
                <div
                  key={video.src}
                  className={`group rounded-3xl overflow-hidden cursor-pointer relative transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_20px_50px_rgba(224,161,29,0.15)] ${
                    isVisible ? "animate-fade-in-up" : "opacity-0"
                  }`}
                  style={{ 
                    animationDelay: `${i * 100}ms`, 
                    animationFillMode: "forwards",
                    background: "rgba(255,255,255,0.02)",
                    border: "1px solid rgba(255,255,255,0.05)"
                  }}
                  onClick={() => setActiveVideo(video.src)}
                >
                  <div className="aspect-video relative overflow-hidden">
                    <video
                      src={video.src}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                      muted
                      preload="metadata"
                    />
                    {/* Cinema Overlay */}
                    <div className="absolute inset-0 bg-black/20 group-hover:bg-black/50 transition-all duration-500 flex items-center justify-center">
                      <div className="w-16 h-16 rounded-full bg-[#e0a11d] flex items-center justify-center shadow-2xl scale-90 group-hover:scale-110 transition-all duration-500 group-hover:shadow-[#e0a11d]/40">
                        <Play className="w-7 h-7 text-black ml-1 fill-black" />
                      </div>
                    </div>
                    {/* Badge */}
                    <div className="absolute top-4 left-4">
                      <span className="px-3 py-1 rounded-full bg-black/60 backdrop-blur-md text-[10px] font-bold text-white/80 tracking-widest uppercase border border-white/10">
                        Cinema {i + 1}
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Lightbox - Kept mostly same but refined for dark theme */}
      {lightbox !== null && (
        <div
          className="fixed inset-0 z-[100] bg-black/98 flex items-center justify-center p-4 backdrop-blur-lg animate-fade-in"
          onClick={() => setLightbox(null)}
        >
          <button
            onClick={() => setLightbox(null)}
            className="absolute top-6 right-6 p-3 rounded-full bg-white/5 hover:bg-white/10 transition-colors z-10 border border-white/10"
          >
            <X className="w-6 h-6 text-white" />
          </button>
          
          <button
            onClick={(e) => { e.stopPropagation(); prev(); }}
            className="absolute left-6 top-1/2 -translate-y-1/2 p-4 rounded-full bg-white/5 hover:bg-white/10 transition-all z-10 border border-white/10 hover:scale-110"
          >
            <ChevronLeft className="w-6 h-6 text-white" />
          </button>
          
          <div className="relative max-w-5xl max-h-[85vh] group/light">
            <img
              src={filtered[lightbox]?.src}
              alt={filtered[lightbox]?.alt}
              className="w-auto h-auto max-w-full max-h-[85vh] rounded-2xl md:rounded-[2rem] object-contain shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            />
            <div className="absolute -bottom-10 left-0 right-0 text-center">
               <span className="text-white/40 text-sm font-medium tracking-[0.2em] uppercase">
                 {filtered[lightbox]?.category} • {lightbox + 1} / {filtered.length}
               </span>
            </div>
          </div>

          <button
            onClick={(e) => { e.stopPropagation(); next(); }}
            className="absolute right-6 top-1/2 -translate-y-1/2 p-4 rounded-full bg-white/5 hover:bg-white/10 transition-all z-10 border border-white/10 hover:scale-110"
          >
            <ChevronRight className="w-6 h-6 text-white" />
          </button>
        </div>
      )}

      {/* Video Lightbox */}
      {activeVideo && (
        <div
          className="fixed inset-0 z-[100] bg-black/98 flex items-center justify-center p-4 backdrop-blur-lg animate-fade-in"
          onClick={() => setActiveVideo(null)}
        >
          <button
            onClick={() => setActiveVideo(null)}
            className="absolute top-6 right-6 p-3 rounded-full bg-white/5 hover:bg-white/10 transition-colors z-10 border border-white/10"
          >
            <X className="w-6 h-6 text-white" />
          </button>
          <div className="w-full max-w-5xl aspect-video relative group">
            <video
              src={activeVideo}
              controls
              autoPlay
              className="w-full h-full rounded-2xl md:rounded-[2rem] shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            />
          </div>
        </div>
      )}
    </>
  );
};

export default GallerySection;
