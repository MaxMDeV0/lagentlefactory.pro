import React from "react";

import HeroSavoirFaire from "../components/savoirfaire/HeroSavoirFaire";
import IntroductionSavoirFaire from "../components/savoirfaire/IntroductionSavoirFaire";
import EngagementsFabricationSection from "../components/savoirfaire/EngagementsFabricationSection";
import CircuitFabricationSection from "../components/savoirfaire/CircuitFabricationSection";
import PourquoiFranceSection from "../components/savoirfaire/PourquoiFranceSection";
import TechnologiesSavoirFaireSection from "../components/savoirfaire/TechnologiesSavoirFaireSection";
import ChiffresFabricationSection from "../components/savoirfaire/ChiffresFabricationSection";
import ComparatifFranceImportSection from "../components/savoirfaire/ComparatifFranceImportSection";
import CertificationsQualiteSection from "../components/savoirfaire/CertificationsQualiteSection";
import CapacitesProductionSection from "../components/savoirfaire/CapacitesProductionSection";
import TemoignagesSavoirFaireSection from "../components/savoirfaire/TemoignagesSavoirFaireSection";
import VisiteVirtuelleSection from "../components/savoirfaire/VisiteVirtuelleSection";
import FooterSavoirFaireCTA from "../components/savoirfaire/FooterSavoirFaireCTA";

const FabricationSavoirFaire: React.FC = () => (
  <main className="w-full">
    <HeroSavoirFaire />
    <IntroductionSavoirFaire />
    <EngagementsFabricationSection />
    <CircuitFabricationSection />
    <PourquoiFranceSection />
    <TechnologiesSavoirFaireSection />
    <ChiffresFabricationSection />
    <ComparatifFranceImportSection />
    <CertificationsQualiteSection />
    <CapacitesProductionSection />
    <TemoignagesSavoirFaireSection />
    <VisiteVirtuelleSection />
    <FooterSavoirFaireCTA />
  </main>
);

export default FabricationSavoirFaire;
