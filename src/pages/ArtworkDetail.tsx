import { motion, AnimatePresence } from 'motion/react';
import { useParams, Link } from 'react-router-dom';
import { useState } from 'react';
import { artworks, artists } from '../data';
import { ChevronDown, ChevronUp, Maximize2, Home } from 'lucide-react';

export default function ArtworkDetail() {
  const { id } = useParams();
  const work = artworks.find(w => w.id === id);
  const artist = artists.find(a => a.id === work?.artistId);
  
  const [viewMode, setViewMode] = useState<'standard' | 'room'>('standard');
  const [openAccordion, setOpenAccordion] = useState<string | null>(null);

  if (!work) return <div className="py-40 text-center font-serif text-2xl">Artwork not found.</div>;

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="max-w-7xl mx-auto px-6 py-20"
    >
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
        {/* Left: Visuals */}
        <div className="lg:col-span-7 space-y-6">
          <div className="relative aspect-[4/5] overflow-hidden bg-gallery-white shadow-sm">
            <AnimatePresence mode="wait">
              {viewMode === 'standard' ? (
                <motion.img
                  key="standard"
                  initial={{ opacity: 0, scale: 1.05 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0 }}
                  src={work.image}
                  alt={work.title}
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
              ) : (
                <motion.div
                  key="room"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="w-full h-full bg-stone-200 flex items-center justify-center p-20"
                >
                   <div className="relative w-full h-full flex items-center justify-center">
                      {/* Simulated Room */}
                      <div className="absolute bottom-0 w-full h-1/4 bg-stone-300/50" />
                      <img
                        src={work.image}
                        alt={work.title}
                        className="relative z-10 w-1/2 shadow-2xl border-[12px] border-white"
                        referrerPolicy="no-referrer"
                      />
                      <div className="absolute bottom-10 left-10 w-32 h-64 bg-stone-400/20 rounded-t-full" />
                   </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
          
          <div className="flex justify-center space-x-8">
            <button
              onClick={() => setViewMode('standard')}
              className={`flex items-center space-x-2 text-xs uppercase tracking-widest font-bold transition-colors ${viewMode === 'standard' ? 'text-gallery-charcoal' : 'text-gallery-charcoal/30'}`}
            >
              <Maximize2 size={14} />
              <span>Detail View</span>
            </button>
            <button
              onClick={() => setViewMode('room')}
              className={`flex items-center space-x-2 text-xs uppercase tracking-widest font-bold transition-colors ${viewMode === 'room' ? 'text-gallery-charcoal' : 'text-gallery-charcoal/30'}`}
            >
              <Home size={14} />
              <span>View in Room</span>
            </button>
          </div>
        </div>

        {/* Right: Details & CTA */}
        <div className="lg:col-span-5 space-y-12">
          <header>
            <Link to="/artists" className="text-xs uppercase tracking-widest font-bold text-gallery-charcoal/40 hover:text-gallery-charcoal transition-colors mb-4 block">
              {artist?.name}
            </Link>
            <h1 className="text-5xl font-serif mb-4">{work.title}</h1>
            <div className="flex items-center space-x-4 text-sm text-gallery-charcoal/60">
              <span>{work.medium}</span>
              <span className="w-1 h-1 bg-gallery-charcoal/20 rounded-full" />
              <span>{work.dimensions}</span>
            </div>
          </header>

          <section className="space-y-6">
            <h2 className="text-xs uppercase tracking-[0.2em] font-bold text-gallery-charcoal/40">The Genesis of this Piece</h2>
            <p className="text-gallery-charcoal/80 leading-relaxed font-light text-lg">
              {work.story}
            </p>
          </section>

          <div className="space-y-4">
            <button className="w-full bg-gallery-charcoal text-gallery-white py-5 text-xs uppercase tracking-[0.2em] font-bold hover:bg-gallery-charcoal/90 transition-colors shadow-lg">
              Inquire to Acquire
            </button>
            
            <div className="border-t border-gallery-charcoal/10 pt-4 space-y-2">
              {[
                { id: 'shipping', title: 'Shipping & Provenance', content: 'Each artwork is shipped in custom-built museum-grade crates. A signed Certificate of Authenticity and a detailed provenance report are included with the acquisition.' },
                { id: 'framing', title: 'Framing Options', content: 'We offer bespoke framing services using archival materials. Contact our curators to discuss options that complement your space.' }
              ].map((item) => (
                <div key={item.id} className="border-b border-gallery-charcoal/5">
                  <button
                    onClick={() => setOpenAccordion(openAccordion === item.id ? null : item.id)}
                    className="w-full py-4 flex justify-between items-center text-xs uppercase tracking-widest font-bold text-gallery-charcoal/60 hover:text-gallery-charcoal transition-colors"
                  >
                    {item.title}
                    {openAccordion === item.id ? <ChevronUp size={14} /> : <ChevronDown size={14} />}
                  </button>
                  <AnimatePresence>
                    {openAccordion === item.id && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        className="overflow-hidden"
                      >
                        <p className="pb-6 text-sm text-gallery-charcoal/60 leading-relaxed">
                          {item.content}
                        </p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
