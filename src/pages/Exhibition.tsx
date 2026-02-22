import { motion } from 'motion/react';
import { useState } from 'react';
import { exhibitions } from '../data';

export default function Exhibition() {
  const [selectedExhibition, setSelectedExhibition] = useState<string | null>(null);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="py-20"
    >
      {/* Header */}
      <header className="max-w-4xl mx-auto px-6 text-center mb-32">
        <span className="text-xs uppercase tracking-[0.4em] text-gallery-charcoal/40 mb-6 block">Our Philosophy</span>
        <h1 className="text-6xl md:text-7xl font-serif mb-10 italic">Beyond the Canvas</h1>
        <p className="text-xl text-gallery-charcoal/60 leading-relaxed font-light">
          At Aura, we believe that art is a living dialogue. It doesn't end when the paint dries or the stone is carved. It continues through the stories we tell and the connections we forge.
        </p>
      </header>

      {/* Timeline Section */}
      <section className="max-w-7xl mx-auto px-6 mb-40">
        <div className="relative">
          {/* Vertical Line */}
          <div className="absolute left-1/2 top-0 bottom-0 w-px bg-gallery-charcoal/10 hidden md:block" />
          
          <div className="space-y-32">
            {[
              { year: '2018', title: 'The First Spark', desc: 'Aura was founded in a small studio in Paris with just three artists and a shared vision of narrative-driven curation.' },
              { year: '2020', title: 'Digital Expansion', desc: 'We launched our virtual viewing rooms, allowing collectors from around the world to experience the emotional weight of our collections from afar.' },
              { year: '2022', title: 'The Global Collective', desc: 'Our roster expanded to include 40 artists from 15 countries, each bringing a unique cultural story to our gallery.' },
              { year: '2024', title: 'The Future of Storytelling', desc: 'We are integrating interactive elements into our physical spaces, further blurring the line between the art and the observer.' }
            ].map((item, idx) => (
              <motion.div
                key={item.year}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: idx * 0.1 }}
                className={`flex flex-col md:flex-row items-center ${idx % 2 === 0 ? 'md:flex-row-reverse' : ''}`}
              >
                <div className="md:w-1/2 flex justify-center mb-8 md:mb-0">
                  <span className="text-8xl font-serif text-gallery-charcoal/5">{item.year}</span>
                </div>
                
                {/* Center Dot */}
                <div className="absolute left-1/2 -translate-x-1/2 w-3 h-3 bg-gallery-charcoal rounded-full hidden md:block" />
                
                <div className={`md:w-1/2 px-10 ${idx % 2 === 0 ? 'md:text-right' : 'md:text-left'}`}>
                  <h3 className="text-2xl font-serif mb-4 italic">{item.title}</h3>
                  <p className="text-gallery-charcoal/60 leading-relaxed font-light">{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Exhibition Cards */}
      <section className="bg-gallery-white py-32 px-6">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-serif mb-20 text-center">Curated Journeys</h2>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
            {exhibitions.map((exh) => (
              <motion.div
                key={exh.id}
                whileHover={{ y: -10 }}
                className="group bg-gallery-beige p-8 flex flex-col h-full"
              >
                <div className="mb-8 overflow-hidden aspect-video">
                  <img
                    src={exh.image}
                    alt={exh.title}
                    className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700"
                    referrerPolicy="no-referrer"
                  />
                </div>
                
                <div className="flex-grow">
                  <span className={`text-[10px] uppercase tracking-widest font-bold px-3 py-1 rounded-full mb-4 inline-block ${
                    exh.type === 'Current' ? 'bg-emerald-100 text-emerald-800' : 
                    exh.type === 'Past' ? 'bg-stone-200 text-stone-600' : 'bg-blue-100 text-blue-800'
                  }`}>
                    {exh.type} Exhibition
                  </span>
                  <h3 className="text-2xl font-serif mb-4">{exh.title}</h3>
                  <p className="text-xs text-gallery-charcoal/40 mb-6 uppercase tracking-widest">{exh.date}</p>
                </div>

                <button
                  onClick={() => setSelectedExhibition(selectedExhibition === exh.id ? null : exh.id)}
                  className="text-xs uppercase tracking-widest font-bold border-b border-gallery-charcoal pb-1 self-start hover:opacity-60 transition-opacity"
                >
                  {selectedExhibition === exh.id ? 'Hide Note' : 'Read the Curatorial Note'}
                </button>

                {selectedExhibition === exh.id && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    className="mt-8 pt-8 border-t border-gallery-charcoal/5"
                  >
                    <p className="text-sm text-gallery-charcoal/70 leading-relaxed italic">
                      "{exh.curatorialNote}"
                    </p>
                  </motion.div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </motion.div>
  );
}
