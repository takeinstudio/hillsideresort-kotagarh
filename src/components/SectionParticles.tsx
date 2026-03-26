// Reusable floating golden spark particles for light-background sections
const particles = Array.from({ length: 22 }, (_, i) => ({
  id: i,
  left: Math.random() * 100,
  delay: Math.random() * 12,
  duration: 7 + Math.random() * 9,
  size: 2 + Math.random() * 3,
  opacity: 0.25 + Math.random() * 0.45,
}));

const SectionParticles = () => (
  <>
    {particles.map((p) => (
      <div
        key={p.id}
        className="absolute rounded-full pointer-events-none"
        style={{
          left: `${p.left}%`,
          width: p.size,
          height: p.size,
          background: `rgba(180,120,0,${p.opacity})`,
          animation: `particle-float ${p.duration}s linear ${p.delay}s infinite`,
          zIndex: 1,
        }}
      />
    ))}
  </>
);

export default SectionParticles;
