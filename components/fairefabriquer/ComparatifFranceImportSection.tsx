import React from "react";

const criteres = [
  { label: "Qualité", france: "Constante, contrôlée", import: "Variable" },
  { label: "Délais totaux", france: "6-12 semaines", import: "12-24 semaines + transport" },
  { label: "MOQ", france: "50-150 pièces", import: "500-1000 pièces souvent" },
  { label: "Communication", france: "Directe, réactive", import: "Décalage horaire, barrière langue" },
  { label: "Traçabilité", france: "Totale", import: "Limitée" },
  { label: "Impact carbone", france: "-75%", import: "Standard" },
  { label: "Normes sociales", france: "Strictes EU", import: "Variables" },
  { label: "Flexibilité", france: "Haute", import: "Faible" }
];

const ComparatifFranceImportSection: React.FC = () => (
  <section className="bg-white py-16 md:py-24">
    <div className="max-w-6xl mx-auto px-4">
      <h2 className="text-3xl md:text-4xl font-extrabold text-primary-blue mb-8 text-center">Made in France vs Production à l'étranger</h2>
      <div className="overflow-x-auto">
        <table className="min-w-full border-separate border-spacing-y-2">
          <thead>
            <tr className="bg-primary-blue text-white">
              <th className="py-2 px-4 text-left">Critère</th>
              <th className="py-2 px-4 text-center">France</th>
              <th className="py-2 px-4 text-center">Étranger</th>
            </tr>
          </thead>
          <tbody>
            {criteres.map((c, i) => (
              <tr key={i} className={i % 2 ? "bg-gray-50" : "bg-white"}>
                <td className="py-2 px-4 font-bold text-primary-blue">{c.label}</td>
                <td className="py-2 px-4 text-center text-green-600 font-bold">{c.france}</td>
                <td className="py-2 px-4 text-center text-orange-500 font-bold">{c.import}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="mt-8 text-center text-lg text-primary-blue font-bold">Le Made in France n'est pas forcément plus cher quand on compte tous les paramètres</div>
    </div>
  </section>
);

export default ComparatifFranceImportSection;
