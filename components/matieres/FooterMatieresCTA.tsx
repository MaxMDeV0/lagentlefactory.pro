import React from "react";
import { Link } from "react-router-dom";

const FooterMatieresCTA: React.FC = () => (
  <section className="bg-primary-blue text-white py-16 md:py-24">
    <div className="max-w-2xl mx-auto px-4 text-center">
      <h2 className="text-3xl md:text-4xl font-extrabold mb-4">Quelle matière pour votre projet ?</h2>
      <p className="text-lg mb-8">Nous vous aidons à choisir la matière la plus adaptée à vos besoins et vos valeurs</p>
      <div className="flex flex-col md:flex-row gap-6 justify-center items-center">
        <Link to="/solutions" className="bg-white text-primary-blue font-bold px-8 py-4 rounded-full shadow-lg hover:bg-primary-blue hover:text-white transition-colors text-lg uppercase border-2 border-white">Découvrir nos solutions</Link>
        <Link to="/fabrication" className="bg-white text-primary-blue font-bold px-8 py-4 rounded-full shadow-lg hover:bg-primary-blue hover:text-white transition-colors text-lg uppercase border-2 border-white">Voir la fabrication</Link>
        <Link to="/contact-devis" className="bg-cta-red text-white font-bold px-8 py-4 rounded-full shadow-lg hover:bg-white hover:text-cta-red transition-colors text-lg uppercase">Demander conseil</Link>
      </div>
    </div>
  </section>
);

export default FooterMatieresCTA;
