import React from 'react';
import { motion } from 'framer-motion';
import { FileText, ArrowRight } from 'lucide-react';

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center relative pt-20 px-6">
      <div className="max-w-4xl mx-auto text-center z-10 flex flex-col items-center">
        
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="mb-8 relative"
        >
          <div className="w-32 h-32 md:w-40 md:h-40 rounded-full overflow-hidden border-4 border-primary shadow-[0_0_30px_rgba(0,240,255,0.4)] relative z-10">
            <img 
              src="/profile.png" 
              alt="Isadora Santos" 
              className="w-full h-full object-cover"
            />
          </div>
          <div className="absolute inset-0 rounded-full bg-primary blur-2xl opacity-20 -z-10 animate-pulse"></div>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-4xl md:text-5xl font-bold text-white mb-2 tracking-tight leading-tight"
        >
          Isadora Santos
        </motion.h1>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-primary/30 bg-primary/10 text-primary text-sm font-semibold tracking-wide mb-6 shadow-[0_0_15px_rgba(0,240,255,0.2)] mt-4"
        >
          <span className="w-2 h-2 rounded-full bg-primary animate-pulse"></span>
          AI Software & MLOps Engineer
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="text-lg md:text-xl text-gray-400 mb-10 max-w-2xl mx-auto leading-relaxed"
        >
          Bridging cybersecurity & backend expertise with advanced AI.<br className="hidden sm:block" />
          Building secure, deployable, data-driven applications.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full sm:w-auto"
        >
          <a
            href="#projects"
            className="group flex items-center gap-2 px-8 py-4 bg-primary text-black font-bold rounded-lg hover:bg-primary/90 transition-all hover:shadow-[0_0_20px_rgba(0,240,255,0.4)] w-full sm:w-auto justify-center"
          >
            Explore Projects
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </a>
          <a
            href="#contact"
            className="flex items-center gap-2 px-8 py-4 bg-transparent border border-primary/50 text-primary font-bold rounded-lg hover:bg-primary/10 transition-all hover:shadow-[0_0_15px_rgba(0,240,255,0.2)] w-full sm:w-auto justify-center"
          >
            <FileText className="w-5 h-5" />
            Contact Me
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
