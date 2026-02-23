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
      bg-white/85 dark:bg-slate-800/75 backdrop-blur-sm
      border border-slate-300 dark:border-slate-700
      transition-all duration-300 ease-out transform hover:-translate-y-1 hover:border-quantum hover:bg-white/90 dark:hover:border-quantum dark:hover:bg-slate-800/90 z-10 overflow-hidden
      ${isHighlight
        ? 'dark:border-trace/50'
        : ''
      }
    `}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, ease: "easeOut" }}
    >
            <div className="relative flex flex-col flex-grow">
        <time className="text-sm font-medium text-quantum" dateTime={date}>
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
                      ? 'bg-quantum/15 text-quantum border border-quantum/30 dark:bg-void/60 dark:text-quantum/90 dark:border-quantum/20'
                      : 'bg-quantum/15 text-quantum border border-quantum/30 dark:bg-void/60 dark:text-quantum/90 dark:border-quantum/20'
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