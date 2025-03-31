import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { onlineGames } from '../data/onlineGames.ts';

const OnlineGames = () => {
  const navigate = useNavigate();

  useEffect(() => {
    console.log("OnlineGames Component Loaded", onlineGames); // Debugging
  }, []);

  if (!onlineGames || onlineGames.length === 0) {
    return <h2 className="text-center text-white">No online games available.</h2>;
  }

  const handleClick = (id: number) => {
    navigate(`/event/${id}`);
  };

  return (
    <section id="online-games" className="py-16">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center text-white uppercase">Online <span className="text-neon-blue">Games</span></h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-10">
          {onlineGames.map((game) => (
            <div 
              key={game.id} 
              className="group bg-dark-tertiary p-6 rounded-lg shadow-lg transition-transform transform hover:scale-105 cursor-pointer"
              onClick={() => handleClick(game.id)}
            >
              <div className="relative w-full h-48 overflow-hidden rounded-md">
                <img src={game.image} alt={game.title} className="w-full h-full object-cover transition-transform group-hover:scale-110" />
              </div>
              <h3 className="text-xl font-semibold mt-4 text-white hover:text-neon-blue transition-colors duration-300">{game.title}</h3>
              <p className="text-gray-400 text-sm mt-2">{game.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OnlineGames;
