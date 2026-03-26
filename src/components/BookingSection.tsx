import { useState } from "react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { CheckCircle, Calendar, Users, MessageSquare, Send, Sparkles, MapPin, Clock, ShieldCheck } from "lucide-react";
import SectionParticles from "./SectionParticles";

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
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
         <div 
           className="absolute inset-0 bg-cover bg-center opacity-[0.03] scale-110"
           style={{ backgroundImage: "url('/gallery/gallery (11).jpg')" }}
         />
         <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] rounded-full bg-amber-200/40 blur-[120px] animate-pulse-soft" />
         <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] rounded-full bg-orange-100/30 blur-[100px] animate-float" />
      </div>

      <SectionParticles />
      
      <div
        className="absolute inset-0 pointer-events-none z-[1]"
        style={{ background: "radial-gradient(circle at 30% 40%, rgba(224, 161, 29, 0.15) 0%, transparent 60%)" }}
      />

      <div className="container mx-auto relative z-[2] px-4 md:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center max-w-7xl mx-auto">
          
          {/* Left Column: Text & Content */}
          <div className={`space-y-8 ${isVisible ? "animate-fade-in-left" : "opacity-0"}`} style={{ animationFillMode: "forwards" }}>
            <div>
              <span 
                className="inline-block px-5 py-2 rounded-full text-xs font-bold tracking-[0.2em] uppercase mb-6 shadow-xl shadow-amber-900/10" 
                style={{ background: "#e0a11d", color: "white", border: "none" }}
              >
                Reserve Your Date
              </span>
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold leading-tight mb-6" style={{ color: "hsl(30,40%,15%)" }}>
                Book Your <br />
                <span className="text-gradient-gold">Dream Event</span>
              </h2>
              <p className="text-lg md:text-xl opacity-70 leading-relaxed max-w-md">
                Fill in the details below and our team will get back to you within 24 hours to craft your perfect celebration.
              </p>
            </div>

            <div className="space-y-6">
              {[
                { icon: Clock, title: "Quick Response", desc: "Get confirmation within 24 hours" },
                { icon: MapPin, title: "Premium Venue", desc: "Heart of Odisha, nature-infused" },
                { icon: ShieldCheck, title: "Verified Dates", desc: "No double bookings, guaranteed" },
              ].map((item, i) => (
                <div key={item.title} className="flex items-start gap-4 group">
                  <div className="w-12 h-12 rounded-2xl bg-white shadow-md flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                    <item.icon className="w-6 h-6 text-[#e0a11d]" />
                  </div>
                  <div>
                    <h4 className="font-bold text-lg mb-1" style={{ color: "hsl(30,40%,15%)" }}>{item.title}</h4>
                    <p className="text-sm opacity-60 leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="pt-6">
               <div className="w-20 h-1 bg-[#e0a11d]/40 rounded-full" />
            </div>
          </div>

          {/* Right Column: The Form */}
          <div
            className={`relative ${isVisible ? "animate-fade-in-right" : "opacity-0"}`}
            style={{ animationFillMode: "forwards" }}
          >
            {/* Decorative floating icon */}
            <div className="absolute -top-6 -right-6 w-16 h-16 bg-white rounded-2xl shadow-2xl flex items-center justify-center transform rotate-12 z-[10] border border-amber-100 hidden md:flex animate-float">
               <Calendar className="w-8 h-8 text-[#e0a11d]" />
            </div>

            <div 
              className="relative rounded-[2.5rem] p-8 md:p-10 lg:p-12 overflow-hidden shadow-2xl"
              style={{
                background: "rgba(255, 255, 255, 0.85)",
                backdropFilter: "blur(30px)",
                border: "1.5px solid white",
                boxShadow: "0 30px 70px rgba(180, 130, 0, 0.15), inset 0 0 0 1px rgba(255,255,255,1)",
              }}
            >
              {submitted ? (
                <div className="text-center py-16 animate-scale-in">
                  <div className="w-24 h-24 bg-sage/10 rounded-full flex items-center justify-center mx-auto mb-6 border-2 border-sage/20">
                     <CheckCircle className="w-12 h-12 text-sage animate-bounce" />
                  </div>
                  <h3 className="text-3xl font-serif font-bold mb-3" style={{ color: "hsl(140, 20%, 20%)" }}>
                    Request Received!
                  </h3>
                  <p className="text-lg opacity-80" style={{ color: "hsl(140, 20%, 30%)" }}>
                    We'll contact you within 24 hours to confirm your event details.
                  </p>
                  <div className="mt-8 flex justify-center gap-2">
                     <Sparkles className="w-5 h-5 text-amber-400" />
                     <Sparkles className="w-5 h-5 text-amber-400" />
                     <Sparkles className="w-5 h-5 text-amber-400" />
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Row 1: Name & Phone */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div className="relative group">
                      <input
                        type="text"
                        name="name"
                        required
                        value={form.name}
                        onChange={handleChange}
                        placeholder=" "
                        className="peer w-full px-5 pt-7 pb-3 rounded-2xl border-2 border-amber-50 bg-white/50 text-foreground text-base focus:outline-none focus:border-[#e0a11d] focus:ring-4 focus:ring-[#e0a11d]/5 transition-all"
                      />
                      <label className="absolute left-5 top-2.5 text-[10px] font-bold text-[#e0a11d] tracking-widest uppercase peer-placeholder-shown:top-5 peer-placeholder-shown:text-sm peer-placeholder-shown:font-medium peer-placeholder-shown:text-muted-foreground peer-focus:top-2.5 peer-focus:text-[10px] peer-focus:font-bold peer-focus:text-[#e0a11d] transition-all pointer-events-none">
                        Full Name *
                      </label>
                    </div>
                    <div className="relative group">
                      <input
                        type="tel"
                        name="phone"
                        required
                        value={form.phone}
                        onChange={handleChange}
                        placeholder=" "
                        className="peer w-full px-5 pt-7 pb-3 rounded-2xl border-2 border-amber-50 bg-white/50 text-foreground text-base focus:outline-none focus:border-[#e0a11d] focus:ring-4 focus:ring-[#e0a11d]/5 transition-all"
                      />
                      <label className="absolute left-5 top-2.5 text-[10px] font-bold text-[#e0a11d] tracking-widest uppercase peer-placeholder-shown:top-5 peer-placeholder-shown:text-sm peer-placeholder-shown:font-medium peer-placeholder-shown:text-muted-foreground peer-focus:top-2.5 peer-focus:text-[10px] peer-focus:font-bold peer-focus:text-[#e0a11d] transition-all pointer-events-none">
                        Phone *
                      </label>
                    </div>
                  </div>

                  {/* Row 2: Email & Event Type */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div className="relative group">
                      <input
                        type="email"
                        name="email"
                        value={form.email}
                        onChange={handleChange}
                        placeholder=" "
                        className="peer w-full px-5 pt-7 pb-3 rounded-2xl border-2 border-amber-50 bg-white/50 text-foreground text-base focus:outline-none focus:border-[#e0a11d] focus:ring-4 focus:ring-[#e0a11d]/5 transition-all"
                      />
                      <label className="absolute left-5 top-2.5 text-[10px] font-bold text-[#e0a11d] tracking-widest uppercase peer-placeholder-shown:top-5 peer-placeholder-shown:text-sm peer-placeholder-shown:font-medium peer-placeholder-shown:text-muted-foreground peer-focus:top-2.5 peer-focus:text-[10px] peer-focus:font-bold peer-focus:text-[#e0a11d] transition-all pointer-events-none">
                        Email
                      </label>
                    </div>
                    <div className="relative">
                      <select
                        name="eventType"
                        required
                        value={form.eventType}
                        onChange={handleChange}
                        className="w-full px-5 py-4 rounded-2xl border-2 border-amber-50 bg-white/50 text-foreground text-sm focus:outline-none focus:border-[#e0a11d] focus:ring-4 focus:ring-[#e0a11d]/5 transition-all appearance-none cursor-pointer"
                      >
                        <option value="" disabled>Event Type *</option>
                        {eventTypes.map((t) => <option key={t} value={t}>{t}</option>)}
                      </select>
                      <div className="absolute right-5 top-1/2 -translate-y-1/2 pointer-events-none text-[#e0a11d]">
                         <Users className="w-4 h-4" />
                      </div>
                    </div>
                  </div>

                  {/* Row 3: Date & Guest Count */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div className="relative group">
                      <input
                        type="date"
                        name="date"
                        required
                        value={form.date}
                        onChange={handleChange}
                        className="w-full px-5 py-4 rounded-2xl border-2 border-amber-50 bg-white/50 text-foreground text-sm focus:outline-none focus:border-[#e0a11d] focus:ring-4 focus:ring-[#e0a11d]/5 transition-all cursor-pointer"
                      />
                    </div>
                    <div className="relative group">
                      <input
                        type="number"
                        name="guests"
                        value={form.guests}
                        onChange={handleChange}
                        placeholder=" "
                        className="peer w-full px-5 pt-7 pb-3 rounded-2xl border-2 border-amber-50 bg-white/50 text-foreground text-base focus:outline-none focus:border-[#e0a11d] focus:ring-4 focus:ring-[#e0a11d]/5 transition-all"
                      />
                      <label className="absolute left-5 top-2.5 text-[10px] font-bold text-[#e0a11d] tracking-widest uppercase peer-placeholder-shown:top-5 peer-placeholder-shown:text-sm peer-placeholder-shown:font-medium peer-placeholder-shown:text-muted-foreground peer-focus:top-2.5 peer-focus:text-[10px] peer-focus:font-bold peer-focus:text-[#e0a11d] transition-all pointer-events-none">
                        Guests
                      </label>
                    </div>
                  </div>

                  {/* Message */}
                  <div className="relative group">
                    <textarea
                      name="message"
                      rows={2}
                      value={form.message}
                      onChange={handleChange}
                      placeholder=" "
                      className="peer w-full px-5 pt-7 pb-3 rounded-2xl border-2 border-amber-50 bg-white/50 text-foreground text-base focus:outline-none focus:border-[#e0a11d] focus:ring-4 focus:ring-[#e0a11d]/5 transition-all resize-none"
                    />
                    <label className="absolute left-5 top-2.5 text-[10px] font-bold text-[#e0a11d] tracking-widest uppercase peer-placeholder-shown:top-6 peer-placeholder-shown:text-sm peer-placeholder-shown:font-medium peer-placeholder-shown:text-muted-foreground peer-focus:top-2.5 peer-focus:text-[10px] peer-focus:font-bold peer-focus:text-[#e0a11d] transition-all pointer-events-none">
                      Requirements
                    </label>
                  </div>

                  <button
                    type="submit"
                    className="w-full py-5 rounded-2xl bg-[#e0a11d] text-white font-black text-lg tracking-[0.1em] uppercase shadow-2xl shadow-amber-900/20 hover:shadow-amber-900/40 hover:-translate-y-1 active:scale-[0.98] transition-all flex items-center justify-center gap-3 group"
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
