import React, { useEffect } from 'react';
import { flagshipEvents } from '../data/flagshipEvents.ts';
import { Link } from 'react-router-dom';

const FlagshipEvents = () => {
  useEffect(() => {
    console.log("Flagship Events Component Loaded", flagshipEvents);
  }, []);

  if (!flagshipEvents || flagshipEvents.length === 0) {
    return <h2 className="text-center text-white">No flagship events available.</h2>;
  }

  return (
    <section id="flagship-events" className="py-16">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center text-white uppercase">Flagship <span className="text-neon-blue">Events</span></h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-10">
          {flagshipEvents.map((event) => (
            <Link key={event.id} to={`/event/${event.id}`} className="group bg-dark-tertiary p-6 rounded-lg shadow-lg transition-transform transform hover:scale-105">
              <div className="relative w-full h-48 overflow-hidden rounded-md">
                <img src={event.image} alt={event.title} className="w-full h-full object-cover transition-transform group-hover:scale-110" />
              </div>
              <h3 className="text-xl font-semibold mt-4 text-white hover:text-neon-blue transition-colors duration-300">{event.title}</h3>
              <p className="text-gray-400 text-sm mt-2">{event.description}</p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FlagshipEvents;
