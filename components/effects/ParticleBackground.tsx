import { useEffect } from 'react';
import React, { useEffect } from 'react';
import * as THREE from 'three';
import { useAnimation } from 'framer-motion';

const ParticleBackground: React.FC = () => {
    const animationControls = useAnimation();

    useEffect(() => {
        const scene = new THREE.Scene();
        const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
        const renderer = new THREE.WebGLRenderer({ alpha: true });
        renderer.setSize(window.innerWidth, window.innerHeight);
        document.body.appendChild(renderer.domElement);

        const particles: THREE.Points[] = [];
        const particleCount = 2000;
        const geometry = new THREE.BufferGeometry();
        const positions = new Float32Array(particleCount * 3);

        for (let i = 0; i < particleCount; i++) {
            positions[i  3] = (Math.random() - 0.5)  100;
            positions[i  3 + 1] = (Math.random() - 0.5)  100;
            positions[i  3 + 2] = (Math.random() - 0.5)  100;
        }

        geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));

        const material = new THREE.PointsMaterial({ color: 0xff69b4, size: 0.1 });
        const particleSystem = new THREE.Points(geometry, material);
        scene.add(particleSystem);
        particles.push(particleSystem);

        camera.position.z = 50;

        const animate = () => {
            requestAnimationFrame(animate);
            particles.forEach(particle => {
                particle.rotation.y += 0.001;
            });
            renderer.render(scene, camera);
        };

        animate();

        window.addEventListener('resize', () => {
            camera.aspect = window.innerWidth / window.innerHeight;
            camera.updateProjectionMatrix();
            renderer.setSize(window.innerWidth, window.innerHeight);
        });

        return () => {
            window.removeEventListener('resize', () => {
                camera.aspect = window.innerWidth / window.innerHeight;
                camera.updateProjectionMatrix();
                renderer.setSize(window.innerWidth, window.innerHeight);
            });
            document.body.removeChild(renderer.domElement);
        };
    }, []);

    return (
        <div className="w-full h-screen overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-full flex flex-col justify-center items-center bg-white bg-opacity-50">
                <h1 className="text-5xl font-bold text-pink-500 mb-4">
                    Welcome to luxury FashionTV cosmetics
                </h1>
                <p className="text-xl text-pink-600 text-center mb-8">
                    Indulge in our exquisite collection of premium cosmetics tailored for the modern fashionista.
                </p>
                <button className="bg-pink-500 text-white py-2 px-4 rounded-full transition-transform transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-pink-300">
                    Explore Our Collection
                </button>
            </div>
        </div>
    );
};

export default ParticleBackground;