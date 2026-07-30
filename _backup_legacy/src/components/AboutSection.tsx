import { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const skills = [
  { name: 'React/Next.js', level: 95, color: 'from-neon-blue to-blue-400' },
  { name: 'TypeScript', level: 90, color: 'from-tech-purple to-purple-400' },
  { name: 'Node.js', level: 88, color: 'from-green-400 to-emerald-400' },
  { name: 'Python/IA', level: 85, color: 'from-yellow-400 to-orange-400' },
  { name: 'Blockchain', level: 80, color: 'from-red-400 to-pink-400' },
  { name: 'UI/UX Design', level: 92, color: 'from-pink-400 to-rose-400' },
];

const experiences = [
  {
    year: '2024',
    title: 'Senior Full-Stack Developer',
    company: 'TechCorp Inc.',
    description: 'Liderando projetos de IA e blockchain'
  },
  {
    year: '2022',
    title: 'Full-Stack Developer',
    company: 'StartupXYZ',
    description: 'Desenvolvimento de aplicações web escaláveis'
  },
  {
    year: '2020',
    title: 'Frontend Developer',
    company: 'Digital Agency',
    description: 'Especialista em React e experiências interativas'
  },
];

export default function AboutSection() {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  return (
    <section ref={ref} className="relative py-20 px-6 bg-gradient-to-b from-absolute-black to-gray-900 overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-neon-blue rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-tech-purple rounded-full blur-3xl animate-pulse" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-6xl font-orbitron font-black text-transparent bg-clip-text bg-gradient-to-r from-neon-blue to-tech-purple mb-4">
            IDENTIDADE FUTURISTA
          </h2>
          <p className="text-xl text-metallic-steel max-w-3xl mx-auto">
            Arquitetando o futuro através de código, design e inovação tecnológica
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Holographic Avatar */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="relative w-80 h-80 mx-auto">
              {/* Rotating Ring */}
              <div className="absolute inset-0 border-4 border-neon-blue rounded-full animate-spin" style={{ animationDuration: '20s' }} />
              <div className="absolute inset-4 border-2 border-tech-purple rounded-full animate-spin" style={{ animationDuration: '15s', animationDirection: 'reverse' }} />
              
              {/* Central Avatar */}
              <div className="absolute inset-8 bg-gradient-to-br from-neon-blue via-tech-purple to-neon-blue rounded-full p-1 animate-hologram">
                <div className="w-full h-full bg-absolute-black rounded-full flex items-center justify-center">
                  <div className="text-center">
                    <div className="text-6xl font-orbitron text-neon-blue animate-neon-pulse mb-2">
                      JS
                    </div>
                    <div className="text-metallic-steel text-sm font-inter">
                      Full-Stack
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating Tech Orbs */}
              <div className="absolute top-0 left-1/2 w-4 h-4 bg-neon-blue rounded-full animate-float" />
              <div className="absolute bottom-0 left-0 w-3 h-3 bg-tech-purple rounded-full animate-float" style={{ animationDelay: '1s' }} />
              <div className="absolute top-1/2 right-0 w-2 h-2 bg-pure-white rounded-full animate-float" style={{ animationDelay: '2s' }} />
            </div>
          </motion.div>

          {/* Skills and Info */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="space-y-8"
          >
            {/* Bio */}
            <div className="bg-gradient-to-r from-gray-900 to-gray-800 rounded-xl p-6 border border-neon-blue/30 backdrop-blur-sm">
              <h3 className="text-2xl font-orbitron font-bold text-neon-blue mb-4">BIOGRAFIA DIGITAL</h3>
              <p className="text-metallic-steel font-inter leading-relaxed">
                Desenvolvedor full-stack com paixão por criar experiências digitais revolucionárias.
                Especializado em React, Node.js, IA e blockchain. Combinando design futurista com
                funcionalidade de ponta para criar o próximo nível de interação digital.
              </p>
            </div>

            {/* Skills */}
            <div className="space-y-4">
              <h3 className="text-2xl font-orbitron font-bold text-tech-purple mb-4">HABILIDADES TÉCNICAS</h3>
              {skills.map((skill, index) => (
                <motion.div
                  key={skill.name}
                  initial={{ opacity: 0, x: 20 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.6 + index * 0.1 }}
                  className="relative"
                >
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-metallic-steel font-inter font-medium">{skill.name}</span>
                    <span className="text-neon-blue font-orbitron text-sm">{skill.level}%</span>
                  </div>
                  <div className="w-full bg-gray-800 rounded-full h-3 overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      animate={inView ? { width: `${skill.level}%` } : {}}
                      transition={{ duration: 1, delay: 0.8 + index * 0.1 }}
                      className={`h-full bg-gradient-to-r ${skill.color} rounded-full relative overflow-hidden`}
                    >
                      <div className="absolute inset-0 bg-white/20 animate-scan" />
                    </motion.div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Experience Timeline */}
            <div className="mt-8">
              <h3 className="text-2xl font-orbitron font-bold text-neon-blue mb-4">LINHA DO TEMPO</h3>
              <div className="space-y-4">
                {experiences.map((exp, index) => (
                  <motion.div
                    key={exp.year}
                    initial={{ opacity: 0, y: 20 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.5, delay: 1 + index * 0.2 }}
                    className="flex items-start space-x-4"
                  >
                    <div className="flex-shrink-0 w-16 h-16 bg-gradient-to-r from-neon-blue to-tech-purple rounded-lg flex items-center justify-center">
                      <span className="text-absolute-black font-orbitron font-bold">{exp.year}</span>
                    </div>
                    <div className="flex-1">
                      <h4 className="text-pure-white font-inter font-semibold">{exp.title}</h4>
                      <p className="text-tech-purple font-medium">{exp.company}</p>
                      <p className="text-metallic-steel text-sm">{exp.description}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}