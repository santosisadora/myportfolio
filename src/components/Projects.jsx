import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Shield, BarChart3, Database, Code, ExternalLink, X } from 'lucide-react';

const projects = [
  {
    title: "Production RAG Document Assistant",
    icon: <Database className="w-8 h-8 text-primary" />,
    image: "/vuln-rag-demo-preview.png",
    description: "An enterprise-grade Retrieval-Augmented Generation system for querying internal documentation with high accuracy and low latency.",
    bullets: [
      "Containerized Deployment",
      "ChromaDB Vector Store",
      "LangChain Orchestration"
    ],
    github: "https://github.com/santosisadora/vuln-rag-agent",
    demo: "/vuln-rag-agent-edited-final-demo.mp4"
  },
  {
    title: "Secure MLOps Pipeline",
    icon: <Shield className="w-8 h-8 text-primary" />,
    image: "/mlflow-secure-mlops-pipeline-demo-image.png",
    description: "A production-grade, security-first CI/CD pipeline demonstrating enterprise best practices for operationalizing machine learning models with automated vulnerability management.",
    bullets: [
      "Automated GitHub Actions CI/CD",
      "Trivy Container Security Scanning",
      "MLflow & PostgreSQL Infrastructure"
    ],
    github: "https://github.com/santosisadora/secure-mlops-pipeline",
    demo: "/secure-mlops-pipeline-edited-final-demo.mp4"
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
  const [selectedImage, setSelectedImage] = useState(null);

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
              {project.image ? (
                <div 
                  className="mb-6 rounded-lg overflow-hidden border border-gray-700/50 group-hover:border-primary/50 transition-colors bg-black/20 cursor-pointer relative"
                  onClick={() => setSelectedImage(project.image)}
                >
                  <img 
                    src={project.image} 
                    alt={`${project.title} preview`}
                    className="w-full h-48 object-cover opacity-90 group-hover:opacity-100 transition-opacity"
                  />
                  <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                    <span className="text-white text-sm font-medium bg-black/60 px-3 py-1 rounded-full border border-white/20">Click to enlarge</span>
                  </div>
                </div>
              ) : project.video ? (
                <div className="mb-6 rounded-lg overflow-hidden border border-gray-700/50 group-hover:border-primary/50 transition-colors bg-black/20">
                  <video 
                    src={project.video} 
                    autoPlay 
                    loop 
                    muted 
                    playsInline 
                    className="w-full h-48 object-cover opacity-90 group-hover:opacity-100 transition-opacity"
                  />
                </div>
              ) : (
                <div className="mb-6 p-4 bg-primary/10 rounded-lg inline-block w-fit group-hover:scale-110 transition-transform duration-300">
                  {project.icon}
                </div>
              )}
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

      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedImage(null)}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4 backdrop-blur-sm cursor-zoom-out"
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              className="relative max-w-5xl w-full max-h-[90vh] flex flex-col items-center cursor-default"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setSelectedImage(null)}
                className="absolute -top-12 right-0 text-white hover:text-primary transition-colors p-2"
              >
                <X className="w-8 h-8" />
              </button>
              <img 
                src={selectedImage} 
                alt="Enlarged project preview" 
                className="w-full h-auto max-h-[85vh] object-contain rounded-lg shadow-2xl border border-gray-700/50"
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Projects;
