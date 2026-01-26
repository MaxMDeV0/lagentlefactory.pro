import React from "react";

const etapes = [
  {
    icon: <svg className="w-10 h-10 text-primary-blue" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeWidth={2} d="M8 10h.01M12 14h.01M16 10h.01M21 12c0 4.97-4.03 9-9 9s-9-4.03-9-9 4.03-9 9-9 9 4.03 9 9z" /></svg>,
    titre: "Vous nous parlez de votre idée",
    desc: ["Formulaire de contact ou rendez-vous", "Échange sur vos besoins", "Analyse de votre projet", "Réponse en 24-48h"]
  },
  {
    icon: <svg className="w-10 h-10 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M12 20c4.41 0 8-3.59 8-8s-3.59-8-8-8-8 3.59-8 8 3.59 8 8 8z" /></svg>,
    titre: "On vous propose la meilleure solution",
    desc: ["Présentation des options", "Devis détaillé", "Échantillons matières", "Conseils personnalisés"]
  },
  {
    icon: <svg className="w-10 h-10 text-yellow-400" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeWidth={2} d="M15.232 5.232l3.536 3.536M9 11l-6 6m0 0v3h3m-3-3l7.5-7.5a2.121 2.121 0 013 0l3 3a2.121 2.121 0 010 3L9 21H6v-3l7.5-7.5" /></svg>,
    titre: "On prototype et on ajuste",
    desc: ["Création du prototype", "Validation avec vous", "Ajustements nécessaires", "Approbation finale"]
  },
  {
    icon: <svg className="w-10 h-10 text-cta-red" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeWidth={2} d="M3 10h1l2 9h12l2-9h1M5 10V7a7 7 0 0114 0v3" /></svg>,
    titre: "On fabrique en France et on livre",
    desc: ["Production dans nos ateliers", "Contrôle qualité rigoureux", "Conditionnement soigné", "Livraison sous 6-12 semaines"]
  }
];

const CommentCaMarcheSection: React.FC = () => (
  <section className="bg-white py-16 md:py-24">
    <div className="max-w-6xl mx-auto px-4">
      <h2 className="text-3xl md:text-4xl font-extrabold text-primary-blue mb-4 text-center">Votre projet, en 4 étapes simples</h2>
      <h3 className="text-xl font-bold text-primary-blue mb-8 text-center">De l'idée au vêtement fini, un process clair et maîtrisé</h3>
      <div className="flex flex-col md:flex-row gap-8 justify-between items-start">
        {etapes.map((e, i) => (
          <div key={i} className="flex-1 bg-gray-50 rounded-2xl shadow-lg p-8 flex flex-col items-center mx-2">
            <div className="flex items-center justify-center mb-4">
              <div className="bg-primary-blue text-white rounded-full w-12 h-12 flex items-center justify-center text-xl font-black mr-2">{i + 1}</div>
              {e.icon}
            </div>
            <div className="font-bold text-xl text-primary-blue mb-2 text-center">{e.titre}</div>
            <ul className="text-gray-700 text-sm list-disc pl-5 text-left mb-2">
              {e.desc.map((d, j) => (<li key={j}>{d}</li>))}
            </ul>
          </div>
        ))}
      </div>
      <div className="flex justify-center mt-8">
        <a href="#footer-fabriquer" className="bg-cta-red text-white font-bold rounded-full px-8 py-4 uppercase text-lg shadow-lg hover:bg-primary-blue transition-all">Démarrer mon projet</a>
      </div>
    </div>
  </section>
);

export default CommentCaMarcheSection;
