import React from 'react';
import Hero from '../components/home//Hero';
import BlueSection from '../components/home/BlueSection';
import RedSection from '../components/home/RedSection';
import OfferCards from '../components/home/OfferCards';
import Solutions from '../components/home/Solutions';
import Artisanat from '../components/home/Artisanat';
import Clients from '../components/home/Clients';

const Home: React.FC = () => {
  return (
    <main className="flex-grow">
      <Hero />
      <BlueSection />
      <div className="h-2 bg-white w-full" aria-hidden="true" />
      <RedSection />
      <OfferCards />
      <Solutions />
      <Artisanat />
      <Clients />
    </main>
  );
};

export default Home;
