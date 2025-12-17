import React, { useState } from 'react';
import { SectionId, Project } from '../types';
import { PROJECTS } from '../constants';
import { Github, ExternalLink, X, Globe, Loader2 } from 'lucide-react';
import { RevealOnScroll } from './RevealOnScroll';

export const Works: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [isIframeLoading, setIsIframeLoading] = useState(true);

  const openPreview = (e: React.MouseEvent, project: Project) => {
    e.preventDefault();
    setSelectedProject(project);
    setIsIframeLoading(true);
  };

  const closePreview = () => {
    setSelectedProject(null);
  };

  return (
    <section id={SectionId.WORKS} className="py-24">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <RevealOnScroll>
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Featured Works</h2>
            <div className="w-20 h-1.5 bg-indigo-600 mx-auto rounded-full"></div>
            <p className="mt-4 text-slate-400">A collection of my recent developments and engineering projects.</p>
          </div>
        </RevealOnScroll>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {PROJECTS.map((project, index) => (
            <RevealOnScroll key={project.id} delay={index * 100}>
              <div 
                className="group bg-slate-800 rounded-2xl overflow-hidden border border-slate-700 hover:shadow-2xl hover:shadow-indigo-500/10 transition-all duration-500 flex flex-col hover:-translate-y-2 h-full aspect-square relative"
              >
                <div className="relative h-2/5 overflow-hidden">
                  <div className="absolute inset-0 bg-slate-900/40 group-hover:bg-indigo-900/10 transition-colors z-10"></div>
                  <img 
                    src={project.imageUrl} 
                    alt={project.title} 
                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                    onError={(e) => {
                      (e.target as HTMLImageElement).src = `https://picsum.photos/800/600?random=${project.id}`;
                    }}
                  />
                  <div className="absolute top-4 left-4 z-20 px-3 py-1 bg-indigo-600/80 backdrop-blur-md rounded-full text-[10px] font-bold text-white uppercase tracking-widest">
                    Project 0{index + 1}
                  </div>
                </div>

                <div className="p-8 flex-1 flex flex-col justify-between bg-gradient-to-b from-slate-800 to-slate-900">
                  <div>
                    <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-indigo-400 transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-slate-400 text-sm mb-6 line-clamp-3 leading-relaxed">
                      {project.description}
                    </p>
                    
                    <div className="flex flex-wrap gap-2">
                      {project.tags.map((tag) => (
                        <span 
                          key={tag} 
                          className="px-2.5 py-1 text-[10px] font-bold bg-slate-700/50 text-indigo-300 rounded-md border border-slate-600/30 uppercase tracking-wider"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="flex items-center gap-6 mt-6 pt-6 border-t border-slate-700/50">
                    <button 
                      onClick={(e) => openPreview(e, project)}
                      className="flex items-center gap-2 text-sm font-semibold text-white hover:text-indigo-400 transition-colors group/btn"
                    >
                      <ExternalLink size={18} className="group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform" /> 
                      Live Demo
                    </button>
                    <a 
                      href={project.repoUrl} 
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-sm font-semibold text-slate-400 hover:text-white transition-colors ml-auto"
                    >
                      <Github size={18} /> Code
                    </a>
                  </div>
                </div>
              </div>
            </RevealOnScroll>
          ))}
        </div>
      </div>

      {selectedProject && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-slate-950/90 backdrop-blur-md animate-in fade-in duration-300">
          <div className="absolute inset-0" onClick={closePreview}></div>
          
          <div className="relative w-full max-w-6xl bg-slate-900 rounded-2xl overflow-hidden shadow-2xl border border-slate-700 animate-in zoom-in-95 duration-300 flex flex-col h-[85vh]">
            {/* Modal Header */}
            <div className="flex items-center justify-between p-4 border-b border-slate-800 bg-slate-900/80 backdrop-blur-sm z-20">
              <div className="flex items-center gap-4">
                <div className="p-2 bg-indigo-500/10 rounded-lg text-indigo-400">
                  <Globe size={20} />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-white leading-tight">{selectedProject.title}</h3>
                  <p className="text-xs text-slate-500">Live Interactive Preview</p>
                </div>
              </div>
              <button 
                onClick={closePreview}
                className="p-2 bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white rounded-full transition-all border border-slate-700 shadow-lg group"
                aria-label="Close preview"
              >
                <X size={24} className="group-hover:rotate-90 transition-transform duration-300" />
              </button>
            </div>

            {/* Browser-like body */}
            <div className="flex-1 bg-white relative">
              {selectedProject.demoUrl && selectedProject.demoUrl !== "#" ? (
                <>
                  {isIframeLoading && (
                    <div className="absolute inset-0 flex flex-col items-center justify-center bg-slate-900 z-10">
                      <Loader2 size={48} className="text-indigo-500 animate-spin mb-4" />
                      <p className="text-slate-400 font-medium">Loading project demo...</p>
                    </div>
                  )}
                  <iframe 
                    src={selectedProject.demoUrl} 
                    className="w-full h-full border-none"
                    title={`${selectedProject.title} Demo`}
                    onLoad={() => setIsIframeLoading(false)}
                  />
                </>
              ) : (
                <div className="w-full h-full flex flex-col items-center justify-center bg-slate-900 text-center p-8">
                  <div className="p-6 bg-slate-800 rounded-3xl mb-6">
                    <img 
                      src={selectedProject.imageUrl} 
                      alt={selectedProject.title} 
                      className="max-h-[40vh] rounded-xl shadow-2xl"
                      onError={(e) => {
                        (e.target as HTMLImageElement).src = `https://picsum.photos/1200/800?random=${selectedProject.id}`;
                      }}
                    />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-2">Demo Coming Soon</h3>
                  <p className="text-slate-400 max-w-md">
                    This project is currently being deployed. Please check back later or view the source code on GitHub.
                  </p>
                </div>
              )}
            </div>
            
            {/* Modal Footer/Address Bar Mockup */}
            <div className="bg-slate-800 px-4 py-2 border-t border-slate-700 flex items-center gap-4">
              <div className="hidden sm:flex gap-2">
                <div className="w-3 h-3 rounded-full bg-slate-700"></div>
                <div className="w-3 h-3 rounded-full bg-slate-700"></div>
                <div className="w-3 h-3 rounded-full bg-slate-700"></div>
              </div>
              <div className="flex-1 bg-slate-900 rounded-md py-1.5 px-4 text-xs text-slate-500 font-mono truncate">
                {selectedProject.demoUrl !== "#" ? selectedProject.demoUrl : `internal://${selectedProject.title.toLowerCase().replace(/\s/g, '-')}.local`}
              </div>
              <a 
                href={selectedProject.demoUrl !== "#" ? selectedProject.demoUrl : undefined}
                target="_blank"
                rel="noopener noreferrer"
                className="text-indigo-400 hover:text-indigo-300 text-xs font-bold uppercase tracking-wider flex items-center gap-1 shrink-0"
              >
                Open in new tab <ExternalLink size={12} />
              </a>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};