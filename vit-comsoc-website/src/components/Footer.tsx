import { Link } from 'react-router-dom';
import { useState } from 'react';

function Footer() {
  const currentYear = new Date().getFullYear();
  const [isSocialsExpanded, setIsSocialsExpanded] = useState(false);

  return (
    <footer className="bg-white/70 backdrop-blur-lg dark:bg-void/60 border-t border-slate-300 dark:border-white/5 text-slate-600 transition-colors duration-500">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-10 md:py-12">
        <div className="flex flex-col gap-8 md:flex-row md:items-start md:justify-between">
          {/* Brand & tagline */}
          <div className="space-y-2 max-w-sm">
            <h3 className="text-lg font-semibold text-slate-800 dark:text-white">
              IEEE ComSoc VIT Vellore
            </h3>
            <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
              Shaping the future of communications—empowering the next generation
              of innovators through technology, collaboration, and learning.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-sm font-medium text-slate-600 dark:text-slate-400 uppercase tracking-wider mb-4">
              Quick Links
            </h4>
            <nav className="flex flex-col gap-3">
              <Link
                to="/"
                className="text-slate-600 dark:text-slate-400 hover:text-accent dark:hover:text-trace transition-colors duration-200 text-sm"
              >
                Home
              </Link>
              <Link
                to="/events"
                className="text-slate-600 dark:text-slate-400 hover:text-accent dark:hover:text-trace transition-colors duration-200 text-sm"
              >
                Events
              </Link>
              <Link
                to="/projects"
                className="text-slate-600 dark:text-slate-400 hover:text-accent dark:hover:text-trace transition-colors duration-200 text-sm"
              >
                Projects
              </Link>
              <Link
                to="/about"
                className="text-slate-600 dark:text-slate-400 hover:text-accent dark:hover:text-trace transition-colors duration-200 text-sm"
              >
                About Us
              </Link>
              
              {/* Expandable Socials Tab */}
              <button
                onClick={() => setIsSocialsExpanded(!isSocialsExpanded)}
                className="text-slate-600 dark:text-slate-400 hover:text-accent dark:hover:text-trace transition-colors duration-200 text-sm text-left flex items-center gap-1"
              >
                Socials
                <svg 
                  className={`w-3 h-3 transition-transform duration-200 ${isSocialsExpanded ? 'rotate-90' : ''}`} 
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
              
              {/* Expandable Socials Content */}
              {isSocialsExpanded && (
                <div className="ml-2 flex flex-col gap-2 animate-in slide-in-from-top-2 duration-200">
                  <a
                    href="https://www.linkedin.com/company/ieee-comsoc-vit"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-slate-500 dark:text-slate-500 hover:text-accent dark:hover:text-trace transition-colors duration-200 text-xs flex items-center gap-2"
                  >
                    <span className="w-4 h-4 rounded bg-quantum/10 flex items-center justify-center text-quantum text-xs">in</span>
                    LinkedIn
                  </a>
                  <a
                    href="https://www.instagram.com/ieee_comsoc_vit"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-slate-500 dark:text-slate-500 hover:text-accent dark:hover:text-trace transition-colors duration-200 text-xs flex items-center gap-2"
                  >
                    <span className="w-4 h-4 rounded bg-quantum/10 flex items-center justify-center text-quantum text-xs">ig</span>
                    Instagram
                  </a>
                  <a
                    href="https://github.com/ieee-comsoc-vit"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-slate-500 dark:text-slate-500 hover:text-accent dark:hover:text-trace transition-colors duration-200 text-xs flex items-center gap-2"
                  >
                    <span className="w-4 h-4 rounded bg-quantum/10 flex items-center justify-center text-quantum text-xs">gh</span>
                    GitHub
                  </a>
                  <a
                    href="mailto:comsoc@vit.ac.in"
                    className="text-slate-500 dark:text-slate-500 hover:text-accent dark:hover:text-trace transition-colors duration-200 text-xs flex items-center gap-2"
                  >
                    <span className="w-4 h-4 rounded bg-quantum/10 flex items-center justify-center text-quantum text-xs">@</span>
                    Email
                  </a>
                </div>
              )}
            </nav>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-10 pt-6 border-t border-slate-300 dark:border-white/5">
          <p className="text-xs text-slate-500 dark:text-slate-400 text-center md:text-left">
            © {currentYear} IEEE ComSoc VIT Vellore. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
