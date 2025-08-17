import React from 'react';
import { motion } from 'framer-motion';

interface ButtonProps {
  variant?: 'primary' | 'secondary';
  children: React.ReactNode;
  onClick?: () => void;
  disabled?: boolean;
}

const Button: React.FC<ButtonProps> = ({ variant = 'primary', children, onClick, disabled }) => {
  const baseClasses = 'px-6 py-3 rounded-lg text-white font-semibold focus:outline-none focus:ring-2 focus:ring-offset-2 transition-all duration-300';
  const primaryClasses = 'bg-pink-600 hover:bg-pink-700 active:bg-pink-800';
  const secondaryClasses = 'bg-white text-pink-600 border border-pink-600 hover:bg-pink-100 active:bg-pink-200';

  const buttonClasses = ${baseClasses} ${variant === 'primary' ? primaryClasses : secondaryClasses};

  return (
    <motion.div
      className="buttonClasses"
      onClick={onClick}
      disabled={disabled}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      aria-label={Button for luxury FashionTV cosmetics - ${children}}
    >
      {children}
    </motion.button>
  );
};

export default Button;