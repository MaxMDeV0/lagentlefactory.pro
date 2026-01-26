import React from "react";

import HeroFaireFabriquerFrance from "../components/fairefabriquer/HeroFaireFabriquerFrance";
import PourquoiFabriquerFranceSection from "../components/fairefabriquer/PourquoiFabriquerFranceSection";
import PourQuiSection from "../components/fairefabriquer/PourQuiSection";
import TroisSolutionsSection from "../components/fairefabriquer/TroisSolutionsSection";
import CommentCaMarcheSection from "../components/fairefabriquer/CommentCaMarcheSection";
import NotreFabricationSection from "../components/fairefabriquer/NotreFabricationSection";
import MatieresResponsablesSection from "../components/fairefabriquer/MatieresResponsablesSection";
import ExemplesRealisationsSection from "../components/fairefabriquer/ExemplesRealisationsSection";
import DelaisQuantitesSection from "../components/fairefabriquer/DelaisQuantitesSection";
import BudgetTarifsSection from "../components/fairefabriquer/BudgetTarifsSection";
import FAQFaireFabriquerSection from "../components/fairefabriquer/FAQFaireFabriquerSection";
import TemoignagesClientsSection from "../components/fairefabriquer/TemoignagesClientsSection";
import ComparatifFranceImportSection from "../components/fairefabriquer/ComparatifFranceImportSection";
import FooterFaireFabriquerCTA from "../components/fairefabriquer/FooterFaireFabriquerCTA";

const FaireFabriquerFrance: React.FC = () => (
  <main className="w-full">
    <HeroFaireFabriquerFrance />
    <PourquoiFabriquerFranceSection />
    <PourQuiSection />
    <TroisSolutionsSection />
    <CommentCaMarcheSection />
    <NotreFabricationSection />
    <MatieresResponsablesSection />
    <ExemplesRealisationsSection />
    <DelaisQuantitesSection />
    <BudgetTarifsSection />
    <FAQFaireFabriquerSection />
    <TemoignagesClientsSection />
    <ComparatifFranceImportSection />
    <FooterFaireFabriquerCTA />
  </main>
);

export default FaireFabriquerFrance;
