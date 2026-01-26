import React from "react";
import { Link } from "react-router-dom";

const SemiComparatif = () => (
  <section className="max-w-3xl mx-auto px-4 py-12">
    <h2 className="text-2xl md:text-3xl font-bold font-sans mb-8 text-primary-blue">Comparatif</h2>
    <div className="overflow-x-auto">
      <table className="min-w-full bg-white border border-gray-200 rounded-lg text-base">
        <thead>
          <tr>
            <th className="py-3 px-4 text-left font-bold text-primary-blue">Critère</th>
            <th className="py-3 px-4 text-center font-bold text-primary-blue">Prêt-à-personnaliser</th>
            <th className="py-3 px-4 text-center font-bold text-primary-blue">Semi-sur-mesure</th>
          </tr>
        </thead>
        <tbody>
          <tr className="border-t border-gray-200">
            <td className="py-2 px-4">Délais</td>
            <td className="text-center text-primary-blue font-bold">++</td>
            <td className="text-center text-primary-blue font-bold">+</td>
          </tr>
          <tr className="border-t border-gray-200">
            <td className="py-2 px-4">Personnalisation</td>
            <td className="text-center text-primary-blue font-bold">+</td>
            <td className="text-center text-cta-red font-bold">+++</td>
          </tr>
          <tr className="border-t border-gray-200">
            <td className="py-2 px-4">Créativité</td>
            <td className="text-center text-primary-blue font-bold">+</td>
            <td className="text-center text-cta-red font-bold">+++</td>
          </tr>
          <tr className="border-t border-gray-200">
            <td className="py-2 px-4">Budget</td>
            <td className="text-center text-primary-blue font-bold">++</td>
            <td className="text-center text-primary-blue font-bold">++</td>
          </tr>
        </tbody>
      </table>
    </div>
    <div className="mt-6 flex flex-wrap gap-4">
      <Link to="/solutions/pret-a-personnaliser" className="text-primary-blue underline text-sm">Voir Prêt-à-personnaliser</Link>
      <Link to="/solutions/co-creation" className="text-primary-blue underline text-sm">Voir Co-création complète</Link>
    </div>
  </section>
);

export default SemiComparatif;
