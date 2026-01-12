import React from "react";
import { Link } from "react-router-dom";

const FibresRecycleesSection: React.FC = () => (
  <section className="bg-primary-blue text-white py-16 md:py-24">
    <div className="max-w-6xl mx-auto px-4 grid md:grid-cols-2 gap-12 items-center">
      <div className="order-2 md:order-1">
        <h2 className="text-3xl md:text-4xl font-extrabold mb-2">Fibres recyclées</h2>
        <div className="text-lg font-semibold mb-2">Issues de chutes ou textiles recyclés</div>
        <p className="text-lg leading-relaxed mb-4">Polyester recyclé rPET (bouteilles plastiques), coton recyclé (chutes textiles), nylon recyclé ECONYL. Réduction des déchets textiles, économie de ressources vierges, qualité équivalente au neuf.</p>
        <ul className="list-disc pl-6 mb-4 text-lg">
          <li>Réduction des déchets textiles</li>
          <li>Économie de ressources vierges</li>
          <li>Qualité équivalente au neuf</li>
        </ul>
        <div className="bg-white/10 border-l-4 border-accent-green p-4 rounded-xl italic mb-4">59% d'émissions CO2 en moins • Pas de nouvelle extraction de pétrole • Certification GRS</div>
        <Link to="/realisations?matiere=recycle" className="inline-block bg-white text-primary-blue font-bold px-6 py-3 rounded-full shadow hover:bg-cta-red hover:text-white transition-all">Voir des exemples de réalisations recyclées</Link>
      </div>
      <div className="order-1 md:order-2 flex flex-col items-center md:items-end">
        <img src="/media/fibres-recyclees.jpg" alt="Fibres recyclées" className="rounded-2xl shadow-lg w-full max-w-md" />
      </div>
    </div>
  </section>
);

export default FibresRecycleesSection;
