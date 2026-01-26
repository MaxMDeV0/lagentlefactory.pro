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
  <section className="max-w-5xl mx-auto px-4 py-16">
    <h2 className="text-2xl md:text-3xl font-bold font-sans mb-8 text-primary-blue">Ce que vous adaptez</h2>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      <div className="flex flex-col gap-6">
        <div className="flex items-start gap-4 bg-white border border-gray-200 rounded-lg p-5">
          {/* IconRuler (outline, monochrome) */}
          <svg className="h-7 w-7 text-primary-blue" fill="none" viewBox="0 0 24 24" stroke="currentColor"><rect x="3" y="7" width="18" height="10" rx="2" strokeWidth={2} /><path strokeWidth={2} strokeLinecap="round" d="M7 7v2m4-2v2m4-2v2m-8 6v2m4-2v2m4-2v2" /></svg>
          <div>
            <h3 className="text-base font-bold text-primary-blue mb-1 font-sans">Matières</h3>
            <p className="text-primary-blue/90 text-sm">Coton bio, recyclé, technique, lin : sélection adaptée à votre projet.</p>
          </div>
        </div>
        <div className="flex items-start gap-4 bg-white border border-gray-200 rounded-lg p-5">
          {/* IconPaintbrush (outline, monochrome) */}
          <svg className="h-7 w-7 text-cta-red" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeWidth={2} strokeLinecap="round" d="M15.232 5.232l3.536 3.536M9 13l6.586-6.586a2 2 0 112.828 2.828L11.828 15.828A4 4 0 017 17H5a2 2 0 002-2v-2a4 4 0 014-4z" /></svg>
          <div>
            <h3 className="text-base font-bold text-primary-blue mb-1 font-sans">Coloris précis</h3>
            <p className="text-primary-blue/90 text-sm">Choix pantone ou nuancier, cohérence avec votre identité.</p>
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-6">
        <div className="flex items-start gap-4 bg-white border border-gray-200 rounded-lg p-5">
          {/* IconScissors (outline, monochrome) */}
          <svg className="h-7 w-7 text-primary-blue" fill="none" viewBox="0 0 24 24" stroke="currentColor"><circle cx="6" cy="6" r="3" strokeWidth={2} /><circle cx="6" cy="18" r="3" strokeWidth={2} /><path strokeWidth={2} strokeLinecap="round" d="M20 4L8.12 15.88M14.47 14.48L20 20" /></svg>
          <div>
            <h3 className="text-base font-bold text-primary-blue mb-1 font-sans">Finitions</h3>
            <p className="text-primary-blue/90 text-sm">Bord-côte, boutons, zip, cols, poches personnalisables.</p>
          </div>
        </div>
        <div className="flex items-start gap-4 bg-white border border-gray-200 rounded-lg p-5">
          {/* IconSparkles (outline, monochrome) */}
          <svg className="h-7 w-7 text-cta-red" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeWidth={2} strokeLinecap="round" d="M12 3v2m0 14v2m9-9h-2M5 12H3m15.364-6.364l-1.414 1.414M6.05 17.95l-1.414 1.414M17.95 17.95l-1.414-1.414M6.05 6.05L7.464 7.464" /><circle cx="12" cy="12" r="4" strokeWidth={2} /></svg>
          <div>
            <h3 className="text-base font-bold text-primary-blue mb-1 font-sans">Détails & identité</h3>
            <p className="text-primary-blue/90 text-sm">Broderie, étiquettes, marquage adaptés à votre image.</p>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default SemiAdaptations;
