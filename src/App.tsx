import React, { useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Chronoline from './components/Chronoline';

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
  }, []);

  return (
    <div className="min-h-screen">
      {/* Parallax Background */}
      <div className="fixed inset-0 bg-dark-bg -z-10 parallax-bg"></div>

      {/* Render Chronoline if on /chronoline route */}
      {location.pathname === "/chronoline" ? (
        <Chronoline />
      ) : (
        <>
          <Navbar />
          <Hero />
          <Footer />
        </>
      )}
    </div>
  );
}

export default App;
