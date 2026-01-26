import React from "react";
import HeroSolutions from "../components/pretapersonnaliser/solutions/HeroSolutions";
import VueEnsembleSolutionsSection from "../components/pretapersonnaliser/solutions/VueEnsembleSolutionsSection";
import OutilSelectionSolutionsSection from "../components/pretapersonnaliser/solutions/OutilSelectionSolutionsSection";
import TableauComparatifSolutionsSection from "../components/pretapersonnaliser/solutions/TableauComparatifSolutionsSection";
import PretAPersonnaliserDetailSection from "../components/pretapersonnaliser/solutions/PretAPersonnaliserDetailSection";
import SemiSurMesureDetailSection from "../components/pretapersonnaliser/solutions/SemiSurMesureDetailSection";
import SurMesureDetailSection from "../components/pretapersonnaliser/solutions/SurMesureDetailSection";
import MateriauxEtSavoirFaireSection from "../components/pretapersonnaliser/solutions/MateriauxEtSavoirFaireSection";
import BudgetEtDelaisSection from "../components/pretapersonnaliser/solutions/BudgetEtDelaisSection";
import UseCasesSection from "../components/pretapersonnaliser/solutions/UseCasesSection";
import TimelineProcessSection from "../components/pretapersonnaliser/solutions/TimelineProcessSection";
import FAQSection from "../components/pretapersonnaliser/solutions/FAQSection";
import TestimonialsSection from "../components/pretapersonnaliser/solutions/TestimonialsSection";
import FooterCtaSection from "../components/pretapersonnaliser/solutions/FooterCtaSection";


const Solutions: React.FC = () => (
  <main className="w-full">
    <HeroSolutions />
    <VueEnsembleSolutionsSection />
    <OutilSelectionSolutionsSection />
    <TableauComparatifSolutionsSection />
    <PretAPersonnaliserDetailSection />
    <SemiSurMesureDetailSection />
    <SurMesureDetailSection />
    <MateriauxEtSavoirFaireSection />
    <BudgetEtDelaisSection />
    <UseCasesSection />
    <TimelineProcessSection />
    <FAQSection />
    <TestimonialsSection />
    <FooterCtaSection />
  </main>
);

export default Solutions;
