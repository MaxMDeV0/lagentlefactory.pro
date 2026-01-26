import React from "react";
import { Link } from "react-router-dom";

const projets = [
  {
    img: "/media/hoodie-corporate.jpg",
    client: "Entreprise 150 personnes",
    solution: "Prêt-à-personnaliser",
    quantite: "200 pièces",
    resultat: "92% des collaborateurs le portent en dehors du travail"
  },
  {
    img: "/media/tshirt-capsule.jpg",
    client: "Concept-store Paris",
    solution: "Semi-sur-mesure",
    quantite: "120 pièces",
    resultat: "Vendu en 12 jours, 3 réassorts demandés"
  },
  {
    img: "/media/sweat-club.jpg",
    client: "Fédération nationale",
    solution: "Co-création",
    quantite: "300 pièces",
    resultat: "Fierté renforcée, demande pour version supporters"
  },
  {
    img: "/media/collection-streetwear.jpg",
    client: "Jeune marque",
    solution: "Co-création complète",
    quantite: "250 pièces",
    resultat: "Collection sold-out en 6 semaines"
  }
];

const ExemplesRealisationsSection: React.FC = () => (
  <section className="bg-white py-16 md:py-24">
    <div className="max-w-6xl mx-auto px-4">
      <h2 className="text-3xl md:text-4xl font-extrabold text-primary-blue mb-4 text-center">Ils nous ont confié leurs vêtements</h2>
      <h3 className="text-xl font-bold text-primary-blue mb-8 text-center">Voici ce que nous avons créé ensemble</h3>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
        {projets.map((p, i) => (
          <div key={i} className="bg-gray-50 rounded-2xl shadow-lg p-6 flex flex-col items-center">
            <img src={p.img} alt={p.client} className="rounded-xl mb-4 object-cover h-40 w-full" />
            <div className="font-bold text-primary-blue mb-1">{p.client}</div>
            <div className="text-xs text-gray-500 mb-1">{p.solution} • {p.quantite}</div>
            <div className="italic text-gray-700 text-center">{p.resultat}</div>
          </div>
        ))}
      </div>
      <div className="flex justify-center">
        <Link to="/realisations" className="border-2 border-primary-blue text-primary-blue font-bold rounded-full px-8 py-4 uppercase text-lg shadow-lg hover:bg-primary-blue hover:text-white transition-all">Voir toutes nos réalisations</Link>
      </div>
    </div>
  </section>
);

export default ExemplesRealisationsSection;
