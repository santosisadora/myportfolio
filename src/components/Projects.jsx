import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Play, Code, Globe, Info, Shield, BarChart3, Lock, Server, Cpu, Database as DbIcon, ExternalLink, X, Activity, Network } from 'lucide-react';
import Mermaid from './Mermaid';

const projects = [
  {
    title: "Enterprise SecOps Vulnerability Triage Agent",
    icon: <Lock className="w-8 h-8 text-primary" />,
    image: "/rag-secops-agent-preview-image.png",
    description: "An autonomous, cloud-native AI security agent built with LangGraph, FastAPI, and AWS ECS that correlates live NIST NVD vulnerability intelligence.",
    metrics: [
      { label: "Context & Token Compression", value: "Two-stage retrieval (PGVector k=10 → FlashRank top_n=2) reduces prompt payload by 80% while preserving 100% policy faithfulness." },
      { label: "Latency & Cost Control", value: "Semantic LLM caching bypasses vector DB on repeat/off-topic inputs, cutting latency to <200ms and cold-path NVD triage to ~4.2s (p95)." },
      { label: "Zero-Trust State Trade-off", value: "Chose external AsyncPostgresSaver connection pooling (max_size=20) over in-memory checkpointers so HITL pauses survive ECS container restarts." }
    ],
    diagram: `graph TD
      Client["CloudFront (S3 UI + ALB Proxy)"] --> FastAPI["FastAPI (Basic Auth + SlowAPI 5/min)"]
      FastAPI --> Router["LangGraph Router"]
      Router --> NVD["NVD API + PGVector (k=10)"]
      NVD --> FlashRank["FlashRank (top_n=2)"]
      FlashRank --> Saver["AsyncPostgresSaver (HITL Breakpoint)"]
      Saver --> Jira["Jira REST API"]
      Router -.-> LangSmith["LangSmith Evals"]
      Router -.-> CW["CloudWatch"]`,
    github: "https://github.com/santosisadora/ai-agent-vulnerability-triage/tree/main",
    demo: "/vuln-rag-agent-final-DEMO.mp4",
    liveApp: "https://dvd40fbcl8i24.cloudfront.net/",
    fullDescription: (
      <div className="space-y-6 text-left mt-8 border-t border-gray-700/50 pt-8">
        <div>
          <h4 className="text-xl font-bold text-white mb-3 flex items-center gap-2">🛡️ What the App Does & Business Problem Solved</h4>
          <p className="mb-4 text-sm text-gray-300"><strong>Eliminates SOC Alert Fatigue & Context Switching:</strong> Security analysts typically spend 30–60 minutes per CVE manually cross-referencing NIST severity scores, internal CMDB asset spreadsheets, and static compliance documents before opening an engineering ticket. This agent compresses that entire triage-to-ticket lifecycle into under 10 seconds.</p>
          <p className="mb-4 text-sm text-gray-300"><strong>Two-Stage Reranked Policy RAG & Zero-Trust Guardrails:</strong> Combines PostgreSQL (PGVector) metadata-filtered similarity search (clearance_level: INTERNAL) with FlashRank cross-encoder reranking (top_n=2) to retrieve exact corporate remediation SLA schedules (SecOps Standard v4.2) while enforcing RBAC clearance checks (featuring a temporary Security Analyst clearance toggle for live portfolio evaluation).</p>
          <p className="text-sm text-gray-300"><strong>Stateful Human-in-the-Loop (HITL) Execution:</strong> Uses an asynchronous PostgreSQL Checkpointer (AsyncPostgresSaver) to pause graph execution (interrupt_before=["create_ticket"]) after presenting an Asset Impact Analysis and Remediation Ticket Draft. Only upon explicit human analyst confirmation does the agent call the Jira REST API (santosisadora.atlassian.net) to generate a production task.</p>
        </div>

        <div>
          <h4 className="text-xl font-bold text-white mb-3 flex items-center gap-2">📊 End-to-End Observability (LangSmith + AWS)</h4>
          <p className="mb-4 text-sm text-gray-300"><strong>LLM & Agent Graph Tracing (LangSmith):</strong> Instrumented with LangSmith Tracing v2 (LANGCHAIN_TRACING_V2, LANGCHAIN_PROJECT) to capture granular, step-by-step execution traces across every LangGraph node (router_node, nvd_node, policy_node, draft_ticket_node, and create_ticket_node). Tracks token consumption, prompt/completion payloads, FlashRank compression latency, and routing decisions in real time.</p>
          <p className="text-sm text-gray-300"><strong>Cloud & Container Telemetry (AWS CloudWatch & ALB):</strong> Monitored at the infrastructure layer via Amazon ECS CloudWatch Monitoring (security-cluster) and Application Load Balancer (vuln-agent-alb) health probes (/health endpoint with capacity and target-group tracking across 6 us-east-1 Availability Zones). Backend stream exceptions are automatically flushed to AWS Fargate CloudWatch Logs while gracefully streaming diagnostic feedback over Server-Sent Events (SSE).</p>
        </div>

        <div>
          <h4 className="text-xl font-bold text-white mb-3 flex items-center gap-2">🚀 Cloud Architecture & Scalability Potential</h4>
          <p className="mb-4 text-sm text-gray-300"><strong>Stateless Compute with Durable External State:</strong> Hosted on AWS ECS Fargate (secops-triage-task-service) behind an internet-facing Application Load Balancer (vuln-agent-alb) and Amazon CloudFront TLS edge proxy. Because conversation threads and HITL checkpoints live externally in Amazon RDS PostgreSQL (vuln-rag-db) via an asynchronous psycopg_pool connection pool, ECS Fargate tasks can auto-scale horizontally without dropping active sessions.</p>
          <p className="text-sm text-gray-300"><strong>Zero-Secret Container Images & Automated CI/CD:</strong> Sensitive API keys (GOOGLE_API_KEY, JIRA_API_TOKEN, LANGCHAIN_API_KEY) are injected dynamically at container boot from AWS Systems Manager (SSM) Parameter Store (valueFrom: /vuln-agent/...), paired with an automated GitHub Actions CI/CD pipeline (Deploy Vulnerability Agent) that builds Docker images and deploys revisions to Amazon ECR / ECS on every push to main.</p>
        </div>

        <div>
          <h4 className="text-xl font-bold text-white mb-4 mt-8">Complete Tech Stack</h4>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-gray-800/50 p-4 rounded-lg border border-gray-700/50 transition-colors hover:border-primary/50">
              <span className="text-primary font-bold flex items-center gap-2 mb-2"><Cpu className="w-4 h-4" /> AI & Agent Orchestration</span>
              <span className="text-xs text-gray-400">LangGraph, LangChain, Google Gemini 3.8 Flash, Google Generative AI Embeddings, InMemoryCache</span>
            </div>
            <div className="bg-gray-800/50 p-4 rounded-lg border border-gray-700/50 transition-colors hover:border-primary/50">
              <span className="text-primary font-bold flex items-center gap-2 mb-2"><DbIcon className="w-4 h-4" /> RAG, Reranking & DB</span>
              <span className="text-xs text-gray-400">Amazon RDS (PostgreSQL), PGVector, FlashRank, AsyncPostgresSaver, SQLAlchemy, psycopg3</span>
            </div>
            <div className="bg-gray-800/50 p-4 rounded-lg border border-gray-700/50 transition-colors hover:border-primary/50">
              <span className="text-primary font-bold flex items-center gap-2 mb-2"><Server className="w-4 h-4" /> Backend API & Integrations</span>
              <span className="text-xs text-gray-400">Python 3.11+, FastAPI, Server-Sent Events (SSE), Pydantic, NIST NVD REST API, Jira REST API</span>
            </div>
            <div className="bg-gray-800/50 p-4 rounded-lg border border-gray-700/50 transition-colors hover:border-primary/50">
              <span className="text-primary font-bold flex items-center gap-2 mb-2"><Monitor className="w-4 h-4" /> Observability & Monitoring</span>
              <span className="text-xs text-gray-400">LangSmith, AWS CloudWatch Logs, ALB Target Group Health Probes</span>
            </div>
            <div className="bg-gray-800/50 p-4 rounded-lg border border-gray-700/50 transition-colors hover:border-primary/50">
              <span className="text-primary font-bold flex items-center gap-2 mb-2"><Lock className="w-4 h-4" /> Security & Access Control</span>
              <span className="text-xs text-gray-400">HTTP Basic Auth, SlowAPI, AWS SSM Parameter Store, RBAC</span>
            </div>
            <div className="bg-gray-800/50 p-4 rounded-lg border border-gray-700/50 transition-colors hover:border-primary/50">
              <span className="text-primary font-bold flex items-center gap-2 mb-2"><Globe className="w-4 h-4" /> Cloud Infrastructure & CI/CD</span>
              <span className="text-xs text-gray-400">Docker, AWS ECS (Fargate), Amazon ECR, AWS ALB, Amazon CloudFront + S3, GitHub Actions</span>
            </div>
          </div>
        </div>
      </div>
    )
  },
  {
    title: "Secure MLOps Pipeline",
    icon: <Shield className="w-8 h-8 text-primary" />,
    image: "/mlflow-secure-mlops-pipeline-demo-image.png",
    description: "A production-grade, security-first CI/CD pipeline demonstrating enterprise best practices for operationalizing machine learning models.",
    metrics: [
      { label: "Security Gate Metrics", value: "Automated Trivy container & dependency scanning blocks 100% of Critical/High CVEs pre-deployment in <90s CI runtime." },
      { label: "Registry & Rollback", value: "MLflow Model Registry versioning paired with automated rollback triggers if validation F1/AUC drops below baseline threshold." },
      { label: "Deployment Depth", value: "Kubernetes deployment manifests ensure robust, scalable, and isolated production lifecycle depth." }
    ],
    diagram: `graph TD
      Push["GitHub Push"] --> Actions["GitHub Actions"]
      Actions --> Trivy["Trivy Security Gate (Fail on Critical/High CVE)"]
      Trivy --> MLflow["MLflow Training & Registry Versioning"]
      MLflow --> Eval["Evaluation Gate"]
      Eval -- "F1/AUC Drop" --> Rollback["Automated Rollback Trigger"]
      Eval -- "Pass" --> Prod["Production Deployment (K8s Manifests)"]`,
    github: "https://github.com/santosisadora/secure-mlops-pipeline",
    demo: "/secure-mlops-pipeline-edited-final-demo.mp4"
  },
  {
    title: "Self-Healing Agentic ETL",
    icon: <BarChart3 className="w-8 h-8 text-primary" />,
    image: "/self-healing-agentic-etl-preview-image.png",
    description: "A resilient data extraction pipeline that dynamically maps messy, unstructured documents into strict schemas and autonomously corrects validation errors.",
    metrics: [
      { label: "Specific Failure Modes Healed", value: "Intercepts upstream schema drift / renamed fields, malformed JSON/Pydantic validation errors, and HTTP 429 rate-limit backoffs." },
      { label: "Recovery vs. DLQ Rate", value: "Autonomously resolves 94% of schema/formatting exceptions within ≤2 self-correction loops." },
      { label: "Dead-Letter Queue", value: "Routes the remaining 6% of unrecoverable payloads to a Dead-Letter Queue (DLQ) with structured failure traces." }
    ],
    diagram: `graph TD
      Ingest["Ingestion Source"] --> Extractor["Extractor Agent"]
      Extractor --> Validator["Pydantic Schema Validator"]
      Validator -- "Invalid Schema / 429" --> Retry["Conditional Retry / Self-Healing Loop (Max N Retries)"]
      Retry --> Extractor
      Retry -- "Max Retries Reached" --> DLQ["Dead-Letter Queue (DLQ)"]
      Validator -- "Valid JSON" --> Target["Target DB"]`,
    github: "https://github.com/santosisadora/agentic-etl-pipeline/tree/main",
    demo: "#"
  }
];

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  return (
    <section id="projects" className="py-24 px-6 relative z-10">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-12"
        >
          <div className="flex items-center gap-4 mb-2">
            <h2 className="text-3xl font-bold text-gray-200 tracking-wide">Featured Projects</h2>
          </div>
          <div className="w-full h-[1px] bg-gray-800 relative">
            <div className="absolute top-0 left-0 w-64 h-[2px] bg-primary shadow-[0_0_10px_rgba(20,184,166,0.8)]"></div>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="glass-panel rounded-2xl p-6 flex flex-col h-full group transition-all duration-500 hover:shadow-[0_0_40px_rgba(20,184,166,0.2)]"
            >
              {project.image ? (
                <div 
                  className="mb-6 rounded-lg overflow-hidden border border-gray-700/50 group-hover:border-primary/50 transition-colors bg-black/20 cursor-pointer relative"
                  onClick={() => setSelectedProject({ type: 'image', data: project })}
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
              ) : (
                <div className="mb-6 p-4 bg-primary/10 rounded-lg inline-block w-fit group-hover:scale-110 transition-transform duration-300">
                  {project.icon}
                </div>
              )}
              <h3 className="text-xl md:text-2xl font-bold text-white mb-3">{project.title}</h3>
              <p className="text-gray-400 mb-6 text-sm flex-grow">{project.description}</p>
              
              <div className="mb-6 bg-[#060f0f]/80 p-4 rounded-xl border border-primary/20">
                <h4 className="text-sm font-bold text-primary mb-3 flex items-center gap-2">
                  <Activity className="w-4 h-4" /> 📊 System Metrics & Trade-offs
                </h4>
                <ul className="space-y-3">
                  {project.metrics.map((metric, i) => (
                    <li key={i} className="text-xs text-gray-300 leading-relaxed">
                      <strong className="text-primary/90">{metric.label}:</strong> {metric.value}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="flex flex-wrap gap-3 mt-auto">
                <a href={project.github} target="_blank" rel="noopener noreferrer" className="flex-1 flex items-center justify-center gap-2 py-2 px-3 border border-gray-600 rounded text-sm hover:border-primary hover:text-primary transition-colors whitespace-nowrap">
                  <Code className="w-4 h-4" />
                  GitHub
                </a>
                {project.liveApp && (
                  <a href={project.liveApp} target="_blank" rel="noopener noreferrer" className="flex-1 flex items-center justify-center gap-2 py-2 px-3 bg-primary/20 border border-primary/50 text-white rounded text-sm hover:bg-primary hover:text-black transition-colors font-medium whitespace-nowrap">
                    <Globe className="w-4 h-4" />
                    Try Agent
                  </a>
                )}
                {project.demo !== "#" ? (
                  <a 
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 flex items-center justify-center gap-2 py-2 px-3 bg-primary/10 border border-primary/30 text-primary rounded text-sm hover:bg-primary hover:text-black transition-colors font-medium whitespace-nowrap"
                  >
                    <Play className="w-4 h-4" />
                    Watch demo
                  </a>
                ) : (
                  <button 
                    disabled
                    className="flex-1 flex items-center justify-center gap-2 py-2 px-3 bg-gray-800/50 border border-gray-700/50 text-gray-500 rounded text-sm cursor-not-allowed font-medium whitespace-nowrap"
                  >
                    <ExternalLink className="w-4 h-4" />
                    No Demo
                  </button>
                )}
                {project.diagram && (
                  <button 
                    onClick={() => setSelectedProject({ type: 'diagram', data: project })}
                    className="flex-1 flex items-center justify-center gap-2 py-2 px-3 bg-[#081212] border border-primary/40 text-primary rounded text-sm hover:bg-primary hover:text-black transition-colors font-medium whitespace-nowrap shadow-[0_0_10px_rgba(20,184,166,0.1)]"
                  >
                    <Network className="w-4 h-4" />
                    Architecture
                  </button>
                )}
                {project.fullDescription && (
                  <button 
                    onClick={() => setSelectedProject({ type: 'details', data: project })}
                    className="flex-1 flex items-center justify-center gap-2 py-2 px-3 bg-gray-800 border border-gray-600 text-gray-300 rounded text-sm hover:bg-gray-700 hover:text-white transition-colors font-medium whitespace-nowrap"
                  >
                    <Info className="w-4 h-4" />
                    Details
                  </button>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {selectedProject && selectedProject.type === 'image' && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedProject(null)}
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
                onClick={() => setSelectedProject(null)}
                className="absolute -top-12 right-0 text-white hover:text-primary transition-colors p-2"
              >
                <X className="w-8 h-8" />
              </button>
              <img 
                src={selectedProject.data.image} 
                alt="Enlarged project preview" 
                className="w-full h-auto max-h-[85vh] object-contain rounded-lg shadow-2xl border border-gray-700/50"
              />
            </motion.div>
          </motion.div>
        )}

        {selectedProject && selectedProject.type === 'details' && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedProject(null)}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4 backdrop-blur-sm"
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.9, opacity: 0, y: 20 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              className="relative max-w-4xl w-full max-h-[90vh] overflow-y-auto bg-[#050a0a] border border-gray-700/80 rounded-2xl shadow-2xl flex flex-col scrollbar-thin scrollbar-thumb-gray-600"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="sticky top-0 z-20 bg-[#081212]/90 backdrop-blur-md p-4 border-b border-gray-800 flex justify-between items-center">
                <h3 className="text-xl sm:text-2xl font-bold text-white">{selectedProject.data.title}</h3>
                <button
                  onClick={() => setSelectedProject(null)}
                  className="text-gray-400 hover:text-white transition-colors bg-gray-800 hover:bg-gray-700 rounded-full p-2 ml-4 flex-shrink-0"
                >
                  <X className="w-6 h-6" />
                </button>
              </div>
              
              <div className="p-4 sm:p-6">

                {selectedProject.data.liveApp && (
                  <div className="mt-8 bg-primary/10 border border-primary/30 rounded-xl p-6 flex flex-col sm:flex-row justify-between items-center gap-4 text-center sm:text-left">
                    <div>
                      <h4 className="text-lg font-bold text-white mb-1">The application is fully deployed</h4>
                      <p className="text-sm text-gray-300">Click here if you want to try this agent live in action.</p>
                    </div>
                    <a 
                      href={selectedProject.data.liveApp} 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="whitespace-nowrap px-6 py-3 bg-primary text-black font-bold rounded-lg hover:bg-primary/90 transition-all hover:shadow-[0_0_15px_rgba(20,184,166,0.4)] flex items-center gap-2"
                    >
                      <Globe className="w-5 h-5" />
                      Try Live Agent
                    </a>
                  </div>
                )}

                {selectedProject.data.fullDescription}

              </div>
            </motion.div>
          </motion.div>
        )}

        {selectedProject && selectedProject.type === 'diagram' && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedProject(null)}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4 backdrop-blur-sm"
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.9, opacity: 0, y: 20 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              className="relative max-w-4xl w-full max-h-[90vh] overflow-y-auto bg-[#e5e7eb] border border-gray-700/80 rounded-2xl shadow-2xl flex flex-col"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="sticky top-0 z-20 bg-[#081212] p-4 border-b border-gray-800 flex justify-between items-center">
                <h3 className="text-xl sm:text-2xl font-bold text-white">{selectedProject.data.title} - Architecture</h3>
                <button
                  onClick={() => setSelectedProject(null)}
                  className="text-gray-400 hover:text-white transition-colors bg-gray-800 hover:bg-gray-700 rounded-full p-2 ml-4 flex-shrink-0"
                >
                  <X className="w-6 h-6" />
                </button>
              </div>
              
              <div className="p-8 flex items-center justify-center min-h-[50vh]">
                <Mermaid chart={selectedProject.data.diagram} />
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Projects;
