import React from 'react';
import { motion } from 'framer-motion';

interface SlideUpProps {
  children: React.ReactNode;
}

const SlideUp: React.FC<SlideUpProps> = ({ children }) => {
  const variants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={variants}
      transition={{ duration: 0.5, ease: "easeInOut" }}
      className="bg-white text-pink-500 p-6 rounded-lg shadow-lg transition-transform transform hover:scale-105"
      role="region"
      aria-label="Luxury FashionTV cosmetics content"
    >
      {children}
    </motion.div>
  );
};

export default SlideUp;