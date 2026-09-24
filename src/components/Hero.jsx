import React from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin, Mail } from 'lucide-react';

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center pt-32 pb-16 px-6 relative z-10">
      <div className="max-w-6xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        
        {/* Left Column: Text Content */}
        <motion.div 
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="lg:col-span-7 flex flex-col items-start text-left"
        >
          <p className="text-gray-400 uppercase tracking-widest text-sm mb-4 font-medium">
            AI & MLOps Engineer
          </p>
          
          <h1 className="text-6xl sm:text-7xl lg:text-8xl font-bold text-white leading-[1.1] tracking-tight mb-6">
            ISADORA<br />SANTOS
          </h1>
          
          <p className="text-lg text-gray-400 max-w-xl leading-relaxed">
            Crafting thoughtful, data-driven experiences that merge advanced AI capabilities with secure, scalable backend architectures.
          </p>
        </motion.div>

        {/* Right Column: Profile Card */}
        <motion.div 
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="lg:col-span-5 w-full max-w-md mx-auto lg:ml-auto"
        >
          <div className="glass-panel p-6 rounded-2xl">
            <div className="rounded-xl overflow-hidden mb-6 border border-gray-700/50 relative group h-64">
              <img 
                src="/profile.png" 
                alt="Isadora Santos" 
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
              {/* Subtle inner glow overlay */}
              <div className="absolute inset-0 shadow-[inset_0_0_30px_rgba(0,0,0,0.5)] pointer-events-none"></div>
            </div>
            
            <div>
              <h3 className="text-white text-sm font-bold uppercase tracking-wider mb-3">About Isadora</h3>
              <p className="text-gray-400 text-sm leading-relaxed mb-4">
                Specialized in building resilient AI pipelines, automated vulnerability management, and robust CI/CD workflows. Passionate about minimalism, elegant code, and secure infrastructure.
              </p>
              
              <p className="text-primary text-sm mb-6 flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-primary animate-pulse"></span>
                Available for collaborations.
              </p>
              
              <div className="flex gap-4 border-t border-gray-800/50 pt-4">
                <a href="https://linkedin.com/in/isadorasst" target="_blank" rel="noopener noreferrer" className="text-sm text-gray-400 hover:text-white transition-colors">LinkedIn</a>
                <a href="https://github.com/santosisadora" target="_blank" rel="noopener noreferrer" className="text-sm text-gray-400 hover:text-white transition-colors">GitHub</a>
                <a href="#contact" className="text-sm text-gray-400 hover:text-white transition-colors">Email</a>
              </div>
            </div>
          </div>
        </motion.div>
        
      </div>
    </section>
  );
};

export default Hero;
