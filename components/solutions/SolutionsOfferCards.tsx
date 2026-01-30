
import React from "react";
import { Link } from "react-router-dom";

const offers = [
  {
    title: "Prêt-à-personnaliser",
    description: "Nos modèles existants, personnalisés à votre identité visuelle. Une solution rapide, simple et fiable.",
    color: "bg-primary-blue text-white",
    image: (import.meta.env.BASE_URL || '') + 'media/pretapersonnaliser.jpg',
    link: "/nos-solutions/pret-a-personnaliser",
    button: "En savoir plus"
  },
  {
    title: "Semi-sur-mesure",
    description: "Nous adaptons l'un de nos modèles selon vos besoins : matière, couleur, détails, finitions. Une grande liberté, toujours dans un cadre maîtrisé.",
    color: "bg-white text-primary-blue border border-primary-blue",
    image: (import.meta.env.BASE_URL || '') + 'media/semisurmesure.jpg',
    link: "/nos-solutions/semi-sur-mesure",
    button: "Voir les possibilités"
  },
  {
    title: "Co-création complète",
    description: "Une création textile construite entièrement pour vous : style, patronage, sourcing, prototypage, ajustements et fabrication. Votre vision, accompagnée et concrétisée avec rigueur.",
    color: "bg-cta-red text-white",
    image: (import.meta.env.BASE_URL || '') + 'media/cocreation.jpg',
    link: "/nos-solutions/co-creation-complete",
    button: "Co-créer votre pièce"
  }
];

const SolutionsOfferCards: React.FC = () => (
  <section className="max-w-[1200px] mx-auto py-12 grid grid-cols-1 md:grid-cols-3 gap-8">
    {offers.map((offer, idx) => (
      <div key={idx} className={`p-8 ${offer.color} shadow-none rounded-none flex flex-col items-center`}>
        {/* Pas d'image dans les encarts d'offre */}
        <h3 className="text-2xl font-bold mb-2">{offer.title}</h3>
        <p className="mb-4 text-base font-medium text-center">{offer.description}</p>
        <Link to={offer.link} className={`mt-auto px-6 py-3 font-bold uppercase ${idx === 1 ? 'bg-primary-blue text-white' : 'bg-white text-primary-blue'} border border-primary-blue`}>{offer.button}</Link>
      </div>
    ))}
  </section>
);

export default SolutionsOfferCards;
