import React from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Skills } from './components/Skills';
import { Works } from './components/Works';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';

const App: React.FC = () => {
  return (
    <div className="bg-slate-900 min-h-screen text-slate-200 selection:bg-indigo-500/30">
      <Navbar />
      
      <main>
        <Hero />
        <About />
        <Skills />
        <Works />
        <Contact />
      </main>

      <Footer />
    </div>
  );
};

export default App;