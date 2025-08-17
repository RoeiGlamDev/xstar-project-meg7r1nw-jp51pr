import React from 'react';
import { motion } from 'framer-motion';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  content: string;
}

const Modal: React.FC<ModalProps> = ({ isOpen, onClose, title, content }) => {return (
    <>
      {isOpen && (
        <div className="fixed inset-0 flex items-center justify-center backdrop-blur-md bg-white bg-opacity-50">
          <motion.div
            className="bg-white rounded-lg shadow-lg p-6 max-w-md w-full"
            initial={{ opacity: 0, scale: 0.8}}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            transition={{ duration: 0.3 }}
          >
            <h2 className="text-2xl font-bold text-pink-600 mb-4 text-center">
              {title}
            </h2>
            <p className="text-gray-700 mb-6 text-center">
              {content}
            </p>
            <button
              onClick={onClose}
              className="w-full py-2 bg-pink-600 text-white rounded-lg transition duration-300 hover:bg-pink-500 focus:outline-none focus:ring-2 focus:ring-pink-400 focus:ring-opacity-50"
            >
              Close
            </button>
          </motion.div>
        </div>
      )}
    </>
  );
};

export default Modal;