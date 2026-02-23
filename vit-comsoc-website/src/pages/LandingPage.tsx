import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const MotionLink = motion(Link);

function LandingPage() {
  return (
    <section className="min-h-[calc(100vh-4rem)] flex flex-col items-center justify-center px-4 sm:px-6 lg:px-8 py-16 sm:py-24 overflow-hidden relative bg-transparent">
      {/* Subtle grid background for tech feel */}
      <div
        className="absolute inset-0 bg-[linear-gradient(rgba(0,229,255,0.04)_1px,transparent_1px),linear-gradient(90deg,rgba(0,229,255,0.04)_1px,transparent_1px)] bg-[size:4rem_4rem] pointer-events-none"
        aria-hidden
      />

      <div className="relative w-full max-w-4xl mx-auto text-center">
        {/* Badge / label */}
        <p className="inline-flex items-center gap-1.5 rounded-full border border-accent/40 bg-accent/10 dark:border-trace/40 dark:bg-trace/10 px-4 py-1.5 text-sm font-medium text-accent dark:text-trace mb-6 sm:mb-8">
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent dark:bg-trace opacity-75" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-accent dark:bg-trace" />
          </span>
          IEEE ComSoc · VIT Vellore
        </p>

        {/* Headline */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-4 sm:mb-6"
        >
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black tracking-tight text-text-light dark:text-white">
            <span className="block">The Future is</span>
            <span className="block relative">
              <span className="relative z-10 text-accent dark:bg-gradient-to-r dark:from-quantum/90 dark:via-trace/80 dark:to-quantum/90 dark:bg-clip-text dark:text-transparent">Wireless.</span>
              <span className="absolute inset-0 text-quantum/20 blur-sm font-black dark:block hidden" aria-hidden="true">Wireless.</span>
            </span>
            <span className="block">We're Building the</span>
            <span className="block relative">
              <span className="relative z-10 text-accent dark:bg-gradient-to-r dark:from-quantum/90 dark:via-trace/80 dark:to-quantum/90 dark:bg-clip-text dark:text-transparent">Antennas.</span>
              <span className="absolute inset-0 text-quantum/20 blur-sm font-black dark:block hidden" aria-hidden="true">Antennas.</span>
            </span>
          </h1>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="mb-6 sm:mb-8"
        >
          <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold text-accent dark:text-trace/90 max-w-3xl mx-auto">
            Defining the Next Generation of Connectivity.
          </h2>
        </motion.div>

        {/* Description */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mb-8 sm:mb-10"
        >
          <p className="text-base sm:text-lg md:text-xl text-text-light/80 dark:text-white/70 max-w-3xl mx-auto leading-relaxed">
            Communication is the heartbeat of modern civilization. From the first telegraph to today's satellite networks, we've always sought to connect faster, farther, and more reliably. At IEEE ComSoc VIT Vellore, we're not just studying this evolution—we're driving it. Our members design next-generation antennas, optimize network protocols, and explore the frontiers of wireless communication, preparing to solve the connectivity challenges of tomorrow.
          </p>
        </motion.div>

        {/* CTA buttons */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4"
        >
          <MotionLink
            to="/events"
            className="w-full sm:w-auto inline-flex items-center justify-center rounded-lg bg-accent dark:bg-trace px-6 py-3.5 text-base font-semibold text-white dark:text-void shadow-lg shadow-accent/25 dark:shadow-trace/25 transition-colors hover:bg-accent/90 dark:hover:bg-trace/90 active:scale-[0.98] focus:outline-none focus:ring-2 focus:ring-accent dark:focus:ring-trace focus:ring-offset-2 focus:ring-offset-day dark:focus:ring-offset-void"
            whileHover={{
              scale: 1.05,
              boxShadow: '0 0 24px var(--color-accent)',
            }}
          >
            Riviera Fest Events
          </MotionLink>
          <Link
            to="/projects"
            className="w-full sm:w-auto inline-flex items-center justify-center rounded-lg border border-slate-300 dark:border-surface bg-slate-200/80 dark:bg-surface/80 px-6 py-3.5 text-base font-semibold text-text-light dark:text-white transition-all hover:bg-slate-300/80 dark:hover:bg-surface hover:border-accent/50 dark:hover:border-trace/50 focus:outline-none focus:ring-2 focus:ring-accent dark:focus:ring-quantum focus:ring-offset-2 focus:ring-offset-day dark:focus:ring-offset-void"
          >
            Projects
          </Link>
          <Link
            to="/about"
            className="w-full sm:w-auto inline-flex items-center justify-center rounded-lg border border-slate-300 dark:border-surface bg-slate-200/80 dark:bg-surface/80 px-6 py-3.5 text-base font-semibold text-text-light dark:text-white transition-all hover:bg-slate-300/80 dark:hover:bg-surface hover:border-accent/50 dark:hover:border-trace/50 focus:outline-none focus:ring-2 focus:ring-accent dark:focus:ring-quantum focus:ring-offset-2 focus:ring-offset-day dark:focus:ring-offset-void"
          >
            About Us
          </Link>
        </motion.div>
      </div>
    </section>
  );
}

export default LandingPage;
