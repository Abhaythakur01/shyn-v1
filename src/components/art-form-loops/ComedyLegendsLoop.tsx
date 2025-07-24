import React, { useState } from 'react';
import Marquee from 'react-fast-marquee';
import { motion, AnimatePresence } from 'framer-motion';
import { legendaryComics } from '../../data/art-form-loops/comedy-data';
import { ShieldCheck, X, Youtube } from 'lucide-react';

type Comic = typeof legendaryComics[0];

const getYouTubeId = (url: string): string | null => {
  const regExp = /^.*(http:\/\/googleusercontent\.com\/youtube\.com\/vi?\/|v\/|u\/\w\/|embed\/|watch\?v=|\&v=)([^#\&\?]*).*/;
  const match = url.match(regExp);
  return (match && match[2].length === 11) ? match[2] : null;
};

const ComedyLegendsLoop: React.FC = () => {
  const [selectedComic, setSelectedComic] = useState<Comic | null>(null);
  // --- NEW: State to manage the video player ---
  const [playingVideoId, setPlayingVideoId] = useState<string | null>(null);

  return (
    <>
      <div className="bg-gray-800/50 rounded-2xl shadow-lg p-8 border border-gray-700 overflow-hidden">
        <h3 className="text-2xl font-bold text-white mb-8 text-center flex items-center justify-center gap-3">
          <ShieldCheck className="text-yellow-400" />
          Legends of Comedy
        </h3>
        <Marquee gradient={true} gradientColor="#18181b" gradientWidth={50} speed={30} pauseOnHover={true}>
          {legendaryComics.map((comic) => (
            <div key={comic.id} onClick={() => setSelectedComic(comic)} className="flex-shrink-0 w-48 mx-4 cursor-pointer group">
              <div className="bg-gray-900 border border-gray-700 rounded-xl overflow-hidden shadow-md group-hover:shadow-yellow-400/20 group-hover:scale-105 transition-all duration-300">
                <img src={comic.image} alt={comic.name} className="w-full h-40 object-cover" />
                <div className="p-3">
                  <h4 className="text-white font-semibold text-sm truncate">{comic.name}</h4>
                  <p className="text-gray-400 text-xs truncate">{comic.style}</p>
                </div>
              </div>
            </div>
          ))}
        </Marquee>
      </div>

      {/* Comedian Details Modal */}
      <AnimatePresence>
        {selectedComic && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-md p-4"
            onClick={() => setSelectedComic(null)}
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
          >
            <motion.div
              className="relative bg-gray-900/70 border border-gray-700 rounded-2xl w-full max-w-6xl max-h-[90vh] flex flex-col md:flex-row"
              onClick={(e) => e.stopPropagation()}
              initial={{ scale: 0.9, y: 20 }} animate={{ scale: 1, y: 0 }} exit={{ scale: 0.9, y: 20 }}
              transition={{ type: 'spring', stiffness: 300, damping: 25 }}
            >
              <div className="w-full md:w-5/12 h-64 md:h-auto flex-shrink-0">
                <img src={selectedComic.image} alt={selectedComic.name} className="w-full h-full object-cover object-top rounded-t-2xl md:rounded-l-2xl md:rounded-tr-none" />
              </div>
              <div className="w-full md:w-7/12 p-8 lg:p-10 flex flex-col overflow-y-auto">
                <h2 className="text-4xl lg:text-5xl font-bold text-white tracking-tight">{selectedComic.name}</h2>
                <div className="flex flex-wrap gap-2 my-4">
                  {selectedComic.style.split(', ').map(s => (
                    <span key={s} className="px-3 py-1 bg-yellow-400/10 text-yellow-300 text-xs font-semibold rounded-full">{s}</span>
                  ))}
                </div>
                <hr className="border-gray-700 my-4" />
                <div className="text-gray-300 leading-relaxed prose prose-invert prose-sm">
                  <h3 className="text-lg font-semibold text-white mb-2">About the Artist</h3>
                  <p>{selectedComic.bio}</p>
                </div>
                
                {/* --- THIS SECTION WILL NOW RENDER CORRECTLY --- */}
                {selectedComic.videos && selectedComic.videos.length > 0 && (
                  <div className="mt-6">
                    <hr className="border-gray-700 my-4" />
                    <h3 className="text-lg font-semibold text-white mb-4">Notable Performances</h3>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      {selectedComic.videos.map((videoUrl, index) => {
                        const videoId = getYouTubeId(videoUrl);
                        if (!videoId) return null;
                        
                        return (
                          // --- MODIFICATION: Changed from <a> to <button> ---
                          <button
                            key={index}
                            onClick={() => setPlayingVideoId(videoId)}
                            className="relative rounded-lg overflow-hidden group border border-gray-800 hover:border-yellow-400/50 transition-colors"
                          >
                            <img src={`https://i.ytimg.com/vi/${videoId}/mqdefault.jpg`} alt="YouTube Thumbnail" className="w-full object-cover" />
                            <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                              <Youtube className="w-10 h-10 text-white drop-shadow-lg" />
                            </div>
                          </button>
                        );
                      })}
                    </div>
                  </div>
                )}
              </div>
              <button onClick={() => setSelectedComic(null)} className="absolute top-4 right-4 text-gray-500 hover:text-white transition-colors" aria-label="Close">
                <X size={24} />
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* --- NEW: In-App Video Player Modal --- */}
      <AnimatePresence>
        {playingVideoId && (
          <motion.div
            className="fixed inset-0 z-[60] flex items-center justify-center bg-black/90 backdrop-blur-xl"
            onClick={() => setPlayingVideoId(null)}
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
          >
            <motion.div 
              className="relative w-full max-w-4xl aspect-video rounded-lg shadow-2xl"
              initial={{ scale: 0.8 }} animate={{ scale: 1 }} exit={{ scale: 0.8 }}
            >
              <iframe
                src={`https://www.youtube.com/embed/${playingVideoId}?autoplay=1&rel=0`}
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
                className="w-full h-full rounded-lg"
              ></iframe>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default ComedyLegendsLoop;