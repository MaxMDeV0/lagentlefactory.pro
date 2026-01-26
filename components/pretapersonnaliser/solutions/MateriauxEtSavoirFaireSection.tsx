import React from "react";

const materiaux = [
  { nom: "Coton biologique", description: "Certifié GOTS, doux et respectueux de l'environnement." },
  { nom: "Coton recyclé", description: "Issu de chutes textiles, pour une démarche circulaire." },
  { nom: "Lin français", description: "Naturel, local, faible impact environnemental." },
  { nom: "Matières techniques", description: "Polyester recyclé, Tencel, etc. pour usages spécifiques." }
];
const savoirFaire = [
  "Tricotage et tissage en France",
  "Teinture et ennoblissement écoresponsables",
  "Confection haut de gamme (petites et grandes séries)",
  "Contrôle qualité rigoureux à chaque étape"
];

const MateriauxEtSavoirFaireSection: React.FC = () => (
  <section className="bg-gray-100 py-16 md:py-24">
    <div className="max-w-6xl mx-auto px-4">
      <h2 className="text-3xl md:text-4xl font-extrabold text-primary-blue mb-8">Matières & savoir-faire</h2>
      <div className="grid md:grid-cols-2 gap-12">
        <div>
          <h3 className="text-xl font-bold mb-4 text-primary-blue">Nos matières principales</h3>
          <ul className="space-y-4">
            {materiaux.map((m, i) => (
              <li key={i} className="bg-white rounded-xl shadow p-4">
                <div className="font-bold text-lg text-primary-blue">{m.nom}</div>
                <div className="text-gray-700 text-sm">{m.description}</div>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h3 className="text-xl font-bold mb-4 text-primary-blue">Un savoir-faire reconnu</h3>
          <ul className="list-disc pl-5 text-gray-700 space-y-2">
            {savoirFaire.map((s, i) => (<li key={i}>{s}</li>))}
          </ul>
          <div className="mt-8">
            <img src="/media/atelier-savoir-faire.png" alt="Atelier textile français" className="rounded-2xl shadow-lg w-full object-cover" />
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default MateriauxEtSavoirFaireSection;
