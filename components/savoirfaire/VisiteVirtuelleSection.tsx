import React from "react";
import { Link } from "react-router-dom";

const medias = [
  { src: "/media/atelier-tricotage.jpg", legend: "Atelier de tricotage en action" },
  { src: "/media/cuves-teinture.jpg", legend: "Cuves de teinture" },
  { src: "/media/confection-manuelle.jpg", legend: "Confection manuelle" },
  { src: "/media/controle-qualite.jpg", legend: "Contrôle qualité" },
  { src: "/media/equipe-travail.jpg", legend: "Équipes au travail" }
];

const VisiteVirtuelleSection: React.FC = () => (
  <section className="bg-gray-50 py-16 md:py-24">
    <div className="max-w-6xl mx-auto px-4">
      <h2 className="text-3xl md:text-4xl font-extrabold text-primary-blue mb-8 text-center">Découvrez nos ateliers en vidéo</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
        {medias.map((m, i) => (
          <div key={i} className="flex flex-col items-center">
            <img src={m.src} alt={m.legend} className="rounded-2xl shadow-lg w-full object-cover mb-2" />
            <div className="text-xs text-gray-600 text-center">{m.legend}</div>
          </div>
        ))}
      </div>
      <div className="flex justify-center">
        <Link to="/contact" className="bg-primary-blue text-white font-bold rounded-full px-8 py-4 uppercase text-lg shadow-lg border-2 border-primary-blue hover:bg-white hover:text-primary-blue transition-all">Planifier une visite d'atelier</Link>
      </div>
    </div>
  </section>
);

export default VisiteVirtuelleSection;
