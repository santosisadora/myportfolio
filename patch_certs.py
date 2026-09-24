import re

with open('src/components/Certifications.jsx', 'r', encoding='utf-8') as f:
    code = f.read()

# Replace header
code = re.sub(
    r'<motion\.div[\s\S]*?className="mb-12 md:mb-16 text-center"[\s\S]*?<\/motion\.div>',
    '''<motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-12"
        >
          <div className="flex items-center gap-4 mb-2">
            <h2 className="text-3xl font-bold text-gray-200 tracking-wide">Certifications</h2>
          </div>
          <div className="w-full h-[1px] bg-gray-800 relative">
            <div className="absolute top-0 left-0 w-48 h-[2px] bg-primary shadow-[0_0_10px_rgba(0,240,255,0.8)]"></div>
          </div>
        </motion.div>''',
    code
)

code = code.replace('bg-gray-950/30', '')
code = code.replace('glass hover:shadow-[0_0_20px_rgba(0,240,255,0.1)]', 'glass-panel transition-all duration-500 hover:shadow-[0_0_30px_rgba(0,240,255,0.15)]')
code = code.replace('bg-gray-900/30', 'bg-[#0f1623]/60')
code = code.replace('bg-gray-950/50', 'bg-[#0b111c]/80')

with open('src/components/Certifications.jsx', 'w', encoding='utf-8') as f:
    f.write(code)

print('Done Certifications')

with open('src/components/ResumeSection.jsx', 'r', encoding='utf-8') as f:
    code = f.read()

code = re.sub(
    r'<motion\.div[\s\S]*?className="mb-12 text-center"[\s\S]*?<\/motion\.div>',
    '''<motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-12"
        >
          <div className="flex items-center gap-4 mb-2">
            <h2 className="text-3xl font-bold text-gray-200 tracking-wide">Resume</h2>
          </div>
          <div className="w-full h-[1px] bg-gray-800 relative">
            <div className="absolute top-0 left-0 w-32 h-[2px] bg-primary shadow-[0_0_10px_rgba(0,240,255,0.8)]"></div>
          </div>
        </motion.div>''',
    code
)
code = code.replace('glass rounded-2xl p-8 md:p-12', 'glass-panel rounded-2xl p-8 md:p-12 shadow-[0_0_30px_rgba(0,240,255,0.05)]')
with open('src/components/ResumeSection.jsx', 'w', encoding='utf-8') as f:
    f.write(code)

print('Done ResumeSection')
