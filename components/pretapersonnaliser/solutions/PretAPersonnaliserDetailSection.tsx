import React from "react";
import { Link } from "react-router-dom";

const modeles = ["T-shirts (col rond, col V)", "Sweats (capuche, col rond)", "Polos", "Chemises", "Pantalons"];
const personnalisations = ["Broderie (placement, couleur, taille)", "Sérigraphie", "Étiquette de marque (intérieure/extérieure)", "Coloris selon disponibilité", "Emballage sur demande"];
const pourQui = ["Entreprises (corporate)", "Institutions et clubs", "Boutiques (test rapide)", "Marques en lancement"];
const avantages = ["Délais raccourcis", "Aucun risque de patronage", "Qualité garantie (modèles éprouvés)", "Budget maîtrisé", "Production française petites/moyennes séries"];

const PretAPersonnaliserDetailSection: React.FC = () => (
  <section className="bg-primary-blue text-white py-16 md:py-24">
    <div className="max-w-6xl mx-auto px-4 grid md:grid-cols-2 gap-12 items-center">
      <div>
        <img src="/media/pretapersonnaliser-carrousel.jpg" alt="Modèles disponibles" className="rounded-2xl shadow-lg w-full object-cover mb-4" />
      </div>
      <div>
        <h2 className="text-3xl md:text-4xl font-extrabold mb-2">Solution prêt-à-personnaliser</h2>
        <h3 className="text-xl font-bold mb-4">Une collection déjà maîtrisée. Votre identité en plus.</h3>
        <div className="mb-2 font-bold">Pour qui ?</div>
        <ul className="mb-4 list-disc pl-5 text-white/90">
          {pourQui.map((p, i) => (<li key={i}>{p}</li>))}
        </ul>
        <div className="mb-2 font-bold">Ce que vous personnalisez :</div>
        <ul className="mb-4 list-disc pl-5 text-white/90">
          {personnalisations.map((p, i) => (<li key={i}>{p}</li>))}
        </ul>
        <div className="mb-2 font-bold">Modèles disponibles :</div>
        <ul className="mb-4 list-disc pl-5 text-white/90">
          {modeles.map((m, i) => (<li key={i}>{m}</li>))}
        </ul>
        <div className="mb-2 font-bold">Avantages :</div>
        <ul className="mb-4 list-disc pl-5 text-white/90">
          {avantages.map((a, i) => (<li key={i}>{a}</li>))}
        </ul>
        <div className="flex gap-4 mt-4">
          <Link to="/pret-a-personnaliser" className="border-2 border-white text-white font-bold rounded-full px-8 py-4 uppercase text-lg shadow-lg hover:bg-white hover:text-primary-blue transition-all">Voir les modèles disponibles</Link>
          <Link to="/contact" className="bg-white text-cta-red font-bold rounded-full px-8 py-4 uppercase text-lg shadow-lg hover:bg-primary-blue hover:text-white transition-all">Demander un devis</Link>
        </div>
      </div>
    </div>
  </section>
);

export default PretAPersonnaliserDetailSection;
