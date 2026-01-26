import React from "react";

const matieres = [
  {
    img: "/media/polyester-technique.jpg",
    titre: "Polyester haute performance",
    props: "Respirant, séchage rapide",
    usages: "Vêtements de travail, outdoor"
  },
  {
    img: "/media/fibres-hybrides.jpg",
    titre: "Fibres hybrides",
    props: "Mélange coton/technique",
    usages: "Tenues professionnelles, textile événementiel"
  },
  {
    img: "/media/toile-durable.jpg",
    titre: "Toiles durables",
    props: "Résistance à l'usure",
    usages: "Pièces structurées, vêtements techniques"
  },
];

const MatieresTechniquesSection: React.FC = () => (
  <section className="bg-white py-16 md:py-24">
    <div className="max-w-6xl mx-auto px-4">
      <h2 className="text-3xl md:text-4xl font-extrabold text-primary-blue mb-8">Matières techniques</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
        {matieres.map((m, i) => (
          <div key={i} className="bg-white rounded-2xl shadow-lg border-l-4 border-primary-blue p-6 flex flex-col items-center hover:shadow-xl transition-shadow duration-300">
            <img src={m.img} alt={m.titre} className="h-32 w-full object-cover rounded-xl mb-4" />
            <h3 className="font-bold text-lg text-primary-blue mb-2">{m.titre}</h3>
            <div className="text-sm text-gray-700 mb-1">{m.props}</div>
            <div className="text-xs text-gray-500">Usages : {m.usages}</div>
          </div>
        ))}
      </div>
      <div className="text-lg font-semibold text-primary-blue mb-4">Applications</div>
      <ul className="list-disc pl-6 mb-4 text-lg text-gray-700">
        <li>Vêtements de travail</li>
        <li>Tenues professionnelles</li>
        <li>Textile événementiel</li>
        <li>Pièces outdoor</li>
      </ul>
      {/* Tableau comparatif des propriétés à ajouter ici si besoin */}
    </div>
  </section>
);

export default MatieresTechniquesSection;
