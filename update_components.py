import os
import glob
import re

jsx_files = glob.glob('src/**/*.jsx', recursive=True)

for file in jsx_files:
    with open(file, 'r', encoding='utf-8') as f:
        content = f.read()

    # Glass panels replacements
    content = content.replace('bg-[#060f0f]/80 p-4 rounded-xl border border-primary/20', 'glass-panel p-4')
    content = content.replace('bg-[#060f0f]/80 p-6 rounded-2xl border border-primary/20', 'glass-panel p-6')
    content = content.replace('bg-gray-900/50 p-4 rounded-lg border border-gray-700/50', 'glass-panel p-4')
    content = content.replace('bg-gray-900/50 border border-gray-700/50', 'glass-panel')
    content = content.replace('bg-[#050a0a]', 'bg-transparent')
    
    # Modals / Panels
    content = content.replace('bg-[#050a0a] border border-gray-700/80 rounded-2xl shadow-2xl flex flex-col', 'glass-panel flex flex-col shadow-2xl')
    content = content.replace('bg-[#e5e7eb] border border-gray-700/80 rounded-2xl shadow-2xl flex flex-col', 'glass-panel flex flex-col shadow-2xl')
    
    content = content.replace('glass-panel rounded-2xl p-6 flex flex-col h-full group transition-all duration-500 hover:shadow-[0_0_40px_rgba(20,184,166,0.2)]', 'glass-panel glass-panel-hover p-6 flex flex-col h-full group')
    content = content.replace('glass-panel rounded-2xl p-8 hover:shadow-[0_0_40px_rgba(20,184,166,0.1)] transition-shadow', 'glass-panel glass-panel-hover p-8')
    content = content.replace('glass-panel rounded-2xl p-8 hover:border-primary/50 transition-colors', 'glass-panel glass-panel-hover p-8')

    # Navbars
    content = content.replace('bg-[#050a0a]/80 backdrop-blur-md border-b border-primary/20', 'glass-nav')
    content = content.replace('bg-[#081212]/90 backdrop-blur-md p-4 border-b border-gray-800', 'glass-nav p-4')
    content = content.replace('bg-[#081212] p-4 border-b border-gray-800', 'glass-nav p-4')

    # Metric Badges
    content = content.replace('grid grid-cols-3 gap-2 border-b border-white/10 pb-3 mb-4 text-center', 'grid grid-cols-3 gap-2 glass-divider pb-3 mb-4 text-center')
    content = re.sub(r'flex flex-col items-center justify-center', 'flex flex-col items-center justify-center glass-metric-badge', content)
    content = content.replace('text-base font-bold text-white', '') # Font sizes etc moved to CSS class
    content = content.replace('text-[10px] uppercase tracking-wider text-gray-400 mt-1', 'text-[11px] uppercase tracking-wider text-gray-400 mt-1')
    
    # Buttons
    content = content.replace('px-4 py-2 border border-primary text-primary rounded-full hover:bg-primary/10 transition-colors text-sm font-medium', 'px-4 py-2 text-sm font-medium glass-button')
    
    content = re.sub(r'w-full flex items-center justify-center gap-2 py-2 px-3 border border-gray-600 rounded text-sm hover:border-primary hover:text-primary transition-colors whitespace-nowrap', 'w-full flex items-center justify-center gap-2 py-2 px-3 text-sm whitespace-nowrap glass-button', content)
    
    content = re.sub(r'col-span-2 w-full flex items-center justify-center gap-2 py-2 px-3 bg-gray-800 border border-gray-600 text-gray-300 rounded text-sm hover:bg-gray-700 hover:text-white transition-colors font-medium whitespace-nowrap', 'col-span-2 w-full flex items-center justify-center gap-2 py-2 px-3 text-sm font-medium whitespace-nowrap glass-button', content)
    
    content = re.sub(r'w-full flex items-center justify-center gap-2 py-2 px-3 bg-primary/20 border border-primary/50 text-white rounded text-sm hover:bg-primary hover:text-black transition-colors font-medium whitespace-nowrap', 'w-full flex items-center justify-center gap-2 py-2 px-3 text-sm font-medium whitespace-nowrap glass-button-primary', content)
    
    content = re.sub(r'w-full flex items-center justify-center gap-2 py-2 px-3 bg-primary/10 border border-primary/30 text-primary rounded text-sm hover:bg-primary hover:text-black transition-colors font-medium whitespace-nowrap', 'w-full flex items-center justify-center gap-2 py-2 px-3 text-sm font-medium whitespace-nowrap glass-button-primary', content)
    
    # Architecture button specifically
    content = re.sub(r'w-full flex items-center justify-center gap-2 py-2 px-3 bg-\[#081212\] border border-primary/40 text-primary rounded text-sm hover:bg-primary hover:text-black transition-colors font-medium whitespace-nowrap shadow-\[.*?\] (.*?)', r'w-full flex items-center justify-center gap-2 py-2 px-3 text-sm font-medium whitespace-nowrap glass-button \1', content)
    
    # Skills chips
    content = content.replace('px-3 py-1 bg-gray-800/50 border border-gray-700 rounded-full text-xs text-gray-300', 'glass-skill-chip')
    content = content.replace('px-4 py-2 bg-[#060f0f] border border-primary/20 rounded-full text-sm text-gray-300 hover:border-primary/50 transition-colors', 'glass-skill-chip hover:border-primary/50 transition-colors')

    # Typography Highlights
    content = content.replace('text-primary', 'text-teal-accent')
    content = content.replace('text-teal-400', 'text-teal-accent')
    
    # Section dividers
    content = content.replace('w-full h-[1px] bg-gray-800', 'w-full glass-divider')
    content = content.replace('border-t border-gray-800', 'glass-divider')
    content = content.replace('border-t border-gray-700/50', 'glass-divider')

    with open(file, 'w', encoding='utf-8') as f:
        f.write(content)

print("Updated components with glassmorphism classes")
