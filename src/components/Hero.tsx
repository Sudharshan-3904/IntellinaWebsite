import React, { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { gsap } from 'gsap';
import { Calendar, MapPin, Clock } from 'lucide-react';
import { Link } from "react-router-dom";
import Confetti from "react-confetti";
import { useWindowSize } from "react-use";

const Hero = () => {
  const textRef = useRef<HTMLHeadingElement>(null);
  const [timeLeft, setTimeLeft] = useState({ days: "00", hours: "00", minutes: "00", seconds: "00" });
  const [eventStarted, setEventStarted] = useState(false);
  const { width, height } = useWindowSize(); // Get screen dimensions for Confetti

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
    const eventDate = new Date("April 4, 2025 10:00:00").getTime();

    const updateCountdown = () => {
      const now = new Date().getTime();
      const timeRemaining = eventDate - now;

      if (timeRemaining <= 0) {
        setTimeLeft({ days: "00", hours: "00", minutes: "00", seconds: "00" });
        setEventStarted(true); // Trigger celebration effects
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

    return () => clearInterval(countdownInterval);
  }, []);

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20">
      {/* 🎉 Confetti Effect When Event Starts */}
      {eventStarted && <Confetti width={width} height={height} numberOfPieces={300} />}

      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
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
              repeatType: "reverse",
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
            className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6 tracking-tight"
            style={{
              backgroundImage: 'linear-gradient(90deg, #ffffff, #00f3ff, #9d4edd, #ffffff)',
              backgroundSize: '200% auto',
              color: 'transparent',
              WebkitBackgroundClip: 'text',
              backgroundClip: 'text',
            }}
          >
            <h1 className="text-6xl md:text-6xl lg:text-7xl font-sans font-bold">
              <span className="text-gradient glitch-effect" data-text="INTELLINA">INTELLINA</span>
            </h1>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="text-xl md:text-2xl text-gray-300 mb-8 max-w-2xl"
          >
            <span className="text-1xl text-white">
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
              <span>Coimbatore Institute of Technology</span>
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

          {/* Registration Closed Message (Hides when event starts) */}
          {!eventStarted && (
            <>
              <p className="text-lg font-semibold text-red-500">
                Registration Closed ❌
              </p>
              <p className="text-md text-white mt-2 text-sm">
                On-spot Registration: ₹350
              </p>
            </>
          )}


          {/* Countdown Timer */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 1 }}
            className="text-center mt-6 mb-8"
          >
            <h3 className="text-2xl font-bold text-neon-blue">Event Starts In</h3>
            <div className="flex justify-center items-center gap-4 mt-3 text-white text-lg">
            {["days", "hours", "minutes", "seconds"].map((unit, index) => (
              <React.Fragment key={unit}>
                {index > 0 && <span className="text-4xl font-bold">:</span>}
                <div className="flex flex-col items-center">
                  <motion.span 
                    animate={{ scale: [1, 1.1, 1] }} 
                    transition={{ duration: 1, repeat: Infinity }}
                    className="text-4xl font-bold"
                  >
                    {timeLeft[unit as keyof typeof timeLeft]} {/* ✅ Fixed line */}
                  </motion.span>
                  <span className="text-sm">{unit.charAt(0).toUpperCase() + unit.slice(1)}</span>
                </div>
              </React.Fragment>
            ))}

            </div>
          </motion.div>
          
          {/* 🎊 Celebration Message After Countdown Ends */}
          {eventStarted && (
            <motion.div
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
              className="text-center mt-10 text-white"
            >
              <h2 className="text-4xl font-bold text-yellow-400 animate-pulse">The Event Has Begun!</h2>
              <p className="text-lg mt-3">Let the excitement begin!</p>
            </motion.div>
          )}
          
          {/* Hackathon Themes Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 1.2 }}
            className="text-center mt-12"
          >
            <h3 className="text-2xl font-bold text-neon-blue mb-6">Hackathon Themes</h3>
            {new Date().getTime() < new Date("April 4, 2025 10:15:00").getTime() ? (
              <p className="text-white text-lg font-semibold">Themes will be disclosed by 10:15 AM on April 4, 2025.</p>
            ) : (
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 text-white">
                {[
                  "FinTech & Digital Payments",
                  "Bioinformatics & AI-Driven Healthcare",
                  "Edge Computing & IoT Innovation",
                  "AI for Wildlife Conservation & Biodiversity",
                  "Education & E-Learning",
                  "Remote Work & Productivity Tools ",
                  "Judiciary",
                ].map((theme, index) => (
                  <motion.div
                    key={index}
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.3 }}
                    className="p-4 bg-dark-tertiary/50 rounded-lg shadow-lg"
                  >
                    {theme}
                  </motion.div>
                ))}
              </div>
            )}
          </motion.div>



        </div>
      </div>
    </section>
  );
};

export default Hero;
