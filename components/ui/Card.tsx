import React from 'react';
import { motion } from 'framer-motion';

interface CardProps {
  title: string;
  description: string;
  imageUrl: string;
}

const Card: React.FC<CardProps> = ({ title, description, imageUrl }) => {
  return (
    <motion.div 
      className="relative max-w-sm rounded-lg overflow-hidden shadow-lg transition-transform transform hover:scale-105"
      whileHover={{ scale: 1.05 }}
    >
      <div className="bg-white bg-opacity-20 backdrop-blur-md p-6 rounded-lg">
        <img src={imageUrl} alt={title} className="w-full h-48 object-cover rounded-lg mb-4" />
        <h2 className="text-pink-500 text-2xl font-bold mb-2">{title}</h2>
        <p className="text-white text-lg">{description}</p>
      </div>
      <style jsx>{
        .card {
          background: rgba(255, 255, 255, 0.1);
          backdrop-filter: blur(10px);
        }
      }</style>
    </motion.div>
  );
};

export default Card;