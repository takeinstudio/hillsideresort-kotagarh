import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { Star } from "lucide-react";
import { useState, useEffect } from "react";

const reviews = [
  { name: "Rajesh Panda", text: "Absolutely stunning venue! Our wedding was a dream come true. The hillside setting with lights was magical.", rating: 5 },
  { name: "Priya Mohanty", text: "Best event destination in Nayagarh district. The staff was incredibly helpful and the decorations were top-notch.", rating: 5 },
  { name: "Suresh Dash", text: "Hosted our corporate retreat here. The facilities are excellent and the natural surroundings are breathtaking.", rating: 4 },
  { name: "Sanjukta Behera", text: "My daughter's birthday party was unforgettable. The park is beautiful and the mandap is perfect for celebrations.", rating: 5 },
  { name: "Bikram Sahu", text: "Great venue for family outings. Clean, well-maintained, and the entry price is very reasonable.", rating: 4 },
];

const ReviewsSection = () => {
  const { ref, isVisible } = useScrollAnimation();
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const t = setInterval(() => setCurrent((c) => (c + 1) % reviews.length), 5000);
    return () => clearInterval(t);
  }, []);

  return (
    <section className="section-padding bg-background" ref={ref}>
      <div className="container mx-auto max-w-4xl">
        <div className="text-center mb-12">
          <span className="inline-block px-4 py-1.5 rounded-full bg-gold-light text-foreground text-sm font-medium tracking-wider uppercase mb-4">
            Testimonials
          </span>
          <h2 className="section-title text-foreground">
            What Our <span className="text-gradient-gold">Guests Say</span>
          </h2>
          <div className="flex items-center justify-center gap-2 mt-4">
            <div className="flex">
              {[1, 2, 3, 4].map((s) => (
                <Star key={s} className="w-5 h-5 fill-primary text-primary" />
              ))}
              <Star className="w-5 h-5 text-primary fill-primary/40" />
            </div>
            <span className="text-lg font-semibold text-foreground">4.3</span>
            <span className="text-muted-foreground text-sm">Average Rating</span>
          </div>
        </div>

        <div className={`${isVisible ? "animate-fade-in-up" : "opacity-0"}`} style={{ animationFillMode: "forwards" }}>
          <div className="glass rounded-3xl p-8 md:p-12 text-center relative overflow-hidden">
            <div className="text-6xl text-primary/20 font-serif absolute top-4 left-8">"</div>
            <p className="text-lg md:text-xl text-foreground leading-relaxed mb-6 relative z-10">
              {reviews[current].text}
            </p>
            <div className="flex items-center justify-center gap-1 mb-3">
              {Array.from({ length: reviews[current].rating }, (_, i) => (
                <Star key={i} className="w-4 h-4 fill-primary text-primary" />
              ))}
            </div>
            <p className="font-semibold text-foreground">{reviews[current].name}</p>

            {/* Dots */}
            <div className="flex justify-center gap-2 mt-8">
              {reviews.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrent(i)}
                  className={`w-2.5 h-2.5 rounded-full transition-all ${
                    i === current ? "bg-primary w-8" : "bg-primary/30"
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ReviewsSection;
