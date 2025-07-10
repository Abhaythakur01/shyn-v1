import React, { useState } from 'react';
import Marquee from 'react-fast-marquee';
import { legendaryComics } from '../../data/constants';
import { ShieldCheck, X } from 'lucide-react';

const ComedyLegendsLoop: React.FC = () => {
  const [selectedComic, setSelectedComic] = useState<any>(null);
  const allComics = [...legendaryComics];

  return (
    <div className="relative bg-gradient-to-r from-[#1e1e1e] via-[#111111] to-[#1e1e1e] rounded-3xl shadow-xl border border-gray-800 p-10 sm:p-14 overflow-hidden">
      {/* Title */}
      <h2 className="text-3xl sm:text-4xl font-bold text-center text-white mb-12 flex items-center justify-center gap-3 tracking-wide">
        <ShieldCheck className="text-yellow-400 w-7 h-7" />
        Legends of Comedy
      </h2>

      {/* Sophisticated Horizontal Card Loop */}
      <Marquee
        gradient
        gradientColor="#111111"
        gradientWidth={80}
        speed={20}
        pauseOnHover
        className="overflow-hidden"
      >
        {allComics.map((comic, index) => (
          <div
            key={`${comic.id}-${index}`}
            onClick={() => setSelectedComic(comic)}
            className="cursor-pointer w-[240px] mx-6 bg-zinc-900 border border-gray-700 rounded-2xl overflow-hidden shadow-md hover:shadow-yellow-400/30 transition-transform duration-300 transform hover:scale-[1.04]"
          >
            <img
              src={comic.image}
              alt={comic.name}
              className="w-full h-40 object-cover"
            />
            <div className="p-4 space-y-1">
              <h4 className="text-white font-semibold text-base truncate">{comic.name}</h4>
              <p className="text-gray-400 text-sm truncate">{comic.style}</p>
            </div>
          </div>
        ))}
      </Marquee>

      {/* Modal / Expanded Bio */}
      {selectedComic && (
        <div className="fixed inset-0 z-50 bg-black/70 backdrop-blur-sm flex items-center justify-center p-6 sm:p-12">
          <div className="bg-gray-900 rounded-3xl shadow-2xl border border-gray-700 w-full max-w-4xl relative overflow-hidden transform transition-all duration-300 scale-100">
            <button
              onClick={() => setSelectedComic(null)}
              className="absolute top-4 right-4 text-white hover:text-red-400"
            >
              <X size={28} />
            </button>

            <img
              src={selectedComic.image}
              alt={selectedComic.name}
              className="w-full h-[400px] sm:h-[500px] object-cover rounded-t-3xl"
            />

            <div className="p-8 text-center">
              <h3 className="text-3xl font-bold text-white mb-2">{selectedComic.name}</h3>
              <p className="text-yellow-300 text-lg font-medium">{selectedComic.style}</p>
              <p className="text-gray-300 mt-4 text-sm leading-relaxed max-w-2xl mx-auto">
                {selectedComic.bio}
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ComedyLegendsLoop;
