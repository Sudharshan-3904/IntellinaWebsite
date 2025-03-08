import React, { useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Sponsors from './components/Sponsors';
import Footer from './components/Footer';
import Chronoline from './components/Chronoline';
import Guests from './components/Guests';
import Gallery from './components/Gallery';

gsap.registerPlugin(ScrollTrigger);

function App() {
  const location = useLocation();

  useEffect(() => {
    // Parallax Background Animation
    gsap.to('.parallax-bg', {
      backgroundPositionY: '100%',
      ease: 'none',
      scrollTrigger: {
        trigger: '.parallax-bg',
        start: 'top top',
        end: 'bottom top',
        scrub: true,
      },
    });

    // Section Scroll Animations
    const sections = document.querySelectorAll('section');
    sections.forEach((section) => {
      gsap.fromTo(
        section,
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          scrollTrigger: {
            trigger: section,
            start: 'top 80%',
            end: 'top 50%',
            scrub: 1,
          },
        }
      );
    });

    // ✅ Fix Mobile Screen Resize Issue
    const handleResize = () => {
      document.documentElement.style.setProperty('overflow-x', 'hidden');
      document.body.style.setProperty('overflow-x', 'hidden');
    };

    // Run once on mount & also on resize
    handleResize();
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <div className="min-h-screen overflow-hidden">
      {/* Parallax Background */}
      <div className="fixed inset-0 bg-dark-bg -z-10 parallax-bg"></div>

      {/* Render Chronoline if on /chronoline route */}
      {location.pathname === "/chronoline" ? (
        <Chronoline />
      ) : (
        <>
          <Navbar />
          <Hero />
          <Sponsors />
          <Guests />
          <Gallery />
          <Footer />
        </>
      )}
    </div>
  );
}

export default App;
