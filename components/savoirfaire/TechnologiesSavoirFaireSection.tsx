import React from "react";

const blocs = [
  {
    titre: "Tricotage moderne",
    desc: [
      "Machines dernière génération",
      "Précision au fil près",
      "Mailles complexes possibles",
      "Productivité et qualité"
    ],
    img: "/public/media/tricotage-moderne.jpg",
    alt: "Métiers à tricoter"
  },
  {
    titre: "Teinture haute précision",
    desc: [
      "Contrôle informatisé des nuances",
      "Reproductibilité parfaite",
      "Process écologiques",
      "Tests colorimétriques"
    ],
    img: "/public/media/teinture-haute-precision.jpg",
    alt: "Cuves de teinture"
  },
  {
    titre: "Confection artisanale",
    desc: [
      "Gestes précis et maîtrisés",
      "15+ ans d'expérience moyenne",
      "Finitions impeccables",
      "Contrôle qualité humain"
    ],
    img: "/public/media/confection-artisanale.jpg",
    alt: "Artisan au travail"
  }
];

const TechnologiesSavoirFaireSection: React.FC = () => (
  <section className="bg-gray-50 py-16 md:py-24">
    <div className="max-w-6xl mx-auto px-4">
      <h2 className="text-3xl md:text-4xl font-extrabold text-primary-blue mb-4">L'alliance tradition et modernité</h2>
      <h3 className="text-xl font-bold text-primary-blue mb-8">Des métiers d'art et des équipements de pointe</h3>
      <div className="flex flex-col gap-12">
        {blocs.map((b, i) => (
          <div key={i} className={`grid md:grid-cols-2 gap-8 items-center ${i % 2 === 1 ? "md:flex-row-reverse" : ""}`}>
            <div>
              <img src={b.img} alt={b.alt} className="rounded-2xl shadow-lg w-full object-cover" />
            </div>
            <div>
              <div className="font-bold text-2xl text-primary-blue mb-2">{b.titre}</div>
              <ul className="text-gray-700 text-lg list-disc pl-5">
                {b.desc.map((d, j) => (<li key={j}>{d}</li>))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default TechnologiesSavoirFaireSection;
