import React, { useEffect } from 'react';
import { events } from '../data/events';
import { Link } from 'react-router-dom';

const Events = () => {
  useEffect(() => {
    console.log("Events Component Loaded", events); // Debugging
  }, []);

  if (!events || events.length === 0) {
    return <h2 className="text-center text-white">No events available.</h2>;
  }

  return (
    <section id="events" className="py-16">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <h2 className="text-4xl font-bold text-center text-neon-blue uppercase">
          Technical Events
        </h2>

        {/* Register Button */}
        <div className="flex justify-center mt-4">
          <a
            href="https://docs.google.com/forms/d/e/1FAIpQLSfaC1Ks1p4ymgQdgcg6eL1fJjDpCXYtw4N75wlInW54ak3yIA/viewform"  // Replace with actual registration link
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3 bg-neon-blue text-dark-bg rounded-md font-semibold transition-all duration-300 hover:bg-neon-blue/80"
          >
            Register Now
          </a>
        </div>

        {/* Disclaimer */}
        <p className="text-gray-400 text-center text-sm mt-2">
          (Click register to participate in all Technical & Non-Technical events)
        </p>

        {/* Event Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-10">
          {events.map((event) => (
            <Link 
              key={event.id} 
              to={`/event/${event.id}`} 
              className="group bg-dark-tertiary p-6 rounded-lg shadow-lg transition-transform transform hover:scale-105"
            >
              <div className="relative w-full h-48 overflow-hidden rounded-md">
                <img 
                  src={event.image} 
                  alt={event.title} 
                  className="w-full h-full object-cover transition-transform group-hover:scale-110" 
                />
              </div>
              <h3 className="text-xl font-semibold mt-4 text-white">{event.title}</h3>
              <p className="text-gray-400 text-sm mt-2">{event.description}</p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Events;
