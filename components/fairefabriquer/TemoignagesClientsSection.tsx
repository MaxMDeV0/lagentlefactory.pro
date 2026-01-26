import React from "react";

const temoignages = [
  {
    photo: "/media/temoignage-marque.jpg",
    citation: "La réactivité et la qualité changent tout",
    nom: "Julie Martin",
    entreprise: "Marque éthique",
    projet: "Capsule éco-responsable"
  },
  {
    photo: "/media/temoignage-rse.jpg",
    citation: "Un partenaire aligné avec nos valeurs",
    nom: "Marc Dupuis",
    entreprise: "Entreprise nationale",
    projet: "Textile corporate premium"
  },
  {
    photo: "/media/temoignage-boutique.jpg",
    citation: "Mes clients apprécient l'origine française",
    nom: "Sophie Lemoine",
    entreprise: "Boutique concept-store",
    projet: "Série limitée signature"
  }
];

const TemoignagesClientsSection: React.FC = () => (
  <section className="bg-primary-blue text-white py-16 md:py-24">
    <div className="max-w-6xl mx-auto px-4">
      <h2 className="text-3xl md:text-4xl font-extrabold mb-8 text-center">Pourquoi ils ont choisi de fabriquer en France avec nous</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {temoignages.map((t, i) => (
          <div key={i} className="bg-white/10 rounded-2xl shadow-lg p-6 flex flex-col items-center">
            <img src={t.photo} alt={t.nom} className="h-20 w-20 rounded-full mb-4 object-cover border-4 border-white" />
            <blockquote className="italic text-center text-white/90 mb-2">{t.citation}</blockquote>
            <div className="font-bold text-lg text-white">{t.nom}</div>
            <div className="text-xs text-white/80">{t.entreprise}</div>
            <div className="text-xs text-white/80">{t.projet}</div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default TemoignagesClientsSection;
