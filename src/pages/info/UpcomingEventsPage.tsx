import React, { useState, useEffect } from 'react';
import { Calendar, Mic, Feather, Drama, Music, Clapperboard, MapPin } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

// Define an interface for the shape of our event data from the API
interface Event {
  id: number;
  art_form_id: number;
  title: string;
  location: string;
  description: string;
  event_date: string;
}

// This function maps an art_form_id to an icon component
const getIconForArtForm = (artFormId: number) => {
  switch (artFormId) {
    case 1: return Mic; // Stand-up Comedy
    case 2: return Feather; // Poetry
    case 3: return Drama; // Storytelling
    case 4: return Music; // Singing
    case 5: return Clapperboard; // Dancing (using Clapperboard as placeholder)
    case 6: return Clapperboard; // Rap
    default: return Calendar;
  }
};

// This maps an art_form_id to its name
const getArtFormName = (artFormId: number) => {
  const names = ["", "Stand-up Comedy", "Poetry", "Storytelling", "Singing", "Dancing", "Rap"];
  return names[artFormId] || "General";
}

const artFormFilters = [
    { name: 'All', icon: null, id: 0 },
    { name: 'Stand-up Comedy', icon: Mic, id: 1 },
    { name: 'Poetry', icon: Feather, id: 2 },
    { name: 'Storytelling', icon: Drama, id: 3 },
    { name: 'Singing', icon: Music, id: 4 },
    { name: 'Rap', icon: Clapperboard, id: 6 },
];

const UpcomingEventsPage: React.FC = () => {
  const [eventsData, setEventsData] = useState<Event[]>([]);
  const [activeFilterId, setActiveFilterId] = useState(0);

  // --- NEW: Use the environment variable for the API base URL ---
  const API_URL = import.meta.env.VITE_API_BASE_URL;

  useEffect(() => {
    const fetchEvents = async () => {
      try {
        // --- UPDATED ---
        const response = await fetch(`${API_URL}/api/events`);
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data: Event[] = await response.json();
        setEventsData(data);
      } catch (error) {
        console.error("Failed to fetch events:", error);
      }
    };

    fetchEvents();
  }, [API_URL]); // Added API_URL to dependency array

  const filteredEvents = activeFilterId === 0
    ? eventsData
    : eventsData.filter(event => event.art_form_id === activeFilterId);

  return (
    <div className="min-h-screen bg-gray-900 text-white pt-32 pb-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <Calendar className="mx-auto h-16 w-16 text-purple-400 mb-4" />
          <h1 className="text-5xl md:text-6xl font-bold">Upcoming Events</h1>
          <p className="text-lg text-gray-400 mt-2">
            Find your stage. Join our open mics and showcase your talent.
          </p>
        </div>

        <div className="flex justify-center flex-wrap gap-3 mb-12">
          {artFormFilters.map(filter => (
            <button
              key={filter.name}
              onClick={() => setActiveFilterId(filter.id)}
              className={`px-5 py-2 text-sm font-semibold rounded-full transition-all duration-300 flex items-center gap-2 ${
                activeFilterId === filter.id
                  ? 'bg-purple-600 text-white shadow-lg shadow-purple-500/20'
                  : 'bg-gray-800 text-gray-300 hover:bg-gray-700'
              }`}
            >
              {filter.icon && <filter.icon size={16} />}
              {filter.name}
            </button>
          ))}
        </div>

        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <AnimatePresence>
            {filteredEvents.map(event => {
              const EventIcon = getIconForArtForm(event.art_form_id);
              return (
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
                          <EventIcon className="h-6 w-6 text-purple-400" />
                          <span className="px-3 py-1 bg-purple-500/10 text-purple-300 text-xs font-bold rounded-full">
                            {getArtFormName(event.art_form_id)}
                          </span>
                      </div>
                      <h3 className="text-2xl font-bold text-white mb-3">{event.title}</h3>
                      <div className="flex items-center gap-3 text-gray-400 text-sm mb-2">
                          <Calendar size={16} />
                          <span>{new Date(event.event_date).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</span>
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
              );
            })}
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