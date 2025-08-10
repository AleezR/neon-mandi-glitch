import React, { useState } from 'react';
import { cn } from '@/lib/utils';

interface MenuCardProps {
  title: string;
  price: string;
  image?: string;
  category: 'food' | 'drinks' | 'specials' | 'secret';
  index: number;
}

const MenuCard: React.FC<MenuCardProps> = ({ title, price, image, category, index }) => {
  const [isVisible, setIsVisible] = useState(false);

  React.useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, index * 200); // Stagger the animations

    return () => clearTimeout(timer);
  }, [index]);

  const categoryColors = {
    food: 'border-primary hover:shadow-glow-primary',
    drinks: 'border-secondary hover:shadow-glow-secondary',
    specials: 'border-accent hover:shadow-glow-primary',
    secret: 'border-purple hover:shadow-glow-secondary'
  };

  const categoryIcons = {
    food: '🍽️',
    drinks: '🥤',
    specials: '⭐',
    secret: '🐼'
  };

  return (
    <div
      className={cn(
        "relative group transition-all duration-500 transform",
        isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
      )}
    >
      <div 
        className={cn(
          "relative bg-menu-item border-2 rounded-lg p-6 transition-all duration-300 overflow-hidden",
          "hover:bg-menu-item-hover hover:scale-105",
          "before:absolute before:inset-0 before:bg-gradient-holographic before:opacity-0 before:transition-opacity before:duration-300 hover:before:opacity-20",
          categoryColors[category]
        )}
      >
        {/* Scanline effect */}
        <div className={cn(
          "scanline absolute inset-0 opacity-0 group-hover:opacity-100",
          isVisible && "animate-pulse"
        )} />
        
        {/* Image display */}
        {image && (
          <div className="mb-4 relative overflow-hidden rounded-md">
            <img 
              src={image} 
              alt={title}
              className="w-full h-32 object-cover transition-transform duration-300 group-hover:scale-110"
              style={{ 
                filter: 'brightness(0.8) contrast(1.2) saturate(1.3) hue-rotate(5deg)' 
              }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-card/50 to-transparent" />
          </div>
        )}
        
        {/* Content */}
        <div className="relative z-10">
          <div className="flex items-center justify-between mb-2">
            <span className="text-2xl">{categoryIcons[category]}</span>
            <span className="font-courier text-sm text-muted-foreground">
              {category.toUpperCase()}
            </span>
          </div>
          
          <h3 className="font-orbitron font-bold text-lg mb-3 text-foreground group-hover:text-primary transition-colors">
            {title}
          </h3>
          
          <div className="flex justify-between items-center">
            <span className="font-courier text-2xl font-bold text-warning group-hover:neon-glow">
              {price}
            </span>
            <div className="w-8 h-0.5 bg-primary opacity-50 group-hover:opacity-100 transition-opacity" />
          </div>
        </div>

        {/* Hover glow effect */}
        <div className="absolute inset-0 opacity-0 group-hover:opacity-30 transition-opacity duration-300 bg-gradient-neon blur-xl" />
        
        {/* Corner decorations */}
        <div className="absolute top-2 left-2 w-4 h-4 border-l-2 border-t-2 border-primary opacity-50 group-hover:opacity-100 transition-opacity" />
        <div className="absolute top-2 right-2 w-4 h-4 border-r-2 border-t-2 border-primary opacity-50 group-hover:opacity-100 transition-opacity" />
        <div className="absolute bottom-2 left-2 w-4 h-4 border-l-2 border-b-2 border-primary opacity-50 group-hover:opacity-100 transition-opacity" />
        <div className="absolute bottom-2 right-2 w-4 h-4 border-r-2 border-b-2 border-primary opacity-50 group-hover:opacity-100 transition-opacity" />
      </div>
    </div>
  );
};

export default MenuCard;