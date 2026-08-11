import React from 'react';
import { motion } from 'framer-motion';
import { Shield, BarChart3, Database, Code, ExternalLink } from 'lucide-react';

const projects = [
  {
    title: "Production RAG Document Assistant",
    icon: <Database className="w-8 h-8 text-primary" />,
    description: "An enterprise-grade Retrieval-Augmented Generation system for querying internal documentation with high accuracy and low latency.",
    bullets: [
      "Containerized Deployment",
      "ChromaDB Vector Store",
      "LangChain Orchestration"
    ],
    github: "#",
    demo: "#"
  },
  {
    title: "LLM Security Guardrail API",
    icon: <Shield className="w-8 h-8 text-primary" />,
    description: "A robust security layer that intercepts and sanitizes inputs/outputs for LLM applications, protecting against adversarial attacks.",
    bullets: [
      "Secures against prompt injection",
      "Implements OWASP LLM Top 10",
      "MLOps monitoring with MLflow"
    ],
    github: "#",
    demo: "#"
  },
  {
    title: "Autonomous Data Analysis Agent",
    icon: <BarChart3 className="w-8 h-8 text-primary" />,
    description: "An intelligent agent capable of understanding complex datasets, generating queries, and producing visual insights autonomously.",
    bullets: [
      "Natural language interface for datasets",
      "Dynamic SQL & Python execution",
      "LangGraph decision-making"
    ],
    github: "#",
    demo: "#"
  }
];

const Projects = () => {
  return (
    <section id="projects" className="py-24 px-6 relative z-10">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-16 text-center"
        >
          <h2 className="text-4xl font-bold text-white mb-4">Featured Projects</h2>
          <div className="w-20 h-1 bg-primary mx-auto rounded-full shadow-[0_0_10px_rgba(0,240,255,0.5)]"></div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="glass glass-hover rounded-xl p-8 flex flex-col h-full group"
            >
              <div className="mb-6 p-4 bg-primary/10 rounded-lg inline-block w-fit group-hover:scale-110 transition-transform duration-300">
                {project.icon}
              </div>
              <h3 className="text-2xl font-bold text-white mb-3">{project.title}</h3>
              <p className="text-gray-400 mb-6 flex-grow">{project.description}</p>
              
              <ul className="mb-8 space-y-2">
                {project.bullets.map((bullet, i) => (
                  <li key={i} className="flex items-start text-sm text-gray-300">
                    <span className="text-primary mr-2 mt-1">▹</span>
                    {bullet}
                  </li>
                ))}
              </ul>

              <div className="flex gap-4 mt-auto">
                <a href={project.github} className="flex-1 flex items-center justify-center gap-2 py-2 px-4 border border-gray-600 rounded text-sm hover:border-primary hover:text-primary transition-colors">
                  <Code className="w-4 h-4" />
                  GitHub
                </a>
                <a href={project.demo} className="flex-1 flex items-center justify-center gap-2 py-2 px-4 bg-primary/10 border border-primary/30 text-primary rounded text-sm hover:bg-primary hover:text-black transition-colors font-medium">
                  <ExternalLink className="w-4 h-4" />
                  Live Demo
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
