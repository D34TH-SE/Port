import React, { useState, useEffect } from 'react';
import { SectionId, Project } from '../types';
import { PROJECTS } from '../constants';
import { Github, ExternalLink, X, Maximize2 } from 'lucide-react';
import { RevealOnScroll } from './RevealOnScroll';

export const Works: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  // Close modal on escape key
  useEffect(() => {
    const handleEsc = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setSelectedProject(null);
    };
    window.addEventListener('keydown', handleEsc);
    return () => window.removeEventListener('keydown', handleEsc);
  }, []);

  // Prevent background scrolling when modal is open
  useEffect(() => {
    if (selectedProject) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
  }, [selectedProject]);

  const openProjectDetails = (project: Project) => {
    setSelectedProject(project);
  };

  const closeProjectDetails = () => {
    setSelectedProject(null);
  };

  return (
    <section id={SectionId.WORKS} className="py-24">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <RevealOnScroll>
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Featured Works</h2>
            <div className="w-20 h-1.5 bg-indigo-600 mx-auto rounded-full shadow-[0_0_15px_rgba(79,70,229,0.5)]"></div>
            <p className="mt-4 text-slate-400 max-w-xl mx-auto">
              A selection of my recent projects, showcasing full-stack development and creative problem solving.
            </p>
          </div>
        </RevealOnScroll>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {PROJECTS.map((project, index) => (
            <RevealOnScroll key={project.id} delay={index * 100}>
              <div 
                onClick={() => openProjectDetails(project)}
                className="group relative h-full cursor-pointer"
              >
                {/* Animated Gradient Border Overlay */}
                <div className="absolute -inset-0.5 bg-gradient-to-r from-indigo-500 via-purple-500 to-cyan-500 rounded-2xl opacity-20 group-hover:opacity-100 transition duration-500 blur-sm group-hover:blur-md"></div>
                
                {/* Main Card Content */}
                <div className="relative bg-slate-900 rounded-2xl overflow-hidden flex flex-col h-full border border-slate-700/50 group-hover:border-transparent transition-colors duration-500">
                  
                  {/* Image Container with Gradient Overlay */}
                  <div className="relative h-64 overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent z-10 opacity-60"></div>
                    <div className="absolute inset-0 bg-indigo-900/10 group-hover:bg-indigo-900/0 transition-colors z-10 duration-500"></div>
                    
                    <div className="absolute inset-0 z-20 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <div className="bg-white/10 backdrop-blur-md p-4 rounded-full text-white shadow-2xl border border-white/20 transform scale-75 group-hover:scale-100 transition-transform duration-500">
                        <Maximize2 size={24} />
                      </div>
                    </div>

                    <img 
                      src={project.imageUrl} 
                      alt={project.title} 
                      className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-1000 ease-out"
                      onError={(e) => {
                        (e.target as HTMLImageElement).src = `https://picsum.photos/800/600?random=${project.id}`;
                      }}
                    />
                    
                    <div className="absolute top-4 left-4 z-20 px-3 py-1 bg-indigo-600/80 backdrop-blur-md rounded-full text-[10px] font-bold text-white uppercase tracking-widest shadow-lg">
                      Project 0{index + 1}
                    </div>
                  </div>

                  {/* Text Content with Subtle Gradient Background */}
                  <div className="p-8 flex-1 flex flex-col justify-between bg-gradient-to-b from-slate-900 to-slate-950">
                    <div>
                      <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-indigo-400 transition-colors duration-300">
                        {project.title}
                      </h3>
                      <p className="text-slate-400 text-sm mb-6 line-clamp-3 leading-relaxed">
                        {project.description}
                      </p>
                      
                      <div className="flex flex-wrap gap-2">
                        {project.tags.map((tag) => (
                          <span 
                            key={tag} 
                            className="px-2.5 py-1 text-[10px] font-bold bg-indigo-500/10 text-indigo-300 rounded-md border border-indigo-500/20 uppercase tracking-wider"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div className="mt-8 pt-6 border-t border-slate-800/50 flex items-center justify-between">
                       <span className="text-indigo-400 text-sm font-semibold flex items-center gap-1.5 group-hover:gap-3 transition-all">
                         View Details <Maximize2 size={14} />
                       </span>
                       <div className="flex gap-4">
                          <div className="p-2 hover:bg-slate-800 rounded-full transition-colors">
                            <Github size={18} className="text-slate-500 hover:text-white" />
                          </div>
                          <div className="p-2 hover:bg-slate-800 rounded-full transition-colors">
                            <ExternalLink size={18} className="text-slate-500 hover:text-white" />
                          </div>
                       </div>
                    </div>
                  </div>
                </div>
              </div>
            </RevealOnScroll>
          ))}
        </div>
      </div>

      {/* Project Details Modal */}
      {selectedProject && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-10 bg-slate-950/98 backdrop-blur-2xl animate-in fade-in duration-300 overflow-y-auto">
          <div className="absolute inset-0 cursor-zoom-out" onClick={closeProjectDetails}></div>
          
          <div className="relative w-full max-w-5xl bg-slate-900 rounded-3xl overflow-hidden shadow-[0_0_50px_rgba(0,0,0,0.5)] border border-slate-800 animate-in zoom-in-95 duration-300 flex flex-col my-auto max-h-[90vh]">
            
            {/* Modal Header */}
            <div className="flex items-center justify-between p-6 border-b border-slate-800/50 bg-slate-900/80 backdrop-blur-md sticky top-0 z-50">
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 bg-indigo-600 rounded-xl flex items-center justify-center text-white font-bold">
                    {selectedProject.title.charAt(0)}
                  </div>
                  <h3 className="text-2xl font-bold text-white truncate">{selectedProject.title}</h3>
                </div>
                <button 
                  onClick={closeProjectDetails}
                  className="p-3 bg-slate-800 hover:bg-red-600 text-white rounded-full transition-all border border-slate-700 shadow-xl group"
                >
                  <X size={20} className="group-hover:rotate-90 transition-transform duration-300" />
                </button>
            </div>

            {/* Modal Content */}
            <div className="overflow-y-auto custom-scrollbar">
              <div className="w-full bg-slate-950 p-4 md:p-8 flex items-center justify-center">
                <img 
                  src={selectedProject.imageUrl} 
                  alt={selectedProject.title} 
                  className="max-w-full h-auto rounded-2xl shadow-2xl border border-slate-800/50"
                  onError={(e) => {
                    (e.target as HTMLImageElement).src = `https://picsum.photos/1200/800?random=${selectedProject.id}`;
                  }}
                />
              </div>

              <div className="p-8 md:p-12 bg-gradient-to-b from-slate-900 to-slate-950">
                <div className="mb-10">
                  <div className="flex flex-wrap gap-2.5 mb-8">
                    {selectedProject.tags.map((tag) => (
                      <span key={tag} className="px-4 py-1.5 bg-indigo-500/10 text-indigo-400 text-xs font-bold rounded-full border border-indigo-500/20 uppercase tracking-widest">
                        {tag}
                      </span>
                    ))}
                  </div>
                  
                  <h4 className="text-sm font-bold text-slate-500 uppercase tracking-widest mb-6 flex items-center gap-2">
                    <span className="w-8 h-px bg-slate-700"></span> Project Overview
                  </h4>
                  <p className="text-slate-300 text-lg md:text-xl leading-relaxed whitespace-pre-line font-light">
                    {selectedProject.description}
                  </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-10 border-t border-slate-800/50">
                  <a 
                    href={selectedProject.demoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group relative flex-1 bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-4 rounded-2xl flex items-center justify-center gap-3 shadow-lg shadow-indigo-600/20 transition-all active:scale-95"
                  >
                    <ExternalLink size={20} className="group-hover:scale-110 transition-transform" />
                    Launch Live Site
                  </a>
                  <a 
                    href={selectedProject.repoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex-1 bg-slate-800 hover:bg-slate-700 text-white font-bold py-4 rounded-2xl flex items-center justify-center gap-3 border border-slate-700 transition-all active:scale-95"
                  >
                    <Github size={20} className="group-hover:scale-110 transition-transform" />
                    Source Repository
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      <style>{`
        .custom-scrollbar::-webkit-scrollbar {
          width: 8px;
        }
        .custom-scrollbar::-webkit-scrollbar-track {
          background: transparent;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb {
          background: #1e293b;
          border-radius: 10px;
          border: 2px solid transparent;
          background-clip: padding-box;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb:hover {
          background: #334155;
          border: 2px solid transparent;
          background-clip: padding-box;
        }
      `}</style>
    </section>
  );
};