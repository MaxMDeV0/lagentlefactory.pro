import React from "react";
import { Link } from "react-router-dom";

const LinFrancaisSection: React.FC = () => (
  <section className="bg-gray-50 py-16 md:py-24">
    <div className="max-w-6xl mx-auto px-4 grid md:grid-cols-2 gap-12 items-center">
      <div className="flex flex-col items-center md:items-end">
        <img src="/media/lin-francais.jpg" alt="Champ de lin" className="rounded-2xl shadow-lg w-full max-w-md mt-4" />
      </div>
      <div>
        <h2 className="text-3xl md:text-4xl font-extrabold text-primary-blue mb-2">Lin français</h2>
        <div className="text-lg font-semibold text-primary-blue mb-2">Local, naturel, élégant</div>
        <p className="text-lg leading-relaxed mb-4">Cultivé en France (Normandie principalement), le lin ne nécessite aucune irrigation, est biodégradable et thermorégulateur naturel. 80% de la production mondiale est française.</p>
        <ul className="list-disc pl-6 mb-4 text-lg text-gray-700">
          <li>Zéro irrigation nécessaire</li>
          <li>Culture locale</li>
          <li>Résistance naturelle</li>
          <li>Fraîcheur en été</li>
        </ul>
        <div className="flex gap-4 mb-4">
          <img src="/media/masters-of-linen.svg" alt="Masters of Linen" className="h-8" />
        </div>
        <div className="bg-white border-l-4 border-primary-blue p-4 rounded-xl shadow mb-4 text-primary-blue font-bold">France = 80% production mondiale • Thermorégulateur naturel • Biodégradable</div>
        <Link to="/realisations?matiere=lin" className="inline-block bg-primary-blue text-white font-bold px-6 py-3 rounded-full shadow hover:bg-cta-red transition-all">Voir des exemples de réalisations en lin</Link>
      </div>
    </div>
  </section>
);

export default LinFrancaisSection;
