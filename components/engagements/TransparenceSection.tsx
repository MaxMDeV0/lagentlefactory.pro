import React from "react";
import { Link } from "react-router-dom";

const etapes = [
  "Origine de la matière première",
  "Atelier de tricotage/tissage",
  "Atelier de teinture",
  "Atelier de confection",
  "Contrôle qualité et livraison"
];

const TransparenceSection: React.FC = () => (
  <section className="bg-gray-50 py-16 md:py-24">
    <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 px-4 items-center">
      <div>
        <div className="flex items-center mb-4">
          <svg className="w-10 h-10 text-yellow-400 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor"><circle cx="12" cy="12" r="10" strokeWidth={2} /><path strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
          <h2 className="text-3xl md:text-4xl font-extrabold text-primary-blue">Transparence</h2>
        </div>
        <h3 className="text-xl font-bold text-yellow-400 mb-2">Nous savons où, comment et par qui chaque pièce est fabriquée. Et vous le saurez aussi.</h3>
        <p className="text-lg text-gray-700 mb-4">Traçabilité complète de la fibre au vêtement, fournisseurs identifiés, coûts expliqués, impact carbone calculé, visites d'ateliers possibles.</p>
        <ul className="mb-6 list-disc pl-5 text-gray-700">
          <li>Traçabilité complète de la fibre au vêtement</li>
          <li>Fournisseurs identifiés et localisés</li>
          <li>Coûts de production expliqués</li>
          <li>Impact carbone calculé</li>
          <li>Visites d'ateliers possibles</li>
        </ul>
        <div className="bg-white rounded-xl p-4 shadow mb-6">
          <div className="font-bold mb-2">Processus de traçabilité</div>
          <div className="flex flex-wrap gap-4 justify-between">
            {etapes.map((e, i) => (
              <div key={i} className="flex flex-col items-center">
                <div className="bg-primary-blue text-white rounded-full px-4 py-2 mb-2 text-xs font-bold shadow">{i + 1}</div>
                <div className="text-xs text-primary-blue font-semibold text-center">{e}</div>
              </div>
            ))}
          </div>
        </div>
        <div className="bg-yellow-100 rounded-xl p-4 mb-6 text-center text-yellow-900 font-bold">Chaque vêtement peut être tracé jusqu'à son origine</div>
        <Link to="/fabrication" className="inline-block bg-cta-red hover:bg-primary-blue transition-all font-bold rounded-full px-8 py-4 uppercase text-lg shadow-lg">Voir notre fabrication</Link>
      </div>
      <div>
        <img src="/media/infographie-transparence.jpg" alt="Infographie transparence" className="rounded-2xl shadow-lg w-full object-cover" />
      </div>
    </div>
  </section>
);

export default TransparenceSection;
