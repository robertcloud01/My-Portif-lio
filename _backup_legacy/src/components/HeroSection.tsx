import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const texts = [
  'Desenvolvedor Full-Stack',
  'Especialista em IA',
  'Criador de Experiências',
  'Inovador Tech',
  'Arquiteto de Futuro'
];

export default function HeroSection() {
  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  const [displayText, setDisplayText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentText = texts[currentTextIndex];
    let timeout: NodeJS.Timeout;

    if (!isDeleting && displayText.length < currentText.length) {
      timeout = setTimeout(() => {
        setDisplayText(currentText.substring(0, displayText.length + 1));
      }, 100);
    } else if (isDeleting && displayText.length > 0) {
      timeout = setTimeout(() => {
        setDisplayText(currentText.substring(0, displayText.length - 1));
      }, 50);
    } else if (!isDeleting && displayText.length === currentText.length) {
      timeout = setTimeout(() => {
        setIsDeleting(true);
      }, 2000);
    } else if (isDeleting && displayText.length === 0) {
      timeout = setTimeout(() => {
        setIsDeleting(false);
        setCurrentTextIndex((prev) => (prev + 1) % texts.length);
      }, 500);
    }

    return () => clearTimeout(timeout);
  }, [displayText, isDeleting, currentTextIndex]);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-br from-absolute-black via-gray-900 to-absolute-black">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(0,200,255,0.1),transparent_50%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(122,47,247,0.1),transparent_50%)]" />
      </div>

      {/* Holographic Grid */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(0,200,255,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(0,200,255,0.1)_1px,transparent_1px)] bg-[size:50px_50px]" />
      </div>

      {/* Main Content */}
      <div className="relative z-10 text-center px-6 max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="mb-8"
        >
          {/* Holographic Avatar */}
          <div className="relative inline-block mb-8">
            <div className="absolute inset-0 bg-gradient-to-r from-neon-blue to-tech-purple rounded-full blur-xl opacity-50 animate-pulse" />
            <div className="relative w-32 h-32 mx-auto bg-gradient-to-br from-neon-blue via-tech-purple to-neon-blue rounded-full p-1 animate-hologram">
              <div className="w-full h-full bg-absolute-black rounded-full flex items-center justify-center">
                <div className="text-4xl font-orbitron text-neon-blue animate-neon-pulse">
                  JS
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="text-6xl md:text-8xl font-orbitron font-black text-transparent bg-clip-text bg-gradient-to-r from-neon-blue via-white to-tech-purple mb-6 animate-neon-pulse"
        >
          JOHN SMITH
        </motion.h1>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.8 }}
          className="text-2xl md:text-3xl font-inter font-light text-metallic-steel mb-8 h-8"
        >
          <span className="inline-block animate-flicker">{displayText}</span>
          <span className="inline-block w-1 h-8 bg-neon-blue ml-2 animate-pulse" />
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1.2 }}
          className="text-lg text-metallic-steel max-w-2xl mx-auto mb-12 leading-relaxed"
        >
          Transformando ideias em realidade digital através de código de ponta e design inovador.
          Especialista em criar experiências imersivas que desafiam os limites da tecnologia.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1.6 }}
          className="flex flex-col sm:flex-row gap-6 justify-center items-center"
        >
          <button className="group relative px-8 py-4 bg-gradient-to-r from-neon-blue to-tech-purple rounded-lg font-orbitron font-bold text-lg text-white transition-all duration-300 hover:scale-105 animate-pulse-glow">
            <span className="relative z-10">Explorar Projetos</span>
            <div className="absolute inset-0 bg-gradient-to-r from-tech-purple to-neon-blue rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </button>

          <button className="group relative px-8 py-4 border-2 border-neon-blue rounded-lg font-orbitron font-bold text-lg text-neon-blue transition-all duration-300 hover:bg-neon-blue hover:text-absolute-black">
            <span className="relative z-10">Contato</span>
            <div className="absolute inset-0 bg-neon-blue rounded-lg transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
          </button>
        </motion.div>

        {/* Tech Indicators */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 2 }}
          className="mt-16 flex justify-center space-x-8 text-sm text-metallic-steel"
        >
          <div className="flex items-center space-x-2">
            <div className="w-2 h-2 bg-neon-blue rounded-full animate-pulse" />
            <span>React & Next.js</span>
          </div>
          <div className="flex items-center space-x-2">
            <div className="w-2 h-2 bg-tech-purple rounded-full animate-pulse" />
            <span>IA & Machine Learning</span>
          </div>
          <div className="flex items-center space-x-2">
            <div className="w-2 h-2 bg-pure-white rounded-full animate-pulse" />
            <span>Blockchain</span>
          </div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 2.5 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <div className="w-6 h-10 border-2 border-neon-blue rounded-full flex justify-center">
          <div className="w-1 h-3 bg-neon-blue rounded-full mt-2 animate-bounce" />
        </div>
      </motion.div>
    </section>
  );
}