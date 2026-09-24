import re
import glob
import os

files = glob.glob('src/components/*.jsx')

for filepath in files:
    with open(filepath, 'r', encoding='utf-8') as f:
        code = f.read()

    # Remove bg-gray-950/30
    code = code.replace('bg-gray-950/30', '')
    
    # Replace headers for Skills, Certifications, ResumeSection
    match = re.search(r'<motion\.div[\s\S]*?className="mb-[0-9]+ text-center"[\s\S]*?<h2 className="text-4xl font-bold text-white mb-4">(.*?)<\/h2>[\s\S]*?<\/motion\.div>', code)
    if match and "Hero" not in filepath and "Header" not in filepath and "Contact" not in filepath and "Projects" not in filepath and "Experience" not in filepath and "Education" not in filepath:
        title = match.group(1)
        replacement = f'''<motion.div
          initial={{{{ opacity: 0, y: 20 }}}}
          whileInView={{{{ opacity: 1, y: 0 }}}}
          viewport={{{{ once: true }}}}
          transition={{{{ duration: 0.5 }}}}
          className="mb-12"
        >
          <div className="flex items-center gap-4 mb-2">
            <h2 className="text-3xl font-bold text-gray-200 tracking-wide">{title}</h2>
          </div>
          <div className="w-full h-[1px] bg-gray-800 relative">
            <div className="absolute top-0 left-0 w-32 h-[2px] bg-primary shadow-[0_0_10px_rgba(0,240,255,0.8)]"></div>
          </div>
        </motion.div>'''
        code = code.replace(match.group(0), replacement)
        
        # Also replace basic glass cards
        code = code.replace('glass glass-hover', 'glass-panel transition-all duration-500 hover:shadow-[0_0_30px_rgba(0,240,255,0.15)]')
        
        with open(filepath, 'w', encoding='utf-8') as f:
            f.write(code)
            print(f"Patched {filepath}")

