import os

files = [
    'src/components/Contact.jsx',
    'src/components/ResumeSection.jsx'
]

for file in files:
    with open(file, 'r', encoding='utf-8') as f:
        content = f.read()
    
    content = content.replace('Isadora_Santos-AI_MLops_Engineer.pdf', 'Isadora_Santos_Resume.pdf')
    
    with open(file, 'w', encoding='utf-8') as f:
        f.write(content)
        
print("Updated resume links")
