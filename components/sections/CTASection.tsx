import React from 'react';
import { motion } from 'framer-motion';

interface CTASectionProps {
  title: string;
  subtitle: string;
  buttonText: string;
  buttonLink: string;
}

const CTASection: React.FC<CTASectionProps> = ({
  title = "Elevate Your Beauty with luxury FashionTV cosmetics",
  subtitle = "Indulge in our luxurious collection that embodies elegance and sophistication.",
  buttonText = "Shop Now",
  buttonLink = "/shop",
}) => {
  return (
    <section className="flex flex-col items-center justify-center py-16 bg-white text-center">
      <motion.div
        className="text-4xl font-bold text-pink-500 mb-4"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        {title}
      </motion.h2>
      <motion.div
        className="text-lg text-gray-700 mb-8 max-w-xl"
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        {subtitle}
      </motion.p>
      <motion.div
        href={buttonLink}
        className="inline-block px-6 py-3 bg-pink-500 text-white font-semibold rounded-lg shadow-lg hover:bg-pink-600 transition duration-300 ease-in-out transform hover:scale-105"
        initial={{ scale: 1 }}
        whileHover={{ scale: 1.05 }}
        transition={{ duration: 0.3 }}
      >
        {buttonText}
      </motion.a>
    </section>
  );
};

export default CTASection;