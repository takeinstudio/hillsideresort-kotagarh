import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import eventWedding from "@/assets/event-wedding.jpg";
import eventRing from "@/assets/event-ring.jpg";
import eventBirthday from "@/assets/event-birthday.jpg";
import eventCorporate from "@/assets/event-corporate.jpg";
import eventPrewedding from "@/assets/event-prewedding.jpg";
import parkView from "@/assets/park-view.jpg";

const events = [
  { title: "Wedding & Reception", emoji: "💒", image: eventWedding, desc: "Grand celebrations in a stunning hillside setting" },
  { title: "Ring Ceremony", emoji: "💍", image: eventRing, desc: "Intimate engagement celebrations with premium decor" },
  { title: "Birthday Parties", emoji: "🎉", image: eventBirthday, desc: "Colorful celebrations for all ages" },
  { title: "Corporate Events", emoji: "🏢", image: eventCorporate, desc: "Professional conferences & team events" },
  { title: "Pre-wedding Shoots", emoji: "🎬", image: eventPrewedding, desc: "Picture-perfect backdrops for your story" },
  { title: "Picnic & Family Outings", emoji: "🌿", image: parkView, desc: "Scenic nature experiences for families" },
  { title: "Thread Ceremony", emoji: "🧵", desc: "Traditional Bratopanayan celebrations", image: eventWedding },
  { title: "School & College Events", emoji: "🎓", desc: "Large-scale institutional gatherings", image: eventCorporate },
  { title: "Trade Fairs & Exhibitions", emoji: "🛍️", desc: "Spacious venue for exhibitions & fairs", image: parkView },
];

const EventShowcase = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section id="events" className="section-padding gradient-premium">
      <div className="container mx-auto" ref={ref}>
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium tracking-wider uppercase mb-4">
            Our Services
          </span>
          <h2 className="section-title text-foreground">
            Premium <span className="text-gradient-gold">Event Experiences</span>
          </h2>
          <p className="section-subtitle mt-4">
            From grand weddings to intimate celebrations, we craft unforgettable moments in nature's embrace
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {events.map((event, i) => (
            <div
              key={event.title}
              className={`group relative rounded-2xl overflow-hidden glow-card cursor-pointer ${
                isVisible ? "animate-fade-in-up" : "opacity-0"
              }`}
              style={{ animationDelay: `${i * 100}ms`, animationFillMode: "forwards" }}
            >
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src={event.image}
                  alt={event.title}
                  loading="lazy"
                  width={800}
                  height={600}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <span className="text-2xl mb-2 block">{event.emoji}</span>
                <h3 className="text-xl font-serif font-bold mb-1" style={{ color: "hsl(40, 50%, 95%)" }}>
                  {event.title}
                </h3>
                <p className="text-sm" style={{ color: "hsl(40, 30%, 80%)" }}>{event.desc}</p>
              </div>
              <div className="absolute inset-0 border-2 border-transparent group-hover:border-gold/40 rounded-2xl transition-colors duration-500" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EventShowcase;
