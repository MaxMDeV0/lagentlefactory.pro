
import React from 'react';

const RedSection: React.FC = () => {
  return (
    <section className="bg-cta-red text-white py-14">
      <div className="max-w-[1200px] mx-auto px-6 flex flex-col md:flex-row items-center md:justify-between gap-8">
        <div className="md:w-2/3 w-full">
          <h3 className="font-extrabold text-2xl md:text-3xl leading-tight">
            Une solution pensée pour tous ceux<br className="hidden md:block" />qui veulent du textile de qualité.
          </h3>
        </div>

        <div className="md:w-1/3 w-full flex items-center justify-center md:justify-end gap-6" role="list">
          <div className="label bg-white/10 p-4 rounded-xl flex items-center justify-center transition-transform hover:scale-105" role="listitem" title="Fibre bio">
            <img
              src="media/fibres-bio.svg"
              alt="Fibre biologique"
              className="h-16 w-16"
            />
          </div>
          <div className="label bg-white/10 p-4 rounded-xl flex items-center justify-center transition-transform hover:scale-105" role="listitem" title="Made in France">
            <img
              src="media/made-in-france.svg"
              alt="Made in France"
              className="h-16 w-16"
            />
          </div>
          <div className="label bg-white/10 p-4 rounded-xl flex items-center justify-center transition-transform hover:scale-105" role="listitem" title="Fibres recyclées">
            <img
              src="media/fibres-recyclees.svg"
              alt="Fibres recyclées"
              className="h-16 w-16"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default RedSection;
