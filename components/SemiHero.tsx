import React from "react";

const SemiHero: React.FC = () => (
  <section className="relative min-h-[40vh] flex items-center justify-center bg-primary-blue text-white py-20 overflow-hidden">
    <img
      src="/media/atelier-lgf.jpg"
      alt="Atelier textile"
      className="absolute inset-0 w-full h-full object-cover opacity-20 pointer-events-none"
      style={{ zIndex: 0 }}
      loading="lazy"
    />
    <div className="relative z-10 max-w-3xl mx-auto text-center">
      <h1 className="text-5xl font-bold mb-4">Solution semi-sur-mesure</h1>
      <p className="text-2xl font-light">Votre vêtement, votre style. Sur une base solide.</p>
      <p className="mt-6 text-lg max-w-2xl mx-auto text-white/90">
        Le semi-sur-mesure est l'équilibre parfait entre créativité et sécurité. Vous partez d'un modèle Gentle éprouvé, puis vous adaptez ce qui fait la différence : la matière, la couleur, les finitions, les détails qui transforment une bonne pièce en votre pièce.
      </p>
    </div>
  </section>
);

export default SemiHero;
