import React from "react";
import { Link } from "react-router-dom";

const regions = [
  { ville: "Vosges", role: "Tricotage & ennoblissement", x: "30%", y: "40%" },
  { ville: "Chessy-les-Mines", role: "Teinture & couleur", x: "60%", y: "60%" },
  { ville: "Roubaix", role: "Confection & finitions", x: "80%", y: "20%" }
];

const points = [
  "Ateliers situés en France",
  "Coton bio, matières recyclées ou tissus techniques",
  "Traçabilité totale, petites et moyennes séries",
  "Un accompagnement humain et réactif",
  "Délais maîtrisés (6-12 semaines moyenne)"
];

const NotreFabricationSection: React.FC = () => (
  <section className="bg-gray-50 py-16 md:py-24">
    <div className="max-w-6xl mx-auto px-4 grid md:grid-cols-2 gap-12 items-center">
      <div className="relative h-64 w-full bg-gray-100 rounded-2xl shadow-lg mb-8 md:mb-0">
        <img src="/media/carte-france.png" alt="Carte de France" className="absolute inset-0 w-full h-full object-contain" />
        {regions.map((r, i) => (
          <div key={i} className="absolute" style={{ left: r.x, top: r.y }}>
            <div className="bg-cta-red text-white rounded-full px-3 py-1 text-xs font-bold shadow-lg">{r.ville}</div>
            <div className="text-xs text-primary-blue font-semibold">{r.role}</div>
          </div>
        ))}
      </div>
      <div>
        <h2 className="text-3xl md:text-4xl font-extrabold text-primary-blue mb-4">Faire fabriquer en France, ça change tout</h2>
        <ul className="mb-6 text-gray-700 list-disc pl-5">
          {points.map((p, i) => (<li key={i}>{p}</li>))}
        </ul>
        <Link to="/fabrication/savoir-faire" className="inline-block bg-primary-blue text-white font-bold rounded-full px-8 py-4 uppercase text-lg shadow-lg hover:bg-white hover:text-primary-blue transition-all">En savoir plus sur la fabrication</Link>
      </div>
    </div>
  </section>
);

export default NotreFabricationSection;
