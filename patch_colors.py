import glob
import os

files = glob.glob('src/components/*.jsx') + ['src/App.jsx', 'src/index.css']

for filepath in files:
    with open(filepath, 'r', encoding='utf-8') as f:
        code = f.read()

    original_code = code

    # Replace hardcoded rgb values for cyan with the new teal (14b8a6 -> 20,184,166)
    code = code.replace('0,240,255', '20,184,166')
    
    # Replace background colours
    code = code.replace('bg-[#070b14]', 'bg-[#050a0a]')
    code = code.replace('bg-[#0f1623]', 'bg-[#081212]')
    code = code.replace('bg-[#0b111c]', 'bg-[#060f0f]')

    if code != original_code:
        with open(filepath, 'w', encoding='utf-8') as f:
            f.write(code)
        print(f"Patched {filepath}")

print("Done colors")
