import re

with open('src/components/Education.jsx', 'r', encoding='utf-8') as f:
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
            <h2 className="text-3xl font-bold text-gray-200 tracking-wide">Education</h2>
          </div>
          <div className="w-full h-[1px] bg-gray-800 relative">
            <div className="absolute top-0 left-0 w-32 h-[2px] bg-primary shadow-[0_0_10px_rgba(0,240,255,0.8)]"></div>
          </div>
        </motion.div>''',
    code
)

code = code.replace('bg-gray-950/30', '')
code = code.replace('glass glass-hover rounded-xl p-6 flex gap-5 items-start h-full', 'glass-panel rounded-2xl p-6 flex gap-5 items-start h-full transition-all duration-500 hover:shadow-[0_0_30px_rgba(0,240,255,0.15)]')

with open('src/components/Education.jsx', 'w', encoding='utf-8') as f:
    f.write(code)

print('Done')
