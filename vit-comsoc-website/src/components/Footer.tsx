import { Link } from 'react-router-dom';

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-100 border-t border-slate-200 text-slate-700">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-10 md:py-12">
        <div className="flex flex-col gap-8 md:flex-row md:items-start md:justify-between">
          {/* Brand & tagline */}
          <div className="space-y-2 max-w-sm">
            <h3 className="text-lg font-semibold text-slate-900">
              IEEE ComSoc VIT Vellore
            </h3>
            <p className="text-sm text-slate-500 leading-relaxed">
              Shaping the future of communications—empowering the next generation
              of innovators through technology, collaboration, and learning.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-sm font-medium text-slate-600 uppercase tracking-wider mb-4">
              Quick Links
            </h4>
            <nav className="flex flex-col gap-3">
              <Link
                to="/"
                className="text-slate-500 hover:text-trace transition-colors duration-200 text-sm"
              >
                Home
              </Link>
              <Link
                to="/events"
                className="text-slate-500 hover:text-trace transition-colors duration-200 text-sm"
              >
                Events
              </Link>
              <Link
                to="/about"
                className="text-slate-500 hover:text-trace transition-colors duration-200 text-sm"
              >
                About Us
              </Link>
            </nav>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-10 pt-6 border-t border-white/5">
          <p className="text-xs text-slate-500 text-center md:text-left">
            © {currentYear} IEEE ComSoc VIT Vellore. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
