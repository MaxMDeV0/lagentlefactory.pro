import H2Mark from '../components/global/H2Mark';

import React from 'react';
import Section from '@/components/global/Section';
import Breadcrumb from '@/components/global/Breadcrumb';
import Hero from '@/components/global/ColorHero';
import Cards from '../components/global/SolutionsCards';
import ContactSection from '@/components/global/ContactSection';
import { Link } from 'react-router-dom';
const Boutiques: React.FC = () => {
  return (
    <main className="bg-white text-primary-blue min-h-screen mt-12">
      <div className="max-w-[1200px] mx-auto px-6 pt-24">
        <Breadcrumb />
        <h1 className="text-4xl md:text-5xl font-extrabold mb-6">Pièces exclusives pour boutiques</h1>


        <Hero
          bgColor="bg-[#293279]"
          title="Ce que nous créons pour les boutiques"
          description={
            <>
              <div className="mb-4">
                Nous accompagnons les boutiques, concept-stores et sélections pointues dans la création de pièces exclusives, drops en série limitée et modèles signature. Chaque création est pensée pour enrichir votre offre, renforcer votre identité et séduire votre clientèle.
              </div>
              <div className="mb-4">
                Que vous souhaitiez proposer un produit différenciant, étoffer votre sélection ou imaginer un modèle signature, nous adaptons chaque projet à votre positionnement, votre style et vos attentes. Notre savoir-faire français garantit une qualité irréprochable, une production locale et un accompagnement sur-mesure.
              </div>
              <ul className="list-disc list-inside space-y-1">
                <li>Pièces exclusives adaptées à votre univers</li>
                <li>Drops en série limitée pour créer l’événement</li>
                <li>Modèles signature pour concept-stores</li>
                <li>Produits différenciants pour étoffer votre sélection</li>
              </ul>
            </>
          }
        />

        <Section
          title="Créer une pièce exclusive pour votre boutique, avec une fabrication française irréprochable."
          description={
            <>
              <div className="mb-4">Une boutique, c’est une ligne éditoriale. Une atmosphère. Une sélection qui dit quelque chose de vous.</div>
              <div className="mb-4">Alors quand vous décidez de créer votre propre pièce — un sweat signature, une série limitée, un modèle exclusif — elle doit être parfaitement alignée avec votre univers.</div>
              <div>Nous concevons pour vous un vêtement qui incarne votre identité, fabriqué en France avec sérieux et précision.</div>
            </>
          }
        />
        <Cards title="Trois solutions pour développer votre pièce" />
        <section className="mb-12">
          <H2Mark>Fabriqué en France, pour conserver votre exigence</H2Mark>
          <div className="mb-4 text-primary-blue/80">Vos pièces sont confectionnées dans nos ateliers français : Vosges, Normandie, Hauts-de-France.</div>
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6 mt-6">
            <div className="p-4 border rounded-lg flex flex-col items-center text-center bg-white">
              <h3 className="font-semibold mb-2">Séries limitées parfaitement gérées</h3>
              <p className="text-sm text-primary-blue/80">Nous maîtrisons la production de petites séries pour garantir exclusivité et réactivité, adaptées à vos besoins.</p>
            </div>
            <div className="p-4 border rounded-lg flex flex-col items-center text-center bg-white">
              <h3 className="font-semibold mb-2">Matières responsables sélectionnées avec exigence</h3>
              <p className="text-sm text-primary-blue/80">Nous choisissons des matières certifiées, biologiques ou recyclées, pour une démarche responsable et qualitative.</p>
            </div>
            <div className="p-4 border rounded-lg flex flex-col items-center text-center bg-white">
              <h3 className="font-semibold mb-2">Qualité constante</h3>
              <p className="text-sm text-primary-blue/80">Chaque pièce est contrôlée à chaque étape pour garantir une qualité irréprochable et une finition haut de gamme.</p>
            </div>
            <div className="p-4 border rounded-lg flex flex-col items-center text-center bg-white">
              <h3 className="font-semibold mb-2">Une fabrication locale qui fait sens</h3>
              <p className="text-sm text-primary-blue/80">La production française valorise votre sélection et répond aux attentes d’une clientèle exigeante et engagée.</p>
            </div>
            <div className="p-4 border rounded-lg flex flex-col items-center text-center bg-white">
              <h3 className="font-semibold mb-2">Une relation directe et professionnelle</h3>
              <p className="text-sm text-primary-blue/80">Un interlocuteur dédié vous accompagne pour un suivi personnalisé et une collaboration efficace.</p>
            </div>
          </div>
          <div className="mt-6 text-primary-blue font-semibold text-center">Une pièce exclusive est belle quand elle est bien faite.<br />Ici, elle l’est.</div>
        </section>

        <div className="grid grid-cols-1 lg:grid-cols-[50%_50%] gap-6 w-full max-w-[1128px] ">

          {/* Rouge */}
          <div className=" w-full h-full aspect-square   " >
            <img src="./media/1.jpg" alt="Rouge" className="object-cover w-full h-full" />
          </div>

          {/* Colonne droite */}
          <div className="grid grid-cols-1 md:grid-cols-[50%_50%] gap-6 w-full ">

            {/* Bleu + Vert */}
            <div className="flex flex-col gap-6">
              <div className="bg-blue-100 w-full h-[50%]  aspect-square" >              <img src="./media/2.jpg" alt="Rouge" className="object-cover w-full h-full" />
              </div>
              <div className="bg-green-100 w-full h-[50%]  aspect-square " ><img src="./media/3.jpg" alt="Rouge" className="object-cover w-full h-full" /></div>
            </div>

            {/* Jaune */}
            <div className="bg-yellow-100 w-[calc(100%-24px)] h-[100%]  " ><img src="./media/4.jpg" alt="Rouge" className="object-cover w-full h-full" /></div>

          </div>
        </div>

        <section className="my-12 bg-[#96101C] text-white  p-6">
          <h2 className="text-2xl font-bold mb-6 text-white">Pourquoi les concept-stores collaborent avec nous&nbsp;?</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
            <div className="p-4 border border-white/30 rounded-lg flex flex-col items-center text-center bg-white/10">
              <h3 className="font-semibold mb-2">Un vêtement fabriqué localement</h3>
              <p className="text-sm opacity-90">Un produit français qui rassure et séduit votre clientèle, en valorisant l’origine et la proximité.</p>
            </div>
            <div className="p-4 border border-white/30 rounded-lg flex flex-col items-center text-center bg-white/10">
              <h3 className="font-semibold mb-2">Des séries limitées réellement exclusives</h3>
              <p className="text-sm opacity-90">Nous garantissons l’exclusivité de vos pièces, pour une offre unique et différenciante en boutique.</p>
            </div>
            <div className="p-4 border border-white/30 rounded-lg flex flex-col items-center text-center bg-white/10">
              <h3 className="font-semibold mb-2">Un rendu haut de gamme</h3>
              <p className="text-sm opacity-90">Des finitions soignées et des matières premium, pour une cohérence parfaite avec votre sélection.</p>
            </div>
            <div className="p-4 border border-white/30 rounded-lg flex flex-col items-center text-center bg-white/10">
              <h3 className="font-semibold mb-2">Un accompagnement sérieux et structuré</h3>
              <p className="text-sm opacity-90">Un suivi personnalisé, à l’écoute de vos besoins, pour un projet mené avec rigueur et clarté.</p>
            </div>
            <div className="p-4 border border-white/30 rounded-lg flex flex-col items-center text-center bg-white/10">
              <h3 className="font-semibold mb-2">Une approche responsable</h3>
              <p className="text-sm opacity-90">Des matières choisies avec exigence et une fabrication engagée, pour une démarche authentiquement responsable.</p>
            </div>
          </div>
        </section>


        <ContactSection />

      </div>
    </main>
  );
};

export default Boutiques;
