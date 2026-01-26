import React from "react";
import { Link } from "react-router-dom";

const solutions = [
  {
    badge: "La plus rapide",
    badgeColor: "bg-green-500",
    icon: <svg className="w-10 h-10 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeWidth={2} d="M5 13l4 4L19 7" /></svg>,
    img: "/media/pretapersonnaliser.jpg",
    titre: "Prêt-à-personnaliser",
    baseline: "Nos modèles existants + votre identité",
    prix: "À partir de 15€/pièce",
    delais: "4-6 semaines",
    moq: "50 pièces",
    points: ["Solution rapide et fiable", "Budget maîtrisé", "Qualité garantie"],
    cta: { label: "Découvrir", to: "/solutions/pret-a-personnaliser" }
  },
  {
    badge: "La plus équilibrée",
    badgeColor: "bg-yellow-400",
    icon: <svg className="w-10 h-10 text-yellow-400" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeWidth={2} d="M4 4h16v16H4z" /><path strokeWidth={2} d="M8 8h8v8H8z" /></svg>,
    img: "/media/semisurmesure.jpg",
    titre: "Semi-sur-mesure",
    baseline: "Personnalisez matières, couleurs, détails",
    prix: "À partir de 25€/pièce",
    delais: "8-10 semaines",
    moq: "100 pièces",
    points: ["Grande liberté créative", "Cadre technique maîtrisé", "Différenciation forte"],
    cta: { label: "Explorer", to: "/solutions/semi-sur-mesure" }
  },
  {
    badge: "La plus créative",
    badgeColor: "bg-purple-500",
    icon: <svg className="w-10 h-10 text-purple-500" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeWidth={2} d="M12 20v-6m0 0V4m0 10l-4-4m4 4l4-4" /></svg>,
    img: "/media/cocreation.jpg",
    titre: "Co-création complète",
    baseline: "Votre vêtement créé de A à Z",
    prix: "Sur devis",
    delais: "12-16 semaines",
    moq: "150 pièces",
    points: ["Liberté créative totale", "Accompagnement expert", "Pièce 100% unique"],
    cta: { label: "Co-créer", to: "/solutions/co-creation-complete" }
  }
];

const VueEnsembleSolutionsSection: React.FC = () => (
  <section className="bg-white py-16 md:py-24">
    <div className="max-w-6xl mx-auto px-4">
      <h2 className="text-3xl md:text-4xl font-extrabold text-primary-blue mb-4 text-center">Quelle solution pour votre projet ?</h2>
      <h3 className="text-xl font-bold text-primary-blue mb-8 text-center">Une approche structurée, maîtrisée et adaptée à votre projet</h3>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {solutions.map((s, i) => (
          <div key={i} className={`bg-white rounded-2xl shadow-xl hover:shadow-2xl hover:-translate-y-2 transition-all border-t-4 ${s.badgeColor} flex flex-col p-8`}>
            <div className={`inline-block px-3 py-1 rounded-full text-xs uppercase font-black text-white mb-4 ${s.badgeColor}`}>{s.badge}</div>
            <div className="flex items-center gap-2 mb-4">{s.icon}<span className="font-bold text-lg text-primary-blue">{s.titre}</span></div>
            <img src={s.img} alt={s.titre} className="rounded-xl mb-4 object-cover h-32 w-full" />
            <div className="text-primary-blue font-bold mb-1">{s.baseline}</div>
            <div className="flex gap-4 mb-2">
              <span className="text-cta-red text-3xl font-bold">{s.prix}</span>
              <span className="text-gray-700">{s.delais}</span>
              <span className="text-gray-700">{s.moq}</span>
            </div>
            <ul className="mb-4 text-gray-700 list-disc pl-5">
              {s.points.map((p, j) => (<li key={j}>{p}</li>))}
            </ul>
            <Link to={s.cta.to} className="mt-auto border-2 border-primary-blue text-primary-blue font-bold rounded-full px-8 py-4 uppercase text-lg shadow-lg hover:bg-primary-blue hover:text-white transition-all">{s.cta.label}</Link>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default VueEnsembleSolutionsSection;
