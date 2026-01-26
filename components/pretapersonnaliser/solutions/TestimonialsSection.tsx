import React from "react";

const testimonials = [
  {
    nom: "Julie, fondatrice d'une marque éthique",
    texte: "L'accompagnement de La Gentle Factory a été décisif pour le lancement de ma marque. J'ai pu personnaliser des modèles existants avec une grande qualité et des délais tenus !"
  },
  {
    nom: "Pierre, responsable achats entreprise",
    texte: "Nous avons fait appel à la solution semi-sur-mesure pour nos uniformes. Le résultat est à la hauteur de nos attentes, et l'équipe a su nous conseiller à chaque étape."
  },
  {
    nom: "Sophie, créatrice de mode",
    texte: "Le sur-mesure m'a permis de réaliser une mini-collection unique, avec un vrai suivi technique et créatif. Je recommande vivement !"
  }
];

const TestimonialsSection: React.FC = () => (
  <section className="bg-primary-blue text-white py-16 md:py-24">
    <div className="max-w-4xl mx-auto px-4">
      <h2 className="text-3xl md:text-4xl font-extrabold mb-8">Ils nous ont fait confiance</h2>
      <div className="grid md:grid-cols-3 gap-8">
        {testimonials.map((t, i) => (
          <div key={i} className="bg-white/10 rounded-2xl shadow-lg p-6 flex flex-col gap-2">
            <div className="text-white/90 font-bold mb-2">{t.nom}</div>
            <div className="text-white/80 text-sm">{t.texte}</div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default TestimonialsSection;
