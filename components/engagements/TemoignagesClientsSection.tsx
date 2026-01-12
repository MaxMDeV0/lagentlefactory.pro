import React from "react";

const temoignages = [
  {
    photo: "/public/media/temoignage-createur.jpg",
    nom: "Julie, créatrice de marque éco-responsable",
    citation: "La Gentle Factory nous a permis de concrétiser notre vision avec exigence et transparence."
  },
  {
    photo: "/public/media/temoignage-rse.jpg",
    nom: "Marc, Directeur RSE d'une entreprise",
    citation: "Un vrai partenaire, force de proposition et d'accompagnement sur toute la chaîne de valeur."
  },
  {
    photo: "/public/media/temoignage-boutique.jpg",
    nom: "Sophie, propriétaire de boutique concept",
    citation: "La confiance et la qualité sont au rendez-vous, nos clients le ressentent."
  }
];

const TemoignagesClientsSection: React.FC = () => (
  <section className="bg-primary-blue text-white py-16 md:py-24">
    <div className="max-w-6xl mx-auto px-4">
      <h2 className="text-3xl md:text-4xl font-extrabold mb-6 text-center">Ce qu'ils disent de nos engagements</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {temoignages.map((t, i) => (
          <div key={i} className="bg-white/10 rounded-xl shadow-lg p-6 flex flex-col items-center">
            <img src={t.photo} alt={t.nom} className="h-20 w-20 rounded-full mb-4 object-cover border-4 border-white" />
            <div className="font-bold text-lg mb-2 text-white text-center">{t.nom}</div>
            <blockquote className="italic text-center text-white/90">{t.citation}</blockquote>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default TemoignagesClientsSection;
