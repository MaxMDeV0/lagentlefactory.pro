import React from "react";
import { Link } from "react-router-dom";
import SemiHero from "../components/semisurmesure/SemiHero";
import SemiPourQui from "../components/semisurmesure/SemiPourQui";
import SemiAdaptations from "../components/semisurmesure/SemiAdaptations";
import SemiAvantages from "../components/semisurmesure/SemiAvantages";
import SemiComparatif from "../components/semisurmesure/SemiComparatif";
import SemiPourquoi from "../components/semisurmesure/SemiPourquoi";
import Hero from '../components/global/ImageHero';
import ColorHero from "@/components/global/ColorHero";
import Breadcrumb from "@/components/global/Breadcrumb";
import PourQui from "@/components/global/Pourqui";

const SemiSurMesure: React.FC = () => (
  <main className="bg-white text-primary-blue pt-28">
    <Hero
      imageUrl="media/semi-sur-mesure/banner-semi-sur-mesure.jpg"
      title="Solution semi-sur-mesure"
      description="Alliez personnalisation avancée et rapidité de production avec notre solution semi-sur-mesure : adaptez des modèles éprouvés à votre identité visuelle tout en bénéficiant d'une fabrication locale et responsable."
    />
    <div className="max-w-[1200px] mx-auto px-6 py-12">
      <Breadcrumb />
      <ColorHero
        bgColor="bg-cta-red"
        title="Personnalisation avancée. Production rapide."
        description={<>
          <p className="mb-4">Avec notre solution semi-sur-mesure, vous bénéficiez d'une personnalisation poussée tout en conservant une rapidité de production optimale.</p>
          <p>
            Vous choisissez l’un de nos modèles.
            Nous y intégrons votre identité visuelle.
            Le résultat : une pièce élégante, durable, parfaitement alignée avec votre image.
          </p>
        </>}
      />
      <PourQui />
      <SemiAdaptations />
      <SemiAvantages />
      <SemiPourquoi />

    </div>
  </main>
);

export default SemiSurMesure;
