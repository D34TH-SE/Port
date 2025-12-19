import React, { useState, useEffect } from 'react';
import { ArrowRight } from 'lucide-react';
import { PORTFOLIO_OWNER, JOB_TITLE, SHORT_BIO } from '../constants';
import { SectionId } from '../types';

export const Hero: React.FC = () => {
  const [text, setText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [loopNum, setLoopNum] = useState(0);
  const [typingSpeed, setTypingSpeed] = useState(150);

  const toRotate = [PORTFOLIO_OWNER, "a Machine Learning Engineer", "a Problem Solver", "a Creator", "excited about Machine Learning"];

  useEffect(() => {
    let ticker = setTimeout(() => {
      tick();
    }, typingSpeed);

    return () => clearTimeout(ticker);
  }, [text]);

  const tick = () => {
    let i = loopNum % toRotate.length;
    let fullText = toRotate[i];
    let updatedText = isDeleting 
      ? fullText.substring(0, text.length - 1) 
      : fullText.substring(0, text.length + 1);

    setText(updatedText);

    if (isDeleting) {
      setTypingSpeed(prev => prev / 2);
    }

    if (!isDeleting && updatedText === fullText) {
      setIsDeleting(true);
      setTypingSpeed(2000); // Pause at end of word
    } else if (isDeleting && updatedText === '') {
      setIsDeleting(false);
      setLoopNum(loopNum + 1);
      setTypingSpeed(150); // Reset speed for new word
    } else {
      setTypingSpeed(isDeleting ? 50 : 150);
    }
  };

  const scrollToAbout = () => {
    document.getElementById(SectionId.ABOUT)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id={SectionId.HOME} className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20">
      {/* Background Decorative Elements */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-indigo-500/10 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-accent/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>

      <div className="max-w-4xl mx-auto px-4 text-center z-10 relative">
        <div className="inline-block mb-4 px-4 py-1.5 rounded-full border border-indigo-500/30 bg-indigo-500/10 text-indigo-300 text-sm font-medium animate-fade-in-up">
          Seeking Machine Learning Engineer Opportunities
        </div>
        
        <h1 className="text-5xl sm:text-7xl font-bold text-slate-100 mb-6 tracking-tight leading-tight min-h-[1.2em]">
          Hi, I'm <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-cyan-400">{text}</span>
          <span className="animate-blink border-r-4 border-indigo-400 ml-1"></span>
        </h1>
        
        <h2 className="text-2xl sm:text-3xl text-slate-400 font-light mb-8 opacity-0 animate-[fadeIn_1s_ease-in_forwards] delay-300">
          {JOB_TITLE}
        </h2>
        
        <p className="text-lg text-slate-400 max-w-2xl mx-auto mb-10 leading-relaxed opacity-0 animate-[fadeIn_1s_ease-in_forwards] delay-500">
          {SHORT_BIO}
        </p>

        <div className="flex justify-center items-center opacity-0 animate-[fadeIn_1s_ease-in_forwards] delay-700">
          <button 
            onClick={scrollToAbout}
            className="group px-8 py-3.5 rounded-full bg-indigo-600 text-white font-semibold hover:bg-indigo-700 transition-all shadow-lg hover:shadow-indigo-500/25 flex items-center gap-2 hover:-translate-y-1"
          >
            Explore My Work
            <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
          </button>
        </div>
      </div>

      <style>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </section>
  );
};