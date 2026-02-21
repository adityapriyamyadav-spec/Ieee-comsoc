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
    <section className="min-h-screen flex flex-col items-center justify-start px-4 sm:px-6 lg:px-8 py-12 sm:py-16 overflow-hidden relative">
      
      {/* HEADER SECTION */}
      <div className="w-full max-w-3xl text-center mb-12">
        <motion.h1
          className="text-4xl md:text-5xl font-bold text-white mb-4 text-glow-hollow"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          About IEEE ComSoc · VIT Vellore
        </motion.h1>
        <motion.p 
          className="text-lg md:text-xl text-white/70 leading-relaxed"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          We unite passionate engineers and innovators in software, hardware, and communications. Our focus: learning, building, and pushing the boundaries of tech together.
        </motion.p>
      </div>
      
      {/* MISSION / VISION GRID */}
      <motion.div
        className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 w-full max-w-4xl mb-24"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-50px' }}
      >
        <motion.div variants={itemVariants} whileHover={{ y: -5 }} className="bg-glass backdrop-blur-md border-t border-l border-white/10 border-b border-r border-white/5 rounded-2xl p-6 shadow-[0_20px_50px_rgba(0,0,0,0.5)] transition-colors duration-500 hover:border-trace/50">
          <h2 className="text-xl md:text-2xl font-semibold text-trace mb-3">Our Mission</h2>
          <p className="text-white/70 text-base leading-relaxed mb-2">
            To foster a community where budding engineers collaborate, experiment, and excel in both software and hardware realms—from embedded systems and networking, to coding and real-world problem solving.
          </p>
        </motion.div>

        <motion.div variants={itemVariants} whileHover={{ y: -5 }} className="bg-glass backdrop-blur-md border-t border-l border-white/10 border-b border-r border-white/5 rounded-2xl p-6 shadow-[0_20px_50px_rgba(0,0,0,0.5)] transition-colors duration-500 hover:border-quantum/50">
          <h2 className="text-xl md:text-2xl font-semibold text-quantum mb-3">Our Vision</h2>
          <p className="text-white/70 text-base leading-relaxed mb-2">
            To spark groundbreaking innovation in communications technology, building an ecosystem where future leaders drive change and shape the digital world of tomorrow.
          </p>
        </motion.div>
      </motion.div>

      {/* MEET THE TEAM SECTION */}
      <motion.div 
        className="w-full max-w-5xl"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-50px' }}
      >
        <motion.h2 variants={itemVariants} className="text-3xl font-bold text-center text-white mb-10 text-glow-hollow">
          Meet the Core Team
        </motion.h2>
        
        {/* Dynamic 5-column responsive grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
          {teamMembers.map((member) => (
            <motion.div 
              key={member.id}
              variants={itemVariants}
              whileHover={{ y: -5 }}
              className="bg-glass backdrop-blur-md border-t border-l border-white/10 border-b border-r border-white/5 rounded-xl p-5 flex flex-col items-center text-center shadow-[0_20px_50px_rgba(0,0,0,0.5)] transition-colors duration-500 hover:border-trace/40 hover:bg-glass"
            >
              {/* Placeholder Avatar */}
              <div className="w-16 h-16 rounded-full bg-void border-2 border-trace/30 flex items-center justify-center mb-4">
                <span className="text-trace font-bold">{member.name.charAt(0)}</span>
              </div>
              <h3 className="text-lg font-semibold text-white">{member.name}</h3>
              <p className="text-sm font-medium text-trace mt-1">{member.role}</p>
              <p className="text-xs text-white/70 mt-2 bg-void/50 px-2 py-1 rounded-md">{member.discipline}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>

    </section>
  );
}

export default AboutUsPage;