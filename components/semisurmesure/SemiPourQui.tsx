import React from "react";
import { Link } from "react-router-dom";

const SemiPourQui: React.FC = () => (
  <section className="max-w-5xl mx-auto px-4 py-16">
    <h2 className="text-2xl md:text-3xl font-bold font-sans mb-8 text-primary-blue">Pour qui ?</h2>
    <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
      <div className="bg-white border border-gray-200 rounded-lg p-6">
        <h3 className="text-lg font-bold text-primary-blue mb-2 font-sans">Marques</h3>
        <p className="text-primary-blue/90 text-sm mb-2">Pièces adaptées à votre univers, identité préservée.</p>
        <Link to="/marques-createurs" className="text-primary-blue underline text-xs">Voir segment</Link>
      </div>
      <div className="bg-white border border-gray-200 rounded-lg p-6">
        <h3 className="text-lg font-bold text-primary-blue mb-2 font-sans">Entreprises</h3>
        <p className="text-primary-blue/90 text-sm mb-2">Vêtement corporate différenciant, à l’image de votre organisation.</p>
        <Link to="/entreprises" className="text-primary-blue underline text-xs">Voir segment</Link>
      </div>
      <div className="bg-white border border-gray-200 rounded-lg p-6">
        <h3 className="text-lg font-bold text-primary-blue mb-2 font-sans">Boutiques</h3>
        <p className="text-primary-blue/90 text-sm mb-2">Pièce signature alignée avec votre clientèle.</p>
        <Link to="/boutiques" className="text-primary-blue underline text-xs">Voir segment</Link>
      </div>
      <div className="bg-white border border-gray-200 rounded-lg p-6">
        <h3 className="text-lg font-bold text-primary-blue mb-2 font-sans">Institutions</h3>
        <p className="text-primary-blue/90 text-sm mb-2">Rendu durable, usage intensif, valorisation assurée.</p>
        <Link to="/institutions" className="text-primary-blue underline text-xs">Voir segment</Link>
      </div>
    </div>
  </section>
);

export default SemiPourQui;
