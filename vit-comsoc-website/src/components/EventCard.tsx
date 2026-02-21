import { motion } from 'framer-motion';

export interface EventCardProps {
  title: string;
  date: string;
  description: string;
  tags: string[];
  isHighlight?: boolean;
}

function EventCard({ title, date, description, tags, isHighlight = false }: EventCardProps) {
  return (
    <motion.article
    className={`
      relative flex flex-col h-full rounded-xl p-5 sm:p-6
      bg-white/30 backdrop-blur-sm dark:bg-glass
      border border-slate-200/50 dark:border-t dark:border-l dark:border-white/10 dark:border-b dark:border-r dark:border-white/5
      shadow-[0_20px_50px_rgba(0,0,0,0.5)]
      transition-colors duration-500
      hover:shadow-lg
      ${isHighlight
        ? 'dark:border-trace/50 hover:shadow-trace/20 hover:shadow-xl dark:hover:shadow-trace/20'
        : 'hover:border-slate-300/80 dark:hover:border-trace/40'
      }
    `}
      /* MATCHING LANDING PAGE PHYSICS */
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.5 }}
      whileHover={{ y: -5 }}
    >
      {isHighlight && (
        <div
          className="absolute inset-0 rounded-xl bg-gradient-to-br from-trace/5 to-quantum/5 pointer-events-none"
          aria-hidden
        />
      )}
      <div className="relative flex flex-col flex-grow">
        <time className="text-sm font-medium text-accent dark:text-trace" dateTime={date}>
          {date}
        </time>
        <h3 className="mt-2 text-lg sm:text-xl font-bold text-text-light dark:text-white">
          {title}
        </h3>
        <p className="mt-2 text-sm text-text-light/80 dark:text-white/70 leading-relaxed flex-grow">
          {description}
        </p>
        {tags.length > 0 && (
          <ul className="mt-4 flex flex-wrap gap-2" role="list">
            {tags.map((tag) => (
              <li key={tag}>
                <span
                  className={`
                    inline-block rounded-full px-3 py-1 text-xs font-medium
                    ${isHighlight
                      ? 'bg-trace/20 text-trace border border-trace/30 dark:bg-trace/20 dark:text-trace dark:border-trace/30'
                      : 'bg-accent/15 text-accent border border-accent/30 dark:bg-void/60 dark:text-trace/90 dark:border-trace/20'
                    }
                  `}
                >
                  {tag}
                </span>
              </li>
            ))}
          </ul>
        )}
      </div>
    </motion.article>
  );
}

export default EventCard;