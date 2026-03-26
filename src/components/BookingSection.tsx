import { useState } from "react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { CheckCircle, Calendar, Users, MessageSquare, Send, Sparkles, MapPin, Clock, ShieldCheck } from "lucide-react";
import SectionParticles from "./SectionParticles";

const eventTypes = [
  "Wedding & Reception", "Ring Ceremony", "Birthday Party", "Thread Ceremony",
  "Corporate Event", "School/College Event", "Pre-wedding Shoot",
  "Trade Fair / Exhibition", "Picnic / Family Outing", "Other",
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
    setTimeout(() => setSubmitted(false), 5000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  return (
    <section
      id="booking"
      className="section-padding relative overflow-hidden"
      ref={ref}
      style={{
        background: "linear-gradient(135deg, hsl(43, 70%, 94%) 0%, hsl(35, 60%, 88%) 100%)",
      }}
    >
      {/* Golden Hour Background Elements */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none opacity-40">
         <div className="absolute top-[-20%] left-[-10%] w-[60%] h-[60%] rounded-full bg-amber-200/30 blur-[150px]" />
         <div className="absolute bottom-[-20%] right-[-10%] w-[50%] h-[50%] rounded-full bg-orange-100/20 blur-[130px]" />
      </div>

      <SectionParticles />
      
      <div className="container mx-auto relative z-[2] px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center max-w-6xl mx-auto">
          
          {/* Left Column: Text & Content */}
          <div className={`space-y-10 ${isVisible ? "animate-fade-in-left" : "opacity-0"}`} style={{ animationFillMode: "forwards" }}>
            <div>
              <span 
                className="inline-block px-5 py-2 rounded-full text-xs font-bold tracking-[0.2em] uppercase mb-8 shadow-2xl shadow-amber-900/15" 
                style={{ background: "#e0a11d", color: "white" }}
              >
                Reserve Your Date
              </span>
              <h2 className="text-4xl md:text-6xl font-serif font-bold leading-tight mb-8" style={{ color: "hsl(30,40%,15%)" }}>
                Book Your <br />
                <span className="text-gradient-gold">Dream Event</span>
              </h2>
              <p className="text-lg opacity-70 leading-relaxed max-w-lg">
                Fill in the details below and our team will get back to you within 24 hours to craft your perfect, once-in-a-lifetime celebration.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {[
                { icon: Clock, title: "Quick Response", desc: "Under 24 hours" },
                { icon: ShieldCheck, title: "Verified Dates", desc: "Guaranteed booking" },
              ].map((item) => (
                <div key={item.title} className="flex items-center gap-4 p-5 rounded-3xl bg-white/50 border border-white/80 shadow-sm transition-all hover:bg-white/80">
                  <item.icon className="w-5 h-5 text-[#e0a11d]" />
                  <div>
                    <h4 className="font-bold text-sm" style={{ color: "hsl(30,40%,15%)" }}>{item.title}</h4>
                    <p className="text-xs opacity-60">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column: The Form */}
          <div className={`${isVisible ? "animate-fade-in-right" : "opacity-0"}`} style={{ animationFillMode: "forwards" }}>
            <div 
              className="relative rounded-[2rem] p-8 md:p-10 overflow-hidden shadow-2xl transition-all duration-700 hover:shadow-amber-900/10"
              style={{
                background: "rgba(255, 255, 255, 0.95)",
                backdropFilter: "blur(40px)",
                border: "2px solid white",
                boxShadow: "0 30px 70px rgba(180, 130, 0, 0.12)",
              }}
            >
              {submitted ? (
                <div className="text-center py-16 animate-scale-in">
                  <CheckCircle className="w-16 h-16 text-sage mx-auto mb-6" />
                  <h3 className="text-2xl font-bold mb-3">Request Received!</h3>
                  <p className="text-sm opacity-70">We'll contact you within 24 hours.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div className="relative group">
                      <input
                        type="text"
                        name="name"
                        required
                        value={form.name}
                        onChange={handleChange}
                        placeholder="Full Name *"
                        className="w-full px-5 py-3 rounded-2xl border-2 border-amber-50 bg-white/80 text-base focus:outline-none focus:border-[#e0a11d] focus:ring-8 focus:ring-[#e0a11d]/5 transition-all placeholder:text-gray-400"
                      />
                    </div>
                    <div className="relative group">
                      <input
                        type="tel"
                        name="phone"
                        required
                        value={form.phone}
                        onChange={handleChange}
                        placeholder="Phone Number *"
                        className="w-full px-5 py-3 rounded-2xl border-2 border-amber-50 bg-white/80 text-base focus:outline-none focus:border-[#e0a11d] focus:ring-8 focus:ring-[#e0a11d]/5 transition-all placeholder:text-gray-400"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div className="relative group">
                      <select
                        name="eventType"
                        required
                        value={form.eventType}
                        onChange={handleChange}
                        className="w-full px-5 py-3 rounded-2xl border-2 border-amber-50 bg-white/80 text-base focus:outline-none focus:border-[#e0a11d] transition-all cursor-pointer appearance-none text-gray-700"
                      >
                        <option value="" disabled>Select Event Type *</option>
                        {eventTypes.map((t) => <option key={t} value={t}>{t}</option>)}
                      </select>
                    </div>
                    <div className="relative group">
                      <input
                        type="date"
                        name="date"
                        required
                        value={form.date}
                        onChange={handleChange}
                        className="w-full px-5 py-3 rounded-2xl border-2 border-amber-50 bg-white/80 text-base focus:outline-none focus:border-[#e0a11d] transition-all text-gray-700"
                      />
                    </div>
                  </div>

                  <textarea
                    name="message"
                    rows={3}
                    value={form.message}
                    onChange={handleChange}
                    placeholder="Tell us about your special requirements..."
                    className="w-full px-5 py-4 rounded-2xl border-2 border-amber-50 bg-white/80 text-base focus:outline-none focus:border-[#e0a11d] transition-all resize-none placeholder:text-gray-400"
                  />

                  <button
                    type="submit"
                    className="w-full py-4 rounded-2xl bg-[#e0a11d] text-white font-black text-lg tracking-[0.1em] uppercase shadow-xl hover:-translate-y-1 active:scale-[0.98] transition-all flex items-center justify-center gap-3 group"
                  >
                    <Send className="w-5 h-5 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
                    Confirm Request
                  </button>
                </form>
              )}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default BookingSection;
