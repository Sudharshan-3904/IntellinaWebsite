import React from "react";
import { useParams, Link } from "react-router-dom";
import { events } from "../data/events";
import { offlineGames } from "../data/offlineGames";
import { onlineGames } from "../data/onlineGames";
import { flagshipEvents } from "../data/flagshipEvents";
import {
  Calendar,
  Trophy,
  MapPin,
  ClipboardList,
  ArrowLeft,
} from "lucide-react";
import { useEffect } from "react";


const EventDetail = () => {
  const { id } = useParams();
  const event = events.find((e) => e.id === Number(id)) || offlineGames.find((e) => e.id === Number(id)) || onlineGames.find((e) => e.id === Number(id)) || flagshipEvents.find((e) => e.id === Number(id));
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);
  
  if (!event) {
    return <h1 className="text-center text-white">Event Not Found</h1>;
  }

  return (
    <div className="min-h-screen bg-dark-bg text-white flex flex-col md:flex-row px-6 md:px-20 py-10">
      {/* Left Column */}
      <div className="w-full md:w-1/2 flex flex-col">
        {/* Back Button */}
          <Link to="/events" className="flex items-center text-white hover:underline mb-6">
  <ArrowLeft className="h-5 w-5 mr-2" /> Back <span className="text-neon-blue"> to Events</span>
</Link>

        {/* Event Image (Aligned Right in Left Column) */}
        <div className="flex justify-end">
          <img
            src={event.image}
            alt={event.title}
            className="w-11/12 md:w-4/5 rounded-lg shadow-lg"
          />
        </div>
      </div>

      {/* Right Column */}
      <div className="w-full md:w-1/2 md:pl-10 flex flex-col justify-start">
        {/* Event Name */}
        <h1 className="text-4xl font-bold text-white">{event.title}</h1>

        {/* Date & Venue */}
        <div className="flex items-center mt-3 text-neon-blue">
          <Calendar className="h-5 w-5 mr-2" />
          <span>{event.date}</span>
        </div>
        <div className="flex items-center mt-2 text-neon-green">
          <MapPin className="h-5 w-5 mr-2" />
          <span>{event.venue}</span>
        </div>

        {/* Rules Section */}
        <div className="mt-8">
          <h2 className="text-2xl font-semibold mb-3 flex items-center">
            <ClipboardList className="h-6 w-6 text-white mr-2" /> Rules & <span className="text-neon-blue"> Guidelines</span>
          </h2>
          <ul className="list-disc list-inside text-gray-300 space-y-2 pl-2">
            {event.rules.map((rule, index) => (
              <li key={index}>{rule}</li>
            ))}
          </ul>
        </div>

        {/* Prize Section */}
        {event.prize && (
          <div className="mt-8">
            <h2 className="text-2xl font-semibold mb-3 flex items-center">
              <Trophy className="h-6 w-6 text-yellow-500 mr-2" /> Prizes
            </h2>
            <p className="text-lg text-gray-300">{event.prize}</p>
          </div>
        )}

        {/* Register Button */}
        {event.registrationLink && (
          <div className="mt-10">
            <a
              href={event.registrationLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-6 py-3 bg-neon-blue text-dark-bg rounded-md font-semibold transition-all duration-300 hover:bg-neon-blue/80"
            >
              Register Now
            </a>
          </div>
        )}
      </div>
    </div>
  );
};

export default EventDetail;
