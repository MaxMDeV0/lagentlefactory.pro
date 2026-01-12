import React from "react";
import { Link } from "react-router-dom";
import SemiHero from "../components/SemiHero";
import SemiPourQui from "../components/SemiPourQui";
import SemiAdaptations from "../components/SemiAdaptations";
import SemiAvantages from "../components/SemiAvantages";
import SemiComparatif from "../components/SemiComparatif";
import SemiPourquoi from "../components/SemiPourquoi";

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
