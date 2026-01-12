import React from "react";
import { Link } from "react-router-dom";

const actions = [
  "Sélection rigoureuse des matières (bio, recyclé)",
  "Partenaires certifiés et audités",
  "Limitation des traitements chimiques",
  "Réduction des déchets de production",
  "Emballages recyclés et recyclables"
];

const chiffres = [
  { label: "Matières certifiées responsables", value: "85%" },
  { label: "Ateliers audités annuellement", value: "100%" },
  { label: "Déchets vs industrie", value: "-40%" }
];

const ResponsabiliteSection: React.FC = () => (
  <section className="bg-gray-50 py-16 md:py-24">
    <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 px-4 items-center">
      <div>
        <img src="/media/matieres-responsables.jpg" alt="Textile responsable" className="rounded-2xl shadow-lg w-full object-cover" />
      </div>
      <div>
        <div className="flex items-center mb-4">
          <svg className="w-10 h-10 text-green-600 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor"><circle cx="12" cy="12" r="10" strokeWidth={2} /><path strokeWidth={2} d="M12 8v4l3 3" /></svg>
          <h2 className="text-3xl md:text-4xl font-extrabold text-primary-blue">Responsabilité</h2>
        </div>
        <h3 className="text-xl font-bold text-green-600 mb-2">Chaque décision compte</h3>
        <p className="text-lg text-gray-700 mb-4">Chaque décision – matière, atelier, finition – est prise avec l'impact en tête.</p>
        <ul className="mb-6 list-disc pl-5 text-gray-700">
          {actions.map((a, i) => (<li key={i}>{a}</li>))}
        </ul>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
          {chiffres.map((c, i) => (
            <div key={i} className="bg-white rounded-xl p-4 shadow text-center">
              <div className="text-5xl font-black text-green-600 mb-2">{c.value}</div>
              <div className="text-xs uppercase tracking-widest text-gray-500">{c.label}</div>
            </div>
          ))}
        </div>
        <Link to="/fabrication/nos-matieres" className="inline-block bg-cta-red hover:bg-primary-blue transition-all font-bold rounded-full px-8 py-4 uppercase text-lg shadow-lg">Voir nos matières responsables</Link>
      </div>
    </div>
  </section>
);

export default ResponsabiliteSection;
