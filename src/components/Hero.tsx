import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { gsap } from 'gsap';
import { Calendar, MapPin, Clock } from 'lucide-react';

const Hero = () => {
  const textRef = useRef<HTMLHeadingElement>(null);
  
  useEffect(() => {
    if (textRef.current) {
      const text = textRef.current;
      
      gsap.to(text, {
        backgroundPosition: '200% center',
        duration: 5,
        repeat: -1,
        ease: 'linear'
      });
    }
  }, []);

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full grid-bg opacity-30"></div>
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full bg-neon-blue/20 blur-xl"
            style={{
              width: Math.random() * 200 + 50,
              height: Math.random() * 200 + 50,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              x: [Math.random() * 100 - 50, Math.random() * 100 - 50],
              y: [Math.random() * 100 - 50, Math.random() * 100 - 50],
              opacity: [0.1, 0.3, 0.1],
            }}
            transition={{
              duration: Math.random() * 10 + 10,
              repeat: Infinity,
              repeatType: 'reverse',
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-4 z-10">
        <div className="flex flex-col items-center text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-4"
          >
            <span className="px-4 py-1 rounded-full bg-neon-blue/10 border border-neon-blue/30 text-neon-blue text-sm ">
              TECHNICAL SYMPOSIUM 2025
            </span>
          </motion.div>

          <motion.h1
            ref={textRef}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-5xl md:text-7xl lg:text-8xl  font-bold mb-6 tracking-tight"
            style={{
              backgroundImage: 'linear-gradient(90deg, #ffffff, #00f3ff, #9d4edd, #ffffff)',
              backgroundSize: '200% auto',
              color: 'transparent',
              WebkitBackgroundClip: 'text',
              backgroundClip: 'text',
            }}
          >
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-sans font-bold mb-4">
              <span className="text-gradient glitch-effect" data-text="INTELLINA" >INTELLINA</span>
            </h1>
          </motion.h1>
          

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="text-xl md:text-2xl text-gray-300 mb-8 max-w-2xl"
          >
            Explore the future of technology at the most innovative technical symposium of the year
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="flex flex-wrap justify-center gap-4 mb-12"
          >
            <div className="flex items-center space-x-2 bg-dark-tertiary/50 px-4 py-2 rounded-lg">
              <Calendar className="h-5 w-5 text-neon-blue" />
              <span>April 4-5, 2025</span>
            </div>
            <div className="flex items-center space-x-2 bg-dark-tertiary/50 px-4 py-2 rounded-lg">
              <MapPin className="h-5 w-5 text-neon-blue" />
              <span>College Campus, Coimbatore Institute of Technology</span>
            </div>
            <div className="flex items-center space-x-2 bg-dark-tertiary/50 px-4 py-2 rounded-lg">
              <Clock className="h-5 w-5 text-neon-blue" />
              <span>9:00 AM - 5:00 PM</span>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.8 }}
            className="flex flex-wrap gap-4 justify-center"
          >
            <a href="#register" className="neon-button">
              Register Now
            </a>
            <a href="#events" className="px-6 py-3 bg-dark-tertiary/50 text-white rounded-md font-semibold transition-all duration-300 hover:bg-dark-tertiary hover:scale-105">
              Explore Events
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1.2 }}
            className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
          >
            
              <motion.div
                animate={{ height: ['20%', '30%', '20%'] }}
                transition={{ duration: 1.5, repeat: Infinity }}
                className="w-1 bg-white/60 rounded-full"
              />
            </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;