

import React from "react";
import PlainHero from "@/components/global/PlainHero";
import Section from "@/components/global/Section";
import { Link } from "react-router-dom";

const FabricationSavoirFaire: React.FC = () => (
  <main className="bg-white text-primary-blue min-h-screen">
    <PlainHero imgUrl={(import.meta.env.BASE_URL || '') + 'media/Confection_AMITIE PARTAGE_ROUBAIX.jpg'} title="Notre fabrication textile" />
    <div className="max-w-[1200px] mx-auto px-6 pt-24">
      <Section
        title="Créer en France, avec sérieux, précision et respect."
        description={<>
          La fabrication n'est pas une simple étape dans le développement d'un vêtement : c'est la garantie de sa qualité, de sa durabilité et de son intégrité.<br />
          Nous avons choisi de produire en France pour préserver un savoir-faire textile précieux, assurer une maîtrise totale des pièces et garantir la transparence que nous jugeons indispensable.<br />
          Chaque vêtement fabriqué dans nos ateliers est le résultat d'un travail exigeant, rigoureux et profondément humain.
        </>}
      />

      <Section
        title="Nos engagements de fabrication"
        description={<>
          <ol className="list-decimal pl-6 my-2">
            <li>Une production 100 % française<br />
              Nos ateliers sont situés dans trois régions reconnues pour leur expertise textile :<br />
              <ul className="list-disc pl-6">
                <li>Vosges : tricotage et ennoblissement</li>
                <li>Chessy-les-Mines : teinture, savoir-faire couleur</li>
                <li>Roubaix : confection, finitions, mise au point</li>
              </ul>
              Chaque site possède une spécialité historique qui se reflète dans la qualité de votre pièce.
            </li>
            <li>Une maîtrise totale<br />
              De la matière première au vêtement final, chaque étape est suivie, validée et tracée.<br />
              Vous savez où, comment et par qui votre pièce est fabriquée.
            </li>
            <li>Une qualité constante<br />
              Nous travaillons avec les mêmes ateliers que pour les collections Gentle Factory :<br />
              le même niveau d'exigence, la même attention aux détails, les mêmes standards.
            </li>
            <li>Une production responsable<br />
              Matières responsables, limitation des transports, durabilité pensée dès la conception :<br />
              notre fabrication s'inscrit dans une démarche cohérente, loin du textile jetable.
            </li>
          </ol>
        </>}
      />

      <Section
        title="Pourquoi produire en France ?"
        description={<>
          <ul className="list-disc pl-6 my-2">
            <li>Pour réduire l'impact environnemental</li>
            <li>Pour maintenir un tissu industriel essentiel</li>
            <li>Pour garantir une qualité irréprochable</li>
            <li>Pour gagner en réactivité</li>
            <li>Pour vous offrir une transparence totale</li>
          </ul>
          Créer local, c'est créer juste.<br />
          <div className="mt-4 flex flex-col md:flex-row gap-6 justify-start items-start md:items-center">
          </div>
        </>}
      />

      <section className="mb-12 mt-12 bg-cta-red p-6">
        <h2 className="text-2xl font-bold mb-4 text-white">Envie d'en savoir plus ou de demander un devis&nbsp;?</h2>
        <p className="mb-4 text-white">Découvrez nos ateliers, nos matières ou contactez-nous pour concrétiser votre projet textile responsable.</p>
        <div className="flex flex-col md:flex-row gap-6 justify-center items-center">
          <Link to="/fabrication/nos-ateliers" className="bg-white text-primary-blue font-bold px-8 py-4 text-lg uppercase">Découvrir nos ateliers</Link>
          <Link to="/fabrication/nos-matieres" className="bg-primary-blue text-white font-bold px-8 py-4 text-lg uppercase">En savoir plus sur nos matières</Link>
          <a href="#contact" className="bg-primary-blue text-white font-bold px-8 py-4 text-lg uppercase">Demander un devis</a>
        </div>
      </section>
    </div>
  </main>
);

export default FabricationSavoirFaire;
