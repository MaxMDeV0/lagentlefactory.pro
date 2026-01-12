import React from "react";

const chiffres = [
  { value: "100%", label: "Made in France" },
  { value: "3", label: "régions textiles d'excellence" },
  { value: "45", label: "artisans partenaires" },
  { value: "15", label: "ans d'expérience moyenne" },
  { value: "10 000+", label: "vêtements/an" },
  { value: "98%", label: "taux de conformité qualité" },
  { value: "6-12", label: "semaines délai moyen" },
  { value: "50+", label: "séries limitées/an" }
];

const ChiffresFabricationSection: React.FC = () => (
  <section className="bg-cta-red text-white py-16 md:py-24">
    <div className="max-w-6xl mx-auto px-4">
      <h2 className="text-3xl md:text-4xl font-extrabold mb-8 text-center">Notre production en chiffres</h2>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
        {chiffres.map((c, i) => (
          <div key={i} className="bg-white/10 rounded-xl p-8 flex flex-col items-center shadow-lg">
            <div className="text-6xl font-black mb-2">{c.value}</div>
            <div className="text-xs uppercase tracking-widest text-white/80 text-center">{c.label}</div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default ChiffresFabricationSection;
