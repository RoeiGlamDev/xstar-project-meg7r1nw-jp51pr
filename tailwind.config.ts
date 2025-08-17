import { defineConfig } from 'tailwindcss'

export default defineConfig({
  theme: {
    extend: {
      colors: {
        'luxury-pink': '#FFC0CB', // Custom pink color for luxury FashionTV cosmetics
        'luxury-white': '#FFFFFF', // Custom white color for luxury FashionTV cosmetics
      },
      animation: {
        fadeIn: 'fadeIn 0.5s ease-in-out',
        fadeOut: 'fadeOut 0.5s ease-in-out',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        fadeOut: {
          '0%': { opacity: '1' },
          '100%': { opacity: '0' },
        },
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
})