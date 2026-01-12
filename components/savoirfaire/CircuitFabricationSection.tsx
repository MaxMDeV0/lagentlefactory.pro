import React from "react";

const etapes = [
  {
    icon: "🧵", titre: "SOURCING MATIÈRES", desc: "Sélection des fibres certifiées (bio, recyclé, technique, lin). Contrôle traçabilité fournisseurs.", temps: "1-2 sem."
  },
  { icon: "🧶", titre: "TRICOTAGE / TISSAGE", desc: "Vosges : métiers à tricoter modernes. Création de la maille ou du tissu. Contrôle densité et régularité.", temps: "1 sem." },
  { icon: "💧", titre: "ENNOBLISSEMENT", desc: "Lavage, préparation, traitements selon usage final, stabilisation dimensionnelle.", temps: "2-3 j." },
  { icon: "🎨", titre: "TEINTURE", desc: "Chessy-les-Mines : bains de couleur, précision des nuances, teintures écologiques certifiées.", temps: "2-5 j." },
  { icon: "🔍", titre: "CONTRÔLE INTERMÉDIAIRE", desc: "Vérification qualité matière, tests de résistance, validation colorimétrie.", temps: "1 j." },
  { icon: "✂️", titre: "COUPE & PATRONAGE", desc: "Roubaix : découpe précise, optimisation des chutes, préparation pièces à assembler.", temps: "1-2 j." },
  { icon: "🪡", titre: "CONFECTION", desc: "Assemblage par des artisans qualifiés, coutures renforcées, finitions soignées.", temps: "1-2 sem." },
  { icon: "📦", titre: "CONTRÔLE FINAL & EMBALLAGE", desc: "Inspection qualité complète, étiquetage, packaging responsable, expédition.", temps: "1 j." }
];

const CircuitFabricationSection: React.FC = () => (
  <section className="bg-primary-blue text-white py-16 md:py-24">
    <div className="max-w-6xl mx-auto px-4">
      <h2 className="text-3xl md:text-4xl font-extrabold mb-4 text-center">Votre vêtement, étape par étape</h2>
      <h3 className="text-xl font-bold mb-12 text-center">De la fibre au produit fini</h3>
      <div className="relative border-l-4 border-white pl-8">
        {etapes.map((e, i) => (
          <div key={i} className="flex items-start mb-10 group">
            <div className="absolute -left-6 mt-1 w-8 h-8 flex items-center justify-center">
              <span className="text-2xl animate-pulse">{e.icon}</span>
            </div>
            <div className="ml-4">
              <div className="text-xl font-bold mb-1">{e.titre}</div>
              <div className="text-white/90 mb-1">{e.desc}</div>
              <div className="text-xs text-white/60">Temps moyen : {e.temps}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default CircuitFabricationSection;
