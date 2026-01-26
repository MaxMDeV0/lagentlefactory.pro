import React, { useState } from "react";

const questions = [
  {
    q: "Quel est votre niveau de personnalisation souhaité ?",
    options: [
      { label: "Basique (logo, broderie)", value: "pret" },
      { label: "Moyen (matières, couleurs, détails)", value: "semi" },
      { label: "Total (création complète)", value: "cocreation" }
    ]
  },
  {
    q: "Quels sont vos délais ?",
    options: [
      { label: "Urgent (< 6 semaines)", value: "pret" },
      { label: "Standard (8-12 semaines)", value: "semi" },
      { label: "Flexible (12+ semaines)", value: "cocreation" }
    ]
  },
  {
    q: "Quelle est votre quantité ?",
    options: [
      { label: "50-100 pièces", value: "pret" },
      { label: "100-300 pièces", value: "semi" },
      { label: "300+ pièces", value: "cocreation" }
    ]
  }
];

const resultats = {
  pret: {
    titre: "Prêt-à-personnaliser",
    desc: "Solution idéale pour des besoins rapides, quantités raisonnables et personnalisation basique."
  },
  semi: {
    titre: "Semi-sur-mesure",
    desc: "Parfait pour un équilibre entre créativité, délais raisonnables et quantités intermédiaires."
  },
  cocreation: {
    titre: "Co-création complète",
    desc: "Pour une liberté totale, des projets uniques et un accompagnement expert de A à Z."
  }
};

const OutilSelectionSolutionsSection: React.FC = () => {
  const [step, setStep] = useState(0);
  const [answers, setAnswers] = useState<string[]>([]);
  const [showResult, setShowResult] = useState(false);

  const handleSelect = (value: string) => {
    const next = [...answers, value];
    if (next.length === questions.length) {
      setAnswers(next);
      setShowResult(true);
    } else {
      setAnswers(next);
      setStep(step + 1);
    }
  };

  const getResult = () => {
    // Simple majority logic
    const count: Record<string, number> = { pret: 0, semi: 0, cocreation: 0 };
    answers.forEach(a => count[a]++);
    const best = Object.entries(count).sort((a, b) => b[1] - a[1])[0][0];
    return resultats[best];
  };

  return (
    <section className="bg-gray-50 py-16 md:py-24">
      <div className="max-w-2xl mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-extrabold text-primary-blue mb-4 text-center">Quelle solution est faite pour vous ?</h2>
        <h3 className="text-xl font-bold text-primary-blue mb-8 text-center">Répondez à 3 questions pour trouver votre solution idéale</h3>
        <div className="mb-8 w-full">
          <div className="h-2 bg-gray-200 rounded-full mb-4">
            <div className="h-2 bg-primary-blue rounded-full transition-all" style={{ width: `${(answers.length / questions.length) * 100}%` }}></div>
          </div>
          {!showResult ? (
            <div className="bg-white rounded-2xl shadow-lg p-8 flex flex-col items-center">
              <div className="font-bold text-lg mb-4 text-primary-blue">{questions[step].q}</div>
              <div className="flex flex-col gap-4 w-full">
                {questions[step].options.map((o, i) => (
                  <button key={i} onClick={() => handleSelect(o.value)} className="bg-primary-blue text-white font-bold rounded-full px-8 py-4 uppercase text-lg shadow-lg hover:bg-cta-red transition-all w-full">{o.label}</button>
                ))}
              </div>
            </div>
          ) : (
            <div className="bg-primary-blue text-white rounded-2xl shadow-lg p-8 flex flex-col items-center">
              <div className="font-bold text-2xl mb-2">{getResult().titre}</div>
              <div className="mb-4 text-lg text-white/90 text-center">{getResult().desc}</div>
              <a href="#footer-solutions" className="bg-cta-red text-white font-bold rounded-full px-8 py-4 uppercase text-lg shadow-lg hover:bg-white hover:text-cta-red transition-all">Discuter de mon projet avec un expert</a>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default OutilSelectionSolutionsSection;
