import React from 'react';
import { motion } from 'framer-motion';

interface TeamMember {
  name: string;
  position: string;
  image: string;
}

const teamMembers: TeamMember[] = [
  {
    name: 'Sophia Dupont',
    position: 'Creative Director',
    image: '/images/sophia.jpg',
  },
  {
    name: 'Liam Chen',
    position: 'Head of Marketing',
    image: '/images/liam.jpg',
  },
  {
    name: 'Isabella Rossi',
    position: 'Lead Makeup Artist',
    image: '/images/isabella.jpg',
  },
];

const About: React.FC = () => {
  return (
    <div className="bg-white text-pink-600 font-serif">
      <motion.div
        className="container mx-auto p-10"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <h1 className="text-4xl font-bold mb-6">About luxury FashionTV cosmetics</h1>
        <p className="text-lg mb-4">
          At luxury FashionTV cosmetics, we believe that beauty is an art form that transcends the ordinary. Our journey began with a vision to redefine luxury in the world of cosmetics, where elegance meets innovation.
        </p>
        <h2 className="text-3xl font-semibold mt-8 mb-4">Our History</h2>
        <p className="mb-6">
          Founded by a group of passionate beauty enthusiasts, luxury FashionTV cosmetics emerged from the desire to create high-quality products that elevate the beauty experience. Over the years, we have garnered a reputation for excellence and sophistication, making our mark in the fashion industry.
        </p>
        
        <h2 className="text-3xl font-semibold mt-8 mb-4">Our Values</h2>
        <ul className="list-disc list-inside mb-6">
          <li className="mb-2">Quality: We prioritize premium ingredients and craftsmanship.</li>
          <li className="mb-2">Innovation: We continuously evolve our product line to stay ahead of trends.</li>
          <li className="mb-2">Sustainability: We are committed to eco-friendly practices.</li>
          <li className="mb-2">Inclusivity: Our products cater to all beauty enthusiasts, celebrating diversity.</li>
        </ul>

        <h2 className="text-3xl font-semibold mt-8 mb-4">Meet Our Team</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {teamMembers.map((member) => (
            <motion.div
              key={member.name}
              className="bg-pink-100 p-4 rounded-lg shadow-lg transition-transform transform hover:scale-105"
              whileHover={{ scale: 1.05 }}
            >
              <img src={member.image} alt={member.name} className="rounded-full h-32 w-32 mb-4 mx-auto" />
              <h3 className="text-xl font-bold">{member.name}</h3>
              <p className="text-md text-pink-500">{member.position}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  );
};

export default About;