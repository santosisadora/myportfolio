import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Sparkles } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="py-24 px-6 relative z-10">
      <div className="max-w-6xl mx-auto">
        
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-12"
        >
          <div className="flex items-center gap-4 mb-2">
            <h2 className="text-3xl font-bold text-gray-200 tracking-wide">Beyond the Code</h2>
          </div>
          <div className="w-full h-[1px] bg-gray-800 relative">
            <div className="absolute top-0 left-0 w-48 h-[2px] bg-primary shadow-[0_0_10px_rgba(20,184,166,0.8)]"></div>
          </div>
        </motion.div>

        {/* Content */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
          
          {/* Main Bio Card */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="md:col-span-7 glass-panel rounded-2xl p-8 flex flex-col justify-center transition-all duration-500 hover:shadow-[0_0_30px_rgba(20,184,166,0.15)]"
          >
            <div className="flex items-center gap-3 mb-6">
              <span className="flex items-center justify-center w-10 h-10 rounded-full bg-primary/10 text-primary border border-primary/20">
                <MapPin className="w-5 h-5" />
              </span>
              <h3 className="text-xl font-bold text-white">Based in Canada</h3>
            </div>
            
            <p className="text-gray-300 leading-relaxed mb-6 text-lg">
              I'm deeply passionate about technology and relentlessly curious. I thrive on discovering new, elegant ways to solve complex problems and am always on the hunt for the next exciting thing to learn.
            </p>
            <p className="text-gray-400 leading-relaxed">
              When I'm not architecting secure AI pipelines or writing code, you can find me spiking a volleyball, exploring new travel destinations, playing chess with my husband, or just hanging out with my cats. 
            </p>
          </motion.div>

          {/* Fun Fact Card */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="md:col-span-5 glass-panel rounded-2xl p-8 border-primary/40 shadow-[0_0_30px_rgba(20,184,166,0.1)] flex flex-col relative overflow-hidden transition-all duration-500 hover:shadow-[0_0_40px_rgba(20,184,166,0.25)] hover:border-primary/60"
          >
            {/* Decorative background glow */}
            <div className="absolute -top-10 -right-10 w-32 h-32 bg-primary/20 rounded-full blur-[50px] pointer-events-none"></div>

            <div className="flex items-center gap-3 mb-6 relative z-10">
              <div className="p-2 bg-primary/10 rounded-lg border border-primary/30">
                <Sparkles className="w-6 h-6 text-primary animate-pulse" />
              </div>
              <h3 className="text-lg font-bold text-primary uppercase tracking-widest">Fun Fact</h3>
            </div>
            
            <p className="text-gray-200 text-lg leading-relaxed relative z-10 font-medium mb-4">
              Before diving headfirst into the world of AI and DevSecOps, I was actually a Medical Doctor!
            </p>
            <p className="text-gray-400 leading-relaxed relative z-10">
              I practiced as a family physician for three years back in Brazil. That background in diagnosing complex systems and caring for people completely shaped how I approach technology—with precision, empathy, and a drive to build healthy, resilient architectures.
            </p>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default About;
