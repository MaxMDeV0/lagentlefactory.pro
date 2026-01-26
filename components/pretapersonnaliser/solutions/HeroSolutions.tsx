import React from "react";
import { Link } from "react-router-dom";

const HeroSolutions: React.FC = () => (
  <section className="relative min-h-[60vh] flex items-center justify-center bg-center bg-cover" style={{ backgroundImage: "url('/media/echantillons-tissus-hero.jpg')" }}>
    <div className="absolute inset-0 bg-black/40" aria-hidden="true"></div>
    <div className="relative z-10 text-center text-white px-4 py-24 flex flex-col items-center justify-center">
      <h1 className="text-4xl md:text-5xl font-extrabold mb-6 drop-shadow-lg">Nos solutions</h1>
      <p className="text-xl md:text-2xl font-medium max-w-2xl mx-auto mb-4">Trois façons de donner vie à votre projet textile</p>
      <p className="max-w-2xl mx-auto text-lg md:text-xl opacity-90 mb-4">Une approche structurée, maîtrisée et adaptée à chaque projet : du prêt-à-personnaliser à la co-création sur-mesure, nous avons la solution qui correspond à votre vision et vos contraintes.</p>
      <blockquote className="bg-white/10 border-l-4 border-cta-red p-4 rounded-xl italic mb-8">"Du prêt-à-personnaliser à la co-création sur-mesure, nous avons la solution qui correspond à votre vision et vos contraintes"</blockquote>
      <Link to="/contact" className="inline-block bg-cta-red hover:bg-primary-blue transition-all font-bold rounded-full px-8 py-4 uppercase text-lg shadow-lg">Demander un devis</Link>
    </div>
  </section>
);

export default HeroSolutions;
