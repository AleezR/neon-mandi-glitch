import React, { useState } from 'react';
import GlitchText from '@/components/GlitchText';
import CyberpunkButton from '@/components/CyberpunkButton';
import FloatingParticles from '@/components/FloatingParticles';
import MenuCard from '@/components/MenuCard';
import SecretMenu from '@/components/SecretMenu';
import heroImage from '@/assets/cyberpunk-hero-bg.jpg';

// Menu data
const foodItems = [
  { title: 'Quantum Croissant', price: '¢4.04' },
  { title: 'Packet Loss Pizza', price: '¢7.77' },
  { title: 'Schrödinger\'s Soup', price: '¢5.08' },
  { title: 'Memory Noodles', price: '¢6.66' },
  { title: 'Byte-Sized Dumplings', price: '¢8.08' }
];

const drinkItems = [
  { title: 'Lagged Espresso', price: '¢3.03' },
  { title: 'Neon Bubble Tea', price: '¢4.44' },
  { title: 'Blue Screen Shake', price: '¢5.12' },
  { title: 'Glitch-Cola', price: '¢2.99' },
  { title: 'RAM Mojito', price: '¢4.96' }
];

const specialItems = [
  { title: '404 Platter', price: '¢9.99' },
  { title: 'Pixel Pancakes', price: '¢5.55' },
  { title: 'Overclocked Brownie', price: '¢6.78' },
  { title: 'Phantom Fries', price: '¢4.21' },
  { title: 'Cyber Sushi Roll', price: '¢8.64' }
];

const Index = () => {
  const [showSecretMenu, setShowSecretMenu] = useState(false);

  const handlePandaClick = () => {
    setShowSecretMenu(true);
  };

  return (
    <div className="min-h-screen bg-background relative overflow-hidden">
      {/* Floating particles background */}
      <FloatingParticles />
      
      {/* Hero Section */}
      <section 
        className="relative min-h-screen flex items-center justify-center bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url(${heroImage})`
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-background/20 via-transparent to-background/40" />
        
        <div className="relative z-10 text-center px-4 max-w-6xl mx-auto">
          {/* Main Title */}
          <div className="mb-8">
            <GlitchText 
              text="MANDI MASALA"
              variant="title"
              className="mb-4"
            />
            <GlitchText 
              text="Glitch Café"
              variant="subtitle"
              className="text-secondary"
            />
          </div>
          
          {/* Subtitle */}
          <p className="font-courier text-lg md:text-xl text-muted-foreground mb-12 max-w-2xl mx-auto">
            Experience the future of dining where cyberpunk meets culinary excellence
            in a neon-soaked digital realm.
          </p>
          
          {/* Action buttons */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <CyberpunkButton variant="hero" glitch>
              Order Now
            </CyberpunkButton>
            <CyberpunkButton variant="hero">
              View Menu
            </CyberpunkButton>
          </div>
        </div>
        
        {/* Floating holographic elements */}
        <div className="absolute top-20 left-10 text-4xl animate-bounce" style={{animationDelay: '0s'}}>🍕</div>
        <div className="absolute top-32 right-20 text-4xl animate-bounce" style={{animationDelay: '1s'}}>🥤</div>
        <div className="absolute bottom-40 left-20 text-4xl animate-bounce" style={{animationDelay: '2s'}}>🍜</div>
        <div className="absolute bottom-32 right-10 text-4xl animate-bounce" style={{animationDelay: '3s'}}>🥟</div>
      </section>
      
      {/* Menu Section */}
      <section className="relative py-20 px-4">
        <div className="max-w-7xl mx-auto">
          {/* Section header */}
          <div className="text-center mb-16">
            <GlitchText 
              text="NEURAL MENU"
              variant="subtitle"
              className="mb-4"
            />
            <p className="font-courier text-muted-foreground">
              Digital delicacies from the future // Nutritional data encrypted
            </p>
          </div>
          
          {/* Food Section */}
          <div className="mb-16">
            <h3 className="font-orbitron text-3xl font-bold text-primary mb-8 text-center neon-glow">
              FOOD.EXE
            </h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {foodItems.map((item, index) => (
                <MenuCard
                  key={item.title}
                  title={item.title}
                  price={item.price}
                  category="food"
                  index={index}
                />
              ))}
            </div>
          </div>
          
          {/* Drinks Section */}
          <div className="mb-16">
            <h3 className="font-orbitron text-3xl font-bold text-secondary mb-8 text-center neon-glow-secondary">
              BEVERAGES.DLL
            </h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {drinkItems.map((item, index) => (
                <MenuCard
                  key={item.title}
                  title={item.title}
                  price={item.price}
                  category="drinks"
                  index={index}
                />
              ))}
            </div>
          </div>
          
          {/* Specials Section */}
          <div>
            <h3 className="font-orbitron text-3xl font-bold text-accent mb-8 text-center neon-glow">
              SPECIAL.BAT
            </h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {specialItems.map((item, index) => (
                <MenuCard
                  key={item.title}
                  title={item.title}
                  price={item.price}
                  category="specials"
                  index={index}
                />
              ))}
            </div>
          </div>
        </div>
      </section>
      
      {/* Footer with secret panda */}
      <footer className="relative py-8 border-t border-card-border bg-card/50">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <p className="font-courier text-muted-foreground mb-4">
            © 2024 MANDI MASALA Glitch Café | All rights reserved in this timeline
          </p>
          
          {/* Secret panda easter egg */}
          <div className="flex justify-center">
            <button
              onClick={handlePandaClick}
              className="text-2xl hover:scale-110 transition-transform duration-300 hover:drop-shadow-lg opacity-30 hover:opacity-100"
              title="🤫"
            >
              🐼
            </button>
          </div>
          
          <div className="mt-4 flex justify-center space-x-4 text-sm font-courier text-muted-foreground">
            <span>System Status: ONLINE</span>
            <span>•</span>
            <span>Neon Level: MAXIMUM</span>
            <span>•</span>
            <span>Glitch Rate: 2.4%</span>
          </div>
        </div>
      </footer>
      
      {/* Secret Menu Modal */}
      <SecretMenu 
        isVisible={showSecretMenu}
        onClose={() => setShowSecretMenu(false)}
      />
    </div>
  );
};

export default Index;
