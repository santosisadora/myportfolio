import React from 'react';
import { motion } from 'framer-motion';
import { Award, CheckCircle } from 'lucide-react';

const certifications = [
  {
    title: "MLOps Certification",
    issuer: "Duke University",
    date: "2024"
  },
  {
    title: "Cybersecurity/SecOps Certified Professional",
    issuer: "Security Institute",
    date: "2022"
  },
  {
    title: "Java SE Programming",
    issuer: "Oracle",
    date: "2021"
  }
];

const Certifications = () => {
  return (
    <section id="certifications" className="py-24 px-6 relative z-10">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-16 text-center"
        >
          <h2 className="text-4xl font-bold text-white mb-4">Certifications</h2>
          <div className="w-20 h-1 bg-primary mx-auto rounded-full shadow-[0_0_10px_rgba(0,240,255,0.5)]"></div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {certifications.map((cert, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="glass glass-hover rounded-xl p-6 flex items-start gap-4"
            >
              <div className="mt-1">
                <Award className="w-8 h-8 text-primary text-glow" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-white mb-1 leading-tight">{cert.title}</h3>
                <p className="text-sm text-gray-400 mb-3">{cert.issuer}</p>
                <div className="flex items-center gap-1.5 text-xs text-primary font-medium bg-primary/10 w-fit px-2 py-1 rounded">
                  <CheckCircle className="w-3 h-3" />
                  Verified • {cert.date}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certifications;
