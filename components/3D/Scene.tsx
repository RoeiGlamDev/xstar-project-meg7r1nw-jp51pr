import { useEffect, useRef } from 'react';
import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';
import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import { motion } from 'framer-motion';

interface SceneProps {
  title: string;
}

const Scene: React.FC<SceneProps> = ({ title }) => {
  const mountRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer({ alpha: true });
    
    if (mountRef.current) {
      renderer.setSize(window.innerWidth, window.innerHeight);
      mountRef.current.appendChild(renderer.domElement);
    }

    camera.position.z = 5;

    const geometry = new THREE.BoxGeometry(1, 1, 1);
    const material = new THREE.MeshStandardMaterial({ color: '#FF69B4' }); // Pink color
    const cube = new THREE.Mesh(geometry, material);
    scene.add(cube);

    const light = new THREE.AmbientLight(0xffffff, 1);
    scene.add(light);

    const animate = () => {
      requestAnimationFrame(animate);
      cube.rotation.x += 0.01;
      cube.rotation.y += 0.01;
      renderer.render(scene, camera);
    };

    animate();

    return () => {
      if (mountRef.current) {
        mountRef.current.removeChild(renderer.domElement);
      }
    };
  }, []);

  return (
    <div ref={mountRef} className="relative w-full h-screen">
      <h1 className="absolute top-10 left-10 text-5xl font-semibold text-pink-500">
        {title}
      </h1>
      <Canvas>
        <OrbitControls />
        {/ Additional 3D elements can go here /}
      </Canvas>
    </div>
  );
};

const LuxuryFashionTVCosmetics: React.FC = () => {
  return (
    <motion.div
      className="flex flex-col items-center justify-center bg-white min-h-screen"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <h1 className="text-6xl font-bold text-pink-600 mb-8">luxury FashionTV cosmetics</h1>
      <p className="text-xl text-gray-700 mb-4">
        Discover the essence of luxury and elegance in beauty with luxury FashionTV cosmetics. Our premium line
        of cosmetics is designed to enhance your natural beauty, crafted with the finest ingredients.
      </p>
      <Scene title="luxury FashionTV cosmetics" />
      <footer className="mt-10 text-center">
        <p className="text-gray-500">© 2023 luxury FashionTV cosmetics. All rights reserved.</p>
      </footer>
    </motion.div>
  );
};

export default LuxuryFashionTVCosmetics;