import React from 'react';
import { motion } from 'framer-motion';

interface Feature {
    title: string;
    description: string;
    icon: React.ReactNode;
}

const features: Feature[] = [
    {
        title: 'Premium Quality',
        description: 'Our products are crafted with the finest ingredients, ensuring a luxurious experience for our customers.',
        icon: <i className="fas fa-gem text-pink-500"></i>,
    },
    {
        title: 'Exclusive Collections',
        description: 'Discover our limited-edition collections that embody elegance and style, available only at luxury FashionTV cosmetics.',
        icon: <i className="fas fa-shopping-bag text-pink-500"></i>,
    },
    {
        title: 'Personalized Service',
        description: 'Experience tailored beauty consultations with our experts to enhance your unique style.',
        icon: <i className="fas fa-user-circle text-pink-500"></i>,
    },
    {
        title: 'Sustainable Practices',
        description: 'We are committed to sustainability, using eco-friendly ingredients and packaging for a better tomorrow.',
        icon: <i className="fas fa-leaf text-pink-500"></i>,
    },
];

const FeaturesSection: React.FC = () => {
    return (
        <section className="py-20 bg-white">
            <div className="container mx-auto text-center">
                <motion.div
                    className="text-4xl font-bold mb-10 text-pink-600"
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                >
                    Discover the Luxury of FashionTV Cosmetics
                </motion.h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
                    {features.map((feature, index) => (
                        <motion.div
                            key={index}
                            className="bg-pink-50 p-6 rounded-lg shadow-lg transition-transform transform hover:scale-105"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                        >
                            <div className="text-3xl mb-4">
                                {feature.icon}
                            </div>
                            <h3 className="text-xl font-semibold text-pink-600 mb-2">
                                {feature.title}
                            </h3>
                            <p className="text-gray-700">
                                {feature.description}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default FeaturesSection;