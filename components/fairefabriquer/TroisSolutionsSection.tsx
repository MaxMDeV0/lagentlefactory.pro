import React from "react";
import { Link } from "react-router-dom";

const solutions = [
  {
    icon: <svg className="w-10 h-10 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeWidth={2} d="M5 13l4 4L19 7" /></svg>,
    titre: "Prêt-à-personnaliser",
    desc: "Nos modèles existants + votre identité. La solution la plus rapide.",
    ideal: ["Entreprises (corporate)", "Clubs et institutions", "Tests de marché"],
    delais: "4-6 semaines",
    min: "50 pièces",
    perso: "Broderie, sérigraphie, étiquettes, coloris",
    cta: { label: "En savoir plus", to: "/solutions/pret-a-personnaliser" }
  },
  {
    icon: <svg className="w-10 h-10 text-primary-blue" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeWidth={2} d="M4 4h16v16H4z" /><path strokeWidth={2} d="M8 8h8v8H8z" /></svg>,
    titre: "Semi-sur-mesure",
    desc: "Matières, couleurs, finitions : vous adaptez un modèle selon vos besoins.",
    ideal: ["Marques établies", "Boutiques exigeantes", "Entreprises premium"],
    delais: "8-10 semaines",
    min: "100 pièces",
    perso: "Matières, couleurs, détails, finitions",
    cta: { label: "Découvrir", to: "/solutions/semi-sur-mesure" }
  },
  {
    icon: <svg className="w-10 h-10 text-cta-red" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeWidth={2} d="M12 20v-6m0 0V4m0 10l-4-4m4 4l4-4" /></svg>,
    titre: "Co-création complète",
    desc: "Vous avez une idée ou un croquis ? Nous créons votre vêtement de A à Z.",
    ideal: ["Jeunes marques", "Projets uniques", "Collections signature"],
    delais: "12-16 semaines",
    min: "150 pièces",
    perso: "Patronage, prototypage, ajustements, production",
    cta: { label: "Co-créer", to: "/solutions/co-creation-complete" }
  }
];

const TroisSolutionsSection: React.FC = () => (
  <section className="bg-primary-blue text-white py-16 md:py-24">
    <div className="max-w-6xl mx-auto px-4">
      <h2 className="text-3xl md:text-4xl font-extrabold mb-4 text-center">Trois façons de donner vie à votre projet</h2>
      <h3 className="text-xl font-bold mb-8 text-center">Quelle que soit votre vision, nous avons la solution</h3>
      <div className="flex flex-col gap-8">
        {solutions.map((s, i) => (
          <div key={i} className="bg-white/10 rounded-2xl shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all p-8 flex flex-col md:flex-row items-center gap-8">
            <div className="flex-shrink-0 mb-4 md:mb-0">{s.icon}</div>
            <div className="flex-1">
              <div className="font-bold text-2xl mb-2">{s.titre}</div>
              <div className="text-lg mb-2">{s.desc}</div>
              <div className="mb-2"><span className="font-bold">Idéal pour :</span> {s.ideal.join(", ")}</div>
              <div className="mb-2"><span className="font-bold">Délais :</span> {s.delais} <span className="ml-4 font-bold">À partir de :</span> {s.min}</div>
              <div className="mb-2"><span className="font-bold">Personnalisation :</span> {s.perso}</div>
              <Link to={s.cta.to} className="mt-2 inline-block border-2 border-white text-white font-bold rounded-full px-8 py-4 uppercase text-lg shadow-lg hover:bg-white hover:text-primary-blue transition-all">{s.cta.label}</Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default TroisSolutionsSection;
