import React from 'react';
import Marquee from 'react-fast-marquee';
import { legendaryComics } from '../../data/constants';
import { ShieldCheck } from 'lucide-react';

const ComedyLegendsLoop: React.FC = () => {
  const allComics = [...legendaryComics, ...legendaryComics];

  return (
    <div className="bg-gradient-to-r from-gray-800 via-gray-900 to-gray-800 rounded-3xl shadow-2xl border border-gray-700 p-8 sm:p-12 overflow-hidden">
      <h2 className="text-3xl sm:text-4xl font-bold text-center text-white mb-10 flex items-center justify-center gap-3">
        <ShieldCheck className="text-yellow-400 w-8 h-8" />
        Legends of Comedy
      </h2>

      <Marquee
        gradient={true}
        gradientColor="#18181b"
        gradientWidth={60}
        speed={30}
        pauseOnHover={true}
        className="overflow-hidden"
      >
        {allComics.map((comic, index) => (
          <div
            key={`${comic.id}-${index}`}
            className="mx-5 w-[220px] min-w-[220px] bg-gray-800 border border-gray-700 rounded-2xl overflow-hidden shadow-lg hover:shadow-yellow-400/30 transition-all duration-300 transform hover:scale-105"
          >
            <img
              src={comic.image}
              alt={comic.name}
              className="w-full h-36 object-cover"
            />
            <div className="p-4 text-center">
              <p className="text-white text-base font-semibold truncate">{comic.name}</p>
              <p className="text-purple-300 text-sm truncate">{comic.style}</p>
            </div>
          </div>
        ))}
      </Marquee>
    </div>
  );
};

export default ComedyLegendsLoop;
