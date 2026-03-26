import { useState } from "react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { CheckCircle } from "lucide-react";

const eventTypes = [
  "Wedding & Reception",
  "Ring Ceremony",
  "Birthday Party",
  "Thread Ceremony",
  "Corporate Event",
  "School/College Event",
  "Pre-wedding Shoot",
  "Trade Fair / Exhibition",
  "Picnic / Family Outing",
  "Other",
];

const BookingSection = () => {
  const { ref, isVisible } = useScrollAnimation();
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({
    name: "", phone: "", email: "", eventType: "", date: "", guests: "", message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 4000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  return (
    <section id="booking" className="section-padding gradient-premium" ref={ref}>
      <div className="container mx-auto max-w-3xl">
        <div className="text-center mb-12">
          <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium tracking-wider uppercase mb-4">
            Reserve Your Date
          </span>
          <h2 className="section-title text-foreground">
            Book Your <span className="text-gradient-gold">Event</span>
          </h2>
          <p className="section-subtitle mt-4">
            Fill in the details below and our team will get back to you within 24 hours
          </p>
        </div>

        <div
          className={`glass rounded-3xl p-6 md:p-10 ${isVisible ? "animate-scale-in" : "opacity-0"}`}
          style={{ animationFillMode: "forwards" }}
        >
          {submitted ? (
            <div className="text-center py-12 animate-scale-in">
              <CheckCircle className="w-16 h-16 text-sage mx-auto mb-4" />
              <h3 className="text-2xl font-serif font-bold text-foreground mb-2">Booking Request Sent!</h3>
              <p className="text-muted-foreground">We'll contact you within 24 hours to confirm your event details.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <div className="relative">
                  <input
                    type="text"
                    name="name"
                    required
                    value={form.name}
                    onChange={handleChange}
                    placeholder=" "
                    className="peer w-full px-4 pt-6 pb-2 rounded-xl border border-border bg-background/50 text-foreground focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-all"
                  />
                  <label className="absolute left-4 top-2 text-xs text-muted-foreground peer-placeholder-shown:top-4 peer-placeholder-shown:text-sm peer-focus:top-2 peer-focus:text-xs transition-all">
                    Full Name *
                  </label>
                </div>
                <div className="relative">
                  <input
                    type="tel"
                    name="phone"
                    required
                    value={form.phone}
                    onChange={handleChange}
                    placeholder=" "
                    className="peer w-full px-4 pt-6 pb-2 rounded-xl border border-border bg-background/50 text-foreground focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-all"
                  />
                  <label className="absolute left-4 top-2 text-xs text-muted-foreground peer-placeholder-shown:top-4 peer-placeholder-shown:text-sm peer-focus:top-2 peer-focus:text-xs transition-all">
                    Phone Number *
                  </label>
                </div>
              </div>

              <div className="relative">
                <input
                  type="email"
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                  placeholder=" "
                  className="peer w-full px-4 pt-6 pb-2 rounded-xl border border-border bg-background/50 text-foreground focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-all"
                />
                <label className="absolute left-4 top-2 text-xs text-muted-foreground peer-placeholder-shown:top-4 peer-placeholder-shown:text-sm peer-focus:top-2 peer-focus:text-xs transition-all">
                  Email Address
                </label>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
                <select
                  name="eventType"
                  required
                  value={form.eventType}
                  onChange={handleChange}
                  className="w-full px-4 py-3.5 rounded-xl border border-border bg-background/50 text-foreground focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-all"
                >
                  <option value="">Event Type *</option>
                  {eventTypes.map((t) => <option key={t} value={t}>{t}</option>)}
                </select>
                <input
                  type="date"
                  name="date"
                  required
                  value={form.date}
                  onChange={handleChange}
                  className="w-full px-4 py-3.5 rounded-xl border border-border bg-background/50 text-foreground focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-all"
                />
                <div className="relative">
                  <input
                    type="number"
                    name="guests"
                    value={form.guests}
                    onChange={handleChange}
                    placeholder=" "
                    className="peer w-full px-4 pt-6 pb-2 rounded-xl border border-border bg-background/50 text-foreground focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-all"
                  />
                  <label className="absolute left-4 top-2 text-xs text-muted-foreground peer-placeholder-shown:top-4 peer-placeholder-shown:text-sm peer-focus:top-2 peer-focus:text-xs transition-all">
                    Guest Count
                  </label>
                </div>
              </div>

              <textarea
                name="message"
                rows={3}
                value={form.message}
                onChange={handleChange}
                placeholder="Any special requirements or message..."
                className="w-full px-4 py-3.5 rounded-xl border border-border bg-background/50 text-foreground focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-all resize-none"
              />

              <button
                type="submit"
                className="w-full py-4 rounded-xl gradient-gold text-primary-foreground font-semibold text-lg shadow-lg hover:shadow-xl transition-all hover:scale-[1.02] active:scale-[0.98] glow-gold"
              >
                Submit Booking Request
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
};

export default BookingSection;
