import React from 'react';
import Hero from '../components/Hero';
import BlueSection from '../components/BlueSection';
import RedSection from '../components/RedSection';
import OfferCards from '../components/OfferCards';
import Solutions from '../components/Solutions';
import Artisanat from '../components/Artisanat';
import Clients from '../components/Clients';
import ContactForm from '../components/ContactForm';

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
      <ContactForm />
    </main>
  );
};

export default Home;
