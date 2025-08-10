import React, { useEffect, useState } from 'react';
import { cn } from '@/lib/utils';

interface GlitchTextProps {
  text: string;
  className?: string;
  variant?: 'title' | 'subtitle' | 'menu';
}

const GlitchText: React.FC<GlitchTextProps> = ({ text, className, variant = 'title' }) => {
  const [glitchedText, setGlitchedText] = useState(text);
  
  const glitchChars = ['@', '#', '$', '%', '^', '&', '*', '~', '|', '\\', '/', '?', '<', '>', '!'];
  
  useEffect(() => {
    const interval = setInterval(() => {
      if (Math.random() < 0.1) { // 10% chance to glitch
        const chars = text.split('');
        const numGlitches = Math.floor(Math.random() * 3) + 1;
        
        for (let i = 0; i < numGlitches; i++) {
          const randomIndex = Math.floor(Math.random() * chars.length);
          chars[randomIndex] = glitchChars[Math.floor(Math.random() * glitchChars.length)];
        }
        
        setGlitchedText(chars.join(''));
        
        // Restore original text after brief moment
        setTimeout(() => setGlitchedText(text), 100);
      }
    }, 150);
    
    return () => clearInterval(interval);
  }, [text, glitchChars]);

  const variants = {
    title: "text-6xl md:text-8xl font-orbitron font-black neon-glow",
    subtitle: "text-2xl md:text-4xl font-orbitron font-bold neon-glow-secondary",
    menu: "text-lg font-courier font-bold"
  };

  return (
    <div 
      className={cn(
        "relative font-orbitron uppercase tracking-wider glitch-text chromatic-aberration",
        variants[variant],
        className
      )}
    >
      <span className="relative z-10">
        {glitchedText}
      </span>
      
      {/* Additional glitch layers for more intense effect */}
      <span 
        className="absolute top-0 left-0 opacity-80 text-primary animate-pulse"
        style={{
          transform: 'translate(2px, 0)',
          clipPath: 'polygon(0 0, 100% 0, 100% 45%, 0 45%)'
        }}
      >
        {text}
      </span>
      <span 
        className="absolute top-0 left-0 opacity-80 text-secondary animate-pulse"
        style={{
          transform: 'translate(-2px, 0)',
          clipPath: 'polygon(0 55%, 100% 55%, 100% 100%, 0 100%)',
          animationDelay: '0.2s'
        }}
      >
        {text}
      </span>
    </div>
  );
};

export default GlitchText;