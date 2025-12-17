import React from 'react';
import { SectionId } from '../types';
import { PROJECTS } from '../constants';
import { Github, ExternalLink } from 'lucide-react';
import { RevealOnScroll } from './RevealOnScroll';

export const Works: React.FC = () => {
  return (
    <section id={SectionId.WORKS} className="py-24">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <RevealOnScroll>
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Featured Works</h2>
            <div className="w-20 h-1.5 bg-indigo-600 mx-auto rounded-full"></div>
          </div>
        </RevealOnScroll>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {PROJECTS.map((project, index) => (
            <RevealOnScroll key={project.id} delay={index * 100}>
              <div 
                className="group bg-slate-800 rounded-2xl overflow-hidden border border-slate-700 hover:shadow-2xl hover:shadow-indigo-500/10 transition-all duration-300 flex flex-col hover:-translate-y-2 h-full"
              >
                {/* Image Container */}
                <div className="relative h-48 overflow-hidden">
                  <div className="absolute inset-0 bg-slate-900/20 group-hover:bg-transparent transition-colors z-10"></div>
                  <img 
                    src={project.imageUrl} 
                    alt={project.title} 
                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                  />
                </div>

                {/* Content */}
                <div className="p-6 flex-1 flex flex-col">
                  <h3 className="text-xl font-bold text-white mb-2 group-hover:text-indigo-400 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-slate-400 text-sm mb-4 line-clamp-3 flex-1">
                    {project.description}
                  </p>
                  
                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tags.map((tag) => (
                      <span 
                        key={tag} 
                        className="px-2 py-1 text-xs font-medium bg-slate-700 text-indigo-300 rounded-md"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Actions */}
                  <div className="flex items-center gap-4 mt-auto pt-4 border-t border-slate-700">
                    <a 
                      href={project.demoUrl} 
                      className="flex items-center gap-2 text-sm text-white hover:text-indigo-400 transition-colors"
                    >
                      <ExternalLink size={16} /> Live Demo
                    </a>
                    <a 
                      href={project.repoUrl} 
                      className="flex items-center gap-2 text-sm text-slate-400 hover:text-white transition-colors ml-auto"
                    >
                      <Github size={16} /> Code
                    </a>
                  </div>
                </div>
              </div>
            </RevealOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
};