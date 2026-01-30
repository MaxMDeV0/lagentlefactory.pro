

import React from "react";
import Breadcrumb from "@/components/global/Breadcrumb";
import ColorHero from "@/components/global/ColorHero";
import Section from "@/components/global/Section";
import PlainHero from "@/components/global/PlainHero";
import { Link } from "react-router-dom";


const NosAteliers: React.FC = () => (
  <main className="bg-white text-primary-blue min-h-screen ">
    <PlainHero imgUrl="../media/decoupe-tissu.jpg" title="Chaque atelier a une histoire. Votre pièce en bénéficiera." />
    <div className="max-w-[1200px] mx-auto px-6 pt-24">
      <Breadcrumb />
      <ColorHero
        bgColor="bg-primary-blue"
        title="Nos ateliers partenaires en France"
        description={<>
          Nous avons choisi des partenaires français pour leur expertise, leur rigueur et leur respect des métiers textiles.<br />
          Créer avec eux, c'est préserver un savoir-faire et garantir un niveau de qualité élevé.
        </>}
      />


      {/* Vosges - Tricotage & ennoblissement */}
      <section className="my-12">
        <div className="flex flex-col md:flex-row gap-8 items-center">
          <div className="w-full md:w-1/2">
            <Section
              title="Vosges - Tricotage & ennoblissement"
              description={<>
                <div className="mb-4">
                  Région textile historique, les Vosges abritent des ateliers spécialisés dans&nbsp;:
                  <ul className="list-disc pl-6 my-2">
                    <li>le tricotage de mailles</li>
                    <li>le lavage</li>
                    <li>l'ennoblissement</li>
                    <li>le contrôle qualité intermédiaire</li>
                  </ul>
                  Résultat&nbsp;: un rendu impeccable, une tenue dans le temps, et un toucher incomparable.
                </div>
              </>}
            />
          </div>

          <div className="w-full md:w-1/2 flex-shrink-0">
            <picture>
              <source srcSet={(import.meta.env.BASE_URL || '') + 'media/TRICOTAGE_ETS MALTERRE_MOREUIL_MB.jpg'} media="(max-width: 767px)" />
              <img src={(import.meta.env.BASE_URL || '') + 'media/TRICOTAGE_ETS MALTERRE_MOREUIL_2.jpg'} alt="Atelier tricotage Vosges" className="w-full h-auto object-cover" />
            </picture>
          </div>
        </div>
      </section>


      {/* Chessy-les-Mines - Teinture & transformation matière */}
      <section className="my-12">
        <div className="flex flex-col md:flex-row-reverse gap-8 items-center">
          <div className="w-full md:w-1/2">
            <Section
              title="Chessy-les-Mines - Teinture & transformation matière"
              description={<>
                <div className="mb-4">
                  Là où la couleur prend vie.<br />
                  Nos partenaires maîtrisent&nbsp;:
                  <ul className="list-disc pl-6 my-2">
                    <li>les bains de teinture</li>
                    <li>la stabilisation</li>
                    <li>les contrôles de nuance</li>
                    <li>les finitions techniques</li>
                  </ul>
                  Une précision essentielle pour garantir un rendu fiable et durable.
                </div>
              </>}
            />
          </div>

          <div className="w-full md:w-1/2 flex-shrink-0">
            <picture>
              <source srcSet={(import.meta.env.BASE_URL || '') + 'media/TEINTURE_MAT_CHESSY.jpg'} media="(max-width: 767px)" />
              <img src={(import.meta.env.BASE_URL || '') + 'media/TEINTURE_MAT_CHESSY.jpg'} alt="Atelier teinture Chessy-les-Mines" className="w-full h-auto object-cover" />
            </picture>
          </div>
        </div>
      </section>


      {/* Roubaix - Conception & confection */}
      <section className="my-12">
        <div className="flex flex-col md:flex-row gap-8 items-center">
          <div className="w-full md:w-1/2">
            <Section
              title="Roubaix - Conception & confection"
              description={<>
                <div className="mb-4">
                  Notre cœur textile.<br />
                  C'est ici que vos pièces prennent forme&nbsp;: coupe, assemblage, finitions, étiquettes...<br />
                  C'est également ici que nous validons les prototypes et que nous assurons la cohérence globale.
                </div>
              </>}
            />
          </div>

          <div className="w-full md:w-1/2 flex-shrink-0">
            <picture>
              <source srcSet={(import.meta.env.BASE_URL || '') + 'media/Confection_AMITIE PARTAGE_ROUBAIX.jpg'} media="(max-width: 767px)" />
              <img src={(import.meta.env.BASE_URL || '') + 'media/Confection_AFS_EPAGNY_2.jpg'} alt="Atelier confection Roubaix" className="w-full h-auto object-cover" />
            </picture>
          </div>
        </div>
      </section>

      <section className="mb-12 bg-cta-red p-6">
        <h2 className="text-2xl font-bold mb-4 text-white">Pourquoi ces ateliers&nbsp;?</h2>
        <p className="mb-4 text-white">Parce qu'ils partagent les mêmes valeurs&nbsp;: sérieux, précision, respect du geste, responsabilité.</p>
        <div className="flex flex-col md:flex-row gap-6 justify-center items-center">
          <Link to="/fabrication" className="inline-block bg-white text-primary-blue font-bold px-8 py-4 text-lg uppercase">Découvrir notre fabrication globale</Link>
          <a href="#contact" className="inline-block bg-primary-blue text-white font-bold px-8 py-4 text-lg uppercase">Demander un devis</a>
        </div>
      </section>
    </div>
  </main>
);

export default NosAteliers;
