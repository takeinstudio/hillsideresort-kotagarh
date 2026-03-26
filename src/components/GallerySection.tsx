import { useState } from "react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { X } from "lucide-react";
import heroImage from "@/assets/hero-wedding.jpg";
import eventWedding from "@/assets/event-wedding.jpg";
import eventRing from "@/assets/event-ring.jpg";
import eventBirthday from "@/assets/event-birthday.jpg";
import eventCorporate from "@/assets/event-corporate.jpg";
import eventPrewedding from "@/assets/event-prewedding.jpg";
import parkView from "@/assets/park-view.jpg";
import galleryNight from "@/assets/gallery-night.jpg";
import facilityDining from "@/assets/facility-dining.jpg";

const categories = ["All", "Weddings", "Night Lighting", "Park Views", "Events"];

const images = [
  { src: heroImage, category: "Weddings", alt: "Wedding venue at night" },
  { src: eventWedding, category: "Weddings", alt: "Wedding reception hall" },
  { src: eventRing, category: "Weddings", alt: "Ring ceremony setup" },
  { src: galleryNight, category: "Night Lighting", alt: "Night lighting at park" },
  { src: parkView, category: "Park Views", alt: "Scenic park view" },
  { src: eventBirthday, category: "Events", alt: "Birthday party decoration" },
  { src: eventCorporate, category: "Events", alt: "Corporate event setup" },
  { src: eventPrewedding, category: "Park Views", alt: "Pre-wedding photoshoot" },
  { src: facilityDining, category: "Events", alt: "Premium dining setup" },
];

const GallerySection = () => {
  const { ref, isVisible } = useScrollAnimation();
  const [filter, setFilter] = useState("All");
  const [lightbox, setLightbox] = useState<number | null>(null);

  const filtered = filter === "All" ? images : images.filter((img) => img.category === filter);

  return (
    <>
      <section id="gallery" className="section-padding bg-background" ref={ref}>
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <span className="inline-block px-4 py-1.5 rounded-full bg-rose-light text-foreground text-sm font-medium tracking-wider uppercase mb-4">
              Visual Journey
            </span>
            <h2 className="section-title text-foreground">
              Premium <span className="text-gradient-gold">Gallery</span>
            </h2>
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
                {cat}
              </button>
            ))}
          </div>

          {/* Masonry Grid */}
          <div className="columns-1 sm:columns-2 lg:columns-3 gap-4 space-y-4">
            {filtered.map((img, i) => (
              <div
                key={`${img.src}-${i}`}
                className={`break-inside-avoid group cursor-pointer rounded-2xl overflow-hidden glow-card ${
                  isVisible ? "animate-fade-in-up" : "opacity-0"
                }`}
                style={{ animationDelay: `${i * 100}ms`, animationFillMode: "forwards" }}
                onClick={() => setLightbox(i)}
              >
                <div className="overflow-hidden">
                  <img
                    src={img.src}
                    alt={img.alt}
                    loading="lazy"
                    className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox */}
      {lightbox !== null && (
        <div
          className="fixed inset-0 z-[100] bg-black/90 flex items-center justify-center p-4 animate-scale-in"
          onClick={() => setLightbox(null)}
        >
          <button
            onClick={() => setLightbox(null)}
            className="absolute top-4 right-4 p-2 rounded-full bg-white/10 hover:bg-white/20 transition-colors"
            style={{ color: "hsl(40, 50%, 90%)" }}
          >
            <X className="w-6 h-6" />
          </button>
          <img
            src={filtered[lightbox]?.src}
            alt={filtered[lightbox]?.alt}
            className="max-w-full max-h-[85vh] rounded-2xl object-contain"
          />
        </div>
      )}
    </>
  );
};

export default GallerySection;
