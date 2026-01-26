import React from "react";

const faqs = [
  {
    question: "Quels sont les minimums de commande ?",
    answer: "Nous pouvons produire à partir de 50 pièces selon la solution choisie. Les quantités minimales varient selon le niveau de personnalisation et la complexité du projet."
  },
  {
    question: "Puis-je fournir ma propre matière ?",
    answer: "Oui, pour les projets sur-mesure ou semi-sur-mesure, nous pouvons travailler avec vos matières sous réserve de faisabilité technique."
  },
  {
    question: "Quels sont les délais moyens ?",
    answer: "Selon la solution, les délais varient de 3 à 16 semaines après validation des prototypes ou BAT."
  },
  {
    question: "Est-il possible de visiter vos ateliers ?",
    answer: "Oui, nous organisons régulièrement des visites pour nos clients afin de découvrir notre savoir-faire et nos process."
  },
  {
    question: "Proposez-vous un accompagnement design ?",
    answer: "Notre bureau d'études vous accompagne sur le design, le choix des matières, et le développement technique de vos produits."
  }
];

const FAQSection: React.FC = () => (
  <section className="bg-white py-16 md:py-24">
    <div className="max-w-4xl mx-auto px-4">
      <h2 className="text-3xl md:text-4xl font-extrabold text-primary-blue mb-8">Questions fréquentes</h2>
      <div className="divide-y divide-gray-200">
        {faqs.map((f, i) => (
          <div key={i} className="py-6">
            <div className="font-bold text-primary-blue mb-2">{f.question}</div>
            <div className="text-gray-700 text-sm">{f.answer}</div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default FAQSection;
