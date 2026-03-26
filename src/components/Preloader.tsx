import { useEffect, useState } from "react";

const Preloader = () => {
  const [isVisible, setIsVisible] = useState(true);
  const [isExiting, setIsExiting] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsExiting(true);
      setTimeout(() => setIsVisible(false), 1000);
    }, 3500); // Slightly longer for "Luxury" feel

    return () => clearTimeout(timer);
  }, []);

  if (!isVisible) return null;

  return (
    <div
      className={`fixed inset-0 z-[9999] flex items-center justify-center transition-all duration-1000 ease-in-out ${
        isExiting ? "opacity-0 invisible scale-105" : "opacity-100 visible scale-100"
      }`}
      style={{
        background: "#000000",
      }}
    >
      {/* Background Bokeh Particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(12)].map((_, i) => (
          <div
            key={i}
            className="absolute rounded-full bg-[#e0a11d]/20 blur-xl animate-pulse"
            style={{
              width: Math.random() * 100 + 50 + "px",
              height: Math.random() * 100 + 50 + "px",
              top: Math.random() * 100 + "%",
              left: Math.random() * 100 + "%",
              animationDelay: Math.random() * 5 + "s",
              animationDuration: Math.random() * 5 + 5 + "s",
            }}
          />
        ))}
      </div>

      <div className="relative flex flex-col items-center z-10">
        {/* Main Logo Text */}
        <h1 
          className="text-5xl md:text-7xl font-sans font-bold text-white mb-2 tracking-tight opacity-0"
          style={{ 
            animation: "preloader-fade-in-up 0.8s ease-out forwards",
          }}
        >
          Hill Side
        </h1>

        {/* Spaced Subtext */}
        <div 
          className="text-[10px] md:text-xs font-bold tracking-[0.4em] uppercase text-[#e0a11d] mb-2 opacity-0"
          style={{ 
            animation: "preloader-fade-in-up 0.8s ease-out 0.3s forwards",
          }}
        >
          Kotagarh Park &amp; Resort
        </div>

        {/* Third Line: Premium Event Destination */}
        <div 
          className="text-[8px] md:text-[9px] font-medium tracking-[0.3em] uppercase text-white/60 mb-12 opacity-0"
          style={{ 
            animation: "preloader-fade-in-up 0.8s ease-out 0.5s forwards",
          }}
        >
          Premium Event Destination
        </div>

        {/* Progress Container */}
        <div className="w-64 md:w-80 h-[3px] bg-white/10 rounded-full overflow-hidden mb-6 relative">
          <div 
            className="absolute inset-0 bg-[#e0a11d] origin-left"
            style={{ 
              animation: "preloader-progress 2.5s cubic-bezier(0.65, 0, 0.35, 1) forwards",
              boxShadow: "0 0 20px #e0a11d"
            }}
          />
        </div>

        {/* Initializing Message */}
        <div 
          className="text-[9px] md:text-[10px] font-bold tracking-[0.3em] uppercase text-white/40 opacity-0"
          style={{ 
            animation: "preloader-fade-in 1s ease-out 0.8s forwards",
          }}
        >
          Initializing Luxury...
        </div>
      </div>

      <style>{`
        @keyframes preloader-fade-in-up {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes preloader-fade-in {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        @keyframes preloader-progress {
          0% { transform: scaleX(0); }
          100% { transform: scaleX(1); }
        }
      `}</style>
    </div>
  );
};

export default Preloader;
