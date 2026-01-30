import React from "react";

import ImageHero from "@/components/global/ImageHero";
import ColorHero from "@/components/global/ColorHero";
import SolutionsOfferCards from "@/components/solutions/SolutionsOfferCards";
import Breadcrumb from "@/components/global/Breadcrumb";
import Section from "@/components/global/Section";


import ContactSection from "@/components/global/ContactSection";



const Solutions: React.FC = () => (
  <main className="min-h-screen bg-white text-primary-blue pt-28">
    <ImageHero
      imageUrl={(import.meta.env.BASE_URL || '') + 'media/TRICOTAGE_ETS MALTERRE_MOREUIL_2.jpg'}
      title="NOTRE OFFRE"
      description="Créer vos vêtements en France, avec exigence, cohérence et sens. Vous avez un projet textile qui mérite de la précision, de la transparence et un vrai engagement. Nous avons l'expertise, les ateliers, les matières responsables et la maîtrise nécessaire pour transformer votre idée en un vêtement abouti - fabriqué en France, dans les règles de l'art. Ici, chaque pièce est pensée pour durer, chaque détail compte, et chaque choix est assumé. Parce que créer un vêtement n'est pas un geste anodin : c'est une intention."
    />
    <div className="max-w-[1200px] mx-auto px-6 py-12">
      <Breadcrumb />
      <ColorHero
        bgColor="bg-cta-red"
        title="Comment créons-nous votre vêtement ?"
        description={<>
          <ol className="list-decimal pl-6 my-2">
            <li><b>Prêt-à-personnaliser</b> : Nos modèles existants, personnalisés à votre identité visuelle. Une solution rapide, simple et fiable.</li>
            <li><b>Semi-sur-mesure</b> : Nous adaptons l'un de nos modèles selon vos besoins : matière, couleur, détails, finitions. Une grande liberté, toujours dans un cadre maîtrisé.</li>
            <li><b>Co-création complète</b> : Une création textile construite entièrement pour vous : style, patronage, sourcing, prototypage, ajustements et fabrication. Votre vision, accompagnée et concrétisée avec rigueur.</li>
          </ol>
        </>}
      />

      <Section
        title="Pour qui travaillons-nous ?"
        description={
          <ul className="list-disc pl-6 my-2">
            <li><b>Marques & créateurs</b> : Vous souhaitez lancer une collection ou développer une nouvelle pièce ? Nous vous accompagnons pas à pas : conception, matières, prototypes, production. Un cadre clair, un savoir-faire solide, une fabrication maîtrisée.</li>
            <li><b>Entreprises</b> : Vous voulez habiller vos équipes ou offrir un textile premium, cohérent avec votre image ? Nous créons des vêtements qualitatifs, modernes et responsables, pensés pour être portés au quotidien.</li>
            <li><b>Boutiques & concept-stores</b> : Pour une pièce exclusive, une série limitée ou un produit signature : nous développons un vêtement pensé pour votre clientèle et votre identité, avec une fabrication française irréprochable.</li>
            <li><b>Institutions & clubs</b> : Nous créons des vêtements qui valorisent votre identité et vos couleurs : durables, responsables et adaptés à un usage régulier, loin des textiles ordinaires.</li>
          </ul>
        }
      />


      <SolutionsOfferCards />


      <Section
        title="Notre fabrication"
        description={
          <>
            <p>Une production française, exigeante et transparente.<br />Nos ateliers sont situés en France : Vosges, Chessy-les-Mines, Roubaix.<br />Nous travaillons au plus près, pour garantir :</p>
            <ul className="list-disc pl-6 my-2">
              <li>des matières responsables (bio, recyclées, techniques)</li>
              <li>une production en petites et moyennes séries</li>
              <li>une maîtrise complète de chaque étape</li>
              <li>une traçabilité claire et assumée</li>
              <li>une qualité constante</li>
            </ul>
            <p>Fabrication locale, valeurs locales.</p>
          </>
        }
      />


      <Section
        title="Ce qui nous différencie"
        description={
          <ul className="list-disc pl-6 my-2 text-primary-blue">
            <li>Une expertise textile solide, portée par des convictions fortes.</li>
            <li>Une fabrication française réellement maîtrisée</li>
            <li>Un accompagnement clair, méthodique et humain</li>
            <li>Des matières responsables choisies avec exigence</li>
            <li>Un savoir-faire technique issu de plus de dix ans de développement textile</li>
            <li>Des vêtements conçus pour durer, pas pour suivre une tendance éphémère</li>
          </ul>
        }
      />

      <ContactSection />
    </div>
  </main>
);

export default Solutions;
