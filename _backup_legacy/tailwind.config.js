/** @type {import('tailwindcss').Config} */

export default {
  darkMode: "class",
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    container: {
      center: true,
    },
    extend: {
      colors: {
        'absolute-black': '#000000',
        'neon-blue': '#00C8FF',
        'tech-purple': '#7A2FF7',
        'metallic-steel': '#A7A7A7',
        'pure-white': '#FFFFFF',
        'neon-glow': 'rgba(0, 200, 255, 0.3)',
        'purple-glow': 'rgba(122, 47, 247, 0.3)',
      },
      fontFamily: {
        'orbitron': ['Orbitron', 'monospace'],
        'poppins': ['Poppins', 'sans-serif'],
        'inter': ['Inter', 'sans-serif'],
      },
      animation: {
        'pulse-glow': 'pulse-glow 2s ease-in-out infinite',
        'float': 'float 3s ease-in-out infinite',
        'scan': 'scan 2s linear infinite',
        'flicker': 'flicker 0.5s ease-in-out infinite alternate',
        'neon-pulse': 'neon-pulse 1.5s ease-in-out infinite',
        'hologram': 'hologram 3s ease-in-out infinite',
      },
      keyframes: {
        'pulse-glow': {
          '0%, 100%': { boxShadow: '0 0 20px rgba(0, 200, 255, 0.5)' },
          '50%': { boxShadow: '0 0 40px rgba(0, 200, 255, 0.8)' },
        },
        'float': {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        'scan': {
          '0%': { transform: 'translateX(-100%)' },
          '100%': { transform: 'translateX(100%)' },
        },
        'flicker': {
          '0%': { opacity: '1' },
          '100%': { opacity: '0.7' },
        },
        'neon-pulse': {
          '0%, 100%': { opacity: '1', textShadow: '0 0 10px rgba(0, 200, 255, 0.8)' },
          '50%': { opacity: '0.8', textShadow: '0 0 20px rgba(0, 200, 255, 1)' },
        },
        'hologram': {
          '0%': { transform: 'rotateY(0deg)', opacity: '0.9' },
          '50%': { transform: 'rotateY(180deg)', opacity: '0.6' },
          '100%': { transform: 'rotateY(360deg)', opacity: '0.9' },
        },
      },
      backdropBlur: {
        'xs': '2px',
      },
    },
  },
  plugins: [],
};
