import React from "react";

const temoignages = [
  {
    photo: "/media/temoignage-createur.jpg",
    citation: "La qualité et la réactivité font la différence",
    nom: "Julie Martin",
    fonction: "Créatrice de marque",
    projet: "Capsule éco-responsable"
  },
  {
    photo: "/media/temoignage-achat.jpg",
    citation: "Une traçabilité rassurante pour nos clients",
    nom: "Marc Dupuis",
    fonction: "Directeur achat entreprise",
    projet: "Uniformes corporate"
  },
  {
    photo: "/media/temoignage-boutique.jpg",
    citation: "Des pièces qui se démarquent par leur finition",
    nom: "Sophie Lemoine",
    fonction: "Boutique concept",
    projet: "Série limitée premium"
  }
];

const TemoignagesSavoirFaireSection: React.FC = () => (
  <section className="bg-white py-16 md:py-24">
    <div className="max-w-6xl mx-auto px-4">
      <h2 className="text-3xl md:text-4xl font-extrabold text-primary-blue mb-8 text-center">Ils ont choisi notre fabrication française</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {temoignages.map((t, i) => (
          <div key={i} className="bg-gray-50 rounded-2xl shadow-lg p-6 flex flex-col items-center">
            <img src={t.photo} alt={t.nom} className="h-20 w-20 rounded-full mb-4 object-cover border-4 border-primary-blue" />
            <blockquote className="italic text-center text-primary-blue mb-2">{t.citation}</blockquote>
            <div className="font-bold text-lg text-primary-blue">{t.nom}</div>
            <div className="text-xs text-gray-500">{t.fonction}</div>
            <div className="text-xs text-gray-500">{t.projet}</div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default TemoignagesSavoirFaireSection;
