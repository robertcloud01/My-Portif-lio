import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { ChevronLeft, ChevronRight, ExternalLink, Github, Play } from 'lucide-react';

const projects = [
  {
    id: 1,
    title: 'AI Neural Network',
    description: 'Rede neural avançada para processamento de linguagem natural e visão computacional',
    image: 'https://trae-api-us.mchost.guru/api/ide/v1/text_to_image?prompt=futuristic%20AI%20neural%20network%20interface%2C%20holographic%20display%2C%20blue%20and%20purple%20neon%20colors%2C%20minimalist%20design%2C%20high%20tech%20UI&image_size=landscape_16_9',
    technologies: ['Python', 'TensorFlow', 'React', 'FastAPI'],
    demoUrl: '#',
    githubUrl: '#',
    featured: true
  },
  {
    id: 2,
    title: 'Blockchain Wallet',
    description: 'Carteira criptográfica multi-moeda com segurança de nível bancário',
    image: 'https://trae-api-us.mchost.guru/api/ide/v1/text_to_image?prompt=futuristic%20blockchain%20wallet%20interface%2C%20holographic%20crypto%20display%2C%20metallic%20design%2C%20neon%20accents%2C%20premium%20UI&image_size=landscape_16_9',
    technologies: ['React', 'Web3.js', 'Solidity', 'Node.js'],
    demoUrl: '#',
    githubUrl: '#',
    featured: false
  },
  {
    id: 3,
    title: 'Quantum Computing Sim',
    description: 'Simulador quântico visual para educação e pesquisa científica',
    image: 'https://trae-api-us.mchost.guru/api/ide/v1/text_to_image?prompt=quantum%20computing%20simulation%20interface%2C%20futuristic%20scientific%20display%2C%20purple%20and%20blue%20energy%20fields%2C%20holographic%20visualization&image_size=landscape_16_9',
    technologies: ['Three.js', 'React', 'WebGL', 'TypeScript'],
    demoUrl: '#',
    githubUrl: '#',
    featured: true
  },
  {
    id: 4,
    title: 'Space Navigation System',
    description: 'Sistema de navegação interplanetária com interface holográfica 3D',
    image: 'https://trae-api-us.mchost.guru/api/ide/v1/text_to_image?prompt=space%20navigation%20interface%2C%20futuristic%20control%20panel%2C%20holographic%20star%20map%2C%20sci-fi%20design%2C%20neon%20blue%20interface&image_size=landscape_16_9',
    technologies: ['Three.js', 'React', 'WebXR', 'GraphQL'],
    demoUrl: '#',
    githubUrl: '#',
    featured: false
  }
];

export default function ProjectsSection() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  const nextProject = () => {
    setCurrentIndex((prev) => (prev + 1) % projects.length);
  };

  const prevProject = () => {
    setCurrentIndex((prev) => (prev - 1 + projects.length) % projects.length);
  };

  const currentProject = projects[currentIndex];

  return (
    <section ref={ref} className="relative py-20 px-6 bg-gradient-to-b from-gray-900 to-absolute-black overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-1/2 left-1/2 w-96 h-96 bg-neon-blue rounded-full blur-3xl animate-pulse" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-6xl font-orbitron font-black text-transparent bg-clip-text bg-gradient-to-r from-neon-blue to-tech-purple mb-4">
            PROJETOS DE ALTO IMPACTO
          </h2>
          <p className="text-xl text-metallic-steel max-w-3xl mx-auto">
            Explorando os limites da tecnologia através de projetos inovadores e experiências imersivas
          </p>
        </motion.div>

        {/* Main Project Display */}
        <div className="relative mb-16">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentProject.id}
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -100 }}
              transition={{ duration: 0.5 }}
              className="relative group"
            >
              {/* 3D Mockup Container */}
              <div className="relative bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl p-8 border border-neon-blue/30 backdrop-blur-sm overflow-hidden">
                {/* Laser Effect */}
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-neon-blue to-transparent animate-scan" />
                
                {/* Project Image */}
                <div className="relative mb-6 rounded-xl overflow-hidden group-hover:scale-105 transition-transform duration-300">
                  <img
                    src={currentProject.image}
                    alt={currentProject.title}
                    className="w-full h-80 object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-absolute-black/80 via-transparent to-transparent" />
                  
                  {/* Hover Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-br from-neon-blue/20 to-tech-purple/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <div className="flex space-x-4">
                      <button className="p-3 bg-neon-blue rounded-full text-absolute-black hover:scale-110 transition-transform">
                        <Play className="w-6 h-6" />
                      </button>
                      <button className="p-3 bg-tech-purple rounded-full text-white hover:scale-110 transition-transform">
                        <ExternalLink className="w-6 h-6" />
                      </button>
                    </div>
                  </div>
                </div>

                {/* Project Info */}
                <div className="space-y-4">
                  <h3 className="text-3xl font-orbitron font-bold text-pure-white group-hover:text-neon-blue transition-colors">
                    {currentProject.title}
                  </h3>
                  <p className="text-metallic-steel font-inter leading-relaxed">
                    {currentProject.description}
                  </p>
                  
                  {/* Technologies */}
                  <div className="flex flex-wrap gap-2">
                    {currentProject.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 bg-gradient-to-r from-neon-blue/20 to-tech-purple/20 text-neon-blue text-sm font-medium rounded-full border border-neon-blue/30 hover:bg-neon-blue/30 transition-colors"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Action Buttons */}
                  <div className="flex space-x-4 pt-4">
                    <button className="flex items-center space-x-2 px-6 py-3 bg-gradient-to-r from-neon-blue to-tech-purple rounded-lg font-medium text-white hover:scale-105 transition-transform">
                      <span>Ver Demo</span>
                      <ExternalLink className="w-4 h-4" />
                    </button>
                    <button className="flex items-center space-x-2 px-6 py-3 border-2 border-neon-blue rounded-lg font-medium text-neon-blue hover:bg-neon-blue hover:text-absolute-black transition-all">
                      <span>GitHub</span>
                      <Github className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Navigation Arrows */}
          <button
            onClick={prevProject}
            className="absolute left-4 top-1/2 transform -translate-y-1/2 p-3 bg-gray-800/80 rounded-full text-neon-blue hover:bg-neon-blue hover:text-white transition-all duration-300 backdrop-blur-sm"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
          <button
            onClick={nextProject}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 p-3 bg-gray-800/80 rounded-full text-neon-blue hover:bg-neon-blue hover:text-white transition-all duration-300 backdrop-blur-sm"
          >
            <ChevronRight className="w-6 h-6" />
          </button>
        </div>

        {/* Project Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              onClick={() => setCurrentIndex(index)}
              className={`relative group cursor-pointer bg-gradient-to-br from-gray-900 to-gray-800 rounded-xl p-4 border transition-all duration-300 hover:scale-105 ${
                index === currentIndex 
                  ? 'border-neon-blue shadow-lg shadow-neon-blue/50' 
                  : 'border-gray-700 hover:border-neon-blue/50'
              }`}
            >
              <div className="relative mb-3 rounded-lg overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-32 object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-absolute-black/60 to-transparent" />
              </div>
              <h4 className="text-pure-white font-orbitron font-bold text-sm mb-2 group-hover:text-neon-blue transition-colors">
                {project.title}
              </h4>
              <div className="flex flex-wrap gap-1">
                {project.technologies.slice(0, 2).map((tech) => (
                  <span
                    key={tech}
                    className="px-2 py-1 bg-neon-blue/20 text-neon-blue text-xs rounded border border-neon-blue/30"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              {project.featured && (
                <div className="absolute top-2 right-2 px-2 py-1 bg-gradient-to-r from-neon-blue to-tech-purple rounded text-xs font-bold text-absolute-black">
                  DESTAQUE
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}