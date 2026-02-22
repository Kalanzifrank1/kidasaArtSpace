import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { exhibitions } from '../data';

export default function Home() {
  const featured = exhibitions[0];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.8 }}
    >
      {/* Hero Section */}
      <section className="relative h-[90vh] overflow-hidden">
        <img
          src={featured.image}
          alt={featured.title}
          className="w-full h-full object-cover"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-black/20" />
        
        <div className="absolute inset-0 flex items-center justify-center px-6">
          <motion.div
            initial={{ y: 40, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.4, duration: 1 }}
            className="bg-gallery-white p-10 md:p-20 max-w-2xl shadow-2xl"
          >
            <span className="text-xs uppercase tracking-[0.3em] text-gallery-charcoal/50 mb-4 block">Featured Exhibition</span>
            <h1 className="text-5xl md:text-7xl font-serif leading-tight mb-8">
              Light & Shadow:<br />The 2024 Collection
            </h1>
            <Link
              to="/our-story"
              className="inline-block border border-gallery-charcoal px-8 py-4 text-xs uppercase tracking-widest font-semibold hover:bg-gallery-charcoal hover:text-gallery-white transition-all"
            >
              Explore the Narrative
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Featured Stories Section */}
      <section className="py-32 px-6 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <motion.div
            initial={{ x: -40, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="relative"
          >
            <img
              src="https://picsum.photos/seed/artist-work/800/1000"
              alt="Artist at work"
              className="w-full aspect-[4/5] object-cover grayscale hover:grayscale-0 transition-all duration-700"
              referrerPolicy="no-referrer"
            />
            <div className="absolute -bottom-10 -right-10 w-64 h-64 border border-gallery-charcoal/10 -z-10 hidden md:block" />
          </motion.div>

          <motion.div
            initial={{ x: 40, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="space-y-8"
          >
            <h2 className="text-4xl md:text-5xl font-serif italic">Our Founding Inspiration</h2>
            <div className="space-y-6 text-gallery-charcoal/80 leading-relaxed font-light">
              <p>
                Aura Gallery was born from a simple observation: that art is more than just a visual experience; it is a vessel for human narrative. Founded in 2018 in a small studio in Paris, our mission has always been to bridge the gap between the creator's intent and the collector's soul.
              </p>
              <p>
                We believe that every brushstroke carries a weight of emotion, and every sculpture holds a silent history. By focusing on "The Story Behind the Art," we invite our visitors to look deeper, to understand the sleepless nights, the moments of epiphany, and the cultural currents that shape each masterpiece.
              </p>
              <p>
                Today, Aura represents a global collective of artists who share this philosophy. We don't just sell art; we preserve legacies and foster connections that transcend the canvas.
              </p>
            </div>
            <Link
              to="/our-story"
              className="inline-block text-xs uppercase tracking-widest font-bold border-b border-gallery-charcoal pb-2 hover:opacity-60 transition-opacity"
            >
              Read Our Full Story
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Mini Gallery Preview */}
      <section className="bg-gallery-white py-32 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="flex justify-between items-end mb-16">
            <h2 className="text-4xl font-serif">Latest Acquisitions</h2>
            <Link to="/artists" className="text-xs uppercase tracking-widest font-bold hover:opacity-60">View All</Link>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {[1, 2, 3].map((i) => (
              <motion.div
                key={i}
                whileHover={{ y: -10 }}
                className="group cursor-pointer"
              >
                <div className="overflow-hidden mb-6 aspect-[3/4]">
                  <img
                    src={`https://picsum.photos/seed/art-preview-${i}/600/800`}
                    alt="Artwork"
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    referrerPolicy="no-referrer"
                  />
                </div>
                <h3 className="font-serif text-xl mb-1">Ethereal Study No. {i}</h3>
                <p className="text-xs uppercase tracking-widest text-gallery-charcoal/40">Elara Vance</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </motion.div>
  );
}
