import { useState } from 'react';
import React, { useState } from 'react';
import { motion } from 'framer-motion';

interface HeaderProps {
  logoUrl: string;
}

const Header: React.FC<HeaderProps> = ({ logoUrl }) => {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <header className="bg-white shadow-lg">
      <div className="container mx-auto flex justify-between items-center p-4">
        <motion.div
          className="text-pink-500 font-bold text-2xl"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <img src={logoUrl} alt="luxury FashionTV cosmetics Logo" className="h-10" />
          luxury FashionTV cosmetics
        </motion.div>
        <nav className="hidden md:flex space-x-8">
          <motion.div
            href="#home"
            className="text-gray-800 hover:text-pink-500 transition-colors duration-300"
            whileHover={{ scale: 1.05 }}
          >
            Home
          </motion.a>
          <motion.div
            href="#products"
            className="text-gray-800 hover:text-pink-500 transition-colors duration-300"
            whileHover={{ scale: 1.05 }}
          >
            Products
          </motion.a>
          <motion.div
            href="#about"
            className="text-gray-800 hover:text-pink-500 transition-colors duration-300"
            whileHover={{ scale: 1.05 }}
          >
            About Us
          </motion.a>
          <motion.div
            href="#contact"
            className="text-gray-800 hover:text-pink-500 transition-colors duration-300"
            whileHover={{ scale: 1.05 }}
          >
            Contact
          </motion.a>
        </nav>
        <button
          className="md:hidden text-pink-500 focus:outline-none"
          onClick={toggleMobileMenu}
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
          </svg>
        </button>
      </div>
      {isMobileMenuOpen && (
        <motion.div
          className="md:hidden bg-white"
          initial={{ height: 0}}
          animate={{ height: 'auto' }}
          transition={{ duration: 0.3 }}
        >
          <nav className="flex flex-col space-y-4 p-4">
            <motion.div
              href="#home"
              className="text-gray-800 hover:text-pink-500 transition-colors duration-300"
              whileHover={{ scale: 1.05 }}
            >
              Home
            </motion.a>
            <motion.div
              href="#products"
              className="text-gray-800 hover:text-pink-500 transition-colors duration-300"
              whileHover={{ scale: 1.05 }}
            >
              Products
            </motion.a>
            <motion.div
              href="#about"
              className="text-gray-800 hover:text-pink-500 transition-colors duration-300"
              whileHover={{ scale: 1.05 }}
            >
              About Us
            </motion.a>
            <motion.div
              href="#contact"
              className="text-gray-800 hover:text-pink-500 transition-colors duration-300"
              whileHover={{ scale: 1.05 }}
            >
              Contact
            </motion.a>
          </nav>
        </motion.div>
      )}
    </header>
  );
};

export default Header;