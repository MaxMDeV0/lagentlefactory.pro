import React from "react";
import { Link } from "react-router-dom";

const SemiPourQui: React.FC = () => (
  <section className="max-w-[1200px] mx-auto px-6 py-20">
    <h2 className="text-3xl font-semibold mb-10">Pour qui ?</h2>
    <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
      <div className="bg-white border border-slate-100 rounded-xl p-6 shadow hover:shadow-lg transition group">
        <h3 className="text-xl font-bold text-primary-blue mb-2 group-hover:text-cta-red transition">Marques</h3>
        <p className="text-primary-blue/80">Affirmez votre identité stylistique avec des pièces uniques, adaptées à votre univers.</p>
        <Link to="/marques-createurs" className="text-primary-blue underline hover:text-cta-red text-sm mt-2 inline-block">Voir segment</Link>
      </div>
      <div className="bg-white border border-slate-100 rounded-xl p-6 shadow hover:shadow-lg transition group">
        <h3 className="text-xl font-bold text-primary-blue mb-2 group-hover:text-cta-red transition">Entreprises</h3>
        <p className="text-primary-blue/80">Proposez un vêtement corporate vraiment différenciant, à l’image de votre organisation.</p>
        <Link to="/entreprises" className="text-primary-blue underline hover:text-cta-red text-sm mt-2 inline-block">Voir segment</Link>
      </div>
      <div className="bg-white border border-slate-100 rounded-xl p-6 shadow hover:shadow-lg transition group">
        <h3 className="text-xl font-bold text-primary-blue mb-2 group-hover:text-cta-red transition">Boutiques</h3>
        <p className="text-primary-blue/80">Développez une pièce signature poussée, parfaitement alignée avec votre clientèle.</p>
        <Link to="/boutiques" className="text-primary-blue underline hover:text-cta-red text-sm mt-2 inline-block">Voir segment</Link>
      </div>
      <div className="bg-white border border-slate-100 rounded-xl p-6 shadow hover:shadow-lg transition group">
        <h3 className="text-xl font-bold text-primary-blue mb-2 group-hover:text-cta-red transition">Institutions</h3>
        <p className="text-primary-blue/80">Obtenez un rendu impeccable et durable, pensé pour un usage intensif et valorisant.</p>
        <Link to="/institutions" className="text-primary-blue underline hover:text-cta-red text-sm mt-2 inline-block">Voir segment</Link>
      </div>
    </div>
  </section>
);

export default SemiPourQui;
