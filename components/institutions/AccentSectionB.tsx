import React from 'react';

const AccentSectionB: React.FC = () => {
  return (
    <section className="bg-cta-red text-white py-16">
      <div className="max-w-[1200px] mx-auto px-6 flex flex-col md:flex-row items-center gap-8">
        <div className="md:w-1/2">
          <h3 className="font-extrabold text-2xl md:text-3xl">Accompagnement humain</h3>
          <p className="mt-3 text-white/90 leading-relaxed">
            Un interlocuteur dédié pour chaque projet : coordination des ateliers, suivi qualité et logistique afin
            d'assurer une livraison conforme, dans les délais et selon vos impératifs administratifs.
          </p>
        </div>

        <div className="md:w-1/2">
          <p className="text-white/90">Nous aidons les institutions à structurer leurs besoins (stock, renouvellement, saisonnalité),
            et proposons des solutions logistiques pour réassort et distribution centralisée.</p>
        </div>
      </div>
    </section>
  );
};

export default AccentSectionB;
