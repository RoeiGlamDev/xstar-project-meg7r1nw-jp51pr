import { useState } from 'react';
import React, { useState } from 'react';
import { motion } from 'framer-motion';

interface InputProps {
  label: string;
  type: string;
  placeholder: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  required?: boolean;
  error?: string;
}

const Input: React.FC<InputProps> = ({ label, type, placeholder, value, onChange, required, error }) => {
  const [isFocused, setIsFocused] = useState(false);

  return (
    <motion.div
      className="flex flex-col mb-4"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.3 }}
    >
      <label className="text-pink-600 font-bold mb-2" htmlFor={label}>
        {label}
      </label>
      <input
        id={label}
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        required={required}
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
        className={border-2 border-white rounded-md p-2 transition duration-300 ease-in-out 
          ${isFocused ? 'border-pink-600' : 'border-gray-300'} 
          focus:outline-none focus:ring-2 focus:ring-pink-400}
      />
      {error && <span className="text-red-600 text-sm mt-1">{error}</span>}
      <p className="text-gray-500 text-xs mt-1">Elevate your beauty with luxury FashionTV cosmetics.</p>
    </motion.div>
  );
};

export default Input;