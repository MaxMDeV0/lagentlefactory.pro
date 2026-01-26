import React from "react";
import { Link } from "react-router-dom";

const pourQui = ["Marques établies avec identité forte", "Entreprises exigeantes", "Boutiques premium", "Institutions avec cahier des charges"];
const adaptations = ["Matières (coton bio, recyclé, technique, lin)", "Coloris précis (Pantone)", "Finitions (bord-côte, boutons, zip, cols, poches)", "Détails esthétiques (coutures contrastées, etc.)", "Identité visuelle complète"];
const process = [
  "Sélection du modèle de base",
  "Choix des adaptations",
  "Validation échantillons matières",
  "Prototype ajustable",
  "Production finale"
];
const avantages = ["Plus de liberté créative", "Maîtrise technique assurée", "Délais raisonnables", "Fabrication française contrôlée", "Flexibilité sur séries"];

const SemiSurMesureDetailSection: React.FC = () => (
  <section className="bg-gray-50 py-16 md:py-24">
    <div className="max-w-6xl mx-auto px-4 grid md:grid-cols-2 gap-12 items-center">
      <div>
        <h2 className="text-3xl md:text-4xl font-extrabold mb-2 text-primary-blue">Solution semi-sur-mesure</h2>
        <h3 className="text-xl font-bold mb-4 text-primary-blue">Votre vêtement, votre style. Sur une base solide.</h3>
        <div className="mb-2 font-bold">Pour qui ?</div>
        <ul className="mb-4 list-disc pl-5 text-gray-700">
          {pourQui.map((p, i) => (<li key={i}>{p}</li>))}
        </ul>
        <div className="mb-2 font-bold">Ce que vous adaptez :</div>
        <ul className="mb-4 list-disc pl-5 text-gray-700">
          {adaptations.map((a, i) => (<li key={i}>{a}</li>))}
        </ul>
        <div className="mb-2 font-bold">Process en 5 étapes :</div>
        <ul className="mb-4 list-decimal pl-5 text-gray-700">
          {process.map((p, i) => (<li key={i}>{p}</li>))}
        </ul>
        <div className="mb-2 font-bold">Avantages :</div>
        <ul className="mb-4 list-disc pl-5 text-gray-700">
          {avantages.map((a, i) => (<li key={i}>{a}</li>))}
        </ul>
        <div className="flex gap-4 mt-4">
          <Link to="/semi-sur-mesure" className="border-2 border-primary-blue text-primary-blue font-bold rounded-full px-8 py-4 uppercase text-lg shadow-lg hover:bg-primary-blue hover:text-white transition-all">Découvrir les possibilités</Link>
          <Link to="/contact" className="bg-primary-blue text-white font-bold rounded-full px-8 py-4 uppercase text-lg shadow-lg hover:bg-white hover:text-primary-blue transition-all">Demander conseil</Link>
        </div>
      </div>
      <div>
        <img src="/media/semisurmesure-finitions.jpg" alt="Détails de finitions personnalisées" className="rounded-2xl shadow-lg w-full object-cover mb-4" />
      </div>
    </div>
  </section>
);

export default SemiSurMesureDetailSection;
