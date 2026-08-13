import React from 'react';
import { motion } from 'framer-motion';

const experience = [
  {
    title: "AI/ML Specialization & Continuous Learning",
    period: "2025–Present",
    description: "Actively transitioning into advanced AI and MLOps roles through rigorous specialized training.",
    highlights: [
      "MLOps - Machine Learning Operations Certification | Duke University",
      "Specialization Diploma in AI Engineering | GRAN University",
      "Google AI Professional Certificate | Google",
    ],
    active: true
  },
  {
    title: "Senior Java Developer - Royal Bank of Canada | Capital Markets",
    period: "2024–2025",
    description: "Architected and maintained high-performance enterprise backend systems.",
    highlights: [
      "Led development of scalable microservices",
      "Optimized database queries resulting in 40% performance gain"
    ],
    active: false
  },
  {
    title: "DevSecOps Engineer - Royal Bank of Canada | Technology & Operations",
    period: "2022–2024",
    description: "Implemented robust security protocols and monitoring systems.",
    highlights: [
      "Automated threat detection workflows",
      "Conducted security audits and vulnerability assessments"
    ],
    active: false
  },
  {
    title: "Security Analyst Co-op - Royal Bank of Canada | Technology & Operations ",
    period: "2022",
    description: "Foundation in data analysis and cybersecurity fundamentals.",
    highlights: [
      "Automated routine tasks using Python,Apache Airflow and SQL",
      "Monitored network traffic for security anomalies"
    ],
    active: false
  }, {
    title: "Statistical Data Analyst - Municipality of York Region | Paramedics & Senior Services Department",
    period: "2021",
    description: "Foundation in data analysis",
    highlights: [
      "Analyzed large datasets for actionable insights",
      "Designed, developed and implemented an automated data ingestion pipeline for healthcare data "
    ],
    active: false
  }
];

const Experience = () => {
  return (
    <section id="experience" className="py-24 px-6 relative z-10">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-20 text-center"
        >
          <h2 className="text-4xl font-bold text-white mb-4">Unified Experience</h2>
          <div className="w-20 h-1 bg-primary mx-auto rounded-full shadow-[0_0_10px_rgba(0,240,255,0.5)]"></div>
        </motion.div>

        <div className="relative border-l border-gray-700 ml-4 md:ml-0 md:left-1/2 md:-translate-x-1/2">
          {experience.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              className={`mb-12 relative flex flex-col md:flex-row ${index % 2 === 0 ? 'md:flex-row-reverse' : ''
                } items-center justify-between w-full`}
            >
              {/* Timeline dot */}
              <div
                className={`absolute left-[-5px] md:left-1/2 md:-translate-x-1/2 w-3 h-3 rounded-full ${item.active
                  ? 'bg-primary shadow-[0_0_15px_rgba(0,240,255,1)] animate-pulse'
                  : 'bg-gray-500'
                  }`}
              ></div>

              <div className="w-full md:w-5/12 pl-8 md:pl-0">
                <div
                  className={`p-6 rounded-xl border ${item.active
                    ? 'bg-primary/5 border-primary/30 shadow-[0_0_20px_rgba(0,240,255,0.1)]'
                    : 'glass'
                    } transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_5px_20px_rgba(0,0,0,0.3)]`}
                >
                  <div className="flex flex-col mb-4">
                    <span className={`text-sm font-semibold tracking-wider mb-2 ${item.active ? 'text-primary text-glow' : 'text-gray-400'}`}>
                      {item.period}
                    </span>
                    <h3 className="text-xl font-bold text-white">{item.title}</h3>
                  </div>

                  <p className="text-gray-300 text-sm mb-4 leading-relaxed">
                    {item.description}
                  </p>

                  <ul className="space-y-1">
                    {item.highlights.map((highlight, i) => (
                      <li key={i} className="text-sm text-gray-400 flex items-start">
                        <span className="text-primary mr-2 mt-0.5">▪</span>
                        {highlight}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
