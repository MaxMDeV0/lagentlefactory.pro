import React from "react";

const useCases = [
  {
    titre: "Lancement de marque",
    description: "Accompagnement de A à Z pour jeunes marques souhaitant lancer une première collection responsable, avec choix du modèle, personnalisation et conseils sur les quantités.",
    solution: "Prêt-à-personnaliser"
  },
  {
    titre: "Uniformes d'entreprise",
    description: "Création d'une gamme d'uniformes personnalisés pour renforcer l'identité de marque, avec broderie du logo et choix des matières adaptées à l'usage professionnel.",
    solution: "Semi-sur-mesure"
  },
  {
    titre: "Projet créatif haut de gamme",
    description: "Développement d'une pièce unique ou d'une mini-collection pour une marque premium, avec sourcing matières exclusives et accompagnement design.",
    solution: "Sur-mesure"
  },
  {
    titre: "Boutique test capsule",
    description: "Production rapide d'une petite série pour tester un concept en boutique, avec personnalisation simple et délais courts.",
    solution: "Prêt-à-personnaliser"
  }
];

const UseCasesSection: React.FC = () => (
  <section className="bg-primary-blue text-white py-16 md:py-24">
    <div className="max-w-6xl mx-auto px-4">
      <h2 className="text-3xl md:text-4xl font-extrabold mb-8">Exemples d'usages</h2>
      <div className="grid md:grid-cols-2 gap-8">
        {useCases.map((u, i) => (
          <div key={i} className="bg-white/10 rounded-2xl shadow-lg p-6 flex flex-col gap-2">
            <div className="text-lg font-bold text-white/90">{u.titre}</div>
            <div className="text-white/80 text-sm mb-2">{u.description}</div>
            <div className="inline-block bg-white text-primary-blue font-bold rounded-full px-4 py-1 text-xs uppercase">{u.solution}</div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default UseCasesSection;
