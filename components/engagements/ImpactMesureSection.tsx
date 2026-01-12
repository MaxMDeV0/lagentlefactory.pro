import React from "react";

const metrics = [
  { value: "100%", label: "production française" },
  { value: "85%", label: "matières certifiées responsables" },
  { value: "-75%", label: "émissions CO2 vs import" },
  { value: "45", label: "emplois locaux soutenus" },
  { value: "5+ ans", label: "durée de vie moyenne" },
  { value: "0", label: "travail d'enfants (audit annuel)" },
  { value: "98%", label: "satisfaction client" },
  { value: "10+ ans", label: "expérience textile responsable" }
];

const ImpactMesureSection: React.FC = () => (
  <section className="bg-primary-blue text-white py-16 md:py-24">
    <div className="max-w-6xl mx-auto px-4">
      <h2 className="text-3xl md:text-4xl font-extrabold mb-6 text-center">Notre impact en chiffres</h2>
      <h3 className="text-xl font-bold mb-8 text-center">Parce que les engagements se mesurent</h3>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
        {metrics.map((m, i) => (
          <div key={i} className="bg-white/10 rounded-xl p-6 flex flex-col items-center shadow-lg">
            <div className="text-5xl font-black mb-2">{m.value}</div>
            <div className="text-xs uppercase tracking-widest text-white/80 text-center">{m.label}</div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default ImpactMesureSection;
