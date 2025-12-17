import React, { useState } from 'react';
import { SectionId } from '../types';
import { Mail, MapPin, Phone, Github, Linkedin, Twitter, Send } from 'lucide-react';
import { RevealOnScroll } from './RevealOnScroll';

export const Contact: React.FC = () => {
  const [formStatus, setFormStatus] = useState<'idle' | 'sending' | 'sent'>('idle');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormStatus('sending');
    // Simulate API call
    setTimeout(() => {
      setFormStatus('sent');
      // Reset after 3 seconds
      setTimeout(() => setFormStatus('idle'), 3000);
    }, 1500);
  };

  return (
    <section id={SectionId.CONTACT} className="py-24 bg-slate-900 relative">
       {/* Background gradient at bottom */}
       <div className="absolute bottom-0 left-0 w-full h-1/2 bg-gradient-to-t from-black/50 to-transparent pointer-events-none"></div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          
          {/* Contact Info */}
          <RevealOnScroll>
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Let's work together</h2>
              <p className="text-slate-400 text-lg mb-12">
                Have a project in mind or want to discuss the latest tech? 
                Feel free to send me a message. I'm always open to new opportunities.
              </p>

              <div className="space-y-8">
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-indigo-500/10 rounded-lg text-indigo-400">
                    <Mail size={24} />
                  </div>
                  <div>
                    <h4 className="text-white font-medium mb-1">Email</h4>
                    <p className="text-slate-400 break-all">eduardosolano09600@gmail.com</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="p-3 bg-indigo-500/10 rounded-lg text-indigo-400">
                    <MapPin size={24} />
                  </div>
                  <div>
                    <h4 className="text-white font-medium mb-1">Location</h4>
                    <p className="text-slate-400">Cebu City, Philippines</p>
                  </div>
                </div>
              </div>

              <div className="mt-12">
                <h4 className="text-white font-medium mb-4">Connect with me</h4>
                <div className="flex gap-4">
                  {[Github, Linkedin, Twitter].map((Icon, i) => (
                    <a 
                      key={i} 
                      href="#" 
                      className="p-3 bg-slate-800 rounded-full text-slate-400 hover:bg-indigo-600 hover:text-white transition-all transform hover:-translate-y-1"
                    >
                      <Icon size={20} />
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </RevealOnScroll>

          {/* Contact Form */}
          <RevealOnScroll delay={200}>
            <div className="bg-slate-800 rounded-3xl p-8 border border-slate-700 shadow-xl">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label htmlFor="name" className="text-sm font-medium text-slate-300">Name</label>
                    <input 
                      type="text" 
                      id="name" 
                      required
                      className="w-full bg-slate-900 border border-slate-600 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 transition-all"
                      placeholder="John Doe"
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="email" className="text-sm font-medium text-slate-300">Email</label>
                    <input 
                      type="email" 
                      id="email" 
                      required
                      className="w-full bg-slate-900 border border-slate-600 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 transition-all"
                      placeholder="john@example.com"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label htmlFor="subject" className="text-sm font-medium text-slate-300">Subject</label>
                  <input 
                    type="text" 
                    id="subject" 
                    required
                    className="w-full bg-slate-900 border border-slate-600 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 transition-all"
                    placeholder="Project Inquiry"
                  />
                </div>

                <div className="space-y-2">
                  <label htmlFor="message" className="text-sm font-medium text-slate-300">Message</label>
                  <textarea 
                    id="message" 
                    rows={4}
                    required
                    className="w-full bg-slate-900 border border-slate-600 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 transition-all resize-none"
                    placeholder="Tell me about your project..."
                  ></textarea>
                </div>

                <button 
                  type="submit"
                  disabled={formStatus !== 'idle'}
                  className="w-full py-4 bg-indigo-600 text-white font-semibold rounded-lg hover:bg-indigo-700 transition-colors flex items-center justify-center gap-2 disabled:opacity-50"
                >
                  {formStatus === 'idle' && (
                    <>Send Message <Send size={18} /></>
                  )}
                  {formStatus === 'sending' && 'Sending...'}
                  {formStatus === 'sent' && 'Message Sent!'}
                </button>
              </form>
            </div>
          </RevealOnScroll>
        </div>
      </div>
    </section>
  );
};