import { motion } from 'motion/react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { artists, artworks } from '../data';
import { Info } from 'lucide-react';

export default function Portfolio() {
  const artist = artists[0];
  const artistWorks = artworks.filter(w => w.artistId === artist.id);
  const [showStatement, setShowStatement] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="max-w-7xl mx-auto px-6 py-20"
    >
      <div className="flex flex-col lg:flex-row gap-20">
        {/* Sidebar */}
        <aside className="lg:w-1/3 lg:sticky lg:top-32 h-fit">
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            <img
              src={artist.portrait}
              alt={artist.name}
              className="w-full aspect-[3/4] object-cover mb-10 grayscale"
              referrerPolicy="no-referrer"
            />
            <h1 className="text-5xl font-serif mb-6">{artist.name}</h1>
            <p className="text-gallery-charcoal/70 leading-relaxed mb-8 font-light">
              {artist.bio}
            </p>
            
            <button
              onClick={() => setShowStatement(!showStatement)}
              className="w-full border border-gallery-charcoal py-4 text-xs uppercase tracking-widest font-bold hover:bg-gallery-charcoal hover:text-gallery-white transition-all"
            >
              {showStatement ? 'Close Statement' : 'View Artist Statement'}
            </button>

            {showStatement && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: 'auto', opacity: 1 }}
                className="mt-8 p-6 bg-gallery-white border-l-2 border-gallery-charcoal italic text-sm leading-relaxed text-gallery-charcoal/80"
              >
                "{artist.statement}"
              </motion.div>
            )}
          </motion.div>
        </aside>

        {/* Main Area: Masonry Grid */}
        <main className="lg:w-2/3">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {artistWorks.map((work, idx) => (
              <motion.div
                key={work.id}
                initial={{ y: 40, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.1 * idx }}
                className="group relative"
              >
                <Link to={`/artwork/${work.id}`}>
                  <div className="overflow-hidden bg-gallery-white">
                    <img
                      src={work.image}
                      alt={work.title}
                      className="w-full object-cover transition-transform duration-700 group-hover:scale-105"
                      referrerPolicy="no-referrer"
                    />
                  </div>
                  
                  <div className="mt-4 flex justify-between items-start">
                    <div>
                      <h3 className="font-serif text-xl">{work.title}</h3>
                      <p className="text-xs text-gallery-charcoal/40 mt-1 uppercase tracking-widest">{work.medium}</p>
                    </div>
                    
                    <div className="relative">
                      <div className="p-2 text-gallery-charcoal/30 group-hover:text-gallery-charcoal transition-colors">
                        <Info size={18} />
                      </div>
                      
                      {/* Hover Snippet */}
                      <div className="absolute bottom-full right-0 mb-4 w-64 p-4 bg-gallery-charcoal text-gallery-white text-xs opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none z-10 shadow-xl">
                        <p className="italic mb-2">Inspiration:</p>
                        <p className="font-light leading-relaxed">{work.inspiration}</p>
                        <div className="absolute bottom-0 right-4 translate-y-1/2 rotate-45 w-2 h-2 bg-gallery-charcoal" />
                      </div>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </main>
      </div>
    </motion.div>
  );
}
