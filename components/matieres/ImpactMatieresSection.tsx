import React from "react";

const impact = [
  { label: "Économie d'eau", value: "-91%", desc: "Coton bio vs conventionnel" },
  { label: "Réduction CO2", value: "-59%", desc: "Fibres recyclées vs vierges" },
  { label: "Réduction pesticides", value: "0 pesticide chimique", desc: "Coton bio certifié" },
  { label: "Durée de vie", value: "+30%", desc: "Matières techniques et lin" },
];

const ImpactMatieresSection: React.FC = () => (
  <section className="bg-gray-50 py-16 md:py-24">
    <div className="max-w-6xl mx-auto px-4">
      <h2 className="text-3xl md:text-4xl font-extrabold text-primary-blue mb-8 text-center">L'impact de nos choix matières</h2>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
        {impact.map((i, idx) => (
          <div key={idx} className="bg-white rounded-2xl shadow-lg border-l-4 border-primary-blue p-6 flex flex-col items-center hover:shadow-xl transition-shadow duration-300">
            <div className="font-bold text-2xl text-accent-green mb-2">{i.value}</div>
            <div className="font-semibold text-primary-blue mb-1">{i.label}</div>
            <div className="text-xs text-gray-500 text-center">{i.desc}</div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default ImpactMatieresSection;
