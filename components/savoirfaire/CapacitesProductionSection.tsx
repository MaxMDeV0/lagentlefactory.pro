import React from "react";

const capacites = [
  {
    titre: "Petites séries",
    points: [
      "À partir de 50 pièces",
      "Idéal pour tests ou capsules",
      "Délais : 6-8 semaines",
      "Flexibilité maximale"
    ]
  },
  {
    titre: "Moyennes séries",
    points: [
      "200 à 1000 pièces",
      "Production optimisée",
      "Délais : 8-10 semaines",
      "Meilleur rapport qualité-prix"
    ]
  },
  {
    titre: "Grandes séries",
    points: [
      "1000+ pièces",
      "Sur devis personnalisé",
      "Délais : 10-12 semaines",
      "Accompagnement dédié"
    ]
  }
];

const CapacitesProductionSection: React.FC = () => (
  <section className="bg-gray-50 py-16 md:py-24">
    <div className="max-w-6xl mx-auto px-4">
      <h2 className="text-3xl md:text-4xl font-extrabold text-primary-blue mb-4">Nos capacités et flexibilité</h2>
      <h3 className="text-xl font-bold text-primary-blue mb-8">Des petites aux moyennes séries</h3>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
        {capacites.map((c, i) => (
          <div key={i} className="bg-white rounded-2xl shadow-lg p-6 flex flex-col items-center">
            <div className="font-bold text-lg text-primary-blue mb-2">{c.titre}</div>
            <ul className="text-gray-700 text-sm list-disc pl-5 text-left">
              {c.points.map((p, j) => (<li key={j}>{p}</li>))}
            </ul>
          </div>
        ))}
      </div>
      <div className="bg-primary-blue text-white rounded-xl p-4 shadow text-center font-bold text-lg max-w-xl mx-auto">Nous adaptons notre production à votre rythme</div>
    </div>
  </section>
);

export default CapacitesProductionSection;
