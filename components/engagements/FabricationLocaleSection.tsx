import React from "react";
import { Link } from "react-router-dom";

const points = [
  { ville: "Vosges", role: "Tricotage", x: "30%", y: "40%" },
  { ville: "Chessy-les-Mines", role: "Teinture", x: "60%", y: "60%" },
  { ville: "Roubaix", role: "Confection", x: "80%", y: "20%" }
];

const impact = [
  { value: "-75%", label: "émissions CO2 vs Asie" },
  { value: "100%", label: "production française" },
  { value: "45", label: "emplois soutenus" }
];

const logos = [
  { src: "/media/made-in-france.svg", alt: "Made in France" },
  { src: "/media/origine-france-garantie.svg", alt: "Origine France Garantie" },
  { src: "/media/epv-logo.svg", alt: "Entreprise du Patrimoine Vivant" }
];

const FabricationLocaleSection: React.FC = () => (
  <section className="bg-white py-16 md:py-24">
    <div className="max-w-6xl mx-auto px-4">
      <div className="flex items-center mb-4">
        <svg className="w-10 h-10 text-cta-red mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeWidth={2} d="M12 2l2 7h7l-5.5 4 2 7-5.5-4-5.5 4 2-7L3 9h7z" /></svg>
        <h2 className="text-3xl md:text-4xl font-extrabold text-primary-blue">Fabrication locale</h2>
      </div>
      <h3 className="text-xl font-bold text-cta-red mb-2">Travailler en France, c'est soutenir l'industrie textile et garantir une qualité cohérente</h3>
      <div className="grid md:grid-cols-2 gap-12 items-center mb-8">
        <div className="relative h-64 w-full bg-gray-100 rounded-2xl shadow-lg">
          <img src="./media/carte-france.png" alt="Carte de France" className="absolute inset-0 w-full h-full object-contain" />
          {points.map((p, i) => (
            <div key={i} className="absolute" style={{ left: p.x, top: p.y }}>
              <div className="bg-cta-red text-white rounded-full px-3 py-1 text-xs font-bold shadow-lg">{p.ville}</div>
              <div className="text-xs text-primary-blue font-semibold">{p.role}</div>
            </div>
          ))}
        </div>
        <div>
          <ul className="mb-4 list-disc pl-5 text-gray-700">
            <li>Soutien à l'emploi local</li>
            <li>Réduction de l'empreinte carbone transport</li>
            <li>Respect des normes sociales européennes</li>
            <li>Réactivité et proximité</li>
            <li>Savoir-faire préservé</li>
          </ul>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
            {impact.map((c, i) => (
              <div key={i} className="bg-gray-50 rounded-xl p-4 shadow text-center">
                <div className="text-5xl font-black text-cta-red mb-2">{c.value}</div>
                <div className="text-xs uppercase tracking-widest text-gray-500">{c.label}</div>
              </div>
            ))}
          </div>
          <div className="flex gap-4 items-center mb-4">
            {logos.map((l, i) => (<img key={i} src={l.src} alt={l.alt} className="h-12 w-auto" />))}
          </div>
          <Link to="/fabrication/ateliers" className="inline-block bg-cta-red hover:bg-primary-blue transition-all font-bold rounded-full px-8 py-4 uppercase text-lg shadow-lg">Visiter nos ateliers</Link>
        </div>
      </div>
    </div>
  </section>
);

export default FabricationLocaleSection;
