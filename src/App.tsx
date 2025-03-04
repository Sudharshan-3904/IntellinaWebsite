import React, { useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Events from './components/Events';
import OnlineGames from './components/OnlineGames';
import OfflineGames from './components/OfflineGames';
import Contact from './components/Contact';
import Footer from './components/Footer';

gsap.registerPlugin(ScrollTrigger);

function App() {
  useEffect(() => {
    // Initialize GSAP animations
    gsap.to('.parallax-bg', {
      backgroundPositionY: '100%',
      ease: 'none',
      scrollTrigger: {
        trigger: '.parallax-bg',
        start: 'top top',
        end: 'bottom top',
        scrub: true
      }
    });

    // Animate sections on scroll
    const sections = document.querySelectorAll('section');
    sections.forEach(section => {
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
            scrub: 1
          }
        }
      );
    });
  }, []);

  return (
    <div className="min-h-screen">
      <div className="fixed inset-0 bg-dark-bg -z-10 parallax-bg"></div>
      <Navbar />
      <Hero />
      <About />
      <Events />
      <OnlineGames />
      <OfflineGames />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;