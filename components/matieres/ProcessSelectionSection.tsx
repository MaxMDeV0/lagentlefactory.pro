import React from "react";

const steps = [
  { icon: "coton", label: "Analyse de votre besoin" },
  { icon: "recycle", label: "Sélection des fournisseurs certifiés" },
  { icon: "technique", label: "Tests de qualité et toucher" },
  { icon: "lin", label: "Validation traçabilité" },
  { icon: "coton", label: "Échantillonnage avant production" },
];

const ProcessSelectionSection: React.FC<{ icons: any }> = ({ icons }) => (
  <section className="bg-primary-blue text-white py-16 md:py-24">
    <div className="max-w-6xl mx-auto px-4">
      <h2 className="text-3xl md:text-4xl font-extrabold mb-8 text-center">Comment nous sélectionnons nos matières</h2>
      <div className="flex flex-col md:flex-row gap-8 justify-center items-center">
        {steps.map((s, i) => (
          <div key={i} className="flex flex-col items-center">
            <div className="mb-2">{icons[s.icon]}</div>
            <div className="bg-white/10 rounded-full px-4 py-2 font-bold text-lg mb-2">{s.label}</div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default ProcessSelectionSection;
