import { useEffect, useRef } from 'react';
import * as THREE from 'three';

/
 * Custom hook for creating 3D interactions for luxury FashionTV cosmetics.
 * This hook sets up a 3D scene using three.js, emphasizing the elegance and luxury of the brand.
 * 
 * @module use3D
 * @returns {Object} - Returns an object containing the scene, camera, and renderer.
 */
export interface LuxFashion3D {
    scene: THREE.Scene;
    camera: THREE.PerspectiveCamera;
    renderer: THREE.WebGLRenderer;
}

/
 * Initializes the 3D scene for the luxury FashionTV cosmetics brand.
 * 
 * @returns {LuxFashion3D} - An object containing the initialized scene, camera, and renderer.
 */
const use3D = (): LuxFashion3D => {
    const sceneRef = useRef<THREE.Scene | null>(null);
    const cameraRef = useRef<THREE.PerspectiveCamera | null>(null);
    const rendererRef = useRef<THREE.WebGLRenderer | null>(null);

    useEffect(() => {
        // Create the scene
        const scene = new THREE.Scene();
        scene.background = new THREE.Color(0xffffff); // White background to enhance luxury feel
        
        // Set up the camera
        const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
        camera.position.z = 5; // Position the camera for a better view of the cosmetics display

        // Set up the renderer
        const renderer = new THREE.WebGLRenderer({ antialias: true });
        renderer.setSize(window.innerWidth, window.innerHeight);
        document.body.appendChild(renderer.domElement);

        // Add lighting to enhance the visual appeal
        const ambientLight = new THREE.AmbientLight(0xffffff, 0.5); // Soft white light
        scene.add(ambientLight);
        const pointLight = new THREE.PointLight(0xff69b4, 1, 100); // Pink point light for luxury effect
        pointLight.position.set(10, 10, 10);
        scene.add(pointLight);

        // Sample 3D object creation for luxury FashionTV cosmetics
        const geometry = new THREE.BoxGeometry(1, 1, 1);
        const material = new THREE.MeshStandardMaterial({ color: 0xff69b4 }); // Pink material
        const cube = new THREE.Mesh(geometry, material);
        scene.add(cube);

        // Animation loop
        const animate = () => {
            requestAnimationFrame(animate);
            cube.rotation.x += 0.01;
            cube.rotation.y += 0.01;
            renderer.render(scene, camera);
        };

        animate();

        // Clean up resources on unmount
        return () => {
            if (rendererRef.current) {
                rendererRef.current.dispose();
            }
            document.body.removeChild(renderer.domElement);
        };
    }, []);

    return {
        scene: sceneRef.current!,
        camera: cameraRef.current!,
        renderer: rendererRef.current!,
    };
};

export default use3D;