import React from "react";
import { Link } from "react-router-dom";

const HeroSavoirFaire: React.FC = () => (
  <section className="relative min-h-[60vh] flex items-center justify-center bg-center bg-cover" style={{ backgroundImage: "url('/media/atelier-fabrication-hero.jpg')" }}>
    <div className="absolute inset-0 bg-black/40" aria-hidden="true"></div>
    <div className="relative z-10 text-center text-white px-4 py-24 flex flex-col items-center justify-center">
      <h1 className="text-4xl md:text-5xl font-extrabold mb-6 drop-shadow-lg">Notre fabrication textile</h1>
      <p className="text-xl md:text-2xl font-medium max-w-2xl mx-auto mb-4">Créer en France, avec sérieux, précision et respect.</p>
      <p className="max-w-2xl mx-auto text-lg md:text-xl opacity-90 mb-4">La fabrication n'est pas une simple étape mais la garantie de qualité, durabilité et intégrité.</p>
      <blockquote className="bg-white/10 border-l-4 border-cta-red p-4 rounded-xl italic mb-8">"Chaque vêtement fabriqué dans nos ateliers est le résultat d'un travail exigeant, rigoureux et profondément humain"</blockquote>
      <div className="flex flex-col md:flex-row gap-4 justify-center">
        <Link to="/contact" className="bg-cta-red hover:bg-primary-blue transition-all font-bold rounded-full px-8 py-4 uppercase text-lg shadow-lg">Demander un devis</Link>
        <Link to="/fabrication/ateliers" className="border-2 border-white text-white font-bold rounded-full px-8 py-4 uppercase text-lg shadow-lg hover:bg-white hover:text-cta-red transition-all">Découvrir nos ateliers</Link>
      </div>
    </div>
  </section>
);

export default HeroSavoirFaire;
