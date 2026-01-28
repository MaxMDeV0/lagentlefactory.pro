
import React from 'react';
import { Link } from 'react-router-dom';

const Artisanat: React.FC = () => {
  return (
    <section
      className="relative bg-cover bg-center text-white py-24 min-h-[500px] flex items-center"
      style={{ backgroundImage: "url('media/artisanat-la-gentle-factory.png')" }}
    >
      {/* Background Fallback Overlay */}
      <div className="absolute inset-0 bg-primary-blue/40 md:bg-black/40 z-10" aria-hidden="true"></div>

      <div className="relative z-20 max-w-[1200px] mx-auto px-6 w-full">
        <div className="flex flex-col items-center text-center gap-8">
          <div className="w-full max-w-[900px]">
            <h2 className="font-extrabold text-4xl md:text-6xl mb-4 uppercase leading-tight drop-shadow-md">
              SAVOIR-FAIRE & FABRICATION
            </h2>
            <p className="text-white/95 text-xl md:text-2xl mb-10">Faire fabriquer en France, ça change tout.</p>
          </div>

          <div className="w-full max-w-[850px]   p-8 md:p-12 rounded-3xl ">
            <ul className=" text-left text-xl   leading-snug space-y-4 mb-10 list-disc md:text-2xl md:mx-auto md:w-[80%] md:pl-8" role="list">
              <li >
                <span>Ateliers situés en France (Vosges, Chessy, Roubaix).</span>
              </li>
              <li >
                <span>Coton bio, matières recyclées ou tissus techniques.</span>
              </li>
              <li >
                <span>Traçabilité totale, petites et moyennes séries.</span>
              </li>
              <li >
                <span>Un accompagnement humain et réactif.</span>
              </li>
            </ul>

            <div className="text-center">
              <Link
                to="/fabrication/nos-ateliers"
                className="inline-block bg-primary-blue hover:bg-[#1e2560] text-white px-8 py-4 rounded-full font-extrabold uppercase shadow-xl transition-all transform hover:-translate-y-1 text-lg"
              >
                EN SAVOIR PLUS SUR LA FABRICATION
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Artisanat;
