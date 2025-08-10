import React, { useState } from 'react';
import { cn } from '@/lib/utils';
import GlitchText from './GlitchText';
import MenuCard from './MenuCard';

interface SecretMenuProps {
  isVisible: boolean;
  onClose: () => void;
}

const secretItems = [
  { title: 'Wormhole Waffles', price: '¢13.37' },
  { title: 'Time-Loop Tea', price: '¢11.11' },
  { title: 'Data-Stream Donuts', price: '¢9.87' },
  { title: 'Quantum Quinoa', price: '¢15.42' },
  { title: 'Neural Network Nachos', price: '¢12.34' },
  { title: 'Binary Brownie Bytes', price: '¢7.77' }
];

const SecretMenu: React.FC<SecretMenuProps> = ({ isVisible, onClose }) => {
  return (
    <div
      className={cn(
        "fixed inset-0 z-50 transition-all duration-500",
        isVisible ? "opacity-100 visible" : "opacity-0 invisible"
      )}
    >
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-background/90 backdrop-blur-sm"
        onClick={onClose}
      />
      
      {/* Modal */}
      <div className="relative z-10 min-h-screen flex items-center justify-center p-4">
        <div
          className={cn(
            "relative bg-card border-2 border-purple rounded-lg p-8 max-w-4xl w-full max-h-[90vh] overflow-y-auto transition-all duration-500 holographic",
            isVisible ? "scale-100 translate-y-0" : "scale-95 translate-y-10"
          )}
        >
          {/* Close button */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 text-purple hover:text-purple-glow transition-colors text-2xl font-bold"
          >
            ×
          </button>
          
          {/* Header */}
          <div className="text-center mb-8">
            <GlitchText 
              text="SECRET MENU"
              variant="subtitle"
              className="text-purple mb-4"
            />
            <p className="font-courier text-muted-foreground">
              You found the hidden archive... Access Level: RESTRICTED
            </p>
          </div>
          
          {/* Secret items grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {secretItems.map((item, index) => (
              <MenuCard
                key={item.title}
                title={item.title}
                price={item.price}
                category="secret"
                index={index}
              />
            ))}
          </div>
          
          {/* Footer message */}
          <div className="text-center mt-8 p-4 border border-purple/30 rounded bg-purple/10">
            <p className="font-courier text-sm text-purple">
              🐼 "These items exist in quantum superposition - they may or may not be available"
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SecretMenu;