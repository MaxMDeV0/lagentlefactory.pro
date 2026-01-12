import React from 'react';
import { Link } from 'react-router-dom';

const Boutiques: React.FC = () => {
  return (
    <main className="bg-white text-primary-blue min-h-screen mt-12">
      <div className="max-w-[1200px] mx-auto px-6 py-24">
        <h1 className="text-4xl md:text-5xl font-extrabold mb-6">Pièces exclusives pour boutiques</h1>

        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-3">Ce que nous faisons pour les concept-stores</h2>
          <p className="text-lg text-primary-blue/80 leading-relaxed">
            Création de séries limitées et pièces signatures, accompagnement créatif et production soignée
            pour enrichir votre offre produit et renforcer l'identité de votre boutique.
          </p>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-3">Nos solutions</h2>
          <ul className="list-disc pl-6 text-primary-blue/80 space-y-2">
            <li>Collections capsules</li>
            <li>Pièces co-brandées</li>
            <li>Séries exclusives avec finitions premium</li>
          </ul>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-3">Fabrication française</h2>
          <p className="text-primary-blue/80">Production locale, petits volumes maîtrisés et qualité photographiable pour vos vitrines.</p>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-3">Pourquoi collaborer avec nous ?</h2>
          <ul className="grid grid-cols-1 md:grid-cols-3 gap-6 text-primary-blue/80">
            <li className="p-4 border rounded-lg">Créativité et savoir-faire</li>
            <li className="p-4 border rounded-lg">Contrôle qualité poussé</li>
            <li className="p-4 border rounded-lg">Respect des délais et des quantités</li>
          </ul>
        </section>

        <div className="mt-8">
          <Link to="/" className="inline-block text-primary-blue/80 underline mr-4">Retour à l'accueil</Link>
          <a href="#contact" className="inline-block bg-[#96101C] text-white px-5 py-3 rounded-full">Demander un devis</a>
        </div>
      </div>
    </main>
  );
};

export default Boutiques;
