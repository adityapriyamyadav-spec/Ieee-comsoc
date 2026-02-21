import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const MotionLink = motion(Link);

function LandingPage() {
  return (
    <section className="min-h-[calc(100vh-4rem)] flex flex-col items-center justify-center px-4 sm:px-6 lg:px-8 py-16 sm:py-24 overflow-hidden relative">
      {/* Subtle grid background for tech feel */}
      <div
        className="absolute inset-0 bg-[linear-gradient(rgba(0,229,255,0.04)_1px,transparent_1px),linear-gradient(90deg,rgba(0,229,255,0.04)_1px,transparent_1px)] bg-[size:4rem_4rem] pointer-events-none"
        aria-hidden
      />

      <div className="relative w-full max-w-4xl mx-auto text-center">
        {/* Badge / label */}
        <p className="inline-flex items-center gap-1.5 rounded-full border border-trace/40 bg-trace/10 px-4 py-1.5 text-sm font-medium text-trace mb-6 sm:mb-8">
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-trace opacity-75" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-trace" />
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
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-white text-glow-hollow">
            <span className="block">Where</span>
            <span className="block bg-gradient-to-r from-trace via-quantum to-trace bg-clip-text text-transparent">
              Software, Hardware & Communications
            </span>
            <span className="block text-gradient-stroke-hollow">Converges</span>
          </h1>
        </motion.div>

        {/* Description */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mb-8 sm:mb-10"
        >
          <p className="text-base sm:text-lg md:text-xl text-white/70 max-w-2xl mx-auto leading-relaxed">
            We build, hack, and connect. From embedded systems and circuits to networks and software—our chapter brings together engineers who shape the future of communications technology.
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
            className="w-full sm:w-auto inline-flex items-center justify-center rounded-lg bg-trace px-6 py-3.5 text-base font-semibold text-void shadow-lg shadow-trace/25 transition-colors hover:bg-trace/90 active:scale-[0.98] focus:outline-none focus:ring-2 focus:ring-trace focus:ring-offset-2 focus:ring-offset-void"
            whileHover={{
              scale: 1.05,
              boxShadow: '0 0 24px var(--color-trace)',
            }}
          >
            Riviera Fest Events
          </MotionLink>
          <Link
            to="/about"
            className="w-full sm:w-auto inline-flex items-center justify-center rounded-lg border border-surface bg-surface/80 px-6 py-3.5 text-base font-semibold text-white transition-all hover:bg-surface hover:border-trace/50 focus:outline-none focus:ring-2 focus:ring-quantum focus:ring-offset-2 focus:ring-offset-void"
          >
            About Us
          </Link>
        </motion.div>
      </div>
    </section>
  );
}

export default LandingPage;
