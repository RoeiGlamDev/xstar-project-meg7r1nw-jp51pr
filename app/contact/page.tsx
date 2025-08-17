import React from 'react';
import { motion } from 'framer-motion';

interface ContactProps {}

const Contact: React.FC<ContactProps> = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-white p-6">
      <motion.div
        className="text-4xl font-bold text-pink-500 mb-6"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        Contact Luxury FashionTV Cosmetics
      </motion.h1>
      
      <motion.div
        className="text-lg text-gray-700 mb-4"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        We’re here to help you with all your luxury beauty needs. Reach out to us!
      </motion.p>

      <form className="w-full max-w-lg bg-pink-100 p-6 rounded-lg shadow-lg">
        <motion.div
          className="mb-4"
          whileHover={{ scale: 1.02 }}
        >
          <label className="block text-pink-500 font-bold mb-2" htmlFor="name">
            Name
          </label>
          <input
            type="text"
            id="name"
            placeholder="Your Name"
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            required
          />
        </motion.div>

        <motion.div
          className="mb-4"
          whileHover={{ scale: 1.02 }}
        >
          <label className="block text-pink-500 font-bold mb-2" htmlFor="email">
            Email
          </label>
          <input
            type="email"
            id="email"
            placeholder="Your Email"
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            required
          />
        </motion.div>

        <motion.div
          className="mb-4"
          whileHover={{ scale: 1.02 }}
        >
          <label className="block text-pink-500 font-bold mb-2" htmlFor="message">
            Message
          </label>
          <textarea
            id="message"
            placeholder="Your Message"
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            required
          ></textarea>
        </motion.div>

        <motion.div
          type="submit"
          className="bg-pink-500 hover:bg-pink-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline transition duration-300"
          whileHover={{ scale: 1.05 }}
        >
          Send Message
        </motion.button>
      </form>

      <motion.div
        className="mt-8 text-center"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
      >
        <h2 className="text-2xl font-bold text-pink-500">Location</h2>
        <p className="text-lg text-gray-700">123 Luxury St, Fashion City, FL 12345</p>

        <h2 className="text-2xl font-bold text-pink-500 mt-4">Business Hours</h2>
        <p className="text-lg text-gray-700">Monday - Friday: 9 AM - 6 PM</p>
        <p className="text-lg text-gray-700">Saturday: 10 AM - 4 PM</p>
        <p className="text-lg text-gray-700">Sunday: Closed</p>
      </motion.div>
    </div>
  );
};

export default Contact;