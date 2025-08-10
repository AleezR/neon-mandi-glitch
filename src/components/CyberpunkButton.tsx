import React from 'react';
import { cn } from '@/lib/utils';

interface CyberpunkButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'hero' | 'menu' | 'secret';
  glitch?: boolean;
}

const CyberpunkButton = React.forwardRef<HTMLButtonElement, CyberpunkButtonProps>(
  ({ className, variant = 'hero', glitch = false, children, ...props }, ref) => {
    const baseClasses = "relative font-orbitron font-bold uppercase tracking-wider transition-all duration-300 border-2 overflow-hidden group";
    
    const variants = {
      hero: "px-8 py-4 text-lg bg-card border-primary text-primary hover:bg-primary hover:text-primary-foreground hover:shadow-glow-primary",
      menu: "px-6 py-3 text-sm bg-menu-item border-card-border text-foreground hover:bg-menu-item-hover hover:border-primary hover:text-primary",
      secret: "px-4 py-2 text-xs bg-purple/20 border-purple text-purple hover:bg-purple hover:text-background hover:shadow-glow-secondary"
    };

    const glitchClasses = glitch ? "glitch-text" : "";

    return (
      <button
        className={cn(
          baseClasses,
          variants[variant],
          glitchClasses,
          "before:absolute before:inset-0 before:bg-gradient-holographic before:opacity-0 before:transition-opacity before:duration-300 hover:before:opacity-20",
          "after:absolute after:inset-0 after:bg-gradient-neon after:opacity-0 after:blur-sm after:transition-opacity after:duration-300 hover:after:opacity-30",
          className
        )}
        ref={ref}
        {...props}
      >
        <span className="relative z-10 group-hover:chromatic-aberration">
          {children}
        </span>
        
        {/* Scanning line effect on hover */}
        <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <div className="absolute top-0 left-0 w-full h-0.5 bg-primary animate-pulse" />
          <div className="absolute bottom-0 left-0 w-full h-0.5 bg-secondary animate-pulse" style={{animationDelay: '0.5s'}} />
        </div>
      </button>
    );
  }
);

CyberpunkButton.displayName = "CyberpunkButton";

export default CyberpunkButton;