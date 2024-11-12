interface GameCardProps {
  game: {
    name: string;
    description: string;
    image: string;
    alt: string;
    items: { id: number; name: string; price: number; priceDiscount: number; iconUrl: string }[];
  };
}

const GameCard = ({ game }: GameCardProps) => (
  <div className="bg-gray-900 rounded-lg overflow-hidden shadow-lg w-64 text-white relative">
    <img src={game.image} alt={game.alt} className="w-full h-32 object-cover" />
    <div className="p-4">
      <h2 className="text-lg font-bold mb-1">{game.name}</h2>
      {/* <p className="text-xs text-gray-400">{game.description}</p> */}
      
      {/* <div className="mt-4">
        <h3 className="text-sm font-semibold mb-2 text-gray-300">Items:</h3>
        <ul>
          {game.items.map((item) => (
            <li key={item.id} className="flex items-center justify-between bg-gray-800 p-3 rounded-lg mb-2">
              <div className="flex items-center">
                <img src={item.iconUrl} alt={item.name} className="w-10 h-10 mr-3" />
                <span className="text-sm font-semibold text-gray-100">{item.name}</span>
              </div>
              <div className="text-right">
                <span className="bg-red-600 text-xs px-2 py-1 rounded-full font-bold mr-2">PROMO</span>
                <p className="text-sm font-semibold text-red-500">-{item.priceDiscount}%</p>
              </div>
            </li>
          ))}
        </ul>
      </div> */}

      <a href="#" className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-4 block text-center">Top Up</a>
    </div>
  </div>
);

export default GameCard;