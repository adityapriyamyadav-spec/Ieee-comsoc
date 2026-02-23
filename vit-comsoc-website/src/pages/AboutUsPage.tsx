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

// 5-person team array highlighting interdisciplinary roles
const teamMembers = [
  { id: 1, name: 'Core Lead', role: 'President', discipline: 'Computer Science' },
  { id: 2, name: 'Tech Lead', role: 'Software & Algorithms', discipline: 'CSE' },
  { id: 3, name: 'Hardware Lead', role: 'Circuits & Embedded', discipline: 'Electronics' },
  { id: 4, name: 'Comms Lead', role: 'Networking', discipline: 'Electronics' },
  { id: 5, name: 'Project Manager', role: 'Operations', discipline: 'Health Sciences & Tech' },
];

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
        
        {/* MISSION / VISION GRID */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 w-full max-w-4xl mb-24 mx-auto"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-50px' }}
        >
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, ease: "easeOut" }}
            className="relative flex flex-col h-full rounded-xl p-5 sm:p-6 bg-white/70 dark:bg-slate-800/60 backdrop-blur-md border border-slate-300 dark:border-slate-700 transition-all duration-300 ease-out transform hover:-translate-y-1 hover:border-blue-500 hover:bg-white/90 dark:hover:border-blue-400 dark:hover:bg-slate-800/90 z-10 overflow-hidden"
          >
            <h2 className="mt-2 text-lg sm:text-xl font-bold text-text-light dark:text-white">Our Mission</h2>
            <p className="mt-2 text-sm text-text-light/80 dark:text-white/70 leading-relaxed flex-grow">
              To foster a community where budding engineers collaborate, experiment, and excel in both software and hardware realms—from embedded systems and networking, to coding and real-world problem solving.
            </p>
            <div className="mt-4 flex flex-wrap gap-2">
              <span className="inline-block rounded-full px-3 py-1 text-xs font-medium bg-accent/15 text-accent border border-accent/30 dark:bg-void/60 dark:text-trace/90 dark:border-trace/20">
                Community
              </span>
              <span className="inline-block rounded-full px-3 py-1 text-xs font-medium bg-accent/15 text-accent border border-accent/30 dark:bg-void/60 dark:text-trace/90 dark:border-trace/20">
                Innovation
              </span>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, ease: "easeOut" }}
            className="relative flex flex-col h-full rounded-xl p-5 sm:p-6 bg-white/70 dark:bg-slate-800/60 backdrop-blur-md border border-slate-300 dark:border-slate-700 transition-all duration-300 ease-out transform hover:-translate-y-1 hover:border-blue-500 hover:bg-white/90 dark:hover:border-blue-400 dark:hover:bg-slate-800/90 z-10 overflow-hidden"
          >
            <h2 className="mt-2 text-lg sm:text-xl font-bold text-text-light dark:text-white">Our Vision</h2>
            <p className="mt-2 text-sm text-text-light/80 dark:text-white/70 leading-relaxed flex-grow">
              To spark groundbreaking innovation in communications technology, building an ecosystem where future leaders drive change and shape the digital world of tomorrow.
            </p>
            <div className="mt-4 flex flex-wrap gap-2">
              <span className="inline-block rounded-full px-3 py-1 text-xs font-medium bg-accent/15 text-accent border border-accent/30 dark:bg-void/60 dark:text-trace/90 dark:border-trace/20">
                Leadership
              </span>
              <span className="inline-block rounded-full px-3 py-1 text-xs font-medium bg-accent/15 text-accent border border-accent/30 dark:bg-void/60 dark:text-trace/90 dark:border-trace/20">
                Technology
              </span>
            </div>
          </motion.div>
        </motion.div>

        {/* MEET THE TEAM SECTION */}
        <motion.div 
          className="w-full max-w-5xl mx-auto"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-50px' }}
        >
          <motion.h2 variants={itemVariants} className="text-3xl font-bold text-center text-text-light dark:text-white mb-10">
            Meet the Core Team
          </motion.h2>
          
          {/* Dynamic 5-column responsive grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
            {teamMembers.map((member) => (
              <motion.div
                key={member.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, ease: "easeOut" }}
                className="relative flex flex-col h-full rounded-xl p-5 sm:p-6 bg-white/70 dark:bg-slate-800/60 backdrop-blur-md border border-slate-300 dark:border-slate-700 transition-all duration-300 ease-out transform hover:-translate-y-1 hover:border-blue-500 hover:bg-white/90 dark:hover:border-blue-400 dark:hover:bg-slate-800/90 z-10 overflow-hidden"
              >
                {/* Placeholder Avatar */}
                <div className="w-16 h-16 rounded-full bg-void border-2 border-trace/30 flex items-center justify-center mb-4">
                  <span className="text-trace font-bold">{member.name.charAt(0)}</span>
                </div>
                <h3 className="mt-2 text-lg sm:text-xl font-bold text-text-light dark:text-white">{member.name}</h3>
                <p className="mt-2 text-sm text-text-light/80 dark:text-white/70 leading-relaxed flex-grow">{member.role}</p>
                <p className="text-xs text-accent dark:text-trace mt-2 bg-accent/15 border border-accent/30 dark:bg-void/60 dark:text-trace/90 dark:border-trace/20 px-2 py-1 rounded-md">{member.discipline}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default AboutUsPage;