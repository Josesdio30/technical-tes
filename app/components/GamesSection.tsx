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
      <Countdown/>
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-center mb-8">Popular Games</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {games.map((game, index) => (
            <GameCard key={index} game={game} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default GamesSection;