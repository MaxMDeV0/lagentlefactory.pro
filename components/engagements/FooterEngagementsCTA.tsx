import React from "react";
import { Link } from "react-router-dom";

const FooterEngagementsCTA: React.FC = () => (
  <section className="bg-cta-red text-white py-16 md:py-24">
    <div className="max-w-4xl mx-auto px-4 text-center">
      <h2 className="text-3xl md:text-4xl font-extrabold mb-4">Prêt à créer avec sens ?</h2>
      <p className="text-lg mb-8">Parlons de votre projet textile responsable. Nous vous guidons vers la solution la plus cohérente avec vos valeurs.</p>
      <div className="flex flex-col md:flex-row gap-4 justify-center">
        <Link to="/fabrication/solutions" className="border-2 border-white text-white font-bold rounded-full px-8 py-4 uppercase text-lg shadow-lg hover:bg-white hover:text-cta-red transition-all">Nos solutions</Link>
        <Link to="/fabrication/realisations" className="border-2 border-white text-white font-bold rounded-full px-8 py-4 uppercase text-lg shadow-lg hover:bg-white hover:text-cta-red transition-all">Voir nos réalisations</Link>
        <Link to="/contact" className="bg-white text-cta-red font-bold rounded-full px-8 py-4 uppercase text-lg shadow-lg hover:bg-primary-blue hover:text-white transition-all">Demander un devis</Link>
      </div>
    </div>
  </section>
);

export default FooterEngagementsCTA;
