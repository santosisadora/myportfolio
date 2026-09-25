import re

with open('src/components/Projects.jsx', 'r', encoding='utf-8') as f:
    content = f.read()

# Extract fullDescription
start_idx = content.find('fullDescription: (')
if start_idx == -1:
    raise Exception("Could not find fullDescription!")

end_idx = content.find('  },\n  {', start_idx)
if end_idx == -1:
    end_idx = content.find('    )\n  }', start_idx) + 5

full_description_code = content[start_idx + 17 : end_idx].strip()
if full_description_code.endswith(','):
    full_description_code = full_description_code[:-1].strip()

new_code = f"""import React, {{ useState }} from 'react';
import {{ motion, AnimatePresence }} from 'framer-motion';
import {{ Play, Code, Globe, Info, Shield, BarChart3, Lock, Server, Cpu, Database as DbIcon, ExternalLink, X, Activity, Network, Monitor }} from 'lucide-react';
import Mermaid from './Mermaid';

const projects = [
  {{
    title: "Enterprise SecOps Vulnerability Triage Agent",
    icon: <Lock className="w-8 h-8 text-primary" />,
    image: "/vuln-rag-demo-preview.png",
    description: "An autonomous, cloud-native AI security agent built with LangGraph, FastAPI, and AWS ECS that correlates live NIST NVD vulnerability intelligence.",
    metrics: {{
      kpis: [
        {{ value: "-80%", label: "Token Payload" }},
        {{ value: "100%", label: "Policy Faithfulness" }},
        {{ value: "<200ms", label: "Cached Latency" }}
      ],
      bullets: [
        {{ lead: "Two-Stage Reranking:", text: "PGVector (k=10) → FlashRank (top_n=2) cuts context bloat by 80% while passing LangSmith CI gates." }},
        {{ lead: "Zero-Trust State:", text: "AsyncPostgresSaver (max_size=20) persists HITL pauses across ECS restarts (~4.2s cold p95)." }}
      ]
    }},
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
    liveApp: "https://secops.isadorasantos.app/",
    fullDescription: {full_description_code}
  }},
  {{
    title: "Secure MLOps Pipeline",
    icon: <Shield className="w-8 h-8 text-primary" />,
    image: "/mlflow-secure-mlops-pipeline-demo-image.png",
    description: "A production-grade, security-first CI/CD pipeline demonstrating enterprise best practices for operationalizing machine learning models.",
    metrics: {{
      kpis: [
        {{ value: "100%", label: "Crit CVEs Blocked" }},
        {{ value: "<90s", label: "CI Security Gate" }},
        {{ value: "Auto", label: "Drift Rollback" }}
      ],
      bullets: [
        {{ lead: "DevSecOps Gate:", text: "Automated Trivy container & dependency scanning blocks 100% of High/Critical CVEs pre-deploy." }},
        {{ lead: "Registry & Rollback:", text: "MLflow Registry stage gates trigger automated rollback on F1/AUC drops across K8s manifests." }}
      ]
    }},
    diagram: `graph TD
      Push["GitHub Push"] --> Actions["GitHub Actions"]
      Actions --> Trivy["Trivy Security Gate (Fail on Critical/High CVE)"]
      Trivy --> MLflow["MLflow Training & Registry Versioning"]
      MLflow --> Eval["Evaluation Gate"]
      Eval -- "F1/AUC Drop" --> Rollback["Automated Rollback Trigger"]
      Eval -- "Pass" --> Prod["Production Deployment (K8s Manifests)"]`,
    github: "https://github.com/santosisadora/secure-mlops-pipeline",
    demo: "/secure-mlops-pipeline-edited-final-demo.mp4"
  }},
  {{
    title: "Self-Healing Agentic ETL",
    icon: <BarChart3 className="w-8 h-8 text-primary" />,
    image: "/self-healing-agentic-etl-preview-image.png",
    description: "A resilient data extraction pipeline that dynamically maps messy, unstructured documents into strict schemas and autonomously corrects validation errors.",
    metrics: {{
      kpis: [
        {{ value: "94%", label: "Auto-Healed" }},
        {{ value: "≤2", label: "Retry Loops" }},
        {{ value: "6%", label: "DLQ Routed" }}
      ],
      bullets: [
        {{ lead: "Autonomous Recovery:", text: "Intercepts schema drift, malformed JSON/Pydantic errors, and HTTP 429 backoffs automatically." }},
        {{ lead: "Fault Isolation:", text: "Routes unrecoverable payloads to a Dead-Letter Queue (DLQ) with structured failure traces." }}
      ]
    }},
    diagram: `graph TD
      Ingest["Ingestion Source"] --> Extractor["Extractor Agent"]
      Extractor --> Validator["Pydantic Schema Validator"]
      Validator -- "Invalid Schema / 429" --> Retry["Conditional Retry / Self-Healing Loop (Max N Retries)"]
      Retry --> Extractor
      Retry -- "Max Retries Reached" --> DLQ["Dead-Letter Queue (DLQ)"]
      Validator -- "Valid JSON" --> Target["Target DB"]`,
    github: "https://github.com/santosisadora/agentic-etl-pipeline/tree/main",
    demo: "#"
  }}
];

const Projects = () => {{
  const [selectedProject, setSelectedProject] = useState(null);

  return (
    <section id="projects" className="py-24 px-6 relative z-10">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{{{ opacity: 0, y: 20 }}}}
          whileInView={{{{ opacity: 1, y: 0 }}}}
          viewport={{{{ once: true }}}}
          transition={{{{ duration: 0.5 }}}}
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
          {{projects.map((project, index) => (
            <motion.div
              key={{index}}
              initial={{{{ opacity: 0, y: 30 }}}}
              whileInView={{{{ opacity: 1, y: 0 }}}}
              viewport={{{{ once: true }}}}
              transition={{{{ duration: 0.5, delay: index * 0.1 }}}}
              className="glass-panel rounded-2xl p-6 flex flex-col h-full group transition-all duration-500 hover:shadow-[0_0_40px_rgba(20,184,166,0.2)]"
            >
              <div className="flex flex-col flex-grow">
                {{project.image ? (
                  <div 
                    className="mb-6 rounded-lg overflow-hidden border border-gray-700/50 group-hover:border-primary/50 transition-colors bg-black/20 cursor-pointer relative"
                    onClick={{() => setSelectedProject({{ type: 'image', data: project }})}}
                  >
                    <img 
                      src={{project.image}} 
                      alt={{`${{project.title}} preview`}}
                      className="w-full h-48 object-cover opacity-90 group-hover:opacity-100 transition-opacity"
                    />
                    <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                      <span className="text-white text-sm font-medium bg-black/60 px-3 py-1 rounded-full border border-white/20">Click to enlarge</span>
                    </div>
                  </div>
                ) : (
                  <div className="mb-6 p-4 bg-primary/10 rounded-lg inline-block w-fit group-hover:scale-110 transition-transform duration-300">
                    {{project.icon}}
                  </div>
                )}}
                
                <div className="lg:min-h-[130px] flex flex-col">
                  <h3 className="text-xl md:text-2xl font-bold text-white mb-3">{{project.title}}</h3>
                  <p className="text-gray-400 mb-6 text-sm flex-grow">{{project.description}}</p>
                </div>
                
                <div className="mb-6 bg-[#060f0f]/80 p-4 rounded-xl border border-primary/20">
                  <h4 className="text-xs font-bold text-primary uppercase tracking-widest mb-4 flex items-center gap-2">
                    <Activity className="w-4 h-4" /> SYSTEM METRICS & TRADE-OFFS
                  </h4>
                  <div className="grid grid-cols-3 gap-2 border-b border-white/10 pb-3 mb-4 text-center">
                    {{project.metrics.kpis.map((kpi, i) => (
                      <div key={{i}} className="flex flex-col items-center justify-center">
                        <span className="text-base font-bold text-white">{{kpi.value}}</span>
                        <span className="text-[10px] uppercase tracking-wider text-gray-400 mt-1">{{kpi.label}}</span>
                      </div>
                    ))}}
                  </div>
                  <ul className="space-y-3 text-xs leading-relaxed text-gray-300">
                    {{project.metrics.bullets.map((bullet, i) => (
                      <li key={{i}}>
                        <strong className="text-primary">{{bullet.lead}}</strong> {{bullet.text}}
                      </li>
                    ))}}
                  </ul>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-2.5 mt-auto">
                <a href={{project.github}} target="_blank" rel="noopener noreferrer" className="w-full flex items-center justify-center gap-2 py-2 px-3 border border-gray-600 rounded text-sm hover:border-primary hover:text-primary transition-colors whitespace-nowrap">
                  <Code className="w-4 h-4" />
                  GitHub
                </a>
                
                {{project.liveApp && (
                  <a href={{project.liveApp}} target="_blank" rel="noopener noreferrer" className="w-full flex items-center justify-center gap-2 py-2 px-3 bg-primary/20 border border-primary/50 text-white rounded text-sm hover:bg-primary hover:text-black transition-colors font-medium whitespace-nowrap">
                    <Globe className="w-4 h-4" />
                    Try Agent
                  </a>
                )}}
                
                {{project.demo !== "#" && (
                  <a 
                    href={{project.demo}}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full flex items-center justify-center gap-2 py-2 px-3 bg-primary/10 border border-primary/30 text-primary rounded text-sm hover:bg-primary hover:text-black transition-colors font-medium whitespace-nowrap"
                  >
                    <Play className="w-4 h-4" />
                    Watch demo
                  </a>
                )}}
                
                {{project.diagram && (
                  <button 
                    onClick={{() => setSelectedProject({{ type: 'diagram', data: project }})}}
                    className={{`w-full flex items-center justify-center gap-2 py-2 px-3 bg-[#081212] border border-primary/40 text-primary rounded text-sm hover:bg-primary hover:text-black transition-colors font-medium whitespace-nowrap shadow-[0_0_10px_rgba(20,184,166,0.1)] ${{project.title === 'Secure MLOps Pipeline' ? 'col-span-2' : ''}}`}}
                  >
                    <Network className="w-4 h-4" />
                    Architecture
                  </button>
                )}}
                
                {{project.fullDescription && (
                  <button 
                    onClick={{() => setSelectedProject({{ type: 'details', data: project }})}}
                    className="col-span-2 w-full flex items-center justify-center gap-2 py-2 px-3 bg-gray-800 border border-gray-600 text-gray-300 rounded text-sm hover:bg-gray-700 hover:text-white transition-colors font-medium whitespace-nowrap"
                  >
                    <Info className="w-4 h-4" />
                    Details
                  </button>
                )}}
              </div>
            </motion.div>
          ))}}
        </div>
      </div>

      <AnimatePresence>
        {{selectedProject && selectedProject.type === 'image' && (
          <motion.div
            initial={{{{ opacity: 0 }}}}
            animate={{{{ opacity: 1 }}}}
            exit={{{{ opacity: 0 }}}}
            onClick={{() => setSelectedProject(null)}}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4 backdrop-blur-sm cursor-zoom-out"
          >
            <motion.div
              initial={{{{ scale: 0.9, opacity: 0 }}}}
              animate={{{{ scale: 1, opacity: 1 }}}}
              exit={{{{ scale: 0.9, opacity: 0 }}}}
              transition={{{{ type: "spring", damping: 25, stiffness: 300 }}}}
              className="relative max-w-5xl w-full max-h-[90vh] flex flex-col items-center cursor-default"
              onClick={{(e) => e.stopPropagation()}}
            >
              <button
                onClick={{() => setSelectedProject(null)}}
                className="absolute -top-12 right-0 text-white hover:text-primary transition-colors p-2"
              >
                <X className="w-8 h-8" />
              </button>
              <img 
                src={{selectedProject.data.image}} 
                alt="Enlarged project preview" 
                className="w-full h-auto max-h-[85vh] object-contain rounded-lg shadow-2xl border border-gray-700/50"
              />
            </motion.div>
          </motion.div>
        )}}

        {{selectedProject && selectedProject.type === 'details' && (
          <motion.div
            initial={{{{ opacity: 0 }}}}
            animate={{{{ opacity: 1 }}}}
            exit={{{{ opacity: 0 }}}}
            onClick={{() => setSelectedProject(null)}}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4 backdrop-blur-sm"
          >
            <motion.div
              initial={{{{ scale: 0.9, opacity: 0, y: 20 }}}}
              animate={{{{ scale: 1, opacity: 1, y: 0 }}}}
              exit={{{{ scale: 0.9, opacity: 0, y: 20 }}}}
              transition={{{{ type: "spring", damping: 25, stiffness: 300 }}}}
              className="relative max-w-4xl w-full max-h-[90vh] overflow-y-auto bg-[#050a0a] border border-gray-700/80 rounded-2xl shadow-2xl flex flex-col scrollbar-thin scrollbar-thumb-gray-600"
              onClick={{(e) => e.stopPropagation()}}
            >
              <div className="sticky top-0 z-20 bg-[#081212]/90 backdrop-blur-md p-4 border-b border-gray-800 flex justify-between items-center">
                <h3 className="text-xl sm:text-2xl font-bold text-white">{{selectedProject.data.title}}</h3>
                <button
                  onClick={{() => setSelectedProject(null)}}
                  className="text-gray-400 hover:text-white transition-colors bg-gray-800 hover:bg-gray-700 rounded-full p-2 ml-4 flex-shrink-0"
                >
                  <X className="w-6 h-6" />
                </button>
              </div>
              
              <div className="p-4 sm:p-6">
                {{selectedProject.data.liveApp && (
                  <div className="mt-8 bg-primary/10 border border-primary/30 rounded-xl p-6 flex flex-col sm:flex-row justify-between items-center gap-4 text-center sm:text-left">
                    <div>
                      <h4 className="text-lg font-bold text-white mb-1">The application is fully deployed</h4>
                      <p className="text-sm text-gray-300">Click here if you want to try this agent live in action.</p>
                    </div>
                    <a 
                      href={{selectedProject.data.liveApp}} 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="whitespace-nowrap px-6 py-3 bg-primary text-black font-bold rounded-lg hover:bg-primary/90 transition-all hover:shadow-[0_0_15px_rgba(20,184,166,0.4)] flex items-center gap-2"
                    >
                      <Globe className="w-5 h-5" />
                      Try Live Agent
                    </a>
                  </div>
                )}}

                {{selectedProject.data.fullDescription}}
              </div>
            </motion.div>
          </motion.div>
        )}}

        {{selectedProject && selectedProject.type === 'diagram' && (
          <motion.div
            initial={{{{ opacity: 0 }}}}
            animate={{{{ opacity: 1 }}}}
            exit={{{{ opacity: 0 }}}}
            onClick={{() => setSelectedProject(null)}}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4 backdrop-blur-sm"
          >
            <motion.div
              initial={{{{ scale: 0.9, opacity: 0, y: 20 }}}}
              animate={{{{ scale: 1, opacity: 1, y: 0 }}}}
              exit={{{{ scale: 0.9, opacity: 0, y: 20 }}}}
              transition={{{{ type: "spring", damping: 25, stiffness: 300 }}}}
              className="relative max-w-4xl w-full max-h-[90vh] overflow-y-auto bg-[#e5e7eb] border border-gray-700/80 rounded-2xl shadow-2xl flex flex-col"
              onClick={{(e) => e.stopPropagation()}}
            >
              <div className="sticky top-0 z-20 bg-[#081212] p-4 border-b border-gray-800 flex justify-between items-center">
                <h3 className="text-xl sm:text-2xl font-bold text-white">{{selectedProject.data.title}} - Architecture</h3>
                <button
                  onClick={{() => setSelectedProject(null)}}
                  className="text-gray-400 hover:text-white transition-colors bg-gray-800 hover:bg-gray-700 rounded-full p-2 ml-4 flex-shrink-0"
                >
                  <X className="w-6 h-6" />
                </button>
              </div>
              
              <div className="p-8 flex items-center justify-center min-h-[50vh]">
                <Mermaid chart={{selectedProject.data.diagram}} />
              </div>
            </motion.div>
          </motion.div>
        )}}
      </AnimatePresence>
    </section>
  );
}};

export default Projects;
"""

with open('src/components/Projects.jsx', 'w', encoding='utf-8') as f:
    f.write(new_code)

print("Projects.jsx rewritten successfully with the new layout constraints.")
