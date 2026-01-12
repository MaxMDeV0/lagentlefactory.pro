import React from "react";
import { Link } from "react-router-dom";

const cards = [
  {
    icon: "france",
    title: "Production 100% française",
    desc: "Nos ateliers situés en :\n- Vosges : tricotage et ennoblissement\n- Chessy-les-Mines : teinture, savoir-faire couleur\n- Roubaix : confection, finitions, mise au point\nChaque site possède une spécialité historique.",
    cta: { label: "Visiter nos ateliers", to: "/fabrication/ateliers" }
  },
  {
    icon: "controle",
    title: "Maîtrise totale",
    desc: "De la matière première au vêtement final, chaque étape est suivie, validée et tracée.\n- Contrôle qualité à chaque étape\n- Validation des prototypes\n- Suivi de production en temps réel\nVous savez où, comment et par qui votre pièce est fabriquée."
  },
  {
    icon: "qualite",
    title: "Qualité constante",
    desc: "Nous travaillons avec les mêmes ateliers que pour les collections Gentle Factory.\n- Même niveau d'exigence\n- Même attention aux détails\n- Mêmes contrôles qualité\nCertification qualité ISO 9001."
  },
  {
    icon: "responsable",
    title: "Production responsable",
    desc: "Notre fabrication s'inscrit dans une démarche cohérente.\n- Matières responsables\n- Limitation des transports\n- Durabilité dès la conception\nLoin du textile jetable."
  }
];

const icons = {
  france: <svg className="w-12 h-12 text-primary-blue mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeWidth={2} d="M12 2l2 7h7l-5.5 4 2 7-5.5-4-5.5 4 2-7L3 9h7z" /></svg>,
  controle: <svg className="w-12 h-12 text-green-600 mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><circle cx="12" cy="12" r="10" strokeWidth={2} /><path strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" /></svg>,
  qualite: <svg className="w-12 h-12 text-yellow-400 mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeWidth={2} d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" /></svg>,
  responsable: <svg className="w-12 h-12 text-cta-red mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeWidth={2} d="M12 21c-4.97 0-9-4.03-9-9 0-3.87 2.69-7.16 6.39-8.65.5-.2 1.06.02 1.26.52.2.5-.02 1.06-.52 1.26C6.16 6.13 4 8.86 4 12c0 4.41 3.59 8 8 8s8-3.59 8-8c0-3.14-2.16-5.87-5.13-6.87-.5-.2-.72-.76-.52-1.26.2-.5.76-.72 1.26-.52C19.31 4.84 22 8.13 22 12c0 4.97-4.03 9-9 9z" /></svg>
};

const EngagementsFabricationSection: React.FC = () => (
  <section className="bg-gray-50 py-16 md:py-24">
    <div className="max-w-6xl mx-auto px-4">
      <h2 className="text-3xl md:text-4xl font-extrabold text-primary-blue mb-8 text-center">Nos engagements de fabrication</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {cards.map((c, i) => (
          <div key={i} className="bg-white rounded-2xl shadow-lg hover:shadow-xl p-8 flex flex-col items-start transition-all border-t-8 border-primary-blue">
            {icons[c.icon]}
            <h3 className="text-2xl font-bold text-primary-blue mb-2">{c.title}</h3>
            <div className="text-lg text-gray-700 whitespace-pre-line mb-4">{c.desc}</div>
            {c.cta && <Link to={c.cta.to} className="mt-auto border-2 border-primary-blue text-primary-blue font-bold rounded-full px-8 py-4 uppercase text-lg shadow-lg hover:bg-primary-blue hover:text-white transition-all">{c.cta.label}</Link>}
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default EngagementsFabricationSection;
