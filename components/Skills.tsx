import React from 'react';
import { SectionId, SkillDetail } from '../types';
import { SKILLS, EDUCATION } from '../constants';
import { ChevronDown, GraduationCap, Code2, BrainCircuit } from 'lucide-react';
import { RevealOnScroll } from './RevealOnScroll';

export const Skills: React.FC = () => {
  const technicalSkills = SKILLS.find(s => s.category === "Technical Skills")?.skills || [];
  const softSkills = SKILLS.find(s => s.category === "Soft Skills")?.skills || [];

  // Type guard helper
  const isSkillDetail = (skill: string | SkillDetail): skill is SkillDetail => {
    return (skill as SkillDetail).name !== undefined;
  };

  // Helper for the gradient container
  const GradientCard = ({ children, className = "" }: { children: React.ReactNode, className?: string }) => (
    <div className={`relative group ${className}`}>
      {/* Gradient Border/Glow Effect - Matching About Me Image Style */}
      <div className="absolute -inset-[2px] bg-gradient-to-r from-indigo-500 via-purple-500 to-cyan-500 rounded-2xl opacity-50 blur-sm group-hover:opacity-100 transition duration-1000 group-hover:duration-200"></div>
      
      {/* Content Container */}
      <div className="relative bg-slate-900 rounded-2xl p-8 h-full border border-slate-800">
        {children}
      </div>
    </div>
  );

  return (
    <section id={SectionId.SKILLS} className="py-24 bg-slate-800/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <RevealOnScroll>
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Skills & Education</h2>
            <div className="w-20 h-1.5 bg-indigo-600 mx-auto rounded-full"></div>
            <p className="mt-4 text-slate-400 max-w-2xl mx-auto">
              My technical expertise, professional attributes, and academic background.
            </p>
          </div>
        </RevealOnScroll>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
          
          {/* Column 1: Technical Skills */}
          <RevealOnScroll delay={100} className="h-full">
            <GradientCard className="h-full">
              <div className="flex items-center gap-3 mb-8">
                <div className="p-3 bg-indigo-500/10 rounded-lg text-indigo-400">
                  <Code2 size={24} />
                </div>
                <h3 className="text-2xl font-bold text-white">Technical Skills</h3>
              </div>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-4 gap-y-6">
                {technicalSkills.map((skill, idx) => {
                  const skillName = isSkillDetail(skill) ? skill.name : skill;
                  const skillLevel = isSkillDetail(skill) ? skill.level : 0;

                  return (
                    <div key={idx} className="group/skill relative">
                      <div className="flex items-center gap-3 text-slate-300 cursor-default">
                        {/* Down Arrow instead of Check */}
                        <ChevronDown 
                          size={18} 
                          className="text-indigo-500/70 group-hover/skill:text-indigo-400 transition-transform duration-300 group-hover/skill:rotate-180 shrink-0" 
                        />
                        <span className="group-hover/skill:text-white transition-colors text-sm font-medium">
                          {skillName}
                        </span>
                      </div>
                      
                      {/* Percentage Bar on Hover (White rectangle with Green inside and text) */}
                      {isSkillDetail(skill) && (
                        <div className="absolute left-0 right-0 -bottom-6 opacity-0 group-hover/skill:opacity-100 transition-all duration-300 z-10 pointer-events-none translate-y-1 group-hover/skill:translate-y-0">
                           <div className="h-4 w-full bg-white rounded-md overflow-hidden shadow-lg flex items-center relative">
                             {/* Green Progress Fill */}
                             <div 
                               className="h-full bg-green-500 transition-all duration-500 ease-out" 
                               style={{ width: `${skillLevel}%` }}
                             ></div>
                             {/* Percentage Text Overlay */}
                             <span className="absolute inset-0 flex items-center justify-center text-[10px] font-bold text-slate-900 drop-shadow-sm">
                               {skillLevel}%
                             </span>
                           </div>
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            </GradientCard>
          </RevealOnScroll>

          {/* Column 2: Soft Skills & Education */}
          <div className="space-y-8">
            
            {/* Soft Skills */}
            <RevealOnScroll delay={200}>
              <GradientCard>
                <div className="flex items-center gap-3 mb-6">
                  <div className="p-3 bg-indigo-500/10 rounded-lg text-indigo-400">
                    <BrainCircuit size={24} />
                  </div>
                  <h3 className="text-2xl font-bold text-white">Soft Skills</h3>
                </div>
                
                <div className="flex flex-wrap gap-3">
                  {softSkills.map((skill, idx) => {
                     const skillName = isSkillDetail(skill) ? skill.name : skill;
                     return (
                      <span 
                        key={idx} 
                        className="px-4 py-2 bg-slate-800 text-indigo-200 text-sm font-medium rounded-lg border border-slate-700/50 hover:bg-indigo-900/20 hover:border-indigo-500/30 transition-all cursor-default"
                      >
                        {skillName}
                      </span>
                     );
                  })}
                </div>
              </GradientCard>
            </RevealOnScroll>

            {/* Education */}
            <RevealOnScroll delay={300}>
              <GradientCard className="h-full">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="p-3 bg-indigo-500/10 rounded-lg text-indigo-400">
                      <GraduationCap size={24} />
                    </div>
                    <h3 className="text-2xl font-bold text-white">Education</h3>
                  </div>

                  <div className="space-y-8">
                    {EDUCATION.map((edu, idx) => (
                      <div key={idx} className="relative pl-8 border-l-2 border-slate-700/50 group/item">
                        {/* Dot */}
                        <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-slate-900 border-2 border-indigo-500 shadow-[0_0_10px_rgba(99,102,241,0.5)] group-hover/item:scale-125 transition-transform"></div>
                        
                        {/* Year Badge */}
                        {edu.year && (
                          <div className="mb-2">
                             <span className="inline-block px-2 py-0.5 rounded-md bg-indigo-500/10 border border-indigo-500/20 text-indigo-300 text-xs font-semibold">
                               {edu.year}
                             </span>
                          </div>
                        )}

                        <h4 className="text-lg font-bold text-white group-hover/item:text-indigo-400 transition-colors">{edu.school}</h4>
                        <p className="text-slate-400 text-sm mt-1">{edu.degree}</p>
                      </div>
                    ))}
                  </div>
              </GradientCard>
            </RevealOnScroll>

          </div>
        </div>
      </div>
    </section>
  );
};