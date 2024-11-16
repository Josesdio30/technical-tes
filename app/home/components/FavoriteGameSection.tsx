// components/FavoriteGamesSection.js
import Image from 'next/image';


const FavoriteGamesSection = () => {
  return (
    <section className="bg-gray-900 text-white py-10 px-5">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold mb-5">Temukan Game Favorit</h2>
        <div className="flex space-x-6 mb-6">
          <button className="px-4 py-2 bg-white text-black font-medium rounded">Rekomendasi</button>
          <button className="text-gray-400">Mobile Game</button>
          <button className="text-gray-400">PC Game</button>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          
        </div>
      </div>
    </section>
  );
};

export default FavoriteGamesSection;