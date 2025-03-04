import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Gamepad2, Gamepad, Trophy, Users, X, Info } from 'lucide-react';

const OnlineGames = () => {
  const [ref, inView] = useInView({
    triggerOnce: false,
    threshold: 0.1,
  });

  const [selectedGame, setSelectedGame] = useState(null);

  const games = [
    {
      id: 1,
      title: 'BGMI',
      icon: <Gamepad2 className="h-6 w-6 text-neon-pink" />,
      description: '5v5 tactical shooter competition with teams competing for the championship.',
      overallDescription: 'Battlegrounds Mobile India (BGMI) is a battle royale game where players form teams and compete in an intense survival mode on a shrinking map.',
      prize: '₹10,000 + Gaming Peripherals',
      players: '5 players per team',
      rules: [
        'Participants must register before the deadline',
        'Teams must have exactly 5 players',
        'Fair play and sportsmanship are mandatory',
        'Judges’ decisions are final',
        'Stable internet connection is required'
      ],
      image: 'https://res.cloudinary.com/dqjrizifp/image/upload/v1740999180/lTe3c3paRnaEXpDIfhl9We7scmqZM7WDWwlDBAs7_cbpkzu.jpg',
    },
    {
      id: 2,
      title: 'FREE FIRE',
      icon: <Gamepad2 className="h-6 w-6 text-neon-blue" />,
      description: 'Battle Royale and Knockout Clash Squad Matches.',
      overallDescription: 'Each team will participate in both Battle Royale (BR) and Clash Squad (CS) Knockout matches. Only the first-place winners will receive the prize money. The BR winner will receive ₹1,000, while the winning CS team will receive ₹2,000. Re-entry is available for CS matches.',
      prize: '₹3,000',
      players: 'Teams must have 4 players',
      rules: [
       "Hacked files, including auto-aim and panel modifications, are strictly prohibited.",
    "Every player's ID must be at least level 40.",
    "Prize money will be awarded only after verifying the player's genuine behavior.",
    "No specific rules will be enforced for Clash Squad matches.",
    "Breaking gloo walls and using grenades are strictly prohibited.",
    "For Battle Royale, winners will be determined based on points (kills and placements secured). No revival options will be available."
  ],
      image: 'https://res.cloudinary.com/dqjrizifp/image/upload/v1740999180/free-fire-criminal-bundle-3h0095u465rofj7z_ycnh0t.jpg',
    },
    {
      id: 3,
      title: 'Rapid Chess',
      icon: <Gamepad2 className="h-6 w-6 text-neon-green" />,
      description: 'Survive and dominate in this battle royale championship.',
      overallDescription: 'Rapid Chess is a fast-paced version of chess where players have a limited time to make their moves, testing their strategy and quick thinking.',
      prize: '₹7,500 + Exclusive Skins',
      players: 'Squad or solo',
      rules: [
        'Tournament Format: Knockout-style, one-on-one matches.',
        'Game Time: Each player gets 10 minutes; no extra time added.',
        'Umpire Decision: Final and must be respected.',
        'Network Issues: Online matches before semi-finals; If disconnected, the player loses the match.',
        'Time Rules: If time runs out, the player loses.',
        'Draw Rules: If a match isn’t completed, it is recorded as a draw.',
        'Semi-Finals & Final: Held offline at a venue; details provided later.'
      ],
      image: 'https://res.cloudinary.com/dqjrizifp/image/upload/v1740999179/download_z0x2b8.jpg',
    },
  ];

  return (
    <section id="online-games" ref={ref} className="py-20 relative">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.6 }}
          className="flex items-center justify-center mb-8"
        >
          <div className="p-3 rounded-full bg-neon-blue/20 mr-4">
            <Gamepad className="h-8 w-8 text-neon-blue" />
          </div>
          <h2 className="text-4xl md:text-5xl font-bold">
            Online <span className="text-neon-blue">Games</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {games.map((game) => (
            <div
              key={game.id}
              onClick={() => setSelectedGame(game)}
              className="glass-card cursor-pointer overflow-hidden group hover:border-neon-blue/30 transition-all duration-300"
            >
              <div className="relative h-48 overflow-hidden">
                <img
                  src={game.image}
                  alt={game.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>
              <div className="p-6">
                <div className="flex items-center mb-3">
                  <div className="p-2 rounded-full bg-dark-tertiary/70 mr-3">{game.icon}</div>
                  <h3 className="text-xl font-future font-semibold">{game.title}</h3>
                </div>
                <p className="text-gray-400 mb-4">{game.description}</p>
              </div>
            </div>
          ))}
        </div>

        <AnimatePresence>
          {selectedGame && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 flex items-center justify-center bg-black/50 z-50"
            >
              <motion.div
                initial={{ scale: 0.8 }}
                animate={{ scale: 1 }}
                exit={{ scale: 0.8 }}
                className="bg-dark-bg p-6 rounded-lg shadow-lg max-w-md w-full"
              >
                <div className="flex justify-between items-center mb-4">
                  <h3 className="text-2xl font-bold">{selectedGame.title}</h3>
                  <button onClick={() => setSelectedGame(null)} className="text-gray-300 hover:text-white">
                    <X className="h-6 w-6" />
                  </button>
                </div>
                <img src={selectedGame.image} alt={selectedGame.title} className="w-full h-40 object-cover mb-4 rounded-md" />

                {/* Scrollable content section */}
                <div className="popup-content">
                  <p className="text-gray-300 mb-4">{selectedGame.description}</p>
                  <div className="text-gray-400 mb-4">
                    <Trophy className="inline-block h-5 w-5 text-yellow-400 mr-2" /> Prize Pool: {selectedGame.prize}
                  </div>
                  <div className="text-gray-400 mb-4 flex items-center">
                    <Users className="inline-block h-5 w-5 text-neon-blue mr-2" /> Players: {selectedGame.players}
                  </div>
                  <div className="text-gray-400  items-center">
                    <Info className="inline-block h-5 w-5 text-neon-green mr-2" /> {selectedGame.overallDescription}
                  </div>
                  <h4 className="text-lg font-semibold mb-2">Rules</h4>
                  <ul className="list-disc pl-5 text-gray-300 space-y-1 max-h-40 overflow-y-auto">
                    {selectedGame.rules.map((rule, index) => (
                      <li key={index}>{rule}</li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};

export default OnlineGames;
