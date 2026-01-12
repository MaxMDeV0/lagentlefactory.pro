import React from "react";

const initiatives = [
  { titre: "Bureaux éco-responsables", desc: "Électricité verte, tri sélectif" },
  { titre: "Formation équipes", desc: "Sensibilisation RSE" },
  { titre: "Partenariats associatifs", desc: "Soutien à l'insertion" }
];

const AuDelaTextileSection: React.FC = () => (
  <section className="bg-gray-50 py-16 md:py-24">
    <div className="max-w-6xl mx-auto px-4">
      <h2 className="text-3xl md:text-4xl font-extrabold text-primary-blue mb-6">Nos engagements au quotidien</h2>
      <p className="text-lg text-gray-700 mb-8">La responsabilité ne s'arrête pas au vêtement.</p>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {initiatives.map((i, k) => (
          <div key={k} className="bg-white rounded-xl shadow-lg p-6 flex flex-col items-center">
            <div className="font-bold text-primary-blue mb-2 text-lg">{i.titre}</div>
            <div className="text-sm text-gray-700 text-center mb-2">{i.desc}</div>
            <ul className="list-disc pl-5 text-xs text-gray-500">
              {i.titre === "Bureaux éco-responsables" && <li>Réduction des déchets de bureau</li>}
              {i.titre === "Formation équipes" && <li>Sessions annuelles RSE</li>}
              {i.titre === "Partenariats associatifs" && <li>Collaboration avec Emmaüs, Envie, etc.</li>}
            </ul>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default AuDelaTextileSection;
