import React from 'react';
import { motion } from 'framer-motion';

interface HeroSectionProps {
  title: string;
  subtitle: string;
  ctaText: string;
  ctaLink: string;
}

const HeroSection: React.FC<HeroSectionProps> = ({ 
  title = "luxury FashionTV cosmetics", 
  subtitle = "Elevate your beauty experience with our premium cosmetics, crafted for the discerning fashion enthusiast.", 
  ctaText = "Shop Now", 
  ctaLink = "/shop" 
}) => {
  return (
    <section className="flex items-center justify-center min-h-screen bg-gradient-to-r from-pink-500 to-white p-8">
      <motion.div 
        className="text-center"
        initial={{ opacity: 0, y: -50 }} 
        animate={{ opacity: 1, y: 0 }} 
        transition={{ duration: 0.5 }}
      >
        <h1 className="text-5xl font-bold text-pink-600 mb-4">
          {title}
        </h1>
        <p className="text-lg text-gray-700 mb-8">
          {subtitle}
        </p>
        <motion.div 
          href={ctaLink} 
          className="bg-pink-600 text-white font-semibold py-3 px-6 rounded-lg transition duration-300 hover:bg-pink-700 shadow-lg"
          whileHover={{ scale: 1.05 }}
        >
          {ctaText}
        </motion.a>
      </motion.div>
    </section>
  );
};

export default HeroSection;