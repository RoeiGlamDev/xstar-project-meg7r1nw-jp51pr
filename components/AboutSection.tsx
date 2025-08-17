import React from 'react';
import { motion } from 'framer-motion';

interface TeamMember {
  name: string;
  role: string;
  image: string;
}

const teamMembers: TeamMember[] = [
  {
    name: 'Sophia Rossi',
    role: 'Creative Director',
    image: '/images/sophia.jpg',
  },
  {
    name: 'Liam Chen',
    role: 'Head of Product Development',
    image: '/images/liam.jpg',
  },
  {
    name: 'Isabella Martinez',
    role: 'Marketing Strategist',
    image: '/images/isabella.jpg',
  },
];

const AboutSection: React.FC = () => {
  return (
    <section className="bg-white text-pink-600 py-16 px-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="max-w-5xl mx-auto text-center"
      >
        <h2 className="text-4xl font-bold mb-6">About luxury FashionTV cosmetics</h2>
        <p className="text-lg mb-4">
          At luxury FashionTV cosmetics, we believe that beauty is an art form. Founded to revolutionize the fashion
          cosmetics industry, our brand embodies elegance, sophistication, and a passion for high-quality beauty products.
        </p>
        <p className="text-lg mb-8">
          Our mission is to empower individuals to express their unique style through luxurious cosmetic offerings that
          enhance natural beauty. We pride ourselves on using only the finest ingredients, designed for the modern
          fashionista who demands excellence.
        </p>
        
        <h3 className="text-3xl font-semibold mb-4">Our Mission</h3>
        <p className="text-lg mb-8">
          To redefine beauty standards by providing innovative, trend-setting cosmetics that inspire confidence and
          creativity. We aim to be a leader in sustainable luxury, ensuring our products reflect our commitment to the
          environment and ethical practices.
        </p>
        
        <h3 className="text-3xl font-semibold mb-4">Meet Our Team</h3>
        <div className="flex flex-wrap justify-center">
          {teamMembers.map((member) => (
            <div
              key={member.name}
              className="bg-pink-100 rounded-lg p-4 m-2 shadow-lg hover:shadow-xl transition-shadow duration-300 ease-in-out"
            >
              <img src={member.image} alt={member.name} className="rounded-full w-32 h-32 mx-auto mb-4" />
              <h4 className="text-xl font-bold">{member.name}</h4>
              <p className="text-md">{member.role}</p>
            </div>
          ))}
        </div>
        
        <h3 className="text-3xl font-semibold mb-4 mt-8">Our Values</h3>
        <p className="text-lg mb-4">
          We prioritize quality, creativity, and sustainability in every aspect of our business. Our commitment to
          excellence and innovation drives us to continuously exceed the expectations of our clientele.
        </p>
        <p className="text-lg mb-4">
          Join us on our journey to redefine luxury in the beauty world. Together, let’s create a vibrant community
          that celebrates individuality and the art of self-expression.
        </p>
      </motion.div>
    </section>
  );
};

export default AboutSection;