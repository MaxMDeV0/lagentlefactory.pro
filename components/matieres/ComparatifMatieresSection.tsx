import React from "react";

const comparatif = [
  { critere: "Confort", coton: 5, recycle: 4, technique: 3, lin: 5 },
  { critere: "Durabilité", coton: 4, recycle: 5, technique: 5, lin: 4 },
  { critere: "Impact environnemental", coton: 5, recycle: 5, technique: 3, lin: 5 },
  { critere: "Prix", coton: 3, recycle: 4, technique: 4, lin: 3 },
  { critere: "Délais", coton: 4, recycle: 4, technique: 5, lin: 4 },
  { critere: "Usages", coton: 5, recycle: 4, technique: 5, lin: 4 },
];

const stars = (n: number) => Array.from({ length: 5 }, (_, i) => (<span key={i} className={i < n ? "text-accent-green" : "text-gray-300"}>★</span>));

const ComparatifMatieresSection: React.FC = () => (
  <section className="bg-white py-16 md:py-24">
    <div className="max-w-6xl mx-auto px-4">
      <h2 className="text-3xl md:text-4xl font-extrabold text-primary-blue mb-8">Quelle matière pour votre projet ?</h2>
      <div className="overflow-x-auto">
        <table className="min-w-full border rounded-2xl shadow-lg">
          <thead className="bg-gray-100">
            <tr>
              <th className="p-3 text-left">Critère</th>
              <th className="p-3 text-center">Coton bio</th>
              <th className="p-3 text-center">Recyclé</th>
              <th className="p-3 text-center">Technique</th>
              <th className="p-3 text-center">Lin</th>
            </tr>
          </thead>
          <tbody>
            {comparatif.map((row, i) => (
              <tr key={i} className="border-t">
                <td className="p-3 font-bold text-primary-blue">{row.critere}</td>
                <td className="p-3 text-center">{stars(row.coton)}</td>
                <td className="p-3 text-center">{stars(row.recycle)}</td>
                <td className="p-3 text-center">{stars(row.technique)}</td>
                <td className="p-3 text-center">{stars(row.lin)}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="mt-6 flex gap-4 justify-center">
        <button className="bg-accent-green text-white px-6 py-2 rounded-full font-bold uppercase">Je cherche du confort</button>
        <button className="bg-primary-blue text-white px-6 py-2 rounded-full font-bold uppercase">Je veux du durable</button>
        <button className="bg-cta-red text-white px-6 py-2 rounded-full font-bold uppercase">J'ai besoin de performance</button>
      </div>
    </div>
  </section>
);

export default ComparatifMatieresSection;
