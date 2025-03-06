import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Scroll to the top when navigating
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [location]);

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-dark-bg/80 backdrop-blur-md shadow-lg' : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center space-x-3">
            <Link to="/" className="flex items-center space-x-2">
              <img
                src="https://res.cloudinary.com/dqjrizifp/image/upload/v1741027208/photo_2025-03-04_00-09-50_pujkfn.jpg"
                alt="Intellina Logo"
                className="h-12 w-12 rounded-full border-2 border-neon-blue shadow-lg"
              />
              <span className="text-2xl font-bold text-white">
                INTEL<span className="text-neon-blue">LINA</span>
              </span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-6">
              <Link to="/" className="px-3 py-2 text-sm font-medium text-white hover:text-neon-blue transition duration-300">
                Home
              </Link>
              <Link to="/about" className="px-3 py-2 text-sm font-medium text-white hover:text-neon-blue transition duration-300">
                About
              </Link>
              <Link to="/events" className="px-3 py-2 text-sm font-medium text-white hover:text-neon-blue transition duration-300">
                Events
              </Link>
              <Link to="/chronoline" className="px-3 py-2 text-sm font-medium text-white hover:text-neon-blue transition duration-300">
  Chronoline
</Link>

              <Link to="/team" className="px-3 py-2 text-sm font-medium text-white hover:text-neon-blue transition duration-300">Team</Link>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-md text-white hover:text-neon-blue focus:outline-none"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
          exit={{ opacity: 0, height: 0 }}
          transition={{ duration: 0.3 }}
          className="md:hidden bg-dark-tertiary/90 backdrop-blur-lg"
        >
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <Link to="/" onClick={() => setIsOpen(false)} className="block px-3 py-2 rounded-md text-base font-medium text-white hover:text-neon-blue transition duration-300">
              Home
            </Link>
            <Link to="/about" onClick={() => setIsOpen(false)} className="block px-3 py-2 rounded-md text-base font-medium text-white hover:text-neon-blue transition duration-300">
              About
            </Link>
            <Link to="/events" onClick={() => setIsOpen(false)} className="block px-3 py-2 rounded-md text-base font-medium text-white hover:text-neon-blue transition duration-300">
              Events
            </Link>
            <Link to="/chronoline" onClick={() => setIsOpen(false)} className="block px-3 py-2 rounded-md text-base font-medium text-white hover:text-neon-blue transition duration-300">
  Chronoline
</Link>

            <Link to="/team" onClick={() => setIsOpen(false)} className="block px-3 py-2 rounded-md text-base font-medium text-white hover:text-neon-blue transition duration-300">
  Team
</Link>
          </div>
        </motion.div>
      )}
    </motion.nav>
  );
};

export default Navbar;
