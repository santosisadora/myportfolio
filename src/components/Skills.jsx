import React from 'react';
import { motion } from 'framer-motion';

const skillCategories = [
  {
    title: "ML Frameworks",
    skills: ["PyTorch", "TensorFlow", "Scikit-learn"],
    colSpan: "col-span-1 md:col-span-2 lg:col-span-1",
    delay: 0.1
  },
  {
    title: "Engineering & MLOps",
    skills: ["Docker", "Kubernetes", "AWS", "FastAPI", "MLflow"],
    colSpan: "col-span-1 md:col-span-2 lg:col-span-2",
    delay: 0.2
  },
  {
    title: "AI Tools & Agents",
    skills: [
      "LangChain",
      "LangGraph",
      "LangSmith",
      "Claude",
      "Cursor",
      "Antigravity",
      "OpenAI API",
      "ChromaDB",
      "Hugging Face"
    ],
    colSpan: "col-span-1 md:col-span-2 lg:col-span-2",
    delay: 0.3
  },
  {
    title: "Core & Backend",
    skills: ["Python", "Java", "SecOps", "SQL", "Git"],
    colSpan: "col-span-1 md:col-span-2 lg:col-span-1",
    delay: 0.4
  }
];

const Skills = () => {
  return (
    <section id="skills" className="py-24 px-6 relative z-10 bg-gray-950/30">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-16 text-center"
        >
          <h2 className="text-4xl font-bold text-white mb-4">Core Skills</h2>
          <div className="w-20 h-1 bg-primary mx-auto rounded-full shadow-[0_0_10px_rgba(0,240,255,0.5)]"></div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: category.delay }}
              className={`glass glass-hover rounded-2xl p-8 ${category.colSpan}`}
            >
              <h3 className="text-xl font-bold text-white mb-6 flex items-center before:content-[''] before:w-2 before:h-2 before:bg-primary before:rounded-full before:mr-3 before:shadow-[0_0_8px_rgba(0,240,255,0.8)]">
                {category.title}
              </h3>
              <div className="flex flex-wrap gap-3">
                {category.skills.map((skill, i) => (
                  <div
                    key={i}
                    className="px-4 py-2 rounded-lg bg-gray-800/50 border border-gray-700/50 text-sm font-medium text-gray-300 hover:text-primary hover:border-primary/50 transition-colors cursor-default"
                  >
                    {skill}
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
