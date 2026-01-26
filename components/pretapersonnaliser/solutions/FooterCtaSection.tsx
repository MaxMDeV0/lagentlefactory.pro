import React from "react";
import { Link } from "react-router-dom";

const FooterCtaSection: React.FC = () => (
  <section className="bg-cta-red text-white py-16 md:py-24">
    <div className="max-w-3xl mx-auto px-4 text-center">
      <h2 className="text-3xl md:text-4xl font-extrabold mb-4">Prêt à concrétiser votre projet textile ?</h2>
      <p className="mb-8 text-lg md:text-xl">Notre équipe vous accompagne à chaque étape, du choix de la solution à la livraison. Discutons de votre besoin !</p>
      <Link to="/contact" className="bg-white text-cta-red font-bold rounded-full px-10 py-5 uppercase text-lg shadow-lg hover:bg-cta-red hover:text-white border-2 border-white transition-all">Demander un devis</Link>
    </div>
  </section>
);

export default FooterCtaSection;
