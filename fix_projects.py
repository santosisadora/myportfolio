import re

with open('src/components/Projects.jsx', 'r', encoding='utf-8') as f:
    code = f.read()

# 1. Fix the image name
code = code.replace('"/rag-secops-agent-preview-image.png"', '"/vuln-rag-demo-preview.png"')

# 2. Fix the buttons layout wrapper
code = code.replace(
    '<div className="flex flex-wrap gap-3 mt-auto">',
    '<div className="grid grid-cols-1 sm:grid-cols-2 gap-2 mt-auto">'
)

# 3. Remove `flex-1 ` from the buttons
code = code.replace('className="flex-1 flex ', 'className="w-full flex ')

# 4. Make the metrics block slightly more compact
code = code.replace(
    '<h4 className="text-sm font-bold text-primary mb-3 flex items-center gap-2">',
    '<h4 className="text-sm font-bold text-primary mb-2 flex items-center gap-2">'
)
code = code.replace('<ul className="space-y-3">', '<ul className="space-y-2">')

with open('src/components/Projects.jsx', 'w', encoding='utf-8') as f:
    f.write(code)

print("Fixed Projects.jsx")
