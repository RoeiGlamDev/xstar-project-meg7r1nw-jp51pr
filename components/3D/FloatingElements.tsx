import { useEffect } from 'react';
import React, { useEffect } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import { motion } from 'framer-motion';
import * as THREE from 'three';

const FloatingElements: React.FC = () => {
  useEffect(() => {
    const handleResize = () => {
      // Handle resizing if necessary
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const animateFloating = (mesh: any) => {
    mesh.position.y = Math.sin(mesh.position.x + Date.now()  0.001)  0.5;
  };

  return (
    <div className="relative w-full h-screen bg-white overflow-hidden">
      <motion.div 
        className="text-pink-600 text-5xl font-bold absolute top-10 left-10 z-10"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        luxury FashionTV cosmetics
      </motion.h1>
      <Canvas camera={{ position: [0, 0, 5] }} className="w-full h-full">
        <ambientLight intensity={0.5} />
        <directionalLight position={[5, 5, 5]} />
        <mesh onUpdate={(state) => animateFloating(state.object)}>
          <sphereBufferGeometry args={[0.5, 32, 32]} />
          <meshStandardMaterial color={"#FF69B4"} />
        </mesh>
        <OrbitControls />
      </Canvas>
      <motion.div 
        className="text-pink-600 text-lg absolute bottom-10 left-10 z-10"
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1 }}
      >
        Welcome to luxury FashionTV cosmetics, where elegance meets beauty.
      </motion.p>
    </div>
  );
};

export default FloatingElements;