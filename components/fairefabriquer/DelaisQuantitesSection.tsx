import React from "react";

const lignes = [
  { solution: "Prêt-à-personnaliser", delais: "4-6 semaines", min: "50 pièces", ideal: "Tests, corporate, clubs" },
  { solution: "Semi-sur-mesure", delais: "8-10 semaines", min: "100 pièces", ideal: "Marques, boutiques" },
  { solution: "Co-création complète", delais: "12-16 semaines", min: "150 pièces", ideal: "Collections, projets uniques" }
];

const DelaisQuantitesSection: React.FC = () => (
  <section className="bg-gray-50 py-16 md:py-24">
    <div className="max-w-6xl mx-auto px-4">
      <h2 className="text-3xl md:text-4xl font-extrabold text-primary-blue mb-4 text-center">Délais et quantités minimales</h2>
      <h3 className="text-xl font-bold text-primary-blue mb-8 text-center">Des solutions adaptées à votre rythme</h3>
      <div className="overflow-x-auto">
        <table className="min-w-full border-separate border-spacing-y-2">
          <thead>
            <tr className="bg-primary-blue text-white">
              <th className="py-2 px-4 text-left">Solution</th>
              <th className="py-2 px-4 text-center">Délais</th>
              <th className="py-2 px-4 text-center">Quantité min</th>
              <th className="py-2 px-4 text-center">Idéal pour</th>
            </tr>
          </thead>
          <tbody>
            {lignes.map((l, i) => (
              <tr key={i} className={i % 2 ? "bg-gray-50" : "bg-white"}>
                <td className="py-2 px-4 font-bold text-primary-blue">{l.solution}</td>
                <td className="py-2 px-4 text-center">{l.delais}</td>
                <td className="py-2 px-4 text-center">{l.min}</td>
                <td className="py-2 px-4 text-center">{l.ideal}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="mt-4 text-center text-gray-600 text-sm">Délais indicatifs hors prototypage. Nous adaptons selon vos contraintes.</div>
    </div>
  </section>
);

export default DelaisQuantitesSection;
