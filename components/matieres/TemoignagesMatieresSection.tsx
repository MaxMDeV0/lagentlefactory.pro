import React from "react";

const projets = [
  { img: "/public/media/projet-coton.jpg", matiere: "Coton bio", titre: "T-shirt coton bio pour marque streetwear", resultat: "Confort premium, impact réduit, image responsable" },
  { img: "/public/media/projet-recycle.jpg", matiere: "Recyclé", titre: "Sweat recyclé pour entreprise tech", resultat: "Réduction CO2, qualité équivalente au neuf, communication RSE" },
  { img: "/public/media/projet-lin.jpg", matiere: "Lin français", titre: "Chemise lin pour boutique premium", resultat: "Fraîcheur, élégance, traçabilité locale" },
];

const TemoignagesMatieresSection: React.FC = () => (
  <section className="bg-white py-16 md:py-24">
    <div className="max-w-6xl mx-auto px-4">
      <h2 className="text-3xl md:text-4xl font-extrabold text-primary-blue mb-8 text-center">Nos matières en action</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {projets.map((p, i) => (
          <div key={i} className="bg-white rounded-2xl shadow-lg border-l-4 border-primary-blue p-6 flex flex-col items-center hover:shadow-xl transition-shadow duration-300">
            <img src={p.img} alt={p.titre} className="h-32 w-full object-cover rounded-xl mb-4" />
            <div className="font-bold text-lg text-primary-blue mb-2">{p.titre}</div>
            <div className="text-sm text-gray-700 mb-1">Matière : {p.matiere}</div>
            <div className="text-xs text-gray-500">{p.resultat}</div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default TemoignagesMatieresSection;
