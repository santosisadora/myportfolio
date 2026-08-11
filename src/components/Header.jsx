import React, { useState, useEffect } from 'react';

const Logo = () => (
  <div className="flex items-center gap-4 hover:scale-105 transition-transform cursor-pointer">
    <div className="flex flex-col items-center justify-between w-6 h-8">
      <div className="w-full h-1.5 bg-primary shadow-[0_0_8px_rgba(0,240,255,0.6)]"></div>
      <div className="w-1.5 h-full bg-primary shadow-[0_0_8px_rgba(0,240,255,0.6)]"></div>
      <div className="w-full h-1.5 bg-primary shadow-[0_0_8px_rgba(0,240,255,0.6)]"></div>
    </div>
    <div className="flex flex-col justify-center">
      <span className="text-lg font-bold text-white tracking-widest leading-none">ISADORA SANTOS</span>
      <span className="text-[0.6rem] text-primary tracking-widest uppercase mt-1 font-semibold">AI & MLOps Engineer</span>
    </div>
  </div>
);

const Header = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header 
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled ? 'bg-background/80 backdrop-blur-md border-b border-gray-800' : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        <a href="#" className="flex-shrink-0">
          <Logo />
        </a>
        
        <nav className="hidden md:flex gap-6">
          <a href="#projects" className="text-sm font-medium text-gray-300 hover:text-primary transition-colors">
            Projects
          </a>
          <a href="#skills" className="text-sm font-medium text-gray-300 hover:text-primary transition-colors">
            Skills
          </a>
          <a href="#certifications" className="text-sm font-medium text-gray-300 hover:text-primary transition-colors">
            Certifications
          </a>
          <a href="#experience" className="text-sm font-medium text-gray-300 hover:text-primary transition-colors">
            Experience
          </a>
          <a href="#education" className="text-sm font-medium text-gray-300 hover:text-primary transition-colors">
            Education
          </a>
          <a href="#contact" className="text-sm font-medium text-gray-300 hover:text-primary transition-colors">
            Contact
          </a>
        </nav>
      </div>
    </header>
  );
};

export default Header;
