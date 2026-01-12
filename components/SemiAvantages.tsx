import React from "react";

const IconCheck = ({ ok = true }: { ok?: boolean }) => (
  <svg className={`h-6 w-6 ${ok ? "text-green-600" : "text-red-400"}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
    {ok ? (
      <path strokeWidth={2.5} strokeLinecap="round" d="M5 13l4 4L19 7" />
    ) : (
      <path strokeWidth={2.5} strokeLinecap="round" d="M6 18L18 6M6 6l12 12" />
    )}
  </svg>
);

const SemiAvantages: React.FC = () => (
  <section className="max-w-[1200px] mx-auto px-6 py-20">
    <h2 className="text-3xl font-semibold mb-10">Avantages</h2>
    <ul className="space-y-4 text-lg">
      <li className="flex items-center gap-3"><IconCheck /> Plus de liberté créative</li>
      <li className="flex items-center gap-3"><IconCheck /> Maîtrise technique assurée</li>
      <li className="flex items-center gap-3"><IconCheck /> Délais raisonnables</li>
      <li className="flex items-center gap-3"><IconCheck /> Fabrication française contrôlée</li>
      <li className="flex items-center gap-3"><IconCheck /> Flexibilité sur les séries</li>
    </ul>
  </section>
);

export default SemiAvantages;
