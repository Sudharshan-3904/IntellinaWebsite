import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      setScrolled(offset > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Events', href: '#events' },
    { name: 'Online Games', href: '#online-games' },
    { name: 'Offline Games', href: '#offline-games' },
    { name: 'Contact', href: '#contact' },
  ];

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
            <a href="#home" className="flex items-center space-x-2">
              <img
                src="https://res.cloudinary.com/dqjrizifp/image/upload/v1741027208/photo_2025-03-04_00-09-50_pujkfn.jpg"
                alt="Intellina Logo"
                className="h-12 w-12 rounded-full border-2 border-neon-blue shadow-lg"
              />
              <span className="text-2xl font-bold text-white">
                INTEL<span className="text-neon-blue">LINA</span>
              </span>
            </a>
          </div>
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="px-3 py-2 text-sm font-medium text-white hover:text-neon-blue transition-colors duration-300"
                >
                  {link.name}
                </a>
              ))}
              <a
                href="#register"
                className="ml-4 px-4 py-2 rounded-md text-sm font-medium bg-neon-blue text-dark-bg hover:bg-neon-blue/80 transition-colors duration-300"
              >
                Register Now
              </a>
            </div>
          </div>
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-white hover:text-neon-blue focus:outline-none"
            >
              {isOpen ? <X className="block h-6 w-6" aria-hidden="true" /> : <Menu className="block h-6 w-6" aria-hidden="true" />}
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
          exit={{ opacity: 0, height: 0 }}
          transition={{ duration: 0.3 }}
          className="md:hidden bg-dark-tertiary/90 backdrop-blur-lg"
        >
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="block px-3 py-2 rounded-md text-base font-medium text-white hover:text-neon-blue hover:bg-dark-bg/50 transition-colors duration-300"
              >
                {link.name}
              </a>
            ))}
            <a
              href="#register"
              onClick={() => setIsOpen(false)}
              className="block px-3 py-2 rounded-md text-base font-medium bg-neon-blue text-dark-bg hover:bg-neon-blue/80 transition-colors duration-300 mt-4"
            >
              Register Now
            </a>
          </div>
        </motion.div>
      )}
    </motion.nav>
  );
};

export default Navbar;

// Add this CSS rule to your global styles or Tailwind configuration:
// Ensure all sections have enough margin to prevent content from hiding under the navbar
const globalStyles = `
  section {
    scroll-margin-top: 5rem; /* Adjust this value according to your navbar height */
  }
`;

document.head.insertAdjacentHTML('beforeend', `<style>${globalStyles}</style>`);
