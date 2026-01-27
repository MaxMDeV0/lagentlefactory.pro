
import React from 'react';

const BlueSection: React.FC = () => {
  return (
    <section className="bg-primary-blue text-white py-16 md:py-24">
      <div className="max-w-[1200px] mx-auto px-6 flex gap-8 items-center justify-between flex-col md:flex-row">
        <div className="w-full md:w-1/2">
          <h2 className="font-extrabold text-3xl md:text-4xl lg:text-[3rem] leading-tight">
            Créer des vêtements éthiques<br />made in France<br />à votre image.
          </h2>
        </div>
        <div className="w-full md:w-1/2 text-white/95 mt-4 md:mt-0 lg:pl-12">
          <p className="mb-6 text-lg md:text-xl leading-relaxed">
            Du t-shirt à la veste de travail, nous créons et fabriquons vos vêtements — pour votre marque, votre
            entreprise, votre boutique ou votre club — avec un savoir-faire français et des matières responsables.
          </p>
          <a 
            href="#contact"
            className="inline-block bg-cta-red hover:bg-[#7a0d15] text-white px-8 py-3 rounded-full font-bold shadow-lg transition-colors text-lg"
          >
            DEMANDER UN DEVIS
          </a>
        </div>
      </div>
    </section>
  );
};

export default BlueSection;
