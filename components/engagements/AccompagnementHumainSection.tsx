import React from "react";
import { Link } from "react-router-dom";

const valeurs = [
  { titre: "Écoute", desc: "Comprendre votre vision" },
  { titre: "Conseil", desc: "Orienter vers la meilleure solution" },
  { titre: "Réactivité", desc: "Réponse en 24-48h" },
  { titre: "Suivi", desc: "Accompagnement du début à la livraison" }
];

const AccompagnementHumainSection: React.FC = () => (
  <section className="bg-cta-red text-white py-16 md:py-24">
    <div className="max-w-6xl mx-auto px-4">
      <div className="flex items-center mb-4">
        <svg className="w-10 h-10 text-white mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeWidth={2} d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" /></svg>
        <h2 className="text-3xl md:text-4xl font-extrabold">Accompagnement humain</h2>
      </div>
      <h3 className="text-xl font-bold mb-2">Comprendre vos besoins, vous guider, structurer votre projet</h3>
      <p className="text-lg mb-4">Nous avançons avec vous, pas à votre place.</p>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-8">
        {valeurs.map((v, i) => (
          <div key={i} className="bg-white/10 rounded-xl p-4 text-center">
            <div className="font-bold text-lg mb-2">{v.titre}</div>
            <div className="text-sm">{v.desc}</div>
          </div>
        ))}
      </div>
      <blockquote className="italic mb-6">"Un vrai partenaire, pas juste un fournisseur"</blockquote>
      <img src="./media/equipe-lgf-escalier.png" alt="Équipe La Gentle Factory" className="rounded-2xl shadow-lg w-full object-cover mb-6" />
      <Link to="/contact" className="inline-block bg-white text-cta-red hover:bg-primary-blue hover:text-white transition-all font-bold rounded-full px-8 py-4 uppercase text-lg shadow-lg">Parler de votre projet</Link>
    </div>
  </section>
);

export default AccompagnementHumainSection;
