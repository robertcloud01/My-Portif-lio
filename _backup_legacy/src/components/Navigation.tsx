import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  const sections = [
    { id: 'home', name: 'Home', icon: '🏠' },
    { id: 'about', name: 'Sobre', icon: '👤' },
    { id: 'projects', name: 'Projetos', icon: '💻' },
    { id: 'contact', name: 'Contato', icon: '📧' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
      
      // Update active section based on scroll position
      const scrollPosition = window.scrollY + window.innerHeight / 2;
      
      sections.forEach(section => {
        const element = document.getElementById(section.id);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section.id);
          }
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        isScrolled 
          ? 'bg-gray-900/90 backdrop-blur-md border-b border-neon-blue/30' 
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="flex items-center space-x-3"
          >
            <div className="w-10 h-10 bg-gradient-to-r from-neon-blue to-tech-purple rounded-lg flex items-center justify-center">
              <span className="text-absolute-black font-orbitron font-bold text-lg">JS</span>
            </div>
            <span className="text-pure-white font-orbitron font-bold text-xl hidden sm:block">
              John Smith
            </span>
          </motion.div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {sections.map((section) => (
              <motion.button
                key={section.id}
                onClick={() => scrollToSection(section.id)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={`flex items-center space-x-2 px-4 py-2 rounded-lg transition-all duration-300 ${
                  activeSection === section.id
                    ? 'bg-gradient-to-r from-neon-blue to-tech-purple text-absolute-black'
                    : 'text-metallic-steel hover:text-neon-blue hover:bg-neon-blue/10'
                }`}
              >
                <span>{section.icon}</span>
                <span className="font-medium">{section.name}</span>
              </motion.button>
            ))}
          </div>

          {/* Mobile Navigation */}
          <div className="md:hidden flex items-center space-x-2">
            {sections.map((section) => (
              <motion.button
                key={section.id}
                onClick={() => scrollToSection(section.id)}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className={`p-2 rounded-lg transition-all duration-300 ${
                  activeSection === section.id
                    ? 'bg-gradient-to-r from-neon-blue to-tech-purple text-absolute-black'
                    : 'text-metallic-steel hover:text-neon-blue'
                }`}
              >
                <span className="text-lg">{section.icon}</span>
              </motion.button>
            ))}
          </div>
        </div>
      </div>

      {/* Progress Bar */}
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-gray-800">
        <motion.div
          className="h-full bg-gradient-to-r from-neon-blue to-tech-purple"
          style={{ width: `${(activeSection === 'home' ? 0 : activeSection === 'about' ? 33 : activeSection === 'projects' ? 66 : 100)}%` }}
          transition={{ duration: 0.3 }}
        />
      </div>
    </motion.nav>
  );
}