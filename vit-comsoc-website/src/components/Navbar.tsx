import { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import ThemeToggle from './ThemeToggle';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  // Close menu when a link is clicked
  const closeMenu = () => setIsOpen(false);

  return (
    <nav className="sticky top-0 z-50 w-full border-b border-slate-300/60 dark:border-trace/20 bg-slate-200/90 dark:bg-void/80 backdrop-blur-md transition-colors duration-500">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2" onClick={closeMenu}>
            <span className="h-3 w-3 rounded-full bg-accent dark:bg-trace animate-pulse" />
            <span className="text-xl font-bold text-slate-800 dark:text-white tracking-tight">IEEE ComSoc</span>
          </Link>

          {/* Desktop Menu (Hidden on mobile) */}
          <div className="hidden md:flex md:items-center md:gap-2">
            <div className="ml-10 flex items-baseline space-x-8">
              <Link to="/" className="text-slate-600 hover:text-accent dark:text-white/80 dark:hover:text-trace transition-colors px-3 py-2 rounded-md text-sm font-medium">Home</Link>
              <Link to="/events" className="text-slate-600 hover:text-accent dark:text-white/80 dark:hover:text-trace transition-colors px-3 py-2 rounded-md text-sm font-medium">Events</Link>
              <Link to="/about" className="text-slate-600 hover:text-accent dark:text-white/80 dark:hover:text-trace transition-colors px-3 py-2 rounded-md text-sm font-medium">About Us</Link>
            </div>
            <ThemeToggle />
          </div>

          {/* Right side: theme toggle (mobile) + hamburger */}
          <div className="-mr-2 flex items-center gap-1 md:hidden">
            <ThemeToggle />
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center rounded-md bg-slate-300/80 dark:bg-surface p-2 text-accent dark:text-trace hover:bg-slate-300 dark:hover:bg-surface/80 focus:outline-none focus:ring-2 focus:ring-accent dark:focus:ring-trace"
              aria-expanded={isOpen}
            >
              <span className="sr-only">Open main menu</span>
              {/* SVG icon switches based on isOpen state */}
              {isOpen ? (
                <svg className="block h-6 w-6" stroke="currentColor" fill="none" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className="block h-6 w-6" stroke="currentColor" fill="none" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="md:hidden border-t border-slate-300/60 dark:border-trace/20 bg-slate-200/95 dark:bg-surface"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
          >
            <div className="space-y-1 px-2 pb-3 pt-2 sm:px-3">
              <Link to="/" onClick={closeMenu} className="block text-slate-700 hover:text-accent dark:text-white/90 dark:hover:text-trace hover:bg-slate-300/50 dark:hover:bg-void/50 px-3 py-2 rounded-md text-base font-medium">Home</Link>
              <Link to="/events" onClick={closeMenu} className="block text-slate-700 hover:text-accent dark:text-white/90 dark:hover:text-trace hover:bg-slate-300/50 dark:hover:bg-void/50 px-3 py-2 rounded-md text-base font-medium">Events</Link>
              <Link to="/about" onClick={closeMenu} className="block text-slate-700 hover:text-accent dark:text-white/90 dark:hover:text-trace hover:bg-slate-300/50 dark:hover:bg-void/50 px-3 py-2 rounded-md text-base font-medium">About Us</Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}

export default Navbar;