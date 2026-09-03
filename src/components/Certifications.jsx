import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Award, 
  CheckCircle, 
  ExternalLink, 
  Eye, 
  FileText, 
  X, 
  Download, 
  Sparkles, 
  ShieldCheck,
  Maximize2
} from 'lucide-react';

const certifications = [
  {
    id: "langsmith-ambient-agents",
    title: "Project: Ambient Agents with LangGraph",
    issuer: "LangSmith / LangChain Academy",
    issuerBadge: "LangChain",
    category: "ai-agents",
    date: "September 2026",
    credentialId: "jylpoftg26",
    image: "/certificates/langsmith-ambient-agents.png",
    pdf: "/LangSmith-certificate-ambient agents-Project.pdf",
    description: "Hands-on implementation of autonomous ambient agent systems using LangGraph, focusing on state management, persistence, human-in-the-loop controls, and production multi-agent architectures.",
    skills: ["LangGraph", "Ambient Agents", "Multi-Agent Systems", "State Persistence", "Human-in-the-Loop"]
  },
  {
    id: "langchain-reliable-agents",
    title: "Foundation: Building Reliable Agents",
    issuer: "LangChain Academy",
    issuerBadge: "LangChain",
    category: "ai-agents",
    date: "September 2026",
    credentialId: "h0ycawbftr",
    image: "/certificates/langchain-reliable-agents.png",
    pdf: "/LangChain-certificate-Foundation-Building-Reliable-Agents.pdf",
    description: "Comprehensive training on architecting resilient, production-ready AI agents with robust tool usage, self-reflection loops, state verification, and fault-tolerant execution.",
    skills: ["AI Agents", "Tool Calling", "Error Recovery", "Agentic Architecture", "Reliability Engineering"]
  },
  {
    id: "langchain-deployment",
    title: "Foundation: Introduction to LangSmith Deployment",
    issuer: "LangChain Academy",
    issuerBadge: "LangChain",
    category: "ai-agents",
    date: "September 2026",
    credentialId: "qx3icj3mx6",
    image: "/certificates/langchain-deployment.png",
    pdf: "/LangChain-academy-certificate-Introduction-to-LangChain-Deployment.pdf",
    description: "End-to-end LLM application lifecycle management, observability, evaluation pipelines, trace debugging, and scalable deployment with LangSmith.",
    skills: ["LangSmith", "LLM Observability", "Prompt Evaluation", "Tracing", "Deployment Pipelines"]
  },
  {
    id: "aws-eks",
    title: "Amazon EKS for Developers",
    issuer: "AWS Training & Certification",
    issuerBadge: "AWS",
    category: "cloud-devops",
    date: "December 2023",
    credentialId: null,
    image: "/certificates/aws-eks.png",
    pdf: "/AWS EKS Certificate of Completion - Isadora Santos.pdf",
    description: "Deep dive into designing, deploying, and managing scalable containerized applications on AWS using Amazon Elastic Kubernetes Service (EKS).",
    skills: ["Amazon EKS", "Kubernetes", "Container Orchestration", "Microservices", "Cloud Native"]
  },
  {
    id: "aws-jam",
    title: "Developing on AWS with AWS Jam",
    issuer: "AWS Training & Certification",
    issuerBadge: "AWS",
    category: "cloud-devops",
    date: "November 2023",
    credentialId: null,
    image: "/certificates/aws-jam.png",
    pdf: "/AWS Certificate of Completion - Isadora Santos.pdf",
    description: "Hands-on cloud development challenges solving real-world infrastructure, security, serverless, and cloud architecture scenarios on AWS.",
    skills: ["AWS Cloud", "Serverless", "Security & IAM", "DevOps", "Infrastructure as Code"]
  }
];

const additionalCredentials = [
  {
    title: "MLOps Certification",
    issuer: "Duke University",
    date: "2024",
    tag: "ML Engineering"
  },
  {
    title: "Cybersecurity/SecOps Certified Professional",
    issuer: "Security Institute",
    date: "2022",
    tag: "Security"
  },
  {
    title: "Java SE Programming",
    issuer: "Oracle",
    date: "2021",
    tag: "Software Engineering"
  }
];

const categories = [
  { id: "all", label: "All Certificates" },
  { id: "ai-agents", label: "AI Agents & LangChain" },
  { id: "cloud-devops", label: "Cloud & Kubernetes (AWS)" }
];

const Certifications = () => {
  const [activeCategory, setActiveCategory] = useState("all");
  const [selectedCert, setSelectedCert] = useState(null);

  // Close modal with Escape key
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') setSelectedCert(null);
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  // Prevent background scrolling when modal is open
  useEffect(() => {
    if (selectedCert) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [selectedCert]);

  const filteredCerts = activeCategory === "all" 
    ? certifications 
    : certifications.filter(cert => cert.category === activeCategory);

  return (
    <section id="certifications" className="py-24 px-6 relative z-10">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-12 text-center"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/30 text-primary text-xs font-semibold uppercase tracking-wider mb-4">
            <ShieldCheck className="w-4 h-4" />
            Verified Qualifications
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-4">
            Certifications & Credentials
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-base">
            Verified credentials in Autonomous AI Agents, LangGraph Orchestration, LLM Observability, and AWS Cloud Native Infrastructure.
          </p>
          <div className="w-24 h-1 bg-primary mx-auto rounded-full mt-6 shadow-[0_0_12px_rgba(0,240,255,0.6)]"></div>
        </motion.div>

        {/* Category Filters */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: 0.1 }}
          className="flex flex-wrap items-center justify-center gap-2 md:gap-3 mb-12"
        >
          {categories.map((cat) => {
            const count = cat.id === "all" 
              ? certifications.length 
              : certifications.filter(c => c.category === cat.id).length;
            const isActive = activeCategory === cat.id;

            return (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 flex items-center gap-2 ${
                  isActive
                    ? "bg-primary text-black font-semibold shadow-[0_0_15px_rgba(0,240,255,0.4)]"
                    : "bg-gray-900/60 text-gray-300 border border-gray-800 hover:border-gray-700 hover:text-white"
                }`}
              >
                <span>{cat.label}</span>
                <span
                  className={`text-xs px-2 py-0.5 rounded-full ${
                    isActive 
                      ? "bg-black/20 text-black font-bold" 
                      : "bg-gray-800 text-gray-400"
                  }`}
                >
                  {count}
                </span>
              </button>
            );
          })}
        </motion.div>

        {/* Certificates Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          <AnimatePresence mode="popLayout">
            {filteredCerts.map((cert, index) => (
              <motion.div
                key={cert.id}
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
                className="glass glass-hover rounded-xl overflow-hidden flex flex-col group border border-gray-800/80 hover:border-primary/50 transition-all duration-300 shadow-lg"
              >
                {/* Certificate Image Thumbnail with Hover Zoom & Action Overlay */}
                <div 
                  className="relative h-52 bg-gray-950 overflow-hidden cursor-pointer group/img border-b border-gray-800/60"
                  onClick={() => setSelectedCert(cert)}
                >
                  <img
                    src={cert.image}
                    alt={cert.title}
                    className="w-full h-full object-cover object-top transition-transform duration-500 group-hover/img:scale-105"
                    loading="lazy"
                  />
                  {/* Subtle Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-950/80 via-transparent to-transparent opacity-60 group-hover/img:opacity-40 transition-opacity"></div>
                  
                  {/* Floating Issuer Badge */}
                  <div className="absolute top-3 left-3">
                    <span className="px-2.5 py-1 rounded-md text-xs font-semibold bg-gray-900/85 backdrop-blur-md border border-gray-700/60 text-gray-200 shadow-md flex items-center gap-1.5">
                      <Sparkles className="w-3 h-3 text-primary" />
                      {cert.issuerBadge}
                    </span>
                  </div>

                  {/* Hover Quick Preview Button Overlay */}
                  <div className="absolute inset-0 bg-black/50 backdrop-blur-[2px] opacity-0 group-hover/img:opacity-100 transition-all duration-200 flex items-center justify-center gap-2">
                    <span className="px-4 py-2 rounded-lg bg-primary text-black font-semibold text-xs flex items-center gap-1.5 shadow-lg transform translate-y-2 group-hover/img:translate-y-0 transition-transform">
                      <Maximize2 className="w-3.5 h-3.5" />
                      Preview Certificate
                    </span>
                  </div>
                </div>

                {/* Content Section */}
                <div className="p-6 flex flex-col flex-grow">
                  <div className="flex items-center justify-between gap-2 mb-2">
                    <span className="text-xs font-medium text-primary">
                      {cert.issuer}
                    </span>
                    <span className="text-xs text-gray-400 font-mono">
                      {cert.date}
                    </span>
                  </div>

                  <h3 className="text-lg font-bold text-white mb-2 leading-snug group-hover:text-primary transition-colors">
                    {cert.title}
                  </h3>

                  <p className="text-xs text-gray-400 mb-4 line-clamp-2 leading-relaxed">
                    {cert.description}
                  </p>

                  {/* Skills Tags */}
                  <div className="flex flex-wrap gap-1.5 mb-6">
                    {cert.skills.slice(0, 3).map((skill, sIdx) => (
                      <span
                        key={sIdx}
                        className="text-[11px] px-2 py-0.5 rounded bg-gray-800/80 border border-gray-700/50 text-gray-300 font-medium"
                      >
                        {skill}
                      </span>
                    ))}
                    {cert.skills.length > 3 && (
                      <span className="text-[11px] px-2 py-0.5 rounded bg-gray-800/40 text-gray-400">
                        +{cert.skills.length - 3}
                      </span>
                    )}
                  </div>

                  {/* Credential ID info if present */}
                  {cert.credentialId && (
                    <div className="mb-4 pt-3 border-t border-gray-800/60 flex items-center justify-between text-[11px] text-gray-400">
                      <span>Credential ID</span>
                      <span className="font-mono text-gray-300 font-semibold bg-gray-800/60 px-2 py-0.5 rounded">
                        {cert.credentialId}
                      </span>
                    </div>
                  )}

                  {/* Action Buttons */}
                  <div className="mt-auto pt-4 border-t border-gray-800/60 flex gap-2">
                    <button
                      onClick={() => setSelectedCert(cert)}
                      className="flex-1 py-2 px-3 rounded-lg bg-gray-800/80 hover:bg-gray-700 text-gray-200 text-xs font-medium transition-colors flex items-center justify-center gap-1.5 border border-gray-700/60 hover:border-gray-600"
                    >
                      <Eye className="w-3.5 h-3.5 text-primary" />
                      Preview
                    </button>
                    <a
                      href={encodeURI(cert.pdf)}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 py-2 px-3 rounded-lg bg-primary/10 hover:bg-primary text-primary hover:text-black text-xs font-semibold transition-all flex items-center justify-center gap-1.5 border border-primary/30"
                    >
                      <FileText className="w-3.5 h-3.5" />
                      View PDF
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {/* Additional Qualifications Strip */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="p-6 rounded-xl border border-gray-800 bg-gray-900/30 backdrop-blur-sm"
        >
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-4">
            <div className="flex items-center gap-2">
              <Award className="w-5 h-5 text-primary" />
              <h4 className="text-base font-semibold text-white">
                Additional Qualifications & Academic Credentials
              </h4>
            </div>
            <span className="text-xs text-gray-400">
              Verified Coursework & Professional Foundations
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {additionalCredentials.map((item, idx) => (
              <div 
                key={idx}
                className="p-4 rounded-lg bg-gray-950/50 border border-gray-800/70 flex items-start gap-3 hover:border-gray-700 transition-colors"
              >
                <CheckCircle className="w-4 h-4 text-primary mt-1 flex-shrink-0" />
                <div>
                  <div className="text-sm font-semibold text-white leading-snug">
                    {item.title}
                  </div>
                  <div className="text-xs text-gray-400 mt-1 flex items-center gap-2">
                    <span>{item.issuer}</span>
                    <span>•</span>
                    <span>{item.date}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Certificate Preview Lightbox / Modal */}
      <AnimatePresence>
        {selectedCert && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 md:p-6 bg-black/80 backdrop-blur-md"
            onClick={() => setSelectedCert(null)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.9, opacity: 0, y: 20 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              onClick={(e) => e.stopPropagation()}
              className="relative max-w-4xl w-full max-h-[92vh] bg-gray-900 border border-gray-700/80 rounded-2xl overflow-hidden shadow-[0_0_50px_rgba(0,0,0,0.8)] flex flex-col"
            >
              {/* Modal Header */}
              <div className="flex items-center justify-between p-4 md:p-5 border-b border-gray-800 bg-gray-950/60">
                <div className="flex items-center gap-3 pr-4">
                  <div className="p-2 rounded-lg bg-primary/10 border border-primary/20 text-primary">
                    <Award className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-base md:text-lg font-bold text-white leading-tight">
                      {selectedCert.title}
                    </h3>
                    <p className="text-xs text-gray-400">
                      {selectedCert.issuer} • {selectedCert.date}
                    </p>
                  </div>
                </div>
                <button
                  onClick={() => setSelectedCert(null)}
                  className="p-2 rounded-lg bg-gray-800/80 hover:bg-gray-700 text-gray-400 hover:text-white transition-colors flex-shrink-0"
                  aria-label="Close modal"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Modal Body - Image Preview */}
              <div className="p-4 md:p-6 overflow-y-auto max-h-[60vh] flex items-center justify-center bg-gray-950/40">
                <div className="relative rounded-lg overflow-hidden border border-gray-800 shadow-2xl max-w-full">
                  <img
                    src={selectedCert.image}
                    alt={selectedCert.title}
                    className="w-auto max-h-[55vh] object-contain rounded-lg"
                  />
                </div>
              </div>

              {/* Modal Footer / Details */}
              <div className="p-4 md:p-5 border-t border-gray-800 bg-gray-950/80 flex flex-col md:flex-row md:items-center justify-between gap-4">
                <div className="flex flex-col gap-1.5">
                  {selectedCert.credentialId && (
                    <div className="text-xs text-gray-300 flex items-center gap-2">
                      <span className="text-gray-400">Credential ID:</span>
                      <span className="font-mono bg-gray-800 px-2 py-0.5 rounded text-primary font-semibold">
                        {selectedCert.credentialId}
                      </span>
                    </div>
                  )}
                  <div className="flex flex-wrap gap-1.5">
                    {selectedCert.skills.map((skill, i) => (
                      <span
                        key={i}
                        className="text-[11px] px-2 py-0.5 rounded bg-gray-800/90 text-gray-300"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <a
                    href={encodeURI(selectedCert.pdf)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 md:flex-none px-4 py-2.5 rounded-lg bg-primary text-black font-semibold text-xs md:text-sm hover:bg-white transition-all flex items-center justify-center gap-2 shadow-[0_0_15px_rgba(0,240,255,0.3)]"
                  >
                    <ExternalLink className="w-4 h-4" />
                    Open Original PDF
                  </a>
                  <a
                    href={encodeURI(selectedCert.pdf)}
                    download
                    className="flex-1 md:flex-none px-4 py-2.5 rounded-lg bg-gray-800 hover:bg-gray-700 text-gray-200 text-xs md:text-sm font-medium transition-colors flex items-center justify-center gap-2 border border-gray-700"
                  >
                    <Download className="w-4 h-4" />
                    Download
                  </a>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Certifications;
