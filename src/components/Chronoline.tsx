import React, { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

gsap.registerPlugin(ScrollTrigger);

const events = [
  {
    date: "April 4",
    events: [
      { name: "Hackathon", time: "10:00 - 10:30 AM" },
      { name: "Snippet Coding", time: "10:30 AM - 1:00 PM" },
      { name: "GPTathon", time: "10:30 AM - 1:30 PM" },
      { name: "Murder Mystery (Treasure Hunt)", time: "11:00 AM - 1:00 PM" },
      { name: "Big Boss", time: "2:00 PM - 5:00 PM" },
      { name: "NeuroQuest (Memory Rumble)", time: "3:00 PM - 5:00 PM" },
      { name: "Web Design", time: "3:00 PM - 5:00 PM" },
      { name: "Open Talent", time: "9:00 AM onwards" },
      { name: "Esports (Free Fire, PUBG, Clash Royale)", time: "9:00 AM onwards" },
      { name: "Rapid Chess", time: "9:00 AM onwards" },
      { name: "Paper Presentation", time: "9:00 AM onwards" },
    ],
  },
  {
    date: "April 5",
    events: [
      { name: "Hackathon", time: "9:00 AM - 12:30 PM" },
      { name: "Connections", time: "9:00 AM - 12:30 PM" },
      { name: "IPL Auction", time: "11:00 AM - 1:00 PM" },
      { name: "Worst UI Design", time: "11:00 AM - 1:00 PM" },
    ],
  },
];

const Chronoline = () => {
  useEffect(() => {
    gsap.utils.toArray(".timeline-event-box").forEach((box, index) => {
      gsap.from(box, {
        opacity: 0,
        x: index % 2 === 0 ? -100 : 100,
        duration: 1.2,
        ease: "power2.out",
        scrollTrigger: {
          trigger: box,
          start: "top 85%",
          end: "top 50%",
          scrub: 1,
        },
      });
    });
  
    // Floating animation for mobile view
    gsap.utils.toArray(".mobile-event-box").forEach((box) => {
      gsap.from(box, {
        opacity: 0,
        y: 50,
        duration: 1.2,
        ease: "power2.out",
        scrollTrigger: {
          trigger: box,
          start: "top 90%",
          end: "top 60%",
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
        <h1 className="text-5xl font-bold text-center text-neon-blue uppercase tracking-wide">
          Chronoline
        </h1>
  
        <div className="w-full max-w-5xl mx-auto mt-12 relative timeline">
          {/* Vertical Timeline Line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 bg-neon-blue w-[3px] h-full">
            {/* Line Break between April 4 & 5 */}
            <div className="absolute w-[3px] bg-[#0a0f1a] h-12 top-[97%] left-0"></div>
          </div>
  
          {events.map((day, dayIndex) => (
            <div key={dayIndex} className="relative mb-16">
              {/* Date Header */}
              <div className="text-center mb-10">
                <h2 className="text-neon-blue text-2xl font-bold relative top-[-30px]">
                  {day.date}
                </h2>
              </div>
  
              {/* Desktop View (Hidden on Mobile) */}
              <div className="hidden sm:flex flex-col">
                {day.events.map((event, idx) => (
                  <div
                    key={idx}
                    className={`relative flex w-full max-w-4xl mb-12 items-center ${
                      idx % 2 === 0 ? "justify-start" : "justify-end"
                    }`}
                  >
                    {/* Event Box */}
                    <div
                      className="w-[45%] p-6 bg-dark-tertiary rounded-lg shadow-lg border border-neon-blue transform transition-transform hover:scale-105 timeline-event-box"
                      style={{
                        marginLeft: idx % 2 === 0 ? "10px" : "0",
                        marginRight: idx % 2 !== 0 ? "-100px" : "0",
                      }}
                    >
                      <h3 className="text-xl font-semibold">{event.name}</h3>
                      <p className="text-gray-400">{event.time}</p>
                    </div>
                  </div>
                ))}
              </div>
  
              {/* Mobile View (Hidden on Larger Screens) */}
              <div className="sm:hidden flex flex-col space-y-6">
                {day.events.map((event, idx) => (
                  <div
                    key={idx}
                    className="w-full p-4 bg-dark-tertiary rounded-lg shadow-lg border border-neon-blue text-center transform transition-transform hover:scale-105"
                  >
                    <h3 className="text-lg font-semibold">{event.name}</h3>
                    <p className="text-gray-400">{event.time}</p>
                  </div>
                ))}
              </div>
  
              {/* Stop line after April 4 & Restart on April 5 */}
              {dayIndex === 0 && (
                <div className="absolute left-1/2 transform -translate-x-1/2 w-[3px] h-10 bg-[#0a0f1a]"></div>
              )}
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );  
}
export default Chronoline;
