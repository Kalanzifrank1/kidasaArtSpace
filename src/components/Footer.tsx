import { motion } from 'motion/react';

export default function Footer() {
  return (
    <footer className="bg-gallery-white border-t border-gallery-charcoal/5 pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start mb-20">
          <div>
            <h3 className="font-serif text-3xl mb-6 italic">Join our inner circle of collectors.</h3>
            <p className="text-gallery-charcoal/60 max-w-md mb-8">
              Receive exclusive previews of new collections, artist interviews, and invitations to private viewings.
            </p>
            <form className="flex max-w-md border-b border-gallery-charcoal">
              <input
                type="email"
                placeholder="Email Address"
                className="flex-grow py-3 bg-transparent outline-none text-sm tracking-wide"
              />
              <button className="px-4 py-3 text-xs uppercase tracking-widest font-semibold hover:opacity-60 transition-opacity">
                Subscribe
              </button>
            </form>
          </div>
          
          <div className="grid grid-cols-2 gap-8 md:justify-items-end">
            <div className="space-y-4">
              <h4 className="text-xs uppercase tracking-widest font-bold text-gallery-charcoal/40">Navigation</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="#" className="hover:text-gallery-charcoal/60">Exhibitions</a></li>
                <li><a href="#" className="hover:text-gallery-charcoal/60">Artists</a></li>
                <li><a href="#" className="hover:text-gallery-charcoal/60">Collections</a></li>
                <li><a href="#" className="hover:text-gallery-charcoal/60">About Us</a></li>
              </ul>
            </div>
            <div className="space-y-4">
              <h4 className="text-xs uppercase tracking-widest font-bold text-gallery-charcoal/40">Connect</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="#" className="hover:text-gallery-charcoal/60">Instagram</a></li>
                <li><a href="#" className="hover:text-gallery-charcoal/60">Twitter</a></li>
                <li><a href="#" className="hover:text-gallery-charcoal/60">Artsy</a></li>
                <li><a href="#" className="hover:text-gallery-charcoal/60">LinkedIn</a></li>
              </ul>
            </div>
          </div>
        </div>
        
        <div className="flex flex-col md:flex-row justify-between items-center pt-10 border-t border-gallery-charcoal/5 text-[10px] uppercase tracking-[0.2em] text-gallery-charcoal/40">
          <p>© 2024 Aura Art Gallery. All rights reserved.</p>
          <div className="flex space-x-8 mt-4 md:mt-0">
            <a href="#" className="hover:text-gallery-charcoal">Privacy Policy</a>
            <a href="#" className="hover:text-gallery-charcoal">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
