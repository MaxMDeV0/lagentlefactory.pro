import React from "react";

const piliers = [
  { icon: "responsabilite", color: "border-green-600", titre: "Responsabilité", desc: "Chaque décision compte" },
  { icon: "durabilite", color: "border-primary-blue", titre: "Durabilité", desc: "Pensé pour durer" },
  { icon: "locale", color: "border-cta-red", titre: "Fabrication locale", desc: "Soutenir l'industrie française" },
  { icon: "transparence", color: "border-yellow-400", titre: "Transparence", desc: "Traçabilité totale" },
  { icon: "humain", color: "border-pink-500", titre: "Accompagnement humain", desc: "Un vrai partenaire" },
];

const icons = {
  responsabilite: <svg className="w-10 h-10 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor"><circle cx="12" cy="12" r="10" strokeWidth={2} /><path strokeWidth={2} d="M12 8v4l3 3" /></svg>,
  durabilite: <svg className="w-10 h-10 text-primary-blue" fill="none" viewBox="0 0 24 24" stroke="currentColor"><circle cx="12" cy="12" r="10" strokeWidth={2} /><path strokeWidth={2} d="M12 6v6l4 2" /></svg>,
  locale: <svg className="w-10 h-10 text-cta-red" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeWidth={2} d="M12 2l2 7h7l-5.5 4 2 7-5.5-4-5.5 4 2-7L3 9h7z" /></svg>,
  transparence: <svg className="w-10 h-10 text-yellow-400" fill="none" viewBox="0 0 24 24" stroke="currentColor"><circle cx="12" cy="12" r="10" strokeWidth={2} /><path strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" /></svg>,
  humain: <svg className="w-10 h-10 text-pink-500" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeWidth={2} d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" /></svg>
};

const VueEnsembleEngagements: React.FC = () => (
  <section className="bg-white py-16 md:py-24">
    <div className="max-w-6xl mx-auto px-4">
      <h2 className="text-3xl md:text-4xl font-extrabold text-primary-blue mb-6 text-center">Cinq piliers pour un textile responsable</h2>
      <p className="text-lg text-gray-700 mb-8 text-center">Notre vision globale s'appuie sur cinq piliers fondamentaux pour garantir un textile vraiment responsable.</p>
      <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
        {piliers.map((p, i) => (
          <div key={i} className={`bg-white rounded-2xl shadow-lg border-t-8 ${p.color} p-6 flex flex-col items-center hover:bg-gray-50 transition-all duration-300`}>
            {icons[p.icon]}
            <h3 className="font-bold text-lg text-primary-blue mt-4 mb-2">{p.titre}</h3>
            <p className="text-gray-700 text-center text-sm">{p.desc}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default VueEnsembleEngagements;
