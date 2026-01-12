import React from "react";
import HeroEngagements from "../components/engagements/HeroEngagements";
import VueEnsembleEngagements from "../components/engagements/VueEnsembleEngagements";
import ResponsabiliteSection from "../components/engagements/ResponsabiliteSection";
import DurabiliteSection from "../components/engagements/DurabiliteSection";
import FabricationLocaleSection from "../components/engagements/FabricationLocaleSection";
import TransparenceSection from "../components/engagements/TransparenceSection";
import AccompagnementHumainSection from "../components/engagements/AccompagnementHumainSection";
import CertificationsLabelsSection from "../components/engagements/CertificationsLabelsSection";
import ImpactMesureSection from "../components/engagements/ImpactMesureSection";
import AuDelaTextileSection from "../components/engagements/AuDelaTextileSection";
import AmeliorationContinueSection from "../components/engagements/AmeliorationContinueSection";
import TemoignagesClientsSection from "../components/engagements/TemoignagesClientsSection";
import FooterEngagementsCTA from "../components/engagements/FooterEngagementsCTA";

const NosEngagements: React.FC = () => (
  <main className="w-full">
    <HeroEngagements />
    <VueEnsembleEngagements />
    <ResponsabiliteSection />
    <DurabiliteSection />
    <FabricationLocaleSection />
    <TransparenceSection />
    <AccompagnementHumainSection />
    <CertificationsLabelsSection />
    <ImpactMesureSection />
    <AuDelaTextileSection />
    <AmeliorationContinueSection />
    <TemoignagesClientsSection />
    <FooterEngagementsCTA />
  </main>
);

export default NosEngagements;
