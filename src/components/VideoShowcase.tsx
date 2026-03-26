import { useState } from "react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { X } from "lucide-react";

const VideoShowcase = () => {
  const { ref, isVisible } = useScrollAnimation();
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <section className="section-padding gradient-premium" ref={ref}>
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <span className="inline-block px-4 py-1.5 rounded-full bg-sky-light text-accent-foreground text-sm font-medium tracking-wider uppercase mb-4">
              Virtual Tour
            </span>
            <h2 className="section-title text-foreground">
              Experience the Venue <span className="text-gradient-gold">in Motion</span>
            </h2>
          </div>

          <div
            className={`max-w-4xl mx-auto ${isVisible ? "animate-scale-in" : "opacity-0"}`}
            style={{ animationFillMode: "forwards" }}
          >
            <div
              className="relative aspect-video rounded-2xl overflow-hidden glow-card cursor-pointer group"
              onClick={() => setShowModal(true)}
            >
              <img
                src={`https://img.youtube.com/vi/1meuax9-Tyk/maxresdefault.jpg`}
                alt="Venue video tour"
                loading="lazy"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black/30 group-hover:bg-black/20 transition-colors flex items-center justify-center">
                <div className="w-20 h-20 rounded-full bg-primary/90 flex items-center justify-center shadow-xl group-hover:scale-110 transition-transform glow-gold">
                  <div className="w-0 h-0 border-t-[12px] border-t-transparent border-l-[20px] border-l-primary-foreground border-b-[12px] border-b-transparent ml-1" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Video Modal */}
      {showModal && (
        <div
          className="fixed inset-0 z-[100] bg-black/80 flex items-center justify-center p-4 animate-scale-in"
          onClick={() => setShowModal(false)}
        >
          <div className="relative w-full max-w-5xl aspect-video" onClick={(e) => e.stopPropagation()}>
            <button
              onClick={() => setShowModal(false)}
              className="absolute -top-12 right-0 p-2 rounded-full bg-primary/20 hover:bg-primary/40 transition-colors"
              style={{ color: "hsl(40, 50%, 90%)" }}
            >
              <X className="w-6 h-6" />
            </button>
            <iframe
              src="https://www.youtube.com/embed/1meuax9-Tyk?autoplay=1"
              className="w-full h-full rounded-2xl"
              allow="autoplay; encrypted-media"
              allowFullScreen
              title="Hill Side Kotagarh Park venue tour"
            />
          </div>
        </div>
      )}
    </>
  );
};

export default VideoShowcase;
