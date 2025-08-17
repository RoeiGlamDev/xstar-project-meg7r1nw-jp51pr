import { useState } from 'react';
import React, { useState } from 'react';
import { motion } from 'framer-motion';

interface NewsletterSectionProps {
    title: string;
    description: string;
}

const NewsletterSection: React.FC<NewsletterSectionProps> = ({ title, description }) => {
    const [email, setEmail] = useState('');
    const [submitted, setSubmitted] = useState(false);

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        // Logic to handle email submission
        setSubmitted(true);
        setEmail('');
    };

    return (
        <motion.section 
            className="bg-white py-12 px-4 sm:px-6 lg:px-8" 
            initial={{ opacity: 0 }} 
            animate={{ opacity: 1 }} 
            transition={{ duration: 0.5 }}
        >
            <div className="max-w-md mx-auto text-center">
                <h2 className="text-3xl font-bold text-pink-600">{title}</h2>
                <p className="mt-4 text-lg text-gray-700">{description}</p>
                {!submitted ? (
                    <form onSubmit={handleSubmit} className="mt-8">
                        <input 
                            type="email" 
                            value={email} 
                            onChange={(e) => setEmail(e.target.value)} 
                            placeholder="Enter your email" 
                            required 
                            className="border-2 border-pink-600 p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-pink-400 transition duration-200"
                        />
                        <button 
                            type="submit" 
                            className="bg-pink-600 text-white font-semibold py-2 px-4 rounded-md ml-2 hover:bg-pink-700 transition duration-200"
                        >
                            Subscribe
                        </button>
                    </form>
                ) : (
                    <p className="mt-4 text-lg text-green-600">Thank you for subscribing to luxury FashionTV cosmetics!</p>
                )}
            </div>
        </motion.section>
    );
};

export default NewsletterSection;