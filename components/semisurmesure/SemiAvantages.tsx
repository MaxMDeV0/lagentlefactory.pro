import React from "react";


const IconCheck = () => (
  <svg className="h-5 w-5 text-primary-blue" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeWidth={2} strokeLinecap="round" d="M5 13l4 4L19 7" />
  </svg>
);

const SemiAvantages: React.FC = () => (
  <section className="max-w-3xl mx-auto px-4 py-12">
    <h2 className="text-2xl md:text-3xl font-bold font-sans mb-8 text-primary-blue">Avantages</h2>
    <ul className="space-y-3 text-base">
      <li className="flex items-center gap-2 bg-white border border-gray-200 rounded-lg px-4 py-3"><IconCheck /> Plus de liberté créative</li>
      <li className="flex items-center gap-2 bg-white border border-gray-200 rounded-lg px-4 py-3"><IconCheck /> Maîtrise technique assurée</li>
      <li className="flex items-center gap-2 bg-white border border-gray-200 rounded-lg px-4 py-3"><IconCheck /> Délais raisonnables</li>
      <li className="flex items-center gap-2 bg-white border border-gray-200 rounded-lg px-4 py-3"><IconCheck /> Fabrication française contrôlée</li>
      <li className="flex items-center gap-2 bg-white border border-gray-200 rounded-lg px-4 py-3"><IconCheck /> Flexibilité sur les séries</li>
    </ul>
  </section>
);

export default SemiAvantages;
