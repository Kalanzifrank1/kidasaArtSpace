import { Link, useLocation } from 'react-router-dom';
import { motion } from 'motion/react';

export default function Navbar() {
  const location = useLocation();
  
  const navItems = [
    { name: 'Artists', path: '/artists' },
    { name: 'Collections', path: '/collections' },
    { name: 'Our Story', path: '/our-story' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <nav className="sticky top-0 z-50 bg-gallery-beige/80 backdrop-blur-md border-b border-gallery-charcoal/5">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        <Link to="/" className="font-serif text-2xl tracking-tight hover:opacity-70 transition-opacity">
          Aura Gallery
        </Link>
        
        <div className="hidden md:flex items-center space-x-12">
          {navItems.map((item) => (
            <Link
              key={item.name}
              to={item.path}
              className={`text-sm uppercase tracking-widest font-medium transition-colors hover:text-gallery-charcoal/60 ${
                location.pathname === item.path ? 'text-gallery-charcoal' : 'text-gallery-charcoal/40'
              }`}
            >
              {item.name}
              {location.pathname === item.path && (
                <motion.div
                  layoutId="nav-underline"
                  className="h-px bg-gallery-charcoal mt-1"
                />
              )}
            </Link>
          ))}
        </div>
        
        <button className="md:hidden text-gallery-charcoal">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
          </svg>
        </button>
      </div>
    </nav>
  );
}
