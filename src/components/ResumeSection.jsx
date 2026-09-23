import React from 'react';
import { motion } from 'framer-motion';
import { Download, Eye } from 'lucide-react';

const ResumeSection = () => {
  return (
    <section id="resume" className="py-24 px-6 relative z-10">
      <div className="max-w-4xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-12"
        >
          <h2 className="text-4xl font-bold text-white mb-4">Resume</h2>
          <div className="w-20 h-1 bg-primary mx-auto rounded-full shadow-[0_0_10px_rgba(0,240,255,0.5)]"></div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="glass glass-hover rounded-xl p-10 flex flex-col sm:flex-row items-center justify-center gap-6"
        >
          <a
            href="/Isadora_Santos-AI_MLops_Engineer.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-8 py-4 bg-transparent border border-primary/50 text-primary font-bold rounded-lg hover:bg-primary/10 transition-all hover:shadow-[0_0_15px_rgba(0,240,255,0.2)] w-full sm:w-auto justify-center"
          >
            <Eye className="w-5 h-5" />
            View Resume
          </a>
          <a
            href="/Isadora_Santos-AI_MLops_Engineer.pdf"
            download="Isadora_Santos-AI_MLops_Engineer.pdf"
            className="flex items-center gap-2 px-8 py-4 bg-primary text-black font-bold rounded-lg hover:bg-primary/90 transition-all hover:shadow-[0_0_15px_rgba(0,240,255,0.4)] w-full sm:w-auto justify-center"
          >
            <Download className="w-5 h-5" />
            Download Resume
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default ResumeSection;
