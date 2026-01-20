import { useState } from 'react';
import Navigation from './components/Navigation';
import HeroSection from './components/HeroSection';
import AboutSection from './components/AboutSection';
import ProjectsSection from './components/ProjectsSection';
import ContactSection from './components/ContactSection';
import ParticleBackground from './components/ui/ParticleBackground';
import HolographicMode from './components/HolographicMode';
import HolographicStyles from './components/HolographicStyles';

function App() {
  const [loading, setLoading] = useState(true);

  // Simulate loading screen
  setTimeout(() => {
    setLoading(false);
  }, 2000);

  if (loading) {
    return (
      <div className="min-h-screen bg-absolute-black flex items-center justify-center">
        <div className="text-center">
          <div className="relative w-32 h-32 mx-auto mb-8">
            <div className="absolute inset-0 border-4 border-neon-blue rounded-full animate-spin" />
            <div className="absolute inset-2 border-2 border-tech-purple rounded-full animate-spin" style={{ animationDirection: 'reverse' }} />
            <div className="absolute inset-4 flex items-center justify-center">
              <span className="text-4xl font-orbitron text-neon-blue animate-pulse">JS</span>
            </div>
          </div>
          <h2 className="text-2xl font-orbitron text-neon-blue animate-neon-pulse mb-2">
            INICIANDO SISTEMA
          </h2>
          <p className="text-metallic-steel font-inter">Carregando portfólio futurista...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-absolute-black text-pure-white overflow-x-hidden">
      <HolographicStyles />
      <ParticleBackground />
      <Navigation />
      
      <main>
        <section id="home">
          <HeroSection />
        </section>
        
        <section id="about">
          <AboutSection />
        </section>
        
        <section id="projects">
          <ProjectsSection />
        </section>
        
        <section id="contact">
          <ContactSection />
        </section>
      </main>

      <HolographicMode />

      {/* Footer */}
      <footer className="relative py-8 px-6 bg-gradient-to-t from-absolute-black to-gray-900 border-t border-neon-blue/30">
        <div className="max-w-7xl mx-auto text-center">
          <p className="text-metallic-steel font-inter">
            © 2024 John Smith. Desenvolvido com tecnologias de ponta e visão futurista.
          </p>
          <div className="mt-4 flex justify-center space-x-4 text-sm text-neon-blue">
            <span>React</span>
            <span>•</span>
            <span>TypeScript</span>
            <span>•</span>
            <span>Three.js</span>
            <span>•</span>
            <span>Framer Motion</span>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;