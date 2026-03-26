import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { MapPin, Navigation } from "lucide-react";

const distances = [
  { place: "Rajsunakhala", dist: "4 km" },
  { place: "Nayagarh", dist: "30 km" },
  { place: "Bhubaneswar", dist: "65 km" },
];

const LocationSection = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section className="section-padding bg-background" ref={ref}>
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <span className="inline-block px-4 py-1.5 rounded-full bg-sky-light text-accent-foreground text-sm font-medium tracking-wider uppercase mb-4">
            Find Us
          </span>
          <h2 className="section-title text-foreground">
            Location & <span className="text-gradient-gold">Accessibility</span>
          </h2>
        </div>

        <div className={`grid grid-cols-1 lg:grid-cols-2 gap-8 ${isVisible ? "animate-fade-in-up" : "opacity-0"}`} style={{ animationFillMode: "forwards" }}>
          {/* Map */}
          <div className="rounded-2xl overflow-hidden shadow-lg h-[400px]">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3752.123!2d84.947!3d20.123!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjDCsDA3JzIzLjAiTiA4NMKwNTYnNDkuMiJF!5e0!3m2!1sen!2sin!4v1"
              className="w-full h-full border-0"
              loading="lazy"
              title="Hill Side Kotagarh Park location"
              allowFullScreen
            />
          </div>

          {/* Info */}
          <div className="flex flex-col justify-center">
            <div className="glass rounded-2xl p-8 mb-6">
              <div className="flex items-start gap-4 mb-6">
                <MapPin className="w-6 h-6 text-primary mt-1 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold text-foreground text-lg mb-1">Address</h3>
                  <p className="text-muted-foreground">Chandpur - Rajsunakhala Rd, Kotagarh, Odisha 752065</p>
                </div>
              </div>
              <div className="space-y-3">
                {distances.map((d) => (
                  <div key={d.place} className="flex items-center gap-3 px-4 py-3 rounded-xl bg-muted/50">
                    <Navigation className="w-4 h-4 text-primary" />
                    <span className="text-foreground font-medium">{d.dist}</span>
                    <span className="text-muted-foreground">from {d.place}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LocationSection;
