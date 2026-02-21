import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav className="text-slate-100 shadow-lg" style={{ backgroundColor: 'rgba(5, 5, 10, 1)' }}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-14" style={{ backgroundColor: 'var(--color-void)' }}>
          <Link
            to="/"
            className="text-lg font-semibold text-white hover:text-amber-400 transition-colors duration-200"
          >
            IEEE ComSoc
          </Link>
          <div className="flex gap-6">
            <Link
              to="/"
              className="text-slate-300 hover:text-white hover:underline underline-offset-4 transition-colors duration-200"
            >
              Home
            </Link>
            <Link
              to="/events"
              className="text-slate-300 hover:text-white hover:underline underline-offset-4 transition-colors duration-200"
            >
              Events
            </Link>
            <Link
              to="/about"
              className="text-slate-300 hover:text-white hover:underline underline-offset-4 transition-colors duration-200"
            >
              About
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
