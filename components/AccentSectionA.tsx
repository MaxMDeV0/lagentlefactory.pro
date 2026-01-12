import React from 'react';

const AccentSectionA: React.FC = () => {
  return (
    <section className="bg-primary-blue text-white py-14">
      <div className="max-w-[1200px] mx-auto px-6 flex flex-col md:flex-row items-center gap-8">
        <div className="md:w-2/3">
          <h3 className="font-extrabold text-2xl md:text-3xl">Performance & longévité</h3>
          <p className="mt-3 text-white/90 leading-relaxed">
            Des pièces pensées pour l'effort et le quotidien : renforts techniques, coutures renforcées,
            et matières qui conservent forme et couleur après de nombreux lavages. Idéal pour les clubs et
            institutions qui demandent des standards de durabilité élevés.
          </p>
        </div>

        <div className="md:w-1/3 text-center">
          <img src="./public/media/made-in-france.svg" alt="Made in France" className="mx-auto h-20 w-20" />
        </div>
      </div>
    </section>
  );
};

export default AccentSectionA;
