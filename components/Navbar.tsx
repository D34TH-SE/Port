import React, { useState, useEffect } from 'react';
import { Menu, X, Code2 } from 'lucide-react';
import { SectionId } from '../types';

export const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState<string>(SectionId.HOME);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Track active section on scroll
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          // When a section enters the center of the viewport
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { 
        // Trigger when the section crosses the middle of the screen
        rootMargin: '-40% 0px -40% 0px',
        threshold: 0 
      }
    );

    const sections = document.querySelectorAll('section');
    sections.forEach((section) => observer.observe(section));

    return () => sections.forEach((section) => observer.unobserve(section));
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMobileMenuOpen(false);
      setActiveSection(id); 
    }
  };

  const navLinks = [
    { name: 'Home', id: SectionId.HOME },
    { name: 'About', id: SectionId.ABOUT },
    { name: 'Skills', id: SectionId.SKILLS },
    { name: 'Works', id: SectionId.WORKS },
    { name: 'Contact', id: SectionId.CONTACT },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-40 transition-all duration-300 ${
        isScrolled ? 'bg-slate-900/90 backdrop-blur-md shadow-lg py-3' : 'bg-transparent py-6'
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Logo */}
        <div 
          onClick={() => scrollToSection(SectionId.HOME)}
          className="flex items-center gap-2 cursor-pointer group"
        >
          <div className="bg-indigo-600 p-2 rounded-lg group-hover:rotate-12 transition-transform duration-300">
            <Code2 size={24} className="text-white" />
          </div>
          <span className="text-xl font-bold text-slate-100 tracking-tight">SOLANO</span>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <button
              key={link.id}
              onClick={() => scrollToSection(link.id)}
              className={`relative text-sm font-medium transition-colors uppercase tracking-wider py-1
                ${activeSection === link.id ? 'text-indigo-400' : 'text-slate-300 hover:text-indigo-300'}
              `}
            >
              {link.name}
              {/* Active Indicator Underline */}
              <span 
                className={`absolute bottom-0 left-0 w-full h-0.5 bg-indigo-500 rounded-full transition-transform duration-300 origin-left ${
                  activeSection === link.id ? 'scale-x-100' : 'scale-x-0'
                }`}
              ></span>
            </button>
          ))}
          <a
            href="#contact"
            onClick={(e) => { e.preventDefault(); scrollToSection(SectionId.CONTACT); }}
            className="px-5 py-2 rounded-full bg-indigo-600 text-white text-sm font-semibold hover:bg-indigo-700 transition-all shadow-lg hover:shadow-indigo-500/25"
          >
            Hire Me
          </a>
        </div>

        {/* Mobile Toggle */}
        <button
          className="md:hidden text-slate-300 hover:text-white"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-slate-800 border-t border-slate-700 shadow-xl">
          <div className="flex flex-col p-4 space-y-4">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => scrollToSection(link.id)}
                className={`text-left text-base font-medium px-4 py-2 rounded-lg transition-colors ${
                  activeSection === link.id 
                    ? 'text-white bg-indigo-600/20 border border-indigo-500/30' 
                    : 'text-slate-300 hover:text-white hover:bg-slate-700'
                }`}
              >
                {link.name}
              </button>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};