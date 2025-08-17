import React from 'react';
import { motion } from 'framer-motion';

interface FooterProps {
  companyName: string;
  address: string;
  email: string;
  phone: string;
  socialLinks: { name: string; url: string }[];
}

const Footer: React.FC<FooterProps> = ({
  companyName,
  address,
  email,
  phone,
  socialLinks,
}) => {
  return (
    <footer className="bg-white p-6">
      <div className="container mx-auto text-center">
        <motion.div
          className="text-2xl font-bold text-pink-500 mb-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          Welcome to {companyName}
        </motion.h2>
        <p className="text-gray-700 mb-4">
          Elevate your beauty with our luxurious cosmetics, crafted for the modern fashionista.
        </p>
        <div className="flex justify-center mb-4">
          <motion.div
            href="#"
            className="text-pink-500 hover:text-pink-700 mx-2 transition duration-300"
            whileHover={{ scale: 1.1 }}
          >
            About Us
          </motion.a>
          <motion.div
            href="#"
            className="text-pink-500 hover:text-pink-700 mx-2 transition duration-300"
            whileHover={{ scale: 1.1 }}
          >
            Shop
          </motion.a>
          <motion.div
            href="#"
            className="text-pink-500 hover:text-pink-700 mx-2 transition duration-300"
            whileHover={{ scale: 1.1 }}
          >
            Contact
          </motion.a>
        </div>
        <div className="mb-4">
          <p className="text-gray-600">{address}</p>
          <p className="text-gray-600">Email: {email}</p>
          <p className="text-gray-600">Phone: {phone}</p>
        </div>
        <div className="flex justify-center">
          {socialLinks.map((link) => (
            <motion.div
              key={link.name}
              href={link.url}
              className="text-pink-500 hover:text-pink-700 mx-2 transition duration-300"
              whileHover={{ scale: 1.1 }}
            >
              {link.name}
            </motion.a>
          ))}
        </div>
        <p className="text-gray-500 mt-4">© {new Date().getFullYear()} {companyName}. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;