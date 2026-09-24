import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, Calendar } from 'lucide-react';

const education = [
  {
    degree: "MLOps - Machine Learning Operations",
    institution: "Duke University - U.S",
    year: "Present"
  },
  {
    degree: "AI Software Engineering Specialist Diploma",
    institution: "GRAN - Brazil",
    year: "Present"
  },
  {
    degree: "Google AI Professional Certificate",
    institution: "Google",
    year: "In Progress"
  },
  {
    degree: "Systems Analysis and Development Diploma",
    institution: "UNINASSAU - Brazil"
  },
  {
    degree: "Computer Programming",
    institution: "Georgian College - Canada"
  },
  {
    degree: "Specialization in IT Management",
    institution: "GRAN - Brazil"
  }
];

const Education = () => {
  return (
    <section id="education" className="py-24 px-6 relative z-10 ">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-12"
        >
          <div className="flex items-center gap-4 mb-2">
            <h2 className="text-3xl font-bold text-gray-200 tracking-wide">Education</h2>
          </div>
          <div className="w-full h-[1px] bg-gray-800 relative">
            <div className="absolute top-0 left-0 w-32 h-[2px] bg-primary shadow-[0_0_10px_rgba(0,240,255,0.8)]"></div>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {education.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="glass-panel rounded-2xl p-6 flex gap-5 items-start h-full transition-all duration-500 hover:shadow-[0_0_30px_rgba(0,240,255,0.15)]"
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
