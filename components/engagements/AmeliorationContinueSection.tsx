import React from "react";

const objectifs = [
  { annee: "2025", objectif: "95% matières certifiées" },
  { annee: "2026", objectif: "Bilan carbone complet et compensé" },
  { annee: "2027", objectif: "Certification B Corp" },
  { annee: "2028", objectif: "100% packaging recyclé/compostable" }
];

const AmeliorationContinueSection: React.FC = () => (
  <section className="bg-white py-16 md:py-24">
    <div className="max-w-6xl mx-auto px-4">
      <h2 className="text-3xl md:text-4xl font-extrabold text-primary-blue mb-6">En progression constante</h2>
      <h3 className="text-xl font-bold text-primary-blue mb-8">Nos objectifs pour les 3 prochaines années</h3>
      <div className="flex flex-col md:flex-row gap-8 justify-between items-center">
        {objectifs.map((o, i) => (
          <div key={i} className="bg-gray-50 rounded-xl shadow-lg p-6 flex flex-col items-center min-w-[180px]">
            <div className="text-3xl font-black text-cta-red mb-2">{o.annee}</div>
            <div className="text-sm text-primary-blue text-center font-bold mb-2">{o.objectif}</div>
          </div>
        ))}
      </div>
      <div className="mt-8 text-gray-700 text-center">Transparence sur les défis encore à relever : sourcing local, innovation matières, digitalisation traçabilité.</div>
    </div>
  </section>
);

export default AmeliorationContinueSection;
