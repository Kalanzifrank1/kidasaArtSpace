import { BrowserRouter as Router, Routes, Route, Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'motion/react';
import { useEffect } from 'react';
import Home from './pages/Home';
import Portfolio from './pages/Portfolio';
import ArtworkDetail from './pages/ArtworkDetail';
import Exhibition from './pages/Exhibition';
import Contact from './pages/Contact';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

export default function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="min-h-screen flex flex-col selection:bg-gallery-charcoal selection:text-gallery-white">
        <Navbar />
        <main className="flex-grow">
          <AnimatePresence mode="wait">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/artists" element={<Portfolio />} />
              <Route path="/artwork/:id" element={<ArtworkDetail />} />
              <Route path="/our-story" element={<Exhibition />} />
              <Route path="/collections" element={<Home />} />
              <Route path="/contact" element={<Contact />} />
            </Routes>
          </AnimatePresence>
        </main>
        <Footer />
      </div>
    </Router>
  );
}
