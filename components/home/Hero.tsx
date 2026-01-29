
import React from 'react';

const Hero: React.FC = () => {
  return (
    <section className="relative h-screen min-h-[600px] overflow-hidden flex items-end justify-start">
      {/* Background Image - Assumes 'media' folder contains banner.png */}
      <img
        src="./media/banner.png"
        alt="Bannière La Gentil Factory"
        className="absolute inset-0 w-full h-full object-cover z-0"
      />
      <div className="absolute inset-0 z-10 bg-black/20" aria-hidden="true"></div>

      <div className="relative z-20 text-white p-8 md:p-12 max-w-3xl mb-12 md:mb-20 ml-[15%]">
        <h1 className="font-extrabold text-4xl md:text-5xl lg:text-6xl leading-tight tracking-tight drop-shadow-lg">
          Vos vêtements fabriqués<br />à votre image,<br />en France.
        </h1>
        <a
          href="#solutions"
          className="inline-block mt-8 bg-primary-blue hover:bg-[#1e2560] text-white px-8 py-4 rounded-full font-semibold uppercase shadow-md transition-all transform hover:-translate-y-1"
        >
          En savoir plus
        </a>
      </div>
    </section>
  );
};

export default Hero;
