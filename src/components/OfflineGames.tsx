import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Clock, MapPin, Calendar, X } from 'lucide-react';

const OfflineGames = () => {
  const [ref, inView] = useInView({ triggerOnce: false, threshold: 0.1 });
  const [selectedGame, setSelectedGame] = useState(null);

  const games = [
    {
      id: 1,
      title: 'IPL Auction',
      description: 'IPL AUCTION offers a thrilling glimpse into the world of professional cricket like never before.',
      time: '10:00 AM - 12:00 PM',
      location: 'Auditorium',
      date: 'April 15, 2025',
      image: 'https://source.unsplash.com/random/600x400?sports',
    },
    {
      id: 2,
      title: 'Connections',
      description: 'CONNECTIONS provides a vibrant platform for networking and collaboration, with engaging discussions and activities',
      time: '1:00 PM - 3:00 PM',
      location: 'Seminar Hall',
      date: 'April 15, 2025',
      image: 'https://source.unsplash.com/random/600x400?puzzle',
    },
    {
      id: 3,
      title: 'Memory Rumble',
      description: "Memory Rumble is an exciting three-round game that challenges participant's observation and recall abilities.",
      time: '3:30 PM - 5:00 PM',
      location: 'Library Hall',
      date: 'April 15, 2025',
      image: 'https://source.unsplash.com/random/600x400?brain',
    },
    {
      id: 4,
      title: 'Bigg Boss',
      description: "This is a competitive elimination-based game with multiple rounds that test participant's skills in fun, puzzles, thinking, and luck-based challenges.",
      time: '11:00 AM - 1:00 PM',
      location: 'Conference Room',
      date: 'April 15, 2025',
      image: 'https://source.unsplash.com/random/600x400?game',
    },
    {
      id: 5,
      title: 'Treasure Hunt',
      description: 'Embark on an epic adventure with TREASURE HUNT, where mystery, teamwork, and exploration collide.',
      time: '4:30 PM - 6:00 PM',
      location: 'Campus Grounds',
      date: 'April 15, 2025',
      image: 'https://source.unsplash.com/random/600x400?adventure',
    },
  ];

  const flagshipEvent = {
    id: 6,
    title: 'AADALUM PAADALUM',
    description: 'Showcase your hidden talents in this open mic-style talent competition.',
    time: '2:00 PM - 4:00 PM',
    location: 'Stage Arena',
    date: 'April 15, 2025',
    image: 'https://res.cloudinary.com/dqjrizifp/image/upload/v1740996085/photo_2025-03-03_15-31-06_stseb2.jpg',
  };

  return (
    <>
      <section id="flagship-event" className="py-20 bg-dark-bg relative">
        <div className="container mx-auto px-4 text-center">
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.6 }}>
            <h2 className="text-4xl md:text-5xl font-bold text-neon-purple mb-8">OPEN TALLENNT</h2>
          </motion.div>
          <motion.div
            className="glass-card p-6 max-w-4xl mx-auto cursor-pointer hover:scale-105 transition-transform"
            onClick={() => setSelectedGame(flagshipEvent)}
          >
            <h3 className="text-2xl font-semibold text-neon-purple mb-3">{flagshipEvent.title}</h3>
            <p className="text-gray-300 mb-4">{flagshipEvent.description}</p>
          </motion.div>
        </div>
      </section>

      <section id="offline-games" ref={ref} className="py-20 relative">
        <div className="container mx-auto px-4 text-center">
          <motion.div initial={{ opacity: 0 }} animate={inView ? { opacity: 1 } : { opacity: 0 }} transition={{ duration: 0.6 }} className="flex items-center justify-center mb-8">
            <h2 className="text-4xl md:text-5xl font-bold">
              Offline <span className="text-neon-purple">Games</span>
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 justify-center">
            {games.map((game) => (
              <motion.div
                key={game.id}
                className="glass-card p-6 hover:border-neon-purple/30 transition-all duration-300 hover:transform hover:scale-105 cursor-pointer mx-auto"
                onClick={() => setSelectedGame(game)}
              >
                <h3 className="text-xl font-future font-semibold mb-3 text-neon-purple">{game.title}</h3>
                <p className="text-gray-300 mb-4">{game.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {selectedGame && (
        <div className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50 p-4">
          <motion.div initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.3 }} className="bg-dark-bg p-6 rounded-lg max-w-4xl w-full relative">
            <button className="absolute top-4 right-4 text-white bg-gray-700 p-2 rounded-full hover:bg-gray-600" onClick={() => setSelectedGame(null)}>
              <X className="h-6 w-6" />
            </button>
            <img src={selectedGame.image} alt={selectedGame.title} className="w-full h-auto max-h-[90vh] object-contain rounded-lg" />
          </motion.div>
        </div>
      )}
    </>
  );
};

export default OfflineGames;
