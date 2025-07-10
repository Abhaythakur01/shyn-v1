import React, { useState } from 'react';
import { Calendar, Tag, MapPin, Mic, Brush, Feather, Clapperboard, Music, Drama } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

// Sample data for upcoming events
const eventsData = [
  { id: 1, artForm: 'Stand-up Comedy', title: 'Comedy Night Showcase', date: 'July 15, 2025', location: 'The Laughing Loft, Mumbai', icon: Mic },
  { id: 2, artForm: 'Poetry', title: 'Verse & Vibe: Open Mic', date: 'July 18, 2025', location: 'The Poet\'s Corner, Bandra', icon: Feather },
  { id: 3, artForm: 'Storytelling', title: 'Tales by Moonlight', date: 'July 22, 2025', location: 'The Storyteller\'s Cafe', icon: Drama },
  { id: 4, artForm: 'Stand-up Comedy', title: 'Rookie Ruckus: New Talent Night', date: 'July 29, 2025', location: 'The Laughing Loft, Mumbai', icon: Mic },
  { id: 5, artForm: 'Singing', title: 'Acoustic Sessions', date: 'August 2, 2025', location: 'The Melody Room', icon: Music },
  { id: 6, artForm: 'Rap', title: 'Cipher Sunday', date: 'August 5, 2025', location: 'The Beat Box', icon: Clapperboard },
];

const artFormFilters = [
    { name: 'All', icon: null },
    { name: 'Stand-up Comedy', icon: Mic },
    { name: 'Poetry', icon: Feather },
    { name: 'Storytelling', icon: Drama },
    { name: 'Singing', icon: Music },
    { name: 'Dancing', icon: null }, // Add appropriate icon if available
    { name: 'Rap', icon: Clapperboard },
];

const UpcomingEventsPage: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState('All');

  const filteredEvents = activeFilter === 'All'
    ? eventsData
    : eventsData.filter(event => event.artForm === activeFilter);

  return (
    <div className="min-h-screen bg-gray-900 text-white pt-32 pb-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <Calendar className="mx-auto h-16 w-16 text-purple-400 mb-4" />
          <h1 className="text-5xl md:text-6xl font-bold">Upcoming Events</h1>
          <p className="text-lg text-gray-400 mt-2">
            Find your stage. Join our open mics and showcase your talent.
          </p>
        </div>

        {/* Filters */}
        <div className="flex justify-center flex-wrap gap-3 mb-12">
          {artFormFilters.map(filter => (
            <button
              key={filter.name}
              onClick={() => setActiveFilter(filter.name)}
              className={`px-5 py-2 text-sm font-semibold rounded-full transition-all duration-300 flex items-center gap-2 ${
                activeFilter === filter.name
                  ? 'bg-purple-600 text-white shadow-lg shadow-purple-500/20'
                  : 'bg-gray-800 text-gray-300 hover:bg-gray-700'
              }`}
            >
              {filter.icon && <filter.icon size={16} />}
              {filter.name}
            </button>
          ))}
        </div>

        {/* Events Grid */}
        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <AnimatePresence>
            {filteredEvents.map(event => (
              <motion.div
                key={event.id}
                layout
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.4, ease: 'easeOut' }}
                className="bg-gray-800/50 rounded-2xl p-6 border border-gray-700 flex flex-col"
              >
                <div className="flex-grow">
                    <div className="flex items-center gap-3 mb-3">
                        <event.icon className="h-6 w-6 text-purple-400" />
                        <span className="px-3 py-1 bg-purple-500/10 text-purple-300 text-xs font-bold rounded-full">{event.artForm}</span>
                    </div>
                    <h3 className="text-2xl font-bold text-white mb-3">{event.title}</h3>
                    <div className="flex items-center gap-3 text-gray-400 text-sm mb-2">
                        <Calendar size={16} />
                        <span>{event.date}</span>
                    </div>
                    <div className="flex items-center gap-3 text-gray-400 text-sm">
                        <MapPin size={16} />
                        <span>{event.location}</span>
                    </div>
                </div>
                <button className="mt-6 w-full py-3 bg-gradient-to-r from-purple-600 to-pink-600 text-white font-semibold rounded-lg hover:scale-105 transition-transform">
                  Register Now
                </button>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
        
        {filteredEvents.length === 0 && (
            <div className="text-center py-16">
                <p className="text-gray-500">No upcoming events for this category. Check back soon!</p>
            </div>
        )}
      </div>
    </div>
  );
};

export default UpcomingEventsPage;
