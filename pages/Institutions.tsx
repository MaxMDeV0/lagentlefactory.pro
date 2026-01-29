import H2Mark from '../components/global/H2Mark';
import React from 'react';
import { Link } from 'react-router-dom';
import AccentSectionA from '../components/institutions/AccentSectionA';
import AccentSectionB from '../components/institutions/AccentSectionB';
import Breadcrumb from '../components/global/Breadcrumb';
import Hero from '@/components/global/ColorHero';

const Institutions: React.FC = () => {
  return (
    <main className="bg-white text-primary-blue min-h-screen  pt-28">
      {/* Large visual banner similar but distinct from BlueSection */}
      <section
        className="relative bg-cover bg-center min-h-[320px] flex items-center"
        style={{ backgroundImage: "url('media/banner.png')" }}
        aria-label="Bannière institutions"
      >
        <div className="absolute inset-0 bg-black/40" aria-hidden="true"></div>
        <div className="relative z-10 max-w-[1100px] mx-auto px-6 py-20 text-white">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-extrabold leading-tight">
            Textile durable pour institutions & clubs
          </h1>
          <p className="mt-4 text-lg md:text-xl text-white/90 max-w-2xl">
            Des tenues pensées pour durer — entraînement, compétition, cérémonies ou événements — conçues
            pour représenter vos couleurs avec sérieux et responsabilité.
          </p>
          <div className="mt-6">
            <a href="#contact" className="inline-block bg-white text-primary-blue px-6 py-3 rounded-full font-bold">Demander un devis</a>
          </div>
        </div>
      </section>

      <div className="max-w-[1200px] mx-auto px-6 py-16">
        <Breadcrumb />
        <Hero
          bgColor="bg-[#293279]"
          title=""
          description={
            <>
              <div className="md:flex md:flex-row gap-4">
                <div>
                  <h2 className="font-extrabold text-2xl md:text-3xl mb-4">Ce que nous créons pour les institutions</h2>
                  <p className="text-[16px] text-white leading-relaxed mb-4">
                    Nous réalisons des collections et des équipements pensés pour l'usage intensif : tenues d'entraînement,
                    tenues officielles, vestiaires et gammes événementielles. Chaque projet est traité comme une production
                    responsable, avec des choix matériaux et techniques adaptés aux contraintes d'un usage régulier.
                  </p>

                </div>
                <p className="text-[16px] text-white leading-relaxed">
                  Notre approche combine conseil, prototypage et production locale : clarification du cahier des charges,
                  sélection de matières (bio, recyclées, techniques), développement du patronage, tests et ajustements,
                  puis fabrication en petites ou moyennes séries pour garantir la qualité et la traçabilité.
                </p>

              </div>
            </>
          }
        />



        <section className="mb-12 grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
          <div>
            <H2Mark>Solutions adaptées</H2Mark>
            <p className="text-primary-blue/80 mb-4">
              Selon vos besoins, nous proposons plusieurs formats :
            </p>
            <ul className="list-disc pl-6 text-primary-blue/80 space-y-2 mb-4">
              <li>Prêt-à-personnaliser — modèles robustes, personnalisations rapides pour événements et clubs.</li>
              <li>Semi-sur-mesure — ajustements de coupe, choix matière et finition pour plus de confort et d'identité.</li>
              <li>Co-création complète — création d'une ligne dédiée à votre institution, pensée pour durer.</li>
            </ul>
            <p className="text-primary-blue/80">
              Pour les institutions, nous privilégions des solutions qui limitent l'obsolescence : choix de fibres résistantes,
              renforts stratégiques et finitions adaptées à un usage intensif.
            </p>
          </div>

          <div className="rounded-xl overflow-hidden border">
            <img src="./media/homme-mariniere-lgf.png" alt="Exemple tenue institution" className="w-full object-cover h-64" />
            <div className="p-6">
              <h4 className="font-bold mb-2">Exemple : tenue de club</h4>
              <p className="text-primary-blue/80">Un kit complet comprenant training, t-shirt d'équipe et sweat, fabriqué pour résister et être réédité chaque saison.</p>
            </div>
          </div>
        </section>

        {/* New colored accent section A */}
        <div className="mb-12">
          <AccentSectionA />
        </div>

        <section className="mb-12">
          <H2Mark>Fabrication & savoir-faire</H2Mark>
          <p className="text-primary-blue/80 leading-relaxed mb-3">
            Nous fabriquons en France, dans des ateliers sélectionnés pour leur expertise : tricotage, teinture et confection
            répartis sur plusieurs régions (Vosges, Chessy-les-Mines, Roubaix). Cette proximité nous permet de maîtriser
            la qualité et de réduire les délais de production.
          </p>
          <p className="text-primary-blue/80 leading-relaxed">
            Les matières sont choisies avec soin — coton bio, fibres recyclées ou tissus techniques — en fonction de l'usage
            et des exigences d'entretien. La traçabilité et le respect des standards environnementaux sont intégrés à chaque étape.
          </p>
        </section>

        <section className="mb-12">
          <H2Mark>Processus en 4 étapes</H2Mark>
          <ol className="list-decimal pl-6 text-primary-blue/80 space-y-3">
            <li>Premier échange et cadrage du projet (objectifs, volumes, budget).</li>
            <li>Proposition de solution (prêt-à-personnaliser / semi-sur-mesure / co-création) et devis estimatif.</li>
            <li>Prototypage et validation (échantillons, ajustements techniques).</li>
            <li>Production et livraison avec suivi qualité et logistique adaptée aux institutions.</li>
          </ol>
        </section>

        <section className="mb-12">
          <H2Mark>Exemples & réalisations</H2Mark>
          <p className="text-primary-blue/80 leading-relaxed mb-4">
            Nous avons accompagné des clubs et institutions dans la création de lignes pérennes : hoodies résistants,
            t-shirts de performance, gammes cérémonielles et vestiaires techniques. Nos collaborations favorisent la
            répétabilité des séries et la cohérence visuelle entre saisons.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="border rounded-lg overflow-hidden">
              <img src="./media/bonnets-famille-lgf.png" alt="Hoodie club" className="w-full h-40 object-cover" />
              <div className="p-4 text-primary-blue/80">Capsule performante pour club local — série limitée.</div>
            </div>
            <div className="border rounded-lg overflow-hidden">
              <img src="./media/boutique-la-gentle-factory.png" alt="Collection boutique" className="w-full h-40 object-cover" />
              <div className="p-4 text-primary-blue/80">Collection exclusive pour concept-store partenaire.</div>
            </div>
            <div className="border rounded-lg overflow-hidden">
              <img src="./media/ffe-logo.svg" alt="Projet fédération" className="w-full h-40 object-contain bg-white p-6" />
              <div className="p-4 text-primary-blue/80">Étude de cas : uniformes techniques pour une fédération.</div>
            </div>
          </div>
        </section>

        <section className="mb-12">
          <H2Mark>Durabilité & engagements</H2Mark>
          <p className="text-primary-blue/80 leading-relaxed mb-3">
            Au-delà du design et de la performance, nous veillons à réduire l'impact environnemental : sélection
            de fibres responsables, optimisation des coupes pour limiter les chutes, et priorisation de fournisseurs
            respectueux des normes sociales.
          </p>
          <p className="text-primary-blue/80 leading-relaxed">
            Pour les institutions, cela signifie des produits plus durables, des cycles de vie prolongés et une image
            alignée sur des valeurs de responsabilité.
          </p>
        </section>

        {/* Light accent section with logistical content */}
        <div className="mb-12">
          <AccentSectionB />
        </div>

        <div className="mt-8 flex flex-col md:flex-row items-center gap-4">
          <Link to="/" className="inline-block text-primary-blue/80 underline">Retour à l'accueil</Link>
          <a href="/#devis" className="inline-block bg-[#96101C] text-white px-6 py-3 rounded-full">Demander un devis</a>
        </div>
      </div>
    </main>
  );
};

export default Institutions;
