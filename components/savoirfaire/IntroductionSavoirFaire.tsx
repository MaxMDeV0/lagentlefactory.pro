import React from "react";

const raisons = [
  "Préserver un savoir-faire textile précieux",
  "Assurer une maîtrise totale des pièces",
  "Garantir la transparence indispensable"
];

const IntroductionSavoirFaire: React.FC = () => (
  <section className="bg-white py-16 md:py-24">
    <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 px-4 items-center">
      <div>
        <h2 className="text-3xl md:text-4xl font-extrabold text-primary-blue mb-4">Une production 100% française</h2>
        <h3 className="text-xl font-bold text-primary-blue mb-4">De la matière première au vêtement final</h3>
        <p className="text-lg text-gray-700 mb-4">Choisir de produire en France, c'est faire le choix d'une filière textile exigeante, locale et transparente. Nous travaillons main dans la main avec des ateliers historiques pour garantir la qualité et la traçabilité de chaque pièce.</p>
        <ul className="mb-6 list-disc pl-5 text-gray-700">
          {raisons.map((r, i) => (<li key={i}>{r}</li>))}
        </ul>
        <div className="bg-primary-blue text-white rounded-xl p-4 shadow text-center font-black text-2xl md:text-3xl">100% de nos vêtements sont fabriqués en France</div>
      </div>
      <div>
        <img src="./media/artisan-fabrication.jpg" alt="Artisan au travail" className="rounded-2xl shadow-lg w-full object-cover" />
      </div>
    </div>
  </section>
);

export default IntroductionSavoirFaire;
