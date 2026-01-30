import React from "react";
import { Link } from "react-router-dom";

const SemiPourquoi = () => (
  <section className="max-w-[900px] mx-auto px-6 py-20">
    <h2 className="text-3xl font-semibold mb-10">Pourquoi choisir cette solution ?</h2>
    <p className="text-lg text-primary-blue/90 mb-6">
      Le semi-sur-mesure vous permet d’obtenir un vêtement authentiquement à votre image, tout en bénéficiant de l’expertise Gentle Factory et d’un cadre fiable. C’est la solution idéale pour allier créativité, maîtrise technique et sécurité industrielle, sans repartir de zéro.
    </p>
    <ul className="list-disc pl-6 text-primary-blue/80 space-y-2">
      <li>Accompagnement expert à chaque étape</li>
      <li>Production locale, traçabilité et qualité</li>
      <li>Liberté sur les détails sans les contraintes d’une création complète</li>
      <li>Délais et budget maîtrisés</li>
    </ul>
    <div className="mt-10 flex flex-wrap gap-4">
      <a href="#contact" className="bg-cta-red text-white px-6 py-3 rounded-full font-bold hover:bg-primary-blue transition">Demander un devis</a>
      <Link to="/nos-solutions/co-creation-complete" className="bg-primary-blue text-white px-6 py-3 rounded-full font-bold hover:bg-cta-red transition">Découvrir la co-création</Link>
    </div>
  </section>
);

export default SemiPourquoi;
