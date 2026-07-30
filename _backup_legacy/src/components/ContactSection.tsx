import { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Send, Mail, Phone, MapPin, Github, Linkedin, Twitter } from 'lucide-react';

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setFormData({ name: '', email: '', message: '' });
      alert('Mensagem enviada com sucesso! Entrarei em contato em breve.');
    }, 2000);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section ref={ref} className="relative py-20 px-6 bg-gradient-to-b from-absolute-black to-gray-900 overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-1/4 right-1/4 w-64 h-64 bg-tech-purple rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-neon-blue rounded-full blur-3xl animate-pulse" />
      </div>

      {/* Matrix Rain Effect */}
      <div className="absolute inset-0 opacity-5">
        <div className="h-full w-full bg-[linear-gradient(0deg,transparent_24px,rgba(0,200,255,0.1)_25px,rgba(0,200,255,0.1)_26px,transparent_27px)] bg-[size:50px_50px]" />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-6xl font-orbitron font-black text-transparent bg-clip-text bg-gradient-to-r from-neon-blue to-tech-purple mb-4">
            TERMINAL DE CONTATO
          </h2>
          <p className="text-xl text-metallic-steel max-w-3xl mx-auto">
            Conecte-se comigo através do terminal futurista
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form - Terminal Style */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-xl p-8 border border-neon-blue/30 backdrop-blur-sm">
              {/* Terminal Header */}
              <div className="flex items-center space-x-2 mb-6 pb-4 border-b border-neon-blue/30">
                <div className="w-3 h-3 bg-red-500 rounded-full" />
                <div className="w-3 h-3 bg-yellow-500 rounded-full" />
                <div className="w-3 h-3 bg-green-500 rounded-full" />
                <span className="ml-4 text-neon-blue font-orbitron text-sm">contact@futurist.dev</span>
              </div>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="relative">
                  <label className="block text-neon-blue font-orbitron text-sm mb-2">
                    &gt; NOME:
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 bg-absolute-black border-2 border-neon-blue/50 rounded-lg text-pure-white font-inter focus:border-neon-blue focus:outline-none focus:ring-2 focus:ring-neon-blue/50 transition-all duration-300"
                    placeholder="Digite seu nome..."
                  />
                </div>

                <div className="relative">
                  <label className="block text-tech-purple font-orbitron text-sm mb-2">
                    &gt; EMAIL:
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 bg-absolute-black border-2 border-tech-purple/50 rounded-lg text-pure-white font-inter focus:border-tech-purple focus:outline-none focus:ring-2 focus:ring-tech-purple/50 transition-all duration-300"
                    placeholder="seu@email.com"
                  />
                </div>

                <div className="relative">
                  <label className="block text-neon-blue font-orbitron text-sm mb-2">
                    &gt; MENSAGEM:
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    rows={5}
                    className="w-full px-4 py-3 bg-absolute-black border-2 border-neon-blue/50 rounded-lg text-pure-white font-inter focus:border-neon-blue focus:outline-none focus:ring-2 focus:ring-neon-blue/50 transition-all duration-300 resize-none"
                    placeholder="Escreva sua mensagem..."
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full flex items-center justify-center space-x-2 px-6 py-4 bg-gradient-to-r from-neon-blue to-tech-purple rounded-lg font-orbitron font-bold text-lg text-white hover:scale-105 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? (
                    <>
                      <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                      <span>ENVIANDO...</span>
                    </>
                  ) : (
                    <>
                      <Send className="w-5 h-5" />
                      <span>ENVIAR MENSAGEM</span>
                    </>
                  )}
                </button>
              </form>
            </div>
          </motion.div>

          {/* Contact Info & Social */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="space-y-8"
          >
            {/* Contact Info */}
            <div className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-xl p-8 border border-tech-purple/30 backdrop-blur-sm">
              <h3 className="text-2xl font-orbitron font-bold text-tech-purple mb-6">
                INFORMAÇÕES DE CONTATO
              </h3>
              
              <div className="space-y-4">
                <div className="flex items-center space-x-4 group">
                  <div className="w-12 h-12 bg-gradient-to-r from-neon-blue to-tech-purple rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform">
                    <Mail className="w-6 h-6 text-absolute-black" />
                  </div>
                  <div>
                    <p className="text-metallic-steel font-inter text-sm">EMAIL</p>
                    <p className="text-pure-white font-medium">john.smith@futurist.dev</p>
                  </div>
                </div>

                <div className="flex items-center space-x-4 group">
                  <div className="w-12 h-12 bg-gradient-to-r from-tech-purple to-neon-blue rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform">
                    <Phone className="w-6 h-6 text-absolute-black" />
                  </div>
                  <div>
                    <p className="text-metallic-steel font-inter text-sm">TELEFONE</p>
                    <p className="text-pure-white font-medium">+55 (11) 98765-4321</p>
                  </div>
                </div>

                <div className="flex items-center space-x-4 group">
                  <div className="w-12 h-12 bg-gradient-to-r from-pure-white to-metallic-steel rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform">
                    <MapPin className="w-6 h-6 text-absolute-black" />
                  </div>
                  <div>
                    <p className="text-metallic-steel font-inter text-sm">LOCALIZAÇÃO</p>
                    <p className="text-pure-white font-medium">São Paulo, Brasil</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-xl p-8 border border-neon-blue/30 backdrop-blur-sm">
              <h3 className="text-2xl font-orbitron font-bold text-neon-blue mb-6">
                REDES SOCIAIS
              </h3>
              
              <div className="grid grid-cols-3 gap-4">
                <motion.a
                  href="#"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="flex flex-col items-center space-y-2 p-4 bg-gradient-to-br from-gray-800 to-gray-700 rounded-lg border border-gray-600 hover:border-neon-blue transition-all duration-300 group"
                >
                  <Github className="w-8 h-8 text-metallic-steel group-hover:text-neon-blue transition-colors" />
                  <span className="text-xs text-metallic-steel font-inter">GitHub</span>
                </motion.a>

                <motion.a
                  href="#"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="flex flex-col items-center space-y-2 p-4 bg-gradient-to-br from-gray-800 to-gray-700 rounded-lg border border-gray-600 hover:border-tech-purple transition-all duration-300 group"
                >
                  <Linkedin className="w-8 h-8 text-metallic-steel group-hover:text-tech-purple transition-colors" />
                  <span className="text-xs text-metallic-steel font-inter">LinkedIn</span>
                </motion.a>

                <motion.a
                  href="#"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="flex flex-col items-center space-y-2 p-4 bg-gradient-to-br from-gray-800 to-gray-700 rounded-lg border border-gray-600 hover:border-pure-white transition-all duration-300 group"
                >
                  <Twitter className="w-8 h-8 text-metallic-steel group-hover:text-pure-white transition-colors" />
                  <span className="text-xs text-metallic-steel font-inter">Twitter</span>
                </motion.a>
              </div>
            </div>

            {/* Response Time */}
            <div className="bg-gradient-to-r from-neon-blue/10 to-tech-purple/10 rounded-lg p-4 border border-neon-blue/30">
              <p className="text-neon-blue font-orbitron text-sm text-center">
                🚀 Tempo de resposta: &lt; 24h
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}