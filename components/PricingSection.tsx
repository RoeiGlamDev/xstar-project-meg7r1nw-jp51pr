import React from 'react';
import { motion } from 'framer-motion';

interface PricingTier {
  title: string;
  price: string;
  features: string[];
}

const pricingTiers: PricingTier[] = [
  {
    title: 'Essentials Package',
    price: '$99',
    features: [
      'Personalized Color Consultation',
      'Basic Makeup Application',
      'Fashion Trend Analysis',
      'Luxury FashionTV Cosmetics Gift',
    ],
  },
  {
    title: 'Signature Package',
    price: '$199',
    features: [
      'Advanced Makeup Techniques',
      'Wardrobe Styling Session',
      'Exclusive Access to FashionTV Events',
      'Luxury FashionTV Cosmetics Gift Set',
    ],
  },
  {
    title: 'Elite Package',
    price: '$299',
    features: [
      'One-on-One Style Consultation',
      'Complete Makeup Makeover',
      'Annual FashionTV Membership',
      'Premium Luxury FashionTV Cosmetics Collection',
    ],
  },
];

const PricingSection: React.FC = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-bold text-pink-600 mb-8">
          Pricing Plans for luxury FashionTV cosmetics
        </h2>
        <p className="text-lg text-gray-700 mb-12">
          Choose the perfect package to elevate your fashion experience with luxury FashionTV cosmetics.
        </p>
        <div className="flex flex-col md:flex-row justify-center">
          {pricingTiers.map((tier, index) => (
            <motion.div
              key={index}
              className="bg-white border border-pink-500 rounded-lg shadow-lg p-6 mx-4 mb-8 transform transition-transform duration-300 hover:scale-105"
              whileHover={{ scale: 1.05 }}
            >
              <h3 className="text-xl font-semibold text-pink-600 mb-4">{tier.title}</h3>
              <p className="text-2xl font-bold text-pink-600 mb-4">{tier.price}</p>
              <ul className="text-left text-gray-700 mb-6">
                {tier.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="mb-2">
                    - {feature}
                  </li>
                ))}
              </ul>
              <button className="bg-pink-600 text-white font-bold py-2 px-4 rounded hover:bg-pink-700 transition duration-300">
                Select Package
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PricingSection;