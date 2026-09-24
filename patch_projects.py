import re

with open('src/components/Projects.jsx', 'r', encoding='utf-8') as f:
    code = f.read()

# Replace header
code = re.sub(
    r'<motion\.div[\s\S]*?className="mb-16 text-center"[\s\S]*?<\/motion\.div>',
    '''<motion.div
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
            <div className="absolute top-0 left-0 w-64 h-[2px] bg-primary shadow-[0_0_10px_rgba(0,240,255,0.8)]"></div>
          </div>
        </motion.div>''',
    code
)

# Replace card layout
code = code.replace('glass glass-hover rounded-xl p-8 flex flex-col h-full group', 'glass-panel rounded-2xl p-6 flex flex-col h-full group transition-all duration-500 hover:shadow-[0_0_40px_rgba(0,240,255,0.2)]')

# Replace bullets
code = re.sub(
    r'<ul className="mb-8 space-y-2">[\s\S]*?<\/ul>',
    '''<div className="flex flex-wrap gap-2 mb-6">
                {project.bullets.map((bullet, i) => (
                  <span key={i} className="px-3 py-1 bg-gray-800/50 border border-gray-700 rounded-full text-xs text-gray-300">
                    {bullet.replace('LangGraph Orchestration & LangSmith Observability', 'LangGraph').replace('Fully containerized (Docker) and AWS deployed with ECS', 'Docker & AWS').replace('PostgreSQL for vector db and checkpoint', 'PostgreSQL').replace('Automated GitHub Actions CI/CD', 'GitHub Actions').replace('Trivy Container Security Scanning', 'Trivy').replace('MLflow & PostgreSQL Infrastructure', 'MLflow').replace('Dynamic unstructured-to-JSON extraction', 'JSON Extractor').replace('Self-healing Pydantic validation loops', 'Pydantic').replace('LangGraph state orchestration', 'LangGraph')}
                  </span>
                ))}
              </div>''',
    code
)

with open('src/components/Projects.jsx', 'w', encoding='utf-8') as f:
    f.write(code)

print('Done')
