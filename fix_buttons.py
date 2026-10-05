import re

with open("src/components/Projects.jsx", "r", encoding="utf-8") as f:
    content = f.read()

# Replace the entire buttons div
button_logic_pattern = r"<div className=\"grid grid-cols-2 gap-2\.5 mt-auto\">.*?</div>\s*</motion\.div>"

replacement = """<div className="grid grid-cols-2 gap-2.5 mt-auto">
                {[
                  project.github && { icon: Code, text: "GitHub", href: project.github, type: 'link' },
                  project.liveApp && { icon: Globe, text: "Try Agent", href: project.liveApp, type: 'link', primary: true },
                  (project.demo && project.demo !== "#") && { icon: Play, text: "Watch demo", href: project.demo, type: 'link', primary: true },
                  project.diagram && { icon: Network, text: "Architecture", action: () => setSelectedProject({ type: 'diagram', data: project }), type: 'button' },
                  project.fullDescription && { icon: Info, text: "Details", action: () => setSelectedProject({ type: 'details', data: project }), type: 'button' }
                ].filter(Boolean).map((btn, i, arr) => {
                  const isLastOdd = (i === arr.length - 1) && (arr.length % 2 !== 0);
                  const btnClass = `w-full flex items-center justify-center gap-2 py-2 px-3 text-sm font-medium whitespace-nowrap ${btn.primary ? 'glass-button-primary' : 'glass-button'} ${isLastOdd ? 'col-span-2' : ''}`;
                  
                  if (btn.type === 'link') {
                    return (
                      <a key={i} href={btn.href} target="_blank" rel="noopener noreferrer" className={btnClass}>
                        <btn.icon className="w-4 h-4" /> {btn.text}
                      </a>
                    );
                  } else {
                    return (
                      <button key={i} onClick={btn.action} className={btnClass}>
                        <btn.icon className="w-4 h-4" /> {btn.text}
                      </button>
                    );
                  }
                })}
              </div>
            </motion.div>"""

new_content = re.sub(button_logic_pattern, replacement, content, flags=re.DOTALL)

with open("src/components/Projects.jsx", "w", encoding="utf-8") as f:
    f.write(new_content)
print("Button logic fixed.")
