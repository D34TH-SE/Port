import React, { useState } from 'react';
import { SectionId } from '../types';
import { LONG_BIO } from '../constants';
import { RevealOnScroll } from './RevealOnScroll';
import { FileText, Play, X, Calendar, User, Globe, GraduationCap, Mail, MapPin } from 'lucide-react';

export const About: React.FC = () => {
  const [isVideoOpen, setIsVideoOpen] = useState(false);

  // Personal Information Data
  const personalInfo = [
    { icon: Calendar, label: "Birthday", value: "September 6, 2000" },
    { icon: User, label: "Age", value: "24" },
    { icon: Globe, label: "Languages", value: "English / Tagalog / Cebuano" },
    { icon: GraduationCap, label: "Degree", value: "BSIT Software Engineering" },
    { icon: Mail, label: "Email", value: "eduardosolano09600@gmail.com" },
    { icon: MapPin, label: "City", value: "Cebu City, Philippines" },
  ];

  return (
    <section id={SectionId.ABOUT} className="py-24 bg-slate-900/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <RevealOnScroll>
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">About Me</h2>
            <div className="w-20 h-1.5 bg-indigo-600 mx-auto rounded-full"></div>
          </div>
        </RevealOnScroll>

        <div className="grid grid-cols-1 2xl:grid-cols-2 gap-12 items-stretch">
          
          {/* Block 1: Personal Info & Image */}
          <RevealOnScroll delay={200} className="h-full">
            <div className="bg-slate-800/50 p-6 md:p-8 rounded-2xl border border-slate-700 h-full hover:border-indigo-500/30 transition-colors flex flex-col justify-center">
              <h3 className="text-xl font-bold text-white mb-6 border-b border-slate-700 pb-4">Personal Details</h3>
              
              <div className="flex flex-col-reverse md:flex-row gap-6 md:gap-8 items-center">
                
                {/* Details List */}
                <ul className="space-y-4 flex-1 w-full">
                  {personalInfo.map((item, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <div className="p-2 bg-indigo-500/10 rounded-lg text-indigo-400 mt-0.5 shrink-0">
                        <item.icon size={18} />
                      </div>
                      <div className="min-w-0 flex-1">
                        <span className="block text-xs font-bold text-slate-500 uppercase tracking-wider mb-0.5">{item.label}</span>
                        <span className="block text-slate-200 font-medium break-all text-sm leading-snug">{item.value}</span>
                      </div>
                    </li>
                  ))}
                </ul>

                {/* Profile Image - Right Side - Balanced Size */}
                <div className="w-full md:w-5/12 max-w-[280px] shrink-0 relative group">
                    {/* Gradient Border/Glow Effect */}
                    <div className="absolute -inset-1 bg-gradient-to-r from-indigo-500 via-purple-500 to-cyan-500 rounded-2xl opacity-75 blur-sm group-hover:opacity-100 transition duration-1000 group-hover:duration-200"></div>
                    
                    <div className="relative w-full aspect-[3/4] rounded-xl overflow-hidden shadow-2xl border border-slate-700/50 bg-slate-900">
                      <div className="absolute inset-0 bg-indigo-500/10 group-hover:bg-transparent transition-colors z-10"></div>
                      <img 
                        src="/img/Formal-pic.jpg" 
                        alt="Profile" 
                        className="w-full h-full object-cover transform group-hover:scale-105 transition duration-700"
                      />
                    </div>
                </div>

              </div>
            </div>
          </RevealOnScroll>

          {/* Block 2: Personal Statement & Actions */}
          <RevealOnScroll delay={400} className="h-full">
             <div className="flex flex-col h-full">
              <div className="bg-slate-800/30 p-8 rounded-2xl border border-slate-700/50 flex-1 relative overflow-hidden">
                {/* Decorative quote icon */}
                <div className="absolute top-4 right-6 text-7xl text-indigo-500/5 font-serif select-none">"</div>
                
                <h3 className="text-xl font-bold text-white mb-6 border-b border-slate-700 pb-4">My Story</h3>
                <div className="space-y-5 text-slate-300 leading-relaxed text-lg">
                  {LONG_BIO.split('\n\n').map((paragraph, index) => (
                    <p key={index}>{paragraph}</p>
                  ))}
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-wrap gap-4 mt-8">
                <a 
                  href="https://drive.google.com/file/d/1aK6v5mog7Mj8Sdne-EHvRWzaVKofwCpe/view?usp=sharing"
                  target="_blank"
                  rel="noopener noreferrer" 
                  className="flex-1 min-w-[160px] px-6 py-4 rounded-xl bg-indigo-600 text-white font-semibold hover:bg-indigo-700 transition-all shadow-lg hover:shadow-indigo-500/25 flex items-center justify-center gap-2 transform hover:-translate-y-1"
                >
                  <FileText size={20} />
                  View My CV
                </a>

                <button 
                  onClick={() => setIsVideoOpen(true)}
                  className="flex-1 min-w-[160px] px-6 py-4 rounded-xl border border-slate-600 text-slate-300 font-medium hover:bg-slate-800 hover:text-white hover:border-white transition-all flex items-center justify-center gap-2 transform hover:-translate-y-1"
                >
                  <Play size={20} />
                  Video Intro
                </button>
              </div>
            </div>
          </RevealOnScroll>
        </div>

        {/* Video Modal */}
        {isVideoOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-sm animate-in fade-in duration-200">
            <div 
              className="absolute inset-0" 
              onClick={() => setIsVideoOpen(false)}
            ></div>
            
            <div className="relative w-full max-w-4xl bg-slate-900 rounded-2xl overflow-hidden shadow-2xl border border-slate-700 animate-in zoom-in-95 duration-200">
               <button 
                  onClick={() => setIsVideoOpen(false)}
                  className="absolute top-4 right-4 z-10 p-2 bg-black/50 hover:bg-black/70 text-white rounded-full transition-colors backdrop-blur-md"
                  aria-label="Close video"
               >
                 <X size={24} />
               </button>

               <div className="aspect-video bg-black">
                  <iframe 
                    className="w-full h-full"
                    src="https://www.youtube.com/embed/px1B2LTHI1s?autoplay=1" 
                    title="Video Introduction"
                    frameBorder="0" 
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                    allowFullScreen
                  ></iframe>
               </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};