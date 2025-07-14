import React, { useState } from 'react';
import { Link } from 'react-router-dom'; // Import Link
import { Boxes } from '../components/ui/background-boxes';
import { cn } from '../lib/utils';
import { Video, Star, Mic, HandCoins, Users } from 'lucide-react';
import { motion } from 'framer-motion';

// Perk data with unique IDs
const membershipPerks = [
  {
    id: 'perk-1',
    title: "Exclusive Recording Discounts",
    desc: "Save big on your next studio session — enjoy member-only discounts on video shoots and edits.",
    icon: <Video size={24} className="text-purple-400" />,
  },
  {
    id: 'perk-2',
    title: "Priority Access to Opportunities",
    desc: "Be the first to grab limited slots for our events, recordings, and collaborations.",
    icon: <Star size={24} className="text-yellow-400" />,
  },
  {
    id: 'perk-3',
    title: "Host Our Official Open Mics",
    desc: "Step into the spotlight and host SHYN's featured open mics — build your stage presence.",
    icon: <Mic size={24} className="text-pink-400" />,
  },
  {
    id: 'perk-4',
    title: "Paid Creative Gigs",
    desc: "Earn through exclusive paid gigs offered only to our active members.",
    icon: <HandCoins size={24} className="text-green-400" />,
  },
  {
    id: 'perk-5',
    title: "Workshop Discounts with Top Artists",
    desc: "Attend intimate, high-impact workshops at special rates — led by the best in the industry.",
    icon: <Users size={24} className="text-blue-400" />,
  },
];

// Fisher-Yates shuffle
const shuffleArray = (arr: any[]) => {
  const copy = [...arr];
  for (let i = copy.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [copy[i], copy[j]] = [copy[j], copy[i]];
  }
  return copy;
};

const MembershipSection: React.FC = () => {
  const [cards, setCards] = useState(membershipPerks);

  const handleShuffle = () => {
    setCards(shuffleArray(cards));
  };

  return (
    <div id="membership" className="min-h-screen w-full bg-black overflow-hidden">
      <div className="relative flex h-full w-full items-center justify-center py-24">
        <div className="absolute inset-0 z-10 h-full w-full bg-black [mask-image:radial-gradient(transparent,white)] pointer-events-none" />
        <Boxes />

        <div className={cn("relative z-20 mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8")}>
          {/* Header */}
          <div className="text-center mb-16">
            <h1 className="text-5xl font-bold tracking-tighter text-white sm:text-6xl md:text-7xl">
              SHYN{" "}
              <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                with Us
              </span>
            </h1>
            <p className="mt-6 text-lg text-slate-300 max-w-2xl mx-auto">
              Unlock your creative potential. Our membership is a premium gateway to growth, recognition, and exclusive creative opportunities.
            </p>
          </div>

          {/* Card Grid with smooth swap */}
          <div className="space-y-12">
            {/* Top Row */}
            <div className="flex justify-center flex-wrap gap-10">
              {cards.slice(0, 3).map((card) => (
                <motion.div
                  key={card.id}
                  layoutId={card.id}
                  drag
                  onClick={handleShuffle}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  transition={{ type: "spring", stiffness: 150, damping: 20 }}
                  className="w-[340px] h-[240px] rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl p-6 shadow-2xl cursor-pointer"
                >
                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0">
                      <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-white/10">
                        {card.icon}
                      </div>
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-white mb-1">{card.title}</h3>
                      <p className="text-sm text-slate-300">{card.desc}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Bottom Row */}
            <div className="flex justify-center flex-wrap gap-10">
              {cards.slice(3, 5).map((card) => (
                <motion.div
                  key={card.id}
                  layoutId={card.id}
                  drag
                  onClick={handleShuffle}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  transition={{ type: "spring", stiffness: 150, damping: 20 }}
                  className="w-[340px] h-[240px] rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl p-6 shadow-2xl cursor-pointer"
                >
                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0">
                      <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-white/10">
                        {card.icon}
                      </div>
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-white mb-1">{card.title}</h3>
                      <p className="text-sm text-slate-300">{card.desc}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* CTA Button */}
          <div className="mt-20 flex justify-center">
            <Link to="/membership" className="inline-flex items-center justify-center rounded-full bg-gradient-to-r from-purple-600 to-pink-600 px-10 py-4 text-lg font-semibold text-white shadow-lg transition-transform duration-200 hover:scale-105">
              Become a Member
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MembershipSection;