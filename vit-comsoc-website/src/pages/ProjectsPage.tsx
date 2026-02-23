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
                className="relative flex flex-col h-full rounded-xl p-5 sm:p-6 bg-white/70 dark:bg-slate-800/60 backdrop-blur-md border border-slate-300 dark:border-slate-700 transition-all duration-300 ease-out transform hover:-translate-y-1 hover:border-blue-500 hover:bg-white/90 dark:hover:border-blue-400 dark:hover:bg-slate-800/90 z-10 overflow-hidden"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, ease: "easeOut" }}
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
                      className="inline-block rounded-full px-3 py-1 text-xs font-medium bg-accent/15 text-accent border border-accent/30 dark:bg-void/60 dark:text-trace/90 dark:border-trace/20"
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

