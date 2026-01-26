import React from "react";

const solutions = [
  {
    nom: "Prêt-à-personnaliser",
    budget: "À partir de 20€ HT/unité (selon quantité et personnalisation)",
    delais: "3 à 5 semaines (après validation BAT)"
  },
  {
    nom: "Semi-sur-mesure",
    budget: "À partir de 35€ HT/unité (selon adaptations)",
    delais: "5 à 8 semaines (après validation prototype)"
  },
  {
    nom: "Sur-mesure",
    budget: "Sur devis uniquement (projets complexes)",
    delais: "8 à 16 semaines (selon complexité et sourcing)"
  }
];

const BudgetEtDelaisSection: React.FC = () => (
  <section className="bg-white py-16 md:py-24">
    <div className="max-w-4xl mx-auto px-4">
      <h2 className="text-3xl md:text-4xl font-extrabold text-primary-blue mb-8">Budget & délais</h2>
      <table className="w-full text-left border-separate border-spacing-y-4">
        <thead>
          <tr>
            <th className="text-lg font-bold text-primary-blue">Solution</th>
            <th className="text-lg font-bold text-primary-blue">Budget indicatif</th>
            <th className="text-lg font-bold text-primary-blue">Délais moyens</th>
          </tr>
        </thead>
        <tbody>
          {solutions.map((s, i) => (
            <tr key={i} className="bg-gray-50 rounded-xl shadow">
              <td className="py-4 px-4 font-bold text-primary-blue">{s.nom}</td>
              <td className="py-4 px-4 text-gray-700">{s.budget}</td>
              <td className="py-4 px-4 text-gray-700">{s.delais}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className="mt-6 text-sm text-gray-500">* Les budgets sont donnés à titre indicatif et peuvent varier selon les options choisies, quantités et matières.</div>
    </div>
  </section>
);

export default BudgetEtDelaisSection;