import React, { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { gsap } from 'gsap';
import { Calendar, MapPin, Clock } from 'lucide-react';
import { Link } from "react-router-dom";

const Hero = () => {
  const textRef = useRef<HTMLHeadingElement>(null);
  const [timeLeft, setTimeLeft] = useState({ days: "00", hours: "00", minutes: "00", seconds: "00" });

  useEffect(() => {
    // GSAP Text Animation
    if (textRef.current) {
      gsap.to(textRef.current, {
        backgroundPosition: '200% center',
        duration: 5,
        repeat: -1,
        ease: 'linear',
      });
    }

    // Countdown Timer Logic
    const eventDate = new Date("April 4, 2025 09:00:00").getTime(); // Set event date & time

    const updateCountdown = () => {
      const now = new Date().getTime();
      const timeRemaining = eventDate - now;

      if (timeRemaining <= 0) {
        setTimeLeft({ days: "00", hours: "00", minutes: "00", seconds: "00" });
        clearInterval(countdownInterval);
        return;
      }

      const days = String(Math.floor(timeRemaining / (1000 * 60 * 60 * 24))).padStart(2, "0");
      const hours = String(Math.floor((timeRemaining / (1000 * 60 * 60)) % 24)).padStart(2, "0");
      const minutes = String(Math.floor((timeRemaining / (1000 * 60)) % 60)).padStart(2, "0");
      const seconds = String(Math.floor((timeRemaining / 1000) % 60)).padStart(2, "0");

      setTimeLeft({ days, hours, minutes, seconds });
    };

    const countdownInterval = setInterval(updateCountdown, 1000);
    updateCountdown(); // Initial call to set values immediately

    return () => clearInterval(countdownInterval); // Cleanup on component unmount
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
            <h1 className="text-6xl md:text-6xl lg:text-7xl font-sans font-bold">
              <span className="text-gradient glitch-effect" data-text="INTELLINA" >INTELLINA</span>
            </h1>
          </motion.h1>
          

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="text-xl md:text-2xl text-gray-300 mb-8 max-w-2xl"
          >
<span className="text-1xl  text-white">
  Innovate <span className="text-neon-blue">|</span> Inspire <span className="text-neon-blue">|</span> Ignite
</span>
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
            className="flex flex-wrap gap-4 justify-center mb-10"
          >
            <Link to="/events" className="px-6 py-3 bg-dark-tertiary/50 text-white rounded-md font-semibold transition-all duration-300 hover:bg-dark-tertiary hover:scale-105">
  Explore Events
</Link>

          </motion.div>
          
          <motion.div
  initial={{ opacity: 0, y: 20 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.5, delay: 1.0 }}
  className="relative flex flex-wrap gap-4 justify-center mt-4"
>
  <a
    href="https://forms.gle/nPEGRoeUsyz3GUC46"
    target="_blank"
    rel="noopener noreferrer"
    className="relative px-6 py-3 bg-neon-blue text-dark-bg rounded-md font-semibold text-lg transition-all duration-300 hover:bg-neon-blue/80 shadow-lg"
  >
    Register Now

    {/* Explosion Effect Positioned Correctly */}
    <motion.div
      initial={{ scale: 0.8, opacity: 0 }}
      animate={{
        scale: [1, 1.1, 1],
        rotate: [0, 5, -5, 5, -5, 0], // Subtle shaking effect
        opacity: 1,
      }}
      transition={{
        duration: 0.8,
        repeat: Infinity,
        repeatType: "reverse",
      }}
      className="absolute -top-10 -right-24 flex items-center"
    >
      {/* Explosion Background */}
      <div className="relative w-24 h-14">
        <img
          src="https://res.cloudinary.com/dxcctqlbr/image/upload/v1741624067/pngegg_s3wzlz.png" // Replace with actual explosion image
          alt="Explosion Effect"
          className="w-full h-full object-contain drop-shadow-lg"
        />
        {/* Offer Text Inside Explosion */}
        <div className="absolute inset-0 flex flex-col items-center justify-center text-[12px] font-bold text-black leading-tight">
          <span className="text-sm">₹250</span>  
          <span className="line-through text-xs">₹300</span>  
        </div>
      </div>

      {/* Offer Details (Outside Explosion, to the Right) */}
      <div className="ml-2 text-white text-sm font-semibold leading-tight">
        <span className="text-orange-400">🔥 INTELLI-DEAL</span> <br />
        <span>Till March 31 ⏳</span>
      </div>
    </motion.div>
  </a>
</motion.div>


{/* Disclaimer */}
<p className="text-gray-400 text-center text-sm mt-2 mb-6">
  (Click register to participate in all Tech & Non-Tech events, excluding Flagship & Online Games)
</p>
<motion.div
  initial={{ opacity: 0, y: 20 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.5, delay: 1 }}
  className="text-center mt-6 mb-8"
>
  <h3 className="text-2xl font-bold text-neon-blue">Event Starts In</h3>
  <div className="flex justify-center gap-4 mt-3 text-white text-lg">
    <div className="flex flex-col items-center">
      <span className="text-4xl font-bold">{timeLeft.days}</span>
      <span className="text-sm">Days</span>
    </div>
    <div className="flex flex-col items-center">
      <span className="text-4xl font-bold">:</span>
    </div>
    <div className="flex flex-col items-center">
      <span className="text-4xl font-bold">{timeLeft.hours}</span>
      <span className="text-sm">Hours</span>
    </div>
    <div className="flex flex-col items-center">
      <span className="text-4xl font-bold">:</span>
    </div>
    <div className="flex flex-col items-center">
      <span className="text-4xl font-bold">{timeLeft.minutes}</span> 
      <span className="text-sm">Minutes</span>
    </div>
    <div className="flex flex-col items-center">
      <span className="text-4xl font-bold">:</span>
    </div>
    <div className="flex flex-col items-center">
      <span className="text-4xl font-bold">{timeLeft.seconds}</span>
      <span className="text-sm">Seconds</span>
    </div>
  </div>
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
