import React, { useMemo } from "react";

interface Particle {
  id: number;
  size: number;
  x: number;
  y: number;
  opacity: number;
  animationDuration: string;
  animationDelay: string;
}

const Background: React.FC = () => {
  // Pre-compute the particles to avoid regenerating on each render
  const particles = useMemo(() => {
    const count = 100; // Increased number of particles
    return Array.from({ length: count }).map((_, i) => ({
      id: i,
      size: Math.random() * 2 + 1, // Increased size between 1-3px
      x: Math.random() * 100, // Random x position
      y: Math.random() * 200, // Extended range to cover taller pages
      opacity: Math.random() * 0.2 + 0.1, // Increased opacity between 0.1-0.3
      animationDuration: `${3 + Math.random() * 9}s`,
      animationDelay: `${Math.random() * 5}s`,
    })) as Particle[];
  }, []);

  return (
    <div
      className="fixed inset-0 w-full h-screen pointer-events-none z-0 overflow-hidden"
      style={{ minHeight: "200vh" }}
    >
      {particles.map((particle) => (
        <div
          key={particle.id}
          className="absolute rounded-full animate-float"
          style={{
            width: `${particle.size}px`,
            height: `${particle.size}px`,
            top: `${particle.y}%`,
            left: `${particle.x}%`,
            backgroundColor: `rgba(255, 255, 255, ${particle.opacity})`,
            animationDuration: particle.animationDuration,
            animationDelay: particle.animationDelay,
          }}
        />
      ))}
    </div>
  );
};

export default Background;
