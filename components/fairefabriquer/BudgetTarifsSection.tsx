import React from "react";

const exemples = [
  { titre: "T-shirt coton bio brodé", prix: "à partir de 18€/pièce", quantite: "200 pièces" },
  { titre: "Sweat personnalisé", prix: "à partir de 35€/pièce", quantite: "100 pièces" },
  { titre: "Pièce sur-mesure", prix: "sur devis", quantite: "dépend du projet" }
];

const BudgetTarifsSection: React.FC = () => (
  <section className="bg-white py-16 md:py-24">
    <div className="max-w-6xl mx-auto px-4">
      <h2 className="text-3xl md:text-4xl font-extrabold text-primary-blue mb-4 text-center">Combien coûte la fabrication en France ?</h2>
      <h3 className="text-xl font-bold text-primary-blue mb-8 text-center">Transparence et cohérence tarifaire</h3>
      <div className="mb-8 text-lg text-gray-700 max-w-3xl mx-auto text-center">
        Le prix dépend de la matière, de la quantité, de la complexité et des finitions. Le Made in France offre un rapport qualité-prix durable : la qualité et la durabilité permettent d'économiser sur le long terme.
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
        {exemples.map((e, i) => (
          <div key={i} className="bg-gray-50 rounded-2xl shadow-lg p-6 flex flex-col items-center">
            <div className="font-bold text-lg text-primary-blue mb-2">{e.titre}</div>
            <div className="text-5xl font-black text-cta-red mb-2">{e.prix}</div>
            <div className="text-xs text-gray-500">{e.quantite}</div>
          </div>
        ))}
      </div>
      <div className="bg-primary-blue text-white rounded-xl p-4 shadow text-center font-bold text-lg max-w-xl mx-auto mb-4">Devis gratuit et détaillé sous 48h</div>
      <div className="flex justify-center">
        <a href="#footer-fabriquer" className="bg-cta-red text-white font-bold rounded-full px-8 py-4 uppercase text-lg shadow-lg hover:bg-primary-blue transition-all">Demander un devis personnalisé</a>
      </div>
    </div>
  </section>
);

export default BudgetTarifsSection;
