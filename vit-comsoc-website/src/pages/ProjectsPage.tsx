import { motion } from 'framer-motion';

const projects = [
  {
    id: 'encrypted-p2p-messenger',
    title: 'Encrypted P2P Socket Messenger',
    description:
      'A multithreaded peer-to-peer chat application built to demonstrate low-latency socket programming and end-to-end encryption across localized networks.',
    tech: ['C', 'Python', 'Networking', 'OS Concepts'],
  },
  {
    id: 'hamming-code-simulator',
    title: 'Hamming Code Hardware Simulator',
    description:
      'An interactive simulation of error-detecting and error-correcting codes used in telecommunications, demonstrating digital logic gates and memory architecture.',
    tech: ['Digital Logic', 'Algorithms', 'Error Correction'],
  },
  {
    id: 'bb84-quantum-key-distribution',
    title: 'Quantum Key Distribution (BB84) Model',
    description:
      'A visual simulation of the BB84 quantum cryptography protocol, illustrating how polarized photon states can be used to securely distribute encryption keys over optical channels.',
    tech: ['Quantum Physics', 'Cryptography', 'Data Structures'],
  },
] as const;

function ProjectsPage() {
  return (
    <div className="min-h-screen w-full bg-transparent pt-24 px-6 relative z-10 overflow-hidden">
      {/* Subtle grid background for tech feel (shared with landing) */}
      <div
        className="absolute inset-0 bg-[linear-gradient(rgba(0,229,255,0.04)_1px,transparent_1px),linear-gradient(90deg,rgba(0,229,255,0.04)_1px,transparent_1px)] bg-[size:4rem_4rem] pointer-events-none"
        aria-hidden
      />

      <div className="relative max-w-7xl mx-auto">
        <header className="mb-12 text-center">
          <h1 className="text-4xl font-bold text-text-light dark:text-slate-100">
            Engineering Projects
          </h1>
        </header>

        <main>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project) => (
              <motion.article
                key={project.id}
                className="relative flex flex-col h-full rounded-xl p-6 bg-white/10 dark:bg-surface/50 backdrop-blur-md border border-slate-200/50 dark:border-white/10 shadow-[0_18px_45px_rgba(15,23,42,0.55)] transition-colors duration-500 hover:border-blue-500/50 hover:shadow-xl hover:shadow-blue-900/5 dark:hover:shadow-blue-500/10"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.5 }}
                whileHover={{ y: -5 }}
              >
              <div className="relative flex flex-col flex-grow">
                  <h2 className="mt-2 text-lg sm:text-xl font-bold text-text-light dark:text-white">
                  {project.title}
                </h2>
                  <p className="mt-2 text-sm text-text-light/80 dark:text-white/70 leading-relaxed flex-grow">
                  {project.description}
                </p>

                <div className="mt-4 flex flex-wrap gap-2">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="inline-flex items-center rounded-full border border-slate-200/60 dark:border-white/15 bg-white/40 dark:bg-void/60 px-3 py-1 text-xs font-medium text-slate-700 dark:text-slate-100"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </motion.article>
            ))}
          </div>
        </main>
      </div>
    </div>
  );
}

export default ProjectsPage;

