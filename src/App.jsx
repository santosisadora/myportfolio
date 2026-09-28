import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Certifications from './components/Certifications';
import Education from './components/Education';
import ResumeSection from './components/ResumeSection';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen text-gray-200 font-sans selection:bg-primary/30 relative overflow-x-hidden">
      {/* Ambient glassmorphism orbs (Fixed layer for glass to blur through) */}
      <div className="fixed top-[-10%] left-[-10%] w-[600px] h-[600px] rounded-full blur-[120px] pointer-events-none -z-10" style={{ background: 'rgba(20, 184, 166, 0.07)' }}></div>
      <div className="fixed bottom-[-10%] right-[-5%] w-[500px] h-[500px] rounded-full blur-[120px] pointer-events-none -z-10" style={{ background: 'rgba(6, 182, 212, 0.05)' }}></div>
      <div className="fixed top-[40%] right-[-10%] w-[400px] h-[400px] rounded-full blur-[100px] pointer-events-none -z-10" style={{ background: 'rgba(0, 255, 200, 0.04)' }}></div>
      
      <Header />
      
      <main className="pt-24">
        <Hero />
        <Projects />
        <Skills />
        <Certifications />
        <Experience />
        <Education />
        <ResumeSection />
        <About />
        <Contact />
      </main>
      
      <Footer />
    </div>
  );
}

export default App;
