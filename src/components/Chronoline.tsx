import React, { useEffect, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { FaClock, FaMapMarkerAlt } from "react-icons/fa";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

gsap.registerPlugin(ScrollTrigger);

const events = [
  {
    date: "April 4",
    events: [
      { name: "Event Inaugration", time: "09:00 AM - 10:00 AM", venue: "IT-213" },
      { name: "Paper Presentation", time: "10:00 AM - 05:00 PM", venue: "M-139, IT-211, IT-212" },
      { name: "Rapid Chess", time: "10:00 AM - 05:00 PM", venue: "Online" },
      { name: "Hackathon", time: "10:00 AM - 10:30 AM", venue: "LBCH, IT-213" },
      { name: "RRR Coding", time: "10:30 AM - 01:00 PM, 02:00 PM - 03:00 PM", venue: "M-114" },
      { name: "GPTathon", time: "10:30 AM - 01:30 PM", venue: "LBCH, IT-213" },
      { name: "Treasure Hunt", time: "11:00 AM - 01:00 PM", venue: "IT-109" },
      { name: "Bigg Boss", time: "02:00 PM - 05:00 PM", venue: "LBCH" },
      { name: "NeuroQuest", time: "03:00 PM - 05:00 PM", venue: "IT-109, IT-110" },
      { name: "Web Design", time: "03:00 PM - 05:00 PM", venue: "M-114" },
    ],
  },
  {
    date: "April 5",
    events: [
      { name: "Hackathon", time: "09:00 AM - 12:30 PM", venue: "LBCH, IT-213" },
      { name: "Connections", time: "09:00 AM - 12:30 PM", venue: "IT-211, IT-212" },
      { name: "IPL Auction", time: "11:00 AM - 01:00 PM", venue: "IT-212" },
      { name: "Worst UI Design", time: "11:00 AM - 01:00 PM", venue: "M-114" },
      { name: "Event Valediction", time: "02:00 PM- 04:00 PM", venue: "M-114" },
    ],
  },
];

const Chronoline = () => {
  const [activeTab, setActiveTab] = useState("April 4");

  useEffect(() => {
    gsap.utils.toArray(".timeline-event-box").forEach((box) => {
      gsap.from(box, {
        opacity: 0,
        y: 50,
        duration: 1,
        ease: "power2.out",
        scrollTrigger: {
          trigger: box,
          start: "top 85%",
          end: "top 50%",
          scrub: 1,
        },
      });
    });
  
    // GSAP Animation for Circular Marks
    gsap.utils.toArray(".timeline-circle").forEach((circle) => {
      gsap.from(circle, {
        opacity: 0,
        scale: 0.5,
        duration: 0.8,
        ease: "power2.out",
        scrollTrigger: {
          trigger: circle,
          start: "top 85%",
          end: "top 50%",
          scrub: 1,
        },
      });
    });
  }, []);
  

  return (
    <div className="bg-[#0a0f1a] min-h-screen text-white">
      <Navbar />
      <div className="container mx-auto px-6 py-16">
        {/* Title */}
        <h1 className="text-5xl font-bold text-center text-white uppercase tracking-wide">
          Chrono<span className="text-neon-blue">line</span>
        </h1>

        {/* Tabs */}
        <div className="flex justify-center mt-10 space-x-6">
          {events.map((day) => (
            <button
              key={day.date}
              onClick={() => setActiveTab(day.date)}
              className={`px-6 py-2 text-lg font-semibold rounded-full transition-all duration-300 ${
                activeTab === day.date ? "bg-neon-blue text-black" : "bg-gray-700"
              }`}
            >
              {day.date}
            </button>
          ))}
        </div>

        {/* Timeline Desktop View */}
        <div className="hidden sm:flex flex-col w-full max-w-5xl mx-auto mt-12 relative timeline">
          <div className="absolute left-1/2 transform -translate-x-1/2 bg-neon-blue w-[4px] h-full"></div>

          {events
            .filter((day) => day.date === activeTab)
            .map((day) =>
              day.events.map((event, idx) => (
                <div
                  key={idx}
                  className={`relative flex w-full max-w-4xl mb-16 items-center ${
                    idx % 2 === 0 ? "justify-start" : "justify-end"
                  }`}
                >
                  {/* Event Box */}
                  <div
                    className="w-[300px] p-6 bg-dark-tertiary rounded-lg shadow-lg border border-neon-blue timeline-event-box"
                    style={{
                      marginLeft: idx % 2 === 0 ? "10px" : "0",
                      marginRight: idx % 2 !== 0 ? "-100px" : "0",
                    }}
                  >
                    <h3 className="text-xl font-semibold">{event.name}</h3>
                    <p className="text-gray-400 flex items-center">
                      <FaClock className="mr-2" /> {event.time}
                    </p>
                    <p className="text-gray-400 flex items-center">
                      <FaMapMarkerAlt className="mr-2" /> {event.venue}
                    </p>
                  </div>
                </div>
              ))
            )}
        </div>

        {/* Timeline Mobile View */}
        <div className="sm:hidden flex flex-col mt-12 space-y-6">
          {events
            .filter((day) => day.date === activeTab)
            .map((day) =>
              day.events.map((event, idx) => (
                <div
                  key={idx}
                  className="w-full p-4 bg-dark-tertiary rounded-lg shadow-lg border border-neon-blue text-center"
                >
                  <h3 className="text-lg font-semibold">{event.name}</h3>
                  <p className="text-gray-400 flex justify-center items-center">
                    <FaClock className="mr-2" /> {event.time}
                  </p>
                  <p className="text-gray-400 flex justify-center items-center">
                    <FaMapMarkerAlt className="mr-2" /> {event.venue}
                  </p>
                </div>
              ))
            )}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Chronoline;
