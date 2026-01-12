import React from "react";
import { Link } from "react-router-dom";

const avantages = [
  "Durée de vie moyenne : 5+ ans d'usage régulier",
  "Réparabilité : coutures accessibles",
  "Entretien facile : résistance lavages répétés"
];

const DurabiliteSection: React.FC = () => (
  <section className="bg-primary-blue text-white py-16 md:py-24">
    <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 px-4 items-center">
      <div>
        <div className="flex items-center mb-4">
          <svg className="w-10 h-10 text-white mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor"><circle cx="12" cy="12" r="10" strokeWidth={2} /><path strokeWidth={2} d="M12 6v6l4 2" /></svg>
          <h2 className="text-3xl md:text-4xl font-extrabold">Durabilité</h2>
        </div>
        <h3 className="text-xl font-bold text-white mb-2">Pensé pour durer, pas pour suivre une tendance</h3>
        <p className="text-lg mb-4">Vêtements conçus pour résister au temps : coutures renforcées, matières qui ne boulochent pas, teintures grand teint, design intemporel.</p>
        <ul className="mb-6 list-disc pl-5">
          {avantages.map((a, i) => (<li key={i}>{a}</li>))}
        </ul>
        <div className="bg-white/10 rounded-xl p-4 mb-6">
          <div className="font-bold mb-2">Comparatif visuel</div>
          <div className="flex items-center justify-between">
            <div className="text-center">
              <div className="text-5xl font-black">5+ ans</div>
              <div className="text-xs uppercase tracking-widest">Nos vêtements</div>
            </div>
            <div className="text-center">
              <div className="text-5xl font-black text-red-400">1 an</div>
              <div className="text-xs uppercase tracking-widest">Fast fashion</div>
            </div>
          </div>
        </div>
        <blockquote className="italic mb-6">"Nos pièces ne sont pas faites pour quelques usages : elles sont pensées pour durer"</blockquote>
        <Link to="/fabrication/solutions" className="inline-block bg-cta-red hover:bg-white text-white hover:text-primary-blue transition-all font-bold rounded-full px-8 py-4 uppercase text-lg shadow-lg">Découvrir nos solutions</Link>
      </div>
      <div>
        <img src="/media/durabilite-textile.jpg" alt="Durabilité textile" className="rounded-2xl shadow-lg w-full object-cover" />
      </div>
    </div>
  </section>
);

export default DurabiliteSection;
