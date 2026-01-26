import React, { useState } from "react";

const questions = [
  {
    q: "Quelle est la quantité minimale pour faire fabriquer ?",
    a: "À partir de 50 pièces selon la solution choisie."
  },
  {
    q: "Combien de temps prend la fabrication ?",
    a: "De 4 à 16 semaines selon la solution et la complexité du projet."
  },
  {
    q: "Puis-je avoir un prototype avant la production ?",
    a: "Oui, un prototype est proposé pour validation avant lancement."
  },
  {
    q: "Quelles sont les matières disponibles ?",
    a: "Coton bio, fibres recyclées, matières techniques, lin français, etc."
  },
  {
    q: "Peut-on visiter les ateliers ?",
    a: "Oui, sur rendez-vous, nous organisons des visites d'ateliers."
  },
  {
    q: "Comment se passe le paiement ?",
    a: "Acompte à la commande, solde à la livraison. Modalités précisées au devis."
  },
  {
    q: "Livrez-vous en France et à l'international ?",
    a: "Oui, nous livrons partout en France et à l'international."
  },
  {
    q: "Que se passe-t-il en cas de défaut ?",
    a: "Un contrôle qualité est effectué, mais en cas de défaut avéré, nous remplaçons ou remboursons."
  },
  {
    q: "Peut-on commencer petit et augmenter ensuite ?",
    a: "Oui, nous accompagnons la croissance de votre projet."
  },
  {
    q: "Avez-vous des certifications ?",
    a: "Oui : GOTS, GRS, Oeko-Tex, Origine France Garantie, ISO 9001, EPV."
  }
];

const FAQFaireFabriquerSection: React.FC = () => {
  const [open, setOpen] = useState<number | null>(null);
  return (
    <section className="bg-gray-50 py-16 md:py-24">
      <div className="max-w-4xl mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-extrabold text-primary-blue mb-8 text-center">Questions fréquentes</h2>
        <div className="space-y-4">
          {questions.map((q, i) => (
            <div key={i} className="bg-white rounded-xl shadow-lg">
              <button onClick={() => setOpen(open === i ? null : i)} className="w-full text-left px-6 py-4 font-bold text-primary-blue flex justify-between items-center focus:outline-none">
                {q.q}
                <span className="ml-2 text-cta-red">{open === i ? "-" : "+"}</span>
              </button>
              {open === i && <div className="px-6 pb-4 text-gray-700 text-lg leading-relaxed">{q.a}</div>}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQFaireFabriquerSection;
