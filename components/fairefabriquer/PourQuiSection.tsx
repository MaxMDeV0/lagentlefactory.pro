import React from "react";
import { Link } from "react-router-dom";

const cartes = [
  {
    img: "/media/designer-travail.jpg",
    titre: "Pour les marques & créateurs",
    desc: "Lancez une collection cohérente, durable et fabriquée en France. Du patronage à la production.",
    points: ["Accompagnement de A à Z", "Prototypage et ajustements", "Petites et moyennes séries"],
    cta: { label: "Découvrir l'offre créateurs", to: "/offre/marques-createurs" }
  },
  {
    img: "/media/equipe-corporate.jpg",
    titre: "Pour les entreprises",
    desc: "Des vêtements premium, responsables et personnalisés pour vos collaborateurs ou vos événements.",
    points: ["Textile corporate haut de gamme", "Image de marque valorisée", "Confort au quotidien"],
    cta: { label: "Découvrir l'offre entreprises", to: "/offre/entreprises" }
  },
  {
    img: "/media/boutique-tendance.jpg",
    titre: "Pour les boutiques & concept-stores",
    desc: "Créez un produit exclusif, une série limitée ou une pièce signature pour votre clientèle.",
    points: ["Pièces exclusives", "Séries limitées", "Différenciation"],
    cta: { label: "Découvrir l'offre boutiques", to: "/offre/boutiques" }
  },
  {
    img: "/media/equipe-sportive.jpg",
    titre: "Pour les institutions & clubs",
    desc: "Des vêtements durables, loin des goodies, pensés pour représenter vos valeurs.",
    points: ["Textile durable", "Identité valorisée", "Usage régulier"],
    cta: { label: "Découvrir l'offre institutions", to: "/offre/institutions" }
  }
];

const PourQuiSection: React.FC = () => (
  <section className="bg-gray-50 py-16 md:py-24">
    <div className="max-w-6xl mx-auto px-4">
      <h2 className="text-3xl md:text-4xl font-extrabold text-primary-blue mb-4 text-center">Une solution pensée pour tous ceux qui veulent du textile de qualité</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {cartes.map((c, i) => (
          <div key={i} className="bg-white rounded-2xl shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all p-8 flex flex-col">
            <img src={c.img} alt={c.titre} className="rounded-xl mb-4 object-cover h-48 w-full" />
            <div className="font-bold text-xl text-primary-blue mb-2">{c.titre}</div>
            <div className="text-lg text-gray-700 mb-2">{c.desc}</div>
            <ul className="mb-4 text-gray-700 list-disc pl-5">
              {c.points.map((p, j) => (<li key={j}>{p}</li>))}
            </ul>
            <Link to={c.cta.to} className="mt-auto border-2 border-primary-blue text-primary-blue font-bold rounded-full px-8 py-4 uppercase text-lg shadow-lg hover:bg-primary-blue hover:text-white transition-all">{c.cta.label}</Link>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default PourQuiSection;
