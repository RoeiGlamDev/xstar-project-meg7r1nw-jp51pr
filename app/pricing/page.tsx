import React from 'react';
import { motion } from 'framer-motion';

interface PricingOption {
  title: string;
  price: string;
  description: string;
  features: string[];
}

const pricingOptions: PricingOption[] = [
  {
    title: 'Luxury Essentials',
    price: '$99',
    description: 'A starter pack for the discerning beauty aficionado.',
    features: [
      'High-quality lipstick',
      'Luxurious foundation',
      'Exclusive makeup brush set',
    ],
  },
  {
    title: 'Glamour Package',
    price: '$199',
    description: 'Elevate your beauty game with our glamour essentials.',
    features: [
      'Everything in Luxury Essentials',
      'Premium eyeshadow palette',
      'Signature fragrance',
    ],
  },
  {
    title: 'Ultimate Glam Set',
    price: '$299',
    description: 'The complete luxury experience for the modern icon.',
    features: [
      'Everything in Glamour Package',
      'Designer handbag',
      'Personalized beauty consultation',
    ],
  },
];

const PricingPage: React.FC = () => {
  return (
    <div className="bg-white text-pink-500 min-h-screen">
      <motion.header
        className="text-center py-10"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <h1 className="text-4xl font-bold">luxury FashionTV cosmetics Pricing</h1>
        <p className="mt-4 text-lg">Experience luxury beauty like never before.</p>
      </motion.header>

      <section className="container mx-auto px-4 py-10">
        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
          initial={{ y: 20 }}
          animate={{ y: 0 }}
          transition={{ duration: 0.5 }}
        >
          {pricingOptions.map((option) => (
            <div
              key={option.title}
              className="bg-pink-100 rounded-lg p-6 shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <h2 className="text-2xl font-semibold">{option.title}</h2>
              <p className="text-xl font-bold mt-2">{option.price}</p>
              <p className="mt-4">{option.description}</p>
              <ul className="mt-4">
                {option.features.map((feature) => (
                  <li key={feature} className="list-disc list-inside">
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </motion.div>
      </section>

      <section className="bg-pink-50 py-10">
        <div className="container mx-auto px-4">
          <h2 className="text-center text-3xl font-bold text-pink-500">FAQ</h2>
          <div className="mt-6 space-y-4">
            <div className="p-4 bg-white rounded-lg shadow">
              <h3 className="font-semibold">What is luxury FashionTV cosmetics?</h3>
              <p>luxury FashionTV cosmetics is a high-end beauty brand offering exclusive cosmetics tailored for the fashion-forward individual.</p>
            </div>
            <div className="p-4 bg-white rounded-lg shadow">
              <h3 className="font-semibold">How do I choose the right package?</h3>
              <p>Consider your beauty needs and preferences. Our Luxury Essentials is great for starters, while the Ultimate Glam Set offers the full experience.</p>
            </div>
            <div className="p-4 bg-white rounded-lg shadow">
              <h3 className="font-semibold">Are the products cruelty-free?</h3>
              <p>Yes, all our products are cruelty-free and made with the highest quality ingredients.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default PricingPage;