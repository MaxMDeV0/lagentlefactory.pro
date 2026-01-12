import React from "react";
import { Link } from "react-router-dom";

const CotonBioSection: React.FC = () => (
  <section className="bg-gray-50 py-16 md:py-24">
    <div className="max-w-6xl mx-auto px-4 grid md:grid-cols-2 gap-12 items-center">
      <div className="flex flex-col items-center md:items-end">
        <img src="./media/coton-bio.jpg" alt="Champ de coton bio" className="rounded-2xl shadow-lg w-full max-w-md mt-4" />
      </div>
      <div>
        <h2 className="text-3xl md:text-4xl font-extrabold text-primary-blue mb-2">Coton biologique</h2>
        <div className="text-lg font-semibold text-primary-blue mb-2">Certifié, tracé, durable</div>
        <p className="text-lg leading-relaxed mb-4">Le coton bio est cultivé sans pesticides chimiques, avec une économie d'eau de 91% par rapport au coton conventionnel. Il offre une traçabilité complète de la graine au fil et une durabilité supérieure.</p>
        <ul className="list-disc pl-6 mb-4 text-lg text-gray-700">
          <li>Sans pesticides</li>
          <li>Économie d'eau</li>
          <li>Traçabilité</li>
        </ul>
        <div className="flex gap-4 mb-4">
          <img src="./media/gots.svg" alt="GOTS" className="h-8" />
          <img src="./media/oeko-tex.svg" alt="Oeko-Tex" className="h-8" />
          <img src="./media/organic-cotton.svg" alt="Organic Cotton" className="h-8" />
        </div>
        <div className="bg-white border-l-4 border-accent-green p-4 rounded-xl shadow mb-4 text-accent-green font-bold">91% d'eau en moins vs coton conventionnel • 0 pesticide chimique • Traçabilité de la graine au fil</div>
        <Link to="/realisations?matiere=coton-bio" className="inline-block bg-primary-blue text-white font-bold px-6 py-3 rounded-full shadow hover:bg-cta-red transition-all">Voir des exemples de réalisations en coton bio</Link>
      </div>
    </div>
  </section>
);

export default CotonBioSection;
