import React from "react";
import { Link } from "react-router-dom";

const matieres = [
  {
    icon: <svg className="w-10 h-10 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor"><circle cx="12" cy="12" r="10" strokeWidth={2} /><path strokeWidth={2} d="M8 12l2 2 4-4" /></svg>,
    titre: "Coton biologique",
    points: ["Certifié GOTS", "Sans pesticides", "Économie d'eau", "Confort optimal"]
  },
  {
    icon: <svg className="w-10 h-10 text-primary-blue" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeWidth={2} d="M19 21l-7-5-7 5V5a2 2 0 012-2h10a2 2 0 012 2z" /></svg>,
    titre: "Fibres recyclées",
    points: ["rPET, coton recyclé", "-59% émissions CO2", "Qualité équivalente", "Certification GRS"]
  },
  {
    icon: <svg className="w-10 h-10 text-yellow-400" fill="none" viewBox="0 0 24 24" stroke="currentColor"><rect width="20" height="12" x="2" y="6" rx="2" /><path strokeWidth={2} d="M6 10h.01M10 10h.01M14 10h.01M18 10h.01" /></svg>,
    titre: "Matières techniques",
    points: ["Performance", "Résistance", "Entretien facile", "Usage professionnel"]
  },
  {
    icon: <svg className="w-10 h-10 text-cta-red" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeWidth={2} d="M12 2C7.03 2 2.73 6.11 2.07 11.02c-.09.7.48 1.31 1.19 1.31h17.48c.71 0 1.28-.61 1.19-1.31C21.27 6.11 16.97 2 12 2z" /></svg>,
    titre: "Lin français",
    points: ["Cultivé en Normandie", "Zéro irrigation", "Thermorégulateur", "Masters of Linen"]
  }
];

const MatieresResponsablesSection: React.FC = () => (
  <section className="bg-primary-blue text-white py-16 md:py-24">
    <div className="max-w-6xl mx-auto px-4">
      <h2 className="text-3xl md:text-4xl font-extrabold mb-4">Des matières sélectionnées avec exigence</h2>
      <h3 className="text-xl font-bold mb-8">Parce que la qualité commence par le choix de la fibre</h3>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
        {matieres.map((m, i) => (
          <div key={i} className="bg-white/10 rounded-2xl shadow-lg p-6 flex flex-col items-center">
            {m.icon}
            <div className="font-bold text-lg mb-2">{m.titre}</div>
            <ul className="text-white/90 text-sm list-disc pl-5 text-left">
              {m.points.map((p, j) => (<li key={j}>{p}</li>))}
            </ul>
          </div>
        ))}
      </div>
      <div className="flex justify-center">
        <Link to="/fabrication/matieres" className="border-2 border-white text-white font-bold rounded-full px-8 py-4 uppercase text-lg shadow-lg hover:bg-white hover:text-primary-blue transition-all">Découvrir nos matières</Link>
      </div>
    </div>
  </section>
);

export default MatieresResponsablesSection;
