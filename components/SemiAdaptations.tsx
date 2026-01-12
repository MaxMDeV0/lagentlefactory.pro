import React from "react";

const IconRuler = () => (
  <svg className="h-8 w-8 text-primary-blue" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <rect x="3" y="7" width="18" height="10" rx="2" className="fill-slate-100" />
    <path strokeWidth={2} strokeLinecap="round" d="M7 7v2m4-2v2m4-2v2m-8 6v2m4-2v2m4-2v2" />
  </svg>
);
const IconPaintbrush = () => (
  <svg className="h-8 w-8 text-cta-red" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeWidth={2} strokeLinecap="round" d="M15.232 5.232l3.536 3.536M9 13l6.586-6.586a2 2 0 112.828 2.828L11.828 15.828A4 4 0 017 17H5a2 2 0 002-2v-2a4 4 0 014-4z" />
  </svg>
);
const IconScissors = () => (
  <svg className="h-8 w-8 text-primary-blue" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <circle cx="6" cy="6" r="3" className="fill-slate-100" />
    <circle cx="6" cy="18" r="3" className="fill-slate-100" />
    <path strokeWidth={2} strokeLinecap="round" d="M20 4L8.12 15.88M14.47 14.48L20 20" />
  </svg>
);
const IconSparkles = () => (
  <svg className="h-8 w-8 text-cta-red" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeWidth={2} strokeLinecap="round" d="M12 3v2m0 14v2m9-9h-2M5 12H3m15.364-6.364l-1.414 1.414M6.05 17.95l-1.414 1.414M17.95 17.95l-1.414-1.414M6.05 6.05L7.464 7.464" />
    <circle cx="12" cy="12" r="4" className="fill-slate-100" />
  </svg>
);

const SemiAdaptations: React.FC = () => (
  <section className="max-w-[1200px] mx-auto px-6 py-20">
    <h2 className="text-3xl font-semibold mb-10">Ce que vous adaptez</h2>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
      <div className="flex flex-col gap-8">
        <div className="flex items-start gap-4 bg-white border-l-4 border-cta-red rounded-lg p-6 shadow hover:shadow-lg transition group">
          <IconRuler />
          <div>
            <h3 className="text-xl font-bold text-primary-blue mb-2 group-hover:text-cta-red transition">Matières</h3>
            <p className="text-primary-blue/80">Coton bio, recyclé, technique, lin : sélectionnez la matière qui correspond à votre projet et à vos valeurs.</p>
          </div>
        </div>
        <div className="flex items-start gap-4 bg-white border-l-4 border-cta-red rounded-lg p-6 shadow hover:shadow-lg transition group">
          <IconPaintbrush />
          <div>
            <h3 className="text-xl font-bold text-primary-blue mb-2 group-hover:text-cta-red transition">Coloris précis</h3>
            <p className="text-primary-blue/80">Choix de coloris selon pantone ou nuancier, pour une cohérence parfaite avec votre identité visuelle.</p>
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-8">
        <div className="flex items-start gap-4 bg-white border-l-4 border-cta-red rounded-lg p-6 shadow hover:shadow-lg transition group">
          <IconScissors />
          <div>
            <h3 className="text-xl font-bold text-primary-blue mb-2 group-hover:text-cta-red transition">Finitions</h3>
            <p className="text-primary-blue/80">Bord-côte, boutons, zip, cols, poches… tous les éléments visibles sont personnalisables.</p>
          </div>
        </div>
        <div className="flex items-start gap-4 bg-white border-l-4 border-cta-red rounded-lg p-6 shadow hover:shadow-lg transition group">
          <IconSparkles />
          <div>
            <h3 className="text-xl font-bold text-primary-blue mb-2 group-hover:text-cta-red transition">Détails & identité</h3>
            <p className="text-primary-blue/80">Broderie, étiquettes, marquage… chaque détail esthétique et visuel peut être adapté à votre image.</p>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default SemiAdaptations;
