import React from "react";
import { Link } from "react-router-dom";

const SemiComparatif = () => (
  <section className="max-w-[900px] mx-auto px-6 py-20">
    <h2 className="text-3xl font-semibold mb-10">Comparatif</h2>
    <div className="overflow-x-auto">
      <table className="min-w-full bg-slate-50 rounded-lg shadow text-lg">
        <thead>
          <tr>
            <th className="py-4 px-6 text-left font-bold text-primary-blue">Critère</th>
            <th className="py-4 px-6 text-center font-bold text-primary-blue">Prêt-à-personnaliser</th>
            <th className="py-4 px-6 text-center font-bold text-primary-blue">Semi-sur-mesure</th>
          </tr>
        </thead>
        <tbody>
          <tr className="border-t">
            <td className="py-3 px-6">Délais</td>
            <td className="text-center"><span className="text-green-600 font-bold">++</span></td>
            <td className="text-center"><span className="text-green-600 font-bold">+</span></td>
          </tr>
          <tr className="border-t">
            <td className="py-3 px-6">Personnalisation</td>
            <td className="text-center"><span className="text-primary-blue font-bold">+</span></td>
            <td className="text-center"><span className="text-cta-red font-bold">+++</span></td>
          </tr>
          <tr className="border-t">
            <td className="py-3 px-6">Créativité</td>
            <td className="text-center"><span className="text-primary-blue font-bold">+</span></td>
            <td className="text-center"><span className="text-cta-red font-bold">+++</span></td>
          </tr>
          <tr className="border-t">
            <td className="py-3 px-6">Budget</td>
            <td className="text-center"><span className="text-green-600 font-bold">++</span></td>
            <td className="text-center"><span className="text-green-600 font-bold">++</span></td>
          </tr>
        </tbody>
      </table>
    </div>
    <div className="mt-6 flex flex-wrap gap-4">
      <Link to="/solutions/pret-a-personnaliser" className="text-primary-blue underline hover:text-cta-red">Voir Prêt-à-personnaliser</Link>
      <Link to="/solutions/co-creation" className="text-primary-blue underline hover:text-cta-red">Voir Co-création complète</Link>
    </div>
  </section>
);

export default SemiComparatif;
