import { useState } from 'react';
import React, { useState } from 'react';
import { motion } from 'framer-motion';

interface ContactFormValues {
  name: string;
  email: string;
  message: string;
  inquiryType: string;
}

const ContactSection: React.FC = () => {
  const [formValues, setFormValues] = useState<ContactFormValues>({
    name: '',
    email: '',
    message: '',
    inquiryType: 'General Inquiry',
  });

  const [errors, setErrors] = useState<{ [key: string]: string }>({});
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
  };

  const validateForm = () => {
    const tempErrors: { [key: string]: string } = {};
    if (!formValues.name) tempErrors.name = 'Name is required.';
    if (!formValues.email) tempErrors.email = 'Email is required.';
    if (!formValues.message) tempErrors.message = 'Message is required.';
    if (!/\S+@\S+\.\S+/.test(formValues.email)) tempErrors.email = 'Email is invalid.';
    setErrors(tempErrors);
    return Object.keys(tempErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validateForm()) {
      // Handle form submission logic here
      console.log('Form submitted:', formValues);
    }
  };

  return (
    <div className="bg-white py-10 px-5 md:px-20">
      <motion.div 
        className="text-3xl font-bold text-pink-500 mb-6" 
        initial={{ opacity: 0 }} 
        animate={{ opacity: 1 }} 
        transition={{ duration: 0.5 }}
      >
        Contact luxury FashionTV cosmetics
      </motion.h2>
      <motion.div 
        className="text-gray-700 mb-4" 
        initial={{ opacity: 0 }} 
        animate={{ opacity: 1 }} 
        transition={{ duration: 0.7 }}
      >
        For fashion inquiries or collaborations, please fill out the form below.
      </motion.p>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-700" htmlFor="name">
            Name
          </label>
          <input 
            type="text" 
            name="name" 
            value={formValues.name} 
            onChange={handleChange} 
            className={mt-1 p-2 border ${errors.name ? 'border-red-500' : 'border-gray-300'} rounded-md w-full}
            placeholder="Your Name"
          />
          {errors.name && <p className="text-red-500 text-sm">{errors.name}</p>}
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700" htmlFor="email">
            Email
          </label>
          <input 
            type="email" 
            name="email" 
            value={formValues.email} 
            onChange={handleChange} 
            className={mt-1 p-2 border ${errors.email ? 'border-red-500' : 'border-gray-300'} rounded-md w-full}
            placeholder="Your Email"
          />
          {errors.email && <p className="text-red-500 text-sm">{errors.email}</p>}
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700" htmlFor="inquiryType">
            Inquiry Type
          </label>
          <select 
            name="inquiryType" 
            value={formValues.inquiryType} 
            onChange={handleChange} 
            className="mt-1 p-2 border border-gray-300 rounded-md w-full"
          >
            <option value="General Inquiry">General Inquiry</option>
            <option value="Product Collaboration">Product Collaboration</option>
            <option value="Media Request">Media Request</option>
            <option value="Partnership">Partnership</option>
          </select>
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700" htmlFor="message">
            Message
          </label>
          <textarea 
            name="message" 
            value={formValues.message} 
            onChange={handleChange} 
            className={mt-1 p-2 border ${errors.message ? 'border-red-500' : 'border-gray-300'} rounded-md w-full} 
            rows={4} 
            placeholder="Your Message"
          />
          {errors.message && <p className="text-red-500 text-sm">{errors.message}</p>}
        </div>
        <motion.div 
          type="submit" 
          className="mt-4 bg-pink-500 text-white font-bold py-2 px-4 rounded hover:bg-pink-600 transition duration-300 ease-in-out"
          whileHover={{ scale: 1.05 }}
        >
          Send Message
        </motion.button>
      </form>
      <div className="mt-10 text-gray-600">
        <h3 className="text-lg font-bold text-pink-500">Business Information</h3>
        <p>luxury FashionTV cosmetics</p>
        <p>123 Fashion Avenue, Suite 100</p>
        <p>Fashion City, FC 12345</p>
        <p>Business Hours: Mon-Fri, 9 AM - 5 PM</p>
      </div>
    </div>
  );
};

export default ContactSection;