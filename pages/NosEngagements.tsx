

import React from "react";
import PlainHero from "@/components/global/PlainHero";
import Section from "@/components/global/Section";
import { Link } from "react-router-dom";

const NosEngagements: React.FC = () => (
  <main className="bg-white text-primary-blue min-h-screen">
    <PlainHero imgUrl={(import.meta.env.BASE_URL || '') + 'media/equipe-lgf-escalier.png'} title="Nos engagements responsables" />
    <div className="max-w-[1200px] mx-auto px-6 pt-24">
      <Section
        title="Créer mieux, durablement et en transparence."
        description={<>
          Nos engagements ne sont pas des slogans : ce sont des choix stratégiques, assumés depuis plus de dix ans.
        </>}
      />

      <Section
        title="Responsabilité"
        description={<>
          Chaque décision - matière, atelier, finition - est prise avec l'impact en tête.
        </>}
      />

      <Section
        title="Durabilité"
        description={<>
          Nos pièces ne sont pas faites pour quelques usages : elles sont pensées pour durer.
        </>}
      />

      <Section
        title="Fabrication locale"
        description={<>
          Travailler en France, c'est soutenir l'industrie textile et garantir une qualité cohérente.
        </>}
      />

      <Section
        title="Transparence"
        description={<>
          Nous savons où, comment et par qui chaque pièce est fabriquée.<br />
          Et vous le saurez aussi.
        </>}
      />

      <Section
        title="Accompagnement humain"
        description={<>
          Comprendre vos besoins, vous guider, structurer votre projet :<br />
          nous avançons avec vous, pas à votre place.
        </>}
      />

      <section className="mb-12 mt-12 bg-cta-red p-6">
        <h2 className="text-2xl font-bold mb-4 text-white">Envie d'en savoir plus ou de demander un devis&nbsp;?</h2>
        <p className="mb-4 text-white">Contactez-nous pour concrétiser votre projet textile responsable.</p>
        <div className="flex flex-col md:flex-row gap-6 justify-center items-center">
          <a href="#contact" className="bg-primary-blue text-white font-bold px-8 py-4 text-lg uppercase">Demander un devis</a>
        </div>
      </section>
    </div>
  </main>
);

export default NosEngagements;
