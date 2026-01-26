import React from "react";
import { Link } from "react-router-dom";
import SemiHero from "../components/semisurmesure/SemiHero";
import SemiPourQui from "../components/semisurmesure/SemiPourQui";
import SemiAdaptations from "../components/semisurmesure/SemiAdaptations";
import SemiAvantages from "../components/semisurmesure/SemiAvantages";
import SemiComparatif from "../components/semisurmesure/SemiComparatif";
import SemiPourquoi from "../components/semisurmesure/SemiPourquoi";

const SemiSurMesure: React.FC = () => (
  <main className="bg-white text-primary-blue pt-28">
    <SemiHero />
    <SemiPourQui />
    <SemiAdaptations />
    <SemiAvantages />
    <SemiComparatif />
    <SemiPourquoi />
  </main>
);

export default SemiSurMesure;
