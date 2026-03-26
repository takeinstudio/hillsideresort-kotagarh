import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { Instagram, Facebook } from "lucide-react";

const SocialSection = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section className="section-padding gradient-premium" ref={ref}>
      <div className="container mx-auto max-w-4xl text-center">
        <div className="mb-12">
          <span className="inline-block px-4 py-1.5 rounded-full bg-rose-light text-foreground text-sm font-medium tracking-wider uppercase mb-4">
            Stay Connected
          </span>
          <h2 className="section-title text-foreground">
            Follow Our <span className="text-gradient-gold">Journey</span>
          </h2>
        </div>

        <div className={`grid grid-cols-1 sm:grid-cols-2 gap-6 ${isVisible ? "animate-fade-in-up" : "opacity-0"}`} style={{ animationFillMode: "forwards" }}>
          <a
            href="https://www.instagram.com/kotagarh_park/"
            target="_blank"
            rel="noopener noreferrer"
            className="group glass rounded-2xl p-8 glow-card text-center"
          >
            <div className="w-16 h-16 mx-auto rounded-2xl bg-gradient-to-br from-pink-500 via-red-500 to-yellow-500 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform shadow-lg">
              <Instagram className="w-8 h-8" style={{ color: "white" }} />
            </div>
            <h3 className="text-xl font-serif font-bold text-foreground mb-1">Instagram</h3>
            <p className="text-muted-foreground text-sm mb-4">@kotagarh_park</p>
            <span className="inline-block px-6 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium group-hover:bg-primary group-hover:text-primary-foreground transition-all">
              Follow Us
            </span>
          </a>

          <a
            href="https://www.facebook.com/p/Hillside-park-resort-KOTAGARH-PARK-100088110218620/"
            target="_blank"
            rel="noopener noreferrer"
            className="group glass rounded-2xl p-8 glow-card text-center"
          >
            <div className="w-16 h-16 mx-auto rounded-2xl bg-blue-600 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform shadow-lg">
              <Facebook className="w-8 h-8" style={{ color: "white" }} />
            </div>
            <h3 className="text-xl font-serif font-bold text-foreground mb-1">Facebook</h3>
            <p className="text-muted-foreground text-sm mb-4">Hillside Park Resort</p>
            <span className="inline-block px-6 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium group-hover:bg-primary group-hover:text-primary-foreground transition-all">
              Like Our Page
            </span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default SocialSection;
