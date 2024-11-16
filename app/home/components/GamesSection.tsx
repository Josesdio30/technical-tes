'use client'

import { useEffect, useState } from 'react';
import Countdown from './Countdown';
import GameCard from './GameCard';
import { HeroSection } from './HeroSection';

const GamesSection = () => {
  const [games, setGames] = useState([]);

  useEffect(() => {
    const fetchGames = async () => {
      try {
        const res = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}`);
        const data = await res.json();
        setGames(data);
      } catch (error) {
        console.error('Failed to fetch games:', error);
      }
    };

    fetchGames();
  }, []);

  return (
    <section className="py-20 bg-cover bg-center" style={{ backgroundImage: "url('/bg-tes.jpeg')" }}>
      <HeroSection/>
      <div className="flex flex-col items-center gap-4 pb-6 lg:items-start lg:ml-10 mb-28">
        <h2 className="text-white text-[1.1rem] md:text-4xl font-bold text-center lg:text-left">
          Starlight November 2023: Melissa “Nightwalker”
        </h2>
        <h2 className="text-white ml-1 text-xs md:text-xl md:ml-0 text-left lg:text-left">
          Segera dapatkan skin startlight Melissa “Nightwalker” dengan topup murah hanya di VocaGame.
        </h2>
      </div>

      <div className="flex flex-col md:flex-row items-center gap-4 pb-6 lg:ml-10">
        <h2 className="text-white text-2xl md:text-4xl font-bold text-center md:text-left">
          FLASH SALE
        </h2>
        <Countdown />
      </div>
      <h2 className="text-white text-base ml-1 md:ml-10 text-left md:text-left mb-4">Segera dapatkan penawaran terbatas dari kami, jangan sampai ketinggalan!</h2>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Grid untuk GameCard */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {games.map((game, index) => (
            <GameCard key={index} game={game} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default GamesSection;