import { motion, type Variants } from 'framer-motion';

const containerVariants: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.2, // Matches the 0.2s delay pattern from your landing page
    },
  },
};

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: { 
    opacity: 1,
    y: 0,
    /* MATCHING LANDING PAGE PHYSICS */
    transition: { duration: 0.5 }, 
  },
};

function AboutUsPage() {
  return (
    <section className="min-h-screen bg-void flex flex-col items-center justify-start px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
      <div className="w-full max-w-3xl text-center mb-12">
        <motion.h1
          className="text-4xl md:text-5xl font-bold text-white mb-4"
          /* MATCHING LANDING PAGE PHYSICS */
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          About IEEE ComSoc · VIT Vellore
        </motion.h1>
        
        <motion.p 
          className="text-lg md:text-xl text-white/80 leading-relaxed"
          /* MATCHING LANDING PAGE PHYSICS (with 0.2s delay) */
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          We unite passionate engineers and innovators in software, hardware, and communications. Our focus: learning, building, and pushing the boundaries of tech together.
        </motion.p>
      </div>
      
      <motion.div
        className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 w-full max-w-4xl"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Mission Card */}
        <motion.div
          variants={cardVariants}
          whileHover={{ y: -5 }}
          className="bg-surface border border-trace/30 rounded-2xl p-6 sm:p-8 shadow-lg hover:border-trace/50 transition-colors duration-300"
        >
          <h2 className="text-xl md:text-2xl font-semibold text-trace mb-3">Our Mission</h2>
          <p className="text-white/90 text-base leading-relaxed mb-2">
            To foster a community where budding engineers collaborate, experiment, and excel in both software and hardware realms—from embedded systems and networking, to coding and real-world problem solving.
          </p>
        </motion.div>

        {/* Vision Card */}
        <motion.div
          variants={cardVariants}
          whileHover={{ y: -5 }}
          className="bg-surface border border-quantum/30 rounded-2xl p-6 sm:p-8 shadow-lg hover:border-quantum/50 transition-colors duration-300"
        >
          <h2 className="text-xl md:text-2xl font-semibold text-quantum mb-3">Our Vision</h2>
          <p className="text-white/90 text-base leading-relaxed mb-2">
            To spark groundbreaking innovation in communications technology, building an ecosystem where future leaders drive change and shape the digital world of tomorrow.
          </p>
        </motion.div>
      </motion.div>
    </section>
  );
}

export default AboutUsPage;