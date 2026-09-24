import React from 'react';
import { motion } from 'framer-motion';

const experience = [
  {
    company: "Continuous Learning",
    role: "AI/ML Specialization",
    period: "2025 - Present",
    description: "Actively transitioning into advanced AI and MLOps roles through rigorous specialized training.",
    highlights: [
      "MLOps - Machine Learning Operations Certification | Duke University",
      "Specialization Diploma in AI Engineering | GRAN University",
      "Google AI Professional Certificate | Google",
    ],
    active: true
  },
  {
    company: "Royal Bank of Canada | Capital Markets",
    role: "Senior Engineer",
    period: "2024 - 2025",
    description: "Architected and maintained high-performance enterprise backend systems.",
    highlights: [
      "Developed a production-grade, secure MLOps pipeline for operationalizing machine learning models",
      "Led development of scalable microservices",
      "Optimized database queries resulting in 40% performance gain"
    ],
    active: false
  },
  {
    company: "Royal Bank of Canada | Tech & Ops",
    role: "DevSecOps Engineer",
    period: "2022 - 2024",
    description: "Implemented robust security protocols and monitoring systems.",
    highlights: [
      "Developed the Enterprise SecOps Vulnerability Triage Agent using LangGraph, FastAPI, and AWS ECS",
      "Automated threat detection workflows",
      "Conducted security audits and vulnerability assessments"
    ],
    active: false
  },
  {
    company: "Royal Bank of Canada | Tech & Ops",
    role: "Security Analyst Co-op",
    period: "2022",
    description: "Foundation in data analysis and cybersecurity fundamentals.",
    highlights: [
      "Automated routine tasks using Python, Apache Airflow and SQL",
      "Monitored network traffic for security anomalies"
    ],
    active: false
  },
  {
    company: "Municipality of York Region",
    role: "Statistical Data Analyst",
    period: "2021",
    description: "Foundation in data analysis",
    highlights: [
      "Analyzed large datasets for actionable insights",
      "Designed and implemented an automated healthcare data ingestion pipeline"
    ],
    active: false
  }
];

const Experience = () => {
  return (
    <section id="experience" className="py-24 px-6 relative z-10">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-16"
        >
          <div className="flex items-center gap-4 mb-2">
            <h2 className="text-3xl font-bold text-gray-200 tracking-wide">Experience</h2>
          </div>
          <div className="w-full h-[1px] bg-gray-800 relative">
            <div className="absolute top-0 left-0 w-32 h-[2px] bg-primary shadow-[0_0_10px_rgba(0,240,255,0.8)]"></div>
          </div>
        </motion.div>

        <div className="relative pl-8 md:pl-0">
          {/* Main glowing timeline line */}
          <div className="absolute left-[7px] md:left-[11px] top-4 bottom-4 w-[2px] bg-primary shadow-[0_0_10px_rgba(0,240,255,0.8)]"></div>

          <div className="flex flex-col gap-8">
            {experience.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="relative pl-8 md:pl-16 w-full"
              >
                {/* Timeline dot */}
                <div
                  className={`absolute left-0 md:left-[4px] top-8 w-4 h-4 rounded-full border-2 border-background z-10 ${
                    item.active
                      ? 'bg-primary shadow-[0_0_15px_rgba(0,240,255,1)] animate-pulse'
                      : 'bg-primary shadow-[0_0_10px_rgba(0,240,255,0.5)]'
                  }`}
                ></div>

                {/* Experience Card */}
                <div className="glass-panel rounded-2xl p-6 md:p-8 flex flex-col md:flex-row gap-6 md:gap-12 transition-all duration-500 hover:shadow-[0_0_40px_rgba(0,240,255,0.2)]">
                  
                  {/* Left Column: Role & Company */}
                  <div className="md:w-1/3 flex flex-col">
                    <h3 className="text-xl md:text-2xl font-bold text-white mb-1">{item.company}</h3>
                    <h4 className="text-lg font-medium text-primary mb-2">{item.role}</h4>
                    <span className="text-sm font-medium text-gray-500">{item.period}</span>
                  </div>

                  {/* Right Column: Details */}
                  <div className="md:w-2/3 flex flex-col justify-center">
                    <ul className="space-y-3">
                      <li className="text-sm text-gray-300 leading-relaxed flex items-start">
                        <span className="text-gray-500 mr-2 mt-1">▹</span>
                        {item.description}
                      </li>
                      {item.highlights.map((highlight, i) => (
                        <li key={i} className="text-sm text-gray-300 leading-relaxed flex items-start">
                          <span className="text-gray-500 mr-2 mt-1">▹</span>
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
      </div>
    </section>
  );
};

export default Experience;
