import React from 'react';
import { motion } from 'framer-motion';

interface Testimonial {
  name: string;
  photo: string;
  content: string;
  rating: number;
}

const testimonials: Testimonial[] = [
  {
    name: 'Isabella W.',
    photo: '/images/testimonials/isabella.jpg',
    content: 'Luxury FashionTV cosmetics transformed my beauty routine! The quality is unmatched, and I feel glamorous every day.',
    rating: 5,
  },
  {
    name: 'Sophia L.',
    photo: '/images/testimonials/sophia.jpg',
    content: 'I adore the elegant packaging and luxurious feel of these cosmetics. They make me feel like a star!',
    rating: 5,
  },
  {
    name: 'Olivia K.',
    photo: '/images/testimonials/olivia.jpg',
    content: 'The pigments are rich and long-lasting. Luxury FashionTV cosmetics truly elevates my makeup game!',
    rating: 5,
  },
];

const TestimonialsSection: React.FC = () => {
  return (
    <section className="bg-white py-12">
      <motion.div
        className="text-center text-4xl font-bold text-pink-600 mb-8"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        What Our Clients Say
      </motion.h2>
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        {testimonials.map((testimonial, index) => (
          <motion.div
            key={index}
            className="bg-pink-100 rounded-lg p-6 shadow-lg transition-transform transform hover:scale-105"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
          >
            <div className="flex items-center mb-4">
              <img
                src={testimonial.photo}
                alt={testimonial.name}
                className="w-16 h-16 rounded-full border-4 border-pink-500 mr-4"
              />
              <div>
                <h3 className="text-xl font-semibold text-pink-600">{testimonial.name}</h3>
                <div className="flex">
                  {Array.from({ length: testimonial.rating }, (_, i) => (
                    <span key={i} className="text-pink-500">&#9733;</span>
                  ))}
                </div>
              </div>
            </div>
            <p className="text-gray-700">{testimonial.content}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default TestimonialsSection;