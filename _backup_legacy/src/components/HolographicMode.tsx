import { useState } from 'react';
import { motion } from 'framer-motion';

export default function HolographicMode() {
  const [isActive, setIsActive] = useState(false);

  const toggleHolographicMode = () => {
    setIsActive(!isActive);
    document.body.classList.toggle('holographic-mode', !isActive);
  };

  return (
    <motion.button
      onClick={toggleHolographicMode}
      className={`fixed bottom-8 right-8 z-50 p-4 rounded-full backdrop-blur-sm border-2 transition-all duration-300 ${
        isActive 
          ? 'bg-gradient-to-r from-neon-blue to-tech-purple text-absolute-black border-transparent' 
          : 'bg-gray-800/80 text-neon-blue border-neon-blue hover:bg-neon-blue/20'
      }`}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
    >
      <div className="relative">
        <motion.div
          animate={{ rotate: isActive ? 360 : 0 }}
          transition={{ duration: 0.5 }}
          className="w-6 h-6"
        >
          {isActive ? (
            <svg viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 2L2 7v10c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V7l-10-5z"/>
            </svg>
          ) : (
            <svg viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
            </svg>
          )}
        </motion.div>
        
        {/* Glow effect when active */}
        {isActive && (
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1.5, opacity: 0.3 }}
            transition={{ duration: 1, repeat: Infinity, repeatType: 'reverse' }}
            className="absolute inset-0 bg-neon-blue rounded-full blur-xl"
          />
        )}
      </div>
      
      <span className="sr-only">
        {isActive ? 'Desativar' : 'Ativar'} Modo Holográfico
      </span>
    </motion.button>
  );
}