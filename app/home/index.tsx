// pages/index.tsx
import Navbar from './components/Navbar';
import { HeroSection } from "@/app/home/components/HeroSection";
import GamesSection from './components/GamesSection';
import Footer from './components/Footer';
import Countdown from './components/Countdown';
import { GetServerSideProps } from 'next';
import FavoriteGamesSection from './components/FavoriteGameSection';

// Define the type for a single game item, update fields based on your API response
type Game = {
  id: number;
  name: string;
  description: string;
  image: string;
  // Add other fields based on the API response structure
};

type HomePageProps = {
  games: Game[];
};

export const getServerSideProps: GetServerSideProps = async () => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/games`);
  const games: Game[] = await res.json();

  return { props: { games } };
};

const HomePage = ({ games }: HomePageProps) => {
  return (
    <div>
      <Navbar />
      {/* <HeroSection /> */}
      <GamesSection games={games} />
      <FavoriteGamesSection/>
      <Footer />
    </div>
  );
};

export default HomePage;