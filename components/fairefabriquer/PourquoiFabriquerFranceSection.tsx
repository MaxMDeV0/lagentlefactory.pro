import React from "react";

const colonnes = [
  {
    icon: <svg className="w-10 h-10 text-yellow-400 mb-2" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeWidth={2} d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" /></svg>,
    titre: "Qualité supérieure",
    points: [
      "Savoir-faire artisanal préservé",
      "Contrôle qualité à chaque étape",
      "Finitions impeccables",
      "Durabilité garantie",
      "Normes strictes respectées"
    ]
  },
  {
    icon: <svg className="w-10 h-10 text-primary-blue mb-2" fill="none" viewBox="0 0 24 24" stroke="currentColor"><circle cx="12" cy="12" r="10" strokeWidth={2} /><path strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" /></svg>,
    titre: "Transparence totale",
    points: [
      "Traçabilité complète de la fibre au vêtement",
      "Visibilité sur les ateliers",
      "Communication directe",
      "Origine des matières identifiée",
      "Visites d'ateliers possibles"
    ]
  },
  {
    icon: <svg className="w-10 h-10 text-green-600 mb-2" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeWidth={2} d="M12 21c-4.97 0-9-4.03-9-9 0-3.87 2.69-7.16 6.39-8.65.5-.2 1.06.02 1.26.52.2.5-.02 1.06-.52 1.26C6.16 6.13 4 8.86 4 12c0 4.41 3.59 8 8 8s8-3.59 8-8c0-3.14-2.16-5.87-5.13-6.87-.5-.2-.72-.76-.52-1.26.2-.5.76-.72 1.26-.52C19.31 4.84 22 8.13 22 12c0 4.97-4.03 9-9 9z" /></svg>,
    titre: "Impact réduit",
    points: [
      "-75% d'émissions CO2 vs import Asie",
      "Circuit court",
      "Matières responsables locales",
      "Moins de transport",
      "Normes environnementales strictes"
    ]
  }
];

const PourquoiFabriquerFranceSection: React.FC = () => (
  <section className="bg-white py-16 md:py-24">
    <div className="max-w-6xl mx-auto px-4">
      <h2 className="text-3xl md:text-4xl font-extrabold text-primary-blue mb-4 text-center">Pourquoi choisir la fabrication française ?</h2>
      <h3 className="text-xl font-bold text-primary-blue mb-8 text-center">Au-delà du label, une vraie différence</h3>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
        {colonnes.map((col, i) => (
          <div key={i} className="bg-gray-50 rounded-2xl shadow-lg p-6 flex flex-col items-center">
            {col.icon}
            <div className="font-bold text-lg text-primary-blue mb-2">{col.titre}</div>
            <ul className="text-gray-700 text-sm list-disc pl-5 text-left">
              {col.points.map((p, j) => (<li key={j}>{p}</li>))}
            </ul>
          </div>
        ))}
      </div>
      <div className="bg-primary-blue text-white rounded-xl p-4 shadow text-center font-black text-2xl md:text-3xl max-w-xl mx-auto">100% de nos vêtements sont fabriqués en France</div>
    </div>
  </section>
);

export default PourquoiFabriquerFranceSection;
