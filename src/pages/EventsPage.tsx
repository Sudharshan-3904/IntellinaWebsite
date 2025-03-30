import React, { useState, useEffect } from 'react';
import Navbar from '../components/Navbar';
import Events from '../components/Events';
import OfflineGames from '../components/OfflineGames';
import OnlineGames from '../components/OnlineGames';
import FlagshipEvents from '../components/FlagshipEvents';
import Footer from '../components/Footer';

const EventsPage = () => {
  // Retrieve active tab from localStorage or default to "flagship"
  const [activeTab, setActiveTab] = useState(() => {
    return localStorage.getItem('activeTab') || 'flagship';
  });

  // Update localStorage whenever activeTab changes
  useEffect(() => {
    localStorage.setItem('activeTab', activeTab);
  }, [activeTab]);

  const tabs = [
    { id: 'flagship', label: 'Flagship Events' },
    { id: 'events', label: 'Technical Events' },
    { id: 'offline', label: 'Non-Technical' },
    { id: 'online', label: 'Online Games' },
  ];

  return (
    <div className="bg-dark-bg min-h-screen text-white">
      <Navbar />

      {/* Prevent Navbar Overlap */}
      <div className="pt-24 px-4">
        
        {/* Desktop Tabs */}
        <div className="hidden md:flex justify-center">
          <div className="flex w-full max-w-xl bg-gray-900 rounded-full p-1 shadow-lg">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex-1 text-center px-6 py-3 text-md font-semibold uppercase rounded-full transition-all duration-300 
                  ${activeTab === tab.id 
                    ? 'bg-neon-blue text-dark-bg shadow-md scale-105' 
                    : 'text-gray-400 hover:text-white hover:bg-gray-800'
                  }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* Mobile Tabs */}
        <div className="md:hidden flex justify-center mt-2">
          <div className="grid grid-cols-2 gap-2 w-full max-w-sm">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`text-center px-4 py-2 text-sm font-semibold uppercase rounded-lg transition-all duration-300 
                  ${activeTab === tab.id 
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
          {activeTab === 'flagship' && <FlagshipEvents />}
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
