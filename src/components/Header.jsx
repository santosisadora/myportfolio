import React from 'react';

const Header = () => {
  return (
    <header className="fixed top-6 left-1/2 -translate-x-1/2 w-[95%] max-w-6xl z-50">
      <div className="glass rounded-full px-6 py-3 flex items-center justify-between shadow-[0_0_30px_rgba(0,0,0,0.5)]">
        
        {/* Left: Logo/Name */}
        <a href="#" className="text-gray-300 font-medium tracking-widest text-sm hover:text-white transition-colors uppercase">
          Isadora Santos
        </a>

        {/* Center: Navigation (Hidden on small screens) */}
        <nav className="hidden md:flex items-center gap-8">
          <a href="#projects" className="text-sm font-medium text-gray-400 hover:text-primary transition-colors">
            Projects
          </a>
          <a href="#experience" className="text-sm font-medium text-gray-400 hover:text-primary transition-colors">
            Experience
          </a>
          <a href="#education" className="text-sm font-medium text-gray-400 hover:text-primary transition-colors">
            Education
          </a>
          <a href="#contact" className="text-sm font-medium text-gray-400 hover:text-primary transition-colors">
            Contact
          </a>
        </nav>

        {/* Right: CTA Button */}
        <div className="flex items-center gap-4">
          <a href="#resume" className="hidden md:block text-sm font-medium text-gray-400 hover:text-white transition-colors">
            Resume
          </a>
          <a 
            href="#contact" 
            className="text-sm font-medium text-primary bg-primary/10 border border-primary/50 px-5 py-2 rounded-full hover:bg-primary hover:text-black transition-all hover:shadow-[0_0_15px_rgba(0,240,255,0.4)]"
          >
            Get in Touch
          </a>
        </div>

      </div>
    </header>
  );
};

export default Header;
