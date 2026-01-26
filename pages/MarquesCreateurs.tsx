import React from 'react';
import { Link } from 'react-router-dom';

const MarquesCreateurs: React.FC = () => {
  return (
    <main className="bg-white text-primary-blue min-h-screen mt-12">
      <div className="max-w-[1200px] mx-auto px-6 py-24">
        <h1 className="text-4xl md:text-5xl font-extrabold mb-6">Créer votre collection de vêtements</h1>

        <section className="mb-12 bg-[#293279] p-8">
          <h2 className="text-2xl text-white font-bold mb-3">Ce que nous faisons pour les créateurs</h2>
          <p className="text-lg text-white leading-relaxed ">
            Nous accompagnons les marques et créateurs à chaque étape : étude de faisabilité, choix des matières,
            prototypage, industrialisation et production. Notre objectif : transformer votre idée en une pièce
            parfaitement fabriquée en France, respectueuse de votre identité et de vos contraintes de volumes.
          </p>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6">Trois façons de créer votre pièce</h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <article className="p-6 border rounded-xl shadow-sm">
              <h3 className="text-xl font-semibold mb-2">Prêt-à-personnaliser</h3>
              <p className="text-sm text-primary-blue/80">
                Choisissez une base (coupe, grammage, couleur) et personnalisez-la : broderie, sérigraphie,
                étiquette, packaging. Rapide et économique pour les petites séries.
              </p>
            </article>

            <article className="p-6 border rounded-xl shadow-sm">
              <h3 className="text-xl font-semibold mb-2">Semi-sur-mesure</h3>
              <p className="text-sm text-primary-blue/80">
                Adaptation d'un patron existant à vos spécifications : ajustements de coupe, choix de matières
                premium et finitions sur-mesure. Idéal pour tester une nouvelle pièce.
              </p>
            </article>

            <article className="p-6 border rounded-xl shadow-sm">
              <h3 className="text-xl font-semibold mb-2">Co-création complète</h3>
              <p className="text-sm text-primary-blue/80">
                Du design initial jusqu'à la production, nous travaillons main dans la main avec vous : sourcing,
                prototypage, essais, validation, et série finale fabriquée en France.
              </p>
            </article>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-4">Fabrication française</h2>
          <p className="text-primary-blue/80 mb-6">
            Nos ateliers partenaires sont basés en France et respectent des standards élevés de qualité et de
            conformité sociale. Nous privilégions des matières locales et responsables (coton bio, fibres recyclées,
            filaments techniques) afin de limiter l'empreinte carbone et assurer une traçabilité complète.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <img src="./media/boutique-la-gentle-factory.png" alt="Atelier" className="w-full rounded-xl shadow-lg object-cover h-64" />
            <img src="./media/equipe-lgf-escalier.png" alt="Équipe" className="w-full rounded-xl shadow-lg object-cover h-64" />
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-4">Pourquoi nous choisir ?</h2>
          <ul className="grid grid-cols-1 md:grid-cols-3 gap-6 text-primary-blue/80">
            <li className="p-4 border rounded-lg">Savoir-faire français : des ateliers sélectionnés pour leur qualité.</li>
            <li className="p-4 border rounded-lg">Accompagnement complet du design à la livraison.</li>
            <li className="p-4 border rounded-lg">Transparence sur les coûts, délais et matériaux.</li>
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

export default MarquesCreateurs;
