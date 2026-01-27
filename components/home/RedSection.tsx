
import React from 'react';

const RedSection: React.FC = () => {
  return (
    <section className="bg-cta-red text-white py-14">
      <div className="max-w-[1200px] mx-auto px-6 flex flex-col md:flex-row items-center md:justify-between gap-8">
        <div className="md:w-2/3 w-full">
          <h3 className="font-extrabold text-2xl md:text-3xl leading-tight">
            Une solution pensée pour tous ceux<br className="hidden md:block" /> qui veulent du textile de qualité.
          </h3>
        </div>

        <div className="md:w-1/3 w-full flex items-center justify-center md:justify-end " role="list">
          <div className="label  p-4 rounded-xl flex items-center justify-center transition-transform " role="listitem" title="Fibre bio">
            <img
              src="./media/Picto_GF_BIO.svg"
              alt="Fibre biologique"
              className="h-24 w-32 "
              height={100}
            />
          </div>
          <div className="label  p-4 rounded-xl flex items-center justify-center transition-transform " role="listitem" title="Made in France">
            <img
              src="./media/Picto_GF_Made_In_France.svg"
              alt="Made in France"
              className="h-24 w-32"
            />
          </div>
          <div className="label p-4 rounded-xl flex items-center justify-center transition-transform " role="listitem" title="Fibres recyclées">
            <img
              src="./media/Picto_GF_Fibres_Recyclees.svg"
              alt="Fibres recyclées"
              className="h-24 w-36"
            />
          </div>
          <div className="label  py-4 pr-4 pl-2 rounded-xl flex items-center justify-center transition-transform " role="listitem" title="Fibres recyclées">
            <img
              src="./media/Picto_GF_Aide_Insertion.svg"
              alt="Aides insertion professionnelle"
              className="h-24 w-40"
            />
          </div>

        </div>
      </div>
    </section>
  );
};

export default RedSection;
