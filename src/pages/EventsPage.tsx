import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import Events from '../components/Events';
import OfflineGames from '../components/OfflineGames';
import OnlineGames from '../components/OnlineGames';
import Footer from '../components/Footer';

const EventsPage = () => {
  const [activeTab, setActiveTab] = useState('events');

  const tabs = [
    { id: 'events', label: 'Technical' },
    { id: 'offline', label: 'Non-Technical' },
    { id: 'online', label: 'Online Games' },
  ];

  return (
    <div className="bg-dark-bg min-h-screen text-white">
      <Navbar />

      {/* Prevent navbar overlap */}
      <div className="pt-20 px-4">
        {/* Responsive Tab Navigation */}
        <div className="flex justify-center">
          <div className="flex w-full max-w-lg bg-gray-900 rounded-full p-1 shadow-lg overflow-hidden">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex-1 text-center px-4 py-2 md:py-3 text-sm md:text-lg font-semibold uppercase rounded-full transition-all duration-300
                  ${
                    activeTab === tab.id
                      ? 'bg-neon-blue text-dark-bg shadow-md scale-105'
                      : 'text-gray-400 hover:text-white hover:bg-gray-800'
                  }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* Event Sections */}
        <div className="container mx-auto px-4 sm:px-6 md:px-8 py-6 sm:py-8">
          {activeTab === 'events' && <Events />}
          {activeTab === 'offline' && <OfflineGames />}
          {activeTab === 'online' && <OnlineGames />}
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default EventsPage;
