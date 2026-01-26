import React from 'react';
import { Link } from 'react-router-dom';
import EnterpriseBanner from '../components/entreprise/EnterpriseBanner';
import EnterpriseSolutions from '../components/entreprise/EnterpriseSolutions';
import EnterpriseProcess from '../components/entreprise/EnterpriseProcess';

const Entreprises: React.FC = () => {
  return (
    <main className="bg-white text-primary-blue min-h-screen mt-24">
      <EnterpriseBanner />

      {/* Full-width illustrative image to make the page more visual */}
      <section className="w-full">
        <img src="./media/homme-mariniere-lgf.png" alt="Marinière La Gentle Factory" className="w-full h-72 md:h-96 object-cover" />
      </section>

      <div className="max-w-[1200px] mx-auto px-6 py-10">
        <section aria-labelledby="what-we-do" className="mb-10">
          <h2 id="what-we-do" className="text-3xl font-bold mb-4">Ce que nous faisons pour les entreprises</h2>
          <p className="text-lg text-primary-blue/80 leading-relaxed">Nous créons des vêtements d'entreprise premium, pensés pour être portés au quotidien et représentatifs de votre image. Chaque projet est traité comme une petite collection : choix des matières, prototypes, contrôles et production dans nos ateliers français.</p>

          <p className="mt-4 text-primary-blue/80">Que vous recherchiez un sweat corporel, une chemise technique, un polo ou un kit pour un événement, nous garantissons un produit durable, confortable et élégant. Nos propositions incluent le conseil sur la matière (coton bio, fibres recyclées, tissus techniques), la finition (broderie, sérigraphie, étiquette) et la logistique (packaging, conditionnement par taille).</p>
        </section>

        <EnterpriseSolutions />

        <section className="mb-10">
          <h2 className="text-3xl font-bold mb-4">Fabrication française maîtrisée</h2>
          <p className="text-primary-blue/80">Nous travaillons avec des ateliers en France : Vosges (tricotage & ennoblissement), Chessy-les-Mines (teinture) et Roubaix (confection & finitions). Cette proximité nous permet d'assurer une traçabilité complète, des délais maîtrisés et une qualité constante.</p>

          <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="p-4 border rounded-lg">
              <h3 className="font-semibold">Traçabilité & qualité</h3>
              <p className="mt-2 text-sm text-primary-blue/80">Chaque étape est documentée : provenance des matières, contrôle des nuances de teinture, tests de tenue et vérifications avant expédition.</p>
            </div>

            <div className="p-4 border rounded-lg">
              <h3 className="font-semibold">Séries adaptées</h3>
              <p className="mt-2 text-sm text-primary-blue/80">Nous réalisons des petites et moyennes séries, avec une organisation logistique pour gérer les tailles, kits et envois par point de distribution.</p>
            </div>
          </div>
        </section>

        <EnterpriseProcess />

        {/* Large visual gallery to illustrate ateliers, produits et séries */}
        <section className="mb-10 grid grid-cols-1 md:grid-cols-3 gap-6 items-stretch">
          <div className="md:col-span-2 rounded-lg overflow-hidden shadow-lg">
            <img src="./media/equipe-lgf-escalier.png" alt="Atelier et équipe" className="w-full h-80 object-cover" />
          </div>
          <div className="flex flex-col gap-6">
            <img src="./media/bonnets-famille-lgf.png" alt="Bonnet famille" className="w-full h-36 object-cover rounded-lg shadow" />
            <img src="./media/boutique-la-gentle-factory.png" alt="Boutique La Gentle Factory" className="w-full h-36 object-cover rounded-lg shadow" />
          </div>

        </section>

        <section className="mb-10">
          <h2 className="text-3xl font-bold mb-4">Pourquoi les entreprises choisissent notre savoir-faire</h2>
          <ul className="grid grid-cols-1 md:grid-cols-3 gap-6 text-primary-blue/80">
            <li className="p-4 border rounded-lg">Une image soignée, moderne et durable</li>
            <li className="p-4 border rounded-lg">Des pièces confortables, vraiment portées</li>
            <li className="p-4 border rounded-lg">Un accompagnement clair et accessible</li>
            <li className="p-4 border rounded-lg">Matières responsables triées avec intention</li>
            <li className="p-4 border rounded-lg">Production française et délais fiables</li>
            <li className="p-4 border rounded-lg">Services logistiques et packaging</li>
          </ul>
        </section>

        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-4">Exemples de réalisations</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <article className="p-4 border rounded-lg flex gap-4 items-start">
              <img src="./media/gt-logo.svg" alt="GT logistics" style={{ width: 80, height: 80, objectFit: 'contain' }} />
              <div>
                <h3 className="font-semibold">Sweat premium corporate — GT logistics</h3>
                <p className="mt-2 text-sm text-primary-blue/80">Objectif : moderniser l'image interne. Solution : semi-sur-mesure (coton bio, broderie ton sur ton, coupe droite). Livraison en 6 semaines. Résultat : 92% des collaborateurs le portent en dehors du travail.</p>
              </div>
            </article>

            <article className="p-4 border rounded-lg flex gap-4 items-start">
              <img src="./media/boutique-la-gentle-factory.png" alt="Boutique" style={{ width: 80, height: 80, objectFit: 'cover', borderRadius: 6 }} />
              <div>
                <h3 className="font-semibold">Série limitée pour boutique</h3>
                <p className="mt-2 text-sm text-primary-blue/80">Objectif : créer une pièce exclusive. Solution : prêt-à-personnaliser + finitions spécifiques. Résultat : série vendue en 12 jours.</p>
              </div>
            </article>
          </div>
        </section>

        <section id="contact" className="mb-12 p-6 border rounded-lg bg-[#f8fafb]">
          <h2 className="text-2xl font-bold mb-3">Vous avez un besoin textile pour vos équipes ?</h2>
          <p className="text-primary-blue/80">Parlez-nous de vos quantités, usages et délais. Nous revenons vers vous en 24 à 48h avec les options les plus pertinentes et une estimation initiale.</p>

          <div className="mt-4 flex gap-3">
            <Link to="/contact-devis" className="inline-block bg-cta-red text-white px-5 py-3 rounded">Demander un devis</Link>
            <a href="mailto:contact@lagentlefactory.pro" className="inline-block text-primary-blue/80 underline">Nous contacter</a>
          </div>
        </section>

        <div className="mt-8">
          <Link to="/" className="inline-block text-primary-blue/80 underline mr-4">Retour à l'accueil</Link>
          <a href="#contact" className="inline-block bg-cta-red text-white px-5 py-3 rounded-full">Demander un devis</a>
        </div>
      </div>
    </main>
  );
};

export default Entreprises;
