import React, { useEffect, useRef } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { motion } from "framer-motion";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

// Web Developers Data
const developers = [
  { 
    name: "Akshay Karthick M S", 
    role: "Developer", 
    image: "https://res.cloudinary.com/dxcctqlbr/image/upload/v1741527664/IMG-20240708-WA0281_ly8cox.jpg",
    linkedin: "https://www.linkedin.com/in/akshay-karthick-m-s-48a880268/",
    instagram: "https://www.instagram.com/acchu_ak_07?igsh=ZXJyc2ppM2M0YWVn"
  },
  { 
    name: "Dineshkumar R", 
    role: "Developer", 
    image: "https://res.cloudinary.com/dqjrizifp/image/upload/v1741254817/photo_2025-03-06_15-21-43_dccinm.jpg" 
  },
  
];

// Board Members Data
const boardMembers = [
  { 
    name: "Harish B", 
    role: "Chairman", 
    image: "https://res.cloudinary.com/dqjrizifp/image/upload/v1741254817/photo_2025-03-06_15-21-55_lkzkon.jpg" 
  },
  { 
    name: "Sudharshan M Prabhu", 
    role: "Coordinator", 
    image: "https://res.cloudinary.com/dxcctqlbr/image/upload/v1741319770/photo_2025-03-07_09-24-59_cwhxlp.jpg" 
  },
  { 
    name: "Naveen Prasath K", 
    role: "Student Advisor", 
    image: "https://res.cloudinary.com/dqjrizifp/image/upload/v1741254817/photo_2025-03-06_15-22-03_qlx92l.jpg" 
  },
  { 
    name: "Gokul P", 
    role: "Secretary", 
    image: "https://res.cloudinary.com/dqjrizifp/image/upload/v1741254817/photo_2025-03-06_15-21-51_lpchtu.jpg" 
  },
  { 
    name: "Sanjay S", 
    role: "Treasurer", 
    image: "https://res.cloudinary.com/dqjrizifp/image/upload/v1741254818/photo_2025-03-06_15-21-59_kakebh.jpg" 
  },
];

const Team = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    gsap.fromTo(
      containerRef.current,
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: { trigger: containerRef.current, start: "top 80%" },
      }
    );
  }, []);

  return (
    <div className="bg-black min-h-screen text-white">
      <Navbar />

      {/* Page Title */}
      <div className="text-center pt-24 pb-8">
        <h1 className="text-4xl md:text-5xl font-extrabold text-white uppercase tracking-widest drop-shadow-md">
          Meet <span className="text-neon-blue">Our Team</span>
        </h1>
        <p className="text-gray-300 text-sm md:text-base mt-2 max-w-2xl mx-auto px-4">
          A team of passionate individuals dedicated to making an impact through innovation, creativity, and leadership.
        </p>
      </div>

      <div ref={containerRef} className="container mx-auto px-6 py-6">
        {/* Web Developers Section */}
        <div className="text-center mb-6">
          <h2 className="text-2xl md:text-3xl font-bold text-white uppercase drop-shadow-md">
            Web <span className="text-neon-blue">Developers</span>
          </h2>
          <p className="text-gray-300 text-xs">
          The Dynamic Duo
        </p>
        </div>

        <div className="flex flex-wrap justify-center gap-8">
          {developers.map((dev, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
              className="relative bg-dark-tertiary p-6 rounded-xl shadow-lg flex flex-col items-center text-center w-64"
            >
              {/* Social Media Icons at Top-Right */}
<div className="absolute top-3 right-3 flex gap-2">
  {dev.linkedin && (
    <a
      href={dev.linkedin}
      target="_blank"
      rel="noopener noreferrer"
      className="text-white hover:text-neon-blue transition-colors duration-300"
    >
      <svg className="h-5 w-5 fill-current" viewBox="0 0 24 24">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452z" />
      </svg>
    </a>
  )}
  {dev.instagram && (
    <a
      href={dev.instagram}
      target="_blank"
      rel="noopener noreferrer"
      className="text-white hover:text-neon-blue transition-colors duration-300"
    >
      <svg className="h-5 w-5 fill-current" viewBox="0 0 24 24">
        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
      </svg>
    </a>
  )}
</div>


              {/* Developer Image */}
              <img
                src={dev.image}
                alt={dev.name}
                className="w-28 h-28 object-cover rounded-full border-4 border-neon-blue shadow-md"
              />

              {/* Name & Role */}
              <h2 className="text-lg font-bold mt-3">{dev.name}</h2>
              <p className="text-neon-green text-sm">{dev.role}</p>
            </motion.div>
          ))}
        </div>

        {/* Board Members Section */}
        <div className="text-center mt-16 mb-6">
          <h2 className="text-2xl md:text-3xl font-bold text-white uppercase drop-shadow-md">
            Board <span className="text-neon-blue">Members</span>
          </h2>
          <p className="text-gray-300 text-xs">
          The Fantastic Five
        </p>
        </div>

        <div className="flex flex-wrap justify-center gap-8">
          {boardMembers.map((member, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
              className="bg-dark-tertiary p-6 rounded-xl shadow-lg flex flex-col items-center text-center w-64"
            >
              <img
                src={member.image}
                alt={member.name}
                className="w-28 h-28 object-cover rounded-full border-4 border-neon-blue shadow-md"
              />
              <h2 className="text-lg font-bold mt-3">{member.name}</h2>
              <p className="text-neon-green text-sm">{member.role}</p>
            </motion.div>
          ))}
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Team;
