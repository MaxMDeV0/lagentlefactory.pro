import React from "react";

const steps = [
  {
    titre: "Prise de contact",
    description: "Premier échange pour comprendre votre projet, vos besoins et vos contraintes."
  },
  {
    titre: "Conseil & orientation",
    description: "Présentation des solutions adaptées, choix du niveau de personnalisation, conseils matières et budget."
  },
  {
    titre: "Proposition & devis",
    description: "Envoi d'une proposition détaillée avec planning, budget, et options personnalisées."
  },
  {
    titre: "Développement",
    description: "Prototypage, validation des échantillons, ajustements selon vos retours."
  },
  {
    titre: "Production & livraison",
    description: "Fabrication dans nos ateliers français, contrôle qualité, expédition selon vos délais."
  }
];

const TimelineProcessSection: React.FC = () => (
  <section className="bg-gray-50 py-16 md:py-24">
    <div className="max-w-5xl mx-auto px-4">
      <h2 className="text-3xl md:text-4xl font-extrabold text-primary-blue mb-8">Votre parcours avec nous</h2>
      <ol className="relative border-l-4 border-primary-blue ml-4">
        {steps.map((s, i) => (
          <li key={i} className="mb-12 ml-4">
            <div className="absolute -left-7 w-6 h-6 bg-primary-blue rounded-full flex items-center justify-center text-white font-bold text-sm shadow-lg">{i + 1}</div>
            <div className="pl-8">
              <div className="font-bold text-lg text-primary-blue mb-1">{s.titre}</div>
              <div className="text-gray-700 text-sm">{s.description}</div>
            </div>
          </li>
        ))}
      </ol>
    </div>
  </section>
);

export default TimelineProcessSection;
