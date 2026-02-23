import { motion, type Variants } from 'framer-motion';

const containerVariants: Variants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.2 },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: { 
    opacity: 1, y: 0, 
    transition: { duration: 0.5 }, 
  },
};

function AboutUsPage() {
  return (
    <section className="min-h-screen flex flex-col items-center justify-start px-4 sm:px-6 lg:px-8 py-12 sm:py-16 overflow-hidden relative bg-transparent">
      {/* Subtle grid background for tech feel (shared with landing) */}
      <div
        className="absolute inset-0 bg-[linear-gradient(rgba(0,229,255,0.04)_1px,transparent_1px),linear-gradient(90deg,rgba(0,229,255,0.04)_1px,transparent_1px)] bg-[size:4rem_4rem] pointer-events-none"
        aria-hidden
      />

      <div className="relative w-full max-w-6xl mx-auto">
        {/* HEADER SECTION */}
        <div className="w-full max-w-3xl text-center mb-12 mx-auto">
          <motion.h1
            className="text-4xl md:text-5xl font-bold text-text-light dark:text-white mb-4"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            About IEEE ComSoc · VIT Vellore
          </motion.h1>
          <motion.p 
            className="text-lg md:text-xl text-text-light/80 dark:text-white/70 leading-relaxed"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            We unite passionate engineers and innovators in software, hardware, and communications. Our focus: learning, building, and pushing the boundaries of tech together.
          </motion.p>
        </div>
        
        {/* THE THREE PILLARS */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 w-full max-w-5xl mb-16 mx-auto"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-50px' }}
        >
          <motion.div
            variants={itemVariants}
            className="relative flex flex-col h-full rounded-xl p-6 sm:p-8 bg-white/85 dark:bg-slate-800/75 backdrop-blur-sm border border-slate-300 dark:border-slate-700 transition-all duration-300 ease-out transform hover:-translate-y-1 hover:border-quantum hover:bg-white/90 dark:hover:border-quantum dark:hover:bg-slate-800/90 z-10 overflow-hidden"
          >
            <div className="w-12 h-12 rounded-full bg-quantum/20 flex items-center justify-center mb-4">
              <svg className="w-6 h-6 text-quantum" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
            <h2 className="text-xl sm:text-2xl font-bold text-text-light dark:text-white mb-3">Innovation</h2>
            <p className="text-sm text-text-light/80 dark:text-white/70 leading-relaxed flex-grow">
              We don't just follow tutorials; we build original hardware and software solutions that solve real-world communication gaps.
            </p>
          </motion.div>

          <motion.div
            variants={itemVariants}
            className="relative flex flex-col h-full rounded-xl p-6 sm:p-8 bg-white/85 dark:bg-slate-800/75 backdrop-blur-sm border border-slate-300 dark:border-slate-700 transition-all duration-300 ease-out transform hover:-translate-y-1 hover:border-quantum hover:bg-white/90 dark:hover:border-quantum dark:hover:bg-slate-800/90 z-10 overflow-hidden"
          >
            <div className="w-12 h-12 rounded-full bg-quantum/20 flex items-center justify-center mb-4">
              <svg className="w-6 h-6 text-quantum" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
              </svg>
            </div>
            <h2 className="text-xl sm:text-2xl font-bold text-text-light dark:text-white mb-3">Community</h2>
            <p className="text-sm text-text-light/80 dark:text-white/70 leading-relaxed flex-grow">
              A collaborative hub for VIT engineers to share knowledge, from first-year basics to advanced C and Python debugging.
            </p>
          </motion.div>

          <motion.div
            variants={itemVariants}
            className="relative flex flex-col h-full rounded-xl p-6 sm:p-8 bg-white/85 dark:bg-slate-800/75 backdrop-blur-sm border border-slate-300 dark:border-slate-700 transition-all duration-300 ease-out transform hover:-translate-y-1 hover:border-quantum hover:bg-white/90 dark:hover:border-quantum dark:hover:bg-slate-800/90 z-10 overflow-hidden"
          >
            <div className="w-12 h-12 rounded-full bg-quantum/20 flex items-center justify-center mb-4">
              <svg className="w-6 h-6 text-quantum" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h2 className="text-xl sm:text-2xl font-bold text-text-light dark:text-white mb-3">Excellence</h2>
            <p className="text-sm text-text-light/80 dark:text-white/70 leading-relaxed flex-grow">
              Pushing boundaries of what's possible, whether it's industry-standard networking workshops or cutting-edge research projects.
            </p>
          </motion.div>
        </motion.div>

        {/* CORE EXPERTISE SECTION */}
        <motion.div 
          className="w-full max-w-4xl mx-auto mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-text-light dark:text-white mb-4">Core Expertise</h2>
            <p className="text-lg text-text-light/80 dark:text-white/70">
              Our skills span the full spectrum of communications technology
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="bg-white/85 dark:bg-slate-800/75 backdrop-blur-sm border border-slate-300 dark:border-slate-700 rounded-xl p-6 text-center transition-all duration-300 hover:border-quantum"
            >
              <div className="w-16 h-16 rounded-full bg-quantum/20 flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-quantum" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-text-light dark:text-white mb-2">Embedded Systems</h3>
              <p className="text-sm text-text-light/70 dark:text-white/60">
                Microcontrollers, IoT devices, and real-time systems
              </p>
            </motion.div>

            <motion.div
              whileHover={{ scale: 1.05 }}
              className="bg-white/85 dark:bg-slate-800/75 backdrop-blur-sm border border-slate-300 dark:border-slate-700 rounded-xl p-6 text-center transition-all duration-300 hover:border-quantum"
            >
              <div className="w-16 h-16 rounded-full bg-quantum/20 flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-quantum" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-text-light dark:text-white mb-2">Network Architecture</h3>
              <p className="text-sm text-text-light/70 dark:text-white/60">
                Protocol design, network security, and distributed systems
              </p>
            </motion.div>

            <motion.div
              whileHover={{ scale: 1.05 }}
              className="bg-white/85 dark:bg-slate-800/75 backdrop-blur-sm border border-slate-300 dark:border-slate-700 rounded-xl p-6 text-center transition-all duration-300 hover:border-quantum"
            >
              <div className="w-16 h-16 rounded-full bg-quantum/20 flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-quantum" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-text-light dark:text-white mb-2">Full-Stack Development</h3>
              <p className="text-sm text-text-light/70 dark:text-white/60">
                Web applications, APIs, and modern software architecture
              </p>
            </motion.div>
          </div>
        </motion.div>

        {/* MEET THE TEAM SECTION */}
        <motion.div 
          className="w-full max-w-7xl mx-auto mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-text-light dark:text-white mb-4">Meet the Team</h2>
            <p className="text-lg text-text-light/80 dark:text-white/70">
              The passionate minds driving IEEE ComSoc VIT Vellore
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6 md:gap-8">
            {[
              { name: 'Alex Chen', role: 'Chairperson', initials: 'AC' },
              { name: 'Sarah Kumar', role: 'Secretary', initials: 'SK' },
              { name: 'Raj Patel', role: 'Technical Head', initials: 'RP' },
              { name: 'Maya Singh', role: 'Events Coordinator', initials: 'MS' },
            ].map((member, index) => (
              <motion.div
                key={index}
                whileHover={{ y: -5, scale: 1.02 }}
                transition={{ duration: 0.2 }}
                className="relative flex flex-col items-center text-center p-6 bg-white/85 dark:bg-slate-800/75 backdrop-blur-sm border border-slate-300 dark:border-slate-700 rounded-xl transition-all duration-300 hover:border-quantum hover:shadow-lg hover:shadow-quantum/20"
              >
                {/* Placeholder Headshot */}
                <div className="w-20 h-20 rounded-full bg-gradient-to-br from-quantum/20 to-trace/20 border-2 border-quantum/30 flex items-center justify-center mb-4">
                  <span className="text-2xl font-bold text-quantum">{member.initials}</span>
                </div>
                
                {/* Name with hover glow */}
                <motion.h3 
                  whileHover={{ textShadow: '0 0 8px rgba(167, 139, 250, 0.5)' }}
                  className="text-lg font-semibold text-text-light dark:text-white mb-2 transition-all duration-300"
                >
                  {member.name}
                </motion.h3>
                
                {/* Role in monospace */}
                <p className="text-sm font-mono text-quantum/80 dark:text-quantum/70 mb-3">
                  {member.role}
                </p>
                
                {/* LinkedIn Icon */}
                <motion.a
                  href="#"
                  whileHover={{ scale: 1.1 }}
                  className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-quantum/10 hover:bg-quantum/20 transition-colors duration-200"
                  aria-label="LinkedIn profile"
                >
                  <svg className="w-4 h-4 text-quantum" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784.79 1.75 1.764 1.764.966 0 1.75-.79 1.75-1.764-.784-.79-1.75-1.764zm13.5 12.268h-3v-11h3v11z"/>
                  </svg>
                </motion.a>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* JOIN US SECTION */}
        <motion.div 
          className="w-full max-w-4xl mx-auto text-center"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
        >
          <div className="bg-gradient-to-r from-quantum/10 to-trace/10 dark:from-quantum/20 dark:to-trace/20 rounded-2xl p-8 sm:p-12 border border-quantum/20">
            <h2 className="text-2xl sm:text-3xl font-bold text-text-light dark:text-white mb-4">
              Ready to Shape the Future?
            </h2>
            <p className="text-lg text-text-light/80 dark:text-white/70 mb-6 max-w-2xl mx-auto">
              Join IEEE ComSoc VIT Vellore and be part of a community that's building tomorrow's communication technology today.
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center justify-center rounded-lg bg-quantum px-8 py-3 text-base font-semibold text-white shadow-lg shadow-quantum/25 transition-colors hover:bg-quantum/90 focus:outline-none focus:ring-2 focus:ring-quantum focus:ring-offset-2"
            >
              Join Our Chapter
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default AboutUsPage;