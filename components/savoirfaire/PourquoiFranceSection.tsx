import React from "react";

const avantages = [
  {
    icon: "🌱", titre: "Impact environnemental", points: [
      "Réduction drastique du transport",
      "-75% d'émissions CO2 vs Asie",
      "Circuit court = moins de pollution",
      "Normes environnementales strictes"
    ]
  },
  {
    icon: "⚡", titre: "Qualité & Réactivité", points: [
      "Contrôle qualité permanent",
      "Réactivité sur les ajustements",
      "Délais maîtrisés et fiables",
      "Communication directe",
      "Visites d'ateliers possibles"
    ]
  },
  {
    icon: "🤝", titre: "Économie & Social", points: [
      "Maintien du tissu industriel français",
      "45 emplois directs soutenus",
      "Respect normes sociales européennes",
      "Salaires dignes et conditions de travail",
      "Préservation du savoir-faire"
    ]
  }
];

const stats = [
  { value: "100%", label: "traçabilité garantie" },
  { value: "2-3x", label: "plus rapide que l'import" },
  { value: "Qualité supérieure", label: "reconnue" }
];

const PourquoiFranceSection: React.FC = () => (
  <section className="bg-white py-16 md:py-24">
    <div className="max-w-6xl mx-auto px-4">
      <h2 className="text-3xl md:text-4xl font-extrabold text-primary-blue mb-4">Les avantages du Made in France</h2>
      <h3 className="text-xl font-bold text-primary-blue mb-8">Créer local, c'est créer juste</h3>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
        {avantages.map((a, i) => (
          <div key={i} className="bg-gray-50 rounded-2xl shadow-lg p-6 flex flex-col items-center">
            <div className="text-4xl mb-2">{a.icon}</div>
            <div className="font-bold text-lg text-primary-blue mb-2">{a.titre}</div>
            <ul className="text-gray-700 text-sm list-disc pl-5 text-left">
              {a.points.map((p, j) => (<li key={j}>{p}</li>))}
            </ul>
          </div>
        ))}
      </div>
      <div className="flex flex-col md:flex-row gap-4 justify-center mb-2">
        {stats.map((s, i) => (
          <div key={i} className="bg-primary-blue text-white rounded-xl p-4 shadow text-center font-black text-2xl md:text-3xl min-w-[180px]">{s.value}<div className="text-xs font-normal mt-1">{s.label}</div></div>
        ))}
      </div>
    </div>
  </section>
);

export default PourquoiFranceSection;
