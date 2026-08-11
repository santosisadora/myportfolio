import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, Calendar } from 'lucide-react';

const education = [
  {
    degree: "MLOps - Machine Learning Operations",
    institution: "Duke University",
    year: "Present"
  },
  {
    degree: "AI Software Engineering Specialist Diploma",
    institution: "GRAN",
    year: "Present"
  },
  {
    degree: "Google AI Professional Certificate",
    institution: "Google",
    year: "In Progress"
  },
  {
    degree: "Systems Analysis and Development Diploma",
    institution: "UNINASSAU"
  },
  {
    degree: "Computer Programming",
    institution: "Georgian College"
  },
  {
    degree: "Specialization in IT Management",
    institution: "GRAN"
  }
];

const Education = () => {
  return (
    <section id="education" className="py-24 px-6 relative z-10 bg-gray-950/30">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-16 text-center"
        >
          <h2 className="text-4xl font-bold text-white mb-4">Education</h2>
          <div className="w-20 h-1 bg-primary mx-auto rounded-full shadow-[0_0_10px_rgba(0,240,255,0.5)]"></div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {education.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="glass glass-hover rounded-xl p-6 flex gap-5 items-start h-full"
            >
              <div className="p-3 bg-primary/10 rounded-full flex-shrink-0 mt-1">
                <GraduationCap className="w-6 h-6 text-primary" />
              </div>
              <div className="flex-1">
                <h3 className="text-lg font-bold text-white leading-tight mb-1">{item.degree}</h3>
                <h4 className="text-sm text-gray-300 font-medium mb-3">{item.institution}</h4>
                
                {item.year && (
                  <div className="inline-flex items-center gap-1.5 text-xs text-primary font-medium bg-primary/10 px-2.5 py-1 rounded-full">
                    <Calendar className="w-3.5 h-3.5" />
                    {item.year}
                  </div>
                )}
                
                {item.description && (
                  <p className="text-gray-400 text-sm leading-relaxed mt-3">
                    {item.description}
                  </p>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;
