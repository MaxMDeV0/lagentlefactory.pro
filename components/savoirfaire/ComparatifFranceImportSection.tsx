import React from "react";

const criteres = [
  { label: "Traçabilité", france: "Totale", import: "Limitée" },
  { label: "Qualité", france: "Constante", import: "Variable" },
  { label: "Délais", france: "6-12 semaines", import: "12-24 semaines" },
  { label: "Impact carbone", france: "-75%", import: "Standard" },
  { label: "Réactivité", france: "Immédiate", import: "Lente" },
  { label: "Normes sociales", france: "Strictes EU", import: "Variables" },
  { label: "Communication", france: "Directe", import: "Intermédiaires" },
  { label: "Visites possibles", france: "Oui", import: "Non" }
];

const ComparatifFranceImportSection: React.FC = () => (
  <section className="bg-white py-16 md:py-24">
    <div className="max-w-6xl mx-auto px-4">
      <h2 className="text-3xl md:text-4xl font-extrabold text-primary-blue mb-8 text-center">Made in France vs Production délocalisée</h2>
      <div className="overflow-x-auto">
        <table className="min-w-full border-separate border-spacing-y-2">
          <thead>
            <tr>
              <th className="text-left text-lg font-bold text-primary-blue">Critère</th>
              <th className="text-center text-lg font-bold text-green-600">France</th>
              <th className="text-center text-lg font-bold text-orange-500">Import</th>
            </tr>
          </thead>
          <tbody>
            {criteres.map((c, i) => (
              <tr key={i} className="bg-gray-50 rounded-xl">
                <td className="py-2 px-4 font-bold text-primary-blue">{c.label}</td>
                <td className="py-2 px-4 text-center font-bold text-green-600">{c.france}</td>
                <td className="py-2 px-4 text-center font-bold text-orange-500">{c.import}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="mt-8 text-center text-lg text-primary-blue font-bold">Le Made in France n'est pas qu'un label, c'est une garantie</div>
    </div>
  </section>
);

export default ComparatifFranceImportSection;
