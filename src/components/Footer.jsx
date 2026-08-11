import React from 'react';
import { Mail } from 'lucide-react';

const GithubIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.2c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"/><path d="M9 18c-4.51 2-5-2-7-2"/></svg>
);

const LinkedinIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect width="4" height="12" x="2" y="9"/><circle cx="4" cy="4" r="2"/></svg>
);

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

const Footer = () => {
  return (
    <footer id="contact" className="border-t border-gray-800 bg-background/80 relative z-10">
      <div className="max-w-7xl mx-auto px-6 py-12 flex flex-col md:flex-row items-center justify-between gap-6">
        <a href="#" className="flex-shrink-0">
          <Logo />
        </a>
        
        <div className="flex gap-6">
          <a href="https://www.linkedin.com/in/isadora-santos-/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-[#0a66c2] transition-colors hover:scale-110 transform duration-200">
            <LinkedinIcon />
          </a>
          <a href="https://github.com/santosisadora" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors hover:scale-110 transform duration-200">
            <GithubIcon />
          </a>
          <a href="mailto:isadorasantos.dev@gmail.com" className="text-gray-400 hover:text-red-400 transition-colors hover:scale-110 transform duration-200">
            <Mail className="w-5 h-5" />
          </a>
        </div>
        
        <p className="text-sm text-gray-500">
          © {new Date().getFullYear()} AI/ML Engineer. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
