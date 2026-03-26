import { useState } from "react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { X, ChevronLeft, ChevronRight, Play } from "lucide-react";
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
          background: "linear-gradient(135deg, hsl(43,65%,92%) 0%, hsl(38,55%,86%) 50%, hsl(45,70%,90%) 100%)",
        }}
      >
        <SectionParticles />
        <div
          className="absolute inset-0 pointer-events-none"
          style={{ background: "radial-gradient(ellipse at 50% 40%, rgba(212,175,55,0.20) 0%, transparent 65%)", zIndex: 1 }}
        />
        <div className="container mx-auto relative" style={{ zIndex: 2 }}>
          <div className="text-center mb-12">
            <span className="inline-block px-4 py-1.5 rounded-full bg-rose-light text-foreground text-sm font-medium tracking-wider uppercase mb-4">
              Visual Journey
            </span>
            <h2 className="section-title text-foreground">
              Premium <span className="text-gradient-gold">Gallery</span>
            </h2>
            <p className="text-muted-foreground mt-3 max-w-xl mx-auto text-sm">
              Explore the beauty, colour, and magic of Hill Side Kotagarh Park through our curated photo and video collection.
            </p>
          </div>

          {/* Filter Tabs */}
          <div className="flex flex-wrap justify-center gap-2 mb-10">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className={`px-5 py-2 rounded-full text-sm font-medium transition-all ${
                  filter === cat
                    ? "gradient-gold text-primary-foreground shadow-md"
                    : "bg-muted text-muted-foreground hover:bg-primary/10"
                }`}
              >
                {cat === "Videos" ? "🎬 Videos" : cat}
              </button>
            ))}
          </div>

          {/* Photo Masonry Grid */}
          {!isVideoTab && (
            <>
              <div className="columns-1 sm:columns-2 lg:columns-3 gap-4 space-y-4">
                {filtered.map((img, i) => (
                  <div
                    key={`${img.src}-${i}`}
                    className={`break-inside-avoid group cursor-pointer rounded-2xl overflow-hidden glow-card ${
                      isVisible ? "animate-fade-in-up" : "opacity-0"
                    }`}
                    style={{ animationDelay: `${i * 80}ms`, animationFillMode: "forwards" }}
                    onClick={() => setLightbox(i)}
                  >
                    <div className="overflow-hidden relative">
                      <img
                        src={img.src}
                        alt={img.alt}
                        loading="lazy"
                        className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-all duration-500 flex items-center justify-center">
                        <span className="text-white text-xs font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-black/50 px-3 py-1 rounded-full">
                          {img.category}
                        </span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

            </>
          )}

          {/* Videos Grid */}
          {isVideoTab && (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {videos.map((video, i) => (
                <div
                  key={video.src}
                  className={`group rounded-2xl overflow-hidden glow-card cursor-pointer relative ${
                    isVisible ? "animate-fade-in-up" : "opacity-0"
                  }`}
                  style={{ animationDelay: `${i * 80}ms`, animationFillMode: "forwards" }}
                  onClick={() => setActiveVideo(video.src)}
                >
                  <video
                    src={video.src}
                    className="w-full aspect-video object-cover"
                    muted
                    preload="metadata"
                  />
                  <div className="absolute inset-0 bg-black/40 group-hover:bg-black/50 transition-all duration-300 flex items-center justify-center">
                    <div className="w-14 h-14 rounded-full bg-gold/90 flex items-center justify-center shadow-xl group-hover:scale-110 transition-transform duration-300">
                      <Play className="w-6 h-6 text-white ml-1" fill="white" />
                    </div>
                  </div>
                  <div className="absolute bottom-3 left-3 text-white/80 text-xs bg-black/50 px-2 py-1 rounded">
                    Video {i + 1}
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Photo Lightbox */}
      {lightbox !== null && (
        <div
          className="fixed inset-0 z-[100] bg-black/95 flex items-center justify-center p-4 animate-scale-in"
          onClick={() => setLightbox(null)}
        >
          <button
            onClick={() => setLightbox(null)}
            className="absolute top-4 right-4 p-2 rounded-full bg-white/10 hover:bg-white/20 transition-colors z-10"
            style={{ color: "hsl(40, 50%, 90%)" }}
          >
            <X className="w-6 h-6" />
          </button>
          <button
            onClick={(e) => { e.stopPropagation(); prev(); }}
            className="absolute left-4 top-1/2 -translate-y-1/2 p-3 rounded-full bg-white/10 hover:bg-white/20 transition-colors z-10"
            style={{ color: "hsl(40, 50%, 90%)" }}
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
          <img
            src={filtered[lightbox]?.src}
            alt={filtered[lightbox]?.alt}
            className="max-w-full max-h-[85vh] rounded-2xl object-contain"
            onClick={(e) => e.stopPropagation()}
          />
          <button
            onClick={(e) => { e.stopPropagation(); next(); }}
            className="absolute right-14 top-1/2 -translate-y-1/2 p-3 rounded-full bg-white/10 hover:bg-white/20 transition-colors z-10"
            style={{ color: "hsl(40, 50%, 90%)" }}
          >
            <ChevronRight className="w-6 h-6" />
          </button>
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 text-white/60 text-sm">
            {lightbox + 1} / {filtered.length}
          </div>
        </div>
      )}

      {/* Video Lightbox */}
      {activeVideo && (
        <div
          className="fixed inset-0 z-[100] bg-black/95 flex items-center justify-center p-4 animate-scale-in"
          onClick={() => setActiveVideo(null)}
        >
          <button
            onClick={() => setActiveVideo(null)}
            className="absolute top-4 right-4 p-2 rounded-full bg-white/10 hover:bg-white/20 transition-colors z-10"
            style={{ color: "hsl(40, 50%, 90%)" }}
          >
            <X className="w-6 h-6" />
          </button>
          <video
            src={activeVideo}
            controls
            autoPlay
            className="max-w-full max-h-[85vh] rounded-2xl"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}
    </>
  );
};

export default GallerySection;
