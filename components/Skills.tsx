import React from 'react';
import { SectionId } from '../types';
import { SKILLS } from '../constants';
import { CheckCircle2 } from 'lucide-react';
import { RevealOnScroll } from './RevealOnScroll';

export const Skills: React.FC = () => {
  return (
    <section id={SectionId.SKILLS} className="py-24 bg-slate-800/50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <RevealOnScroll>
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">My Skills</h2>
            <div className="w-20 h-1.5 bg-indigo-600 mx-auto rounded-full"></div>
            <p className="mt-4 text-slate-400 max-w-2xl mx-auto">
              A constantly evolving toolbelt focused on modern web technologies.
            </p>
          </div>
        </RevealOnScroll>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {SKILLS.map((category, idx) => (
            <RevealOnScroll key={idx} delay={idx * 150} className="h-full">
              <div 
                className="bg-slate-900 border border-slate-700 rounded-2xl p-8 hover:border-indigo-500/50 transition-colors duration-300 h-full hover:-translate-y-2 transform"
              >
                <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-2">
                  <span className="w-2 h-8 bg-indigo-500 rounded-full"></span>
                  {category.category}
                </h3>
                <ul className="space-y-4">
                  {category.skills.map((skill, sIdx) => (
                    <li key={sIdx} className="flex items-center gap-3 text-slate-300 group">
                      <CheckCircle2 size={18} className="text-indigo-400 group-hover:text-indigo-300 transition-transform group-hover:scale-110" />
                      <span className="group-hover:text-white transition-colors">{skill}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </RevealOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
};