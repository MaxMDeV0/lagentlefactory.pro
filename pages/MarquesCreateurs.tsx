import H2Mark from '../components/global/H2Mark';
import React from 'react';
import Hero from '@/components/global/ColorHero';
import Breadcrumb from '@/components/global/Breadcrumb';
import Cards from '../components/global/SolutionsCards';
import ContactSection from '@/components/global/ContactSection';
import Section from '@/components/global/Section';

const MarquesCreateurs: React.FC = () => {
  return (
    <main className="bg-white text-primary-blue min-h-screen mt-12">
      <div className="max-w-[1200px] mx-auto px-6 pt-24">
        <Breadcrumb />
        <h1 className="text-4xl md:text-5xl font-extrabold mb-6">Créer votre collection de vêtements</h1>
        <Hero
          bgColor="bg-[#293279]"
          title="Ce que nous faisons pour les créateurs"
          description={
            <>
              Nous accompagnons les marques et créateurs à chaque étape : étude de faisabilité, choix des matières,
              prototypage, industrialisation et production. Notre objectif : transformer votre idée en une pièce
              parfaitement fabriquée en France, respectueuse de votre identité et de vos contraintes de volumes.
            </>
          }
        />

        <Section
          title='Donner forme à votre vision. Avec un partenaire qui maîtrise la création textile
de A à Z.'
          description={<><div className="mb-4">Créer un vêtement, ce n’est pas simplement produire un modèle : c’est faire exister une idée,
            traduire un univers, affirmer une identité.
            Si vous lancez votre marque, ou développez une nouvelle collection, vous avez besoin d’un
            accompagnement clair, fiable, et d’une fabrication à la hauteur de vos ambitions.</div><div>C’est exactement ce que nous proposons : une expertise textile solide, un savoir-faire français,
              et un cadre méthodique qui vous permet d’avancer avec confiance.</div></>}

        />

        <Cards title='Trois façons de créer votre pièce' />

        <section className="mb-12">
          <H2Mark>Une fabrication française maîtrisée</H2Mark>
          <p className="text-primary-blue/80 mb-6">
            Nos ateliers partenaires sont basés en France et respectent des standards élevés de qualité et de
            conformité sociale. Nous privilégions des matières locales et responsables (coton bio, fibres recyclées,
            filaments techniques) afin de limiter l'empreinte carbone et assurer une traçabilité complète.
          </p>

          <div className="grid grid-cols-1 lg:grid-cols-[50%_50%] gap-6 w-full max-w-[1128px] ">


            {/* Rouge */}
            <div className=" w-full h-full aspect-square   " >
              <img src={(import.meta.env.BASE_URL || '') + 'media/Confection_AMITIE PARTAGE_ROUBAIX.jpg'} alt="Atelier de confection" className="object-cover w-full h-full" />
            </div>

            {/* Colonne droite */}
            <div className="grid grid-cols-1 md:grid-cols-[50%_50%] gap-6 w-full ">


              {/* Bleu + Vert */}
              <div className="flex flex-col gap-6">
                <div className="bg-blue-100 w-full h-[50%]  aspect-square" >
                  <img src={(import.meta.env.BASE_URL || '') + 'media/TEINTURE_MAT_CHESSY.jpg'} alt="Teinture" className="object-cover w-full h-full" />
                </div>
                <div className="bg-green-100 w-full h-[50%]  aspect-square ">
                  <img src={(import.meta.env.BASE_URL || '') + 'media/laine-mouton.jpg'} alt="Laine mouton" className="object-cover w-full h-full" />
                </div>
              </div>


              {/* Jaune */}
              <div className="bg-yellow-100 w-[calc(100%-24px)] h-[100%]  ">
                <img src={(import.meta.env.BASE_URL || '') + 'media/patron-atelier.jpg'} alt="Patron atelier" className="object-cover w-full h-full" />
              </div>

            </div>
          </div>

          <div>

          </div>
        </section>

        <section className="mb-12 bg-cta-red p-6">
          <h2 className="text-2xl font-bold mb-4 text-white">Pourquoi nous choisir ?</h2>
          <ul className="grid grid-cols-1 md:grid-cols-3 gap-6 text-primary-blue/80">
            <li className="p-4 border rounded-lg text-white">Savoir-faire français : des ateliers sélectionnés pour leur qualité.</li>
            <li className="p-4 border rounded-lg text-white">Accompagnement complet du design à la livraison.</li>
            <li className="p-4 border rounded-lg text-white" >Transparence sur les coûts, délais et matériaux.</li>
          </ul>
        </section>

        <ContactSection />
      </div>
    </main>
  );
};

export default MarquesCreateurs;
