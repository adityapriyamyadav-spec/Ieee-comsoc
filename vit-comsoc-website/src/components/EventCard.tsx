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
      relative flex flex-col h-full rounded-xl p-5 sm:p-6 transition-colors duration-300
      hover:shadow-lg
      ${isHighlight
        ? 'bg-gradient-to-br from-trace/15 via-surface to-quantum/15 border-2 border-trace/50 shadow-md shadow-trace/10 hover:shadow-trace/20 hover:shadow-xl'
        : 'bg-surface/90 border border-trace/20 hover:border-trace/40 hover:shadow-void/50'
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
        <time className="text-sm font-medium text-trace" dateTime={date}>
          {date}
        </time>
        <h3 className="mt-2 text-lg sm:text-xl font-bold text-white">
          {title}
        </h3>
        <p className="mt-2 text-sm text-white/80 leading-relaxed flex-grow">
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
                      ? 'bg-trace/20 text-trace border border-trace/30'
                      : 'bg-void/60 text-trace/90 border border-trace/20'
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