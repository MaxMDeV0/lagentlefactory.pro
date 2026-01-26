import React from "react";
import { Link } from "react-router-dom";

const pourQui = [
  "Marques premium & luxe",
  "Projets créatifs d'envergure",
  "Entreprises avec besoins uniques",
  "Designers et créateurs exigeants"
];
const accompagnement = [
  "Co-création avec notre bureau d'études",
  "Développement patronage sur-mesure",
  "Sourcing matières innovantes ou exclusives",
  "Prototypage et ajustements illimités",
  "Gestion complète du projet (du croquis à la livraison)"
];
const etapes = [
  "Brief créatif et technique",
  "Étude de faisabilité",
  "Développement patronage et sourcing",
  "Prototypage et validation",
  "Production et contrôle qualité"
];
const avantages = [
  "Liberté totale de création",
  "Expertise technique pointue",
  "Accès à un réseau de fournisseurs haut de gamme",
  "Accompagnement personnalisé",
  "Production française hautement qualitative"
];

const SurMesureDetailSection: React.FC = () => (
  <section className="bg-white py-16 md:py-24">
    <div className="max-w-6xl mx-auto px-4 grid md:grid-cols-2 gap-12 items-center">
      <div>
        <img src="/media/surmesure-atelier.jpg" alt="Atelier sur-mesure" className="rounded-2xl shadow-lg w-full object-cover mb-4" />
      </div>
      <div>
        <h2 className="text-3xl md:text-4xl font-extrabold mb-2 text-cta-red">Solution sur-mesure</h2>
        <h3 className="text-xl font-bold mb-4 text-cta-red">Votre projet, sans limite. Notre expertise à vos côtés.</h3>
        <div className="mb-2 font-bold">Pour qui ?</div>
        <ul className="mb-4 list-disc pl-5 text-gray-700">
          {pourQui.map((p, i) => (<li key={i}>{p}</li>))}
        </ul>
        <div className="mb-2 font-bold">Accompagnement :</div>
        <ul className="mb-4 list-disc pl-5 text-gray-700">
          {accompagnement.map((a, i) => (<li key={i}>{a}</li>))}
        </ul>
        <div className="mb-2 font-bold">Étapes clés :</div>
        <ul className="mb-4 list-decimal pl-5 text-gray-700">
          {etapes.map((e, i) => (<li key={i}>{e}</li>))}
        </ul>
        <div className="mb-2 font-bold">Avantages :</div>
        <ul className="mb-4 list-disc pl-5 text-gray-700">
          {avantages.map((a, i) => (<li key={i}>{a}</li>))}
        </ul>
        <div className="flex gap-4 mt-4">
          <Link to="/sur-mesure" className="border-2 border-cta-red text-cta-red font-bold rounded-full px-8 py-4 uppercase text-lg shadow-lg hover:bg-cta-red hover:text-white transition-all">Voir des réalisations</Link>
          <Link to="/contact" className="bg-cta-red text-white font-bold rounded-full px-8 py-4 uppercase text-lg shadow-lg hover:bg-white hover:text-cta-red transition-all">Discuter de mon projet</Link>
        </div>
      </div>
    </div>
  </section>
);

export default SurMesureDetailSection;
