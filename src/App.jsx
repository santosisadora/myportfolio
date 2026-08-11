import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Certifications from './components/Certifications';
import Education from './components/Education';
import Contact from './components/Contact';
import Footer from './components/Footer';
import NetworkBackground from './components/NetworkBackground';

function App() {
  return (
    <div className="min-h-screen bg-background text-gray-200 font-sans selection:bg-primary/30 relative overflow-x-hidden">
      <NetworkBackground />
      <Header />
      
      <main>
        <Hero />
        <Projects />
        <Skills />
        <Certifications />
        <Experience />
        <Education />
        <Contact />
      </main>
      
      <Footer />
    </div>
  );
}

export default App;
