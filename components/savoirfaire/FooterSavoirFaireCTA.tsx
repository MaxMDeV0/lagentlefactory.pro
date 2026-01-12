import React from "react";
import { Link } from "react-router-dom";

const FooterSavoirFaireCTA: React.FC = () => (
  <section className="bg-primary-blue text-white py-16 md:py-24">
    <div className="max-w-4xl mx-auto px-4 text-center">
      <h2 className="text-3xl md:text-4xl font-extrabold mb-4">Prêt à fabriquer en France ?</h2>
      <p className="text-lg mb-8">Découvrez comment notre savoir-faire textile peut donner vie à votre projet</p>
      <div className="flex flex-col md:flex-row gap-4 justify-center">
        <Link to="/fabrication/nos-ateliers" className="border-2 border-white text-white font-bold rounded-full px-8 py-4 uppercase text-lg shadow-lg hover:bg-white hover:text-primary-blue transition-all">Découvrir nos ateliers</Link>
        <Link to="/fabrication/nos-matieres" className="border-2 border-white text-white font-bold rounded-full px-8 py-4 uppercase text-lg shadow-lg hover:bg-white hover:text-primary-blue transition-all">Voir nos matières</Link>
        <Link to="/contact" className="bg-cta-red text-white font-bold rounded-full px-8 py-4 uppercase text-lg shadow-lg hover:bg-white hover:text-cta-red transition-all">Demander un devis</Link>
      </div>
    </div>
  </section>
);

export default FooterSavoirFaireCTA;
