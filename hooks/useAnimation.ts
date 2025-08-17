import { useEffect, useRef } from 'react';

/
 * Custom hook for animations tailored for luxury FashionTV cosmetics
 * @returns {object} - An object containing animation control functions
 * @typedef {object} AnimationControl
 * @property {React.RefObject<HTMLDivElement>} ref - Reference to the DOM element to animate
 * @property {() => void} fadeIn - Function to trigger fade-in animation
 * @property {() => void} slideIn - Function to trigger slide-in animation
 */
export function useAnimation(): AnimationControl {
    const ref = useRef<HTMLDivElement>(null);

    /
     * Function to trigger a fade-in animation
     */
    const fadeIn = () => {
        if (ref.current) {
            ref.current.style.opacity = '0';
            ref.current.style.transition = 'opacity 0.5s ease-in-out';
            ref.current.style.opacity = '1';
        }
    };

    /
     * Function to trigger a slide-in animation
     */
    const slideIn = () => {
        if (ref.current) {
            ref.current.style.transform = 'translateX(-100%)';
            ref.current.style.transition = 'transform 0.5s ease-in-out';
            ref.current.style.transform = 'translateX(0)';
        }
    };

    useEffect(() => {
        // Initial animations can be triggered here
        fadeIn();
    }, []);

    return { ref, fadeIn, slideIn };
}