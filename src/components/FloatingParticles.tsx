import React, { useEffect, useState } from 'react';

interface Particle {
  id: number;
  x: number;
  y: number;
  delay: number;
  color: string;
  size: number;
  duration: number;
}

const FloatingParticles: React.FC = () => {
  const [particles, setParticles] = useState<Particle[]>([]);

  useEffect(() => {
    const colors = [
      'hsl(180 100% 50%)', // cyan
      'hsl(300 100% 50%)', // magenta
      'hsl(120 100% 50%)', // green
      'hsl(270 100% 50%)', // purple
      'hsl(39 100% 50%)',  // orange
    ];

    const createParticle = (id: number): Particle => ({
      id,
      x: Math.random() * 100,
      y: 100,
      delay: Math.random() * 8,
      color: colors[Math.floor(Math.random() * colors.length)],
      size: Math.random() * 3 + 1,
      duration: Math.random() * 4 + 6
    });

    // Create initial particles
    const initialParticles = Array.from({ length: 50 }, (_, i) => createParticle(i));
    setParticles(initialParticles);

    // Add new particles periodically
    const interval = setInterval(() => {
      setParticles(prev => [
        ...prev.slice(-40), // Keep last 40 particles
        ...Array.from({ length: 10 }, (_, i) => createParticle(prev.length + i))
      ]);
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="floating-particles">
      {particles.map((particle) => (
        <div
          key={particle.id}
          className="particle absolute rounded-full"
          style={{
            left: `${particle.x}%`,
            width: `${particle.size}px`,
            height: `${particle.size}px`,
            backgroundColor: particle.color,
            boxShadow: `0 0 ${particle.size * 3}px ${particle.color}`,
            animationDelay: `${particle.delay}s`,
            animationDuration: `${particle.duration}s`,
          }}
        />
      ))}
    </div>
  );
};

export default FloatingParticles;