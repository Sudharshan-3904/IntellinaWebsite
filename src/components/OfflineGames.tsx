import React from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { useInView } from 'react-intersection-observer';
import { offlineGames, flagshipEvent } from '../data/offlineGames';

const OfflineGames = () => {
  const [ref, inView] = useInView({ triggerOnce: false, threshold: 0.1 });
  const navigate = useNavigate();

  return (
    <>
      {/* Offline Games */}
      <section id="offline-games" ref={ref} className="py-16 bg-dark-primary">
        <div className="container mx-auto px-6">
          <motion.div initial={{ opacity: 0 }} animate={inView ? { opacity: 1 } : { opacity: 0 }} transition={{ duration: 0.6 }} className="text-center">
            <h2 className="text-4xl font-bold text-center text-white uppercase">NON-TECHNICAL <span className="text-neon-blue">EVENTS</span></h2>
          </motion.div>
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

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-10">
            {offlineGames.map((game) => (
              <motion.div
                key={game.id}
                className="group bg-dark-tertiary p-6 rounded-lg shadow-lg transition-transform transform hover:scale-105 cursor-pointer"
                onClick={() => navigate(`/event/${game.id}`)}
              >
                <div className="relative w-full h-48 overflow-hidden rounded-md">
                  <img src={game.image} alt={game.title} className="w-full h-full object-cover transition-transform group-hover:scale-110" />
                </div>
                <h3 className="text-xl font-semibold mt-4 text-white hover:text-neon-blue transition-colors duration-300">{game.title}</h3>
                <p className="text-gray-400 text-sm mt-2">{game.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default OfflineGames;
