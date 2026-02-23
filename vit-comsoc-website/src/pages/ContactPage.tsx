import React, { useState } from 'react';
import Terminal from '../components/Terminal';

const ContactPage: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isTerminalOpen, setIsTerminalOpen] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Handle form submission here
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  return (
    <div className="min-h-screen flex flex-col items-center px-4 py-12 relative bg-transparent overflow-hidden">
      {/* Subtle grid background for tech feel (shared with other pages) */}
      <div
        className="absolute inset-0 bg-[linear-gradient(rgba(0,229,255,0.04)_1px,transparent_1px),linear-gradient(90deg,rgba(0,229,255,0.04)_1px,transparent_1px)] bg-[size:4rem_4rem] pointer-events-none"
        aria-hidden
      />

      <div className="relative w-full max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-text-light dark:text-white mb-4">
            Get in Touch
          </h1>
          <p className="text-lg text-text-light/80 dark:text-white/70 max-w-2xl mx-auto">
            Let's build something together. Drop us a message for collaborations or questions.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="bg-white/85 dark:bg-slate-800/75 backdrop-blur-sm border border-slate-300 dark:border-slate-700 rounded-xl p-8">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-text-light dark:text-white mb-2 font-mono">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-slate-300 dark:border-slate-600 rounded-lg bg-white/50 dark:bg-slate-900/50 text-text-light dark:text-white font-mono focus:outline-none focus:ring-2 focus:ring-quantum dark:focus:ring-trace focus:border-quantum dark:focus:border-trace transition-colors"
                  placeholder="Your name"
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-text-light dark:text-white mb-2 font-mono">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-slate-300 dark:border-slate-600 rounded-lg bg-white/50 dark:bg-slate-900/50 text-text-light dark:text-white font-mono focus:outline-none focus:ring-2 focus:ring-quantum dark:focus:ring-trace focus:border-quantum dark:focus:border-trace transition-colors"
                  placeholder="your.email@example.com"
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-text-light dark:text-white mb-2 font-mono">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={6}
                  className="w-full px-4 py-3 border border-slate-300 dark:border-slate-600 rounded-lg bg-white/50 dark:bg-slate-900/50 text-text-light dark:text-white font-mono focus:outline-none focus:ring-2 focus:ring-quantum dark:focus:ring-trace focus:border-quantum dark:focus:border-trace transition-colors resize-none"
                  placeholder="Your message here..."
                />
              </div>
              
              <button
                type="submit"
                className="w-full bg-quantum dark:bg-trace text-white dark:text-void font-semibold py-3 px-6 rounded-lg hover:bg-quantum/90 dark:hover:bg-trace/90 transition-colors focus:outline-none focus:ring-2 focus:ring-quantum dark:focus:ring-trace focus:ring-offset-2"
              >
                Submit
              </button>
            </form>
          </div>
          
          {/* Terminal Section */}
          <div className="relative">
            {/* Open Terminal Button */}
            {!isTerminalOpen && (
              <button
                onClick={() => setIsTerminalOpen(true)}
                className="w-full h-full min-h-[400px] rounded-xl border-2 border-dashed border-slate-300 dark:border-slate-600 bg-white/50 dark:bg-slate-800/50 backdrop-blur-sm flex items-center justify-center hover:border-quantum dark:hover:border-trace transition-colors group"
              >
                <div className="text-center">
                  <div className="w-16 h-16 rounded-full bg-quantum/20 dark:bg-trace/20 flex items-center justify-center mx-auto mb-4 group-hover:bg-quantum/30 dark:group-hover:bg-trace/30 transition-colors">
                    <svg className="w-8 h-8 text-quantum dark:text-trace" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 9l3 3-3-3-3m0 6l3-3m-6 3h6a2 2 0 002-2V7a2 2 0 00-2-2H6a2 2 0 00-2 2v8a2 2 0 002 2z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 3h6a2 2 0 012 2v8a2 2 0 01-2 2h-6" />
                    </svg>
                  </div>
                  <p className="text-lg font-semibold text-text-light dark:text-white mb-2">Open Terminal</p>
                  <p className="text-sm text-text-light/60 dark:text-white/60">Interactive command interface</p>
                </div>
              </button>
            )}
            
            {/* Terminal Component */}
            {isTerminalOpen && (
              <div className="relative">
                <button
                  onClick={() => setIsTerminalOpen(false)}
                  className="absolute -top-2 -right-2 z-20 w-8 h-8 rounded-full bg-slate-200 dark:bg-slate-700 border border-slate-300 dark:border-slate-600 flex items-center justify-center hover:bg-slate-300 dark:hover:bg-slate-600 transition-colors"
                  aria-label="Close terminal"
                >
                  <svg className="w-4 h-4 text-text-light dark:text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
                <Terminal />
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
