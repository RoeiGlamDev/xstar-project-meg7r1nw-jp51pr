import React from 'react';
import { motion } from 'framer-motion';

const page: React.FC = () => {
  return (
    <div className="bg-white text-pink-600 min-h-screen">
      <header className="flex justify-between items-center p-6 bg-white shadow-lg">
        <h1 className="text-4xl font-bold">luxury FashionTV cosmetics</h1>
        <nav className="space-x-4">
          <a href="#features" className="text-lg hover:text-pink-700">Features</a>
          <a href="#about" className="text-lg hover:text-pink-700">About</a>
          <a href="#contact" className="text-lg hover:text-pink-700">Contact</a>
        </nav>
      </header>
      
      <main>
        <section className="relative bg-pink-500 h-screen flex items-center justify-center">
          <motion.div 
            className="text-white text-5xl font-semibold"
            initial={{ opacity: 0 }} 
            animate={{ opacity: 1 }} 
            transition={{ duration: 1 }}
          >
            Elevate Your Beauty with luxury FashionTV cosmetics
          </motion.h2>
        </section>

        <section id="features" className="py-20 px-6">
          <h2 className="text-3xl font-bold text-center mb-10">Our Luxurious Features</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <motion.div 
              className="bg-white p-6 rounded-lg shadow-lg hover:shadow-2xl transition-shadow"
              whileHover={{ scale: 1.05 }}
            >
              <h3 className="text-xl font-semibold text-pink-600">Premium Ingredients</h3>
              <p className="mt-2">Crafted with the finest ingredients for a luxurious feel and finish.</p>
            </motion.div>
            <motion.div 
              className="bg-white p-6 rounded-lg shadow-lg hover:shadow-2xl transition-shadow"
              whileHover={{ scale: 1.05 }}
            >
              <h3 className="text-xl font-semibold text-pink-600">Elegant Packaging</h3>
              <p className="mt-2">Our products come in beautifully designed packaging that exudes luxury.</p>
            </motion.div>
            <motion.div 
              className="bg-white p-6 rounded-lg shadow-lg hover:shadow-2xl transition-shadow"
              whileHover={{ scale: 1.05 }}
            >
              <h3 className="text-xl font-semibold text-pink-600">Exclusive Collections</h3>
              <p className="mt-2">Discover limited edition collections that define sophistication.</p>
            </motion.div>
          </div>
        </section>

        <section id="about" className="py-20 px-6 bg-pink-100">
          <h2 className="text-3xl font-bold text-center mb-10">About luxury FashionTV cosmetics</h2>
          <p className="text-center max-w-2xl mx-auto">
            At luxury FashionTV cosmetics, we believe that beauty is an art. Our mission is to empower individuals through luxurious cosmetic products that not only enhance beauty but also inspire confidence. Each product is a tribute to elegance and sophistication, designed for those who appreciate the finer things in life.
          </p>
        </section>
      </main>

      <footer className="bg-white text-center py-6">
        <p className="text-lg">© {new Date().getFullYear()} luxury FashionTV cosmetics. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default page;