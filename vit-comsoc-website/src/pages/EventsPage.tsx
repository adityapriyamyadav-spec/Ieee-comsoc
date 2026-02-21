import EventCard from '../components/EventCard';

function EventsPage() {
  const events = [
    {
      id: 'vitecon-26',
      title: 'ViTECoN 2026',
      date: 'Spring 2026',
      description: 'The International Conference on Vision Towards Emerging Trends in Communication and Networking. Join researchers and engineers worldwide to discuss the future of telecommunications and digital logic.',
      tags: ['Conference', 'Networking', 'Research'],
      isHighlight: false,
    },
    {
      id: 'epl-hackathon',
      title: 'Electronic Premier League',
      date: 'Spring 2026',
      description: 'An auction and invent-themed hackathon. Build innovative hardware and software solutions under pressure while managing your team\'s virtual budget.',
      tags: ['Hackathon', 'Hardware', 'Software'],
      isHighlight: false,
    },
    {
      id: 'comsoc-expo',
      title: 'IEEE ComSoc Tech Expo',
      date: 'February 20, 2026',
      description: 'Explore cutting-edge projects and interactive booths showcasing advancements in C programming, IoT, and modern communication architectures.',
      tags: ['Expo', 'Innovation', 'Showcase'],
      isHighlight: false,
    },
    {
      id: 'riviera-26',
      title: 'Riviera 2026: RISE RUSH REVEL',
      date: 'Feb 26 - Mar 1, 2026',
      description: 'The annual international sports and cultural fest. Experience 4 days of unparalleled energy featuring Proshows by Sunidhi Chauhan, Thaman, Benny Dayal, and Ritviz, alongside 40,000+ students.',
      tags: ['Cultural', 'Sports', 'Proshows'],
      isHighlight: true,
    },
  ];

  // Separate the highlighted event from the standard expos
  const highlightEvents = events.filter(event => event.isHighlight);
  const regularEvents = events.filter(event => !event.isHighlight);

  return (
    <div className="min-h-screen flex flex-col items-center px-4 py-12 relative">
      <h1 className="text-4xl md:text-5xl font-bold text-center text-white mb-12 text-glow-hollow">
        Riviera Fest & ComSoc Events
      </h1>

      {/* Highlight Section (Riviera) */}
      <div className="w-full max-w-6xl mb-16">
        {highlightEvents.map((event) => (
          <EventCard key={event.id} {...event} />
        ))}
      </div>

      {/* Standard Grid Section (Expos) */}
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 md:gap-8 lg:grid-cols-3 w-full max-w-6xl">
        {regularEvents.map((event) => (
          <EventCard key={event.id} {...event} />
        ))}
      </div>
    </div>
  );
}

export default EventsPage;