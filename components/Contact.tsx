import React, { useState } from 'react';
import { SectionId } from '../types';
import { Mail, MapPin, Linkedin, Facebook, Instagram, Send, Briefcase, UserCheck, CheckCircle, AlertCircle } from 'lucide-react';
import { RevealOnScroll } from './RevealOnScroll';

export const Contact: React.FC = () => {
  const [formStatus, setFormStatus] = useState<'idle' | 'sending' | 'sent' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setFormStatus('sending');

    const formData = new FormData(e.currentTarget);
    const data = Object.fromEntries(formData.entries());

    try {
      // Using FormSubmit.co AJAX endpoint to send the email directly to Gmail
      const response = await fetch("https://formsubmit.co/ajax/eduardosolano09600@gmail.com", {
        method: "POST",
        headers: { 
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        },
        body: JSON.stringify({
            ...data,
            _subject: `New Hire Inquiry from ${data.company || 'Portfolio'}`,
            _template: 'table' // Professional looking email template
        })
      });

      if (response.ok) {
        setFormStatus('sent');
        // Reset form after success
        const form = e.target as HTMLFormElement;
        form.reset();
        setTimeout(() => setFormStatus('idle'), 5000);
      } else {
        throw new Error("Failed to send message");
      }
    } catch (error) {
      console.error("Form error:", error);
      setFormStatus('error');
      setTimeout(() => setFormStatus('idle'), 4000);
    }
  };

  const socialLinks = [
    { name: 'Facebook', icon: Facebook, url: 'https://www.facebook.com/eduardo.solano.135129/', color: 'hover:bg-blue-600' },
    { name: 'Instagram', icon: Instagram, url: 'https://www.instagram.com/itsmed3ath/', color: 'hover:bg-pink-600' },
    { name: 'LinkedIn', icon: Linkedin, url: 'https://www.linkedin.com/in/eduardo-solano-ab126a37a/', color: 'hover:bg-blue-700' },
    { name: 'Gmail', icon: Mail, url: 'mailto:eduardosolano09600@gmail.com', color: 'hover:bg-red-500' },
  ];

  return (
    <section id={SectionId.CONTACT} className="py-24 bg-slate-900 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-indigo-500/5 blur-[120px] rounded-full pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 w-1/3 h-1/3 bg-cyan-500/5 blur-[120px] rounded-full pointer-events-none"></div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          
          {/* Contact Info & Description */}
          <RevealOnScroll>
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 text-xs font-bold uppercase tracking-widest mb-6">
                <UserCheck size={14} /> Contact Me
              </div>
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-8 leading-tight">
                Let's Build Something <span className="text-indigo-500">Amazing</span>
              </h2>
              <p className="text-slate-400 text-lg leading-relaxed mb-10 italic">
                "I am an inspiring developer passionate about building projects and improving my skills. I'm eager to apply my knowledge, gain hands-on experience and continue learning from real-world opportunities. If you're looking someone motivated, hardworking, and excited to grow, I'd love to hear from you."
              </p>

              <div className="space-y-6 mb-12">
                <div className="group flex items-center gap-4">
                  <div className="p-3 bg-slate-800 rounded-xl text-indigo-400 border border-slate-700 group-hover:border-indigo-500 transition-colors">
                    <Mail size={22} />
                  </div>
                  <div>
                    <h4 className="text-slate-500 text-xs font-bold uppercase tracking-widest">Direct Mail</h4>
                    <p className="text-slate-200 font-medium">eduardosolano09600@gmail.com</p>
                  </div>
                </div>

                <div className="group flex items-center gap-4">
                  <div className="p-3 bg-slate-800 rounded-xl text-indigo-400 border border-slate-700 group-hover:border-indigo-500 transition-colors">
                    <MapPin size={22} />
                  </div>
                  <div>
                    <h4 className="text-slate-500 text-xs font-bold uppercase tracking-widest">Base Location</h4>
                    <p className="text-slate-200 font-medium">Cebu City, Philippines</p>
                  </div>
                </div>
              </div>

              <div>
                <h4 className="text-white font-bold mb-6 text-sm uppercase tracking-wider">Social Networks</h4>
                <div className="flex flex-wrap gap-4">
                  {socialLinks.map((social) => (
                    <a 
                      key={social.name} 
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`p-4 bg-slate-800 rounded-2xl text-slate-400 ${social.color} hover:text-white transition-all transform hover:-translate-y-2 border border-slate-700 shadow-xl`}
                      aria-label={social.name}
                    >
                      <social.icon size={24} />
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </RevealOnScroll>

          {/* Contact Form - Applicant Styled */}
          <RevealOnScroll delay={200}>
            <div className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-indigo-500 to-cyan-500 rounded-3xl opacity-20 blur group-hover:opacity-40 transition duration-1000"></div>
              <div className="relative bg-slate-800/80 backdrop-blur-xl rounded-3xl p-8 border border-slate-700 shadow-2xl">
                <div className="flex items-center gap-3 mb-8">
                  <div className="p-2 bg-indigo-500 rounded-lg text-white">
                    <Briefcase size={20} />
                  </div>
                  <h3 className="text-xl font-bold text-white">Hire for Opportunities</h3>
                </div>

                <form onSubmit={handleSubmit} className="space-y-5">
                  {/* Honeypot anti-spam */}
                  <input type="text" name="_honey" style={{ display: 'none' }} />
                  
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div className="space-y-2">
                      <label htmlFor="company" className="text-xs font-bold text-slate-400 uppercase tracking-widest">Company / Name</label>
                      <input 
                        type="text" 
                        id="company" 
                        name="company"
                        required
                        className="w-full bg-slate-900/50 border border-slate-700 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 transition-all placeholder:text-slate-600"
                        placeholder="Your Company Inc."
                      />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="email" className="text-xs font-bold text-slate-400 uppercase tracking-widest">Contact Email</label>
                      <input 
                        type="email" 
                        id="email" 
                        name="email"
                        required
                        className="w-full bg-slate-900/50 border border-slate-700 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 transition-all placeholder:text-slate-600"
                        placeholder="hr@company.com"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="position" className="text-xs font-bold text-slate-400 uppercase tracking-widest">Proposed Position / Subject</label>
                    <input 
                      type="text" 
                      id="position" 
                      name="position"
                      required
                      className="w-full bg-slate-900/50 border border-slate-700 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 transition-all placeholder:text-slate-600"
                      placeholder="Junior Web Developer / Internship"
                    />
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="message" className="text-xs font-bold text-slate-400 uppercase tracking-widest">Job Details / Message</label>
                    <textarea 
                      id="message" 
                      name="message"
                      rows={4}
                      required
                      className="w-full bg-slate-900/50 border border-slate-700 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 transition-all resize-none placeholder:text-slate-600"
                      placeholder="Describe the opportunity or project requirements..."
                    ></textarea>
                  </div>

                  <button 
                    type="submit"
                    disabled={formStatus === 'sending' || formStatus === 'sent'}
                    className={`group w-full py-4 font-bold rounded-xl shadow-lg transition-all flex items-center justify-center gap-3 active:scale-95 ${
                      formStatus === 'sent' 
                        ? 'bg-green-600 hover:bg-green-500 text-white shadow-green-600/20' 
                        : formStatus === 'error'
                        ? 'bg-red-600 hover:bg-red-500 text-white'
                        : 'bg-indigo-600 hover:bg-indigo-500 text-white shadow-indigo-600/20'
                    }`}
                  >
                    {formStatus === 'idle' && (
                      <>Submit Interest <Send size={18} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" /></>
                    )}
                    {formStatus === 'sending' && (
                      <span className="flex items-center gap-2">
                        <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                        Processing...
                      </span>
                    )}
                    {formStatus === 'sent' && (
                      <span className="flex items-center gap-2">
                        <CheckCircle size={18} /> Sent Successfully!
                      </span>
                    )}
                    {formStatus === 'error' && (
                      <span className="flex items-center gap-2">
                        <AlertCircle size={18} /> Error! Try again.
                      </span>
                    )}
                  </button>
                  <p className="text-center text-[10px] text-slate-500 uppercase tracking-widest mt-4">
                    Responses are delivered directly to Eduardo's Gmail
                  </p>
                </form>
              </div>
            </div>
          </RevealOnScroll>
        </div>
      </div>
    </section>
  );
};