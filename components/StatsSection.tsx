import React from 'react';
import { motion } from 'framer-motion';

interface StatsProps {
  achievements: {
    title: string;
    value: number;
  }[];
}

const StatsSection: React.FC<StatsProps> = ({ achievements }) => {
  return (
    <section className="bg-white py-20">
      <div className="container mx-auto text-center">
        <h2 className="text-4xl font-bold text-pink-500 mb-10">
          Achievements of luxury FashionTV cosmetics
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {achievements.map((achievement, index) => (
            <motion.div
              key={index}
              className="bg-pink-100 rounded-lg p-6 shadow-lg transition-transform transform hover:scale-105"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
            >
              <h3 className="text-2xl font-semibold text-pink-600">
                {achievement.title}
              </h3>
              <motion.div
                className="text-5xl font-extrabold text-pink-700"
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.2 + 0.5 }}
              >
                {achievement.value}
              </motion.p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;